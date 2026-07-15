"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AccentDivider from "@/components/ui/accentdivider";
import Badge from "@/components/ui/badge";

// ─── Types ────────────────────────────────────────────────────────────────────

export type TestimonialItem = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
};

// ─── Mock data ────────────────────────────────────────────────────────────────

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Priya Sharma",
    role: "MBA Graduate",
    company: "IGNOU 2023",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaSharma",
    rating: 5,
    content:
      "LearningShala made the entire admission process seamless. I was confused about which MBA specialisation to pick, and their counsellor helped me choose Finance within 20 minutes. Best decision ever.",
  },
  {
    name: "Rahul Verma",
    role: "BCA Student",
    company: "IGNOU 2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RahulVerma",
    rating: 5,
    content:
      "I was working a full-time job and thought pursuing a degree was impossible. IGNOU proved me wrong — and LearningShala guided me step by step from eligibility check to getting my enrollment number.",
  },
  {
    name: "Ananya Iyer",
    role: "M.Com Graduate",
    company: "IGNOU 2022",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AnanyaIyer",
    rating: 5,
    content:
      "The free counselling session was genuinely helpful — they didn't just tell me which programme to choose but also walked me through the Samarth portal live on call. I didn't have to figure anything out alone.",
  },
  {
    name: "Karan Mehta",
    role: "MCA Student",
    company: "IGNOU 2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=KaranMehta",
    rating: 5,
    content:
      "I'd tried applying to IGNOU directly and my application was rejected for wrong document formats. LearningShala's checklist prevented that mistake the second time around. Enrolled successfully in July 2024.",
  },
  {
    name: "Deepika Nair",
    role: "Distance BA Student",
    company: "IGNOU 2023",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DeepikaNair",
    rating: 5,
    content:
      "As a homemaker who wanted to complete her degree after a 10-year gap, I was nervous about going back to studying. The team here was so patient and supportive — they made me feel like I could actually do it.",
  },
  {
    name: "Arjun Singh",
    role: "Distance MBA Graduate",
    company: "IGNOU 2022",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ArjunSingh",
    rating: 4,
    content:
      "Got a 30% salary hike after completing my IGNOU MBA while working. The flexibility to study on weekends was a game changer. LearningShala helped me plan my exam schedule around my work commitments.",
  },
  {
    name: "Sneha Kulkarni",
    role: "BBA Student",
    company: "IGNOU 2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SnehaKulkarni",
    rating: 5,
    content:
      "I was between Amity and IGNOU for my BBA. The counsellor showed me a side-by-side comparison of fees, recognition, and placement support. IGNOU won easily. Saving over ₹80,000 in fees alone.",
  },
  {
    name: "Mohammed Rizwan",
    role: "MCA Graduate",
    company: "IGNOU 2023",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MohammedRizwan",
    rating: 5,
    content:
      "Switched careers from retail to IT after my IGNOU MCA. The degree is WES recognised which helped me apply for positions that needed an international credential check. Couldn't have done it without this platform.",
  },
];

// ─── Star Rating ──────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`w-4 h-4 ${i < rating ? "fill-accent text-accent" : "fill-slate-200 text-slate-200"}`}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  const initials = testimonial.name
    .split(" ", 2)
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex-shrink-0 w-[340px] sm:w-[380px] rounded-2xl border border-accent/40 bg-white p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-accent/70 transition-all duration-200">
      {/* Header: avatar + name */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-secondary border border-accent/20 overflow-hidden flex-shrink-0">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to initials if avatar fails
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm leading-tight">{testimonial.name}</p>
          <p className="text-muted-foreground text-xs">
            {testimonial.role} · <span className="font-medium text-primary">{testimonial.company}</span>
          </p>
        </div>
      </div>

      {/* Stars */}
      <StarRating rating={testimonial.rating} />

      {/* Quote */}
      <p className="text-sm text-foreground leading-relaxed flex-1">
        "{testimonial.content}"
      </p>
    </div>
  );
}

// ─── Main Testimonials Section ────────────────────────────────────────────────

const SCROLL_SPEED = 0.6; // px per frame
const AUTO_ADVANCE_MS = 4000;

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [current, setCurrent] = useState(0);
  const animFrameRef = useRef<number | null>(null);
  const posRef = useRef(0);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Continuous CSS scroll (duplicated list) ────────────────────────────────
  const tick = useCallback(() => {
    const track = trackRef.current;
    if (!track || paused) {
      animFrameRef.current = requestAnimationFrame(tick);
      return;
    }
    posRef.current += SCROLL_SPEED;
    const halfWidth = track.scrollWidth / 2;
    if (posRef.current >= halfWidth) posRef.current = 0;
    track.style.transform = `translateX(-${posRef.current}px)`;
    animFrameRef.current = requestAnimationFrame(tick);
  }, [paused]);

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [tick]);

  // ── Auto-advance left panel counter ───────────────────────────────────────
  useEffect(() => {
    autoTimerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const featured = TESTIMONIALS[current];

  return (
    <section className="pt-8 pb-8 bg-accent-tint overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top: left label + right featured card ─────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left: heading */}
          <div>
            <AccentDivider />
            <span className="text-accent-dark text-xs font-semibold uppercase tracking-widest">
              Student Stories
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
              38 lakh+ learners.{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Real results.
              </span>
            </h2>
            <p className="mt-3 text-muted-foreground text-lg leading-relaxed max-w-md">
              From career switchers to working professionals — hear directly from students whose lives changed with an IGNOU degree.
            </p>

            {/* Nav controls */}
            <div className="flex items-center gap-3 mt-8">
              {/* Dot indicators */}
              <div className="flex gap-1.5 ml-1">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-5 h-2 bg-accent"
                        : "w-2 h-2 bg-accent/30 hover:bg-accent/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: featured card with animation */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {/* Large quote mark */}
                <div className="text-[4rem] leading-none font-black text-accent/30 mb-[-1rem] ml-2 select-none">
                  &ldquo;
                </div>
                <div className="rounded-2xl border-2 border-accent/40 bg-white p-5 shadow-lg shadow-accent/10">
                  <p className="text-foreground text-base sm:text-lg font-medium leading-relaxed mb-4">
                    {featured.content}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary border border-accent/20 overflow-hidden flex-shrink-0">
                      <img
                        src={featured.avatar}
                        alt={featured.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{featured.name}</p>
                      <p className="text-muted-foreground text-sm">
                        {featured.role} · <span className="text-primary font-medium">{featured.company}</span>
                      </p>
                    </div>
                    <div className="ml-auto">
                      <StarRating rating={featured.rating} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
