"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import ReviewSummary from "./review-summary";
import ReviewCard from "./review-card";

export default function ReviewModal({
  open,
  onClose,
  reviews,
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}

          <motion.div
            className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}

          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-6"
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="
                flex
                h-[90vh]
                w-full
                max-w-5xl
                flex-col
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-2xl
              "
            >
              {/* Header */}

              <div
                className="
                  sticky
                  top-0
                  z-10
                  border-b
                  border-slate-200
                  bg-white
                  px-8
                  py-6
                "
              >
                <div className="flex items-center justify-between">

                  <div>

                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      Reviews
                    </span>

                    <h2 className="mt-2 text-3xl font-bold text-foreground">
                      Student Reviews & Ratings
                    </h2>

                  </div>

                  <button
                    onClick={onClose}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-200
                      transition
                      hover:border-primary
                      hover:bg-primary-tint
                    "
                  >
                    <X className="h-5 w-5 text-muted-foreground" />
                  </button>

                </div>
              </div>

              {/* Scroll */}

              <div className="flex-1 overflow-y-auto px-8 py-8">

                <ReviewSummary
                  reviews={reviews}
                  compact
                />

                <div className="mt-8 rounded-3xl border border-slate-200 bg-white px-8">

                  {reviews.reviews.map((review, index) => (
                    <ReviewCard
                      key={review.id}
                      review={review}
                      index={index}
                    />
                  ))}

                </div>

              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}