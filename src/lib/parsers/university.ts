import { getMediaUrl } from "@/lib/utils/media";
export function parseUniversity(api: any) {
  const data = api.data.data;

  const approvals=
      data.approvals?.map((approval: any) => ({
        id: approval.id,
        title: approval.title,
        logo: getMediaUrl(approval.logo),
      })) ?? []

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
    approvals,

    ugc: approvals.find((a: any) => a.title === "UGC-DEB"),

    aicte: approvals.find((a: any) => a.title === "AICTE"),

    nirf: approvals.find((a: any) => a.title === "NIRF"),

    naac: approvals.find((a: any) => a.title === "NAAC A++"),

    // Stats (not currently provided by the API)
    rating: 0,
    totalStudents: 0,

    // Links
    website: data.compare_information?.blog_url ?? "",
  };
}