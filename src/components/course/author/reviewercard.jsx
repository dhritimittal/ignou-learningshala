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

        <div className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-200">
          <BadgeCheck size={14} />
          LS Verified Expert
        </div>
      </div>

      <ChevronRight
        size={14}
        className="ml-auto text-slate-400 group-hover:text-primary"
      />
    </button>
  );
}