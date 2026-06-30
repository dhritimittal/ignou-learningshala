"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { PROGRAMMES } from "@/data/home/programmes";

export default function ProgrammeMegaMenu({
  open,
  openWizard,
}) {
  if (!open) return null;

  const online = PROGRAMMES.filter((p) =>
    p.slug.startsWith("online")
  );

  const distance = PROGRAMMES.filter((p) =>
    p.slug.startsWith("distance")
  );

  const onlinePG = online.filter((p) => p.level === "PG");
  const onlineUG = online.filter((p) => p.level === "UG");
  const onlineDiploma = online.filter(
    (p) => p.level === "Diploma"
  );

  const distancePG = distance.filter(
    (p) => p.level === "PG"
  );

  const distanceUG = distance.filter(
    (p) => p.level === "UG"
  );

  const popular = [
    "online-mba",
    "distance-mba",
    "online-mca",
    "distance-bca",
  ];

  const ProgrammeList = ({ title, items }) => (
    <div>

      <div className="flex items-center gap-2 mb-4">

        <GraduationCap
          size={16}
          className="text-[#0B6089]"
        />

        <h3 className="font-semibold text-[#061122]">
          {title}
        </h3>

      </div>

      <div className="space-y-1">

        {items.map((programme) => (

          <Link
            key={programme.slug}
            href={`/course/${programme.slug}`}
            className="
              group
              flex
              items-center
              justify-between
              rounded-xl
              px-3
              py-2.5
              transition-all
              duration-200
              hover:bg-[#F8FBFD]
              hover:translate-x-1
            "
          >

            <span
              className="
                text-[15px]
                text-slate-700
                group-hover:text-[#0B6089]
              "
            >
              {programme.name}
            </span>

            {popular.includes(programme.slug) && (

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-wider
                  bg-[#F6C94A]
                  text-[#061122]
                  px-2
                  py-1
                  rounded-full
                "
              >
                Popular
              </span>

            )}

          </Link>

        ))}

      </div>

    </div>
  );

  return (
    <div  className="
    absolute
    top-full
    left-0
    pt-5
    w-[min(1200px,calc(100vw-48px))]
    rounded-3xl
    border
    border-slate-200
    bg-white
    shadow-2xl
    overflow-hidden
    z-50
  "
>

  {/* Header */}

  <div className="px-10 py-6 border-b border-slate-100 flex items-center justify-between">

    <div>

      <p className="text-sm font-medium text-[#0B6089]">
        Browse IGNOU Programmes
      </p>

      <h2 className="text-2xl font-bold text-[#061122] mt-1">
        Find the programme that's right for you
      </h2>

    </div>

    <div className="flex items-center gap-2 rounded-full bg-[#FFF8E7] px-4 py-2">

      <span className="h-2 w-2 rounded-full bg-[#F6C94A]" />

      <span className="text-sm font-medium text-[#7A5A00]">
        Admissions Open
      </span>

    </div>

  </div>

  {/* Body */}

  <div className="grid grid-cols-2 gap-14 px-10 py-8">

    {/* ONLINE */}

    <div>

      <h2 className="text-xl font-bold text-[#061122] mb-8">
        Online Programmes
      </h2>

      <div className="grid grid-cols-2 gap-10">

        <ProgrammeList
          title="Postgraduate"
          items={onlinePG}
        />

        <ProgrammeList
          title="Undergraduate"
          items={onlineUG}
        />

      </div>

      <div className="mt-10">

        <ProgrammeList
          title="Diploma & Certificate"
          items={onlineDiploma}
        />

      </div>

    </div>

    {/* DISTANCE */}

    <div>

      <h2 className="text-xl font-bold text-[#061122] mb-8">
        Distance Programmes
      </h2>

      <div className="grid grid-cols-2 gap-10">

        <ProgrammeList
          title="Postgraduate"
          items={distancePG}
        />

        <ProgrammeList
          title="Undergraduate"
          items={distanceUG}
        />

      </div>

    </div>

  </div>

  {/* Bottom CTA */}

  <div className="border-t border-slate-100 bg-[#FCFDFE] px-10 py-6 flex items-center justify-between">

    <div>

      <p className="font-semibold text-[#061122]">
        Still unsure which programme is right for you?
      </p>

      <p className="text-sm text-slate-500 mt-1">
        Speak with an IGNOU admission expert for free personalised guidance.
      </p>

    </div>

    <button
      onClick={openWizard}
      className="
        flex
        items-center
        gap-2
        rounded-xl
        bg-[#0B6089]
        px-6
        py-3
        font-semibold
        text-white
        transition
        hover:bg-[#084d6e]
      "
    >
      Start Free Counselling

      <ArrowRight size={18} />
    </button>

  </div>

</div>
  );
}