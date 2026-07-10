"use client";

import { useState } from "react";

import CareerStat from "./career-stat";
import CareerJob from "./career-job";

import {
  IndianRupee,
  TrendingUp,
  Building2,
  PhoneCall,
} from "lucide-react";

const INITIAL_VISIBLE = 6;

function parseMaxSalary(salary) {
  const nums = salary.match(/\d+(\.\d+)?/g);
  if (!nums) return 0;
  return parseFloat(nums[nums.length - 1]);
}

export default function Careers({ data, openWizard }) {
  const career = data.career;

  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(career.jobs.map((job) => job.category).filter(Boolean)),
  ];

  const sortedJobs = [...career.jobs]
    .filter(
      (job) => activeCategory === "All" || job.category === activeCategory
    )
    .sort((a, b) => parseMaxSalary(b.salary) - parseMaxSalary(a.salary));

  const topMax = sortedJobs.length ? parseMaxSalary(sortedJobs[0].salary) : 1;
  const visibleJobs = showAll ? sortedJobs : sortedJobs.slice(0, INITIAL_VISIBLE);
  const remaining = sortedJobs.length - visibleJobs.length;

  return (
    <section id="careers" className="py-10">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-dark">
          Career Outcomes
        </span>

        <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
          Build Your Career After IGNOU Online MBA
        </h2>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-muted-foreground">
          {career.description}
        </p>

        {/* Navy stat band */}

        <div className="mt-8 overflow-hidden rounded-t-2xl border border-accent/30 bg-accent-tint">
          <div className="grid grid-cols-3 divide-x divide-accent/20">

            <CareerStat
              icon={IndianRupee}
              value={career.averagePackage}
              label="Average package"
            />

            <CareerStat
              icon={TrendingUp}
              value={career.salaryHike}
              label="Average salary hike"
              accent
            />

            <CareerStat
              icon={Building2}
              value={`${career.industries.length}+`}
              label="Hiring industries"
            />

          </div>
        </div>

        {/* Job grid card */}

        <div className="rounded-b-2xl border border-t-0 border-slate-200 bg-white p-6">

          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-foreground">
              Top career opportunities
            </h3>
            <span className="text-xs font-medium text-muted-foreground">
              Sorted by package
            </span>
          </div>

          {categories.length > 2 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowAll(false);
                  }}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-foreground text-white"
                      : "border border-slate-200 text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {visibleJobs.map((job, index) => (
              <CareerJob
                key={job.title}
                job={job}
                isTop={index === 0 && activeCategory === "All"}
                barPct={Math.max(
                  30,
                  Math.round((parseMaxSalary(job.salary) / topMax) * 100)
                )}
                delay={index * 0.05}
              />
            ))}
          </div>

          {remaining > 0 && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-4 w-full rounded-xl border border-accent/30 py-2.5 text-sm font-medium text-accent-dark transition-colors hover:border-accent-dark hover:bg-accent-tint"
            >
              Show {remaining} more role{remaining > 1 ? "s" : ""}
            </button>
          )}

        </div>

        {/* CTA */}

        <div className="mt-10 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-primary-tint via-white to-accent-tint">

          <div className="flex flex-col items-start justify-between gap-8 p-8 lg:flex-row lg:items-center">

            {/* Left */}

            <div className="max-w-2xl">

              <span className="inline-flex rounded-full bg-accent-tint px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-dark">
                Take the Next Step
              </span>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
                Ready to Start Your MBA Journey?
              </h3>

              <p className="mt-3 max-w-2xl text-lg leading-7 text-muted-foreground">
                Speak with an IGNOU admission expert to get personalized guidance on
                eligibility, specializations, fees, scholarships and the admission
                process.
              </p>

            </div>

            {/* Buttons */}

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

              <button
                onClick={openWizard}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-primary-dark"
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
