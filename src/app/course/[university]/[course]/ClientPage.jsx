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

export default function ClientPage({ course, university}) {
  const [scrolled, setScrolled] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
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
        <Hero data={course} openWizard={openWizard} />
        <Highlights data={university} />
        <Snapshot data={course} />
        <Fees data={course} openWizard={openWizard} />
        <Specializations data={course} openWizard={openWizard} />
        <AdmissionsSection openWizard={openWizard} data={university} />
        <Curriculum data={course} openWizard={openWizard} />
        <Learning data={university} />
        <DegreeSection openWizard={openWizard} data={university} />
        <Careers data={course} openWizard={openWizard} />
        <Faculty data={university} />
        <Reviews data={course} />
        <FAQSection data={university} />
        <CTASection openWizard={openWizard} data={university} />
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