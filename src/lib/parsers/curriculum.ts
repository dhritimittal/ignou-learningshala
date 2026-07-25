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
  subjects: CurriculumSubject[];
}

export function parseCurriculum(html: string) {
  if (!html) {
    return {
      semesters: [],
    };
  }

  const decode = (text: string) =>
    text
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/\s+/g, " ")
      .trim();

  // Extract every table row
  const tableRows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];

  const semesters: CurriculumSemester[] = [];

  let currentSemester: CurriculumSemester | null = null;

  for (const row of tableRows) {
    // Extract every cell from the row
    const cells = [
      ...row[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi),
    ].map((cell) => decode(cell[1]));

    if (cells.length < 2) continue;

    const left = cells[0];
    const right = cells[1];

    // Ignore table headings
    if (
      left.toLowerCase().includes("semester-wise") ||
      left.toLowerCase() === "credits" ||
      left.toLowerCase() === "job roles" ||
      left.toLowerCase() === "details"
    ) {
      continue;
    }

    // Semester row
    const semester = left.match(
      /^semester\s*-?\s*(i|ii|iii|iv|v|vi|vii|viii)$/i
    );

    if (semester) {
      currentSemester = {
        id: semesters.length + 1,
        title: left.replace(/\s*-\s*/, " "),
        credits: 0,
        subjects: [],
      };

      semesters.push(currentSemester);
      continue;
    }

    // Ignore rows before first semester
    if (!currentSemester) continue;

    // Parse code if present
    let name = left;
    let code = "";

    const codeMatch = left.match(/\(([^()]*)\)\s*$/);

    if (codeMatch) {
      code = codeMatch[1].trim();
      name = left.replace(/\([^()]*\)\s*$/, "").trim();
    }

    const credits = Number(right) || 0;

    currentSemester.subjects.push({
      id: `${currentSemester.id}-${currentSemester.subjects.length + 1}`,
      code,
      name,
      credits,
    });

    currentSemester.credits += credits;
  }

  return {
    semesters,
  };
}