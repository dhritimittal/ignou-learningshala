import * as cheerio from "cheerio";

export function parseSampleCertificate(html: string): string[] {
  const $ = cheerio.load(html);

  return $("li")
    .map((_, li) => $(li).text().trim())
    .get()
    .filter(Boolean);
}