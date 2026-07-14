"use client";
import CourseNavbar from "@/components/course/layout/navbar";
import CTASection from "@/components/home/layout/cta";
import CounsellingWizard from "@/components/shared/wizard/counsellingwizard";
import Highlights from "@/components/course/highlights";
import Fees from "@/components/course/fees/fees";
import AdmissionsSection from "@/components/course/admission";
import Curriculum from "@/components/course/curriculum/curriculum";
import Specializations from "@/components/course/specializations/specializations";
import Snapshot from "@/components/course/snapshot/snapshot";
import Learning from "@/components/course/learning";
import DegreeSection from "@/components/home/degree";
import FAQSection from "@/components/home/faqs";
import Careers from "@/components/course/careers/careers";
import Faculty from "@/components/course/faculty/faculty";
import Reviews from "@/components/course/reviews/reviews";
import { useState, useEffect } from "react";
import Hero from "@/components/course/hero/hero";

export default function ClientPage({course}) {
  const [scrolled, setScrolled] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardProgramme, setWizardProgramme] = useState("");
  const [wizardStartStep, setWizardStartStep] = useState(0);
  const [wizardMode, setWizardMode] = useState("questionnaire");
  const [selectedService, setSelectedService] = useState("");
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("course-hero");

    if (!hero) return;

    const handleScroll = () => {
      const rect = hero.getBoundingClientRect();

      // navbar height = 64px
      setHeroVisible(rect.bottom > 64);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWizard = () => {
    setWizardMode("questionnaire");
    setWizardProgramme("");
    setWizardStartStep(0);
    setSelectedService("");
    setWizardOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased">
      <CourseNavbar scrolled={scrolled} openWizard={openWizard} heroVisible={heroVisible} course={course} />
      <main>
        <Hero data={course} />
        <Highlights data={course} />
        <Snapshot data={course} />
        <Fees data={course} />
        <Specializations data={course} />
        <AdmissionsSection openWizard={openWizard} />
        <Curriculum data={course} />
        <Learning data={course} />
        <DegreeSection />
        <Careers data={course} openWizard={openWizard} />
        <Faculty data={course} />
        <Reviews data={course} />
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