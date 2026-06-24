"use client";

import { useState, useEffect, useRef } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programmes", href: "#programmes" },
  { label: "Admissions", href: "#admissions" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "38L+", label: "Students Enrolled" },
  { value: "20+", label: "Programmes on Offer" },
  { value: "21", label: "Schools of Studies" },
  { value: "67", label: "Regional Centres" },
  { value: "25+", label: "Countries Served" },
];

// Exactly the 23 courses listed on learningshala.com/university/ignou/
const PROGRAMMES = [
  // Online — PG
  { code: "MBAOL",  name: "Online MBA",            level: "PG",      duration: "2 Years",  fee: "₹14,000/sem",   specs: 4, slug: "online-mba"          },
  { code: "MCAOL",  name: "Online MCA",            level: "PG",      duration: "2 Years",  fee: "₹12,700/sem",   specs: 0, slug: "online-mca"          },
  { code: "MAOL",   name: "Online MA",             level: "PG",      duration: "2 Years",  fee: "₹6,000 total",  specs: 3, slug: "online-ma"           },
  { code: "MCOMOL", name: "Online M.Com",          level: "PG",      duration: "2 Years",  fee: "₹18,000 total", specs: 0, slug: "online-mcom"         },
  // Online — UG
  { code: "BAOL",   name: "Online BA",             level: "UG",      duration: "3 Years",  fee: "₹6000/sem",  specs: 0, slug: "online-ba"           },
  { code: "BCAOL",  name: "Online BCA",            level: "UG",      duration: "3 Years",  fee: "₹6,000/sem",     specs: 0, slug: "online-bca"          },
  { code: "BCOMOL", name: "Online B.Com",          level: "UG",      duration: "3 Years",  fee: "₹4,000/sem", specs: 0, slug: "online-bcom"         },
  { code: "BBAOL",  name: "Online BBA",            level: "UG",      duration: "3 Years",  fee: "₹39,000 total", specs: 0, slug: "online-bba"          },
  // Online — Diploma / Certificate
  { code: "DOL",    name: "Online Diploma",        level: "Diploma", duration: "1 Year",   fee: "₹3,000 total",  specs: 0, slug: "online-diploma"      },
  { code: "PGDOL",  name: "Online PG Diploma",     level: "Diploma", duration: "1-3 Years",   fee: "₹2,400/sem",  specs: 0, slug: "online-pgdiploma"    },
  { code: "COL",    name: "Online Certificate",    level: "Diploma", duration: "6 Months", fee: "₹1,200 total",  specs: 0, slug: "online-pgcertificate"},
  // Distance — PG
  { code: "MCOM",   name: "Distance M.Com",        level: "PG",      duration: "2 Years",  fee: "₹9,300/sem",   specs: 0, slug: "distance-mcom"       },
  { code: "MA",     name: "Distance MA",           level: "PG",      duration: "2 Years",  fee: "₹15,000 total",   specs: 2, slug: "distance-ma"         },
  { code: "MSW",    name: "Distance MSW",          level: "PG",      duration: "2 Years",  fee: "₹36,000 total",  specs: 0, slug: "distance-msw"        },
  { code: "MBA",    name: "Distance MBA",          level: "PG",      duration: "2 Years",  fee: "₹16,000/sem",   specs: 3, slug: "distance-mba"        },
  { code: "MCA",    name: "Distance MCA",          level: "PG",      duration: "2 Years",  fee: "₹13,000/sem",   specs: 0, slug: "distance-mca"        },
  { code: "MSC",    name: "Distance M.Sc",         level: "PG",      duration: "2 Years",  fee: "₹7,500/sem",  specs: 0, slug: "distance-msc"        },
  // Distance — UG
  { code: "BCOM",   name: "Distance B.Com",        level: "UG",      duration: "3 Years",  fee: "₹14,400 total",   specs: 0, slug: "distance-bcom"       },
  { code: "BA",     name: "Distance BA",           level: "UG",      duration: "3 Years",  fee: "₹15,900 total",   specs: 0, slug: "distance-ba"         },
  { code: "BSW",    name: "Distance BSW",          level: "UG",      duration: "3 Years",  fee: "₹19,500 total",   specs: 0, slug: "distance-bsw"        },
  { code: "BBA",    name: "Distance BBA",          level: "UG",      duration: "3 Years",  fee: "₹30,900 total",  specs: 0, slug: "distance-bba"          },
  { code: "BCA",    name: "Distance BCA",          level: "UG",      duration: "3 Years",  fee: "₹8,300/sem",   specs: 0, slug: "distance-bca"        },
  { code: "BSC",    name: "Distance B.Sc",         level: "UG",      duration: "3 Years",  fee: "₹18,900 total",   specs: 0, slug: "distance-bsc"        },
];

const FILTERS = ["All", "Online", "Distance", "PG", "UG", "Diploma"];

const ONLINE_SERVICES = [
  {
    name: "eGyankosh",
    desc: "India's national digital repository — access e-books, video lectures, and past question papers.",
    icon: "📚",
  },
  {
    name: "Gyan Darshan",
    desc: "Dedicated DTH educational channel broadcasting curriculum content across India.",
    icon: "📡",
  },
  {
    name: "Gyan Vani",
    desc: "Educational FM radio network streaming lectures and study programmes nationwide.",
    icon: "🎙️",
  },
  {
    name: "IGNOU Library",
    desc: "Digital library OPAC giving access to journals, theses, and academic resources.",
    icon: "🏛️",
  },
  {
    name: "Samarth Portal",
    desc: "Your 24/7 student dashboard — access materials, submit assignments, track status.",
    icon: "🖥️",
  }
];

const STRENGTHS = [
  { icon: "⚡", title: "Skill Upgradation", desc: "Industry-aligned curriculum designed by expert scholars and ministry-approved educators." },
  { icon: "🌐", title: "Personality Enhancement", desc: "Holistic learning that builds communication, critical thinking, and leadership." },
  { icon: "💼", title: "Job Readiness", desc: "Regular placement drives, mock interviews, and career support via the Samarth portal." },
  { icon: "♾️", title: "Lifelong Learning", desc: "340+ MOOC courses and self-paced access that fits around your life and work." },
  { icon: "🚀", title: "Employability", desc: "Internship collaborations, training programmes, and soft-skills workshops." },
];


const ANNOUNCEMENTS = [
  "IGNOU extends July 2026 admission — Fresh applications open till July 15, 2026",
  "Re-registration for current students closes June 30, 2026",
  "Revised date sheet for Online Examinations (E-VIDYA BHARTI) December 2025 released",
  "Assignment submission deadline for TEE June 2024 extended — check official portal",
  "January 2026 session admission portal now active for Indian students",
];

// ─── Helper Components ────────────────────────────────────────────────────────

function Badge({ children, variant = "blue" }) {
  const variants = {
    blue: "bg-[#D6EAF3] text-[#094f72]",
    amber: "bg-amber-100 text-amber-800",
    green: "bg-emerald-100 text-emerald-800",
    navy: "bg-[#0F1F3D] text-white",
  };
  return (
    <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${variants[variant]}`}>
      {children}
    </span>
  );
}

function AccentDivider() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="h-0.5 w-8 bg-[#0B6089] rounded-full" />
      <div className="h-0.5 w-3 bg-blue-300 rounded-full" />
    </div>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function Navbar({ scrolled, openWizard}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="IGNOU"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-slate-600 hover:text-[#0B6089]" : "text-blue-100 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openWizard}
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#0B6089] text-white hover:bg-[#0B6089] transition-colors"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded ${scrolled ? "text-slate-700" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-slate-700 font-medium py-1">
              {l.label}
            </a>
          ))}
          <button
            onClick={openWizard}
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#0B6089] text-white hover:bg-[#0B6089] transition-colors"
          >
            Apply Now
          </button>
        </div>
      )}
    </header>
  );
}

function HeroSection({ openWizard }) {
  const [announcementIdx, setAnnouncementIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setAnnouncementIdx((i) => (i + 1) % ANNOUNCEMENTS.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#061122]">
      {/* Hero Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/ignou-campus.jpg"
          alt="IGNOU Campus"
          className="
            absolute
            right-0
            top-0
            h-full
            w-[65%]
            object-cover
            object-[50%_center]
            opacity-60
          "
        />

        {/* Strong fade from left */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#061122]
            via-[#061122]/95
            via-[#061122]/25
            to-transparent
          "
        />

        {/* Dark overlay for readability */}
        <div
          className="
            absolute
            inset-0
            bg-[#061122]/25
          "
        />
      </div>
      {/* Background geometry */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Large arc — the signature element */}
        <svg className="absolute -right-40 -top-40 w-[700px] h-[700px] opacity-10" viewBox="0 0 700 700" fill="none">
          <circle cx="350" cy="350" r="320" stroke="#3B82F6" strokeWidth="1.5" />
          <circle cx="350" cy="350" r="240" stroke="#3B82F6" strokeWidth="0.8" />
          <circle cx="350" cy="350" r="160" stroke="#60A5FA" strokeWidth="0.5" />
        </svg>
        {/* Grid dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #93C5FD 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#061122] to-transparent" />
      </div>

      {/* Announcement ticker */}
      <div className="relative mt-16 bg-[#083d5a]/50 border-b border-[#094f72]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-3">
          <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest bg-amber-400 text-amber-900 px-2 py-0.5 rounded-full">
            Latest
          </span>
          <p key={announcementIdx} className="text-xs text-[#a8d4e6] truncate transition-all">
            {ANNOUNCEMENTS[announcementIdx]}
          </p>
          <a
            href=" "
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-[10px] text-[#4a9fc0] hover:text-[#a8d4e6] font-medium ml-auto"
          >
            View all →
          </a>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-20flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#0d70a0]" />
              <span className="text-[#4a9fc0] text-xs font-semibold uppercase tracking-[0.2em]">
                Established 1985 · Act of Parliament
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Education{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a9fc0] to-[#a8d4e6]">
                without walls.
              </span>
              <br />
              Learning beyond borders.
            </h1>

            <p className="text-base sm:text-lg text-[#a8d4e6]/80 leading-relaxed max-w-xl mb-10">
              IGNOU's Centre for Online Education brings UGC-approved, NAAC A++ certified degrees to
              38 lakh+ learners across 25 countries — at a price that's never a barrier.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={openWizard}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B6089] hover:bg-[#0d70a0] text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0B6089]/30"
              >
                Get Free Counselling
              </button>
              <a
                href="#programmes"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#0B6089]/60 text-[#a8d4e6] hover:text-white hover:border-blue-500 font-semibold text-sm rounded-xl transition-all duration-200"
              >
                Browse Programmes
              </a>
            </div>

            {/* Inline trust badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "NAAC A++", logo: "/accreditations/naac.png" },
                { label: "UGC-DEB Approved", logo: "/accreditations/ugc-deb.png" },
                { label: "NIRF #1 Open Univ.", logo: "/accreditations/nirf.png" },
                { label: "AICTE Recognised", logo: "/accreditations/aicte.png" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="flex items-center gap-2 text-sm font-semibold text-white border border-[#0B6089] rounded-full px-4 py-2 bg-white/40"
                >
                  <img
                    src={b.logo}
                    alt={b.label}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-20 border-t border-[#083d5a]/60 bg-[#0A1A30]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-blue-900/40">
            {STATS.map((s) => (
              <div key={s.label} className="py-5 px-4 text-center first:border-l-0">
                <div className="text-2xl font-black text-[#4a9fc0]">{s.value}</div>
                <div className="text-[11px] text-[#7cbdd6]/60 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ openWizard }) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <AccentDivider />
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-5">
              India's largest open university — now fully online.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Indira Gandhi National Open University (IGNOU), established by Parliament in 1985, has continuously
              built an inclusive knowledge society by eliminating barriers of geography, age, and economics.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Its Centre for Online Education (COE), launched in 2019, extends this mission to a fully digital format —
              the same UGC-DEB accredited degrees, the same NAAC A++ quality, accessible from anywhere in the world
              through the Samarth portal.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              With 21 Schools of Studies, 20+ programmes, and partnerships with international institutions across
              25 countries, IGNOU has ranked #1 in NIRF 2025 for open universities.
            </p>
            <div className="flex gap-4">
              <button
                onClick={openWizard}
                className="text-sm font-semibold text-[#0B6089] hover:text-blue-900 flex items-center gap-1.5 transition-colors"
              >
                Read more about IGNOU
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Credential cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "NAAC Rating", value: "A++", sub: "Highest academic quality grade", color: "bg-[#EBF4F9] border-[#D6EAF3]" },
              { label: "NIRF Rank", value: "#1", sub: "Open Universities 2025", color: "bg-slate-50 border-slate-100" },
              { label: "Programmes", value: "20+", sub: "Online & distance modes", color: "bg-slate-50 border-slate-100" },
              { label: "Students", value: "38L+", sub: "Active enrolled learners", color: "bg-[#EBF4F9] border-[#D6EAF3]" },
            ].map((c) => (
              <div key={c.label} className={`rounded-2xl border p-5 ${c.color}`}>
                <p className="text-xs font-semibold text-slate-500 mb-1">{c.label}</p>
                <p className="text-3xl font-black text-[#0B6089] mb-1">{c.value}</p>
                <p className="text-xs text-slate-500 leading-tight">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgrammesSection({ openWizard, openProgrammeWizard }) {
  const [filter, setFilter] = useState("All");
  const [expandCourses, setExpandCourses] = useState(false);
  const sectionRef = useRef(null);

  const filtered = PROGRAMMES.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Online") return p.code.endsWith("OL") || p.slug.startsWith("online-");
    if (filter === "Distance") return !p.code.endsWith("OL") && !p.slug.startsWith("online-");
    return p.level === filter;
  });

  const isOnline = (p) => p.slug.startsWith("online-");
  const displayedCourses = expandCourses ? filtered : filtered.slice(0, 8);
  const hasMore = filtered.length > 8;

  const hasInteracted = useRef(false);

  useEffect(() => {
    if (!expandCourses && hasInteracted.current && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [expandCourses]);

  return (
    <section id="programmes" ref={sectionRef} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AccentDivider />
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">Courses at IGNOU</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            23 UGC-DEB approved programmes across online and distance modes — from UG to PG, designed for
            working professionals and fresh graduates alike.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                filter === f
                  ? "bg-[#0B6089] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#7cbdd6]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Programme grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayedCourses.map((prog) => (
            <div
              key={prog.code}
              className="group bg-white rounded-2xl border border-slate-100 p-5 hover:border-[#7cbdd6] hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex gap-1.5 flex-wrap">
                  <Badge variant={prog.level === "PG" ? "blue" : prog.level === "UG" ? "green" : "amber"}>
                    {prog.level}
                  </Badge>
                  <Badge variant={isOnline(prog) ? "navy" : "amber"}>
                    {isOnline(prog) ? "Online" : "Distance"}
                  </Badge>
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-800 leading-snug mb-auto">{prog.name}</h3>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0B6089]">{prog.fee}</span>
                <span className="text-[11px] text-slate-400">{prog.duration}</span>
              </div>
              {prog.specs > 0 && (
                <p className="text-[11px] text-slate-400 mt-1">{prog.specs} specialisations</p>
              )}
              <button
                onClick={(e) => { e.stopPropagation(); openProgrammeWizard(prog.name); }}
                className="mt-3 w-full py-2 rounded-lg bg-[#EBF4F9] hover:bg-[#0B6089] text-[#0B6089] hover:text-white border border-[#b0d4e8] hover:border-[#0B6089] text-xs font-semibold transition-all duration-200"
              >
                Apply Now →
              </button>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                hasInteracted.current = true;
                setExpandCourses(!expandCourses);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0B6089] text-[#0B6089] font-semibold text-sm rounded-xl hover:bg-[#0B6089] hover:text-white transition-all duration-200"
            >
              {expandCourses ? (
                <>
                  Show Less
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0L5 14m7-7v12" />
                  </svg>
                </>
              ) : (
                <>
                  Show More Courses
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function StrengthsSection() {
  return (
    <section className="py-20 bg-white">
      <style>{`
        @keyframes scrollHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-container {
          animation: scrollHorizontal 30s linear infinite;
        }
        .scroll-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AccentDivider />
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">What IGNOU Online builds in you</h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            More than a degree — a toolkit for modern careers and lifelong growth.
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-6 scroll-container w-max">
            {[...STRENGTHS, ...STRENGTHS].map((s, idx) => (
              <div
                key={`${s.title}-${idx}`}
                className="group rounded-2xl border border-slate-100 bg-slate-50 hover:bg-[#EBF4F9] hover:border-[#b0d4e8] p-6 text-center transition-all duration-200 flex-shrink-0 w-80"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-sm font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const TIMELINE_STEPS = [
  {
    who: "ls",
    label: "Step 1 — Start here",
    title: "Free counselling",
    desc: "Before you even look at the IGNOU portal, talk to us. Our counsellors map your goals, eligibility, and budget to the right programme — so you don't waste time or fees on the wrong choice.",
    highlight: "Most students who apply directly pick the wrong specialisation. We prevent that.",
  },
  {
    who: "ls",
    label: "Step 2",
    title: "Programme shortlisting & eligibility check",
    desc: "We verify your 10th, 12th, and graduation marksheets against IGNOU's eligibility criteria before you apply — so your application is never rejected on a technicality.",
    highlight: "We check: minimum % requirements, subject prerequisites, and category-based relaxations.",
  },
  {
    who: "ls",
    label: "Step 3",
    title: "Document preparation checklist",
    desc: "We send you a precise list of what to scan, what size, what format — for your Aadhar, marksheets, photo, and signature. No last-minute rejections for wrong file sizes or missing papers.",
    highlight: "We've seen 100s of rejections for wrong photo dimensions alone. We handle that.",
  },
  {
    who: "ignou",
    label: "Step 4 — Official portal",
    title: "Register & fill the admission form on Samarth",
    desc: "Now you go to the IGNOU Samarth portal. Create your account with your Aadhar-linked mobile, link your APAAR & ABC ID, and fill in the admission form with your details.",
    highlight: "We stay on call while you fill this — so you never get stuck.",
  },
  {
    who: "ls",
    label: "Step 5",
    title: "Fee payment guidance & EMI setup",
    desc: "We walk you through the exact fee amount for your programme, explain semester vs annual fee structures, and help you set up EMI if needed — so there are no surprise payments later.",
    highlight: "Many students overpay or miss fee deadlines. We set reminders for you.",
  },
  {
    who: "ignou",
    label: "Step 6 — Official portal",
    title: "Upload documents & submit on Samarth",
    desc: "Upload your prepared documents directly on the IGNOU portal. With our checklist already done, this takes under 10 minutes.",
    highlight: "We verify your uploads before you hit submit.",
  },
  {
    who: "ls",
    label: "Step 7 — You're in",
    title: "Confirmation & onboarding support",
    desc: "Once IGNOU confirms your admission, we help you activate your Samarth portal, understand your study schedule, locate your regional centre, and access eGyankosh — so Day 1 is smooth.",
    highlight: "Our support doesn't stop at admission. We're with you through your entire journey.",
  },
];

function AdmissionsSection({ openWizard }) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(i);
        },
        { threshold: 0.5, rootMargin: "0px 0px -30% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section id="admissions" ref={sectionRef} className="bg-[#061122]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="py-20 grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#0d70a0]" />
              <span className="text-[#4a9fc0] text-xs font-semibold uppercase tracking-widest">
                Admissions 2026
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
              Don't apply alone.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a9fc0] to-[#a8d4e6]">
                Here's why.
              </span>
            </h2>
            <p className="text-[#a8d4e6]/70 text-sm leading-relaxed">
              The IGNOU Samarth portal has no guidance built in. Most students pick the wrong programme,
              upload wrong documents, or miss fee deadlines — on their own. Our counsellors
              sit alongside you at every step so none of that happens to you.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="bg-amber-400/10 border border-amber-400/25 rounded-2xl p-5">
              <p className="text-amber-300 text-sm font-bold mb-2">⚡ Current Deadline</p>
              <p className="text-amber-200/80 text-xs leading-relaxed">
                July 2026 session — Fresh applications close{" "}
                <strong className="text-amber-300">July 15, 2026</strong>. Re-registration closes{" "}
                <strong className="text-amber-300">June 30, 2026</strong>.
              </p>
            </div>
            <button
              onClick={openWizard}
              className="flex items-center justify-between gap-4 bg-[#0B6089] hover:bg-[#0d70a0] transition-colors rounded-2xl p-5 group"
            >
              <div>
                <p className="text-white font-bold text-sm mb-0.5">Talk to a counsellor first</p>
                <p className="text-[#a8d4e6] text-xs">Free · No commitment · Takes 15 minutes</p>
              </div>
              <svg className="w-5 h-5 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sticky scroll timeline */}
        <div className="flex gap-0 lg:gap-16 pb-20">

          {/* LEFT — sticky step tracker (desktop only) */}
          <div className="hidden lg:block w-64 flex-shrink-0 sticky top-24 h-fit">
            <div className="relative flex flex-col gap-1">
              <div className="absolute left-[13px] top-5 bottom-5 w-px bg-[#083d5a]/60" />
              {TIMELINE_STEPS.map((step, i) => {
                const isLS = step.who === "ls";
                const isActive = activeStep === i;
                const isPast = i < activeStep;
                return (
                  <button
                    key={i}
                    onClick={() => stepRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-all duration-300 hover:bg-white/5"
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black border transition-all duration-300 z-10 ${
                      isActive
                        ? isLS
                          ? "bg-[#0B6089] border-blue-400 text-white scale-110 shadow-lg shadow-[#0B6089]/40"
                          : "bg-slate-500 border-slate-400 text-white scale-110"
                        : isPast
                        ? "bg-[#083d5a] border-[#094f72] text-[#4a9fc0]"
                        : "bg-[#0d1f38] border-blue-950 text-blue-950"
                    }`}>
                      {isPast && !isActive ? "✓" : String(i + 1).padStart(2, "0")}
                    </div>
                    <span className={`text-xs font-semibold leading-tight transition-all duration-300 ${
                      isActive ? "text-white" : isPast ? "text-[#0B6089]" : "text-blue-950"
                    }`}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — scrollable step cards */}
          <div className="flex-1 flex flex-col">
            {TIMELINE_STEPS.map((step, i) => {
              const isLS = step.who === "ls";
              const isActive = activeStep === i;
              return (
                <div
                  key={i}
                  ref={(el) => (stepRefs.current[i] = el)}
                  className="min-h-[60vh] flex items-center py-10 lg:py-16"
                >
                  <div className={`w-full rounded-2xl p-6 sm:p-8 border transition-all duration-500 ${
                    isActive
                      ? isLS
                        ? "bg-[#06293d]/80 border-[#0B6089]/60 shadow-xl shadow-blue-900/30"
                        : "bg-slate-800/80 border-slate-500/60 shadow-xl shadow-slate-900/30"
                      : isLS
                      ? "bg-[#06293d]/30 border-[#083d5a]/30"
                      : "bg-slate-800/20 border-slate-800/30"
                  }`}>

                    {/* Step header */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3 flex-wrap">
                        {/* Number badge */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black border-2 transition-all duration-500 ${
                          isLS
                            ? "bg-[#0B6089] border-blue-400 text-white"
                            : "bg-slate-700 border-slate-500 text-white"
                        }`}>
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#4a9fc0]/60 block">
                            {step.label}
                          </span>
                          <span className={`text-[10px] font-bold uppercase tracking-widest text-white px-2 py-0.5 rounded-full ${step.pillColor}`}>
                            {step.pill}
                          </span>
                        </div>
                      </div>
                      <span className="text-3xl flex-shrink-0">{step.icon}</span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl sm:text-2xl font-black mb-3 leading-snug transition-all duration-500 ${
                      isActive ? "text-white" : "text-white/50"
                    }`}>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-5 transition-all duration-500 ${
                      isActive ? "text-[#a8d4e6]/80" : "text-[#7cbdd6]/30"
                    }`}>
                      {step.desc}
                    </p>

                    {/* Highlight callout */}
                    <div className={`flex items-start gap-2 rounded-xl px-4 py-3 transition-all duration-500 ${
                      isActive
                        ? isLS
                          ? "bg-[#0B6089]/[0.15] border border-[#0B6089]/[0.25]"
                          : "bg-slate-700/40 border border-slate-600/30"
                        : "bg-transparent border border-transparent"
                    }`}>
                      <span className={`mt-0.5 flex-shrink-0 font-bold transition-colors duration-500 ${isActive ? "text-[#4a9fc0]" : "text-transparent"}`}></span>
                      <p className={`text-xs leading-relaxed italic transition-all duration-500 ${
                        isActive ? "text-[#a8d4e6]/80" : "text-transparent"
                      }`}>
                        {step.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pb-20 text-center">
          <button
            onClick={openWizard}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0B6089] hover:bg-[#0d70a0] text-white font-semibold text-sm rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0B6089]/25"
          >
            Book a free call — July 2026 seats filling fast
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

function ServicesSection({ openWizard }) {
  const selectedServices = [
    ONLINE_SERVICES.find(s => s.name === "Samarth Portal"),
    ONLINE_SERVICES.find(s => s.name === "Gyan Darshan"),
    ONLINE_SERVICES.find(s => s.name === "Gyan Vani"),
    ONLINE_SERVICES.find(s => s.name === "eGyankosh"),
    ONLINE_SERVICES.find(s => s.name === "IGNOU Library"),
  ].filter(Boolean);

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AccentDivider />
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">Online Services & Resources</h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            A full ecosystem of digital tools — from a national digital library to educational TV channels — available
            to every IGNOU student.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-max">
          {selectedServices.map((svc, idx) => (
            <div
              key={svc.name}
              onClick={openWizard}
              className={`group bg-white rounded-2xl border border-slate-100 hover:border-[#b0d4e8] hover:shadow-md transition-all duration-200 ${
                idx === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2 p-12" : "p-6"
              }`}
            >
              <div className={`flex ${idx === 0 ? "flex-col h-full" : "flex-row"} items-start ${idx === 0 ? "gap-6" : "gap-4"}`}>
                <div className={`rounded-xl bg-[#EBF4F9] border border-[#D6EAF3] flex items-center justify-center flex-shrink-0 ${
                  idx === 0 ? "w-24 h-24 text-6xl" : "w-11 h-11 text-xl"
                }`}>
                  {svc.icon}
                </div>
                <div className={idx === 0 ? "flex-1" : ""}>
                  <h3 className={`font-bold ${idx === 0 ? "text-3xl" : "text-sm"} text-slate-800 mb-3 group-hover:text-[#0B6089] transition-colors`}>
                    {svc.name}
                  </h3>
                  <p className={`${idx === 0 ? "text-base" : "text-xs"} text-slate-500 leading-relaxed`}>{svc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    question: "Is IGNOU a government institute?",
    answer:
      "Yes, Indira Gandhi National Open University is a government institution backed by the MoE, India, and the President acts as chancellor for the Open University.",
  },
  {
    question: "Is an IGNOU degree valid for government jobs?",
    answer:
      "Yes. IGNOU degrees are recognised by UGC and are valid for government jobs, higher education, and competitive examinations in India.",
  },
  {
    question: "How many admission cycles does IGNOU have?",
    answer:
      "IGNOU generally offers admissions twice a year through the January and July admission cycles.",
  },
  {
    question: "What is the minimum passing mark in IGNOU?",
    answer:
      "Students are generally required to score at least 40% in the Term-End Examination and meet programme-specific requirements for successful completion.",
  },
  {
    question: "Can I study from anywhere in India?",
    answer:
      "Yes. IGNOU's distance and online learning model allows students to study from anywhere while accessing support through regional centres and learner support centres.",
  },
  {
    question: "Can I change my study centre after admission?",
    answer:
      "Yes. IGNOU allows study centre changes subject to university guidelines and applicable procedures.",
  },
  {
    question: "How many examinations are conducted each year?",
    answer:
      "IGNOU conducts Term-End Examinations twice every year, generally in June and December.",
  },
  {
    question: "Does IGNOU provide placement support?",
    answer:
      "Yes. IGNOU has a Campus Placement Cell and periodically conducts placement drives and career support activities for eligible students.",
  },
  {
    question: "What is the maximum duration allowed to complete a programme?",
    answer:
      "The maximum duration depends on the programme. Undergraduate programmes generally allow up to 6 years, while most postgraduate programmes allow up to 4 years.",
  },
  {
    question: "Why should I choose IGNOU?",
    answer:
      "IGNOU offers affordable fees, nationwide learner support, flexible study schedules, recognised degrees, and one of the largest distance-learning networks in the world.",
  },
];

function FAQSection() {
  return (
    <section id="faq" className="py-16 pb-0 bg-[#061122]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[1fr_360px] gap-16">

          {/* Left Column */}
          <div className="space-y-5">

            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-white/10 pb-4"
              >
                <h3 className="text-base font-semibold text-white mb-2">
                  {faq.question}
                </h3>

                <p className="text-sm text-[#a8d4e6]/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          {/* Right Column */}
          <div className="lg:sticky lg:top-24 h-fit">

            <p className="text-[#4a9fc0] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
              Frequently Asked Questions
            </p>

            <h2 className="text-3xl font-black text-white leading-tight mb-4">
              Everything You Need To Know
            </h2>

            <p className="text-sm text-[#a8d4e6]/60 leading-relaxed">
              Find answers to the most common questions about admissions,
              eligibility, fees, examinations, recognition and student support.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

function CTASection({ openWizard }) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#061122] pt-16 pb-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #60A5FA 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Decorative Arc */}
      <svg
        className="absolute -left-32 -top-32 w-[600px] h-[600px] opacity-5"
        viewBox="0 0 600 600"
      >
        <circle cx="300" cy="300" r="260" stroke="#60A5FA" fill="none" />
        <circle cx="300" cy="300" r="180" stroke="#60A5FA" fill="none" />
      </svg>

      <div className="relative max-w-[1600px] mx-auto px-8">

        {/* MASTER CARD */}
        <div className="rounded-[40px] overflow-hidden">

          {/* HERO */}
          <div className="relative bg-[#0A1A30]">

            <div className="grid lg:grid-cols-2 min-h-[450px] items-center">

              {/* LEFT */}
              <div className="p-8 lg:px-12 lg:py-10 z-20">

                <p className="text-[#4a9fc0] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  Free Counselling
                </p>

                <h2 className="text-5xl font-black text-white mb-4 leading-tight">
                  Advance Your Learning Journey
                </h2>

                <p className="text-[#a8d4e6]/70 mb-10 max-w-lg">
                  Connect with an IGNOU academic advisor and get guidance on
                  programmes, eligibility, admissions, fees and career outcomes.
                </p>

                <form className="space-y-4 max-w-xl">

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-white/5 rounded-xl px-4 py-3 text-white border border-white/10 placeholder:text-[#a8d4e6]/40"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-white/5 rounded-xl px-4 py-3 text-white border border-white/10 placeholder:text-[#a8d4e6]/40"
                    />
                  </div>

                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full bg-white/5 rounded-xl px-4 py-3 text-white border border-white/10 placeholder:text-[#a8d4e6]/40"
                  />

                  <label className="flex gap-3 items-start text-xs text-[#7cbdd6]/70">
                    <input type="checkbox" className="mt-0.5" />
                    I agree to receive admission updates, counselling calls,
                    emails and WhatsApp communication from IGNOU.
                  </label>

                  <div className="flex flex-wrap gap-3 pt-2">

                    <button
                      className="
                        px-8 py-4
                        bg-[#0B6089]
                        hover:bg-[#0d70a0]
                        text-white
                        font-semibold
                        rounded-xl
                        transition-all
                      "
                    >
                      Book a Free Call
                    </button>

                    <button
                      className="
                        px-8 py-4
                        bg-green-600
                        hover:bg-green-500
                        text-white
                        font-semibold
                        rounded-xl
                        transition-all
                      "
                    >
                      Reach Out on WhatsApp
                    </button>

                  </div>
                </form>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative hidden lg:flex justify-center items-end h-full">

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#0A1A30]
                    via-[#0A1A30]/40
                    to-transparent
                  "
                />

                <img
                  src="/counsellor.png"
                  alt="Student Support"
                  className="
                    h-[720px]
                    object-contain
                    -translate-x-12
                    translate-y-12
                    relative
                    z-10
                  "
                />
              </div>

            </div>
          </div>

          {/* FOOTER CARD */}
          <div
            className="
              bg-white
              relative
              -mt-8
              mx-6
              rounded-[32px]
              shadow-2xl
              z-20
            "
          >
            <div className="px-10 lg:px-14 py-10">

              <div className="grid lg:grid-cols-5 gap-8">

                {/* ACCREDITATION COLUMN */}
                <div>

                  <div className="space-y-5">

                    <div className="flex items-center gap-3">
                      <img
                        src="/logo.png"
                        alt=""
                        className="h-10"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <img
                        src="/accreditations/nirf.png"
                        alt=""
                        className="h-10"
                      />
                      <div>
                        <p className="font-semibold text-slate-800">
                          NIRF Ranked
                        </p>
                        <p className="text-sm text-slate-500">
                          Top Open University
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <img
                        src="/accreditations/naac.png"
                        alt=""
                        className="h-10"
                      />
                      <div>
                        <p className="font-semibold text-slate-800">
                          NAAC A++
                        </p>
                        <p className="text-sm text-slate-500">
                          Accredited
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* PROGRAMMES */}
                <div>
                  <h3 className="font-bold text-slate-900 mb-5">
                    Programmes
                  </h3>

                  {[
                    "Online Programmes",
                    "Distance Learning",
                    "All Courses",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block mb-3 text-slate-500 hover:text-[#0B6089]"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* RESOURCES */}
                <div>
                  <h3 className="font-bold text-slate-900 mb-5">
                    Resources
                  </h3>

                  {[
                    "eGyankosh Library",
                    "Samarth Portal",
                    "Gyan Darshan",
                    "FAQ",
                    "Announcements",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block mb-3 text-slate-500 hover:text-[#0B6089]"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* SUPPORT */}
                <div>
                  <h3 className="font-bold text-slate-900 mb-5">
                    Contact & Support
                  </h3>

                  <p className="text-slate-500 mb-2">
                    Monday – Saturday
                  </p>

                  <p className="font-semibold mb-5">
                    10:00 AM – 7:00 PM
                  </p>

                  <p className="text-slate-500">
                    Sunday Closed
                  </p>
                </div>

                {/* STATS */}
                <div>

                  <h3 className="font-bold text-slate-900 mb-5">
                    IGNOU At A Glance
                  </h3>

                  <div className="space-y-4">

                    <div>
                      <div className="text-3xl font-black text-[#0B6089]">
                        38L+
                      </div>
                      <div className="text-slate-500">
                        Learners
                      </div>
                    </div>

                    <div>
                      <div className="text-3xl font-black text-[#0B6089]">
                        A++
                      </div>
                      <div className="text-slate-500">
                        NAAC Grade
                      </div>
                    </div>

                    <div>
                      <div className="text-3xl font-black text-[#0B6089]">
                        1985
                      </div>
                      <div className="text-slate-500">
                        Established
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="border-t border-slate-200 mt-12 pt-6 flex justify-between text-sm text-slate-500">
                <p>
                  Disclaimer: We act solely as an information partner and do not conduct or facilitate admissions to IGNOU. For admissions, please visit the official IGNOU website or contact the university directly. IGNOU University holds full rights to request changes or removal of any non-relevant content. Images used are for illustrative purposes only and do not directly represent the respective colleges or universities.
                </p>
    
                <p> © {new Date().getFullYear()} </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// ─── Counselling Wizard ───────────────────────────────────────────────────────

const WIZARD_PROGRAMMES = [
  "Online MBA", "Online MCA", "Online MA", "Online M.Com",
  "Online BA", "Online BCA", "Online B.Com", "Online BBA",
  "Distance MBA", "Distance MCA", "Distance MA", "Distance M.Com", "Distance MSW", "Distance M.Sc", 
  "Distance B.Com", "Distance BA", "Distance BBA", "Distance BCA", "Distance BSW", "Distance B.Sc", 
  "Online Diploma", "Online PG Diploma", "Online Certificate", "Not sure yet",
];

const BUDGET_OPTIONS = [
  { label: "Under ₹10,000", value: "under_10k" },
  { label: "₹10,000 – ₹25,000", value: "10k_25k" },
  { label: "₹25,000 – ₹50,000", value: "25k_50k" },
  { label: "Above ₹50,000", value: "above_50k" },
];

const QUALIFICATION_OPTIONS = [
  "10th Pass", "12th Pass", "Diploma Holder", 
  "Graduate", "Post Graduate",
];

const STEPS = [
  { id: "programme", title: "What would you like to study?", subtitle: "Pick the programme you're interested in" },
  { id: "budget", title: "What's your budget?", subtitle: "We'll find options that fit" },
  { id: "eligibility", title: "Your current qualification", subtitle: "We'll check if you're eligible" },
  { id: "contact", title: "Almost there!", subtitle: "Where should we send your counselling details?" },
];

function CounsellingWizard({ onClose, initialProgramme = "", initialStep = 0}) {
  const [step, setStep] = useState(initialStep);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    programme: initialProgramme,
    budget: "",
    qualification: "",
    name: "",
    phone: "",
    email: "",
    preferredTime: "",
  });

  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const canNext = () => {
    if (step === 0) return !!form.programme;
    if (step === 1) return !!form.budget;
    if (step === 2) return !!form.qualification;
    if (step === 3) return form.name && form.phone && form.email;
    return false;
  };

  const handleSubmit = () => {
    // Replace this with your actual API call / form submission
    console.log("Wizard submission:", form);
    setSubmitted(true);
  };

  const progress = ((step) / STEPS.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          /* ── Post submission screen ── */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-[#EBF4F9] rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-[#0B6089]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">You're all set, {form.name.split(" ")[0]}!</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Our counsellor will call you within <strong className="text-slate-700">24 hours</strong> to discuss{" "}
              <strong className="text-slate-700">{form.programme}</strong> and answer all your questions — for free.
            </p>

            <div className="bg-[#EBF4F9] border border-[#D6EAF3] rounded-2xl p-5 text-left mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0B6089] mb-3">Your details</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Programme", val: form.programme },
                  { label: "Budget", val: BUDGET_OPTIONS.find(b => b.value === form.budget)?.label },
                  { label: "Qualification", val: form.qualification },
                  { label: "Contact", val: `${form.phone} · ${form.email}` },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 text-sm">
                    <span className="text-slate-400">{row.label}</span>
                    <span className="text-slate-700 font-medium text-right">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs text-slate-400 mb-1">While you wait, explore:</p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#programmes"
                  onClick={onClose}
                  className="text-sm font-semibold text-[#0B6089] border border-[#b0d4e8] rounded-xl py-2.5 text-center hover:bg-[#EBF4F9] transition-colors"
                >
                  Browse Courses
                </a>
                <a
                  href="#admissions"
                  onClick={onClose}
                  className="text-sm font-semibold text-[#0B6089] border border-[#b0d4e8] rounded-xl py-2.5 text-center hover:bg-[#EBF4F9] transition-colors"
                >
                  Admission Steps
                </a>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-4 text-xs text-slate-400 hover:text-slate-600 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* ── Header ── */}
            <div className="bg-[#061122] px-6 pt-7 pb-6">
              {/* Progress bar */}
              <div className="flex items-center gap-2 mb-5">
                {STEPS.map((s, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                      i <= step ? "bg-[#0d70a0]" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[#4a9fc0] text-xs font-semibold uppercase tracking-widest mb-1">
                Step {step + 1} of {STEPS.length}
              </p>
              <h3 className="text-xl font-black text-white">{STEPS[step].title}</h3>
              <p className="text-[#7cbdd6]/60 text-sm mt-1">{STEPS[step].subtitle}</p>
            </div>

            {/* ── Body ── */}
            <div className="px-6 py-6 max-h-[55vh] overflow-y-auto">

              {/* Step 0 — Programme */}
              {step === 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {WIZARD_PROGRAMMES.map((p) => (
                    <button
                      key={p}
                      onClick={() => update("programme", p)}
                      className={`text-left text-sm px-3 py-2.5 rounded-xl border font-medium transition-all ${
                        form.programme === p
                          ? "bg-[#0B6089] border-[#0B6089] text-white"
                          : "bg-white border-slate-200 text-slate-700 hover:border-[#7cbdd6]"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}

              {/* Step 1 — Budget */}
              {step === 1 && (
                <div className="flex flex-col gap-3">
                  {BUDGET_OPTIONS.map((b) => (
                    <button
                      key={b.value}
                      onClick={() => update("budget", b.value)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl border font-medium text-sm transition-all ${
                        form.budget === b.value
                          ? "bg-[#0B6089] border-[#0B6089] text-white"
                          : "bg-white border-slate-200 text-slate-700 hover:border-[#7cbdd6]"
                      }`}
                    >
                      {b.label}
                      {form.budget === b.value && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2 — Eligibility */}
              {step === 2 && (
                <div className="flex flex-col gap-2">
                  <div className="bg-[#EBF4F9] border border-[#D6EAF3] rounded-xl p-3 mb-2">
                    <p className="text-xs text-[#0B6089] leading-relaxed">
                      <strong>Don't worry</strong> — most IGNOU programmes require only 10+2. We'll confirm your eligibility in the call.
                    </p>
                  </div>
                  {QUALIFICATION_OPTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => update("qualification", q)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl border font-medium text-sm transition-all ${
                        form.qualification === q
                          ? "bg-[#0B6089] border-[#0B6089] text-white"
                          : "bg-white border-slate-200 text-slate-700 hover:border-[#7cbdd6]"
                      }`}
                    >
                      {q}
                      {form.qualification === q && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Step 3 — Contact */}
              {step === 3 && (
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#0B6089] focus:ring-2 focus:ring-[#0B6089]/10 placeholder:text-slate-300"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5 block">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#0B6089] focus:ring-2 focus:ring-[#0B6089]/10 placeholder:text-slate-300"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      placeholder="priya@email.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#0B6089] focus:ring-2 focus:ring-[#0B6089]/10 placeholder:text-slate-300"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5 block">
                      Best time to call <span className="text-slate-300 normal-case font-normal">(optional)</span>
                    </label>
                    <select
                      value={form.preferredTime}
                      onChange={(e) => update("preferredTime", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#0B6089] focus:ring-2 focus:ring-[#0B6089]/10 bg-white"
                    >
                      <option value="">Any time</option>
                      <option value="morning">Morning (9am – 12pm)</option>
                      <option value="afternoon">Afternoon (12pm – 4pm)</option>
                      <option value="evening">Evening (4pm – 8pm)</option>
                    </select>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    By submitting, you agree to be contacted by our counsellor. We never share your details with third parties.
                  </p>
                </div>
              )}
            </div>

            {/* ── Footer ── */}
            <div className="px-6 pb-6 flex items-center gap-3">
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Back
                </button>
              )}
              <button
                onClick={step === STEPS.length - 1 ? handleSubmit : () => setStep(step + 1)}
                disabled={!canNext()}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
                  canNext()
                    ? "bg-[#0B6089] hover:bg-[#0B6089] text-white"
                    : "bg-slate-100 text-slate-300 cursor-not-allowed"
                }`}
              >
                {step === STEPS.length - 1 ? "Book my free counselling →" : "Continue →"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Page Component ──────────────────────────────────────────────────────────

export default function IGNOUHomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardProgramme, setWizardProgramme] = useState("");
  const [wizardStartStep, setWizardStartStep] = useState(0);

  const openWizard = () => {
    setWizardProgramme("");
    setWizardStartStep(0);
    setWizardOpen(true);
  };

  const openProgrammeWizard = (programme) => {
    setWizardProgramme(programme);
    setWizardStartStep(1);
    setWizardOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased">
      <Navbar scrolled={scrolled} openWizard={openWizard} />
      <main>
        <HeroSection openWizard={openWizard} />
        <AboutSection openWizard={openWizard} />
        <ProgrammesSection openWizard={openWizard} openProgrammeWizard={openProgrammeWizard} />
        <AdmissionsSection openWizard={openWizard} />
        <ServicesSection openWizard={openWizard} />
        <StrengthsSection />
        <FAQSection />
        <CTASection openWizard={openWizard} />
      </main>
      {wizardOpen && (
        <CounsellingWizard
          onClose={() => {
            setWizardOpen(false);
            setWizardProgramme("");
            setWizardStartStep(0);
          }}
          initialProgramme={wizardProgramme}
          initialStep={wizardStartStep}
        />
      )}
    </div>
  );
}