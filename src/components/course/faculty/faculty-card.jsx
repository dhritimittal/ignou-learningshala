"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FacultyCard({
  faculty,
  index = 0,
  onClick,
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -6,
      }}
      onClick={() => onClick(faculty)}
      className="
        group
        flex
        flex-col
        items-center
        rounded-3xl
        bg-primary-dark
        p-7
        text-center
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl
        hover:ring-1
        hover:ring-accent-dark/30
      "
    >
      {/* Image */}

      <img
        src={faculty.image}
        alt={faculty.name}
        className="
          h-24
          w-24
          rounded-2xl
          object-cover
          shadow-md
        "
      />

      {/* Name */}

      <h3
        className="
          mt-6
          text-xl
          font-semibold
          leading-tight
          text-white
        "
      >
        {faculty.name}
      </h3>

      {/* Designation */}

      <p
        className="
          mt-2
          text-base
          text-muted-foreground
        "
      >
        {faculty.designation}
      </p>

      {/* Accent */}

      <div className="my-5 h-1.5 w-10 rounded-full bg-accent-dark/40" />

      {/* CTA */}

      <div
        className="
          mt-auto
          flex
          items-center
          gap-2
          font-semibold
          text-accent
          transition-all
          duration-300
          group-hover:gap-3
        "
      >
        <span>View More</span>

        <ArrowRight
          className="h-4 w-4"
          strokeWidth={2.5}
        />
      </div>
    </motion.button>
  );
}