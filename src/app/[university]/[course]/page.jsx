import { getUniversity } from "@/lib/api/university";
import { mapUniversity } from "@/lib/mappers/universityMapper";
import { mapCourse } from "@/lib/mappers/courseMapper";
import ClientPage from "./ClientPage";
import { getCourse } from "@/lib/api/course";

export default async function CoursePage({ params }) {
  const { university, course } = await params;

  const [universityApi, courseApi] = await Promise.all([
    getUniversity(university),
    getCourse(university, course),
  ]);

  const universityData = mapUniversity(universityApi);

  const courseData = mapCourse(courseApi, universityData);

  return (
    <ClientPage
      university={universityData}
      course={courseData}
    />
  );
}