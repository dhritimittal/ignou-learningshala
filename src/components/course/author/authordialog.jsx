"use client";

import Image from "next/image";
import { X, BadgeCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function AuthorDialog({
  open,
  person,
  onClose,
}) {
  return (
    <AnimatePresence>
      {open && person && (
        <>
          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm"
          />

          {/* Dialog */}

          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
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
                duration: 0.2,
              }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              {/* Close */}

              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-lg border border-slate-200 p-1.5 text-slate-500 transition hover:bg-slate-100"
              >
                <X size={16} />
              </button>

              <div className="max-h-[90vh] overflow-y-auto p-6 md:p-8">

                {/* Header */}

                <div className="flex flex-col gap-4 md:flex-row">

                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl ring-1 ring-slate-200">

                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div className="flex-1">

                    <h2 className="text-xl font-bold text-foreground">
                      {person.name}
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {person.label}
                    </p>

                    {person.verified && (
                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                        <BadgeCheck size={16} />
                        LS Verified Expert
                      </div>
                    )}

                  </div>

                </div>

                {/* Divider */}

                <div className="my-5 border-t border-slate-200" />

                {/* Biography */}

                <div
                  className="
                    prose
                    prose-slate
                    max-w-none
                    prose-headings:text-foreground
                    prose-p:text-muted-foreground
                    prose-p:leading-8
                    prose-li:text-muted-foreground
                    prose-strong:text-foreground
                  "
                  dangerouslySetInnerHTML={{
                    __html: person.bio,
                  }}
                />

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}