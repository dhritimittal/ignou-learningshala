"use client";

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function CTASection({ openWizard, data }) {

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#061122] py-12 md:py-16 lg:pt-16 lg:pb-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--primary-light) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Decorative Arc */}
      <svg
        className="absolute -left-32 -top-32 w-[600px] h-[600px] opacity-5 hidden md:block"
        viewBox="0 0 600 600"
      >
        <circle cx="300" cy="300" r="260" stroke="var(--primary-light)" fill="none" />
        <circle cx="300" cy="300" r="180" stroke="var(--primary-light)" fill="none" />
      </svg>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-6 lg:px-8">

        {/* MASTER CARD */}
        <div className="rounded-[28px] lg:rounded-[40px] overflow-hidden">

          {/* HERO */}
          <div className="relative bg-primary-dark rounded-[40px]">

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-auto lg:min-h-[320px] items-center">

              {/* LEFT */}
              <div className="px-6 py-10 sm:px-8 lg:px-12 lg:py-20">

                <p className="text-primary-light text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  Free Counselling
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  Write Your Career Story, Your Way
                </h2>

                <p className="text-primary-light mb-10 max-w-full lg:max-w-lg">
                  Because we stand by you in every step of the journey!
                </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2 pb-10 lg:pb-0">

                    <button
                      onClick={openWizard}
                      className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-all"
                    >
                      Book a Free Call
                    </button>

                    <button
                      onClick={openWizard}
                      className="px-8 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold rounded-xl transition-all"
                    >
                      Reach Out on WhatsApp
                    </button>

                  </div>
                
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative hidden lg:flex justify-center items-end h-full overflow-hidden">

                <img
                  src="/counsellor.png"
                  alt="Student Support"
                  className="absolute bottom-0 translate-y-12 h-[520px] object-contain -translate-x-10 z-20"
                />
              </div>

            </div>
          </div>

          {/* FOOTER CARD */}
          <div
            className="bg-white relative -mt-8 mx-3 sm:mx-5 lg:mx-6 rounded-[32px] shadow-2xl z-20"
          >
            <div className="px-5 py-8 sm:px-8 lg:px-14 lg:py-10">

              <div className="hidden lg:grid lg:grid-cols-3 gap-8">

                {/* ACCREDITATION COLUMN */}
                <div>

                  <div className="space-y-5">

                    <div className="flex items-center gap-3">
                      <img
                        src={data.logo}
                        alt={data.name}
                        className="h-10"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <img
                        src={data.nirf.logo}
                        alt=""
                        className="h-10"
                      />
                      <div>
                        <p className="font-semibold text-foreground">
                          NIRF Ranked
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Top Open University
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <img
                        src={data.naac.logo}
                        alt=""
                        className="h-10"
                      />
                      <div>
                        <p className="font-semibold text-foreground">
                          NAAC A++
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Accredited
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* PROGRAMMES */}
                <div>
                  <h3 className="font-bold text-foreground mb-5">
                    Programmes
                  </h3>

                  {data.programmeFilters.map((filter) => (
                    <Link
                      key={filter.mode}
                      href={`/${data.slug}/?mode=${filter.mode}#programmes`}
                      className="block mb-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {filter.label}
                    </Link>
                  ))}
                </div>

                {/* SUPPORT */}
                <div>
                  <h3 className="font-bold text-foreground mb-5">
                    Contact & Support
                  </h3>

                  <p className="text-muted-foreground mb-2">
                    Monday – Saturday
                  </p>

                  <p className="font-semibold mb-5">
                    10:00 AM – 7:00 PM
                  </p>

                  <p className="text-muted-foreground">
                    Sunday Closed
                  </p>
                </div>

              </div>

              <div className="lg:hidden">

                {/* Accreditation Block */}
                <div className="mb-6 border-b border-slate-200 pb-8 flex flex-wrap justify-between items-center gap-4">
                  
                  <div className="flex items-center gap-3">
                    <img
                      src={data.logo}
                      alt={data.name}
                      className="h-10"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src={data.nirf.logo}
                      className="h-10"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={data.naac.logo}
                      className="h-10"
                      alt=""
                    />
                  </div>
                </div>

                <Accordion type="single" collapsible>

                  <AccordionItem value="programmes">
                    <AccordionTrigger>
                      Programmes
                    </AccordionTrigger>

                    <AccordionContent>
                      {data.programmeFilters.map((filter) => (
                        <Link
                          key={filter.mode}
                          href={`/${data.slug}/?mode=${filter.mode}#programmes`}
                          className="block mb-3 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {filter.label}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="support">
                    <AccordionTrigger>
                      Contact & Support
                    </AccordionTrigger>

                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Monday – Saturday
                      </p>

                      <p className="font-semibold">
                        10:00 AM – 7:00 PM
                      </p>

                      <p className="text-muted-foreground">
                        Sunday Closed
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>

              </div>

              <div className="border-t border-slate-200 mt-6 pt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between text-sm text-muted-foreground">
                
                <p className="max-w-2xl">
                  Disclaimer: We act solely as an information partner and do not conduct or facilitate admissions to {data.name}. For admissions, please visit the official {data.name} website or contact the university directly. {data.name} University holds full rights to request changes or removal of any non-relevant content. Images used are for illustrative purposes only and do not directly represent the respective colleges or universities.
                </p>
    
                <p> © {new Date().getFullYear()} All Rights Reserved </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}