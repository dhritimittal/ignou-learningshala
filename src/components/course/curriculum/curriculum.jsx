import CurriculumAccordion from "./curriculum-accordion";
import  SyllabusButton from "./syllabus-button";

export default function Curriculum({ data }) {
  return (
    <section
      id="curriculum"
      className="scroll-mt-24 py-8"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-end justify-between mb-5">

          <div>

            <span className="text-[#F6C94A] uppercase font-semibold text-sm tracking-widest">
              Curriculum
            </span>

            <h2 className="mt-2 text-4xl font-bold">
              What you'll study.
            </h2>

            <p className="mt-3 text-slate-600 max-w-2xl">
              Industry-relevant curriculum designed by IGNOU
              covering management fundamentals and advanced
              business concepts.
            </p>

          </div>

          <SyllabusButton />

        </div>

        <div className="flex flex-wrap items-center gap-3 mb-5 text-slate-700">

            <span className="font-semibold">
                96 Credits
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#F6C94A]" />

            <span className="font-semibold">
                4 Semesters
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#F6C94A]" />

            <span className="font-semibold">
                24 Subjects
            </span>

        </div>

        <CurriculumAccordion
          semesters={data.curriculum.semesters}
        />

      </div>
    </section>
  );
}