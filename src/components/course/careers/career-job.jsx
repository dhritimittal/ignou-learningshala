"use client";

import { ArrowUpRight } from "lucide-react";

export default function CareerJob({
  job,
  last,
}) {
  return (
    <div
      className={`
        group
        flex
        items-center
        justify-between
        px-5
        py-4
        transition-all
        duration-300
        hover:bg-[#FFFCF3]

        ${!last ? "border-b border-slate-200" : ""}
      `}
    >
      {/* Left */}

      <div className="flex items-center gap-3 min-w-0">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF8E6] transition-colors group-hover:bg-[#FFEFC2]">

          <ArrowUpRight
            className="h-4 w-4 text-[#D39B00] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
          />

        </div>

        <div className="min-w-0">

          <h4 className="truncate text-[17px] font-semibold text-[#061122]">
            {job.title}
          </h4>

        </div>

      </div>

      {/* Salary */}

      <div className="ml-6 text-right shrink-0">

        <p className="text-xl font-bold tracking-tight text-[#061122]">
          {job.salary}
        </p>

      </div>
    </div>
  );
}