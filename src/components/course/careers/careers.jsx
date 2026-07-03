"use client";

import CareerStat from "./career-stat";
import CareerJob from "./career-job";

import {
  IndianRupee,
  TrendingUp,
  Building2,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

export default function Careers({ data, openWizard }) {
  const career = data.career;

  return (
    <section
      id="careers"
      className="py-10"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D39B00]">
          Career Outcomes
        </span>

        <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#061122]">
          Build Your Career After IGNOU Online MBA
        </h2>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
          {career.description}
        </p>

        <div className="mt-6">
            <div className="grid gap-4 md:grid-cols-3">

                <CareerStat
                    icon={IndianRupee}
                    value={career.averagePackage}
                    label="Average Package"
                />

                <CareerStat
                    icon={TrendingUp}
                    value={career.salaryHike}
                    label="Average Salary Hike"
                />

                <CareerStat
                    icon={Building2}
                    value={`${career.industries.length}+`}
                    label="Hiring Industries"
                />

            </div>

            <div className="mt-6 mx-auto max-w-5xl">

                <h3 className="text-2xl font-bold text-[#061122]">
                Top Career Opportunities
                </h3>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white">

                {career.jobs.map((job, index) => (
                    <CareerJob
                    key={job.title}
                    job={job}
                    last={index === career.jobs.length - 1}
                    />
                ))}

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-10 overflow-hidden rounded-3xl border border-[#D39B00]/20 bg-gradient-to-r from-[#FFF9EA] via-white to-[#EDF8FD]">

          <div className="flex flex-col items-start justify-between gap-8 p-8 lg:flex-row lg:items-center">

            {/* Left */}

            <div className="max-w-2xl">

              <span className="inline-flex rounded-full bg-[#FFF3CC] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#D39B00]">
                Take the Next Step
              </span>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-[#061122]">
                Ready to Start Your MBA Journey?
              </h3>

              <p className="mt-3 max-w-2xl text-lg leading-7 text-slate-600">
                Speak with an IGNOU admission expert to get personalized guidance on
                eligibility, specializations, fees, scholarships and the admission
                process.
              </p>

            </div>

            {/* Buttons */}

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

              <button
                onClick={openWizard}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B6089] px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#084A69]"
              >
                <PhoneCall className="h-5 w-5" />
                Talk to an Admission Expert
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}