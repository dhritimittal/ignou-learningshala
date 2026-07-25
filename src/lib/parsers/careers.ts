export function parseCareer(html: string) {
  if (!html) {
    return {
      description: "",
      averagePackage: "",
      jobs: [],
    };
  }

  const strip = (text: string) =>
    text
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/\s+/g, " ")
      .trim();

  const rows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];

  const jobs = [];

  const cleanHtml = strip(html);

  const description = strip(html.split("<figure")[0] ?? "");

  const salaryMatch = cleanHtml.match(
    /₹?\s*\d+(?:\.\d+)?\s*(?:-|–|to)\s*₹?\s*\d+(?:\.\d+)?\s*LPA/i
  );

  const averagePackage = salaryMatch?.[0] ?? "";

  for (const row of rows) {
    const cells = [...row[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)];

    if (cells.length < 2) continue;

    const title = strip(cells[0][1]);
    const salary = strip(cells[1][1]);

    if (
      title === "Job Roles" ||
      salary === "Average Salary"
    ) {
      continue;
    }

    jobs.push({
      title,
      salary,
    });
  }

  return {
    description,
    averagePackage,
    jobs,
  };
}