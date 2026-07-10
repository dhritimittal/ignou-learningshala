"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ReviewCard({
  review,
  index = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
      }}
      className="border-b border-slate-200 py-8 last:border-0"
    >
      {/* Header */}

      <div className="flex items-start gap-5">

        {/* Avatar */}

        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-tint text-xl font-bold text-primary">
          {review.name.charAt(0)}
        </div>

        {/* Content */}

        <div className="flex-1">

          <div className="flex flex-wrap items-center gap-3">

            <h4 className="text-xl font-semibold text-primary">
              {review.name}
            </h4>

            <span className="text-sm text-muted-foreground">
              {review.date}
            </span>

          </div>

          {/* Rating */}

          <div className="mt-2 flex items-center gap-1">

            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= review.rating
                    ? "fill-accent-dark text-accent-dark"
                    : "text-muted-foreground"
                }`}
              />
            ))}

            <span className="ml-2 font-semibold text-primary">
              {review.rating.toFixed(1)}
            </span>

          </div>

          {/* Review */}

          <p className="mt-5 max-w-4xl text-[17px] leading-8 text-muted-foreground">
            {review.review}
          </p>

        </div>

      </div>
    </motion.article>
  );
}