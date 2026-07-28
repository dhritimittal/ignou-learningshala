"use client";

import { useState, useEffect, useRef } from "react";
import { Suspense } from "react";

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
import Snapshot from "@/components/course/snapshot/snapshot";
import Learning from "@/components/course/learning";
import Faculty from "@/components/course/faculty/faculty";
import Careers from "@/components/course/careers/careers";
import Highlights from "@/components/course/highlights";
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
        <Highlights data={data}/>
        <AboutSection openWizard={openWizard} data={data} />
        <Snapshot data={data}/>
        <Suspense fallback={null}>
          <ProgrammesSection
            openWizard={openWizard}
            data={data}
          />
        </Suspense>
        <AdmissionsSection openWizard={openWizard} data={data} />
        
        <Learning data={data}/>
        <DegreeSection openWizard={openWizard} data={data} />
        {/*<Careers/>*/}
        <Faculty data={data} />
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
          data={data}
        />
      )}
    </div>
  );
}