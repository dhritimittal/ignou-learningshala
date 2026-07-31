"use client";

import {
  BookOpen,
  Library,
  GraduationCap,
  Tv,
  ClipboardCheck,
  FileText,
  Briefcase,
  Monitor,
} from "lucide-react";

const learningIcons = [
  BookOpen,
  Library,
  GraduationCap,
  Tv,
];

const examIcons = [
  ClipboardCheck,
  FileText,
  Briefcase,
  Monitor,
];

export default function Learning({ data }) {
  const learning = data.learning;
  const examination = data.examination;

  const renderBlocks = (blocks = [], icons) =>
  blocks.map((paragraph, index) => {
    const Icon = icons[index % icons.length];

    return (
      <div
        key={index}
        className="flex gap-4 border-t border-slate-200 pt-5"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-tint">
          <Icon
            className="h-5 w-5 text-primary"
            strokeWidth={2}
          />
        </div>

        <div>
          {paragraph.title && (
            <h4 className="font-semibold text-foreground">
              {paragraph.title}
            </h4>
          )}

          <p className="mt-2 text-[15px] leading-7 text-muted-foreground">
            {paragraph.body}
          </p>
        </div>
      </div>
    );
  });

  return (
    <section
      id="learning"
      className="py-8"
    >
      <div className="mx-auto max-w-7xl px-6">

        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Learning Experience
        </span>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">

          {/* LEFT */}
          <div>
          <h2 className="my-2 text-4xl font-bold tracking-tight text-foreground">
            {learning.title}
          </h2>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">

            <p className="mt-3 text-muted-foreground leading-7">
              {learning.description}
            </p>

            <div className="mt-8 space-y-3">
              {renderBlocks(
                learning.paragraphs,
                learningIcons
              )}
            </div>
            </div>

          </div>

          {/* RIGHT */}
          <div>
          <h2 className="mt-2 mb-2 lg:mb-12 text-4xl font-bold tracking-tight text-foreground">
            {examination.title}
          </h2>
          <div className="rounded-3xl border border-slate-200 bg-white p-8">

            <p className="mt-3 text-muted-foreground leading-7">
              {examination.description}
            </p>

            <div className="mt-8 space-y-3">
              {renderBlocks(
                examination.paragraphs,
                examIcons
              )}
            </div>

          </div>
          </div>

        </div>

      </div>
    </section>
  );
}