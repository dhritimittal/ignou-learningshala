export interface CourseSpecialization {
  id: number;
  title: string;
  icon: string;
  description: string;
  careers: string[];
  salary: string;
  demand: string;
}

export interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface Career {
  description: string;
  averagePackage: string;
  salaryHike: string;
  industries: string[];
  jobs: {
    title: string;
    salary: string;
  }[];
};

export interface CourseSnapshot {
  programmeName: string;
  degreeLevel: string;
  university: string;
  duration: string;
  modeOfLearning: string;
  approvals: string;
  topSpecializations: string;
  eligibility: string;
  entranceTest: string;
  admissionProcess: string;
  lms: string;
  examinations: string;
  placement: string;
  topRoles: string;
}

export interface Course {
  slug: string;
  name: string;
  heroImage: string;
  description: string;

  duration: string;
  fee: string;
  mode: string;

  location: string;
  rating: number;
  students: string;

  approvals: {
    name: string;
    logo: string;
  }[];

  highlights: string[];
  curriculum: {
    credits: number;
    semesters: {
      id: number;
      title: string;
      credits: number;
      subjects: {
        code: string;
        name: string;
      }[];
    }[];
  };
  specializations: CourseSpecialization[];
  snapshot: CourseSnapshot;
  learning: Learning;
  examination: Examination;
  career: Career;
  faculty: FacultyMember[];
  reviews: ReviewsData;
}

export interface Learning {
  title: string;
  description: string;
  paragraphs: string[];
};

export interface Examination {
  title: string;
  description: string;
  paragraphs: string[];
};

export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  review: string;
}

export interface RatingBreakdown {
  stars: number;
  percentage: number;
}

export interface ReviewsData {
  averageRating: number;
  totalReviews: number;
  breakdown: RatingBreakdown[];
  reviews: Review[];
}