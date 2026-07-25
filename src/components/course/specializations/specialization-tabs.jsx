"use client";

export default function SpecializationTabs({
  items,
  selected,
  onChange,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((item) => {
        const active = selected.id === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onChange(item)}
            className={`
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              px-6
              py-3
              text-base
              font-semibold
              transition-all
              duration-300

              ${
                active
                  ? "border-accent bg-accent text-accent-foreground shadow-lg"
                  : "border-slate-200 bg-white text-foreground hover:border-accent hover:bg-accent-tint"
              }
            `}
          >

            <span>{item.title}</span>
          </button>
        );
      })}
    </div>
  );
}