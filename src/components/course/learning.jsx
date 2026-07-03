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

  const renderParagraphs = (paragraphs, icons) =>
    paragraphs.map((paragraph, index) => {
      const [title, ...body] = paragraph.split(":");
      const Icon = icons[index % icons.length];

      return (
        <div
          key={index}
          className="flex gap-4 border-t border-slate-200 pt-5"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EDF8FD]">
            <Icon
              className="h-5 w-5 text-[#0B6089]"
              strokeWidth={2}
            />
          </div>

          <div>
            <h4 className="font-semibold text-[#061122]">
              {title.trim()}
            </h4>

            <p className="mt-2 text-[15px] leading-7 text-slate-600">
              {body.join(":").trim()}
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

        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0B6089]">
          Learning Experience
        </span>

        <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#061122]">
          Learn Anywhere. Get Evaluated Fairly.
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          IGNOU's Online MBA combines flexible digital learning,
          comprehensive study resources and a structured
          assessment process.
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">

          {/* LEFT */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8">

            <h3 className="text-xl font-bold text-[#061122]">
              {learning.title}
            </h3>

            <p className="mt-3 text-slate-600 leading-7">
              {learning.description}
            </p>

            <div className="mt-8 space-y-3">
              {renderParagraphs(
                learning.paragraphs,
                learningIcons
              )}
            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8">

            <h3 className="text-xl font-bold text-[#061122]">
              {examination.title}
            </h3>

            <p className="mt-3 text-slate-600 leading-7">
              {examination.description}
            </p>

            <div className="mt-8 space-y-3">
              {renderParagraphs(
                examination.paragraphs,
                examIcons
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}