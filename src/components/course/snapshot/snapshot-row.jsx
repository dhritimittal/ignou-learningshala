"use client";

export default function SnapshotRow({
  label,
  value,
  bordered,
}) {
  return (
    <div
      className={`
        grid
        gap-4
        px-6
        py-5
        md:grid-cols-[240px_1fr]
        ${
          bordered
            ? "border-b border-slate-200"
            : ""
        }
        odd:bg-white
        even:bg-slate-50/50
      `}
    >
      <div className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
        {label}
      </div>

      <div className="text-[15px] leading-7 text-foreground">
        {Array.isArray(value)
          ? (
              <ul className="list-disc pl-5 space-y-1">
                {value.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )
          : value}
      </div>
    </div>
  );
}