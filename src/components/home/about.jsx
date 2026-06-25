"use client";

import { useState, useEffect } from "react";
import AccentDivider from "@/components/ui/accentdivider";
import Badge from "@/components/ui/badge";

export default function AboutSection({ openWizard }) {
  return (
    <section id="about" className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <AccentDivider />
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-5">
                India's{" "}
                <span className="bg-gradient-to-r from-[#C79A22] to-[#F6C94A] bg-clip-text text-transparent">
                    largest
                </span>{" "}
                open university —
                <br />
                now fully online.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Indira Gandhi National Open University (IGNOU), established by Parliament in 1985, has continuously
              built an inclusive knowledge society by eliminating barriers of geography, age, and economics.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Its Centre for Online Education (COE), launched in 2019, extends this mission to a fully digital format —
              the same UGC-DEB accredited degrees, the same NAAC A++ quality, accessible from anywhere in the world
              through the Samarth portal.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              With 21 Schools of Studies, 20+ programmes, and partnerships with international institutions across
              25 countries, IGNOU has ranked #1 in NIRF 2025 for open universities.
            </p>
            <div className="flex gap-4">
              <button
                onClick={openWizard}
                className="text-sm font-semibold text-[#B8860B] hover:text-blue-900 flex items-center gap-1.5 transition-colors"
              >
                Read more about IGNOU
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Credential cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "NAAC Rating", value: "A++", sub: "Highest academic quality grade", color: "bg-[#F6C94A] border-[#F6C94A]/40" },
              { label: "NIRF Rank", value: "#1", sub: "Open Universities 2025", color: "bg-[#F6C94A] border-[#F6C94A]/40" },
              { label: "Programmes", value: "20+", sub: "Online & distance modes", color: "bg-[#F6C94A] border-[#F6C94A]/40" },
              { label: "Students", value: "38L+", sub: "Active enrolled learners", color: "bg-[#F6C94A] border-[#F6C94A]/40" },
            ].map((c) => (
              <div key={c.label} className={`rounded-2xl border p-5 ${c.color}`}>
                <p className="text-xs font-semibold text-slate-500 mb-1">{c.label}</p>
                <p className="text-3xl font-black text-black mb-1">{c.value}</p>
                <p className="text-xs text-slate-500 leading-tight">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}