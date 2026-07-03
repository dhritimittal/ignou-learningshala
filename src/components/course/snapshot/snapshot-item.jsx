"use client";

export default function SnapshotItem({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex items-start gap-3">

      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF8E6]">
        <Icon
          className="h-4 w-4 text-[#D39B00]"
          strokeWidth={2}
        />
      </div>

      <div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D39B00]">
          {label}
        </p>

        <p className="mt-1 text-[16px] font-medium leading-6 text-[#061122]">
          {value}
        </p>

      </div>

    </div>
  );
}