// src/lib/mappers/courseMapper.ts
import { getMediaUrl } from "../utils/media";
import { parseAboutUniversity } from "../parsers/aboutUniversity";
import { parseKeyHighlights } from "../parsers/keyHighlights";
import { parseCurriculum } from "../parsers/curriculum";
import { parseCareer } from "../parsers/careers";


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

  const reviewsSection = course.sections.find(
    (section: any) => section.section_key === "Student_Ratings"
  );

  const reviews = reviewsSection?.props?.allReviews ?? [];

  const reviewCount = reviews.length;

  const rating =
    reviewCount > 0
      ? Number(
          (
            reviews.reduce(
              (sum: number, review: any) =>
                sum + Number(review.value ?? review["rating (1-5)"] ?? 0),
              0
            ) / reviewCount
          ).toFixed(1)
        )
      : 0;


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
    rating,
    reviewCount,
    location: university.city,
  };
}

export function mapSnapshot(api: any, university: any) {
  const course = api.data;

  const section = course.sections.find(
    (s: any) => s.section_key === "Key_Highlights"
  );

  const highlights = parseKeyHighlights(
    section?.props?.content ?? ""
  );

  return {
    programmeName:
      highlights["Program Name"] ?? course.name,

    degreeLevel:
      highlights["Degree Level"] ?? "",

    university:
      highlights["University"] ??
      course.university_name,

    duration:
      highlights["Duration"] ??
      course.duration,

    modeOfLearning:
      highlights["Mode of Learning"] ??
      university.educationMode,

    eligibility:
      highlights["Eligibility"] ??
      course.eligibility,

    entranceTest:
      highlights["Entrance Test"] ?? "",

    admissionProcess:
      highlights["Admission Process"] ?? "",

    approvals:
      highlights["Approval/Rankings"] ??
      university.university.approvals,

    topSpecializations:
      highlights["Top Specializations"] ?? "",

    lms:
      highlights["LMS"] ?? "",

    examinations:
      highlights["Exam"] ?? "",

    placement:
      highlights["Placement Assistance"] ?? "",

    topRoles:
      highlights["Top Job Roles"] ?? "",
  };
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

  return {
    totalFee,

    semesterFee,

    registrationFee,

    emi:
      course.emi_duration ??
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

  const parsed = parseCareer(
    section?.props?.content ?? ""
  );

  return {
    description: parsed.description,

    averagePackage: parsed.averagePackage,

    jobs: parsed.jobs,
  };
}

export function mapReviews(api: any) {
  const course = api.data;

  const section = course.sections.find(
    (s: any) => s.section_key === "Student_Ratings"
  );

  const reviews = section?.props?.allReviews ?? [];

  const totalReviews = reviews.length;

  const averageRating =
    totalReviews > 0
      ? Number(
          (
            reviews.reduce(
              (sum: number, review: any) =>
                sum + Number(review.value ?? 0),
              0
            ) / totalReviews
          ).toFixed(1)
        )
      : 0;

  const counts: Record<number, number> = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  reviews.forEach((review: any) => {
    const rating = Number(review.value);

    if (counts[rating] !== undefined) {
      counts[rating]++;
    }
  });

  const breakdown = [5, 4, 3, 2, 1].map((stars) => ({
    stars,

    percentage:
      totalReviews === 0
        ? 0
        : Math.round(
            (counts[stars] / totalReviews) * 100
          ),
  }));

  return {
    averageRating,

    totalReviews,

    breakdown,

    reviews: reviews.map(
      (review: any, index: number) => ({
        id: index + 1,

        name: review.name,

        rating: Number(review.value),

        review: review.reviewContent,

        date: "Verified Student",
      })
    ),
  };
}

export function mapCourse(api: any, university: any) {
  return {
    hero: mapCourseHero(api, university),
    snapshot: mapSnapshot(api, university),
    fees: mapFees(api),
    specializations: mapSpecializations(api),
    curriculum: mapCurriculum(api),
    career: mapCareer(api),
    reviews: mapReviews(api),
  };
}