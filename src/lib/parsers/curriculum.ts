export interface CurriculumSubject {
  id: string;
  code: string;
  name: string;
  credits: number;
}

export interface CurriculumSemester {
  id: number;
  title: string;
  credits: number;
  type: "Semester" | "Year";
  subjects: CurriculumSubject[];
}

// ---------------------------------------------------------------------------
// HTML table extraction
// ---------------------------------------------------------------------------

/** Strip tags/entities and collapse whitespace (incl. invisible unicode) from a cell's raw HTML. */
function decodeCell(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/[\u00A0\u200B-\u200D\uFEFF]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Turn raw HTML into an array of decoded table rows, each an array of cell text. */
function parseTableRows(html: string): string[][] {
  const rowMatches = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];

  return rowMatches.map((row) =>
    [...row[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((cell) =>
      decodeCell(cell[1])
    )
  );
}

// ---------------------------------------------------------------------------
// Heading detection ("Semester I", "First Year", "2nd Semester", "Year-II" ...)
// ---------------------------------------------------------------------------

// Rather than one regex per phrasing, we detect the *keyword* (Semester/Year)
// and the *number* (roman numeral / ordinal word / leading digit) separately,
// then combine them. New phrasings only require new entries in these maps.

const NUMBER_WORDS: Record<string, number> = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
  sixth: 6,
  seventh: 7,
  eighth: 8,
};

const ROMAN_NUMERALS: Record<string, number> = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  VI: 6,
  VII: 7,
  VIII: 8,
};

/** Resolve a token like "I", "1st", "First", "-IV" into a plain number, or null if it isn't one. */
function resolveNumber(token: string): number | null {
  const clean = token.trim().replace(/^-+|-+$/g, "").trim();
  if (!clean) return null;

  const word = NUMBER_WORDS[clean.toLowerCase()];
  if (word) return word;

  const roman = ROMAN_NUMERALS[clean.toUpperCase()];
  if (roman) return roman;

  const digits = clean.match(/^(\d+)/);
  if (digits) return parseInt(digits[1], 10);

  return null;
}

interface ParsedHeading {
  type: "Semester" | "Year";
  number: number;
}

/**
 * Detects a period heading regardless of phrasing: "Semester I", "Semester-IV",
 * "First Semester", "1st Semester", "Year I", "Year-II", "First Year", "1st Year", etc.
 * Returns null for anything that isn't a heading (including metadata/subject rows
 * that happen to contain the word "semester"/"year" without a resolvable number).
 */
function parseHeading(cellText: string): ParsedHeading | null {
  const match = cellText.match(/^(.*?)\b(Semester|Year)\b(.*)$/i);
  if (!match) return null;

  const [, before, keyword, after] = match;
  const numberToken = before.trim() || after.trim();
  const number = resolveNumber(numberToken);
  if (number === null) return null;

  const type =
    (keyword.charAt(0).toUpperCase() + keyword.slice(1).toLowerCase()) as
      | "Semester"
      | "Year";

  return { type, number };
}

// ---------------------------------------------------------------------------
// Metadata rows ("Credits", "Total Credits", "Semester-wise Syllabus...", ...)
// ---------------------------------------------------------------------------

const METADATA_EXACT = new Set([
  "credits",
  "total credits",
  "subjects",
  "details",
]);

const METADATA_PREFIXES = [
  "semester-wise",
  "year-wise",
  "syllabus",
  "curriculum",
];

/** True for structural/label rows that should never be treated as a subject. */
function isMetadataRow(cellText: string): boolean {
  const lower = cellText.toLowerCase();
  if (METADATA_EXACT.has(lower)) return true;
  return METADATA_PREFIXES.some((prefix) => lower.startsWith(prefix));
}

// ---------------------------------------------------------------------------
// Subject parsing
// ---------------------------------------------------------------------------

/** Parses "4" / "4.5" into a number. Empty or non-numeric values return null (not a subject row). */
function parseCredits(value: string): number | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  const num = Number(trimmed);
  return Number.isFinite(num) ? num : null;
}

/**
 * Splits a subject cell into { code, name }, supporting:
 *  - "MPH-001: Mathematical Methods"        (code-prefixed)
 *  - "Mathematical Methods (MPH-001)"       (code-suffixed)
 *  - "Mathematical Methods (MPH-001"        (code-suffixed, unclosed paren)
 *  - "Mathematical Methods"                 (no code)
 */
function parseSubjectCode(cellText: string): { code: string; name: string } {
  const prefixMatch = cellText.match(/^([A-Za-z0-9-]+)\s*:\s*(.+)$/);
  if (prefixMatch) {
    return { code: prefixMatch[1].trim(), name: prefixMatch[2].trim() };
  }

  const suffixMatch = cellText.match(/\(([^()]*)\)?\s*$/);
  if (suffixMatch && suffixMatch[1].trim()) {
    return {
      code: suffixMatch[1].trim(),
      name: cellText.slice(0, suffixMatch.index).trim(),
    };
  }

  return { code: "", name: cellText };
}

interface ParsedSubject {
  code: string;
  name: string;
  credits: number;
}

/** Returns the parsed subject for a row, or null if the row isn't a valid subject (e.g. non-numeric credits). */
function parseSubject(left: string, right: string): ParsedSubject | null {
  const credits = parseCredits(right);
  if (credits === null) return null;

  const { code, name } = parseSubjectCode(left);
  if (!name) return null;

  return { code, name, credits };
}

// ---------------------------------------------------------------------------
// Section helpers
// ---------------------------------------------------------------------------

function createSection(
  id: number,
  heading: ParsedHeading | null
): CurriculumSemester {
  return {
    id,
    title: heading ? `${heading.type} ${heading.number}` : "Curriculum",
    type: heading ? heading.type : "Semester",
    credits: 0,
    subjects: [],
  };
}

// ---------------------------------------------------------------------------
// Main pipeline
// ---------------------------------------------------------------------------

export function parseCurriculum(html: string) {
  if (!html) {
    return { semesters: [] };
  }

  const rows = parseTableRows(html);
  const semesters: CurriculumSemester[] = [];
  let currentSection: CurriculumSemester | null = null;

  for (const cells of rows) {
    if (cells.length < 2) continue;

    const [left, right] = cells;

    // 1. Period heading -> start a new section.
    const heading = parseHeading(left);
    if (heading) {
      currentSection = createSection(semesters.length + 1, heading);
      semesters.push(currentSection);
      continue;
    }

    // 2. Metadata row -> ignore entirely.
    if (isMetadataRow(left)) continue;

    // 3. Otherwise, try to parse it as a subject.
    const subject = parseSubject(left, right);
    if (!subject) continue;

    // No section yet (e.g. CMS provided a flat, ungrouped subject list) ->
    // create an implicit default section to hold it.
    if (!currentSection) {
      currentSection = createSection(semesters.length + 1, null);
      semesters.push(currentSection);
    }

    currentSection.subjects.push({
      id: `${currentSection.id}-${currentSection.subjects.length + 1}`,
      ...subject,
    });
    currentSection.credits += subject.credits;
  }

  return { semesters };
}