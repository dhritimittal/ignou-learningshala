"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CareerJob({
  job,
  isTop = false,
  barPct = 60,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="
        group
        relative
        rounded-xl
        border
        border-slate-200
        p-4
        transition-colors
        duration-300
        hover:border-[#D39B00]
        hover:bg-bg-[#FFF8E6]
      "
    >
      {isTop && (
        <span className="absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-[#FFE8A3] text-[#0B6089]">
          Top pay
        </span>
      )}

      {/* Title row */}

      <div className="flex items-center gap-2 min-w-0">

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F6FAFC] transition-colors group-hover:bg-[#EAF4F9]">
          <ArrowUpRight
            className="h-4 w-4 text-[#D39B00] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
          />
        </div>

        <h4 className="truncate text-sm font-semibold text-[#061122]">
          {job.title}
        </h4>

      </div>

      {/* Salary */}

      <p className="mt-3 text-lg font-bold tracking-tight text-[#061122]">
        {job.salary}
      </p>

      {/* Relative pay bar */}

      <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-[#D39B00]"
          style={{ width: `${barPct}%` }}
        />
      </div>

    </motion.div>
  );
}
