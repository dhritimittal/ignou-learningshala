export interface CourseSpecialization {
  id: number;
  title: string;
  icon: string;
  description: string;
  careers: string[];
  salary: string;
  demand: string;
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

  approvals: string[];
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