/**
 * Chatbot Knowledge Base — LearningShala × IGNOU
 *
 * Built from: faqs.js · programmes.js · timeline.js · services.js
 *             stats.js · course/mock.ts (all three programmes)
 *
 * Each entry:
 *   keywords  — lowercase strings scored against user input
 *   answer    — markdown-bold supported string shown in chat
 *   chips     — optional quick-reply follow-ups
 */

// ─── COUNSELLOR INTENT KEYWORDS ───────────────────────────────────────────────
// These are checked FIRST in ChatBot.jsx — they bypass the KB and open the
// wizard directly instead of showing a reply.
export const COUNSELLOR_KEYWORDS = [
  "talk to a counsellor",
  "talk to counsellor",
  "counsellor",
  "counselor",
  "start counselling",
  "start counseling",
  "free counselling",
  "free counseling",
  "speak to someone",
  "speak to an expert",
  "connect me",
  "human help",
  "human agent",
  "real person",
  "get help",
  "book a call",
  "book call",
  "call me",
  "contact",
  "reach out",
  "whatsapp",
];

// ─── KNOWLEDGE BASE ───────────────────────────────────────────────────────────

export const BOT_KB = [

  // ════════════════════════════════════════════════════════════════════════════
  // ABOUT IGNOU & LEARNINGSHALA
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["what is ignou", "about ignou", "ignou university", "full form", "indira gandhi"],
    answer:
      "**IGNOU** stands for **Indira Gandhi National Open University** — a central government university established in 1985 by an Act of Parliament.\n\n• It is the **world's largest open university** with 38 lakh+ active students\n• Backed by the **Ministry of Education, India**\n• The **President of India** acts as its Chancellor\n• Operates across **25+ countries** with 67 regional centres in India\n• Holds **NAAC A++** accreditation — the highest grade possible",
    chips: ["Is the degree valid?", "Why choose IGNOU?", "Programmes & Fees"],
  },
  {
    keywords: ["government", "govt", "official", "central", "ministry", "moe", "chancellor", "is ignou government"],
    answer:
      "Yes — IGNOU is a **central government university** established by the IGNOU Act, 1985. It is:\n\n• Funded and regulated by the **Ministry of Education**\n• Recognised by **UGC, DEC, and DEB**\n• Valid for government jobs, civil services, higher education, and private sector employment\n• Degrees carry **exactly the same weight** as any regular university degree",
    chips: ["Is the degree valid for govt jobs?", "Programmes & Fees", "Talk to a Counsellor"],
  },
  {
    keywords: ["valid", "recognised", "recognized", "government job", "competitive exam", "ugc", "deb", "naac", "nirf", "aicte", "approval", "accredited", "is degree valid", "degree accepted"],
    answer:
      "**Yes — IGNOU degrees are fully valid and widely recognised.**\n\n✅ **Government jobs** — valid for all central & state govt positions\n✅ **Competitive exams** — UPSC, SSC, Railways, Banking, etc.\n✅ **Higher education** — PhD, M.Phil, MBA, and other PG admissions\n✅ **Private sector** — accepted by employers across industries\n✅ **International** — WES recognised, valid in 25+ countries\n\nAccreditations: **UGC-DEB • NAAC A++ • AICTE • NIRF Rank 1 (Open Universities)**\n\nThe degree certificate **does not mention 'distance' or 'online'** — it is identical to an on-campus IGNOU degree.",
    chips: ["Programmes & Fees", "MBA details", "Talk to a Counsellor"],
  },
  {
    keywords: ["why ignou", "why choose", "benefits", "advantage", "best", "recommend", "should i join"],
    answer:
      "Here's why **38 lakh+ students** choose IGNOU:\n\n🎓 **World-class recognition** — NAAC A++, UGC-DEB, WES approved\n💰 **Lowest fees** — ₹1,200 to ₹56,000 total for a full degree\n📅 **Complete flexibility** — no daily attendance, self-paced study\n🌍 **Study from anywhere** — India or abroad, 25+ countries\n🏛️ **67 Regional Centres** — support network across India\n💼 **Placement cell** — career drives, internships, and guidance\n📚 **Digital resources** — eGyankosh, SWAYAM, live + recorded classes\n⚡ **2 admission cycles/year** — January and July sessions",
    chips: ["Programmes & Fees", "Admission Process", "Talk to a Counsellor"],
  },
  {
    keywords: ["learningshala", "learning shala", "who are you", "this website", "this platform", "your service", "ls", "about you"],
    answer:
      "**LearningShala** is your dedicated IGNOU admission partner. We guide you through every step so you never get confused by the complex IGNOU process.\n\nWhat we do — **completely free**:\n\n📌 Match your goals to the right programme & specialisation\n📌 Verify your eligibility before you apply\n📌 Prepare an exact document checklist (right file sizes, formats)\n📌 Stay with you on call during Samarth portal registration\n📌 Set fee payment reminders and guide EMI setup\n📌 Support you through your entire IGNOU journey — not just admission\n\n💡 Most students who apply directly pick the **wrong specialisation**. We prevent that.",
    chips: ["Admission Process", "Talk to a Counsellor", "Programmes & Fees"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PROGRAMMES OVERVIEW
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["programmes", "courses", "list", "what can i study", "available", "offer", "all programmes", "show programmes"],
    answer:
      "LearningShala guides for all major IGNOU programmes:\n\n**🖥️ Online Programmes**\n• MBA — 2 Yrs • ₹14,000/sem\n• MCA — 2 Yrs • ₹12,700/sem\n• M.Com — 2 Yrs • ₹18,000 total\n• MA — 2 Yrs • ₹6,000 total\n• BBA — 3 Yrs • ₹39,000 total\n• BCA — 3 Yrs • ₹6,000/sem\n• B.Com — 3 Yrs • ₹4,000/sem\n• BA — 3 Yrs • ₹6,000/sem\n\n**📚 Distance Programmes**\n• MBA, MCA, M.Com, MA, M.Sc, MSW (PG)\n• BBA, BCA, B.Com, BA, B.Sc, BSW (UG)\n\n**📜 Short Programmes**\n• PG Diploma — 1–3 Yrs • ₹2,400/sem\n• Diploma — 1 Yr • ₹3,000 total\n• Certificate — 6 Months • ₹1,200 total\n\nWhich level are you looking for?",
    chips: ["MBA details", "MCA details", "BCA details", "BBA details", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // MBA — IN DEPTH
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["mba", "master of business", "management programme", "business administration", "mbaol", "online mba", "distance mba"],
    answer:
      "**IGNOU MBA — Full Overview**\n\n📋 **Programme:** Master of Business Administration (MBAOL / MBA)\n⏱️ **Duration:** 2 Years (4 semesters of 6 months each)\n💰 **Fee:** ₹14,000/sem (Online) | ₹16,000/sem (Distance)\n🎓 **Eligibility:** Bachelor's degree with min. 50% marks\n🏛️ **Approvals:** UGC-DEB • AICTE • NAAC A++ • NIRF #1 (Open Universities) • WES\n\n**Semester Breakdown:**\nSem 1: Management Functions, HRM, Business Environment, Accounting, Marketing\nSem 2: Quantitative Analysis, Business Communication, IT for Managers, Economics, Strategy\nSem 3: Financial Management, Operations, Research Methodology, International Business + Elective\nSem 4: Entrepreneurship + 2 Electives + Project Work\n\n**Specialisations (Online):** Marketing • Finance • Human Resource • Operations • Analytics • Healthcare • Supply Chain • Project Management\n\n**Career Outcomes:** ₹3–8 LPA starting | 30% salary hike avg. | Industries: Banking, IT, FMCG, Consulting, E-commerce",
    chips: ["MBA specialisations", "MBA eligibility", "MBA exam pattern", "Talk to a Counsellor"],
  },
  {
    keywords: ["mba specialisation", "mba specialization", "mba stream", "mba branch", "mba finance", "mba marketing", "mba hr", "mba operations", "mba analytics", "mba healthcare", "mba supply chain", "mba project management"],
    answer:
      "**IGNOU MBA offers 8 Specialisations:**\n\n1. **Marketing** — Branding, Digital Marketing, Consumer Behaviour | ₹8–18 LPA\n2. **Finance** — Corporate Finance, Investment Analysis, Banking | ₹9–20 LPA\n3. **Human Resource** — People Management, L&D, HRBP | ₹7–15 LPA\n4. **Operations** — Process Optimisation, Logistics, Strategy | ₹8–18 LPA\n5. **Analytics** — Data-driven Business Decisions, BI | ₹10–22 LPA\n6. **Healthcare Management** — Hospital Admin, Healthcare Consulting | ₹7–16 LPA\n7. **Supply Chain** — Procurement, Warehousing, Global Logistics | ₹8–18 LPA\n8. **Project Management** — PMO, Program Delivery, Complex Projects | ₹9–22 LPA\n\nNot sure which one fits your goals? Our counsellors will help you decide.",
    chips: ["MBA eligibility", "MBA fees", "Talk to a Counsellor"],
  },
  {
    keywords: ["mba eligibility", "mba qualification", "mba requirement", "mba who can apply", "mba criteria", "mba 50%", "mba graduate"],
    answer:
      "**IGNOU MBA Eligibility:**\n\n✅ A **Bachelor's degree** in any discipline from a recognised university\n✅ Minimum **50% marks** in graduation (45% for SC/ST/PwD categories)\n✅ **No entrance exam** — direct admission available\n✅ Working professionals especially encouraged — no attendance required\n\n⚠️ No minimum age requirement. Students who graduated years ago also qualify.\n\nNot sure if your degree counts? Share your background with our counsellor and we'll confirm instantly.",
    chips: ["MBA fees", "MBA admission", "Talk to a Counsellor"],
  },
  {
    keywords: ["mba exam pattern", "mca exam pattern", "exam pattern", "mba examination", "mba assessment", "mba assignment", "mba pass marks", "mba grading", "mba tee"],
    answer:
      "**IGNOU MBA Examination Pattern:**\n\n📝 **Continuous Assessment (30%):**\n• Quizzes, assignments, case studies, subjective assessments\n• Submitted each semester through the Samarth portal\n\n📖 **Term-End Examination (70%):**\n• Conducted twice a year — **June** and **December**\n• Computer-Based Tests (CBT) at designated centres\n• Students choose exam slots as per their academic cycle\n\n🗂️ **Project Work (Sem 4):**\n• Major project under faculty guidance\n• Must secure required passing grade\n\n✅ **Minimum to pass:** 40% in TEE + overall passing criteria\n\n📌 Flexible exam options — you can defer attempts to the next cycle if needed.",
    chips: ["MBA specialisations", "MBA careers", "Talk to a Counsellor"],
  },
  {
    keywords: ["mba career", "mba jobs", "mba salary", "mba placement", "mba after", "mba scope"],
    answer:
      "**Career Scope After IGNOU MBA:**\n\n💼 **Starting Package:** ₹3–8 LPA\n📈 **Salary Hike:** ~30% average post-MBA\n\n**Top Job Roles:**\n• Marketing Executive — ₹3–6 LPA\n• Finance Executive — ₹3–9 LPA\n• Business Development Executive — ₹3–7 LPA\n• Talent Acquisition Specialist — ₹3–5 LPA\n• E-commerce Operations Executive — ₹3–8 LPA\n• Banking Operations Executive — ₹2–7 LPA\n\n**Industries Hiring:** Banking • IT • FMCG • Consulting • E-commerce • Healthcare • Manufacturing\n\n🏛️ IGNOU's **Campus Placement Cell** conducts regular placement drives and career guidance sessions.",
    chips: ["MBA specialisations", "MBA fees", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // MCA — IN DEPTH
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["mca", "master of computer", "computer application", "computer science pg", "mcaol", "online mca", "distance mca"],
    answer:
      "**IGNOU MCA — Full Overview**\n\n📋 **Programme:** Master of Computer Applications (MCAOL / MCA)\n⏱️ **Duration:** 2 Years (4 semesters)\n💰 **Fee:** ₹12,700/sem (Online) | ₹13,000/sem (Distance)\n🎓 **Eligibility:** BCA / B.Sc (IT/CS/Maths) or equivalent\n🏛️ **Approvals:** UGC-DEB • NAAC A++ • AICTE\n\n**What you'll learn:**\n• Programming (Python, Java, C++)\n• Data Structures & Algorithms\n• Database Management Systems\n• Software Engineering & Project Management\n• Cloud Computing & Networking\n• Artificial Intelligence & Machine Learning\n\n**Career Outcomes:**\n• Software Developer — ₹4–10 LPA\n• Data Analyst — ₹5–12 LPA\n• System Analyst — ₹5–11 LPA\n• IT Project Manager — ₹8–18 LPA",
    chips: ["MCA eligibility", "MCA exam pattern", "MCA careers", "Talk to a Counsellor"],
  },
  {
    keywords: ["mca eligibility", "mca qualification", "mca criteria", "mca who can apply", "mca bca", "mca bsc"],
    answer:
      "**IGNOU MCA Eligibility:**\n\n✅ **BCA** or **B.Sc (IT / Computer Science / Mathematics)** or equivalent UG degree\n✅ Minimum **50% marks** in graduation (45% for SC/ST/PwD)\n✅ **Mathematics** as a subject at 10+2 or graduation level is preferred\n✅ No entrance exam — direct admission\n\n⚠️ Students with other UG backgrounds (BA, B.Com) may be eligible with bridge courses — our counsellors can check your specific case.",
    chips: ["MCA fees", "MCA admission", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // BCA — IN DEPTH
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["bca", "bachelor of computer application", "ug computer", "bcaol", "online bca", "distance bca"],
    answer:
      "**IGNOU BCA — Full Overview**\n\n📋 **Programme:** Bachelor of Computer Applications (BCAOL / BCA)\n⏱️ **Duration:** 3 Years (6 semesters)\n💰 **Fee:** ₹6,000/sem (Online) | ₹8,300/sem (Distance)\n🎓 **Eligibility:** 10+2 pass in any stream\n🏛️ **Approvals:** UGC-DEB • NAAC A++\n\n**What you'll learn:**\n• Web Development (HTML, CSS, JS, PHP)\n• Programming in C, Java, Python\n• Database Management (MySQL, Oracle)\n• Networking & Cybersecurity basics\n• Software Engineering\n• Data Analytics\n\n**After BCA:**\n• MCA (upgrade to PG)\n• Software Developer — ₹3–7 LPA\n• Web Developer — ₹3–6 LPA\n• IT Support — ₹2–5 LPA\n• Data Entry / Analyst roles",
    chips: ["BCA eligibility", "BCA to MCA", "BCA fees", "Talk to a Counsellor"],
  },
  {
    keywords: ["bca eligibility", "bca 12th", "bca criteria", "bca maths", "bca without maths", "bca arts", "bca to mca"],
    answer:
      "**IGNOU BCA Eligibility:**\n\n✅ **10+2 pass** in any stream — Arts, Commerce, or Science\n✅ **No minimum percentage** required in most cases\n✅ **Mathematics NOT mandatory** at 10+2 level for admission (IGNOU includes bridge modules)\n✅ Any board — CBSE, State boards, NIOS, Open School all accepted\n✅ No entrance exam — direct admission\n\n✅ Age: No minimum or maximum age restriction.",
    chips: ["BCA fees", "BCA admission", "BCA to MCA", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // BBA — IN DEPTH
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["bba", "bachelor of business administration", "ug management", "ug business", "bbаol", "online bba", "distance bba"],
    answer:
      "**IGNOU BBA — Full Overview**\n\n📋 **Programme:** Bachelor of Business Administration\n⏱️ **Duration:** 3 Years (6 semesters)\n💰 **Fee:** ₹39,000 total (Online) | ₹30,900 total (Distance)\n🎓 **Eligibility:** 10+2 pass in any stream\n🏛️ **Approvals:** UGC-DEB • NAAC A++\n\n**Core Subjects:**\n• Principles of Management\n• Business Mathematics & Statistics\n• Financial Accounting\n• Marketing Management\n• Human Resource Management\n• Business Law\n• Entrepreneurship Development\n\n**After BBA:**\n• MBA (natural progression)\n• Management Trainee — ₹3–5 LPA\n• Sales / Marketing Executive\n• Business Analyst (entry level)\n• Banking / Insurance roles",
    chips: ["BBA eligibility", "BBA to MBA pathway", "BBA fees", "Talk to a Counsellor"],
  },
  {
    keywords: ["bba to mba", "bba then mba", "bba pathway", "after bba", "bba mba"],
    answer:
      "**BBA → MBA Pathway at IGNOU:**\n\n1. Complete **BBA** (3 years, 10+2 required)\n2. Get your IGNOU Bachelor's degree\n3. Apply for **MBA** — BBA graduates easily meet the 50% eligibility\n4. Total: **5 years** for both degrees\n5. Combined cost: Under ₹1 lakh for both degrees\n\n✅ No gap years needed — you can apply in the very next July or January cycle after BBA completion\n\n💡 Many students do this while working — both BBA and MBA are fully online/distance with no attendance.",
    chips: ["MBA details", "MBA specialisations", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // B.COM / M.COM
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["bcom", "b.com", "bachelor of commerce", "commerce ug", "commerce degree", "online bcom", "distance bcom", "b.com eligibility", "bcom eligibility", "b.com to m.com", "bcom to mcom"],
    answer:
      "**IGNOU B.Com — Full Overview**\n\n📋 **Programme:** Bachelor of Commerce\n⏱️ **Duration:** 3 Years\n💰 **Fee:** ₹4,000/sem (Online) | ₹14,400 total (Distance)\n🎓 **Eligibility:** 10+2 pass in any stream\n🏛️ **Approvals:** UGC-DEB • NAAC A++\n\n**Core Subjects:**\n• Financial Accounting & Cost Accounting\n• Business Law & Company Law\n• Income Tax & GST\n• Economics & Statistics\n• Banking & Financial Services\n• Auditing & Corporate Governance\n\n**After B.Com:**\n• CA / CMA / CS (professional courses)\n• M.Com (higher studies)\n• Bank PO / Clerk examinations\n• Accountant / Finance roles — ₹2–5 LPA\n• Tax Consultant",
    chips: ["B.Com eligibility", "B.Com to M.Com", "B.Com fees", "Talk to a Counsellor"],
  },
  {
    keywords: ["mcom", "m.com", "master of commerce", "commerce pg", "online mcom", "distance mcom", "mcom eligibility", "m.com eligibility"],
    answer:
      "**IGNOU M.Com — Full Overview**\n\n📋 **Programme:** Master of Commerce\n⏱️ **Duration:** 2 Years\n💰 **Fee:** ₹18,000 total (Online) | ₹9,300/sem (Distance)\n🎓 **Eligibility:** B.Com or equivalent with 50% marks\n\n**Core Subjects:**\n• Advanced Financial Accounting\n• Corporate Financial Management\n• International Business Finance\n• Research Methods in Commerce\n• Advanced Cost & Management Accounting\n• Financial Markets & Services\n\n**Career Scope:**\n• CA / CMA support roles\n• Financial Analyst — ₹4–10 LPA\n• Audit Manager\n• University Lecturer (with NET)\n• Banking — Senior Officer roles",
    chips: ["M.Com eligibility", "M.Com vs MBA", "Talk to a Counsellor"],
  },
  {
    keywords: ["mcom vs mba", "m.com or mba", "commerce or management", "which is better commerce management"],
    answer:
      "**M.Com vs MBA — Which should you choose?**\n\n| | **M.Com** | **MBA** |\n|---|---|---|\n| Focus | Deep accounting & finance | Broad management skills |\n| Eligibility | B.Com preferred | Any graduation |\n| Fee | ₹18,000 total | ₹56,000 total |\n| Best for | CA support, academia, finance | Corporate careers, leadership roles |\n| Salary range | ₹4–10 LPA | ₹3–20 LPA |\n\n💡 Choose **M.Com** if you want deep specialisation in finance/accounts or plan to pursue NET/UGC teaching.\nChoose **MBA** if you want a broader career switch or leadership/management roles.",
    chips: ["MBA details", "M.Com details", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // BA / MA
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["ba", "bachelor of arts", "arts programme", "ug arts", "online ba", "distance ba", "ba eligibility", "ba to ma"],
    answer:
      "**IGNOU BA — Full Overview**\n\n📋 **Programme:** Bachelor of Arts\n⏱️ **Duration:** 3 Years\n💰 **Fee:** ₹6,000/sem (Online) | ₹15,900 total (Distance)\n🎓 **Eligibility:** 10+2 pass in any stream\n\n**Available Subjects / Combinations:**\n• History, Political Science, Economics\n• Sociology, Psychology, Hindi / English Literature\n• Public Administration, Philosophy\n\n**After BA:**\n• MA (higher studies)\n• Civil Services (UPSC / State PSC)\n• Bank exams, SSC, Railways\n• Teaching (with B.Ed)\n• Journalism / Media roles",
    chips: ["BA eligibility", "BA to MA", "BA fees", "Talk to a Counsellor"],
  },
  {
    keywords: ["ma", "master of arts", "arts pg", "pg arts", "online ma", "distance ma", "ma specialisation", "ma english", "ma hindi", "ma history", "ma eligibility", "net/jrf", "net jrf", "ma for net/jrf"],
    answer:
      "**IGNOU MA — Full Overview**\n\n📋 **Programme:** Master of Arts\n⏱️ **Duration:** 2 Years\n💰 **Fee:** ₹6,000 total (Online) | ₹15,000 total (Distance)\n🎓 **Eligibility:** Any Bachelor's degree\n\n**Available Specialisations (Online — 3 | Distance — 2):**\n• English Literature\n• Hindi\n• History\n• Political Science\n• Economics\n• Sociology\n• Psychology\n• Philosophy\n\n**After MA:**\n• NET/JRF → University Teaching (₹50,000–₹1.5 L/month)\n• PhD admissions\n• Civil Services — UPSC, State PSC\n• Content Writing, Journalism\n• Social Work / NGO roles",
    chips: ["MA eligibility", "MA for NET/JRF", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // DIPLOMA & CERTIFICATE
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["diploma", "certificate", "short course", "pgd", "pg diploma", "6 months", "1 year", "short term", "certificate eligibility", "diploma fees"],
    answer:
      "**Short-Term IGNOU Programmes:**\n\n📜 **Certificate (6 Months)**\n• Fee: ₹1,200 total\n• Eligibility: 10+2 or as per programme\n• Best for: Quick skill certification\n\n📜 **Diploma (1 Year)**\n• Fee: ₹3,000 total\n• Eligibility: 10+2 or as per programme\n\n📜 **PG Diploma (1–3 Years)**\n• Fee: ₹2,400/semester\n• Eligibility: Graduation\n• Best for: Specialised upskilling without a full PG degree\n\n**Popular options include:**\n• PG Diploma in Business Administration\n• Certificate in Computer Applications\n• Diploma in Nutrition & Health Education\n• PG Diploma in Rural Development\n\n💡 These programmes can often be **stacked towards a full degree** later.",
    chips: ["Certificate eligibility", "Diploma fees", "Admission Process", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // FEES & PAYMENT
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["fee", "fees", "cost", "price", "how much", "afford", "expensive", "cheap", "total fee", "programme fee"],
    answer:
      "**IGNOU Fee Structure — All Programmes:**\n\n| Programme | Mode | Fee |\n|---|---|---|\n| Certificate | Online | ₹1,200 total |\n| Diploma | Online | ₹3,000 total |\n| BA / MA | Online | ₹6,000 total |\n| B.Com | Online | ₹4,000/sem |\n| BCA | Online | ₹6,000/sem |\n| BBA | Online | ₹39,000 total |\n| M.Com | Online | ₹18,000 total |\n| MCA | Online | ₹12,700/sem |\n| MBA | Online | ₹14,000/sem |\n\n✅ **EMI available** for most programmes\n✅ **Scholarships** for SC/ST/PwD/BPL categories\n✅ Exam fees and re-registration charged **separately** as applicable",
    chips: ["EMI options", "Scholarships", "MBA fees", "Talk to a Counsellor"],
  },
  {
    keywords: ["emi", "instalment", "installment", "pay monthly", "monthly payment", "emi available"],
    answer:
      "**EMI Options for IGNOU Fees:**\n\n✅ EMI is available through **major banks and payment gateways** on the IGNOU Samarth portal\n✅ Supported via **credit cards, debit cards** (EMI through your bank's offer)\n✅ Some programmes also allow **semester-wise payment** — so you pay per semester rather than the full amount upfront\n\n💡 For monthly EMI setup and choosing the right payment plan, our counsellors guide you step-by-step. Many students manage ₹1,000–₹3,000/month for even the highest-fee programmes.",
    chips: ["Fee structure", "Scholarships", "Talk to a Counsellor"],
  },
  {
    keywords: ["scholarship", "concession", "waiver", "sc", "st", "obc", "pwd", "reserved", "bpl", "nsp", "national scholarship"],
    answer:
      "**Scholarships & Fee Waivers at IGNOU:**\n\n🎓 **Who qualifies:**\n• SC / ST students — fee concession on many programmes\n• Persons with Disabilities (PwD) — special provisions\n• BPL (Below Poverty Line) families\n• OBC Non-Creamy Layer — some state schemes applicable\n\n📌 **National Scholarship Portal (NSP):**\nIGNOU students can apply for central and state scholarships via scholarships.gov.in\n\n📌 **IGNOU's own provisions:**\n• Some programmes have reduced fees for specific categories\n• Ask our counsellors to check which schemes apply to your category\n\n🔍 We'll identify every scholarship you're eligible for — at no cost.",
    chips: ["Fee structure", "Admission Process", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // ADMISSION PROCESS
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["admission", "apply", "apply now", "how to apply", "process", "steps", "procedure", "register", "registration", "how do i join", "enroll", "enrol"],
    answer:
      "**LearningShala's 7-Step Admission Process:**\n\n**Step 1 — Free Counselling** 🗣️\nWe map your goals, eligibility & budget to the right programme — so you don't waste fees on the wrong choice.\n\n**Step 2 — Eligibility Check** ✅\nWe verify your marksheets against IGNOU's criteria before you apply.\n\n**Step 3 — Document Checklist** 📋\nExact file names, sizes, formats for Aadhaar, marksheets, photo & signature.\n\n**Step 4 — Samarth Portal Registration** 🖥️\nCreate your IGNOU account, link APAAR & ABC ID. We stay on call with you.\n\n**Step 5 — Fee Payment** 💳\nWe explain the exact amount, semester vs. annual structure, and EMI setup.\n\n**Step 6 — Document Upload & Submit** 📤\nWith our checklist done, this takes under 10 minutes. We verify before you submit.\n\n**Step 7 — Confirmation & Onboarding** 🎉\nWe activate your Samarth portal access, explain your study schedule, and help you access eGyankosh.",
    chips: ["Documents needed", "Samarth portal", "Admission cycle dates", "Talk to a Counsellor"],
  },
  {
    keywords: ["document", "documents", "papers", "marksheet", "aadhar", "aadhaar", "photo", "signature", "upload", "what to submit", "required documents"],
    answer:
      "**Documents Required for IGNOU Admission:**\n\n📄 **Mandatory for all:**\n• 10th Marksheet & Certificate\n• 12th Marksheet & Certificate\n• Aadhaar Card (front & back)\n• Passport-size photograph (white background, recent)\n• Signature scan (black ink on white paper)\n\n📄 **For PG programmes additionally:**\n• Graduation Marksheet (all semesters/years)\n• Graduation Degree/Provisional Certificate\n\n📄 **If applicable:**\n• Category Certificate (SC/ST/OBC/PwD)\n• Experience Certificate (for work-experience-based relaxation)\n• Migration Certificate (if from another university)\n\n⚠️ **Common rejection reasons we prevent:**\n• Wrong photo dimensions\n• Blurry scans\n• File size too large/small\n• Wrong format (PDF vs JPG)\n\nWe send you a precise checklist with exact specs.",
    chips: ["Admission Process", "Samarth portal", "Talk to a Counsellor"],
  },
  {
    keywords: ["samarth", "portal", "online portal", "student portal", "login", "account", "ignou portal", "apaar", "abc id"],
    answer:
      "**IGNOU Samarth Portal — Your Student Dashboard**\n\n🖥️ **URL:** ignou.samarth.edu.in\n\n**What you do on Samarth:**\n• Fill & submit your admission form\n• Upload documents\n• Pay fees\n• Access study materials & assignments\n• Track admission status\n• Download Hall Ticket for exams\n• Check results & grade cards\n\n**To register you need:**\n• Aadhaar-linked mobile number\n• Active email address\n• APAAR ID (Academic Bank of Credits)\n• ABC ID (if not already created)\n\n💡 We stay on call while you fill the form — so you never get stuck on any field.",
    chips: ["Admission Process", "What is APAAR ID", "Documents needed", "Talk to a Counsellor"],
  },
  {
    keywords: ["apaar", "abc", "academic bank", "abc id", "apaar id", "what is apaar", "what is abc"],
    answer:
      "**APAAR ID & ABC ID — What are they?**\n\n📌 **APAAR ID** (Automated Permanent Academic Account Registry):\n• A unique 12-digit academic ID for every student in India\n• Generated through DigiLocker using your Aadhaar\n• Required for IGNOU Samarth registration\n\n📌 **ABC ID** (Academic Bank of Credits):\n• Stores all your earned academic credits digitally\n• Allows credit transfer between universities\n• Created at academicbank.gov.in\n• Required during IGNOU admission\n\n💡 Both are free to create. We walk you through the exact steps during our counselling session.",
    chips: ["Samarth portal", "Admission Process", "Talk to a Counsellor"],
  },
  {
    keywords: ["cycle", "january", "july", "session", "when", "deadline", "last date", "admission date", "schedule", "open", "closed", "2024", "2025", "2026"],
    answer:
      "**IGNOU Admission Cycles:**\n\n📅 **January Cycle**\n• Applications open: November/December\n• Classes begin: January\n\n📅 **July Cycle**\n• Applications open: May/June\n• Classes begin: July\n\n⚠️ Exact dates vary each year and are announced on IGNOU's official website.\n\n✅ **Our counsellors track live deadlines** and will notify you before they close — so you never miss a cycle.\n\n💡 Missing a cycle means waiting 6 months. Don't delay — start your counselling today.",
    chips: ["Admission Process", "Documents needed", "Talk to a Counsellor"],
  },
  {
    keywords: ["lateral entry", "direct admission 2nd year", "credit transfer", "transfer", "recognition of prior learning", "rpl", "previous degree", "bridge"],
    answer:
      "**Lateral Entry & Credit Transfer at IGNOU:**\n\n📌 **Credit Transfer:**\nIGNOU allows transfer of credits from UGC-recognised universities. If you've completed some courses elsewhere, those credits may be counted toward your IGNOU programme — reducing the time and fees required.\n\n📌 **Lateral Entry (2nd Year):**\nFor some UG programmes, students with a relevant Diploma can apply directly to the 2nd year. Eligibility varies by programme.\n\n📌 **Recognition of Prior Learning (RPL):**\nIGNOU offers RPL for certain work experience and professional qualifications.\n\n💡 These provisions are complex and programme-specific. Our counsellors will check your exact eligibility.",
    chips: ["Admission Process", "Documents needed", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // EXAMS, RESULTS & GRADING
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["exam", "examination", "term end", "tee", "passing", "pass", "marks", "minimum", "40%", "exam date", "exam schedule"],
    answer:
      "**IGNOU Examination System:**\n\n📅 **Term-End Examinations (TEE)** — twice a year:\n• **June TEE** — for Jan session students\n• **December TEE** — for July session students\n\n✅ **Minimum to pass:** 40% in TEE\n\n📝 **Assessment model:**\n• Internal Assessment (30%) — assignments, quizzes\n• TEE (70%) — written/CBT examination\n• Both must be cleared independently\n\n📌 **Exam centre:** Nearest IGNOU Study/Exam Centre (you choose during registration)\n\n📌 **Online exam option:** CBT (Computer Based Test) available for many programmes\n\n⚠️ Assignments must be submitted before appearing in TEE — don't skip them!",
    chips: ["Assignment details", "Grade card", "Re-evaluation", "Talk to a Counsellor"],
  },
  {
    keywords: ["assignment", "assignments", "tma", "tutor marked", "submit assignment", "assignment deadline"],
    answer:
      "**IGNOU Assignments (TMA — Tutor Marked Assignments):**\n\n📋 **What they are:**\n• Written assignments submitted each semester\n• They count for **30% of your final grade**\n• Graded by assigned tutors at your Study Centre\n\n📅 **Submission deadlines:**\n• March 31 — for June TEE\n• September 30 — for December TEE\n\n📤 **How to submit:**\n• Download question papers from eGyankosh / Samarth\n• Write answers (handwritten usually)\n• Submit at your Study Centre OR upload on Samarth (programme dependent)\n\n⚠️ **You cannot appear in TEE without submitting assignments.** Don't skip this step!",
    chips: ["Exam schedule", "Grade card", "Talk to a Counsellor"],
  },
  {
    keywords: ["grade card", "result", "marks", "grade", "transcript", "result check", "how to check result"],
    answer:
      "**IGNOU Grade Card & Results:**\n\n📌 **Where to check:** ignou.ac.in → Student Zone → Results\n\n🗂️ **Grade Card contains:**\n• Subject-wise marks\n• Assignment grades (IA)\n• TEE marks\n• Overall result status\n\n📤 **Physical Grade Card:**\n• Sent by post to your registered address\n• Also downloadable from the Samarth portal\n\n📅 **When declared:**\n• Usually 4–6 weeks after TEE\n\n🔄 **If result is missing:** Check if all assignments were submitted and fees were paid. Our counsellors can help trace issues.",
    chips: ["Re-evaluation", "Exam schedule", "Talk to a Counsellor"],
  },
  {
    keywords: ["re-evaluation", "revaluation", "re evaluation", "challenge", "rechecking", "recheck marks"],
    answer:
      "**IGNOU Re-evaluation of Answer Scripts:**\n\n✅ You can apply for re-evaluation if you're unsatisfied with your TEE marks.\n\n📋 **Process:**\n• Submit application on IGNOU's official website within the notified window (usually 30–45 days after result)\n• Pay the re-evaluation fee (per subject)\n• Results typically revised upward or confirmed within 60–90 days\n\n💡 Our counsellors can guide you on whether re-evaluation is worth pursuing based on your marks.",
    chips: ["Grade card", "Exam schedule", "Talk to a Counsellor"],
  },
  {
    keywords: ["duration", "maximum", "time limit", "years", "complete", "finish", "how long", "max years"],
    answer:
      "**Maximum Time to Complete IGNOU Programmes:**\n\n⏱️ **UG programmes** (BA, B.Com, BCA, BBA, B.Sc):\n• Minimum: 3 years | **Maximum: 6 years**\n\n⏱️ **PG programmes** (MBA, MCA, MA, M.Com):\n• Minimum: 2 years | **Maximum: 4 years** (5 years for MCA in some cases)\n\n⏱️ **PG Diploma:** Maximum: 4–5 years\n⏱️ **Diploma:** Maximum: 3–4 years\n⏱️ **Certificate:** Maximum: 2 years\n\n✅ You can take breaks, defer exams, and study at your own pace within these limits.",
    chips: ["Programmes & Fees", "Admission Process", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // RE-REGISTRATION & CONTINUATION
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["re-registration", "reregistration", "re registration", "next semester", "continue", "continuation", "renewal"],
    answer:
      "**Re-Registration at IGNOU:**\n\nAfter completing your first year/semester, you need to **re-register** for subsequent years/semesters.\n\n📅 **When to re-register:**\n• January–April window for the July session\n• July–October window for the January session\n\n📌 **How:**\n• Log in to Samarth portal → Re-registration section\n• Pay the semester/annual fee\n• Select subjects for the next semester\n\n⚠️ Missing re-registration can delay your programme. Our counsellors set reminders for you.",
    chips: ["Samarth portal", "Fee structure", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // STUDY CENTRES & REGIONAL CENTRES
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["regional centre", "study centre", "location", "city", "state", "nearest", "find centre", "lsc"],
    answer:
      "**IGNOU Regional & Study Centres:**\n\n🏛️ **67 Regional Centres** across all states and UTs\n📍 **3,000+ Learner Support Centres (LSCs)** at colleges across India\n\n**What centres provide:**\n• Personal Contact Programmes (face-to-face sessions, not mandatory)\n• Assignment submission facility\n• Exam venue\n• Academic counselling\n• Library access at some centres\n\n📌 **To find your nearest centre:**\ngp.ignou.ac.in → Regional Centre\n\n✅ For online programmes you can attend a study centre in any city — not necessarily your hometown.",
    chips: ["Change study centre", "Admission Process", "Talk to a Counsellor"],
  },
  {
    keywords: ["change", "centre", "transfer", "move", "shift", "change study centre"],
    answer:
      "**Changing Your Study Centre:**\n\nYes — IGNOU allows you to **change your study centre** after admission.\n\n📋 **Process:**\n• Submit an application to your Regional Centre\n• Pay a nominal fee (if applicable)\n• Wait for approval and confirmation letter\n\n✅ Study centre changes are usually processed before the next TEE cycle.\n\n💡 If you've relocated or found a more convenient centre, this is straightforward. Our counsellors can guide you through the form.",
    chips: ["Regional centres", "Admission Process", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // HALL TICKET / ADMIT CARD
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["hall ticket", "admit card", "exam card", "how to download admit card", "exam admit"],
    answer:
      "**IGNOU Hall Ticket / Admit Card:**\n\n📥 **How to download:**\n1. Go to ignou.ac.in\n2. Click 'Student Zone' → 'Hall Ticket'\n3. Enter Enrollment Number and Programme Code\n4. Download and print\n\n📅 **When available:** Usually 2–3 weeks before the TEE begins\n\n⚠️ **Cannot get hall ticket if:**\n• Assignments not submitted on time\n• Fees not paid\n• Enrollment not confirmed\n\n💡 Always keep a printed copy and a digital copy on your phone for exam day.",
    chips: ["Assignment details", "Exam schedule", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // SERVICES & RESOURCES
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["egyankosh", "ebook", "video lecture", "question paper", "digital", "repository", "material", "study material", "e-gyankosh"],
    answer:
      "**eGyankosh — IGNOU's Digital Library:**\n\n📚 India's largest national digital repository, maintained by IGNOU.\n\n**What's available — all FREE:**\n• Course-wise e-Books & study materials\n• Video lectures by faculty\n• Previous year question papers (very useful for exam prep!)\n• Audio programmes\n• Multimedia content\n\n🌐 **Access:** egyankosh.ac.in\n✅ Available to all enrolled students (and even non-students for browsing)\n\n💡 Download your subject's question papers first — they reveal the most important topics.",
    chips: ["Samarth portal", "Gyan Darshan", "Assignment details", "Talk to a Counsellor"],
  },
  {
    keywords: ["swayam", "swayam plus", "swayam prabha", "mooc", "online course", "nptel", "certification"],
    answer:
      "**SWAYAM & SWAYAM Plus:**\n\n📌 **SWAYAM** — India's national online education platform with 340+ MOOC courses, many developed by IGNOU faculty. Students can earn credits from these.\n\n📌 **SWAYAM Plus** — Professional certifications in AI, technology, marketing and more from industry leaders:\n• IBM, KPMG, ZScaler, Internshala\n• Certificates recognised by employers\n\n📌 **SWAYAM Prabha** — 32 DTH educational channels broadcasting curriculum 24/7.\n\n✅ IGNOU students get access to all these resources as part of their enrolment.",
    chips: ["eGyankosh", "Samarth portal", "Talk to a Counsellor"],
  },
  {
    keywords: ["gyan darshan", "dth", "tv", "broadcast", "channel", "television", "gyan vani", "radio", "fm"],
    answer:
      "**IGNOU Broadcasting Services:**\n\n📡 **Gyan Darshan:**\nIGNOU's dedicated DTH educational TV channel — broadcasts curriculum lectures, educational programmes and student guidance sessions. Free to watch via DD Free Dish.\n\n🎙️ **Gyan Vani:**\nEducational FM radio network that streams lectures and study programmes across multiple states. Particularly useful for distance learners in semi-urban areas.\n\nBoth are free supplements to your study materials — no subscription needed.",
    chips: ["eGyankosh", "SWAYAM", "Talk to a Counsellor"],
  },
  {
    keywords: ["placement", "job", "career", "campus placement", "company", "hire", "employment", "recruit", "placement cell"],
    answer:
      "**Placement & Career Support at IGNOU:**\n\n🏛️ **Campus Placement Cell:**\n• Conducts periodic placement drives\n• Organises career fairs and mock interviews\n• Provides job-readiness workshops and skill sessions\n• Connects students with recruiters in Banking, IT, FMCG, Consulting\n\n💼 **Programme-wise placement strength:**\n• MBA — Most active, ₹3–8 LPA average\n• MCA — Strong in IT companies, ₹4–10 LPA\n• BCA — Entry-level IT, ₹2–5 LPA\n• B.Com — Finance/Banking, ₹2–5 LPA\n\n📱 **Samarth Portal** also has a career section with job listings and internship opportunities.\n\n✅ **Internship assistance** is available for most PG programmes.",
    chips: ["MBA careers", "MCA careers", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // DEGREE RECOGNITION & COMPARISON
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["online vs regular", "distance vs regular", "is online degree valid", "online degree", "distance degree", "full time vs distance"],
    answer:
      "**Online / Distance Degree vs. Regular Degree:**\n\n✅ **Legally identical** — UGC mandates that UGC-DEB approved online/distance degrees have the same value as regular degrees.\n\n✅ **IGNOU's degree certificate does NOT say 'distance' or 'online'** — it reads exactly like any other IGNOU degree.\n\n✅ Valid for:\n• Government jobs\n• UPSC / state competitive exams\n• Higher education (PhD, PG)\n• Private sector hiring\n• WES evaluation for abroad\n\n📌 **Employers cannot discriminate** against UGC-approved online/distance degrees — it's against UGC regulations.",
    chips: ["Why choose IGNOU?", "Is IGNOU valid?", "Talk to a Counsellor"],
  },
  {
    keywords: ["ignou vs other", "ignou vs amity", "ignou vs lovely professional", "ignou vs symbiosis", "ignou vs manipal", "which university", "compare"],
    answer:
      "**IGNOU vs. Other Distance/Online Universities:**\n\n| | **IGNOU** | Others |\n|---|---|---|\n| Type | Central Govt. University | Private Universities |\n| Fees | ₹1,200–₹56,000 | ₹50,000–₹3,00,000+ |\n| Accreditation | NAAC A++ (Highest) | Varies |\n| Recognition | NIRF #1 (Open) | Lower ranks |\n| Global validity | WES recognised | Limited |\n| Student base | 38 Lakh+ | Much smaller |\n\n💡 IGNOU offers the **best value** — highest recognition at the lowest cost in India.\n\nFor specific programme comparisons, talk to our counsellors.",
    chips: ["Why choose IGNOU?", "Programmes & Fees", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // GENERAL FAQS
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["faq", "faqs", "frequently asked questions", "common questions"],
    answer:
      "**Frequently Asked Questions:**\n\n• **Is the degree valid?** Yes, UGC-DEB approved and equal to regular degrees.\n• **Is there an age limit?** No age limit for any IGNOU programme.\n• **Are there exams online?** Yes, many programmes offer Computer-Based Tests.\n• **When do admissions open?** January and July every year.\n\nType any specific question you have, or tap below to explore!",
    chips: ["Is the degree valid?", "Admission cycle dates", "Programmes & Fees"],
  },

  {
    keywords: ["anywhere", "remote", "flexible", "work", "working professional", "part time", "can i work while studying", "job while studying"],
    answer:
      "**Can I study IGNOU while working?**\n\n✅ **Absolutely — this is IGNOU's biggest advantage.**\n\n• No daily attendance required\n• No fixed class timings (online programmes have recorded lectures)\n• Exams twice a year — plan around your work schedule\n• Assignments can be done on weekends\n• Study materials available 24/7 on eGyankosh and Samarth\n\n📊 Over **70% of IGNOU students are working professionals** — the programme is specifically designed for this.",
    chips: ["Programmes & Fees", "Admission Process", "Talk to a Counsellor"],
  },
  {
    keywords: ["age limit", "age", "maximum age", "upper age", "40 years", "50 years", "can a 40 year old", "too old"],
    answer:
      "**Is there an age limit for IGNOU?**\n\n✅ **No upper age limit** for any IGNOU programme.\n\nStudents in their 40s, 50s, and beyond regularly join and complete IGNOU programmes. IGNOU was founded on the principle of **lifelong learning** — education for everyone at every stage of life.\n\n✅ **No minimum age restriction** either (except a few specific professional programmes).\n\n💡 Some of our most motivated students are career switchers and retirees who want to upskill or complete degrees they missed earlier.",
    chips: ["Programmes & Fees", "Admission Process", "Talk to a Counsellor"],
  },
  {
    keywords: ["personal contact programme", "pcp", "face to face", "attend classes", "attendance", "is attendance mandatory"],
    answer:
      "**Is Attendance Mandatory at IGNOU?**\n\n✅ **No compulsory attendance** for most programmes.\n\n📌 **Personal Contact Programmes (PCP):**\n• Optional face-to-face sessions at your Study Centre\n• Typically 2–3 days per subject per semester\n• Conducted by local tutors for academic support\n• Not mandatory, but highly recommended for difficult subjects\n\n📌 **Practical sessions:**\n• Science/computer programmes may have mandatory lab sessions at your Study Centre\n• Usually 1–2 weeks per year\n\n💡 For fully online programmes (MBA, MCA, BCA online), there are NO physical attendance requirements.",
    chips: ["Admission Process", "Study centres", "Talk to a Counsellor"],
  },
  {
    keywords: ["study material", "books", "when will i get", "material delivery", "hard copy", "printed material"],
    answer:
      "**IGNOU Study Materials:**\n\n📦 **Physical Books:**\n• Sent by post to your registered address within 2–4 months of admission\n• Cover all subjects for that semester\n• Free of cost — included in your programme fee\n\n💻 **Digital Materials (Immediate access):**\n• Available on eGyankosh from Day 1\n• Downloadable PDFs, e-books, video lectures\n• No waiting period\n\n📱 **Samarth Portal:**\n• Assignment questions, notifications, and materials also uploaded here\n\n💡 Don't wait for physical books — start with eGyankosh immediately after enrollment.",
    chips: ["eGyankosh", "Samarth portal", "Talk to a Counsellor"],
  },
  {
    keywords: ["migration", "migration certificate", "noc", "university transfer", "leaving ignou"],
    answer:
      "**IGNOU Migration Certificate:**\n\nIf you want to transfer to another university or need a Migration Certificate:\n\n📋 **Process:**\n1. Apply at your Regional Centre\n2. Submit your latest grade card / result\n3. Pay the migration fee\n4. Certificate issued within 30–60 days\n\n✅ Required if you're taking admission elsewhere and the new university asks for it.\n\n⚠️ Note: Migration doesn't cancel your IGNOU enrollment automatically — apply for cancellation separately if needed.",
    chips: ["Admission Process", "Grade card", "Talk to a Counsellor"],
  },
  {
    keywords: ["statistics", "stats", "38 lakh", "how many students", "how big", "largest university"],
    answer:
      "**IGNOU By The Numbers:**\n\n📊 **38 Lakh+** active students enrolled\n🎓 **20+** programmes on offer through LearningShala\n🏛️ **21** Schools of Studies\n📍 **67** Regional Centres across India\n🌍 **25+** countries served\n📚 **340+** MOOC courses available\n🏆 **NAAC A++** — highest accreditation grade\n🥇 **NIRF Rank 1** — among all Open Universities\n\nIGNOU is the **world's largest open university** by enrolment.",
    chips: ["Why choose IGNOU?", "Programmes & Fees", "Talk to a Counsellor"],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // FALLBACK — must always be last
  // ════════════════════════════════════════════════════════════════════════════

  {
    keywords: ["__fallback__"],
    answer:
      "Hmm, I don't have a specific answer for that right now. But our expert counsellors know everything about IGNOU — they can answer this in seconds.",
    chips: ["Talk to a Counsellor", "Programmes & Fees", "Admission Process"],
  },
];

// ─── MATCHER ──────────────────────────────────────────────────────────────────

/**
 * Returns true if the user's message matches a counsellor intent —
 * ChatBot.jsx should open the wizard immediately without a KB reply.
 */
export function isCounsellorIntent(input) {
  const lower = input.toLowerCase().trim();
  return COUNSELLOR_KEYWORDS.some((kw) => lower.includes(kw));
}

/**
 * Score a single KB entry against a user input string.
 */
function scoreEntry(entry, lower) {
  return entry.keywords.reduce((score, kw) => {
    if (lower.includes(kw.toLowerCase())) return score + kw.length;
    return score;
  }, 0);
}

/**
 * Find the best matching KB entry.
 * Falls back to the last entry (fallback) if no hits.
 */
export function getBotReply(input) {
  if (!input.trim()) return BOT_KB[BOT_KB.length - 1];

  const lower = input.toLowerCase();
  let best = null;
  let bestScore = 0;

  for (const entry of BOT_KB) {
    if (entry.keywords[0] === "__fallback__") continue;
    const s = scoreEntry(entry, lower);
    if (s > bestScore) {
      bestScore = s;
      best = entry;
    }
  }

  return best ?? BOT_KB[BOT_KB.length - 1];
}
