"use client";

import { useState, useEffect } from "react";
import AccentDivider from "@/components/ui/accentdivider";
import Badge from "@/components/ui/badge";

export default function AboutSection({ data, openWizard }) {
  return (
    <section id="about" className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-16 items-center">
          <div className="col-span-3">
            <AccentDivider />
            <h2 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-5">
              About {data.university.name}
            </h2>
            <div className="space-y-4 mb-8">
                {data.about.paragraphs.map((paragraph, index) => (
                    <p
                        key={index}
                        className="text-muted-foreground leading-relaxed"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={openWizard}
                className="text-sm font-semibold text-primary hover:text-primary-hover flex items-center gap-1.5 transition-colors"
              >
                {data.about.buttonText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Credential cards */}
          <div className="col-span-4 lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-4">
            {[
              { label: "NAAC Rating", value: "A++", sub: "Highest academic quality grade", color: "bg-accent border-accent/40" },
              { label: "NIRF Rank", value: "#1", sub: "Open Universities 2025", color: "bg-accent border-accent/40" },
              { label: "Programmes", value: "20+", sub: "Online & distance modes", color: "bg-accent border-accent/40" },
              { label: "Students", value: "38L+", sub: "Active enrolled learners", color: "bg-accent border-accent/40" },
            ].map((c) => (
              <div key={c.label} className={`rounded-2xl border p-5 ${c.color}`}>
                <p className="text-xs font-semibold text-muted-foreground mb-1">{c.label}</p>
                <p className="text-3xl font-black text-black mb-1">{c.value}</p>
                <p className="text-xs text-muted-foreground leading-tight">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}