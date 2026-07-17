// Hero Section
import { LatestUpdate } from "../parsers/latestUpdates";

export interface Hero {
  bannerImage: string;

  // Announcement ticker
  latestUpdates: LatestUpdate[];

  // Top ribbon
  establishedYear: string;
  recognition: string;

  // Main content
  title: string;
  subtitle: string;
  description: string;

  // Trust badges
  approvals: Approval[];

  // Bottom stats bar
  stats: HeroStat[];

}

export interface Approval {
  id?: number;
  title: string;
  logo: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface University {
  hero: Hero;

  // We'll add these next
  // about: About;
  // programmes: Programme[];
  // admission: AdmissionSection;
  // reviews: ReviewSection;
  // faqs: FAQCategory[];
}