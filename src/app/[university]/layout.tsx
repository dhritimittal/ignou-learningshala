import { getUniversity } from "@/lib/api/university";
import { mapUniversity } from "@/lib/mappers/universityMapper";
import { getCourse } from "@/lib/api/course";
import { mapCourse } from "@/lib/mappers/courseMapper";
import TimedPopup from "@/components/shared/timedpopup";
import ChatBot from "@/components/shared/chatbot/ChatBot";

export default async function UniversityLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ university: string }>;
}) {
  const { university } = await params;

  const api = await getUniversity(university);
  const data = mapUniversity(api);
  

  return (
    <>
      {children}

      <TimedPopup data={data} />

      <ChatBot universitySlug={university} data={data}/>
    </>
  );
}