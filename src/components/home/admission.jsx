"use client";

import { useState, useEffect, useRef } from "react";
import { TIMELINE_STEPS } from "@/data/timeline";

export default function AdmissionsSection({ openWizard }) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(i);
        },
        { threshold: 0.5, rootMargin: "0px 0px -30% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section id="admissions" ref={sectionRef} className="bg-gradient-to-b from-[#FFFDF7] via-[#FFF9EB] to-[#FFF4D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="py-20 grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#F6C94A]" />
              <span className="text-[#F6C94A] text-xs font-semibold uppercase tracking-widest">
                Admissions 2026
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight mb-5">
              Don't apply alone.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6C94A] via-[#FFD96A] to-[#FFE79A]">
                Here's why.
              </span>
            </h2>
            <p className="text-black/70 text-sm leading-relaxed">
              The IGNOU Samarth portal has no guidance built in. Most students pick the wrong programme,
              upload wrong documents, or miss fee deadlines — on their own. Our counsellors
              sit alongside you at every step so none of that happens to you.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="bg-[#F6C94A]/10 border border-[#F6C94A]/30 rounded-2xl p-5">
              <p className="text-[#F6C94A] text-sm font-bold mb-2">Current Deadline</p>
              <p className="text-black/80 text-xs leading-relaxed">
                July 2026 session — Fresh applications close{" "}
                <strong className="text-[#FFD96A]">July 15, 2026</strong>. Re-registration closes{" "}
                <strong className="text-[#FFD96A]">June 30, 2026</strong>.
              </p>
            </div>
            <button
              onClick={openWizard}
              className="flex items-center justify-between gap-4 bg-[#F6C94A] hover:bg-[#FFD96A] text-[#061122] transition-colors rounded-2xl p-5 group"
            >
              <div>
                <p className="text-black font-bold text-sm mb-0.5">Talk to a counsellor first</p>
                <p className="text-black/70 text-xs translate-x-7">Free · No commitment · Takes 15 minutes</p>
              </div>
              <svg className="w-5 h-5 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sticky scroll timeline */}
        <div className="flex gap-0 lg:gap-16 pb-10">

          {/* LEFT — sticky step tracker (desktop only) */}
          <div className="hidden lg:block w-64 flex-shrink-0 sticky top-24 h-fit">
            <div className="relative flex flex-col gap-1">
              <div className="absolute left-8 top-5 bottom-5 w-px bg-[#F6C94A]/40" />
              {TIMELINE_STEPS.map((step, i) => {
                const isLS = step.who === "ls";
                const isActive = activeStep === i;
                const isPast = i < activeStep;
                return (
                  <button
                    key={i}
                    onClick={() => stepRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-all duration-300 hover:bg-white/5"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black border transition-all duration-300 z-10 ${
                      isActive
                        ? isLS
                          ? "bg-[#F6C94A] border-[#FFE79A] text-[#061122] scale-110 shadow-lg shadow-[#0B6089]/40"
                          : "bg-[#F6C94A] border-[#FFE79A] text-[#061122] scale-110"
                        : isPast
                        ? "bg-white border-yellow-200 text-[#C79A22]"
                        : "bg-white border-yellow-200 text-[#C79A22]"
                    }`}>
                      {isPast && !isActive ? "✓" : String(i + 1).padStart(2, "0")}
                    </div>
                    <span className={`text-xs font-semibold leading-tight transition-all duration-300 ${
                      isActive ? "text-[#F6C94A]" : isPast ? "text-black" : "text-black"
                    }`}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — scrollable step cards */}
          <div className="flex-1 flex flex-col">
            {TIMELINE_STEPS.map((step, i) => {
              const isLS = step.who === "ls";
              const isActive = activeStep === i;
              return (
                <div
                  key={i}
                  ref={(el) => (stepRefs.current[i] = el)}
                  className="min-h-[60vh] flex items-center py-10 lg:py-16"
                >
                  <div className={`w-full rounded-2xl p-6 sm:p-8 border transition-all duration-500 ${
                    isActive
                      ? isLS
                        ? "bg-white/80 border-[#F6C94A]/40 shadow-xl shadow-[#F6C94A]/20"
                        : "bg-white/80 border-[#F6C94A]/40 shadow-xl shadow-[#F6C94A]/20"
                      : isLS
                      ? "bg-[#FFFCF3] border-[#F5E6AE]"
                      : "bg-[#FFFCF3] border-[#F5E6AE]"
                  }`}>

                    {/* Step header */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3 flex-wrap">
                        {/* Number badge */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black border-2 transition-all duration-500 ${
                          isLS
                            ? "bg-[#F6C94A] text-[#061122] border-[#FFE79A]"
                            : "bg-[#F6C94A] text-[#061122] border-[#FFE79A]"
                        }`}>
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-black/60 block translate-y-3">
                            {step.label}
                          </span>
                          <span className={`text-[10px] font-bold uppercase tracking-widest text-black px-2 py-0.5 rounded-full ${step.pillColor}`}>
                            {step.pill}
                          </span>
                        </div>
                      </div>
                      <span className="text-3xl flex-shrink-0">{step.icon}</span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl sm:text-2xl font-black mb-3 leading-snug transition-all duration-500 ${
                      isActive ? "text-black" : "text-black/50"
                    }`}>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-5 transition-all duration-500 ${
                      isActive ? "text-black/80" : "text-black/30"
                    }`}>
                      {step.desc}
                    </p>

                    {/* Highlight callout */}
                    <div className={`flex items-start gap-2 rounded-xl px-4 py-3 transition-all duration-500 ${
                      isActive
                        ? isLS
                          ? "bg-[#F6C94A]/[0.15] border border-[#F6C94A]/[0.25]"
                          : "bg-[#F6C94A]/[0.15] border border-[#F6C94A]/[0.25]"
                        : "bg-transparent border border-transparent"
                    }`}>
                      <span className={`mt-0.5 flex-shrink-0 font-bold transition-colors duration-500 ${isActive ? "text-[#FFD96A]" : "text-transparent"}`}></span>
                      <p className={`text-xs leading-relaxed italic transition-all duration-500 ${
                        isActive ? "text-black/80" : "text-transparent"
                      }`}>
                        {step.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pb-20 text-center">
          <button
            onClick={openWizard}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F6C94A] hover:bg-[#FFD96A] text-[#061122] font-semibold text-sm rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0B6089]/25"
          >
            Book a free call — July 2026 seats filling fast
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}