import {
  BadgeCheck,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export default function ScholarshipBanner({hasScholarship, onCheckScholarship, openWizard}) {
  
  return (
    <div className="mt-8">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-3 rounded-3xl lg:rounded-full bg-white px-6 py-6 lg:px-8 lg:py-3 shadow-sm">

        {/* Left */}

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

          <div className="flex shrink-0 h-12 w-12 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary-tint">

            <GraduationCap
              className="text-primary w-6 h-6 sm:w-5 sm:h-5"
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
            className="inline-flex w-full lg:w-auto justify-center items-center gap-2 rounded-xl border border-primary px-5 py-3 font-semibold bg-primary text-white mt-2 lg:mt-0"
            onClick={
                hasScholarship
                    ? onCheckScholarship
                    : openWizard
            }
        >
            Check Eligibility
            <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );
}