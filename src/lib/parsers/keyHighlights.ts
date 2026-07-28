export function parseKeyHighlights(html: string) {
  if (!html) return {};

  // Only parse the first table
  const tableMatch = html.match(/<table[^>]*>([\s\S]*?)<\/table>/i);

  if (!tableMatch) return {};

  const table = tableMatch[0];

  const data: Record<string, string | string[]> = {};

  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  const cellRegex = /<td[^>]*>([\s\S]*?)<\/td>/gi;

  const stripHtml = (text: string) =>
    text
      .replace(/<\/(p|div|li|br|tr)>/gi, "\n")
      .replace(/<(p|div|li|br|tr)[^>]*>/gi, "")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/\n\s*\n/g, "\n")
      .replace(/[ \t]+/g, " ")
      .trim();

  const rows = [...table.matchAll(rowRegex)];

  for (const row of rows.slice(1)) {
    const cells = [...row[1].matchAll(cellRegex)];

    if (cells.length < 2) continue;

    const key = stripHtml(cells[0][1]);
    const rawValue = cells[1][1];

    const listItems = [...rawValue.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];

    if (listItems.length) {
      data[key] = listItems
        .map((item) => stripHtml(item[1]))
        .filter(Boolean);
    } else {
      data[key] = stripHtml(rawValue);
    }
  }

  return data;
}