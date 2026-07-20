import { getMediaUrl } from "@/lib/utils/media";
import type { UniversityData } from "@/lib/types/university";

export function parseUniversity(api: any): UniversityData {
  const data = api.data.data;

  return {
    id: data.id,

    // Basic Info
    name: data.university_name,
    shortName: data.university_name,
    slug: data.university_slug,

    // Branding
    logo: getMediaUrl(data.university_logo),
    banner: getMediaUrl(data.banners?.[0]?.banner_image ?? ""),

    // Location
    city: data.university_location,
    state: "",

    // University Details
    establishedYear: data.establishment_year,
    universityType: data.university_type,

    educationMode: data.education_mode,
    admissionMode: data.admission_mode,
    examinationMode: data.examination_mode,

    // Assets
    brochure: getMediaUrl(data.university_brochure),

    // Author
    authorName: data.author_name,
    authorImage: getMediaUrl(data.author_image),
    authorSlug: data.author_slug,

    // Approvals
    approvals:
      data.approvals?.map((approval: any) => ({
        id: approval.id,
        title: approval.title,
        logo: getMediaUrl(approval.logo),
      })) ?? [],

    // Stats (not currently provided by the API)
    rating: 0,
    totalStudents: 0,

    // Links
    website: data.compare_information?.blog_url ?? "",
  };
}