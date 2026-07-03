import {
  BadgeCheck,
  IndianRupee,
  GraduationCap,
  Download,
} from "lucide-react";

export default function FeeSummary({ data }) {
  return (
    <div className="flex flex-col justify-between">

      {/* Heading */}

      <div>

        <span className="text-sm font-semibold uppercase tracking-widest text-[#0B6089]">
          Total Programme Fee
        </span>

        <h3 className="mt-5 text-4xl lg:text-5xl font-black tracking-tight text-[#061122]">
          {data.fee}
        </h3>

        <p className="mt-3 max-w-lg text-lg leading-7 text-slate-600">
          Complete programme fee inclusive of tuition charges.
          Examination fees and re-registration charges, if applicable,
          are payable separately as per IGNOU guidelines.
        </p>

      </div>

      {/* Benefits */}

      <div className="mt-4 space-y-1">

        <div className="flex items-center gap-3">

          <IndianRupee
            size={22}
            className="text-[#0B6089]"
          />

          <span className="text-lg text-slate-700">
            Affordable fee structure with no hidden tuition costs
          </span>

        </div>

        <div className="flex items-center gap-3">

          <GraduationCap
            size={22}
            className="text-[#0B6089]"
          />

          <span className="text-lg text-slate-700">
            Scholarships & fee concessions available for eligible learners
          </span>

        </div>

      </div>

      {/* CTA */}

      <div className="mt-6">

        <button
          className="
          inline-flex
          items-center
          gap-3
          rounded-2xl
          border
          border-[#0B6089]
          px-6
          py-4
          font-semibold
          text-[#0B6089]
          transition
          hover:bg-[#0B6089]
          hover:text-white
        "
        >

          <Download size={18} />

          Download Fee Structure

        </button>

      </div>

    </div>
  );
}