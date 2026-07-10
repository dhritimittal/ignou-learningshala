"use client";

export default function CareerStat({
  icon: Icon,
  value,
  label,
  accent = false,
}) {
  return (
    <div className="flex flex-col gap-2 px-6 py-5">

      <Icon className="h-4 w-4 text-accent-dark" strokeWidth={2} />

      <p
        className={`text-2xl font-bold tracking-tight ${
          accent ? "text-foreground" : "text-accent"
        }`}
      >
        {value}
      </p>

      <p className="text-xs font-medium text-accent-dark">
        {label}
      </p>

    </div>
  );
}
