// src/lib/api/course.ts

const API_URL = process.env.API_BASE_URL;
const API_TOKEN = process.env.API_BEARER_TOKEN;

if (!API_URL) {
  throw new Error(
    "API_BASE_URL is not defined in your environment variables."
  );
}

export async function getCourse(
  universitySlug: string,
  courseSlug: string
) {
  const response = await fetch(
    `${API_URL}/university-courses/${universitySlug}/${courseSlug}`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: "application/json",
      },
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch course "${courseSlug}" (${response.status})`
    );
  }

  return response.json();
}