import { parse } from "node-html-parser";

export interface LatestUpdate {
  text: string;
  cta?: string;
  link?: string;
}

export function parseLatestUpdates(html: string): LatestUpdate[] {
  if (!html) return [];

  const root = parse(html);

  return root.querySelectorAll("p").map((paragraph) => {
    const anchor = paragraph.querySelector("a");

    const cta = anchor?.text.trim();
    const link = anchor?.getAttribute("href");

    let text = paragraph.text.trim();

    // Remove CTA text from the end
    if (cta) {
      text = text.replace(new RegExp(`${cta}\\s*$`), "");
    }

    // Remove trailing colon and normalize whitespace
    text = text
      .replace(/[:\s]+$/, "")
      .replace(/\s+/g, " ")
      .trim();

    return {
      text,
      cta,
      link,
    };
  });
}