"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function RatingBars({ breakdown }) {
  return (
    <div className="space-y-4">

      {breakdown.map((item, index) => (
        <motion.div
          key={item.stars}
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.35,
            delay: index * 0.06,
          }}
          className="flex items-center gap-4"
        >
          {/* Label */}

          <div className="flex w-14 items-center gap-1 text-sm font-medium text-slate-700">
            <span>{item.stars}</span>

            <Star
              className="h-4 w-4 fill-[#D39B00] text-[#D39B00]"
              strokeWidth={1.8}
            />
          </div>

          {/* Progress */}

          <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#EAF6FB]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${item.percentage}%`,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.05,
              }}
              className="h-full rounded-full bg-[#0B6089]"
            />
          </div>

          {/* Percentage */}

          <span className="w-10 text-right text-sm font-semibold text-[#0B6089]">
            {item.percentage}%
          </span>

        </motion.div>
      ))}

    </div>
  );
}