import {
  BadgeCheck,
  IndianRupee,
  GraduationCap,
  Download,
} from "lucide-react";

export default function FeeSummary({ data, openWizard }) {
  return (
    <div className="flex flex-col justify-between">

      {/* Heading */}

      <div>

        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Total Programme Fee
        </span>

        <h3 className="mt-5 text-4xl lg:text-5xl font-black tracking-tight text-foreground">
          {data.fee}
        </h3>

        <p className="mt-3 max-w-lg text-lg leading-7 text-muted-foreground">
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
            className="text-primary"
          />

          <span className="text-lg text-foreground">
            Affordable fee structure with no hidden tuition costs
          </span>

        </div>

        <div className="flex items-center gap-3">

          <GraduationCap
            size={22}
            className="text-primary"
          />

          <span className="text-lg text-foreground">
            Scholarships & fee concessions available for eligible learners
          </span>

        </div>

      </div>

      {/* CTA */}

      <div className="mt-6">

        <button
          onClick={openWizard}
          className="
          inline-flex
          items-center
          gap-3
          rounded-2xl
          border
          border-primary
          px-6
          py-4
          font-semibold
          text-primary
          transition
          hover:bg-primary
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