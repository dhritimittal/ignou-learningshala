import * as cheerio from "cheerio";

export function parseWhyChoose(html: string = "") {
  const $ = cheerio.load(html);

  return $("li")
    .map((_, li) => {
      const strong = $(li).find("strong").first();

      const title = strong
        .text()
        .replace(/[:\-–—\s]+$/, "")
        .trim();

      strong.remove();

      const description = $(li)
        .text()
        .replace(/\s+/g, " ")
        .trim();

      return {
        title,
        description,
      };
    })
    .get();
}

export function stripHtml(html: string = "") {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
