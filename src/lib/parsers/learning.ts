import { decode } from "html-entities";

export function stripHtml(html: string = "") {
  return decode(
    html.replace(/<[^>]*>/g, "")
  )
    .replace(/\s+/g, " ")
    .trim();
}

export function extractParagraphs(html: string = "") {
  const regex = /<li[^>]*>([\s\S]*?)<\/li>/gi;

  const matches = [...html.matchAll(regex)];

  return matches.map((match) => stripHtml(match[1]));
}

export function extractDescription(html: string = "") {
  const match = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);

  return match ? stripHtml(match[1]) : "";
}