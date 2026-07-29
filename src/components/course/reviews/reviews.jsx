"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ReviewSummary from "./review-summary";
import ReviewCard from "./review-card";
import ReviewModal from "./review-modal";

export default function Reviews({ data }) {
  const [open, setOpen] = useState(false);

   if (!data.reviews) return null;

  const reviews = data.reviews;
  
  return (
    <section id="reviews" className="py-10">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Reviews
          </span>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
            Student Reviews & Ratings
          </h2>

          <p className="mt-3 max-w-3xl leading-8 text-muted-foreground">
            Hear directly from learners who have experienced the {data.hero.universityName} {data.hero.name} programme and shared their honest feedback.
          </p>
        </motion.div>

        {/* Summary */}

        <div className="mt-8">
          <ReviewSummary reviews={reviews} />
        </div>

        {/* Reviews */}

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white px-8">

          {reviews.reviews.slice(0, 3).map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              index={index}
            />
          ))}

        </div>

        {/* Button */}

        <div className="mt-8 flex justify-center">

          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-primary-dark"
          >
            View All Reviews

            <ArrowRight className="h-5 w-5" />
          </button>

        </div>

        {/* Modal */}

        <ReviewModal
          open={open}
          onClose={() => setOpen(false)}
          reviews={reviews}
        />

      </div>
    </section>
  );
}