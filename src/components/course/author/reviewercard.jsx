"use client";

import Image from "next/image";
import { BadgeCheck, ChevronRight } from "lucide-react";

export default function ReviewerCard({
  reviewer,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 rounded-xl transition-all hover:bg-slate-50 p-1.5 -m-1.5 text-left"
    >
      <div className="relative h-9 w-9 overflow-hidden rounded-md ring-1 ring-slate-200">
        <Image
          src={reviewer.image}
          alt={reviewer.name}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <p className="text-xs italic text-muted-foreground">
          Reviewed By
        </p>

        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
          {reviewer.name}
        </h3>

        <div className="mt-0.5 inline-flex items-center gap-0.5 sm:gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5 sm:px-2 sm:py-0.5 text-[9px] sm:text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-200">
          <BadgeCheck size={12} className="sm:w-[14px] sm:h-[14px]" />
            <span className="sm:hidden">LS Verified</span>
            <span className="hidden sm:inline">LS Verified Expert</span>
        </div>
      </div>

      <ChevronRight
        size={14}
        className="ml-auto text-slate-400 group-hover:text-primary"
      />
    </button>
  );
}