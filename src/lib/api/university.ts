// src/lib/api/university.ts

const API_BASE_URL = process.env.API_BASE_URL;
const API_TOKEN = process.env.API_BEARER_TOKEN;

if (!API_BASE_URL) {
  throw new Error(
    "API_BASE_URL is not defined in your environment variables."
  );
}
/**
 * Fetches a university by slug.
 * Example:
 * /api/cms/universities/ignou
 */
// src/lib/api/university.ts

export async function getUniversity(slug: string) {
  const response = await fetch(
    `${API_BASE_URL}/universities/${slug}`,
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
      `Failed to fetch university "${slug}" (${response.status})`
    );
  }

  return response.json();
}