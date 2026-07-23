"use client";

import { useState, useEffect, useRef } from "react";

import Navbar from "@/components/home/layout/navbar";
import HeroSection from "@/components/home/hero";
import AboutSection from "@/components/home/about";
import DegreeSection from "@/components/home/degree";
import ProgrammesSection from "@/components/home/programme";
import StrengthsSection from "@/components/home/strength";
import AdmissionsSection from "@/components/home/admission";
import FAQSection from "@/components/home/faqs";
import CTASection from "@/components/home/layout/cta";
import CounsellingWizard from "@/components/shared/wizard/counsellingwizard";
import TestimonialsSection from "@/components/home/testimonials";
// ─── Page Component ──────────────────────────────────────────────────────────

export default function IGNOUHomePage({data}) {
  const [scrolled, setScrolled] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);

  const openWizard = () => {
    setWizardOpen(true);
  };


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased">
      <Navbar scrolled={scrolled} openWizard={openWizard} data={data} />
      <main>
        <HeroSection openWizard={openWizard} data={data}/>
        <AboutSection openWizard={openWizard} data={data} />
        <DegreeSection openWizard={openWizard} data={data} />
        <ProgrammesSection openWizard={openWizard} data={data} />
        <AdmissionsSection openWizard={openWizard} data={data} />
        <StrengthsSection data={data} />
        <TestimonialsSection data={data} />
        <FAQSection data={data} />
        <CTASection openWizard={openWizard} data={data}/>
      </main>
      {wizardOpen && (
        <CounsellingWizard
          onClose={() => {
            setWizardOpen(false);
          }}
        />
      )}
    </div>
  );
}