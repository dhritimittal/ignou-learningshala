"use client";

const BUDGETS = [
  {
    value: "under_10k",
    title: "Under ₹10,000",
  },
  {
    value: "10k_25k",
    title: "₹10,000 – ₹25,000",
  },
  {
    value: "25k_50k",
    title: "₹25,000 – ₹50,000",
  },
  {
    value: "above_50k",
    title: "Above ₹50,000",
  },
];

export default function BudgetStep({
  value,
  onChange,
  onNext,
  onBack,
}) {
  return (
    <div className="flex h-full flex-col">

      <div className="grid grid-cols-1 gap-3">

       {BUDGETS.map((budget) => {

            const selected = value === budget.value;

            return (
                <button
                key={budget.value}
                type="button"
                onClick={() => onChange(budget.value)}
                className={`
                    group
                    flex
                    w-full
                    items-start
                    justify-between

                    rounded-xl

                    border

                    px-4
                    py-3

                    text-left

                    transition-all
                    duration-200

                    ${
                    selected
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/40 hover:bg-muted/40"
                    }
                `}
                >
                <div className="min-w-0">

                    <h3
                    className={`
                        text-[15px]
                        font-semibold

                        ${
                        selected
                            ? "text-primary"
                            : "text-foreground"
                        }
                    `}
                    >
                    {budget.title}
                    </h3>

                </div>

                <div
                    className={`
                    ml-4

                    flex
                    h-6
                    w-6

                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    border-2

                    transition

                    ${
                        selected
                        ? "border-primary bg-primary text-white"
                        : "border-border"
                    }
                    `}
                >
                    {selected && (
                    <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    )}
                </div>
                </button>
            );

      })}

      </div>

      <div className="mt-3 flex items-center justify-between border-t border-border pt-6">

        <button
          type="button"
          onClick={onBack}
          className="
            rounded-xl
            border
            border-border

            px-6
            py-3

            text-sm
            font-semibold

            transition

            hover:bg-muted
          "
        >
          Back
        </button>

        <button
          type="button"
          disabled={!value}
          onClick={onNext}
          className="
            rounded-xl
            bg-primary

            px-8
            py-3

            text-sm
            font-semibold
            text-white

            transition

            hover:opacity-90

            disabled:pointer-events-none
            disabled:opacity-40
          "
        >
          Continue →
        </button>

      </div>

    </div>
  );
}