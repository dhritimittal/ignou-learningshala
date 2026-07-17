import { getUniversity } from "@/lib/api/university";

export default async function UniversityPage() {
  const data = await getUniversity("ignou");

  console.log(data);

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}