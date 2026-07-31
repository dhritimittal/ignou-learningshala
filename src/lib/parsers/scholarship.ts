import * as cheerio from "cheerio";

export interface ScholarshipBlock {
  type: "richText" | "table";
  html?: string;
  headers?: string[];
  rows?: string[][];
}

export function parseScholarship(html: string): ScholarshipBlock[] {
  if (!html) return [];

  const $ = cheerio.load(html);

  // Remove inline styles
  $("*").removeAttr("style");

  // Unwrap spans
  $("span").each((_, el) => {
    $(el).replaceWith($(el).html() || "");
  });

  const blocks: ScholarshipBlock[] = [];

  $("body")
    .children()
    .each((_, element) => {
      const node = $(element);

      const nestedTable = node.find("table").first();
      const isTable = element.tagName === "table" || nestedTable.length > 0;

      // TABLE (supports both <table> directly and CKEditor's
      // <figure class="table"><table>...</table></figure> wrapper — or any
      // other wrapper, we don't rely on the class name, just presence of
      // a nested <table>)
      if (isTable) {
        const table = element.tagName === "table" ? node : nestedTable;
        const headers: string[] = [];
        const rows: string[][] = [];

        table.find("tr").each((rowIndex, tr) => {
          const cells: string[] = [];

          $(tr)
            .children("th, td")
            .each((_, td) => {
              cells.push($(td).html()?.trim() ?? "");
            });

          if (rowIndex === 0) {
            headers.push(
              ...cells.map((cell) =>
                cell
                  .replace(/<[^>]+>/g, "")
                  .replace(/\s+/g, " ")
                  .trim()
              )
            );
          } else {
            rows.push(cells);
          }
        });

        blocks.push({
          type: "table",
          headers,
          rows,
        });

        return;
      }

      // Rich text
      blocks.push({
        type: "richText",
        html: $.html(element),
      });
    });

  return blocks;
}