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

  const jobs: { title: string; salary: string }[] = [];

  const cleanHtml = strip(html);

  const description = strip(html.split("<figure")[0] ?? "");

  for (const row of rows) {
    const cells = [...row[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)];

    if (cells.length < 2) continue;

    const title = strip(cells[0][1]);
    const salary = strip(cells[1][1]);

    const normalizedTitle = title.toLowerCase();
    const normalizedSalary = salary.toLowerCase();

    if (
      normalizedTitle.includes("job role") ||
      normalizedTitle.includes("job roles") ||
      normalizedSalary.includes("salary")
    ) {
      continue;
    }

    jobs.push({
      title,
      salary,
    });
  }

  const salaryRanges = jobs
    .map((job) => {
      const matches = job.salary.match(/[\d,]+/g);

      if (!matches || matches.length < 2) return null;

      return {
        min: Number(matches[0].replace(/,/g, "")),
        max: Number(matches[1].replace(/,/g, "")),
      };
    })
    .filter(
      (range): range is { min: number; max: number } => range !== null
    );

  let averagePackage = "";

  if (salaryRanges.length) {
    const overallMin = Math.min(...salaryRanges.map((r) => r.min));
    const overallMax = Math.max(...salaryRanges.map((r) => r.max));

    averagePackage = `₹${overallMin.toLocaleString("en-IN")} – ₹${overallMax.toLocaleString("en-IN")}`;
  }

  return {
    description,
    averagePackage,
    jobs,
  };
}