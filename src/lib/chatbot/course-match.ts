import { CourseSummary } from "./types";

function containsPhrase(text: string, phrase: string): boolean {
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`\\b${escaped}\\b`, "i").test(text);
}

/**
 * Finds the most specific course mentioned in a message. "Most specific" =
 * longest matching term, so "distance mba" wins over the bare "mba" alias
 * when both are present in different courses' alias lists.
 */
export function detectCourseSlug(
  message: string,
  courses: CourseSummary[]
): string | undefined {
  const lower = message.toLowerCase();
  let best: { slug: string; length: number } | null = null;

  for (const course of courses) {
    const terms = [course.name, course.label, ...course.aliases]
      .filter((t): t is string => Boolean(t))
      .map((t) => t.toLowerCase());

    for (const term of terms) {
      if (containsPhrase(lower, term) && (!best || term.length > best.length)) {
        best = { slug: course.slug, length: term.length };
      }
    }
  }

  return best?.slug;
}
