import {
  Users,
  IndianRupee,
  GraduationCap,
} from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Trusted by 3 Million Students",
    description:
      "India's most trusted open university with a massive learner base and proven academic excellence.",
  },
  {
    icon: IndianRupee,
    title: "Most Affordable Programs",
    description:
      "Quality education at the lowest cost, making higher education accessible to everyone.",
  },
  {
    icon: GraduationCap,
    title: "Attractive Scholarships",
    description:
      "Multiple scholarships, stipend support and fee exemptions to reduce programme costs.",
  },
];

export default function Highlights() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

          {items.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-5 py-10 lg:px-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0B6089]/10">

                  <Icon
                    size={26}
                    className="text-[#0B6089]"
                  />

                </div>

                <div>

                  <h3 className="text-lg font-bold text-[#061122]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
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