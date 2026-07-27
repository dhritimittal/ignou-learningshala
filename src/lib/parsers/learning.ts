import { decode } from "html-entities";

export function stripHtml(html: string = "") {
  return decode(
    html.replace(/<[^>]*>/g, "")
  )
    .replace(/\s+/g, " ")
    .trim();
}

export function extractParagraphs(html: string = "") {
  // First try list items
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

  // Otherwise fall back to paragraphs
  const pMatches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];

  // Skip the first paragraph because it is already used as the description
  return pMatches.slice(1).map((match) => ({
    title: "",
    body: stripHtml(match[1]),
  }));
}

export function extractDescription(html: string = "") {
  const match = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);

  return match ? stripHtml(match[1]) : "";
}