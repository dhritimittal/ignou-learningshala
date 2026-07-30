"use server";

import { RawCourse, RawUniversity } from "./types";

export async function fetchUniversityCmsAction(
  universitySlug: string
): Promise<RawUniversity | null> {
  const baseUrl = process.env.API_BASE_URL;
  const token = process.env.API_BEARER_TOKEN;

  if (!baseUrl || !token) {
    console.error("[chatbot] API_BASE_URL or API_BEARER_TOKEN is not set");
    return null;
  }

  const res = await fetch(`${baseUrl}/api/cms/universities/${universitySlug}`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.error(`[chatbot] University CMS fetch failed (${res.status}) for ${universitySlug}`);
    return null;
  }

  const json = await res.json();
  return json?.data?.data ?? null;
}

export async function fetchCourseCmsAction(
  universitySlug: string,
  courseSlug: string
): Promise<RawCourse | null> {
  const baseUrl = process.env.API_BASE_URL;
  const token = process.env.API_BEARER_TOKEN;

  if (!baseUrl || !token) {
    console.error("[chatbot] API_BASE_URL or API_BEARER_TOKEN is not set");
    return null;
  }

  const res = await fetch(
    `${baseUrl}/api/cms/university-courses/${universitySlug}/${courseSlug}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    console.error(
      `[chatbot] Course CMS fetch failed (${res.status}) for ${universitySlug}/${courseSlug}`
    );
    return null;
  }

  const json = await res.json();
  return json?.data ?? null;
}