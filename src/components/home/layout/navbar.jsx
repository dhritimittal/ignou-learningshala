"use client";

import { MessageCircle } from "lucide-react";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programmes", href: "#programmes" },
  { label: "Admissions", href: "#admissions" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ scrolled, openWizard, data}) {

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200" : "bg-white/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={data.logo}
              alt={data.name}
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
                  scrolled ? "text-foreground hover:text-primary" : "text-black"
                }`}
              >
                {l.label}
              </a>
            ))}
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

          {/* Mobile Apply button */}
          <div className="md:hidden">
            <button
              onClick={openWizard}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile section navigation bar — always visible on mobile */}
      <div className="md:hidden bg-white border-t border-slate-100">
        <div className="flex overflow-x-auto scrollbar-hide gap-1 px-3 py-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold text-muted-foreground hover:text-primary hover:bg-primary-tint transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}