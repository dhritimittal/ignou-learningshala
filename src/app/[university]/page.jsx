import IGNOUHomePage from "./ClientPage";

import { getUniversity } from "@/lib/api/university";
import { mapUniversity } from "@/lib/mappers/universityMapper";

export default async function HomePage({ params }) {
  const { university } = await params;
  // Fetch CMS data
  const api = await getUniversity(university);

  // Map sections
  const page = mapUniversity(api);

  return (
    <IGNOUHomePage
      data={page}
    />
  );
}