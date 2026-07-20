import * as cheerio from "cheerio";

export interface AboutHeroData {
  description: string;
}

export function parseAboutUniversity(html: string): AboutHeroData {
  const $ = cheerio.load(html);

  const description =
    $("p")
      .map((_, el) => $(el).text().trim())
      .get()
      .find(Boolean) || "";

  return {
    description,
  };
}