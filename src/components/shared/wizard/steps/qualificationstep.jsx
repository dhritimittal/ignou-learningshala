"use client";

const QUALIFICATIONS = [
  {
    value: "10th",
    title: "Completed 10th",
  },
  {
    value: "12th",
    title: "Completed 12th",
  },
  {
    value: "graduate",
    title: "Graduate",
  },
  {
    value: "postgraduate",
    title: "Post Graduate",
  },
  {
    value: "working_professional",
    title: "Working Professional",
  },
];

export default function QualificationStep({
  value,
  onChange,
  onNext,
  onBack,
}) {
  return (
    <div className="flex h-full flex-col">

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">

        {QUALIFICATIONS.map((qualification, index) => {

          const selected = value === qualification.value;

          return (
            <button
              key={qualification.value}
              type="button"
              onClick={() => onChange(qualification.value)}
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
                    index === QUALIFICATIONS.length - 1
                        ? "md:col-span-2"
                        : ""
                }

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
                  {qualification.title}
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