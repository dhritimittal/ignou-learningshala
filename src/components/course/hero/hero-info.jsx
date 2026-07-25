import {
  Clock3,
  Laptop,
  IndianRupee,
  MapPin,
  Download,
} from "lucide-react";

export default function HeroInfoCard({ data, openWizard }) {
  const details = [
    {
      icon: Clock3,
      label: "Duration",
      value: data.hero.duration,
    },
    {
      icon: Laptop,
      label: "Mode",
      value: data.hero.mode,
    },
    {
      icon: IndianRupee,
      label: "Programme Fee",
      value: data.hero.fee,
    },
    {
      icon: MapPin,
      label: "Study Centre",
      value: data.hero.location,
    },
  ];

  return (
    <aside className="relative">

      <div className="sticky top-28">

        <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_20px_80px_rgba(0,0,0,.12)]">

          {/* Body */}

          <div className="p-5 sm:p-8">

            <div className="grid grid-cols-2 gap-y-6 gap-x-2 sm:gap-x-4">

              {details.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex gap-4"
                  >
                    <div className="flex shrink-0 h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-100">

                      <Icon
                        className="text-primary h-4 w-4 sm:h-5 sm:w-5"
                      />

                    </div>

                    <div className="min-w-0">

                      <p className="text-xs sm:text-sm text-muted-foreground truncate">
                        {item.label}
                      </p>

                      <p className="mt-0.5 sm:mt-1 text-sm sm:text-lg font-semibold text-foreground truncate">
                        {item.value}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

            <hr className="mt-5 mb-5" />

            {/* CTA */}

            <button
              onClick={openWizard}
              className="w-full rounded-2xl bg-accent py-3 font-semibold text-accent-foreground transition hover:brightness-95"
            >
              Apply Now
            </button>

            <a
              href={data.hero.brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-primary py-3 font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              <Download size={18} />
              Download Brochure
            </a>

            <hr className="my-5" />

            {/* Social Proof */}

            <div className="flex items-center gap-4">

              <div className="flex -space-x-3">

                <img
                  src="/avatars/1.jpg"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />

                <img
                  src="/avatars/2.jpg"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />

                <img
                  src="/avatars/3.jpg"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />

                <img
                  src="/avatars/4.jpg"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />

              </div>

              <div>

                <p className="font-semibold text-foreground">
                  20K+ students
                </p>

                <p className="text-sm text-muted-foreground">
                  already contacted us
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}
