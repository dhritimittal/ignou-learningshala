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
            ? "border-2 border-primary"
            : "border border-slate-200"
        }
      `}
    >
      {/* Top */}

      <div className="flex items-start justify-between gap-3">

        <div>

          <p className="text-base text-muted-foreground">
            {title}
          </p>
          
          <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:gap-x-3">
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                {amount}
            </h3>

            {subtitle && (
                <p className="text-sm sm:text-base sm:mb-1 text-muted-foreground">
                {subtitle}
                </p>
            )}
          </div>

        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-tint">

          <ArrowUpRight
            size={18}
            className="text-primary"
          />

        </div>

      </div>

      {/* Bottom */}

      {description && (
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}