export function parseKeyHighlights(html: string) {
  if (!html) return {};

  const data: Record<string, string> = {};

  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  const cellRegex = /<td[^>]*>([\s\S]*?)<\/td>/gi;

  const stripHtml = (text: string) =>
    text
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .trim();

  const rows = [...html.matchAll(rowRegex)];

  // Skip the header row
  for (const row of rows.slice(1)) {
    const cells = [...row[1].matchAll(cellRegex)];

    if (cells.length < 2) continue;

    const key = stripHtml(cells[0][1]);
    const value = stripHtml(cells[1][1]);

    data[key] = value;
  }

  return data;
}