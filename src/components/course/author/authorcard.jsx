"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function AuthorCard({ author, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 rounded-xl transition-all hover:bg-slate-50 p-1.5 -m-1.5 text-left"
    >
      <div className="relative h-9 w-9 overflow-hidden rounded-md ring-1 ring-slate-200">
        <Image
          src={author.image}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <p className="text-xs italic text-muted-foreground">
          Written By
        </p>

        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
          {author.name}
        </h3>
      </div>

      <ChevronRight
        size={14}
        className="ml-auto text-slate-400 group-hover:text-primary"
      />
    </button>
  );
}