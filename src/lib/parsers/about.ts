import * as cheerio from "cheerio";

export interface AboutData {
  heading: string;
  paragraphs: string[];
  stats: {
    label: string;
    value: string;
    sub: string;
  }[];
}

export function parseAbout(html: string): AboutData {
  const $ = cheerio.load(html);

  const paragraphs = $("p")
    .map((_, el) => $(el).text().trim())
    .get();

  const stats: AboutData["stats"] = [];

  $("li").each((_, li) => {
    const strong = $(li).find("strong").first().text().trim();

    if (!strong) return;

    const value = $(li)
      .text()
      .replace(strong, "")
      .replace(/^:/, "")
      .trim();

    stats.push({
      label: strong.replace(/:$/, ""),
      value,
      sub: "",
    });
  });

  return {
    heading: $("h3").first().text().trim() || "About",
    paragraphs,
    stats,
  };
}