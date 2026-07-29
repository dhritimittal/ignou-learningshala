import * as cheerio from "cheerio";
import type { CheerioAPI, Cheerio, Element } from "cheerio";

export interface TableData {
  headers: string[];
  rows: string[][];
  columnsCount: number;
}

export interface CareerBlock {
  type: "text" | "table";
  content?: string;
  tableData?: TableData;
}

export interface CareerParsedData {
  blocks: CareerBlock[];
}

export function parseCareer(html: string): CareerParsedData | null {
  if (!html) return null;

  const $ = cheerio.load(html, null, false);
  
  // Remove inline styles that override our Tailwind classes
  $('*').removeAttr('style');

  const blocks: CareerBlock[] = [];

  let currentTextHtml = "";

  const pushText = () => {
    if (currentTextHtml.trim()) {
      blocks.push({ type: "text", content: currentTextHtml.trim() });
      currentTextHtml = "";
    }
  };

  $.root().children().each((_, el) => {
    const $el = $(el);
    const tagName = el.tagName.toLowerCase();

    if (tagName === "figure" && $el.hasClass("table")) {
      pushText();
      const $table = $el.find("table");
      if ($table.length > 0) {
        parseTable($table, blocks, $);
      }
    } else if (tagName === "table") {
      pushText();
      parseTable($el, blocks, $);
    } else {
      // Accumulate text blocks
      currentTextHtml += $.html(el);
    }
  });

  pushText();

  // If no blocks parsed but html has content, fallback to text block
  if (blocks.length === 0 && html.trim()) {
    blocks.push({ type: "text", content: html.trim() });
  }

  return { blocks };
}

function extractCellText($td: cheerio.Cheerio): string {
  let htmlContent = $td.html() || "";
  htmlContent = htmlContent.replace(/<\/li>|<\/p>|<\/div>|<br\s*\/?>/gi, "|||");
  
  const rawText = cheerio.load(htmlContent).text();
  
  return rawText
    .split("|||")
    .map(s => s.trim())
    .filter(Boolean)
    .join(" • ");
}

function parseTable($table: cheerio.Cheerio, blocks: CareerBlock[], $: cheerio.CheerioAPI) {
  const headers: string[] = [];
  const rows: string[][] = [];

  const $trs = $table.find("tr");
  if ($trs.length > 0) {
    const $firstTr = $($trs[0]);
    $firstTr.find("td, th").each((_, td) => {
      headers.push(extractCellText($(td)));
    });

    for (let i = 1; i < $trs.length; i++) {
      const rowData: string[] = [];
      $($trs[i]).find("td, th").each((_, td) => {
        rowData.push(extractCellText($(td)));
      });
      rows.push(rowData);
    }

    blocks.push({
      type: "table",
      tableData: {
        headers,
        rows,
        columnsCount: headers.length || ($trs.length > 1 ? rows[0]?.length : 0) || 0
      }
    });
  }
}