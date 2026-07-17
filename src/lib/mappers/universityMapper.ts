// src/lib/mappers/universityMapper.ts
import { parseLatestUpdates } from "../parsers/latestUpdates";
import { getMediaUrl } from "../utils/media";

import type { Hero } from "@/lib/types/university";

export function mapHero(api: any): Hero {
  const university = api.data.data;
  const sections = api.data.data.sections;

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
    recognition: "Act of Parliament",

    // Doesn't exist in CMS yet
    title: "Education without walls.",

    subtitle: "Learning beyond borders.",

    description:
      "IGNOU's Centre for Online Education brings UGC-approved, NAAC A++ certified degrees to 38 lakh+ learners across 25 countries — at a price that's never a barrier.",

    // Trust badges
    approvals:
      api.data.approvals?.map((approval: any) => ({
        id: approval.id,
        title: approval.name,
        logo: approval.logo,
      })) ?? [],

    // Doesn't exist in CMS yet
    stats: [
      {
        value: "38 Lakh+",
        label: "Learners",
      },
      {
        value: "333+",
        label: "Programmes",
      },
      {
        value: "67",
        label: "Regional Centres",
      },
      {
        value: "56",
        label: "Schools",
      },
      {
        value: "25",
        label: "Countries",
      },
    ],
  };
}