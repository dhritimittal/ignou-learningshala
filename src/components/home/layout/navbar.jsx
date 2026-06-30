"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/data/home/navlinks";
import { MessageCircle } from "lucide-react";

export default function Navbar({ scrolled, openWizard}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100" : "bg-transparent"
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
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-slate-600 hover:text-[#0B6089]" : "text-black"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openWizard}
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#0B6089] text-white hover:bg-[#0B6089] transition-colors"
            >
              Apply Now
            </button>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Reach out on WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded ${scrolled ? "text-slate-700" : "text-white"}`}
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-slate-700 font-medium py-1">
              {l.label}
            </a>
          ))}
          <button
            onClick={openWizard}
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#0B6089] text-white hover:bg-[#0B6089] transition-colors"
          >
            Apply Now
          </button>
        </div>
      )}
    </header>
  );
}