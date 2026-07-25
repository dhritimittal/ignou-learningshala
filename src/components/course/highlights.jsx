import {
  Users,
  IndianRupee,
  GraduationCap,
} from "lucide-react";

const icons = [
  Users,
  IndianRupee,
  GraduationCap,
];

export default function Highlights({data}) {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

          {data.highlights.map((item, index) => {

            const Icon = icons[index] ?? GraduationCap;

            return (
              <div
                key={item.title}
                className="flex gap-5 py-10 lg:px-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">

                  <Icon
                    size={26}
                    className="text-primary"
                  />

                </div>

                <div>

                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}