import { Course } from "@/types/course";
import {
  Clock3,
  Laptop,
  IndianRupee,
  MapPin,
  Download,
} from "lucide-react";

type HeroInfoProps = {
  data: Course;
};

export default function HeroInfoCard({ data }: HeroInfoProps) {
  const details = [
    {
      icon: Clock3,
      label: "Duration",
      value: data.duration,
    },
    {
      icon: Laptop,
      label: "Mode",
      value: data.mode,
    },
    {
      icon: IndianRupee,
      label: "Programme Fee",
      value: data.fee,
    },
    {
      icon: MapPin,
      label: "Study Centre",
      value: data.location,
    },
  ];

  return (
    <aside className="relative">

      <div className="sticky top-28">

        <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_20px_80px_rgba(0,0,0,.12)]">

          {/* Body */}

          <div className="p-8">

            <div className="space-y-5 flex grid grid-cols-2">

              {details.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex gap-4"
                  >
                    <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-full bg-slate-100">

                      <Icon
                        size={20}
                        className="text-[#0B6089]"
                      />

                    </div>

                    <div>

                      <p className="text-sm text-slate-500">
                        {item.label}
                      </p>

                      <p className="mt-1 text-lg font-semibold text-[#061122]">
                        {item.value}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

            <hr className="mt-0 mb-5" />

            {/* CTA */}

            <button
              className="
              w-full
              rounded-2xl
              bg-[#F6C94A]
              py-3
              font-semibold
              text-[#061122]
              transition
              hover:brightness-95
            "
            >
              Apply Now
            </button>

            <button
              className="
              mt-4
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-[#0B6089]
              py-3
              font-semibold
              text-[#0B6089]
              transition
              hover:bg-[#0B6089]
              hover:text-white
            "
            >
              <Download size={18} />

              Download Brochure
            </button>

            <hr className="my-8" />

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

                <p className="font-semibold text-[#061122]">
                  20K+ students
                </p>

                <p className="text-sm text-slate-500">
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