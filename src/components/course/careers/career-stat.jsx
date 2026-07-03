"use client";

export default function CareerStat({
  icon: Icon,
  value,
  label,
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 transition-all duration-300 hover:border-[#D39B00]/30 hover:shadow-sm">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF8E6]">
        <Icon
          className="h-6 w-6 text-[#D39B00]"
          strokeWidth={2}
        />
      </div>

      <div className="min-w-0">

        <p className="text-3xl font-black tracking-tight text-[#061122]">
          {value}
        </p>

        <p className="mt-1 text-sm font-medium text-slate-500">
          {label}
        </p>

      </div>

    </div>
  );
}