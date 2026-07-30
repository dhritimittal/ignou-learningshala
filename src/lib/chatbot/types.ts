// ─── Chatbot KB Types ──────────────────────────────────────────────────────

export interface CourseSummary {
  slug: string;
  name: string;
  label?: string;
  aliases: string[];
  duration?: string;
  eligibility?: string;
  fees?: Record<string, number>;
}

export interface KBEntry {
  keywords: string[];
  answer: string;
  chips?: string[];
  topic: Topic;
  // undefined => applies at university level, visible regardless of active course
  courseSlug?: string;
  source: "faq" | "fact" | "fallback";
}

export type Topic =
  | "about"
  | "programmes"
  | "fees"
  | "eligibility"
  | "duration"
  | "approvals"
  | "admission"
  | "curriculum"
  | "exams"
  | "career"
  | "lms"
  | "scholarship"
  | "emi"
  | "specializations"
  | "reviews"
  | "fallback";

export interface ChatContext {
  activeCourse?: string;
}

// Raw shapes we actually read off the CMS responses (only the fields we use —
// both endpoints return far more than this, we don't need to model all of it).

export interface RawFaqItem {
  id: number;
  question: string;
  answer: string; // HTML
}

export interface RawFaqCategory {
  category: string;
  cat_id?: string | number;
  priority?: number;
  items: RawFaqItem[];
}

export interface RawCourseListItem {
  name: string;
  slug: string;
  label?: string;
  duration?: string;
  eligibility?: string;
  compare_page_slug?: string;
  fees?: Record<string, number>;
}

export interface RawUniversity {
  university_name: string;
  university_slug: string;
  establishment_year?: string;
  university_type?: string;
  approvals?: { title: string; description?: string }[];
  sections?: Record<string, unknown>;
  course_data?: RawCourseListItem[];
  university_faqs?: RawFaqCategory[];
}

export interface RawCourse {
  name: string;
  slug: string;
  university_name?: string;
  university_slug?: string;
  duration?: string;
  eligibility?: string;
  eligibility_info?: string;
  credit_points?: string;
  fee_type_values?: Record<string, number>;
  fees_note?: string; // HTML
  sections_transformed?: Record<string, string>;
  university_faqs?: RawFaqCategory[];
  specialization_data?: { name: string; slug: string; fees?: Record<string, number> }[];
}