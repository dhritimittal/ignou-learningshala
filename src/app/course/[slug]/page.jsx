import { getCourse } from "@/data/course/mock";
import { getUniversity } from "@/lib/api/university";
import { mapUniversity } from "@/lib/mappers/universityMapper";
import ClientPage from "./ClientPage";

export default async function Page({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);

  const universityResponse = await getUniversity("ignou");
  const page = mapUniversity(universityResponse);

  return <ClientPage course={course} data={page} />;
}