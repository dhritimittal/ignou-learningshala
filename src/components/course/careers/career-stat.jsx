"use client";

export default function CareerStat({
  icon: Icon,
  value,
  label,
  accent = false,
}) {
  return (
    <div className="flex flex-col gap-2 px-6 py-5">

      <Icon className="h-4 w-4 text-[#D39B00]" strokeWidth={2} />

      <p
        className={`text-2xl font-bold tracking-tight ${
          accent ? "text-black" : "text-[#F6C94A]"
        }`}
      >
        {value}
      </p>

      <p className="text-xs font-medium text-[#7A6A32]">
        {label}
      </p>

    </div>
  );
}
