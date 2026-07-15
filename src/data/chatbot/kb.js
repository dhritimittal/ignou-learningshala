/**
 * Chatbot Knowledge Base
 * Sourced from: data/home/faqs.js, programmes.js, timeline.js,
 *               services.js, stats.js, data/course/mock.ts
 *
 * Each entry: { keywords: string[], answer: string, chips?: string[] }
 * The matcher scores hits on lowercase input vs lowercase keywords.
 */

// ─── General / About IGNOU ────────────────────────────────────────────────────

export const BOT_KB = [

  // ── About & Recognition ──────────────────────────────────────────────────
  {
    keywords: ["government", "govt", "official", "central", "ministry", "moe", "chancellor"],
    answer:
      "Yes! IGNOU (Indira Gandhi National Open University) is a **central government university** established by an Act of Parliament. It is backed by the Ministry of Education, India, and the President of India acts as its Chancellor.",
    chips: ["Is the degree valid?", "Why choose IGNOU?", "Admission process"],
  },
  {
    keywords: ["valid", "recognised", "recognized", "government job", "competitive exam", "ugc", "deb", "naac", "nirf", "aicte", "approval", "accredited"],
    answer:
      "Absolutely. IGNOU degrees are **recognised by UGC-DEB** and are valid for:\n• Government jobs & competitive exams (UPSC, SSC, etc.)\n• Higher education (PhD, MBA, etc.)\n• Private sector employment\n\nIGNOU also holds **NAAC A++** accreditation — the highest grade.",
    chips: ["Programmes & fees", "MBA details", "Talk to a counsellor"],
  },
  {
    keywords: ["why ignou", "why choose", "benefits", "advantage", "best", "recommend"],
    answer:
      "Here's why **38 lakh+ students** choose IGNOU:\n\n• **Affordable fees** — among the lowest for UGC-recognised degrees\n• **Flexible schedule** — study at your own pace\n• **Nationwide support** — 67 regional centres across India\n• **Global reach** — programmes available in 25+ countries\n• **NAAC A++** — highest university accreditation\n• **Placement cell** — career drives & guidance",
    chips: ["Programmes & fees", "Admission process", "Talk to a counsellor"],
  },

  // ── Stats ────────────────────────────────────────────────────────────────
  {
    keywords: ["students", "enrolled", "how many", "size", "largest", "38 lakh", "lakh"],
    answer:
      "IGNOU is one of the **world's largest universities** with:\n• **38 Lakh+** students enrolled\n• **20+** programmes on offer\n• **21** Schools of Studies\n• **67** Regional Centres\n• Presence in **25+ countries**",
    chips: ["Programmes & fees", "Regional centres", "Talk to a counsellor"],
  },
  {
    keywords: ["regional centre", "study centre", "location", "city", "state", "nearest"],
    answer:
      "IGNOU has **67 Regional Centres** and thousands of Learner Support Centres (LSCs) across India. You can study from anywhere — IGNOU's distance/online model doesn't require you to be physically present.\n\nYou can also **change your study centre** after admission if needed.",
    chips: ["Admission process", "Can I study from anywhere?", "Talk to a counsellor"],
  },

  // ── Programmes ───────────────────────────────────────────────────────────
  {
    keywords: ["programmes", "courses", "list", "what can i study", "available", "offer"],
    answer:
      "LearningShala offers guidance for all IGNOU programmes. Here's a quick overview:\n\n**Online Programmes**\n• MBA (2 Yrs • ₹14,000/sem)\n• MCA (2 Yrs • ₹12,700/sem)\n• M.Com (2 Yrs • ₹18,000 total)\n• MA (2 Yrs • ₹6,000 total)\n• BBA (3 Yrs • ₹39,000 total)\n• BCA (3 Yrs • ₹6,000/sem)\n• B.Com (3 Yrs • ₹4,000/sem)\n• BA (3 Yrs • ₹6,000/sem)\n\n**Distance Programmes**\n• MBA, MCA, M.Com, MA, M.Sc, MSW (PG)\n• BBA, BCA, B.Com, BA, B.Sc, BSW (UG)\n• Diploma & Certificate programmes\n\nWhich programme are you interested in?",
    chips: ["MBA details", "MCA details", "BBA details", "Talk to a counsellor"],
  },

  // ── MBA ──────────────────────────────────────────────────────────────────
  {
    keywords: ["mba", "master of business", "management", "business administration"],
    answer:
      "**Online MBA — IGNOU**\n\n• Duration: 2 Years\n• Fee: ₹14,000/semester (Online) | ₹16,000/sem (Distance)\n• Mode: Online / Distance\n• Specialisations: Finance, HR, Marketing, Operations (4 available for Online)\n• Highlights: Live + Recorded classes, Placement assistance, EMI available, Industry projects\n• Approvals: UGC-DEB, AICTE, NAAC A++, NIRF\n\nWant personalised guidance on which MBA specialisation suits you?",
    chips: ["MBA eligibility", "MBA admission", "Talk to a counsellor"],
  },
  {
    keywords: ["mba eligibility", "mba qualification", "mba requirement", "mba who can apply"],
    answer:
      "For IGNOU MBA, you typically need:\n• A **Bachelor's degree** in any discipline from a recognised university\n• Minimum **50% marks** (45% for reserved categories in some cases)\n\nOur counsellors can verify your specific eligibility before you apply.",
    chips: ["MBA fees", "MBA admission", "Talk to a counsellor"],
  },

  // ── MCA ──────────────────────────────────────────────────────────────────
  {
    keywords: ["mca", "master of computer", "computer application", "computer science pg"],
    answer:
      "**Online MCA — IGNOU**\n\n• Duration: 2 Years\n• Fee: ₹12,700/semester (Online) | ₹13,000/sem (Distance)\n• Mode: Online / Distance\n• Highlights: Coding labs, project-based learning, placement drives\n• Approvals: UGC-DEB, NAAC A++\n\nThe MCA is ideal for BCA/B.Sc (IT/CS) graduates looking to enter the tech industry.",
    chips: ["MCA eligibility", "MCA admission", "Talk to a counsellor"],
  },

  // ── BCA / BBA / BA / B.Com / B.Sc ────────────────────────────────────────
  {
    keywords: ["bca", "bachelor of computer application", "ug computer"],
    answer:
      "**Online BCA — IGNOU**\n\n• Duration: 3 Years\n• Fee: ₹6,000/semester\n• Mode: Online / Distance\n• Eligibility: 10+2 pass in any stream\n\nBCA is one of the most popular UG programmes at IGNOU for students interested in software, web development, and IT.",
    chips: ["BCA eligibility", "Admission process", "Talk to a counsellor"],
  },
  {
    keywords: ["bba", "bachelor of business administration", "ug management", "ug business"],
    answer:
      "**Online BBA — IGNOU**\n\n• Duration: 3 Years\n• Fee: ₹39,000 total (Online) | ₹30,900 total (Distance)\n• Mode: Online / Distance\n• Eligibility: 10+2 pass in any stream\n\nBBA is perfect for students wanting a management foundation before pursuing an MBA.",
    chips: ["BBA to MBA", "Admission process", "Talk to a counsellor"],
  },
  {
    keywords: ["ba", "bachelor of arts", "arts programme", "ug arts"],
    answer:
      "**Online BA — IGNOU**\n\n• Duration: 3 Years\n• Fee: ₹6,000/semester (Online) | ₹15,900 total (Distance)\n• Mode: Online / Distance\n• Specialisations: 3 available for Online MA\n• Eligibility: 10+2 pass",
    chips: ["BA eligibility", "Admission process", "Talk to a counsellor"],
  },
  {
    keywords: ["bcom", "b.com", "bachelor of commerce", "commerce ug", "commerce degree"],
    answer:
      "**Online B.Com — IGNOU**\n\n• Duration: 3 Years\n• Fee: ₹4,000/semester (Online) | ₹14,400 total (Distance)\n• Mode: Online / Distance\n• Eligibility: 10+2 pass in any stream\n\nB.Com from IGNOU is one of the most affordable commerce degrees in India.",
    chips: ["B.Com to M.Com", "Admission process", "Talk to a counsellor"],
  },
  {
    keywords: ["mcom", "m.com", "master of commerce", "commerce pg"],
    answer:
      "**Online M.Com — IGNOU**\n\n• Duration: 2 Years\n• Fee: ₹18,000 total (Online) | ₹9,300/sem (Distance)\n• Mode: Online / Distance\n• Eligibility: B.Com or equivalent",
    chips: ["M.Com eligibility", "Admission process", "Talk to a counsellor"],
  },
  {
    keywords: ["ma", "master of arts", "arts pg", "pg arts"],
    answer:
      "**Online MA — IGNOU**\n\n• Duration: 2 Years\n• Fee: ₹6,000 total (Online) | ₹15,000 total (Distance)\n• Specialisations: 3 available for Online MA, 2 for Distance MA\n• Eligibility: Any Bachelor's degree",
    chips: ["MA specialisations", "Admission process", "Talk to a counsellor"],
  },
  {
    keywords: ["diploma", "certificate", "short course", "pgd", "pg diploma"],
    answer:
      "IGNOU offers several short-term options:\n\n• **Online Diploma** — 1 Year | ₹3,000 total\n• **Online PG Diploma** — 1–3 Years | ₹2,400/semester\n• **Online Certificate** — 6 Months | ₹1,200 total\n\nThese are great for upskilling without committing to a full degree.",
    chips: ["Certificate eligibility", "Admission process", "Talk to a counsellor"],
  },

  // ── Fees ─────────────────────────────────────────────────────────────────
  {
    keywords: ["fee", "fees", "cost", "price", "how much", "afford", "expensive", "cheap", "emi", "instalment", "installment"],
    answer:
      "IGNOU offers **some of the most affordable university fees in India**:\n\n• Certificate: ₹1,200 total\n• Diploma: ₹3,000 total\n• BA/MA: ₹6,000 total\n• B.Com: ₹4,000/semester\n• BCA: ₹6,000/semester\n• MBA (Online): ₹14,000/semester\n\n**EMI options are available** for most programmes. Scholarships and fee concessions also apply for eligible categories.\n\nWant me to find the exact fee for a specific programme?",
    chips: ["MBA fees", "BCA fees", "EMI details", "Talk to a counsellor"],
  },
  {
    keywords: ["scholarship", "concession", "waiver", "sc", "st", "obc", "pwd", "reserved"],
    answer:
      "IGNOU offers **fee concessions and scholarships** for:\n• SC / ST students\n• Persons with Disabilities (PwD)\n• Below Poverty Line (BPL) category\n• State and central government scholarship schemes\n\nOur counsellors can help you identify and apply for the right scholarship.",
    chips: ["Talk to a counsellor", "Admission process"],
  },

  // ── Admission ────────────────────────────────────────────────────────────
  {
    keywords: ["admission", "apply", "apply now", "how to apply", "process", "steps", "procedure", "register", "registration"],
    answer:
      "Here's the **7-step admission process** with LearningShala:\n\n1. **Free counselling** — we map your goals to the right programme\n2. **Programme shortlisting & eligibility check** — we verify your marksheets\n3. **Document preparation checklist** — we guide every file format\n4. **Register on IGNOU Samarth portal** — official application\n5. **Fee payment guidance & EMI setup**\n6. **Upload documents & submit**\n7. **Confirmation & onboarding support**\n\nWant to start? Our counsellors are free!",
    chips: ["Start counselling", "Documents needed", "Samarth portal", "Talk to a counsellor"],
  },
  {
    keywords: ["document", "documents", "papers", "marksheet", "aadhar", "photo", "signature", "upload"],
    answer:
      "Typical documents required for IGNOU admission:\n\n• 10th marksheet & certificate\n• 12th marksheet & certificate\n• Graduation marksheet (for PG programmes)\n• Aadhaar card\n• Passport-size photograph\n• Signature scan\n• Category certificate (if applicable)\n\nWe send you a **precise checklist with exact file sizes and formats** so your application is never rejected.",
    chips: ["Admission process", "Samarth portal", "Talk to a counsellor"],
  },
  {
    keywords: ["samarth", "portal", "online portal", "student portal", "login", "account"],
    answer:
      "**Samarth** is IGNOU's official student portal. You use it to:\n• Fill & submit your admission form\n• Upload documents\n• Pay fees\n• Access study materials & assignments\n• Track your admission status\n\nYou'll need an **Aadhaar-linked mobile number** to register. We stay on call while you fill the form — so you never get stuck.",
    chips: ["Admission process", "eGyankosh", "Talk to a counsellor"],
  },
  {
    keywords: ["cycle", "january", "july", "session", "when", "deadline", "last date", "schedule"],
    answer:
      "IGNOU runs **two admission cycles per year**:\n\n• **January cycle** — applications open around Nov/Dec\n• **July cycle** — applications open around May/June\n\nExact dates vary. Our counsellors track live deadlines and will notify you before they close.",
    chips: ["Admission process", "Talk to a counsellor"],
  },

  // ── Exams & Passing ──────────────────────────────────────────────────────
  {
    keywords: ["exam", "examination", "term end", "tee", "passing", "pass", "marks", "minimum", "40"],
    answer:
      "IGNOU conducts **Term-End Examinations (TEE) twice a year** — generally in **June** and **December**.\n\n• Minimum passing mark: **40%** in TEE\n• Some programmes may have additional internal assessment requirements\n• Assignments are also part of your final score",
    chips: ["Admission process", "Maximum duration", "Talk to a counsellor"],
  },
  {
    keywords: ["duration", "maximum", "time", "years", "complete", "finish", "how long"],
    answer:
      "The time limits to complete IGNOU programmes:\n\n• **UG programmes (BA, B.Com, BCA, BBA…)** — max **6 years**\n• **PG programmes (MBA, MCA, MA…)** — max **4 years**\n• **Diploma / Certificate** — as per programme-specific rules\n\nYou can study at your own pace within these limits.",
    chips: ["Programmes & fees", "Admission process", "Talk to a counsellor"],
  },
  {
    keywords: ["change", "centre", "transfer", "move", "shift"],
    answer:
      "Yes! IGNOU allows you to **change your study centre** after admission. This is subject to university guidelines and applicable procedures. Our team can guide you through the process.",
    chips: ["Admission process", "Talk to a counsellor"],
  },

  // ── Placement & Career ───────────────────────────────────────────────────
  {
    keywords: ["placement", "job", "career", "campus placement", "company", "hire", "employment", "recruit"],
    answer:
      "IGNOU has a **Campus Placement Cell** that:\n• Conducts periodic placement drives\n• Organises career fairs and mock interviews\n• Provides job-readiness workshops\n• Supports eligible students across programmes\n\nProgrammes like MBA, MCA, and BCA have the most active placement support.",
    chips: ["MBA details", "MCA details", "Talk to a counsellor"],
  },
  {
    keywords: ["skill", "upskill", "personality", "employability", "mooc", "workshop", "soft skill"],
    answer:
      "IGNOU supports **holistic development**:\n\n⚡ **Skill Upgradation** — Industry-aligned curriculum\n🌐 **Personality Enhancement** — Communication & leadership skills\n💼 **Job Readiness** — Placement drives via Samarth portal\n♾️ **Lifelong Learning** — 340+ MOOC courses available\n🚀 **Employability** — Internships, training & soft-skills workshops",
    chips: ["Placement support", "Programmes & fees", "Talk to a counsellor"],
  },

  // ── Services / Resources ─────────────────────────────────────────────────
  {
    keywords: ["egyankosh", "ebook", "video lecture", "question paper", "digital", "repository", "material", "study material"],
    answer:
      "**eGyankosh** is India's national digital repository maintained by IGNOU. You get free access to:\n• e-Books & study materials\n• Video lectures\n• Past question papers\n\nAccess it at egyankosh.ac.in once you're enrolled.",
    chips: ["Samarth portal", "Gyan Darshan", "Talk to a counsellor"],
  },
  {
    keywords: ["gyan darshan", "dth", "tv", "broadcast", "channel", "television"],
    answer:
      "**Gyan Darshan** is IGNOU's dedicated **DTH educational channel** broadcasting curriculum content across India. It's a free supplement to your online/distance learning.",
    chips: ["eGyankosh", "Gyan Vani", "Talk to a counsellor"],
  },
  {
    keywords: ["gyan vani", "radio", "fm", "audio", "broadcast"],
    answer:
      "**Gyan Vani** is an **educational FM radio network** that streams lectures and study programmes. It covers multiple states and is a great supplement for distance learners.",
    chips: ["eGyankosh", "Gyan Darshan", "Talk to a counsellor"],
  },
  {
    keywords: ["library", "ignou library", "opac", "journal", "thesis", "research", "academic resource"],
    answer:
      "The **IGNOU Digital Library** gives you access to:\n• OPAC (Online catalogue)\n• E-journals and academic papers\n• Theses and dissertations\n• Academic databases\n\nAvailable to all enrolled students.",
    chips: ["eGyankosh", "Samarth portal", "Talk to a counsellor"],
  },
  {
    keywords: ["anywhere", "remote", "distance", "online", "flexible", "work", "working professional", "part time"],
    answer:
      "Absolutely! That's IGNOU's biggest strength. With **distance and online programmes** you can:\n• Study from anywhere in India (or abroad)\n• Access content anytime via eGyankosh & Samarth\n• Attend support sessions at your nearest Learner Support Centre\n• Continue working while studying\n\n38 lakh+ students do exactly this!",
    chips: ["Programmes & fees", "Admission process", "Talk to a counsellor"],
  },

  // ── LearningShala specific ───────────────────────────────────────────────
  {
    keywords: ["learningshala", "learning shala", "you", "who are you", "this website", "this platform", "your service"],
    answer:
      "**LearningShala** is your trusted IGNOU admission partner. We help you:\n• Choose the right programme for your goals\n• Verify eligibility before you apply\n• Prepare all documents correctly\n• Navigate the Samarth portal step by step\n• Avoid costly mistakes (wrong programme, wrong specialisation, rejected documents)\n\nOur counselling is **completely free!**",
    chips: ["Admission process", "Talk to a counsellor", "Programmes & fees"],
  },
  {
    keywords: ["free", "no cost", "charge", "paid", "how much do you charge", "counselling cost"],
    answer:
      "LearningShala's counselling is **100% free**. We don't charge students anything for:\n• Programme guidance\n• Eligibility checks\n• Document checklists\n• Admission support\n\nWe're here to make IGNOU admission simple and stress-free for you.",
    chips: ["Talk to a counsellor", "Admission process"],
  },

  // ── Fallback (must be last) ───────────────────────────────────────────────
  {
    keywords: ["__fallback__"],
    answer:
      "I'm not sure about that one! 🤔 But our expert counsellors know everything about IGNOU programmes and admissions. Would you like to connect with one?",
    chips: ["Talk to a counsellor", "Programmes & fees", "FAQs"],
  },
];

/**
 * Score a user message against a KB entry.
 * Returns a number ≥ 0. Higher = better match.
 */
export function scoreEntry(entry, input) {
  const lower = input.toLowerCase();
  return entry.keywords.reduce((score, kw) => {
    if (lower.includes(kw.toLowerCase())) return score + kw.length; // longer kw = more specific
    return score;
  }, 0);
}

/**
 * Find the best matching KB entry for a user input string.
 * Falls back to the last entry (fallback) if no hits.
 */
export function getBotReply(input) {
  if (!input.trim()) return BOT_KB[BOT_KB.length - 1];

  let best = null;
  let bestScore = 0;

  for (const entry of BOT_KB) {
    if (entry.keywords[0] === "__fallback__") continue;
    const s = scoreEntry(entry, input);
    if (s > bestScore) {
      bestScore = s;
      best = entry;
    }
  }

  return best ?? BOT_KB[BOT_KB.length - 1];
}
