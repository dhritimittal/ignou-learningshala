"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div
      className="
        flex-1
        max-w-md
        mx-10
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
          bg-slate-50
          border
          rounded-full
          px-5
          h-11
        "
      >
        <Search
          size={18}
          className="text-slate-500"
        />

        <input
          placeholder="Search programmes..."
          className="
            bg-transparent
            outline-none
            flex-1
          "
        />
      </div>
    </div>
  );
}