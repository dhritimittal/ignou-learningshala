import {
  buildCourseFactEntries,
  buildUniversityFactEntries,
  flattenFaqs,
} from "./normalize";
import { ChatContext, KBEntry, RawCourse, RawUniversity } from "./types";

const FALLBACK_ENTRY: KBEntry = {
  keywords: ["__fallback__"],
  answer:
    "Hmm, I don't have a specific answer for that right now. But our expert counsellors can help — they know this programme inside out.",
  chips: ["Talk to a Counsellor", "Programmes & Fees", "Admission Process"],
  topic: "fallback",
  source: "fallback",
};

/**
 * Builds the full KB for a university, optionally including a specific
 * course's FAQs + facts. Call again (and merge/cache) whenever a new course
 * gets detected mid-conversation — see useChatbotKB.
 */
export function buildKnowledgeBase(params: {
  university: RawUniversity;
  course?: RawCourse | null;
}): KBEntry[] {
  const { university, course } = params;
  const entries: KBEntry[] = [];

  entries.push(...buildUniversityFactEntries(university));
  entries.push(...flattenFaqs(university.university_faqs));

  if (course) {
    entries.push(...buildCourseFactEntries(course));
    entries.push(...flattenFaqs(course.university_faqs, course.slug));
  }

  entries.push(FALLBACK_ENTRY);
  return entries;
}

function scoreEntry(entry: KBEntry, lower: string): number {
  return entry.keywords.reduce((score, kw) => {
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(^|[\\s\\W_])${escaped}([\\s\\W_]|$)`, "i");
    return regex.test(lower) ? score + kw.length : score;
  }, 0);
}

/**
 * Course-scoped entries for the active course are boosted 20% so a fee
 * question resolves against the course you're looking at, not a generic
 * university-wide answer with the same keyword overlap.
 */
export function getBotReply(input: string, kb: KBEntry[], context: ChatContext = {}): KBEntry {
  const fallback = kb.find((e) => e.source === "fallback") ?? FALLBACK_ENTRY;
  if (!input.trim()) return fallback;

  const lower = input.toLowerCase();
  let best: KBEntry | null = null;
  let bestScore = 0;

  for (const entry of kb) {
    if (entry.source === "fallback") continue;
    // entries tagged for a different course than the active one are out of scope
    if (entry.courseSlug && context.activeCourse && entry.courseSlug !== context.activeCourse) continue;

    let score = scoreEntry(entry, lower);
    if (score === 0) continue;
    if (entry.courseSlug && entry.courseSlug === context.activeCourse) score *= 1.2;

    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return best ?? fallback;
}