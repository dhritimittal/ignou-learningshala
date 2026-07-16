"use client";

import { useState, useEffect } from "react";
import { ANNOUNCEMENTS } from "@/data/home/announcements";
import { STATS } from "@/data/home/stats";

export default function HeroSection({ openWizard }) {
  const [announcementIdx, setAnnouncementIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setAnnouncementIdx((i) => (i + 1) % ANNOUNCEMENTS.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[#FCFDFE] via-[#F7FAFC] to-[#EEF5F9]">
      {/* Hero Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/ignou-campus.jpg"
          alt="IGNOU Campus"
          className="absolute right-0 top-0 h-full w-full object-cover object-center opacity-90"
        />

        {/* Strong fade from left */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#F7FAFC] via-[#F7FAFC]/75 via-[#F7FAFC]/60 to-transparent"
        />
        
      </div>

      {/* Announcement ticker */}
      <div className="relative mt-16 bg-card/90 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-3">
          <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
            Latest
          </span>
          <p key={announcementIdx} className="text-xs text-muted-foreground truncate transition-all">
            {ANNOUNCEMENTS[announcementIdx]}
          </p>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
                Established 1985 · Act of Parliament
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] tracking-tight mb-6">
              Education{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-light/50">
                without walls.
              </span>
              <br />
              Learning beyond borders.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
              IGNOU's Centre for Online Education brings UGC-approved, NAAC A++ certified degrees to
              38 lakh+ learners across 25 countries — at a price that's never a barrier.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={openWizard}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-sm rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                Get Free Counselling
              </button>
              <a
                href="#programmes"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-primary/60 text-primary hover:bg-secondary hover:border-blue-500 font-semibold text-sm rounded-xl transition-all duration-200"
              >
                Browse Programmes
              </a>
            </div>

            {/* Inline trust badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "NAAC A++", logo: "/accreditations/naac.png" },
                { label: "UGC-DEB Approved", logo: "/accreditations/ugc-deb.png" },
                { label: "NIRF #1 Open Univ.", logo: "/accreditations/nirf.png" },
                { label: "AICTE Recognised", logo: "/accreditations/aicte.png" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="flex items-center gap-2 text-sm font-semibold bg-card border-border text-foreground shadow-sm border border-primary rounded-full px-4 py-2"
                >
                  <img
                    src={b.logo}
                    alt={b.label}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-20 border-t border-primary-dark/60 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-blue-900/40">
            {STATS.map((s) => (
              <div key={s.label} className="py-5 px-4 text-center first:border-l-0">
                <div className="text-2xl font-black text-primary-foreground">{s.value}</div>
                <div className="text-[11px] text-primary-foreground/60 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}