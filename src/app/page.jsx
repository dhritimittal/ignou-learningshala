import IGNOUHomePage from "./university/ClientPage";

import { getUniversity } from "@/lib/api/university";
import { mapUniversity } from "@/lib/mappers/universityMapper";

export default async function HomePage() {
  // Fetch CMS data
  const api = await getUniversity("ignou");

  // Map sections
  const page = mapUniversity(api);

  return (
    <IGNOUHomePage
      data={page}
    />
  );
}