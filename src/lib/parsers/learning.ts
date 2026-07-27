import { decode } from "html-entities";

export function stripHtml(html: string = "") {
  return decode(
    html.replace(/<[^>]*>/g, "")
  )
    .replace(/\s+/g, " ")
    .trim();
}

export function extractParagraphs(html: string = "") {
  const items: { title: string; body: string }[] = [];

  // Lists
  const liMatches = [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];

  if (liMatches.length > 0) {
    return liMatches.map((match) => {
      const text = stripHtml(match[1]);

      const colonIndex = text.indexOf(":");

      if (colonIndex !== -1) {
        return {
          title: text.slice(0, colonIndex).trim(),
          body: text.slice(colonIndex + 1).trim(),
        };
      }

      return {
        title: "",
        body: text,
      };
    });
  }

  // Paragraphs
  const pMatches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];

  pMatches.slice(1).forEach((match) => {
    items.push({
      title: "",
      body: stripHtml(match[1]),
    });
  });

  // Tables
  const tableRows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];

  tableRows.forEach((row, index) => {
    const cells = [
      ...row[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi),
    ].map((c) => stripHtml(c[1]));

    if (!cells.length) return;

    // Skip header row
    if (index === 0) return;

    items.push({
      title: cells[0],
      body: cells.slice(1).join(" • "),
    });
  });

  return items;
}

export function extractDescription(html: string = "") {
  const match = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);

  return match ? stripHtml(match[1]) : "";
}