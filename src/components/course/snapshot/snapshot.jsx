"use client";

import SnapshotRow from "./snapshot-row";

export default function Snapshot({ data }) {
  const rows = data.snapshot ?? [];

  if (!rows.length) return null;

  return (
    <section
      id="overview"
      className="py-8"
    >
      <div className="mx-auto max-w-7xl px-6">

        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
          Snapshot
        </span>

        <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
          Key Highlights
        </h2>

        <p className="mt-3 max-w-3xl leading-8 text-muted-foreground">
          Everything you need to know at a glance.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {rows.map((row, index) => (
            <SnapshotRow
              key={row.label}
              label={row.label}
              value={row.value}
              bordered={index !== rows.length - 1}
            />
          ))}

        </div>

      </div>
    </section>
  );
}