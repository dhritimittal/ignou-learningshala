"use client";

import { useState, useEffect } from "react";

export default function CTASection({ openWizard }) {

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#061122] pt-16 pb-20"
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
        className="absolute -left-32 -top-32 w-[600px] h-[600px] opacity-5"
        viewBox="0 0 600 600"
      >
        <circle cx="300" cy="300" r="260" stroke="#60A5FA" fill="none" />
        <circle cx="300" cy="300" r="180" stroke="#60A5FA" fill="none" />
      </svg>

      <div className="relative max-w-[1600px] mx-auto px-8">

        {/* MASTER CARD */}
        <div className="rounded-[40px] overflow-visible">

          {/* HERO */}
          <div className="relative bg-[#0A1A30] rounded-[40px]">

            <div className="grid lg:grid-cols-2 min-h-[320px] items-center">

              {/* LEFT */}
              <div className="p-8 lg:px-12 lg:py-20 z-20">

                <p className="text-[#4a9fc0] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  Free Counselling
                </p>

                <h2 className="text-5xl font-black text-white mb-4 leading-tight">
                  Advance Your Learning Journey
                </h2>

                <p className="text-[#a8d4e6]/70 mb-10 max-w-lg">
                  Connect with an IGNOU academic advisor and get guidance on
                  programmes, eligibility, admissions, fees and career outcomes.
                </p>

                  <div className="flex flex-wrap gap-3 pt-2">

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
                    -top-20
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
              mx-6
              rounded-[32px]
              shadow-2xl
              z-20
            "
          >
            <div className="px-10 lg:px-14 py-10">

              <div className="grid lg:grid-cols-5 gap-8">

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
                      <div className="text-3xl font-black text-[#0B6089]">
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

              <div className="border-t border-slate-200 mt-12 pt-6 flex justify-between text-sm text-slate-500">
                
                <p>
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