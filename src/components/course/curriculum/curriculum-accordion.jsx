"use client";

import {
  Accordion,
} from "@/components/ui/accordion";

import SemesterItem from "./semester";

export default function CurriculumAccordion({ semesters }) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="semester-1"
      className="space-y-3"
    >
      {semesters.map((semester) => (
        <SemesterItem
          key={semester.id}
          semester={semester}
        />
      ))}
    </Accordion>
  );
}