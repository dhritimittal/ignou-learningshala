import FeeSummary from "./fee-summary";
import FeeCard from "./fee-card";
import ScholarshipBanner from "./scholarship-banner";

export default function Fees({ data, openWizard }) {
  return (
    <section
      id="fees"
      className="py-8 scroll-mt-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Fee Layout */}

        <div className="rounded-[36px] bg-primary-tint p-6 lg:p-7">

          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-5">

            {/* Left */}

            <FeeSummary data={data} openWizard={openWizard} />

            {/* Right */}

            <div className="grid gap-3">

              <FeeCard
                title="Semester Fee"
                amount="₹14,000"
                subtitle="Per Semester"
                description="Pay semester-wise throughout the programme."
              />

              <FeeCard
                title="Easy EMI"
                amount="₹2,334"
                subtitle=" / month"
                description="Flexible financing options through selected partners."
                accent={true}
              />

            </div>

          </div>

          <ScholarshipBanner openWizard={openWizard} />

        </div>

      </div>
    </section>
  );
}