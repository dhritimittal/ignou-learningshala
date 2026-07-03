"use client";

import {
  Megaphone,
  Landmark,
  Users,
  Factory,
  ChartColumnIncreasing,
  HeartPulse,
  Package,
  BriefcaseBusiness,
  TrendingUp,
  IndianRupee,
  CheckCircle2,
} from "lucide-react";

const ICONS = {
  Megaphone,
  Landmark,
  Users,
  Factory,
  ChartColumnIncreasing,
  HeartPulse,
  Package,
  BriefcaseBusiness,
};

export default function SpecializationDetails({ specialization }) {
  const Icon = ICONS[specialization.icon];

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">

      <div className="grid lg:grid-cols-[1.55fr_.75fr]">

        {/* LEFT */}

        <div className="p-7 lg:p-8">

          <div className="flex items-center gap-5">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFF8DD]">

              {Icon && (
                <Icon
                  size={26}
                  className="text-[#D39B00]"
                />
              )}

            </div>

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D39B00]">
                Specialization
              </span>

              <h3 className="mt-1 text-3xl font-bold text-[#061122]">
                {specialization.title}
              </h3>

            </div>

          </div>

          <p className="mt-5 max-w-2xl text-[17px] leading-7">
            {specialization.description}
          </p>

          <div className="mt-7">

            <h4 className="text-lg font-semibold text-[#061122]">
              Typical Career Roles
            </h4>

            <div className="mt-4 grid gap-x-8 gap-y-3 md:grid-cols-2">

              {specialization.careers.map((career) => (

                <div
                  key={career}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#D39B00]"
                  />

                  <span className="text-slate-700">
                    {career}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="border-l border-slate-200 bg-[#FCFDFE] p-7 lg:p-8">

          <div className="space-y-6">

            <div>

              <div className="flex items-center gap-2 text-[#D39B00]">

                <IndianRupee size={18} />

                <span className="text-sm font-semibold uppercase tracking-wider">
                  Average Salary
                </span>

              </div>

              <p className="mt-1 text-[30px] font-black leading-none">
                {specialization.salary}
              </p>

            </div>

            <div>

              <div className="flex items-center gap-2 text-[#D39B00]">

                <TrendingUp size={18} />

                <span className="text-sm font-semibold uppercase tracking-wider">
                  Industry Demand
                </span>

              </div>

              <p className="mt-1 text-xl font-bold">
                {specialization.demand}
              </p>

            </div>

            <div className="rounded-xl bg-[#FFF8DD] p-5">

                <h4 className="text-center text-[15px] leading-6 font-bold text-[#061122]">
                    Unsure which specialization is right for you?
                </h4>

                <button
                    className="
                    mt-5
                    w-full
                    rounded-xl
                    bg-[#F6C94A]
                    px-5
                    py-3
                    font-semibold
                    text-[#061122]
                    transition
                    hover:brightness-95
                    "
                >
                    Talk to an Admission Expert
                </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}