"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import RatingBars from "./rating-bars";

export default function ReviewSummary({ reviews, compact = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`
        rounded-3xl
        border
        border-slate-200
        bg-white
        ${compact ? "p-6" : "p-8"}
        `}
    >
      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

        {/* Left */}

        <div className="flex flex-col justify-center">

          <div className="flex items-center gap-2">

            {[1,2,3,4,5].map((star)=>(
              <Star
                key={star}
                className={`h-6 w-6 ${
                  star <= Math.round(reviews.averageRating)
                    ? "fill-accent-dark text-accent-dark"
                    : "text-muted-foreground"
                }`}
              />
            ))}

          </div>

          <h3 className="mt-5 text-6xl font-bold tracking-tight text-primary">
            {reviews.averageRating.toFixed(1)}
          </h3>

          <p className="mt-2 text-lg font-medium text-muted-foreground">
            Based on {reviews.totalReviews} verified reviews
          </p>

        </div>

        {/* Right */}

        <RatingBars
          breakdown={reviews.breakdown}
        />

      </div>
    </motion.div>
  );
}