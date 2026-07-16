"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import ProgrammeMegaMenu from "./megamenu";
import { AnimatePresence, motion } from "framer-motion";
import { PROGRAMMES } from "@/data/home/programmes";
import Link from "next/link";

const SECTION_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Fees", href: "#fees" },
  { label: "Specializations", href: "#specializations" },
  { label: "Admissions", href: "#admissions" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Careers", href: "#careers" },
  { label: "Reviews", href: "#reviews" },
];

const programmeGroups = [
  {
    label: "Post Graduation",
    programmes: PROGRAMMES.filter((p) => p.level === "PG"),
  },
  {
    label: "Graduation",
    programmes: PROGRAMMES.filter((p) => p.level === "UG"),
  },
  {
    label: "Others",
    programmes: PROGRAMMES.filter((p) => p.level === "Diploma"),
  },
];

function MobileProgrammeMenu({ onNavigate }) {
  const [openGroup, setOpenGroup] = useState(null);

  return (
    <div className="flex flex-col gap-1">
      {programmeGroups.map((group) => {
        const isOpen = openGroup === group.label;
        return (
          <div key={group.label}>
            <button
              onClick={() => setOpenGroup(isOpen ? null : group.label)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-slate-50 transition-colors"
            >
              {group.label}
              <ChevronDown
                size={16}
                className={`text-muted-foreground transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-0.5 pb-2 pl-2">
                    {group.programmes.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/course/${p.slug}`}
                        onClick={onNavigate}
                        className="rounded-lg px-3 py-2 hover:bg-primary-tint transition-colors"
                      >
                        <span className="text-sm font-medium text-foreground block">
                          {p.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {p.duration} • {p.fee}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function CourseNavbar({ scrolled, openWizard, course, heroVisible}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="IGNOU"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center relative">
            <AnimatePresence mode="wait">
              {heroVisible ? (
                <motion.div
                  key="mega-menu"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: .22,
                    ease: "easeOut",
                  }}
                  className="flex items-center"
                >
                  <ProgrammeMegaMenu />
                </motion.div>
              ) : (
                <motion.div
                  key="course-nav"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{
                    duration: .22,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-6"
                >
                  <span className="font-semibold text-foreground whitespace-nowrap">
                    {course.name}
                  </span>
                  <a href="#overview">Overview</a>
                  <a href="#fees">Fees</a>
                  <a href="#specializations">Specializations</a>
                  <a href="#curriculum">Curriculum</a>
                  <a href="#careers">Careers</a>
                  <a href="#reviews">Reviews</a>
                  
                </motion.div>
              )}
            </AnimatePresence>
          </nav>        

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openWizard}
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary transition-colors"
            >
              Apply Now
            </button>

            <button
              onClick={openWizard}
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Reach out on WhatsApp
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 py-4 flex flex-col gap-3 max-h-[70vh] overflow-y-auto">
              <MobileProgrammeMenu onNavigate={() => setMenuOpen(false)} />

              <hr className="border-slate-100" />

              <button
                onClick={() => { openWizard(); setMenuOpen(false); }}
                className="text-sm font-semibold px-4 py-2.5 rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors"
              >
                Apply Now
              </button>

              <button
                onClick={() => { openWizard(); setMenuOpen(false); }}
                className="text-sm font-semibold px-4 py-2.5 rounded-lg bg-[#25D366] text-white text-center hover:bg-[#1EBE5D] transition-colors flex items-center gap-2 justify-center"
              >
                <MessageCircle size={16} />
                Reach out on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile section navigation bar — appears when hero scrolls out of view */}
      <AnimatePresence>
        {!heroVisible && !menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-slate-100"
          >
            <div className="flex overflow-x-auto scrollbar-hide gap-1 px-3 py-2">
              {SECTION_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold text-muted-foreground hover:text-primary hover:bg-primary-tint transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}