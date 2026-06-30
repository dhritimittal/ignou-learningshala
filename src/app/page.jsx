"use client";

import { useState, useEffect, useRef } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────


import Navbar from "@/components/home/layout/navbar";
import HeroSection from "@/components/home/hero";
import AboutSection from "@/components/home/about";
import DegreeSection from "@/components/home/degree";
import ProgrammesSection from "@/components/home/programme";
import StrengthsSection from "@/components/home/strength";
import AdmissionsSection from "@/components/home/admission";
import ServicesSection from "@/components/home/services";
import FAQSection from "@/components/home/faqs";
import CTASection from "@/components/home/layout/cta";
import CounsellingWizard from "@/components/shared/counsellingwizard";
// ─── Page Component ──────────────────────────────────────────────────────────

export default function IGNOUHomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardProgramme, setWizardProgramme] = useState("");
  const [wizardStartStep, setWizardStartStep] = useState(0);
  const [wizardMode, setWizardMode] = useState("questionnaire");
  const [selectedService, setSelectedService] = useState("");

  const openWizard = () => {
    setWizardMode("questionnaire");
    setWizardProgramme("");
    setWizardStartStep(0);
    setSelectedService("");
    setWizardOpen(true);
  };

  const openProgrammeWizard = (programme) => {
    setWizardMode("questionnaire");
    setWizardProgramme(programme);
    setWizardStartStep(1);
    setSelectedService("");
    setWizardOpen(true);
  };

  const openServiceWizard = (service) => {
    setWizardMode("service");
    setSelectedService(service);
    setWizardOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased">
      <Navbar scrolled={scrolled} openWizard={openWizard} />
      <main>
        <HeroSection openWizard={openWizard} />
        <AboutSection openWizard={openWizard} />
        <DegreeSection />
        <ProgrammesSection openWizard={openWizard} openProgrammeWizard={openProgrammeWizard} />
        <AdmissionsSection openWizard={openWizard} />
        <ServicesSection openServiceWizard={openServiceWizard} />
        <StrengthsSection />
        <FAQSection />
        <CTASection openWizard={openWizard}/>
      </main>
      {wizardOpen && (
        <CounsellingWizard
          onClose={() => {
            setWizardOpen(false);
            setWizardMode("questionnaire");
            setWizardProgramme("");
            setWizardStartStep(0);
            setSelectedService(null);
          }}
          initialProgramme={wizardProgramme}
          initialStep={wizardStartStep}
          mode={wizardMode}
          service={selectedService}
        />
      )}
    </div>
  );
}