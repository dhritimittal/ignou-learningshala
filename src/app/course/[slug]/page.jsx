"use client";

import CourseNavbar from "@/components/course/layout/navbar";
import { useState, useEffect } from "react";

export default function CoursePage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <CourseNavbar scrolled={scrolled} openWizard={() => {}} />

      <div className="h-[2000px] bg-white pt-24">
        Test Page
      </div>
    </>
  );
}