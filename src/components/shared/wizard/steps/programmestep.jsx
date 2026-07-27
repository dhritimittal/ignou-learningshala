"use client";

import { useMemo, useState } from "react";

const TABS = [
  {
    key: "PG",
    label: "Post Graduate",
  },
  {
    key: "UG",
    label: "Graduate",
  },
  {
    key: "Diploma",
    label: "Others",
  },
];

export default function ProgrammeStep({
  value,
  onChange,
  onNext,
  data,
}) {
  const [activeTab, setActiveTab] = useState("PG");
  const programmes = data?.programmes ?? [];
  console.log(data);
  console.log(programmes);

  const filtered = useMemo(() => {
    return programmes.filter(
      (programme) => programme.level === activeTab
    );
  }, [programmes, activeTab]);

  const online = filtered.filter(
    (programme) => programme.mode === "Online"
  );

  const distance = filtered.filter(
    (programme) => programme.mode === "Distance"
  );

  const renderProgramme = (programme) => {
    const selected = value === programme.slug;

    return (
      <button
        key={programme.slug}
        type="button"
        onClick={() => onChange(programme.slug)}
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
            {programme.name}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {programme.duration}
          </p>

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
  };

  return (
    <div className="flex h-full flex-col">

      {/* Tabs */}

      <div className="mb-6 flex rounded-2xl bg-muted p-1">

        {TABS.map((tab) => (

          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`
              flex-1

              rounded-xl

              px-4
              py-3

              text-sm
              font-semibold

              transition

              ${
                activeTab === tab.key
                  ? "bg-background text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }
            `}
          >
            {tab.label}
          </button>

        ))}

      </div>

      {/* Column headings */}

      <div className="mb-3 hidden grid-cols-2 gap-6 lg:grid">

        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Online
        </h3>

        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Distance
        </h3>

      </div>

      {/* Grid */}

      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2">

        {/* Online */}

        <div className="space-y-2">

          <div className="mb-2 lg:hidden text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Online
          </div>

          {online.length > 0 ? (
            online.map(renderProgramme)
          ) : (
            <p className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground">
              No online programmes available.
            </p>
          )}

        </div>

        {/* Distance */}

        <div className="space-y-2">

          <div className="mb-2 lg:hidden text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Distance
          </div>

          {distance.length > 0 ? (distance.map(renderProgramme)
          ) : (
            <p className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground">
              No distance programmes available.
            </p>
          )}

        </div>

      </div>

      {/* Footer */}

      <div className="mt-3 flex items-center justify-end border-t border-border pt-6">

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

            transition-all

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