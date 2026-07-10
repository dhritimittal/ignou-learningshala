"use client";

import { useState, useEffect } from "react";
import { FAQS } from "@/data/home/faqs";

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 pb-0 bg-foreground">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[1fr_360px] gap-16">

          {/* Left Column */}
          <div className="space-y-5">

            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-white/10 pb-4"
              >
                <h3 className="text-base font-semibold text-white mb-2">
                  {faq.question}
                </h3>

                <p className="text-sm text-primary-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          {/* Right Column */}
          <div className="lg:sticky lg:top-24 h-fit">

            <p className="text-primary-light text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
              Frequently Asked Questions
            </p>

            <h2 className="text-3xl font-black text-white leading-tight mb-4">
              Everything You Need To Know
            </h2>

            <p className="text-sm text-primary-light leading-relaxed">
              Find answers to the most common questions about admissions,
              eligibility, fees, examinations, recognition and student support.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}