import IGNOUHomePage from "./university/ClientPage";

import { getUniversity } from "@/lib/api/university";
import { mapHero } from "@/lib/mappers/universityMapper";

export default async function HomePage() {
  // Fetch CMS data
  const api = await getUniversity("ignou");

  // Map sections
  const hero = mapHero(api);

  return (
    <IGNOUHomePage
      hero={hero}
    />
  );
}