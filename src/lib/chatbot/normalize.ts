import { htmlToChatText } from "./htmlToText";
import {
  CourseSummary,
  KBEntry,
  RawCourse,
  RawCourseListItem,
  RawFaqCategory,
  RawUniversity,
  Topic,
} from "./types";

// ─── Keyword extraction (for FAQ questions) ─────────────────────────────────

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "do", "does", "did", "have", "has", "had", "will", "would", "can", "could",
  "should", "may", "might", "must", "shall",
  "i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them",
  "my", "your", "his", "its", "our", "their",
  "and", "or", "but", "if", "of", "at", "by", "for", "with", "about", "against",
  "between", "into", "through", "during", "before", "after", "to", "from",
  "in", "on", "off", "over", "under", "again", "further", "then", "once",
  "this", "that", "these", "those", "which", "who", "whom",
  "any", "all", "each", "so", "than", "too", "just", "no", "there", "here",
]);

export function extractKeywords(question: string): string[] {
  const words = question
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));
  return Array.from(new Set(words));
}

// ─── Topic classification + chips ───────────────────────────────────────────
// Single source of truth: every entry (FAQ or fact) gets tagged with one of
// these, and chips are derived from the topic — never from raw category
// strings, since university-level and course-level FAQ categories use
// different names for the same thing (e.g. "EMI & Financial Support" vs
// "Fees").

const CATEGORY_TOPIC_MAP: Record<string, Topic> = {
  "about university": "about",
  "about course": "about",
  approvals: "approvals",
  "courses offered": "programmes",
  admission: "admission",
  "eligibility criteria": "eligibility",
  fees: "fees",
  "emi & financial support": "fees",
  "lms & study materials": "lms",
  examination: "exams",
  "career & placement": "career",
};

function topicForCategory(category: string): Topic {
  return CATEGORY_TOPIC_MAP[category.toLowerCase()] ?? "about";
}

const TOPIC_CHIPS: Record<Topic, string[]> = {
  about: ["Programmes & Fees", "Approvals", "Talk to a Counsellor"],
  programmes: ["Fees", "Talk to a Counsellor"],
  fees: ["Eligibility", "EMI Options", "Talk to a Counsellor"],
  eligibility: ["Fees", "Admission Process", "Talk to a Counsellor"],
  duration: ["Fees", "Curriculum", "Talk to a Counsellor"],
  approvals: ["Programmes & Fees", "Talk to a Counsellor"],
  admission: ["Eligibility", "Fees", "Talk to a Counsellor"],
  curriculum: ["Career Scope", "Fees", "Talk to a Counsellor"],
  exams: ["Curriculum", "Talk to a Counsellor"],
  career: ["Placements", "Fees", "Talk to a Counsellor"],
  lms: ["Curriculum", "Talk to a Counsellor"],
  scholarship: ["Fees", "EMI Options", "Talk to a Counsellor"],
  emi: ["Fees", "Scholarships", "Talk to a Counsellor"],
  specializations: ["Fees", "Curriculum", "Talk to a Counsellor"],
  reviews: ["Programmes & Fees", "Talk to a Counsellor"],
  fallback: ["Talk to a Counsellor", "Programmes & Fees", "Admission Process"],
};

function chipsForTopic(topic: Topic): string[] {
  return TOPIC_CHIPS[topic];
}

// ─── FAQ flattening (primary KB source) ─────────────────────────────────────

export function flattenFaqs(
  categories: RawFaqCategory[] | undefined,
  courseSlug?: string
): KBEntry[] {
  if (!categories) return [];
  const entries: KBEntry[] = [];

  for (const category of categories) {
    const topic = topicForCategory(category.category);
    for (const item of category.items ?? []) {
      const keywords = extractKeywords(item.question);
      if (keywords.length === 0) continue;
      entries.push({
        keywords,
        answer: htmlToChatText(item.answer),
        chips: chipsForTopic(topic),
        topic,
        courseSlug,
        source: "faq",
      });
    }
  }

  return entries;
}

// ─── Course list -> CourseSummary (with aliases for the matcher) ───────────

function aliasesForCourse(course: RawCourseListItem): string[] {
  const aliases = new Set<string>();

  if (course.label) aliases.add(course.label.toLowerCase());
  if (course.compare_page_slug) {
    aliases.add(course.compare_page_slug.replace(/-/g, " "));
  }
  aliases.add(course.slug.replace(/-/g, " "));

  const withoutMode = course.name.replace(/^(online|distance)\s+/i, "").trim();
  if (withoutMode && withoutMode.toLowerCase() !== course.name.toLowerCase()) {
    aliases.add(withoutMode.toLowerCase());
  }

  aliases.delete("");
  return Array.from(aliases);
}

export function buildCourseSummaries(courseData: RawCourseListItem[] | undefined): CourseSummary[] {
  if (!courseData) return [];
  return courseData.map((course) => ({
    slug: course.slug,
    name: course.name,
    label: course.label,
    aliases: aliasesForCourse(course),
    duration: course.duration,
    eligibility: course.eligibility,
    fees: course.fees,
  }));
}

// ─── Shared keyword sets (synonyms) per topic ──────────────────────────────
// Broad on purpose: word-boundary matching means "approvals" won't match a
// keyword list containing only "approval" — every plural/variant a real
// user might type needs to be listed explicitly.

const TOPIC_KEYWORDS: Record<string, string[]> = {
  about: ["about", "overview", "tell", "info", "information", "details", "describe"],
  programmes: ["programmes", "programs", "courses", "list", "available", "offer"],
  fees: ["fee", "fees", "cost", "costs", "price", "tuition", "charges"],
  eligibility: ["eligibility", "eligible", "qualification", "qualify", "criteria", "requirement", "requirements", "apply"],
  duration: ["duration", "long", "years", "year", "semester", "semesters", "months"],
  approvals: [
    "approval", "approvals", "approved", "recognised", "recognized", "recognition",
    "valid", "validity", "accreditation", "accredited", "ugc", "aicte", "naac", "nirf", "deb",
  ],
  admission: [
    "admission", "admissions", "apply", "application", "enroll", "enrol",
    "enrollment", "enrolment", "register", "registration", "join",
  ],
  curriculum: ["syllabus", "curriculum", "subjects", "modules", "topics", "structure"],
  exams: ["exam", "exams", "examination", "examinations", "assessment", "assignment", "test", "pattern"],
  career: [
    "career", "careers", "job", "jobs", "placement", "placements", "salary",
    "package", "companies", "recruiters", "scope", "opportunities", "hire", "hiring",
  ],
  lms: [
    "lms", "material", "materials", "portal", "classes", "elearning",
    "gyankosh", "samarth", "lectures", "study",
  ],
  scholarship: ["scholarship", "scholarships", "discount", "aid", "stipend", "waiver", "exemption"],
  emi: ["emi", "installment", "installments", "loan", "finance", "financing"],
  specializations: ["specialisation", "specialization", "specializations", "specialisations", "stream", "major", "elective"],
};

// ─── HTML section mining ────────────────────────────────────────────────────

function sectionText(
  sections: Record<string, unknown> | undefined,
  key: string,
  maxLength = 800
): string | null {
  const raw = sections?.[key];
  if (typeof raw !== "string" || raw.trim().length === 0) return null;
  const text = htmlToChatText(raw, maxLength);
  return text.length > 0 ? text : null;
}

function formatFees(fees: Record<string, number> | undefined): string | null {
  if (!fees) return null;
  const parts = Object.entries(fees)
    .filter(([, v]) => typeof v === "number" && v > 0)
    .map(([k, v]) => `${k.replace(/_/g, " ")}: \u20b9${v.toLocaleString("en-IN")}`);
  return parts.length ? parts.join(" \u2022 ") : null;
}

function emiText(sections: Record<string, unknown> | undefined, entityName: string): string | null {
  const rich = sectionText(sections, "University_Emi", 600);
  if (rich) return rich;
  if (sections?.emiPartners === "Yes") {
    return `Yes, **${entityName}** offers EMI payment options through partnered providers. Ask a counsellor for current EMI plans and eligibility.`;
  }
  return null;
}

// ─── University-level fact entries ──────────────────────────────────────────

export function buildUniversityFactEntries(university: RawUniversity): KBEntry[] {
  const entries: KBEntry[] = [];
  const courses = university.course_data ?? [];
  const sections = university.sections as Record<string, unknown> | undefined;
  const name = university.university_name;

  if (courses.length > 0) {
    const list = courses
      .map((c) => `\u2022 **${c.name}** \u2014 ${c.duration ?? ""}${formatFees(c.fees) ? ` \u2022 ${formatFees(c.fees)}` : ""}`)
      .join("\n");
    entries.push({
      keywords: TOPIC_KEYWORDS.programmes,
      answer: `${name} offers the following programmes:\n\n${list}\n\nWhich one would you like to know more about?`,
      chips: chipsForTopic("programmes"),
      topic: "programmes",
      source: "fact",
    });
  }

  if (university.approvals && university.approvals.length > 0) {
    const titles = university.approvals.map((a) => a.title);
    entries.push({
      keywords: [...TOPIC_KEYWORDS.approvals, ...titles.join(" ").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)],
      answer: `**${name}** holds the following approvals/accreditations: ${titles.join(" \u2022 ")}.`,
      chips: chipsForTopic("approvals"),
      topic: "approvals",
      source: "fact",
    });
  }

  const about = sectionText(sections, "About_University", 800);
  if (about) {
    entries.push({
      keywords: TOPIC_KEYWORDS.about,
      answer: about,
      chips: chipsForTopic("about"),
      topic: "about",
      source: "fact",
    });
  }

  const admission = sectionText(sections, "Admission_Process", 900);
  if (admission) {
    entries.push({
      keywords: TOPIC_KEYWORDS.admission,
      answer: admission,
      chips: chipsForTopic("admission"),
      topic: "admission",
      source: "fact",
    });
  }

  const scholarship = sectionText(sections, "Scholarships_Program", 800);
  if (scholarship) {
    entries.push({
      keywords: TOPIC_KEYWORDS.scholarship,
      answer: scholarship,
      chips: chipsForTopic("scholarship"),
      topic: "scholarship",
      source: "fact",
    });
  }

  const lms = sectionText(sections, "Learning_Management_SystemLMS", 800);
  if (lms) {
    entries.push({
      keywords: TOPIC_KEYWORDS.lms,
      answer: lms,
      chips: chipsForTopic("lms"),
      topic: "lms",
      source: "fact",
    });
  }

  const exams = sectionText(sections, "Examination_Pattern", 800);
  if (exams) {
    entries.push({
      keywords: TOPIC_KEYWORDS.exams,
      answer: exams,
      chips: chipsForTopic("exams"),
      topic: "exams",
      source: "fact",
    });
  }

  const career = sectionText(sections, "Placements_Details", 1000);
  if (career) {
    entries.push({
      keywords: TOPIC_KEYWORDS.career,
      answer: career,
      chips: chipsForTopic("career"),
      topic: "career",
      source: "fact",
    });
  }

  const emi = emiText(sections, name);
  if (emi) {
    entries.push({
      keywords: TOPIC_KEYWORDS.emi,
      answer: emi,
      chips: chipsForTopic("emi"),
      topic: "emi",
      source: "fact",
    });
  }

  return entries;
}

// ─── Course-level fact entries ──────────────────────────────────────────────

export function buildCourseFactEntries(course: RawCourse): KBEntry[] {
  const entries: KBEntry[] = [];
  const slug = course.slug;
  const sections = course.sections_transformed;

  const feesLine = formatFees(course.fee_type_values);
  if (feesLine) {
    entries.push({
      keywords: TOPIC_KEYWORDS.fees,
      answer: `**${course.name}** fee breakdown:\n\n${feesLine.split(" \u2022 ").map((l) => `\u2022 ${l}`).join("\n")}${
        course.fees_note ? `\n\n${htmlToChatText(course.fees_note, 400)}` : ""
      }`,
      chips: chipsForTopic("fees"),
      topic: "fees",
      courseSlug: slug,
      source: "fact",
    });
  }

  const eligibility = course.eligibility_info || course.eligibility;
  if (eligibility) {
    entries.push({
      keywords: TOPIC_KEYWORDS.eligibility,
      answer: `Eligibility for **${course.name}**: ${eligibility}.`,
      chips: chipsForTopic("eligibility"),
      topic: "eligibility",
      courseSlug: slug,
      source: "fact",
    });
  }

  if (course.duration) {
    entries.push({
      keywords: TOPIC_KEYWORDS.duration,
      answer: `**${course.name}** duration: ${course.duration}${course.credit_points ? ` (${course.credit_points})` : ""}.`,
      chips: chipsForTopic("duration"),
      topic: "duration",
      courseSlug: slug,
      source: "fact",
    });
  }

  if (course.specialization_data && course.specialization_data.length > 0) {
    const names = course.specialization_data.map((s) => s.name).join(" \u2022 ");
    entries.push({
      keywords: TOPIC_KEYWORDS.specializations,
      answer: `**${course.name}** specialisations: ${names}.`,
      chips: chipsForTopic("specializations"),
      topic: "specializations",
      courseSlug: slug,
      source: "fact",
    });
  }

  const about = sectionText(sections, "About_University", 800);
  if (about) {
    entries.push({
      keywords: TOPIC_KEYWORDS.about,
      answer: about,
      chips: chipsForTopic("about"),
      topic: "about",
      courseSlug: slug,
      source: "fact",
    });
  }

  const admission = sectionText(sections, "Admission_Process", 900);
  if (admission) {
    entries.push({
      keywords: TOPIC_KEYWORDS.admission,
      answer: admission,
      chips: chipsForTopic("admission"),
      topic: "admission",
      courseSlug: slug,
      source: "fact",
    });
  }

  const scholarship = sectionText(sections, "Scholarships_Program", 800);
  if (scholarship) {
    entries.push({
      keywords: TOPIC_KEYWORDS.scholarship,
      answer: scholarship,
      chips: chipsForTopic("scholarship"),
      topic: "scholarship",
      courseSlug: slug,
      source: "fact",
    });
  }

  const curriculum = sectionText(sections, "Syllabus_Curriculum", 1500);
  if (curriculum) {
    entries.push({
      keywords: TOPIC_KEYWORDS.curriculum,
      answer: curriculum,
      chips: chipsForTopic("curriculum"),
      topic: "curriculum",
      courseSlug: slug,
      source: "fact",
    });
  }

  const exams = sectionText(sections, "Examination_Pattern", 800);
  if (exams) {
    entries.push({
      keywords: TOPIC_KEYWORDS.exams,
      answer: exams,
      chips: chipsForTopic("exams"),
      topic: "exams",
      courseSlug: slug,
      source: "fact",
    });
  }

  const career = sectionText(sections, "Job_Opportunities", 1000);
  if (career) {
    entries.push({
      keywords: TOPIC_KEYWORDS.career,
      answer: career,
      chips: chipsForTopic("career"),
      topic: "career",
      courseSlug: slug,
      source: "fact",
    });
  }

  const lms = sectionText(sections, "Learning_Management_SystemLMS", 800);
  if (lms) {
    entries.push({
      keywords: TOPIC_KEYWORDS.lms,
      answer: lms,
      chips: chipsForTopic("lms"),
      topic: "lms",
      courseSlug: slug,
      source: "fact",
    });
  }

  const emi = emiText(sections, course.name);
  if (emi) {
    entries.push({
      keywords: TOPIC_KEYWORDS.emi,
      answer: emi,
      chips: chipsForTopic("emi"),
      topic: "emi",
      courseSlug: slug,
      source: "fact",
    });
  }

  return entries;
}