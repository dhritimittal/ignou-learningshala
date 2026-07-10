"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function FacultyModal({
  faculty,
  open,
  onClose,
}) {
  return (
    <AnimatePresence>
      {open && faculty && (
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
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-md
                rounded-3xl
                bg-white
                p-10
                shadow-2xl
                ring-1
                ring-black/5
              "
            >
              {/* Close */}

              <button
                onClick={onClose}
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  transition-all
                  hover:border-accent-dark
                  hover:bg-accent-tint
                "
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>

              {/* Image */}

              <div className="flex justify-center">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="
                    h-32
                    w-32
                    rounded-2xl
                    object-cover
                    shadow-md
                  "
                />
              </div>

              {/* Name */}

              <h3
                className="
                  mt-8
                  text-center
                  text-3xl
                  font-bold
                  text-primary
                "
              >
                {faculty.name}
              </h3>

              {/* Designation */}

              <p
                className="
                  mt-2
                  text-center
                  text-lg
                  font-medium
                  text-muted-foreground
                "
              >
                {faculty.designation}
              </p>

              {/* Divider */}

              <div className="mx-auto mt-8 h-px w-24 bg-accent-dark/40" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}