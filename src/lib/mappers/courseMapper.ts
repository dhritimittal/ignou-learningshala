// src/lib/mappers/courseMapper.ts
import { getMediaUrl } from "../utils/media";
import { parseAboutUniversity } from "../parsers/aboutUniversity";
import { parseKeyHighlights } from "../parsers/keyHighlights";
import { parseCurriculum } from "../parsers/curriculum";
import { parseCareer } from "../parsers/careers";
import { extractBlocks, extractDescription } from "../parsers/learning";
import { mapFAQs } from "./faqMapper";


function getFee(fees: any) {
  if (!fees) return "";

  if (fees.semester_fee)
    return `₹${fees.semester_fee.toLocaleString()}/Semester`;

  if (fees.yearly_fee)
    return `₹${fees.yearly_fee.toLocaleString()}/Year`;

  if (fees.full_fee)
    return `₹${fees.full_fee.toLocaleString()}`;

  return "";
}

function getProgrammeLabel(name: string) {
  if (!name) return "PROGRAMME";

  if (
    name.includes("MBA") ||
    name.includes("MCA") ||
    name.includes("M.Com") ||
    name.includes("M.Sc") ||
    name.includes("MA") ||
    name.includes("MSW")
  ) {
    return "PG PROGRAMME";
  }

  if (
    name.includes("BBA") ||
    name.includes("BCA") ||
    name.includes("B.Com") ||
    name.includes("BA") ||
    name.includes("B.Sc")
  ) {
    return "UG PROGRAMME";
  }

  if (name.includes("Diploma")) return "DIPLOMA PROGRAMME";
  if (name.includes("Certificate")) return "CERTIFICATE PROGRAMME";

  return "PROGRAMME";
}

export function mapCourseHero(api: any, university: any ) {
  const course = api.data;

  const aboutSection = course.sections.find(
    (section: any) => section.section_key === "About_University"
  );

  const reviewsSummary = mapReviews(api, university);

  const about = parseAboutUniversity(
    aboutSection?.props?.content ?? ""
  );

  return {
    heroImage: university.banner,

    badge: getProgrammeLabel(course.name),

    name: course.name,

    universityName: course.university_name,

    universitySlug: course.university_slug,

    description: about.description,

    duration: course.duration,

    eligibility: course.eligibility,

    credits: course.credit_points,

    fee: getFee(course.fee_type_values),

    brochure: getMediaUrl(course.brochure_file),

    // Placeholder values until CMS exposes them
    students: "1.2L+",
    mode: university.educationMode,
    approvals: university.approvals,
    rating: reviewsSummary?.averageRating ?? 0,
    reviewCount: reviewsSummary?.totalReviews ?? 0,
    location: university.city,
  };
}

function getSnapshotHtml(api: any) {
  // Course page
  if (Array.isArray(api.data?.sections)) {
    const section = api.data.sections.find(
      (s: any) => s.section_key === "Key_Highlights"
    );

    return section?.props?.content ?? "";
  }

  // University page
  if (api.data?.data?.sections?.Key_Highlights) {
    return api.data.data.sections.Key_Highlights;
  }

  return "";
}

function normalizeValue(value: any) {
  if (value == null) return null;

  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  if (typeof value === "string") {
    const trimmed = value.trim();

    if (
      trimmed === "" ||
      trimmed === "-" ||
      trimmed === "--" ||
      trimmed === "N/A"
    ) {
      return null;
    }

    return trimmed;
  }

  return value;
}

export function mapSnapshot(api: any) {
  const html = getSnapshotHtml(api);

  const highlights = parseKeyHighlights(html);

  return Object.entries(highlights)
    .map(([label, value]) => ({
      label: label.trim(),
      value: normalizeValue(value),
    }))
    .filter((item) => item.value);
}

function getSemesterCount(duration: string): number | null {
  if (!duration) return null;

  const text = duration.toLowerCase();

  // "2 Years" -> 4 semesters
  const yearMatch = text.match(/(\d+)\s*year/);
  if (yearMatch) {
    return Number(yearMatch[1]) * 2;
  }

  // "6 Semesters"
  const semesterMatch = text.match(/(\d+)\s*semester/);
  if (semesterMatch) {
    return Number(semesterMatch[1]);
  }

  return null;
}

export function mapFees(api: any) {
  const course = api.data;

  const feeSection = course.sections.find(
    (section: any) => section.section_key === "Course_Fees"
  );

  const scholarshipSection = course.sections.find(
    (section: any) => section.section_key === "Scholarships_Program"
  );

  const fees = course.fee_type_values ?? {};

  let semesterFee = Number(fees.semester_fee ?? 0);
  const registrationFee = Number(fees.registration_fee ?? 0);
  const totalFee = Number(fees.full_fee ?? 0);

  if (!semesterFee) {
    const semesters = getSemesterCount(course.duration);

    if (semesters && totalFee) {
      semesterFee = Math.round(totalFee / semesters);
    }
  }

  if (!totalFee && !semesterFee && !registrationFee) {
    return null;
  }

  return {
    totalFee,

    semesterFee,

    registrationFee,

    emi:
      Math.round(semesterFee / 6),

    feeNote:
      feeSection?.props?.content ?? "",

    scholarship:
      scholarshipSection?.props?.content ?? "",

    brochure:
      getMediaUrl(course.brochure_file),
  };
}

export function mapSpecializations(api: any) {
  const course = api.data;

  return (course.specialization_data ?? []).map((item: any) => ({
    id: item.slug,

    title: item.name,

    slug: item.slug,

    image: getMediaUrl(item.image),

    duration: item.duration,

    totalFee: Number(item.fees?.full_fee ?? 0),

    registrationFee: Number(item.fees?.registration_fee ?? 0),
  }));
}

export function mapCurriculum(api: any) {
  const course = api.data;

  const section = course.sections.find(
    (s: any) => s.section_key === "Syllabus_Curriculum"
  );

  const parsed = parseCurriculum(
    section?.props?.content ?? ""
  );

  if (
    parsed.semesters.length === 0 &&
    !course.syllabus_file
  ) {
    return null;
  }

  return {
    credits: course.credit_points,

    semesters: parsed.semesters,

    syllabus: getMediaUrl(course.syllabus_file),
  };
}

export function mapCareer(api: any) {
  const course = api.data;

  const section = course.sections.find(
    (s: any) => s.section_key === "Job_Opportunities"
  );

  return parseCareer(
    section?.props?.content ?? ""
  );
}

interface NormalizedReview {
  id: string | number;
  name: string;
  rating: number;
  review: string;
  date: string;
}

const RATING_STARS = [5, 4, 3, 2, 1] as const;

/** A raw course review's rating can live under any of these keys. */
function getRawRating(review: any): number {
  return Number(review.rating ?? review.value ?? review["rating (1-5)"] ?? 0);
}

/** A raw course review's text can live under either of these keys. */
function getRawReviewText(review: any): string {
  return review.review ?? review.reviewContent ?? "";
}

/** A raw course review counts as valid if it has a name, text, or a real rating. */
function isValidCourseReview(review: any): boolean {
  const hasName = (review.name ?? "").trim() !== "";
  const hasText = getRawReviewText(review).trim() !== "";
  const hasRating = getRawRating(review) > 0;
  return hasName || hasText || hasRating;
}

/**
 * Normalizes a review from either source (course review or university
 * testimonial) into the single shape the rest of the function works with.
 * Note: `date` is intentionally always "Verified Student" — the source
 * review's own `date` field is never surfaced, matching existing behavior.
 */
function normalizeReview(review: any, index: number): NormalizedReview {
  return {
    id: review.id ?? index + 1,
    name: review.name ?? "Anonymous",
    rating: getRawRating(review),
    review: getRawReviewText(review),
    date: "Verified Student",
  };
}

function calculateAverageRating(reviews: NormalizedReview[]): number {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Number((total / reviews.length).toFixed(1));
}

function calculateBreakdown(reviews: NormalizedReview[]) {
  const counts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  for (const review of reviews) {
    if (review.rating >= 1 && review.rating <= 5) {
      counts[review.rating]++;
    }
  }

  return RATING_STARS.map((stars) => ({
    stars,
    percentage: Math.round((counts[stars] / reviews.length) * 100),
  }));
}

export function mapReviews(api: any, university: any) {
  const course = api.data;

  const ratingsSection = course.sections.find(
    (s: any) => s.section_key === "Student_Ratings"
  );
  const rawCourseReviews = ratingsSection?.props?.allReviews ?? [];
  const validCourseReviews = rawCourseReviews.filter(isValidCourseReview);

  const sourceReviews =
    validCourseReviews.length > 0 ? validCourseReviews : university.testimonials;

  if (sourceReviews.length === 0) {
    return null;
  }

  const reviews = sourceReviews.map(normalizeReview);
  const totalReviews = reviews.length;

  return {
    averageRating: calculateAverageRating(reviews),
    totalReviews,
    breakdown: calculateBreakdown(reviews),
    reviews,
  };
}

function mapLearning(api: any, university: any) {
  const course = api.data;

  const lmsSection = course.sections.find(
    (s: any) => s.section_key === "Learning_Management_SystemLMS"
  );

  const examSection = course.sections.find(
    (s: any) => s.section_key === "Examination_Pattern"
  );

  const lmsContent = lmsSection?.props?.content?.trim();
  const examContent = examSection?.props?.content?.trim();

  return {
    learning: {
      title: "Learning Management System (LMS)",

      description: lmsContent
        ? extractDescription(lmsContent)
        : university.learning.description,

      paragraphs: lmsContent
        ? extractBlocks(lmsContent)
        : university.learning.paragraphs,
    },

    examination: {
      title: "Examination Pattern",

      description: examContent
        ? extractDescription(examContent)
        : university.examination.description,

      paragraphs: examContent
        ? extractBlocks(examContent)
        : university.examination.paragraphs,
    },
  };
}

function slugToName(slug: string = "") {
  return slug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase()
    )
    .join(" ");
}

export function mapByline(api: any) {
  const data = api.data;

  return {
    author: {
      name: slugToName(data.author_slug),
      image: getMediaUrl(data.author_image),
      slug: data.author_slug,
      label: data.author_label,
      bio: data.author_details,
      verified: false,
    },

    reviewer: {
      name: slugToName(data.verifier_slug),
      image: getMediaUrl(data.verifier_image),
      slug: data.verifier_slug,
      label: data.verifier_label,
      bio: data.verifier_details,
      verified: true,
    },

    updatedAt:
      data.updated_at ??
      data.updatedAt ??
      data.last_updated ??
      data.modified_at ??
      null,
  };
}

import { parseScholarship } from "@/lib/parsers/scholarship";

export function mapScholarship(api: any, university: any) {
  const course = api.data;

  // Course scholarship section
  const courseSection = course.sections?.find(
    (section: any) =>
      section.section_key === "Scholarships_Program"
  );

  // University scholarship section
  const universityContent =
    university?.scholarship?.content ?? "";

  // Prefer course content unless it's empty
  const content =
    courseSection?.props?.content?.trim() ||
    universityContent.trim();

  if (!content) {
    return null;
  }

  return {
    title:
      courseSection?.title || "Scholarships",

    heading:
      courseSection?.props?.heading ||
      university?.scholarship?.heading ||
      "",

    blocks: parseScholarship(content),
  };
}

export function mapCourse(api: any, university: any) { 

  return {
    hero: mapCourseHero(api, university),
    snapshot: mapSnapshot(api),
    fees: mapFees(api),
    specializations: mapSpecializations(api),
    curriculum: mapCurriculum(api),
    career: mapCareer(api),
    reviews: mapReviews(api, university),
    faqs: mapFAQs(api.data),
    byline: mapByline(api),
    scholarship: mapScholarship(api, university),
    ...mapLearning(api, university)
  };
}