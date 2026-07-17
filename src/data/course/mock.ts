import { Course } from "@/lib/types/course";

export const COURSE_DATA: Record<string, Course> = {
  "online-mba": {
    slug: "online-mba",

    name: "Online MBA",

    heroImage: "/ignou-campus.jpg",

    description:
      "Develop leadership, strategic thinking and business management skills through IGNOU's UGC-entitled Online MBA programme designed for working professionals.",

    duration: "2 Years",

    fee: "₹56,000",

    mode: "Online",

    location: "New Delhi",

    rating: 4.8,

    students: "1.2L+",

    approvals: [
      {
        name: "UGC-DEB",
        logo: "/accreditations/ugc-deb.png",
      },
      {
        name: "AICTE",
        logo: "/accreditations/aicte.png",
      },
      {
        name: "NAAC A++",
        logo: "/accreditations/naac.png",
      },
      {
        name: "NIRF",
        logo: "/accreditations/nirf.png",
      },
    ],

    highlights: [
      "Live + Recorded Classes",
      "Placement Assistance",
      "EMI Available",
      "Industry Projects"
    ],
    curriculum: {
      credits: 96,

      semesters: [
        {
          id: 1,
          title: "Semester 1",
          credits: 24,
          subjects: [
            {
              code: "MMPC-001",
              name: "Management Functions & Organisational Behaviour",
            },
            {
              code: "MMPC-002",
              name: "Human Resource Management",
            },
            {
              code: "MMPC-003",
              name: "Business Environment",
            },
            {
              code: "MMPC-004",
              name: "Accounting for Managers",
            },
            {
              code: "MMPC-005",
              name: "Marketing Management",
            },
          ],
        },

        {
          id: 2,
          title: "Semester 2",
          credits: 24,
          subjects: [
            {
              code: "MMPC-006",
              name: "Quantitative Analysis for Managerial Applications",
            },
            {
              code: "MMPC-007",
              name: "Business Communication",
            },
            {
              code: "MMPC-008",
              name: "Information Systems for Managers",
            },
            {
              code: "MMPC-009",
              name: "Managerial Economics",
            },
            {
              code: "MMPC-010",
              name: "Strategic Management",
            },
          ],
        },

        {
          id: 3,
          title: "Semester 3",
          credits: 24,
          subjects: [
            {
              code: "MMPC-011",
              name: "Financial Management",
            },
            {
              code: "MMPC-012",
              name: "Operations Management",
            },
            {
              code: "MMPC-013",
              name: "Research Methodology",
            },
            {
              code: "MMPC-014",
              name: "International Business",
            },
            {
              code: "MMPC-015",
              name: "Elective I",
            },
          ],
        },

        {
          id: 4,
          title: "Semester 4",
          credits: 24,
          subjects: [
            {
              code: "MMPC-016",
              name: "Entrepreneurship",
            },
            {
              code: "MMPC-017",
              name: "Elective II",
            },
            {
              code: "MMPC-018",
              name: "Elective III",
            },
            {
              code: "MMPP-001",
              name: "Project Work",
            },
          ],
        },
      ],
    },
    specializations: [
      {
        id: 1,
        title: "Marketing",
        icon: "Megaphone",

        description:
          "Build expertise in branding, consumer behaviour, digital marketing and product strategy.",

        careers: [
          "Brand Manager",
          "Marketing Manager",
          "Digital Marketing Lead",
          "Growth Manager",
        ],

        salary: "₹8–18 LPA",

        demand: "Very High",
      },

      {
        id: 2,
        title: "Finance",
        icon: "Landmark",

        description:
          "Master corporate finance, investment analysis and banking operations.",

        careers: [
          "Financial Analyst",
          "Investment Banker",
          "Credit Manager",
          "Finance Manager",
        ],

        salary: "₹9–20 LPA",

        demand: "High",
      },

      {
        id: 3,
        title: "Human Resource",
        icon: "Users",

        description:
          "Develop expertise in people management and organizational leadership.",

        careers: [
          "HR Manager",
          "Talent Acquisition",
          "HR Business Partner",
          "L&D Manager",
        ],

        salary: "₹7–15 LPA",

        demand: "High",
      },

      {
        id: 4,
        title: "Operations",
        icon: "Factory",

        description:
          "Learn operations strategy, logistics and process optimization.",

        careers: [
          "Operations Manager",
          "Plant Manager",
          "Logistics Manager",
          "Supply Planner",
        ],

        salary: "₹8–18 LPA",

        demand: "High",
      },

      {
        id: 5,
        title: "Analytics",
        icon: "ChartColumnIncreasing",

        description:
          "Use data-driven decision making to solve business problems.",

        careers: [
          "Business Analyst",
          "Data Analyst",
          "BI Consultant",
          "Strategy Analyst",
        ],

        salary: "₹10–22 LPA",

        demand: "Very High",
      },

      {
        id: 6,
        title: "Healthcare",
        icon: "HeartPulse",

        description:
          "Manage hospitals, healthcare systems and medical organizations.",

        careers: [
          "Hospital Manager",
          "Healthcare Consultant",
          "Operations Lead",
          "Administrator",
        ],

        salary: "₹7–16 LPA",

        demand: "Growing",
      },

      {
        id: 7,
        title: "Supply Chain",
        icon: "Package",

        description:
          "Learn procurement, warehousing and global logistics.",

        careers: [
          "Supply Chain Manager",
          "Procurement Lead",
          "Warehouse Manager",
          "Logistics Planner",
        ],

        salary: "₹8–18 LPA",

        demand: "High",
      },

      {
        id: 8,
        title: "Project Management",
        icon: "BriefcaseBusiness",

        description:
          "Plan, execute and deliver complex business projects successfully.",

        careers: [
          "Project Manager",
          "PMO Lead",
          "Program Manager",
          "Delivery Manager",
        ],

        salary: "₹9–22 LPA",

        demand: "Very High",
      },
    ],
    snapshot: {
      programmeName: "Online Master of Business Administration (MBAOL)",

      degreeLevel: "Postgraduate (PG)",

      university:
        "Indira Gandhi National Open University (IGNOU)",

      duration:
        "24 Months (4 Semesters • 6 Months each)",

      modeOfLearning: "Online",

      approvals:
        "UGC-DEB • NAAC A++ • AICTE • NIRF 2025: 1st (Open University) • WES",

      topSpecializations: "5 Specializations",

      eligibility:
        "Bachelor's Degree with a minimum of 50% marks",

      entranceTest:
        "No, Direct Admission Available",

      admissionProcess:
        "Simple & Online",

      lms:
        "e-Gyankosh • Flexible Learning • Recorded Lectures • E-Library • Samarth Portal",

      examinations:
        "Choose Online / Offline Mode",

      placement:
        "Training, Placement Drives & Internship Assistance",

      topRoles:
        "HR Executive • Marketing Associate • Operations Executive • Project Coordinator",
    },
    learning: {
      title: "LMS & Study Materials",

      description:
        "Indira Gandhi National Open University offers an interactive LMS portal and downloadable study materials for a seamless learning experience.",

      paragraphs: [
        "Self-paced Learning: A dedicated Samarth portal with 24/7 access to programme details, digital resources, study materials, educational radio and television channels, recorded lectures and podcasts.",

        "e-Gyankosh: Access India's extensive digital library containing e-books, assessments, previous year question papers and video lectures.",

        "SWAYAM Plus: Professional certification programmes in AI, technology and marketing from IBM, KPMG, ZScaler, Internshala and other industry leaders.",

        "SWAYAM Prabha: Dedicated DTH and FM educational channels that allow students to learn at their own pace from anywhere.",
      ],
    },

    examination: {
      title: "Examination Pattern",

      description:
        "IGNOU follows a structured evaluation model combining continuous assessment, term-end examinations and project work.",

      paragraphs: [
        "Continuous Assessment (30%): Students complete quizzes, assignments, case studies and subjective assessments which contribute 30% towards the final grade.",

        "Term-End Examination (70%): Conducted twice every year in June and December. Students can choose subjects as per their academic cycle and appear through Computer Based Tests at designated centres.",

        "Project Evaluation: Students complete a major project under faculty guidance and must secure the required passing grade for successful programme completion.",

        "Flexible Examination Options: Students may plan their examination attempts according to the available TEE cycles and programme regulations.",
      ],
    },
    career: {
      description:
        "IGNOU's Online MBA prepares learners for leadership and managerial roles across industries through industry-oriented curriculum, placement assistance, internships and regular recruitment drives. Graduates gain practical business knowledge and are equipped to build successful careers in both private organizations and government sectors.",

      averagePackage: "₹3–8 LPA",

      salaryHike: "30%",

      industries: [
        "Banking",
        "Finance",
        "Information Technology",
        "Manufacturing",
        "Healthcare",
        "Consulting",
        "E-commerce",
        "FMCG",
      ],

      jobs: [
        {
          title: "Marketing Executive",
          salary: "₹3–6 LPA",
        },
        {
          title: "Sales Executive",
          salary: "₹2–5 LPA",
        },
        {
          title: "Talent Acquisition Specialist",
          salary: "₹3–5 LPA",
        },
        {
          title: "Business Development Executive",
          salary: "₹3–7 LPA",
        },
        {
          title: "E-commerce Operations Executive",
          salary: "₹3–8 LPA",
        },
        {
          title: "Finance Executive",
          salary: "₹3–9 LPA",
        },
        {
          title: "Accounts Executive",
          salary: "₹3–8 LPA",
        },
        {
          title: "Banking Operations Executive",
          salary: "₹2–7 LPA",
        },
      ],
    },
    faculty: [
      {
        id: 1,
        name: "Prof. Kaustuva Barik",
        designation: "Professor",
        image: "/faculty/kaustuva-barik.jpg",
      },
      {
        id: 2,
        name: "Dr. Mitoo Das",
        designation: "Associate Professor",
        image: "/faculty/mitoo-das.jpg",
      },
      {
        id: 3,
        name: "Dr. Sudhansh Sharma",
        designation: "Associate Professor",
        image: "/faculty/sudhansh-sharma.jpg",
      },
      {
        id: 4,
        name: "Dr. Shweta Tripathi",
        designation: "Assistant Professor",
        image: "/faculty/shweta-tripathi.jpg",
      },
      {
        id: 5,
        name: "Dr. Vibhuti Gaur",
        designation: "Associate Professor",
        image: "/faculty/vibhuti-gaur.jpg",
      },
      {
        id: 6,
        name: "Dr. Reeta Devi",
        designation: "Professor",
        image: "/faculty/reeta-devi.jpg",
      },
      {
        id: 7,
        name: "Prof. Anurag Saxena",
        designation: "Professor",
        image: "/faculty/anurag-saxena.jpg",
      },
      {
        id: 8,
        name: "Dr. N. Ramya",
        designation: "Associate Professor",
        image: "/faculty/n-ramya.jpg",
      },
      {
        id: 9,
        name: "Prof. N.A. Farooquee",
        designation: "Professor",
        image: "/faculty/na-farooquee.jpg",
      },
      {
        id: 10,
        name: "Prof. Rakhi Sharma",
        designation: "Professor",
        image: "/faculty/rakhi-sharma.jpg",
      },
    ],
    reviews: {
      averageRating: 4.2,

      totalReviews: 245,

      breakdown: [
        { stars: 5, percentage: 72 },
        { stars: 4, percentage: 18 },
        { stars: 3, percentage: 7 },
        { stars: 2, percentage: 2 },
        { stars: 1, percentage: 1 },
      ],

      reviews: [
        {
          id: 1,
          name: "Prajakata Singh",
          rating: 4,
          date: "March 2025",
          review:
            "I really like the self-paced learning for the IGNOU MBA. It gives me the flexibility to study while working full-time.",
        },

        {
          id: 2,
          name: "Sanaya",
          rating: 3,
          date: "February 2025",
          review:
            "Initially I was unsure about the recognition of the programme, but after speaking with alumni I felt confident enrolling.",
        },

        {
          id: 3,
          name: "Amit Kumar",
          rating: 5,
          date: "January 2025",
          review:
            "Affordable fees, quality study material and flexibility make this one of the best options for working professionals.",
        },
      ],
    },
  },

  "online-mca": {
    slug: "online-mca",

    name: "Online MCA",

    heroImage: "/images/course/online-mca.jpg",

    description:
      "Master modern software development, cloud computing and AI fundamentals through IGNOU's Online MCA.",

    duration: "2 Years",

    fee: "₹12,700 / Semester",

    mode: "Online",

    location: "New Delhi",

    rating: 4.7,

    students: "48K+",

    approvals: [
      {
        name: "UGC-DEB",
        logo: "/accreditations/ugc-deb.png",
      },
      {
        name: "AICTE",
        logo: "/accreditations/aicte.png",
      },
      {
        name: "NAAC A++",
        logo: "/accreditations/naac.png",
      },
      {
        name: "NIRF",
        logo: "/accreditations/nirf.png",
      },
    ],

    highlights: [
      "Coding Labs",
      "Recorded Lectures",
      "Placement Support",
      "Industry Curriculum"
    ],
    curriculum: {
      credits: 96,

      semesters: [
        {
          id: 1,
          title: "Semester 1",
          credits: 24,
          subjects: [
            {
              code: "MMPC-001",
              name: "Management Functions & Organisational Behaviour",
            },
            {
              code: "MMPC-002",
              name: "Human Resource Management",
            },
            {
              code: "MMPC-003",
              name: "Business Environment",
            },
            {
              code: "MMPC-004",
              name: "Accounting for Managers",
            },
            {
              code: "MMPC-005",
              name: "Marketing Management",
            },
          ],
        },

        {
          id: 2,
          title: "Semester 2",
          credits: 24,
          subjects: [
            {
              code: "MMPC-006",
              name: "Quantitative Analysis for Managerial Applications",
            },
            {
              code: "MMPC-007",
              name: "Business Communication",
            },
            {
              code: "MMPC-008",
              name: "Information Systems for Managers",
            },
            {
              code: "MMPC-009",
              name: "Managerial Economics",
            },
            {
              code: "MMPC-010",
              name: "Strategic Management",
            },
          ],
        },

        {
          id: 3,
          title: "Semester 3",
          credits: 24,
          subjects: [
            {
              code: "MMPC-011",
              name: "Financial Management",
            },
            {
              code: "MMPC-012",
              name: "Operations Management",
            },
            {
              code: "MMPC-013",
              name: "Research Methodology",
            },
            {
              code: "MMPC-014",
              name: "International Business",
            },
            {
              code: "MMPC-015",
              name: "Elective I",
            },
          ],
        },

        {
          id: 4,
          title: "Semester 4",
          credits: 24,
          subjects: [
            {
              code: "MMPC-016",
              name: "Entrepreneurship",
            },
            {
              code: "MMPC-017",
              name: "Elective II",
            },
            {
              code: "MMPC-018",
              name: "Elective III",
            },
            {
              code: "MMPP-001",
              name: "Project Work",
            },
          ],
        },
      ],
    },
    specializations: [
      {
        id: 1,
        title: "Marketing",
        icon: "Megaphone",

        description:
          "Build expertise in branding, consumer behaviour, digital marketing and product strategy.",

        careers: [
          "Brand Manager",
          "Marketing Manager",
          "Digital Marketing Lead",
          "Growth Manager",
        ],

        salary: "₹8–18 LPA",

        demand: "Very High",
      },

      {
        id: 2,
        title: "Finance",
        icon: "Landmark",

        description:
          "Master corporate finance, investment analysis and banking operations.",

        careers: [
          "Financial Analyst",
          "Investment Banker",
          "Credit Manager",
          "Finance Manager",
        ],

        salary: "₹9–20 LPA",

        demand: "High",
      },

      {
        id: 3,
        title: "Human Resource",
        icon: "Users",

        description:
          "Develop expertise in people management and organizational leadership.",

        careers: [
          "HR Manager",
          "Talent Acquisition",
          "HR Business Partner",
          "L&D Manager",
        ],

        salary: "₹7–15 LPA",

        demand: "High",
      },

      {
        id: 4,
        title: "Operations",
        icon: "Factory",

        description:
          "Learn operations strategy, logistics and process optimization.",

        careers: [
          "Operations Manager",
          "Plant Manager",
          "Logistics Manager",
          "Supply Planner",
        ],

        salary: "₹8–18 LPA",

        demand: "High",
      },

      {
        id: 5,
        title: "Analytics",
        icon: "ChartColumnIncreasing",

        description:
          "Use data-driven decision making to solve business problems.",

        careers: [
          "Business Analyst",
          "Data Analyst",
          "BI Consultant",
          "Strategy Analyst",
        ],

        salary: "₹10–22 LPA",

        demand: "Very High",
      },

      {
        id: 6,
        title: "Healthcare",
        icon: "HeartPulse",

        description:
          "Manage hospitals, healthcare systems and medical organizations.",

        careers: [
          "Hospital Manager",
          "Healthcare Consultant",
          "Operations Lead",
          "Administrator",
        ],

        salary: "₹7–16 LPA",

        demand: "Growing",
      },

      {
        id: 7,
        title: "Supply Chain",
        icon: "Package",

        description:
          "Learn procurement, warehousing and global logistics.",

        careers: [
          "Supply Chain Manager",
          "Procurement Lead",
          "Warehouse Manager",
          "Logistics Planner",
        ],

        salary: "₹8–18 LPA",

        demand: "High",
      },

      {
        id: 8,
        title: "Project Management",
        icon: "BriefcaseBusiness",

        description:
          "Plan, execute and deliver complex business projects successfully.",

        careers: [
          "Project Manager",
          "PMO Lead",
          "Program Manager",
          "Delivery Manager",
        ],

        salary: "₹9–22 LPA",

        demand: "Very High",
      },
    ],
    snapshot: {
      programmeName: "Online Master of Business Administration (MBAOL)",

      degreeLevel: "Postgraduate (PG)",

      university:
        "Indira Gandhi National Open University (IGNOU)",

      duration:
        "24 Months (4 Semesters • 6 Months each)",

      modeOfLearning: "Online",

      approvals:
        "UGC-DEB • NAAC A++ • AICTE • NIRF 2025: 1st (Open University) • WES",

      topSpecializations: "5 Specializations",

      eligibility:
        "Bachelor's Degree with a minimum of 50% marks",

      entranceTest:
        "No, Direct Admission Available",

      admissionProcess:
        "Simple & Online",

      lms:
        "e-Gyankosh • Flexible Learning • Recorded Lectures • E-Library • Samarth Portal",

      examinations:
        "Choose Online / Offline Mode",

      placement:
        "Training, Placement Drives & Internship Assistance",

      topRoles:
        "HR Executive • Marketing Associate • Operations Executive • Project Coordinator",
    },
    learning: {
      title: "LMS & Study Materials",

      description:
        "Indira Gandhi National Open University offers an interactive LMS portal and downloadable study materials for a seamless learning experience.",

      paragraphs: [
        "Self-paced Learning: A dedicated Samarth portal with 24/7 access to programme details, digital resources, study materials, educational radio and television channels, recorded lectures and podcasts.",

        "e-Gyankosh: Access India's extensive digital library containing e-books, assessments, previous year question papers and video lectures.",

        "SWAYAM Plus: Professional certification programmes in AI, technology and marketing from IBM, KPMG, ZScaler, Internshala and other industry leaders.",

        "SWAYAM Prabha: Dedicated DTH and FM educational channels that allow students to learn at their own pace from anywhere.",
      ],
    },

    examination: {
      title: "Examination Pattern",

      description:
        "IGNOU follows a structured evaluation model combining continuous assessment, term-end examinations and project work.",

      paragraphs: [
        "Continuous Assessment (30%): Students complete quizzes, assignments, case studies and subjective assessments which contribute 30% towards the final grade.",

        "Term-End Examination (70%): Conducted twice every year in June and December. Students can choose subjects as per their academic cycle and appear through Computer Based Tests at designated centres.",

        "Project Evaluation: Students complete a major project under faculty guidance and must secure the required passing grade for successful programme completion.",

        "Flexible Examination Options: Students may plan their examination attempts according to the available TEE cycles and programme regulations.",
      ],
    },
    career: {
      description:
        "IGNOU's Online MBA prepares learners for leadership and managerial roles across industries through industry-oriented curriculum, placement assistance, internships and regular recruitment drives. Graduates gain practical business knowledge and are equipped to build successful careers in both private organizations and government sectors.",

      averagePackage: "₹3–8 LPA",

      salaryHike: "30%",

      industries: [
        "Banking",
        "Finance",
        "Information Technology",
        "Manufacturing",
        "Healthcare",
        "Consulting",
        "E-commerce",
        "FMCG",
      ],

      jobs: [
        {
          title: "Marketing Executive",
          salary: "₹3–6 LPA",
        },
        {
          title: "Sales Executive",
          salary: "₹2–5 LPA",
        },
        {
          title: "Talent Acquisition Specialist",
          salary: "₹3–5 LPA",
        },
        {
          title: "Business Development Executive",
          salary: "₹3–7 LPA",
        },
        {
          title: "E-commerce Operations Executive",
          salary: "₹3–8 LPA",
        },
        {
          title: "Finance Executive",
          salary: "₹3–9 LPA",
        },
        {
          title: "Accounts Executive",
          salary: "₹3–8 LPA",
        },
        {
          title: "Banking Operations Executive",
          salary: "₹2–7 LPA",
        },
      ],
    },
    faculty: [
      {
        id: 1,
        name: "Prof. Kaustuva Barik",
        designation: "Professor",
        image: "/faculty/kaustuva-barik.jpg",
      },
      {
        id: 2,
        name: "Dr. Mitoo Das",
        designation: "Associate Professor",
        image: "/faculty/mitoo-das.jpg",
      },
      {
        id: 3,
        name: "Dr. Sudhansh Sharma",
        designation: "Associate Professor",
        image: "/faculty/sudhansh-sharma.jpg",
      },
      {
        id: 4,
        name: "Dr. Shweta Tripathi",
        designation: "Assistant Professor",
        image: "/faculty/shweta-tripathi.jpg",
      },
      {
        id: 5,
        name: "Dr. Vibhuti Gaur",
        designation: "Associate Professor",
        image: "/faculty/vibhuti-gaur.jpg",
      },
      {
        id: 6,
        name: "Dr. Reeta Devi",
        designation: "Professor",
        image: "/faculty/reeta-devi.jpg",
      },
      {
        id: 7,
        name: "Prof. Anurag Saxena",
        designation: "Professor",
        image: "/faculty/anurag-saxena.jpg",
      },
      {
        id: 8,
        name: "Dr. N. Ramya",
        designation: "Associate Professor",
        image: "/faculty/n-ramya.jpg",
      },
      {
        id: 9,
        name: "Prof. N.A. Farooquee",
        designation: "Professor",
        image: "/faculty/na-farooquee.jpg",
      },
      {
        id: 10,
        name: "Prof. Rakhi Sharma",
        designation: "Professor",
        image: "/faculty/rakhi-sharma.jpg",
      },
    ],
        reviews: {
      averageRating: 4.2,

      totalReviews: 245,

      breakdown: [
        { stars: 5, percentage: 72 },
        { stars: 4, percentage: 18 },
        { stars: 3, percentage: 7 },
        { stars: 2, percentage: 2 },
        { stars: 1, percentage: 1 },
      ],

      reviews: [
        {
          id: 1,
          name: "Prajakata Singh",
          rating: 4,
          date: "March 2025",
          review:
            "I really like the self-paced learning for the IGNOU MBA. It gives me the flexibility to study while working full-time.",
        },

        {
          id: 2,
          name: "Sanaya",
          rating: 3,
          date: "February 2025",
          review:
            "Initially I was unsure about the recognition of the programme, but after speaking with alumni I felt confident enrolling.",
        },

        {
          id: 3,
          name: "Amit Kumar",
          rating: 5,
          date: "January 2025",
          review:
            "Affordable fees, quality study material and flexibility make this one of the best options for working professionals.",
        },
      ],
    },
  },

  "distance-mba": {
    slug: "distance-mba",

    name: "Distance MBA",

    heroImage: "/images/course/distance-mba.jpg",

    description:
      "Flexible distance learning MBA designed for professionals seeking career advancement.",

    duration: "2 Years",

    fee: "₹16,000 / Semester",

    mode: "Distance",

    location: "New Delhi",

    rating: 4.7,

    students: "95K+",

    approvals: [
      {
        name: "UGC-DEB",
        logo: "/accreditations/ugc-deb.png",
      },
      {
        name: "AICTE",
        logo: "/accreditations/aicte.png",
      },
      {
        name: "NAAC A++",
        logo: "/accreditations/naac.png",
      },
      {
        name: "NIRF",
        logo: "/accreditations/nirf.png",
      },
    ],

    highlights: [
      "Printed Study Material",
      "Weekend Support",
      "Affordable Fees",
      "Flexible Exams"
    ],
    curriculum: {
      credits: 96,

      semesters: [
        {
          id: 1,
          title: "Semester 1",
          credits: 24,
          subjects: [
            {
              code: "MMPC-001",
              name: "Management Functions & Organisational Behaviour",
            },
            {
              code: "MMPC-002",
              name: "Human Resource Management",
            },
            {
              code: "MMPC-003",
              name: "Business Environment",
            },
            {
              code: "MMPC-004",
              name: "Accounting for Managers",
            },
            {
              code: "MMPC-005",
              name: "Marketing Management",
            },
          ],
        },

        {
          id: 2,
          title: "Semester 2",
          credits: 24,
          subjects: [
            {
              code: "MMPC-006",
              name: "Quantitative Analysis for Managerial Applications",
            },
            {
              code: "MMPC-007",
              name: "Business Communication",
            },
            {
              code: "MMPC-008",
              name: "Information Systems for Managers",
            },
            {
              code: "MMPC-009",
              name: "Managerial Economics",
            },
            {
              code: "MMPC-010",
              name: "Strategic Management",
            },
          ],
        },

        {
          id: 3,
          title: "Semester 3",
          credits: 24,
          subjects: [
            {
              code: "MMPC-011",
              name: "Financial Management",
            },
            {
              code: "MMPC-012",
              name: "Operations Management",
            },
            {
              code: "MMPC-013",
              name: "Research Methodology",
            },
            {
              code: "MMPC-014",
              name: "International Business",
            },
            {
              code: "MMPC-015",
              name: "Elective I",
            },
          ],
        },

        {
          id: 4,
          title: "Semester 4",
          credits: 24,
          subjects: [
            {
              code: "MMPC-016",
              name: "Entrepreneurship",
            },
            {
              code: "MMPC-017",
              name: "Elective II",
            },
            {
              code: "MMPC-018",
              name: "Elective III",
            },
            {
              code: "MMPP-001",
              name: "Project Work",
            },
          ],
        },
      ],
    },
    specializations: [
      {
        id: 1,
        title: "Marketing",
        icon: "Megaphone",

        description:
          "Build expertise in branding, consumer behaviour, digital marketing and product strategy.",

        careers: [
          "Brand Manager",
          "Marketing Manager",
          "Digital Marketing Lead",
          "Growth Manager",
        ],

        salary: "₹8–18 LPA",

        demand: "Very High",
      },

      {
        id: 2,
        title: "Finance",
        icon: "Landmark",

        description:
          "Master corporate finance, investment analysis and banking operations.",

        careers: [
          "Financial Analyst",
          "Investment Banker",
          "Credit Manager",
          "Finance Manager",
        ],

        salary: "₹9–20 LPA",

        demand: "High",
      },

      {
        id: 3,
        title: "Human Resource",
        icon: "Users",

        description:
          "Develop expertise in people management and organizational leadership.",

        careers: [
          "HR Manager",
          "Talent Acquisition",
          "HR Business Partner",
          "L&D Manager",
        ],

        salary: "₹7–15 LPA",

        demand: "High",
      },

      {
        id: 4,
        title: "Operations",
        icon: "Factory",

        description:
          "Learn operations strategy, logistics and process optimization.",

        careers: [
          "Operations Manager",
          "Plant Manager",
          "Logistics Manager",
          "Supply Planner",
        ],

        salary: "₹8–18 LPA",

        demand: "High",
      },

      {
        id: 5,
        title: "Analytics",
        icon: "ChartColumnIncreasing",

        description:
          "Use data-driven decision making to solve business problems.",

        careers: [
          "Business Analyst",
          "Data Analyst",
          "BI Consultant",
          "Strategy Analyst",
        ],

        salary: "₹10–22 LPA",

        demand: "Very High",
      },

      {
        id: 6,
        title: "Healthcare",
        icon: "HeartPulse",

        description:
          "Manage hospitals, healthcare systems and medical organizations.",

        careers: [
          "Hospital Manager",
          "Healthcare Consultant",
          "Operations Lead",
          "Administrator",
        ],

        salary: "₹7–16 LPA",

        demand: "Growing",
      },

      {
        id: 7,
        title: "Supply Chain",
        icon: "Package",

        description:
          "Learn procurement, warehousing and global logistics.",

        careers: [
          "Supply Chain Manager",
          "Procurement Lead",
          "Warehouse Manager",
          "Logistics Planner",
        ],

        salary: "₹8–18 LPA",

        demand: "High",
      },

      {
        id: 8,
        title: "Project Management",
        icon: "BriefcaseBusiness",

        description:
          "Plan, execute and deliver complex business projects successfully.",

        careers: [
          "Project Manager",
          "PMO Lead",
          "Program Manager",
          "Delivery Manager",
        ],

        salary: "₹9–22 LPA",

        demand: "Very High",
      },
    ],
    snapshot: {
      programmeName: "Online Master of Business Administration (MBAOL)",

      degreeLevel: "Postgraduate (PG)",

      university:
        "Indira Gandhi National Open University (IGNOU)",

      duration:
        "24 Months (4 Semesters • 6 Months each)",

      modeOfLearning: "Online",

      approvals:
        "UGC-DEB • NAAC A++ • AICTE • NIRF 2025: 1st (Open University) • WES",

      topSpecializations: "5 Specializations",

      eligibility:
        "Bachelor's Degree with a minimum of 50% marks",

      entranceTest:
        "No, Direct Admission Available",

      admissionProcess:
        "Simple & Online",

      lms:
        "e-Gyankosh • Flexible Learning • Recorded Lectures • E-Library • Samarth Portal",

      examinations:
        "Choose Online / Offline Mode",

      placement:
        "Training, Placement Drives & Internship Assistance",

      topRoles:
        "HR Executive • Marketing Associate • Operations Executive • Project Coordinator",
    },
    learning: {
      title: "LMS & Study Materials",

      description:
        "Indira Gandhi National Open University offers an interactive LMS portal and downloadable study materials for a seamless learning experience.",

      paragraphs: [
        "Self-paced Learning: A dedicated Samarth portal with 24/7 access to programme details, digital resources, study materials, educational radio and television channels, recorded lectures and podcasts.",

        "e-Gyankosh: Access India's extensive digital library containing e-books, assessments, previous year question papers and video lectures.",

        "SWAYAM Plus: Professional certification programmes in AI, technology and marketing from IBM, KPMG, ZScaler, Internshala and other industry leaders.",

        "SWAYAM Prabha: Dedicated DTH and FM educational channels that allow students to learn at their own pace from anywhere.",
      ],
    },

    examination: {
      title: "Examination Pattern",

      description:
        "IGNOU follows a structured evaluation model combining continuous assessment, term-end examinations and project work.",

      paragraphs: [
        "Continuous Assessment (30%): Students complete quizzes, assignments, case studies and subjective assessments which contribute 30% towards the final grade.",

        "Term-End Examination (70%): Conducted twice every year in June and December. Students can choose subjects as per their academic cycle and appear through Computer Based Tests at designated centres.",

        "Project Evaluation: Students complete a major project under faculty guidance and must secure the required passing grade for successful programme completion.",

        "Flexible Examination Options: Students may plan their examination attempts according to the available TEE cycles and programme regulations.",
      ],
    },
    career: {
      description:
        "IGNOU's Online MBA prepares learners for leadership and managerial roles across industries through industry-oriented curriculum, placement assistance, internships and regular recruitment drives. Graduates gain practical business knowledge and are equipped to build successful careers in both private organizations and government sectors.",

      averagePackage: "₹3–8 LPA",

      salaryHike: "30%",

      industries: [
        "Banking",
        "Finance",
        "Information Technology",
        "Manufacturing",
        "Healthcare",
        "Consulting",
        "E-commerce",
        "FMCG",
      ],

      jobs: [
        {
          title: "Marketing Executive",
          salary: "₹3–6 LPA",
        },
        {
          title: "Sales Executive",
          salary: "₹2–5 LPA",
        },
        {
          title: "Talent Acquisition Specialist",
          salary: "₹3–5 LPA",
        },
        {
          title: "Business Development Executive",
          salary: "₹3–7 LPA",
        },
        {
          title: "E-commerce Operations Executive",
          salary: "₹3–8 LPA",
        },
        {
          title: "Finance Executive",
          salary: "₹3–9 LPA",
        },
        {
          title: "Accounts Executive",
          salary: "₹3–8 LPA",
        },
        {
          title: "Banking Operations Executive",
          salary: "₹2–7 LPA",
        },
      ],
    },
    faculty: [
      {
        id: 1,
        name: "Prof. Kaustuva Barik",
        designation: "Professor",
        image: "/faculty/kaustuva-barik.jpg",
      },
      {
        id: 2,
        name: "Dr. Mitoo Das",
        designation: "Associate Professor",
        image: "/faculty/mitoo-das.jpg",
      },
      {
        id: 3,
        name: "Dr. Sudhansh Sharma",
        designation: "Associate Professor",
        image: "/faculty/sudhansh-sharma.jpg",
      },
      {
        id: 4,
        name: "Dr. Shweta Tripathi",
        designation: "Assistant Professor",
        image: "/faculty/shweta-tripathi.jpg",
      },
      {
        id: 5,
        name: "Dr. Vibhuti Gaur",
        designation: "Associate Professor",
        image: "/faculty/vibhuti-gaur.jpg",
      },
      {
        id: 6,
        name: "Dr. Reeta Devi",
        designation: "Professor",
        image: "/faculty/reeta-devi.jpg",
      },
      {
        id: 7,
        name: "Prof. Anurag Saxena",
        designation: "Professor",
        image: "/faculty/anurag-saxena.jpg",
      },
      {
        id: 8,
        name: "Dr. N. Ramya",
        designation: "Associate Professor",
        image: "/faculty/n-ramya.jpg",
      },
      {
        id: 9,
        name: "Prof. N.A. Farooquee",
        designation: "Professor",
        image: "/faculty/na-farooquee.jpg",
      },
      {
        id: 10,
        name: "Prof. Rakhi Sharma",
        designation: "Professor",
        image: "/faculty/rakhi-sharma.jpg",
      },
    ],
        reviews: {
      averageRating: 4.2,

      totalReviews: 245,

      breakdown: [
        { stars: 5, percentage: 72 },
        { stars: 4, percentage: 18 },
        { stars: 3, percentage: 7 },
        { stars: 2, percentage: 2 },
        { stars: 1, percentage: 1 },
      ],

      reviews: [
        {
          id: 1,
          name: "Prajakata Singh",
          rating: 4,
          date: "March 2025",
          review:
            "I really like the self-paced learning for the IGNOU MBA. It gives me the flexibility to study while working full-time.",
        },

        {
          id: 2,
          name: "Sanaya",
          rating: 3,
          date: "February 2025",
          review:
            "Initially I was unsure about the recognition of the programme, but after speaking with alumni I felt confident enrolling.",
        },

        {
          id: 3,
          name: "Amit Kumar",
          rating: 5,
          date: "January 2025",
          review:
            "Affordable fees, quality study material and flexibility make this one of the best options for working professionals.",
        },
      ],
    },
  }
};

export function getCourse(slug: string): Course {
  return COURSE_DATA[slug];
}