"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import FacultyCard from "./faculty-card";
import FacultyModal from "./faculty-modal";

export default function Faculty({ data }) {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  return (
    <section id="faculty" className="py-10">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Faculty
          </span>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
            Know Your Faculty Before Enrolling
          </h2>

          <p className="mt-3 max-w-3xl leading-8 text-muted-foreground">
            Learn from experienced professors guiding IGNOU's Online MBA
            programme through a blend of academic expertise and practical
            industry insights.
          </p>
        </motion.div>

        {/* Faculty Grid */}

        <div className="mt-10 grid gap-6 grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
          {data.faculty.map((faculty, index) => (
            <FacultyCard
              key={faculty.id}
              faculty={faculty}
              index={index}
              onClick={setSelectedFaculty}
            />
          ))}
        </div>

        {/* Modal */}

        <FacultyModal
          open={selectedFaculty !== null}
          faculty={selectedFaculty}
          onClose={() => setSelectedFaculty(null)}
        />
      </div>
    </section>
  );
}