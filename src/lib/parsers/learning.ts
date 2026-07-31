import { decode } from "html-entities";

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export interface ContentItem {
  title: string;
  body: string;
}

export type ParsedBlock =
  | ({ type: "item" } & ContentItem)
  | {
      type: "table";
      headers: string[];
      rows: string[][];
    };

export interface ParsedContent {
  description: string;
  blocks: ParsedBlock[];
}

// ---------------------------------------------------------------------------
// Entity decoding & tag stripping
// ---------------------------------------------------------------------------
// These stay separate on purpose: decodeEntities() only ever touches text,
// stripHtml() is the only place tags get removed. Every other helper in this
// file inspects structure (tags) BEFORE calling stripHtml, so nothing loses
// <strong>/<ul>/<a> information until the very last step.

/** Decodes HTML entities (&amp;, &nbsp;, &#39;, &quot;, and the full HTML5 set). */
function decodeEntities(text: string): string {
  return decode(text);
}

/** Strips all tags and decodes entities. This is the ONLY function that discards markup. */
export function stripHtml(html: string = ""): string {
  return decodeEntities(html.replace(/<[^>]*>/g, ""))
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Removes purely presentational wrappers (<span>, <font>) while keeping their
 * inner content, so structural detection (e.g. "is there a <strong> right at
 * the start of this item?") isn't fooled by CMS markup like
 * `<span style="color:#000"><strong>Exam Mode</strong></span>`.
 * Semantic tags (strong, b, ul, ol, li, a, table...) are left untouched here.
 */
function removePresentationalMarkup(html: string): string {
  return html.replace(/<\/?(span|font)\b[^>]*>/gi, "");
}

// ---------------------------------------------------------------------------
// Title extraction ("Exam Mode -", "Exam Mode:", "Exam Mode", <b>Exam Mode</b>)
// ---------------------------------------------------------------------------

// Trailing punctuation on a bold title ("Exam Mode -" / "Exam Mode:") is never
// part of the title itself.
const TRAILING_TITLE_PUNCTUATION_RE = /[\s\-\u2013\u2014:]+$/;

// If the separator lived OUTSIDE the <strong>/<b> tag (e.g. "<strong>Exam
// Mode</strong>: Offline"), strip it from the leftover body text too.
const LEADING_SEPARATOR_RE = /^\s*[\-\u2013\u2014:]\s*/;

// Fallback for plain-text titles with no bold tag at all ("Exam Mode - Offline").
// Deliberately conservative: the candidate title must be short (<=60 chars),
// contain no sentence-ending punctuation, and the separator must be
// surrounded by whitespace on at least one side followed by real content —
// this avoids misfiring on ordinary sentences like "a well-rounded program".
const PLAIN_TITLE_SEPARATOR_RE = /^([^.!?]{1,60}?)\s*[\-\u2013\u2014:]\s+(\S[\s\S]*)$/;

function cleanTitle(rawTitleText: string): string {
  return rawTitleText.replace(TRAILING_TITLE_PUNCTUATION_RE, "").trim();
}

/**
 * Splits a raw HTML fragment (the inner content of one <li> or <p>) into a
 * title and the remaining raw HTML ("rest"). "rest" is still raw HTML, not
 * plain text — callers that need to look for a nested list must run on
 * "rest" before stripping it.
 */
function extractTitle(rawHtml: string): { title: string; rest: string } {
  // 1. Prefer <strong>/<b> at the very start of the fragment.
  const boldMatch = rawHtml.match(/^\s*<(strong|b)[^>]*>([\s\S]*?)<\/\1>\s*/i);

  if (boldMatch) {
    const title = cleanTitle(stripHtml(boldMatch[2]));
    const rest = rawHtml.slice(boldMatch[0].length).replace(LEADING_SEPARATOR_RE, "");
    return { title, rest };
  }

  // 2. No bold emphasis -> fall back to a leading separator in the plain text.
  const text = stripHtml(rawHtml);
  const separatorMatch = text.match(PLAIN_TITLE_SEPARATOR_RE);

  if (separatorMatch) {
    return { title: separatorMatch[1].trim(), rest: separatorMatch[2] };
  }

  // 3. No discernible title -> the whole fragment is body content.
  return { title: "", rest: rawHtml };
}

// ---------------------------------------------------------------------------
// Balanced tag scanning
// ---------------------------------------------------------------------------
// Both of these track open/close depth for one tag family so that nested
// occurrences of the SAME family don't get mistaken for the end of the outer
// element — the bug that broke the old parser's nested-list handling.

/**
 * Finds every TOP-LEVEL <li>...</li> in the given HTML and returns each
 * one's raw inner HTML. "Top-level" means not nested inside another <li>
 * (nested <li>s live inside a <ul>/<ol> inside the outer <li>'s inner HTML,
 * and are picked up later by recursing into that nested list separately).
 */
function extractTopLevelListItems(html: string): string[] {
  const items: string[] = [];
  const tagRe = /<(\/?)li\b[^>]*>/gi;
  let depth = 0;
  let itemStart = -1;
  let match: RegExpExecArray | null;

  while ((match = tagRe.exec(html)) !== null) {
    const isClosing = match[1] === "/";

    if (!isClosing) {
      if (depth === 0) itemStart = tagRe.lastIndex;
      depth++;
    } else if (depth > 0) {
      depth--;
      if (depth === 0 && itemStart !== -1) {
        items.push(html.slice(itemStart, match.index));
        itemStart = -1;
      }
    }
  }

  return items;
}

/**
 * Finds the first top-level <ul>...</ul> or <ol>...</ol> in the given HTML,
 * treating ul/ol as one combined family so a <ul> containing a nested <ol>
 * (or vice versa) is still balanced correctly. Returns null if there's none.
 */
function findFirstList(
  html: string
): { outerHtml: string; startIndex: number; endIndex: number } | null {
  const tagRe = /<(\/?)(ul|ol)\b[^>]*>/gi;
  let depth = 0;
  let start = -1;
  let match: RegExpExecArray | null;

  while ((match = tagRe.exec(html)) !== null) {
    const isClosing = match[1] === "/";

    if (!isClosing) {
      if (depth === 0) start = match.index;
      depth++;
    } else if (depth > 0) {
      depth--;
      if (depth === 0 && start !== -1) {
        return { outerHtml: html.slice(start, tagRe.lastIndex), startIndex: start, endIndex: tagRe.lastIndex };
      }
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// List parsing (recursive)
// ---------------------------------------------------------------------------

/**
 * Joins a set of items into one line of text, e.g. for folding a nested list
 * into its parent's body: "Title: body • Title: body • body".
 */
function joinItemsAsText(items: ContentItem[]): string {
  return items
    .map((item) => (item.title ? `${item.title}: ${item.body}` : item.body))
    .filter(Boolean)
    .join(" • ");
}

/**
 * Builds one ContentItem from a single list item's (or paragraph's) raw
 * inner HTML: splits off the title, then checks the leftover HTML for a
 * nested list. If one exists, it's parsed recursively via
 * extractNestedList() and then folded into this item's body as text (rather
 * than kept as a separate tree) — this keeps the item shape flat ({title,
 * body}) all the way down, however many levels of nesting the source has.
 */
function buildItem(rawHtml: string): ContentItem {
  const { title, rest } = extractTitle(rawHtml);
  const nested = findFirstList(rest);

  if (!nested) {
    return { title, body: stripHtml(rest) };
  }

  const surroundingText = stripHtml(rest.slice(0, nested.startIndex) + " " + rest.slice(nested.endIndex));
  const nestedText = joinItemsAsText(extractNestedList(nested.outerHtml));

  return { title, body: [surroundingText, nestedText].filter(Boolean).join(" • ") };
}

/**
 * Parses a <ul>/<ol> block (its full outer HTML, tags included) into items.
 * This is the recursive step: each item is built via buildItem(), which
 * calls back into extractNestedList() whenever it finds another list inside
 * an item, so lists of any depth are supported without special-casing depth.
 */
function extractNestedList(listOuterHtml: string): ContentItem[] {
  return extractTopLevelListItems(listOuterHtml).map(buildItem);
}

/** Parses ALL top-level list items found anywhere in a block of HTML. */
function extractList(html: string): ContentItem[] {
  return extractTopLevelListItems(html).map(buildItem);
}

// ---------------------------------------------------------------------------
// Paragraph parsing
// ---------------------------------------------------------------------------

/** The first <p> in the content is the section description, not an item. */
export function extractDescription(html: string = ""): string {
  const normalized = removePresentationalMarkup(html);
  const match = normalized.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  return match ? stripHtml(match[1]) : "";
}

/** Every <p> AFTER the first becomes an item (title/body split the same way as list items). */
function extractPlainParagraphItems(html: string): ContentItem[] {
  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
  return paragraphs.slice(1).map((match) => buildItem(match[1]));
}

// ---------------------------------------------------------------------------
// Table parsing
// ---------------------------------------------------------------------------

/**
 * Parses every top-level <table> in the HTML into its own block: first row
 * as headers, remaining rows as data. A content blob can (and often does)
 * contain more than one table back to back — each becomes a separate block
 * rather than flattening every table's rows into one.
 */
function extractTable(html: string): ParsedBlock[] {
  const tableMatches = [...html.matchAll(/<table[\s\S]*?>([\s\S]*?)<\/table>/gi)];

  return tableMatches.flatMap((tableMatch): ParsedBlock[] => {
    const rows = [...tableMatch[1].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
    if (rows.length === 0) return [];

    const parseCells = (row: string) =>
      [...row.matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((cell) => stripHtml(cell[1]));

    const headers = parseCells(rows[0][1]);
    const bodyRows = rows.slice(1).map((row) => parseCells(row[1]));

    if (bodyRows.length === 0) return [];

    return [{ type: "table", headers, rows: bodyRows }];
  });
}

// ---------------------------------------------------------------------------
// Main entry points
// ---------------------------------------------------------------------------

/**
 * Returns the blocks for a piece of CMS HTML: a list (recursively, with
 * nested children folded into item bodies) if one exists, otherwise
 * paragraphs (after the first) plus any tables — each table as its own
 * `{ type: "table" }` block, everything else as `{ type: "item" }`.
 */
/** True for an item block that has nothing left to show after stripping — e.g. a stray "<p>&nbsp;</p>" spacer paragraph. */
function isEmptyItem(block: ParsedBlock): boolean {
  return block.type === "item" && !block.title && !block.body;
}

export function extractBlocks(html: string = ""): ParsedBlock[] {
  const normalized = removePresentationalMarkup(html);

  const listItems = extractList(normalized);
  if (listItems.length > 0) {
    return listItems
      .map((item) => ({ type: "item" as const, ...item }))
      .filter((block) => !isEmptyItem(block));
  }

  return [
    ...extractPlainParagraphItems(normalized)
      .map((item) => ({ type: "item" as const, ...item }))
      .filter((block) => !isEmptyItem(block)),
    ...extractTable(normalized),
  ];
}

/** Convenience wrapper matching the { description, blocks } shape used across the app. */
export function parseContent(html: string = ""): ParsedContent {
  return {
    description: extractDescription(html),
    blocks: extractBlocks(html),
  };
}