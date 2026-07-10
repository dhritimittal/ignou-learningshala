import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { BookOpen, ChevronRight } from "lucide-react";

export default function SemesterItem({ semester }) {
  return (
    <AccordionItem
      value={`semester-${semester.id}`}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
    >
      <AccordionTrigger className="px-4 py-2.5 hover:no-underline">

        <div className="flex w-full items-center justify-between">

            <div className="flex items-center gap-2.5">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF7DD] text-[#D39B00] font-bold text-sm">
                {semester.id}
                </div>

                <h3 className="text-lg font-semibold text-[#061122]">
                {semester.title}
                </h3>

            </div>

            <div className="hidden md:flex items-center gap-1.5 text-slate-500 text-xs">

                <span>{semester.credits} Credits</span>

                <span className="h-1 w-1 rounded-full bg-[#F6C94A]/30" />

                <span>{semester.subjects.length} Subjects</span>

            </div>

        </div>

      </AccordionTrigger>

      <AccordionContent className="px-4 pb-4 pt-1">

        <div className="grid md:grid-cols-2 gap-2 pt-2">

          {semester.subjects.map((subject) => (

            <div
              key={subject.code}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-slate-200
                bg-white
                px-3
                py-2
                transition-all
                hover:border-[#F6C94A]
                hover:shadow-sm
              "
            >
              {/* Left */}

              <div className="flex items-center gap-6 flex-1">

                {/* Code */}

                <div className="shrink-0 min-w-[130px]">

                  <span className="text-[11px] font-semibold text-[#D39B00]">
                    {subject.code}
                  </span>

                </div>

                {/* Divider */}

                <div className="h-12 w-px bg-[#F6C94A]/30" />

                {/* Subject */}

                <p className="text-[14px] leading-snug font-medium text-[#061122]">
                  {subject.name}
                </p>

              </div>

            </div>

        ))}

        </div>

      </AccordionContent>

    </AccordionItem>
  );
}
