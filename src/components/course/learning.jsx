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
  blocks.map((block, index) => {
    if (block.type === "table") {
      return (
        <div
          key={index}
          className="border-t border-slate-200 pt-5"
        >
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  {block.headers.map((header, hIndex) => (
                    <th
                      key={hIndex}
                      className="px-4 py-3 font-semibold uppercase tracking-wide text-primary"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {block.rows.map((row, rIndex) => (
                  <tr
                    key={rIndex}
                    className="odd:bg-white even:bg-slate-50/50"
                  >
                    {row.map((cell, cIndex) => (
                      <td
                        key={cIndex}
                        className="px-4 py-3 align-top text-[15px] leading-7 text-muted-foreground"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

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
          {block.title && (
            <h4 className="font-semibold text-foreground">
              {block.title}
            </h4>
          )}

          <p className="mt-2 text-[15px] leading-7 text-muted-foreground">
            {block.body}
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

        <div className="mt-2 grid gap-8 lg:grid-cols-2">

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