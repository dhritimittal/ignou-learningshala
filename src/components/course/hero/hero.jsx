import HeroActions from "./hero-actions";
import HeroInfoCard from "./hero-info";
import {
  ChevronRight,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Hero({ data, openWizard }) {
  return (
    <>
      <section id="course-hero" className="relative overflow-visible pt-10">

        {/* Background */}

        <div className="absolute inset-0">
          <img
            src={data.hero.heroImage}
            alt={data.hero.name}
            className="absolute right-0 top-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#F7FAFC] via-[#F7FAFC]/75 via-[#F7FAFC]/60 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8 pt-8 pb-10 lg:pt-10 lg:pb-12">

          <div className="grid gap-10 xl:gap-16 lg:grid-cols-[1fr_420px]">

            {/* LEFT */}

            <div className="max-w-3xl">

              {/* Breadcrumb */}

              <div className="mb-8 flex items-center gap-2 text-sm text-primary-light">

                <span>Home</span>

                <ChevronRight size={15} />

                <span>Programmes</span>

                <ChevronRight size={15} />

                <span>{data.hero.name}</span>

              </div>

              {/* Badge */}

              <span className="inline-flex rounded-full bg-primary border border-primary/50 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                {data.hero.badge}
              </span>

              {/* Heading */}

              <h1 className="mt-5 text-5xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-light/50 lg:text-7xl">
                {data.hero.name}
              </h1>

              {/* Description */}

              <p className="mt-4 max-w-2xl text-lg lg:text-xl leading-8 text-muted-foreground">
                {data.hero.description}
              </p>

              {/* Rating */}

              <div className="mt-6 flex flex-wrap items-center gap-8 text-black/80">

                <div className="flex items-center gap-2">

                  <Star
                    className="fill-accent text-accent"
                    size={20}
                  />

                  <span className="text-xl font-bold">
                    {data.hero.rating}/{data.hero.reviewCount}
                  </span>

                </div>

                <div className="h-6 w-px bg-white/20" />

                <div className="flex items-center gap-2">

                  <Users size={20} />

                  <span className="text-xl font-medium">
                    {data.hero.students} Students Enrolled
                  </span>

                </div>

              </div>

              {/* Approvals */}

              <div className="mt-6 flex flex-wrap gap-3">

                {data.hero.approvals.map((b) => (
                <span
                  key={b.title}
                  className="flex items-center gap-2 text-sm font-semibold bg-card border-border text-foreground shadow-sm border border-primary rounded-full px-4 py-2"
                >
                  <img
                    src={b.logo}
                    alt={b.title}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                  {b.title}
                </span>
              ))}

              </div>

              <HeroActions openWizard={openWizard} />

            </div>

            {/* RIGHT */}

            <HeroInfoCard data={data} openWizard={openWizard} />

          </div>

        </div>

      </section>
    </>
  );
}
