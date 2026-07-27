"use client";

import { useState, useEffect, useRef } from "react";
import AccentDivider from "@/components/ui/accentdivider";
import Badge from "@/components/ui/badge";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ProgrammesSection({ openWizard, data }) {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode) {
      setFilter(mode.toLowerCase());
    } else {
      setFilter("all");
    }

  }, [searchParams]);
  
  const [expandCourses, setExpandCourses] = useState(false);
  const sectionRef = useRef(null);

  const filters = [
    "all",
    ...new Set([
      ...data.programmes.map((p) => p.mode.toLowerCase()),
      ...data.programmes.map((p) => p.level.toLowerCase()),
    ]),
  ];

  const filtered = data.programmes.filter((p) => {
    if (filter === "all") return true;

    return (
      p.mode.toLowerCase() === filter ||
      p.level.toLowerCase() === filter
    );
  });

  const isOnline = (p) => p.mode === "Online";
  const displayedCourses = expandCourses ? filtered : filtered.slice(0, 8);
  const hasMore = filtered.length > 8;

  const hasInteracted = useRef(false);

  useEffect(() => {
    if (!expandCourses && hasInteracted.current && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [expandCourses]);

  return (
    <section id="programmes" ref={sectionRef} className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AccentDivider />
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-3">Courses at {data.name}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            UGC-DEB approved programmes across online and distance modes — from UG to PG, designed for
            working professionals and fresh graduates alike.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-white text-muted-foreground border border-slate-200 hover:border-primary/40"
              }`}
            >
              {f === "all"
                ? "All"
                : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Programme grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayedCourses.map((prog) => (
            <div
              key={prog.slug}
              className="group bg-white rounded-2xl border border-slate-200 p-5 hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex gap-1.5 flex-wrap">
                  <Badge variant={prog.level === "PG" ? "blue" : prog.level === "UG" ? "green" : "amber"}>
                    {prog.level}
                  </Badge>
                  <Badge variant={prog.mode === "Online" ? "navy" : "amber"}>
                    {prog.mode}
                  </Badge>
                </div>
              </div>
              <h3 className="text-sm font-bold text-foreground leading-snug mb-auto">{prog.name}</h3>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-primary">{prog.fee}</span>
                <span className="text-[11px] text-foreground">{prog.duration}</span>
              </div>
              {prog.specs > 0 && (
                <p className="text-[11px] text-foreground mt-1">{prog.specs} specialisations</p>
              )}
              <Link
                href={`/course/ignou/${prog.slug}`}
                className="mt-3 w-full py-2 rounded-lg bg-secondary hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 hover:border-primary text-xs font-semibold transition-all duration-200 text-center"
              >
                Apply Now →
              </Link>
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
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold text-sm rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-200"
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