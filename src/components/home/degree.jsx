"use client";

import AccentDivider from "../ui/accentdivider";

export default function DegreeSection() {
  return (
    <section id="degree" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <AccentDivider />
            <h2 className="text-4xl lg:text-4xl font-black -foreground leading-tight mb-6">
              An IGNOU degree that's
              <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                recognised everywhere.
              </span>
            </h2>

            <p className="-muted-foreground text-lg leading-relaxed mb-6">
              Every online degree awarded by IGNOU is issued by the university
              itself and is recognised by UGC-DEB. The degree carries the same
              academic value and can be used for higher education, competitive
              examinations and most public & private sector opportunities.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">

              {[
                "UGC-DEB Approved",
                "NAAC A++ Accredited",
                "Valid for Higher Studies",
                "Accepted by Employers",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border -muted-foreground bg-slate-50 px-4 py-3"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent-dark font-bold">
                    ✓
                  </div>

                  <span className="font-medium -foreground">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <div className="rounded-2xl border border-accent/30 bg-accent-tint p-4 mb-6">

              <div className="flex gap-3">

                <div>

                  <p className="text-sm leading-relaxed -muted-foreground">
                    The degree certificate does not distinguish between students
                    based on where they studied.
                  </p>

                </div>

              </div>

            </div>

            <div className="flex gap-4 flex-wrap">

              <a
                href="/degree.pdf"
                download
                className="
                    inline-flex
                    items-center
                    justify-center
                    px-7
                    py-3.5
                    rounded-xl
                    bg-primary
                    hover:bg-primary-hover
                    text-white
                    font-semibold
                    transition-all
                    hover:-translate-y-0.5
                "
                >
                Download Sample Degree
                </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            {/* background glow */}

            <div className="absolute inset-0 flex justify-center items-center">

              <div className="w-[420px] h-[420px] rounded-full bg-secondary" />

            </div>

            {/* decorative ring */}

            <div className="absolute w-[460px] h-[460px] rounded-full border border-primary/15" />

            {/* certificate */}

            <div
              className="
                relative
                z-10
                bg-white
                rounded-3xl
                shadow-2xl
                border
                -muted-foreground
                p-4
                rotate-2
                hover:rotate-0
                transition-all
                duration-300
              "
            >

              <img
                src="/degree.png"
                alt="Sample IGNOU Degree"
                className="
                  w-full
                  max-w-[400px]
                  max-h-[600px]
                  rounded-xl
                "
              />

            </div>

            {/* floating badge */}

            <div
              className="
                absolute
                -left-6
                top-10
                bg-white
                shadow-xl
                rounded-2xl
                px-5
                py-4
                z-10
                border
                -muted-foreground
              "
            >

              <div className="text-accent-dark text-xs font-bold uppercase tracking-widest mb-1">
                Accreditation
              </div>

              <div className="text-3xl font-black text-primary">
                NAAC A++
              </div>

            </div>

            {/* floating badge */}

            <div
              className="
                absolute
                -right-6
                bottom-10
                bg-white
                shadow-xl
                rounded-2xl
                px-5
                py-4
                z-20
                border
                -muted-foreground
              "
            >

              <div className="text-accent-dark text-xs font-bold uppercase tracking-widest mb-1">
                Recognition
              </div>

              <div className="text-lg font-bold -foreground">
                UGC-DEB Approved
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}