"use client";

import SnapshotItem from "./snapshot-item";

export default function SnapshotGroup({
  title,
  items,
  columns = 1,
}) {
  return (
    <div className="rounded-xl border border-slate-200 transition-all duration-300 hover:border-accent-dark/40 hover:shadow-md bg-white p-5">

      {/* Group Title */}

      <h3 className="text-2xl font-bold text-foreground">
        {title}
      </h3>

      {/* Items */}

      <div
        className={`mt-4 grid gap-4 ${
          columns === 2 ? "md:grid-cols-2" : ""
        }`}
      >

        {items.map((item, index) => (
            <SnapshotItem
              key={index}
              icon={item.icon}
              label={item.label}
              value={item.value}
            />
        ))}

      </div>

    </div>
  );
}