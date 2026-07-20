"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQSection({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  const categories = data?.faqs?.faqs ?? [];
  const activeCategory = categories[activeTab];

  if (!categories.length) return null;

  return (
    <section id="faq" className="py-16 pb-0 bg-foreground">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-primary-light text-xs font-semibold uppercase tracking-widest">
            Frequently Asked Questions
          </p>

          <h2 className="text-3xl font-black text-white leading-tight mb-4">
            Everything You Need To Know
          </h2>

          <p className="text-sm text-primary-light leading-relaxed max-w-2xl">
            Find answers to the most common questions about admissions,
            eligibility, fees, examinations, recognition and student support.
          </p>
        </div>

        {/* Mobile: Horizontal scrollable tabs */}
        <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={category.category}
              onClick={() => setActiveTab(index)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all
                ${
                  activeTab === index
                    ? "bg-primary text-white"
                    : "bg-white/5 text-primary-light hover:bg-white/10"
                }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Desktop: Vertical tabs + Accordion side by side */}
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">

          {/* Vertical tabs (desktop only) */}
          <div className="hidden lg:block sticky top-24 h-fit">
            <nav className="flex flex-col gap-1">
              {categories.map((category, index) => (
                <button
                  key={category.category}
                  onClick={() => setActiveTab(index)}
                  className={`text-left rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200
                    ${
                      activeTab === index
                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                        : "text-primary-light hover:bg-white/5 hover:text-white"
                    }`}
                >
                  {category.category}
                </button>
              ))}
            </nav>
          </div>

          {/* FAQ Accordion */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-0"
              >
                {activeCategory.items.map((faq, i) => (
                  <div
                    key={faq.question}
                    className="border-b border-white/10 py-4"
                  >
                    <h3 className="text-base font-semibold text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-primary-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}