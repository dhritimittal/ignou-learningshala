// Hero Section
import { LatestUpdate } from "../parsers/latestUpdates";

export interface UniversityData {
  id: number;

  name: string;
  shortName: string;
  slug: string;

  logo: string;
  banner: string;

  city: string;
  state: string;

  establishedYear: string;

  universityType: string;

  educationMode: string;
  admissionMode: string;
  examinationMode: string;

  brochure: string;

  authorName: string;
  authorImage: string;
  authorSlug: string;

  approvals: Approval[];
  nirf?: Approval;
  aicte?: Approval;
  ugc?: Approval;
  naac?: Approval;

  rating: number;
  totalStudents: number;

  website: string;
}

export interface Hero {
  bannerImage: string;
  // Announcement ticker
  latestUpdates: LatestUpdate[];
  // Top ribbon
  establishedYear: string;
  // Main content
  title: string;
  subtitle: string;
  description: string;
}

export interface Approval {
  id?: number;
  title: string;
  logo: string;
}

export interface About {
  paragraphs: string[];
  buttonText: string;
  stats: {
    label: string;
    value: string;
    sub: string;
  }[];
}

export interface Degree {
  bullets: string[];
  certificateImage: string;
} 

export interface Programme {
  name: string;
  slug: string;
  image: string;
  duration: string;
  fee: string;
  specs: number;
  level: "UG" | "PG" | "Diploma" | "Certificate";
  mode: "Online" | "Distance";
  label: string;
}

export interface Programmes {
  programmes: Programme[];
}

export interface Testimonial {
  name: string;
  rating: number;
  content: string;
}

export interface Testimonials {
  testimonials: Testimonial[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  priority: number;
  items: FAQItem[];
}

export interface FAQs {
  faqs: FAQCategory[];
}

export interface UniversityPage {
  university: UniversityData;
  hero: Hero;
  about: About;
  degree: Degree;
  programmes: Programmes;
  testimonials:Testimonials;
  faqs: FAQs;
  // We'll add these next
  // about: About;
  // programmes: Programme[];
  // admission: AdmissionSection;
  // reviews: ReviewSection;
  // faqs: FAQCategory[];
}