"use client";

import { useState, useEffect, useRef } from "react";
import { PROGRAMMES } from "@/data/home/programmes";
import { FILTERS } from "@/data/home/filters";
import AccentDivider from "@/components/ui/accentdivider";
import Badge from "@/components/ui/badge";

export default function ProgrammesSection({ openWizard, openProgrammeWizard }) {
  const [filter, setFilter] = useState("All");
  const [expandCourses, setExpandCourses] = useState(false);
  const sectionRef = useRef(null);

  const filtered = PROGRAMMES.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Online") return p.code.endsWith("OL") || p.slug.startsWith("online-");
    if (filter === "Distance") return !p.code.endsWith("OL") && !p.slug.startsWith("online-");
    return p.level === filter;
  });

  const isOnline = (p) => p.slug.startsWith("online-");
  const displayedCourses = expandCourses ? filtered : filtered.slice(0, 8);
  const hasMore = filtered.length > 8;

  const hasInteracted = useRef(false);

  useEffect(() => {
    if (!expandCourses && hasInteracted.current && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [expandCourses]);

  return (
    <section id="programmes" ref={sectionRef} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AccentDivider />
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">Courses at IGNOU</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            23 UGC-DEB approved programmes across online and distance modes — from UG to PG, designed for
            working professionals and fresh graduates alike.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                filter === f
                  ? "bg-[#0B6089] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#7cbdd6]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Programme grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayedCourses.map((prog) => (
            <div
              key={prog.code}
              className="group bg-white rounded-2xl border border-slate-100 p-5 hover:border-[#7cbdd6] hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex gap-1.5 flex-wrap">
                  <Badge variant={prog.level === "PG" ? "blue" : prog.level === "UG" ? "green" : "amber"}>
                    {prog.level}
                  </Badge>
                  <Badge variant={isOnline(prog) ? "navy" : "amber"}>
                    {isOnline(prog) ? "Online" : "Distance"}
                  </Badge>
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-800 leading-snug mb-auto">{prog.name}</h3>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0B6089]">{prog.fee}</span>
                <span className="text-[11px] text-slate-400">{prog.duration}</span>
              </div>
              {prog.specs > 0 && (
                <p className="text-[11px] text-slate-400 mt-1">{prog.specs} specialisations</p>
              )}
              <button
                onClick={(e) => { e.stopPropagation(); openProgrammeWizard(prog.name); }}
                className="mt-3 w-full py-2 rounded-lg bg-[#EBF4F9] hover:bg-[#0B6089] text-[#0B6089] hover:text-white border border-[#b0d4e8] hover:border-[#0B6089] text-xs font-semibold transition-all duration-200"
              >
                Apply Now →
              </button>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                hasInteracted.current = true;
                setExpandCourses(!expandCourses);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0B6089] text-[#0B6089] font-semibold text-sm rounded-xl hover:bg-[#0B6089] hover:text-white transition-all duration-200"
            >
              {expandCourses ? (
                <>
                  Show Less
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0L5 14m7-7v12" />
                  </svg>
                </>
              ) : (
                <>
                  Show More Courses
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}