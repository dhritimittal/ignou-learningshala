"use client";

import {
  IndianRupee,
  Clock,
} from "lucide-react";


export default function SpecializationDetails({ specialization, openWizard }) {

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">

      <div className="grid items-stretch lg:grid-cols-[1.6fr_0.75fr]">

        {/* LEFT */}

        <div className="p-7 lg:p-8">

          <div className="space-y-6">

            <div className="flex items-center gap-5">

              <div>

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">
                  Specialization
                </span>

                <h3 className="mt-1 text-3xl font-bold text-foreground">
                  {specialization.title}
                </h3>

              </div>

            </div>

            <p className="mt-5 max-w-2xl text-[17px] leading-7 text-muted-foreground">
              This specialization prepares learners for careers in{" "}
              <span className="font-semibold">{specialization.title}</span>.
              The programme follows a {specialization.duration.toLowerCase()}{" "}
              curriculum with industry-relevant coursework.
            </p>

            <div className="grid gap-8 pt-2 sm:grid-cols-2">

              <div>
                <div className="flex items-center gap-2 text-accent-dark">
                  <Clock size={18} />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Program Duration
                  </span>
                </div>

                <p className="mt-2 text-3xl font-black">
                  {specialization.duration}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-accent-dark">
                  <IndianRupee size={18} />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Program Fee
                  </span>
                </div>

                <p className="mt-2 text-3xl font-black">
                  ₹ {specialization.totalFee.toLocaleString("en-IN")}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT */}

        <div className="flex border-l border-slate-200 bg-background p-7 lg:p-8">

          <div className="flex flex-1 flex-col justify-center rounded-xl bg-accent-tint p-8">

                <h4 className="text-center text-[15px] leading-6 font-bold text-foreground">
                    Unsure which specialization is right for you?
                </h4>

                <button
                    className="mt-6 w-full rounded-2xl bg-accent px-6 py-4 text-lg font-bold text-accent-foreground transition hover:brightness-95"
                    onClick={openWizard}
                >
                    Talk to an Admission Expert
                </button>

            </div>

          </div>

      </div>

    </div>
  );
}