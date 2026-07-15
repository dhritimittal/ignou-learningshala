import {
  BadgeCheck,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export default function ScholarshipBanner({openWizard}) {
  return (
    <div className="mt-8">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 rounded-full bg-white px-8 py-3 shadow-sm">

        {/* Left */}

        <div className="flex items-center gap-4">

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-tint">

            <GraduationCap
              size={20}
              className="text-primary"
            />

          </div>

          <div>

            <p className="font-semibold text-foreground">
              Scholarships & Fee Concessions
            </p>

            <p className="text-sm text-muted-foreground">
              Eligible learners can avail scholarships,
              fee reimbursement and government financial
              assistance wherever applicable.
            </p>

          </div>

        </div>

        {/* Right */}

        <button
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-primary
            px-5
            py-3
            font-semibold
            bg-primary
            text-white
          "
          onClick={openWizard}
        >

          Check Eligibility

          <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );
}