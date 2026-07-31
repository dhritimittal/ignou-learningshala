import CurriculumAccordion from "./curriculum-accordion";
import  SyllabusButton from "./syllabus-button";

export default function Curriculum({ data, openWizard }) {
  if (!data?.curriculum?.syllabus && !data?.curriculum?.semesters?.length) {
    return null;
  }
  return (
    <section
      id="curriculum"
      className="scroll-mt-24 py-8"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 mb-5 sm:gap-4">

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Curriculum
            </span>

            <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
              What you'll study.
            </h2>

            <p className="mt-3 max-w-3xl leading-8 text-muted-foreground">
              Industry-relevant curriculum designed by {data.hero.universityName}.
            </p>

          </div>

          <SyllabusButton openWizard={openWizard} syllabus={data.curriculum.syllabus} />

        </div>

        <div className="flex flex-wrap items-center gap-3 mb-5 text-foreground">

            <span className="font-semibold">
                {data.curriculum.credits}
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="font-semibold">
                {data.curriculum.semesters.length} {" "}
                {data.curriculum.semesters[0]?.type === "Year"
                  ? "Years"
                  : "Semesters"}
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="font-semibold">
                {data.curriculum.semesters.reduce(
                  (total, semester) => total + semester.subjects.length,
                  0
                )} Subjects
            </span>

        </div>

        <CurriculumAccordion
          semesters={data.curriculum.semesters}
        />

      </div>
    </section>
  );
}