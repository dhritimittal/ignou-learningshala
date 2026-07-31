// ─── HTML → chat-markdown ────────────────────────────────────────────────
// BubbleText (ChatBot.jsx) only understands **bold** and newlines. CMS
// answers arrive as HTML. This does a lightweight, lossy conversion —
// good enough for chat bubbles, not a general HTML-to-markdown library.

const ENTITY_MAP: Record<string, string> = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&rsquo;": "\u2019",
  "&lsquo;": "\u2018",
  "&rdquo;": "\u201d",
  "&ldquo;": "\u201c",
  "&mdash;": "\u2014",
  "&ndash;": "\u2013",
};

function decodeEntities(text: string): string {
  return text.replace(/&[a-z]+;|&#\d+;/gi, (m) => ENTITY_MAP[m] ?? m);
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function cellText(cellHtml: string): string {
  // Cells often pack multiple items separated by <br> (e.g. a semester's
  // subject list in one <td>) — split those into a comma list instead of
  // letting stripTags collapse them into one run-on string.
  return cellHtml
    .split(/<br\s*\/?>/gi)
    .map(stripTags)
    .filter(Boolean)
    .join(", ");
}

/**
 * <table> blocks get huge once every <td> is inlined (a 20-row syllabus
 * table becomes 500+ characters of near-noise). Convert each row to one
 * compact bullet line instead, and cap the row count — long tables get
 * "+N more" rather than eating the entire character budget.
 */
function tablesToBullets(html: string, maxRows = 8): string {
  return html.replace(/<table[\s\S]*?<\/table>/gi, (tableHtml) => {
    const rows = tableHtml.match(/<tr[\s\S]*?<\/tr>/gi) ?? [];
    const lines = rows
      .map((row) => {
        const cells = (row.match(/<t[dh][\s\S]*?<\/t[dh]>/gi) ?? []).map(cellText);
        return cells.filter(Boolean).join(" \u2014 ");
      })
      .filter(Boolean);

    const shown = lines.slice(0, maxRows);
    const remaining = lines.length - shown.length;
    const bulletBlock = shown.map((l) => `\u2022 ${l}`).join("\n");
    return `\n${bulletBlock}${remaining > 0 ? `\n\u2022 +${remaining} more \u2014 see the full course page for details` : ""}\n`;
  });
}

/** Cut at the last sentence-ending punctuation before maxLength, not mid-word. */
function truncateAtSentence(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;

  const slice = text.slice(0, maxLength);
  const lastBreak = Math.max(
    slice.lastIndexOf(". "),
    slice.lastIndexOf("! "),
    slice.lastIndexOf("? "),
    slice.lastIndexOf("\n")
  );

  const cut = lastBreak > maxLength * 0.4 ? slice.slice(0, lastBreak + 1) : slice.replace(/\s+\S*$/, "");
  return `${cut.trim()}\n\n(More detail on the course page — ask me anything specific!)`;
}

export function htmlToChatText(html: string | null | undefined, maxLength = 900): string {
  if (!html) return "";

  let text = tablesToBullets(html)
    // bold
    .replace(/<(strong|b)[^>]*>/gi, "**")
    .replace(/<\/(strong|b)>/gi, "**")
    // list items -> bullet lines
    .replace(/<li[^>]*>/gi, "\n\u2022 ")
    .replace(/<\/li>/gi, "")
    // block-level tags -> newline
    .replace(/<\/(p|div|h[1-6]|ul|ol)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    // strip everything else
    .replace(/<[^>]+>/g, "");

  text = decodeEntities(text);

  // collapse whitespace
  text = text
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trim())
    .filter((line, i, arr) => line.length > 0 || (i > 0 && arr[i - 1].length > 0))
    .join("\n")
    .trim();

  return truncateAtSentence(text, maxLength);
}