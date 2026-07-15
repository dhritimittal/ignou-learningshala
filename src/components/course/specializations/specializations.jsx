"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SpecializationTabs from "./specialization-tabs";
import SpecializationDetails from "./specialization-details";

export default function Specializations({ data, openWizard }) {
  const [selected, setSelected] = useState(data.specializations[0]);

  return (
    <section
      id="specializations"
      className="py-8"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div>

          <span className="text-accent uppercase font-semibold text-sm tracking-widest">
            {data.specializations.length} Specializations
          </span>

          <h2 className="mt-2 text-4xl font-bold">
            Choose Your Specialization
          </h2>

          <p className="mt-3 text-muted-foreground max-w-2xl">
            Explore specializations aligned with your career goals.
          </p>

        </div>

        {/* Chips */}

        <div className="mt-6">

          <SpecializationTabs
            items={data.specializations}
            selected={selected}
            onChange={setSelected}
          />

        </div>

        {/* Details */}

        <div className="mt-6">

          <AnimatePresence mode="wait">

            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <SpecializationDetails
                specialization={selected}
                openWizard={openWizard}
              />
            </motion.div>

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}