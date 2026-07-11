"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SignupForm from "./signupform";

const STORAGE_KEY = "popup-last-shown";

export default function TimedPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    /*const lastShown = localStorage.getItem(STORAGE_KEY);

    if (lastShown) {
      const diff = Date.now() - Number(lastShown);

      // 24 hours
      if (diff < 24 * 60 * 60 * 1000) return;
    }*/

    const timer = setTimeout(() => {
      setOpen(true);
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] bg-black/55 backdrop-blur-sm"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
                fixed
                inset-0
                z-[101]

                flex
                items-end
                justify-center

                lg:items-center
                lg:justify-center

                p-0
                lg:p-6
                "
          >
            <div
                className="
                w-screen
                max-w-full

                h-[85vh]
                lg:h-[88vh]

                lg:max-w-4xl

                overflow-hidden

                rounded-t-3xl
                rounded-b-none
                lg:rounded-3xl

                bg-card
                shadow-2xl
                "
            >

              {/* Close */}

              <button
                onClick={() => setOpen(false)}
                className="
                hidden
                lg:flex

                absolute
                right-5
                top-5

                z-50

                h-10
                w-10

                items-center
                justify-center

                rounded-full

                bg-white
                shadow
                "
            >
                ✕
            </button>

              <div
                className="
                grid
                grid-cols-1

                lg:grid-cols-[0.85fr_1.15fr]

                h-full
                "
            >

                {/* Left */}

                <div className="
                    hidden
                    lg:block

                    relative
                    overflow-hidden

                    bg-primary
                    text-white

                    p-8
                    "
                >

                  <div className="relative z-10">

                    <img
                      src="/logo.png"
                      className="h-12 mb-10"
                    />

                    <span className="rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
                      Free Account
                    </span>

                    <h2 className="mt-5 text-4xl font-black leading-tight">
                      Save your picks.
                    </h2>

                    <p className="mt-8 max-w-md text-white/80 leading-relaxed">
                      Continue where you left off.
                    </p>

                    <div className="mt-8 space-y-4 text-sm">

                      <div>✓ Save shortlisted programmes</div>

                      <div>✓ Compare later</div>

                      <div>✓ Get personalised guidance</div>

                    </div>

                  </div>

                  <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-white/10" />

                  <div className="absolute right-10 top-20 h-50 w-50 rounded-full bg-white/10" />

                </div>

                {/* Right */}

                <div className="
                    bg-background
                    flex
                    flex-col
                    overflow-hidden
                    h-full
                    "
                >
                    <div className="lg:hidden flex justify-center pt-6">

                        <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="
                        h-1.5
                        w-14
                        rounded-full
                        bg-slate-300
                        "
                        />

                    </div>

                  <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                    <SignupForm />
                  </div>

                  <div
                    className="
                        sticky
                        bottom-0
                        bg-background
                        pb-4
                        z-20
                        px-6
                    "
                    >
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-primary py-3 font-semibold text-white transition hover:opacity-90"
                    >
                        Continue →
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}