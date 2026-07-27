"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AccentDivider from "@/components/ui/accentdivider";
import Badge from "@/components/ui/badge";

// ─── Star Rating ──────────────────────────────────────────────────────────────

function StarRating({ rating }) {
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

// ─── Main Testimonials Section ────────────────────────────────────────────────

const SCROLL_SPEED = 0.6; // px per frame
const AUTO_ADVANCE_MS = 4000;

export default function TestimonialsSection({data}) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [current, setCurrent] = useState(0);
  const animFrameRef = useRef(null);
  const posRef = useRef(0);
  const autoTimerRef = useRef(null);

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
      setCurrent((prev) => (prev + 1) % data.testimonials.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + data.testimonials.length) % data.testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % data.testimonials.length);

  const featured = data.testimonials[current];

  return (
    <section className="pt-8 pb-8 bg-primary-tint overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top: left label + right featured card ─────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left: heading */}
          <div>
            <AccentDivider />
            <span className="text-primary-dark text-xs font-semibold uppercase tracking-widest">
              Student Stories
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
              38 lakh+ learners.{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
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
                {data.testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-5 h-2 bg-primary"
                        : "w-2 h-2 bg-primary/30 hover:bg-primary/60"
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
                <div className="text-[4rem] leading-none font-black text-primary/30 mb-[-1rem] ml-2 select-none">
                  &ldquo;
                </div>
                <div className="rounded-2xl border-2 border-primary/40 bg-white p-5 shadow-lg shadow-primary/10">
                  <p className="text-foreground text-base sm:text-lg font-medium leading-relaxed mb-4">
                    {featured.content}
                  </p>
                  <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-foreground/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-primary uppercase">
                          {featured.name
                            .trim()
                            .split(/\s+/)
                            .slice(0, 2)
                            .map((n) => n.charAt(0))
                            .join("")}
                        </span>
                      </div>
                    <div>
                      <p className="font-bold text-foreground">{featured.name}</p>
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
