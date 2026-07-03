import { getCourse } from "@/data/course/mock";
import ClientPage from "./ClientPage";

export default async function Page({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);

  return <ClientPage course={course} />;
}