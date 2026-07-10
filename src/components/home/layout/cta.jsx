"use client";

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CTASection({ openWizard }) {

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
              "radial-gradient(circle, #60A5FA 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Decorative Arc */}
      <svg
        className="absolute -left-32 -top-32 w-[600px] h-[600px] opacity-5 hidden md:block"
        viewBox="0 0 600 600"
      >
        <circle cx="300" cy="300" r="260" stroke="#60A5FA" fill="none" />
        <circle cx="300" cy="300" r="180" stroke="#60A5FA" fill="none" />
      </svg>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-6 lg:px-8">

        {/* MASTER CARD */}
        <div className="rounded-[28px] lg:rounded-[40px] overflow-visible">

          {/* HERO */}
          <div className="relative bg-[#0A1A30] rounded-[40px]">

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-auto lg:min-h-[320px] items-center">

              {/* LEFT */}
              <div className="px-6 py-10 sm:px-8 lg:px-12 lg:py-20">

                <p className="text-[#4a9fc0] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  Free Counselling
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  Write Your Career Story, Your Way
                </h2>

                <p className="text-[#a8d4e6]/70 mb-10 max-w-full lg:max-w-lg">
                  Because we stand by you in every step of the journey!
                </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2 pb-10 lg:pb-0">

                    <button
                      onClick={openWizard}
                      className="
                        px-8 py-4
                        bg-[#0B6089]
                        hover:bg-[#0d70a0]
                        text-white
                        font-semibold
                        rounded-xl
                        transition-all
                      "
                    >
                      Book a Free Call
                    </button>

                    <button
                      className="
                        px-8 py-4
                        bg-green-600
                        hover:bg-green-500
                        text-white
                        font-semibold
                        rounded-xl
                        transition-all
                      "
                    >
                      Reach Out on WhatsApp
                    </button>

                  </div>
                
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative hidden lg:flex justify-center items-end h-full overflow-visible">

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#0A1A30]
                    via-[#0A1A30]/40
                    to-transparent
                  "
                />

                <img
                  src="/counsellor.png"
                  alt="Student Support"
                  className="
                    absolute
                    bottom-0
                    translate-y-12
                    h-[620px]
                    object-contain
                    -translate-x-10
                    z-20
                  "
                />
              </div>

            </div>
          </div>

          {/* FOOTER CARD */}
          <div
            className="
              bg-white
              relative
              -mt-8
              mx-3
              sm:mx-5
              lg:mx-6
              rounded-[32px]
              shadow-2xl
              z-20
            "
          >
            <div className="px-5 py-8 sm:px-8 lg:px-14 lg:py-10">

              <div className="hidden lg:grid lg:grid-cols-5 gap-8">

                {/* ACCREDITATION COLUMN */}
                <div>

                  <div className="space-y-5">

                    <div className="flex items-center gap-3">
                      <img
                        src="/logo.png"
                        alt=""
                        className="h-10"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <img
                        src="/accreditations/nirf.png"
                        alt=""
                        className="h-10"
                      />
                      <div>
                        <p className="font-semibold text-slate-800">
                          NIRF Ranked
                        </p>
                        <p className="text-sm text-slate-500">
                          Top Open University
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <img
                        src="/accreditations/naac.png"
                        alt=""
                        className="h-10"
                      />
                      <div>
                        <p className="font-semibold text-slate-800">
                          NAAC A++
                        </p>
                        <p className="text-sm text-slate-500">
                          Accredited
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* PROGRAMMES */}
                <div>
                  <h3 className="font-bold text-slate-900 mb-5">
                    Programmes
                  </h3>

                  {[
                    "Online Programmes",
                    "Distance Learning",
                    "All Courses",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block mb-3 text-slate-500 hover:text-[#0B6089]"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* RESOURCES */}
                <div>
                  <h3 className="font-bold text-slate-900 mb-5">
                    Resources
                  </h3>

                  {[
                    "eGyankosh Library",
                    "Samarth Portal",
                    "Gyan Darshan",
                    "FAQ",
                    "Announcements",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block mb-3 text-slate-500 hover:text-[#0B6089]"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* SUPPORT */}
                <div>
                  <h3 className="font-bold text-slate-900 mb-5">
                    Contact & Support
                  </h3>

                  <p className="text-slate-500 mb-2">
                    Monday – Saturday
                  </p>

                  <p className="font-semibold mb-5">
                    10:00 AM – 7:00 PM
                  </p>

                  <p className="text-slate-500">
                    Sunday Closed
                  </p>
                </div>

                {/* STATS */}
                <div>

                  <h3 className="font-bold text-slate-900 mb-5">
                    IGNOU At A Glance
                  </h3>

                  <div className="space-y-4">

                    <div>
                      <div className="text-2xl lg:text-3xl font-black text-[#0B6089]">
                        38L+
                      </div>
                      <div className="text-slate-500">
                        Learners
                      </div>
                    </div>

                    <div>
                      <div className="text-3xl font-black text-[#0B6089]">
                        A++
                      </div>
                      <div className="text-slate-500">
                        NAAC Grade
                      </div>
                    </div>

                    <div>
                      <div className="text-3xl font-black text-[#0B6089]">
                        1985
                      </div>
                      <div className="text-slate-500">
                        Established
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="lg:hidden">

                {/* Accreditation Block */}
                <div className="mb-8 border-b border-slate-200 pb-2 grid grid-cols-3">
                  
                  <div className="flex items-center gap-3">
                    <img
                      src="/logo.png"
                      alt="IGNOU"
                      className="h-10"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src="/accreditations/nirf.png"
                      className="h-10"
                      alt=""
                    />
                    <div>
                      <p className="font-semibold text-slate-900">
                        NIRF Ranked
                      </p>
                      <p className="text-sm text-slate-500">
                        Top Open University
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src="/accreditations/naac.png"
                      className="h-10"
                      alt=""
                    />
                    <div>
                      <p className="font-semibold text-slate-900">
                        NAAC A++
                      </p>
                      <p className="text-sm text-slate-500">
                        Accredited
                      </p>
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible>

                  <AccordionItem value="programmes">
                    <AccordionTrigger>
                      Programmes
                    </AccordionTrigger>

                    <AccordionContent>
                      {[
                        "Online Programmes",
                        "Distance Learning",
                        "All Courses",
                      ].map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block py-2 text-slate-500 hover:text-[#0B6089]"
                        >
                          {item}
                        </a>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="resources">
                    <AccordionTrigger>
                      Resources
                    </AccordionTrigger>

                    <AccordionContent>
                      <div className="flex flex-col gap-3 pt-2">
                        {[
                          "eGyankosh Library",
                          "Samarth Portal",
                          "Gyan Darshan",
                          "FAQ",
                          "Announcements",
                        ].map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="text-slate-500 hover:text-[#0B6089] transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="support">
                    <AccordionTrigger>
                      Contact & Support
                    </AccordionTrigger>

                    <AccordionContent>
                      <p className="text-slate-500">
                        Monday – Saturday
                      </p>

                      <p className="font-semibold">
                        10:00 AM – 7:00 PM
                      </p>

                      <p className="text-slate-500">
                        Sunday Closed
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>

                {/* Stats */}
                <div className="mt-8 border-t border-slate-200 pt-2">

                  <h3 className="font-bold text-slate-900 mb-3">
                    IGNOU At A Glance
                  </h3>

                  <div className="grid grid-cols-3 gap-4">

                    <div>
                      <p className="text-2xl font-black text-[#0B6089]">
                        38L+
                      </p>

                      <p className="text-sm text-slate-500">
                        Learners
                      </p>
                    </div>

                    <div>
                      <p className="text-2xl font-black text-[#0B6089]">
                        A++
                      </p>

                      <p className="text-sm text-slate-500">
                        NAAC Grade
                      </p>
                    </div>

                    <div>
                      <p className="text-2xl font-black text-[#0B6089]">
                        1985
                      </p>

                      <p className="text-sm text-slate-500">
                        Established
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              <div className="border-t border-slate-200 mt-2 pt-2 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between text-sm text-slate-500">
                
                <p className="max-w-2xl">
                  Disclaimer: We act solely as an information partner and do not conduct or facilitate admissions to IGNOU. For admissions, please visit the official IGNOU website or contact the university directly. IGNOU University holds full rights to request changes or removal of any non-relevant content. Images used are for illustrative purposes only and do not directly represent the respective colleges or universities.
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