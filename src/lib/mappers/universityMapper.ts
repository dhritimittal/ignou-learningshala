// src/lib/mappers/universityMapper.ts
import { parseLatestUpdates } from "../parsers/latestUpdates";
import { parseAboutUniversity } from "../parsers/aboutUniversity";
import { parseSampleCertificate } from "@/lib/parsers/sampleCertificate";
import { getMediaUrl } from "../utils/media";
import { parseAbout } from "../parsers/about";
import { parseUniversity } from "../parsers/university";
import { extractParagraphs, extractDescription } from "../parsers/learning";
import { mapFAQs } from "./faqMapper";

export function mapHero(api: any) {
  const university = api.data.data;
  const sections = api.data.data.sections;
  const about = parseAboutUniversity(sections.About_University);

  return {
    // Hero background
    bannerImage: getMediaUrl(university.banners?.[0]?.banner_image),

    // Announcement ticker
    latestUpdates: parseLatestUpdates(
        sections?.Latest_Updates
    ),

    // University ribbon
    establishedYear: String(university.establishment_year ?? ""),

    // Doesn't exist in CMS yet
    title: "Education without walls.",

    subtitle: "Learning beyond borders.",

    description: about.description,
  };
}

export function mapAbout(api: any) {
  const university = api.data.data;

  const about = parseAbout(
    university.sections.About_University
  );

  return {
    paragraphs: about.paragraphs,

    stats: about.stats,

    buttonText: `Read more about ${university.university_name}`,
  };
}

export function mapDegree(api: any) {
  const university = api.data.data;

  return {
    bullets: parseSampleCertificate(
      university.sections.Sample_Certificate
    ),

    certificateImage: getMediaUrl(
      university.sections.sampleImg
    ),
  };
}

function getLevel(name: string) {
  if (name.includes("MBA") || name.includes("MCA") || name.includes("M.Com") || name.includes("M.Sc") || name.includes("MA") || name.includes("MSW"))
    return "PG";

  if (name.includes("B"))
    return "UG";

  if (name.includes("Diploma"))
    return "Diploma";

  if (name.includes("Certificate"))
    return "Certificate";

  return "";
}

function getMode(name: string) {
  return name.startsWith("Online") ? "Online" : "Distance";
}

function getFee(fees: any) {
  if (fees.semester_fee)
    return `₹${fees.semester_fee.toLocaleString()}/sem`;

  if (fees.yearly_fee)
    return `₹${fees.yearly_fee.toLocaleString()}/yr`;

  if (fees.full_fee)
    return `₹${fees.full_fee.toLocaleString()}`;

  return "";
}

export function mapProgrammes(api: any) {
  return api.data.data.course_data.map((course : any) => ({
    name: course.name,

    slug: course.slug,

    image: getMediaUrl(course.image),

    duration: course.duration,

    fee: getFee(course.fees),

    specs: course.specialization_count,

    level: getLevel(course.name),

    mode: getMode(course.name),

    label: course.label,
  }));
}

export function getProgrammeFilters(programmes: any[]) {
  const filters = [];

  const hasOnline = programmes.some(
    (p) => p.mode?.toLowerCase() === "online"
  );

  const hasDistance = programmes.some(
    (p) => p.mode?.toLowerCase() === "distance"
  );

  if (hasOnline) {
    filters.push({
      label: "Online Programmes",
      mode: "online",
    });
  }

  if (hasDistance) {
    filters.push({
      label: "Distance Learning",
      mode: "distance",
    });
  }

  filters.push({
    label: "All Courses",
    mode: "all",
  });

  return filters;
}

export function mapTestimonials(api: any) {
  const section = api.data.data.sections;

  return (section.Student_Ratings ?? []).map(
    (item: any, index: number) => ({
      id: index + 1,
      name: item.name ?? "Anonymous",
      rating: Number(item.value ?? 0),

      // Existing field used by TestimonialsSection
      content: item.reviewContent ?? "",

      // New field used by Reviews fallback
      review: item.reviewContent ?? "",

      date: "Verified Student",
    })
  );
}


function mapHighlights(api: any) {
  const section = api.data.data.sections;

  return (section.gridContent ?? []).map((item: any) => ({
    title: item.title,
    description: item.content.replace(/<[^>]*>/g, "").trim(),
  }));
}

function mapLearning(api: any) {
  const section = api.data.data.sections;

  return {
    learning: {
      title: "Learning Management System (LMS)",

      description: extractDescription(
        section.Learning_Management_SystemLMS
      ),

      paragraphs: extractParagraphs(
        section.Learning_Management_SystemLMS
      ),
    },

    examination: {
      title: "Examination Pattern",

      description: extractDescription(
        section.Examination_Pattern
      ),

      paragraphs: extractParagraphs(
        section.Examination_Pattern
      ),
    },
  };
}

function mapFaculty(api: any) {
  const section = api.data.data.sections;

  return {
    faculty: (section.University_Faculties ?? []).map(
      (item: any, index: number) => ({
        id: index + 1,

        name: item.name.trim(),

        designation: item.designation,

        image: getMediaUrl(item.img),

        qualification: item.faculty_qualification || null,

        description: item.desc || null,

        linkedin: item["Linkedin Profile"] || null,
      })
    ),
  };
}

export function mapUniversity(api: any) {

    const university = parseUniversity(api);
    const programmes = mapProgrammes(api);

    return {

        ...university,

        hero: mapHero(api),

        about: mapAbout(api),

        degree: mapDegree(api),

        programmes,

        programmeFilters: getProgrammeFilters(programmes),

        testimonials: mapTestimonials(api),

        faqs: mapFAQs(api.data.data),

        highlights: mapHighlights(api),

        ...mapLearning(api),

        ...mapFaculty(api),

    };
}