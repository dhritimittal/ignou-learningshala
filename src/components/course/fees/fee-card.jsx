import { ArrowUpRight } from "lucide-react";

export default function FeeCard({
  title,
  amount,
  subtitle,
  description,
  accent = false,
}) {
  return (
    <div
      className={`
        relative
        rounded-[28px]
        bg-white
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        ${
          accent
            ? "border-2 border-[#0B6089]"
            : "border border-slate-200"
        }
      `}
    >
      {/* Top */}

      <div className="flex items-start justify-between">

        <div>

          <p className="text-base text-slate-500">
            {title}
          </p>
          
          <div className="mt-3 flex items-end gap-3">
            <h3 className="text-4xl font-black tracking-tight text-[#061122]">
                {amount}
            </h3>

            {subtitle && (
                <p className="mb-1 text-base text-slate-600">
                {subtitle}
                </p>
            )}
          </div>

        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF7FD]">

          <ArrowUpRight
            size={18}
            className="text-[#0B6089]"
          />

        </div>

      </div>

      {/* Bottom */}

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}