"use client";

import { useState, useEffect } from "react";
import { STRENGTHS } from "@/data/home/strengths";
import AccentDivider from "@/components/ui/accentdivider";
import Badge from "@/components/ui/badge";

export default function StrengthsSection({data}) {
  return (
    <section className="py-8 bg-white">
      <style>{`
        @keyframes scrollHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-container {
          animation: scrollHorizontal 30s linear infinite;
        }
        .scroll-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AccentDivider />
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-3">What {data.university.name} builds in you</h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            More than a degree — a toolkit for modern careers and lifelong growth.
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-6 scroll-container w-max">
            {[...STRENGTHS, ...STRENGTHS].map((s, idx) => (
              <div
                key={`${s.title}-${idx}`}
                className="group rounded-2xl border border-slate-200 bg-slate-50 hover:bg-secondary hover:border-primary/40 p-6 text-center transition-all duration-200 flex-shrink-0 w-80"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-sm font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}