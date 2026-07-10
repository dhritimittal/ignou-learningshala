import { useState } from "react";

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

export default function CounsellingWizard({ onClose, initialProgramme = "", initialStep = 0, mode = "questionnaire", service = null }) {
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

  const canNextQuestionnaire = () => {
    if (step === 0) return !!form.programme;
    if (step === 1) return !!form.budget;
    if (step === 2) return !!form.qualification;
    if (step === 3) return form.name && form.phone && form.email;
    return false;
  };

  const canContinueService = () => {
    return form.name && form.phone && form.email;
  };

  const canNext = () => {
    return mode === "service" ? canContinueService() : canNextQuestionnaire();
  };

  const handleSubmit = () => {
    // Replace this with your actual API call / form submission
    console.log("Wizard submission:", form);
    setSubmitted(true);
  };

  const handleServiceContinue = () => {
    // Placeholder for redirect to service URL
    console.log("Continuing to service:", service.name);
    handleSubmit();
  };

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
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full -muted-foreground hover:-muted-foreground -muted-foreground transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted && mode === "service" && service && (
          /* ── Service Success Screen ── */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-[#EBF4F9] rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-[#0B6089]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black -foreground mb-2">Success</h3>
            <p className="-muted-foreground text-sm leading-relaxed mb-6">
              Your details have been received. You can now continue to{" "}
              <strong className="-foreground">{service.name}</strong>
            </p>

            <div className="flex flex-col gap-2">
              <a
                href={service.url || "#"}
                onClick={onClose}
                className="w-full py-3 rounded-xl text-sm font-bold bg-[#0B6089] text-white hover:bg-[#0a4f6a] transition-colors text-center"
              >
                Continue to {service.name} →
              </a>
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl text-sm font-semibold border -muted-foreground -muted-foreground hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {submitted && mode === "questionnaire" && (
          /* ── Questionnaire Success Screen ── */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-[#EBF4F9] rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-[#0B6089]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black -foreground mb-2">You're all set, {form.name.split(" ")[0]}!</h3>
            <p className="-muted-foreground text-sm leading-relaxed mb-6">
              Our counsellor will call you within <strong className="-foreground">24 hours</strong> to discuss{" "}
              <strong className="-foreground">{form.programme}</strong> and answer all your questions — for free.
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
                    <span className="-foreground font-medium text-right">{row.val}</span>
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
              className="mt-4 text-xs text-slate-400 hover:-muted-foreground transition-colors"
            >
              Close
            </button>
          </div>
        )}

        {!submitted && (
          <>
            {/* ── Header ── */}
            {mode === "service" && service ? (
              <div className="bg-[#061122] px-6 pt-7 pb-6">
                <h3 className="text-xl font-black text-white mb-2">Login Required</h3>
                <p className="text-[#7cbdd6]/60 text-sm">Continue to {service.name}</p>
              </div>
            ) : (
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
            )}

            {/* ── Body ── */}
            <div className="px-6 py-6 max-h-[55vh] overflow-y-auto">

              {mode === "service" && service ? (
                /* ── Service Mode Body ── */
                <div className="flex flex-col gap-4">
                  <div className="bg-[#EBF4F9] border border-[#D6EAF3] rounded-2xl p-5 mb-3">
                    <h4 className="text-lg font-black -foreground mb-2">Continue to {service.name}</h4>
                    <p className="text-sm -muted-foreground">
                      We'll verify your details before redirecting you.
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-semibold -muted-foreground uppercase tracking-wide mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border -muted-foreground text-sm -foreground focus:outline-none focus:border-[#0B6089] focus:ring-2 focus:ring-[#0B6089]/10 placeholder:text-slate-300"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold -muted-foreground uppercase tracking-wide mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      placeholder="priya@email.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border -muted-foreground text-sm -foreground focus:outline-none focus:border-[#0B6089] focus:ring-2 focus:ring-[#0B6089]/10 placeholder:text-slate-300"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold -muted-foreground uppercase tracking-wide mb-1.5 block">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border -muted-foreground text-sm -foreground focus:outline-none focus:border-[#0B6089] focus:ring-2 focus:ring-[#0B6089]/10 placeholder:text-slate-300"
                    />
                  </div>
                </div>
              ) : (
                /* ── Questionnaire Mode Body ── */
                <>
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
                          : "bg-white -muted-foreground -foreground hover:border-[#7cbdd6]"
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
                          : "bg-white -muted-foreground -foreground hover:border-[#7cbdd6]"
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
                          : "bg-white -muted-foreground -foreground hover:border-[#7cbdd6]"
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
                    <label className="text-xs font-semibold -muted-foreground uppercase tracking-wide mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border -muted-foreground text-sm -foreground focus:outline-none focus:border-[#0B6089] focus:ring-2 focus:ring-[#0B6089]/10 placeholder:text-slate-300"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold -muted-foreground uppercase tracking-wide mb-1.5 block">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border -muted-foreground text-sm -foreground focus:outline-none focus:border-[#0B6089] focus:ring-2 focus:ring-[#0B6089]/10 placeholder:text-slate-300"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold -muted-foreground uppercase tracking-wide mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      placeholder="priya@email.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border -muted-foreground text-sm -foreground focus:outline-none focus:border-[#0B6089] focus:ring-2 focus:ring-[#0B6089]/10 placeholder:text-slate-300"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold -muted-foreground uppercase tracking-wide mb-1.5 block">
                      Best time to call <span className="text-slate-300 normal-case font-normal">(optional)</span>
                    </label>
                    <select
                      value={form.preferredTime}
                      onChange={(e) => update("preferredTime", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border -muted-foreground text-sm -foreground focus:outline-none focus:border-[#0B6089] focus:ring-2 focus:ring-[#0B6089]/10 bg-white"
                    >
                      <option value="">Any time</option>
                      <option value="morning">Morning (9am – 12pm)</option>
                      <option value="afternoon">Afternoon (12pm – 4pm)</option>
                      <option value="evening">Evening (4pm – 8pm)</option>
                    </select>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    By submitting, you agree to receive admission updates, counselling calls,
                    emails and WhatsApp communication from IGNOU. We never share your details with third parties.
                  </p>
                </div>
              )}
                </>
              )}
            </div>

            {/* ── Footer ── */}
            {mode === "service" ? (
              <div className="px-6 pb-6">
                <button
                  onClick={handleServiceContinue}
                  disabled={!canNext()}
                  className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${
                    canNext()
                      ? "bg-[#0B6089] hover:bg-[#0B6089] text-white"
                      : "-muted-foreground text-slate-300 cursor-not-allowed"
                  }`}
                >
                  Continue →
                </button>
              </div>
            ) : (
              <div className="px-6 pb-6 flex items-center gap-3">
                {step > 0 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-3 rounded-xl border -muted-foreground text-sm font-semibold -muted-foreground hover:bg-slate-50 transition-colors"
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
                      : "-muted-foreground text-slate-300 cursor-not-allowed"
                  }`}
                >
                  {step === STEPS.length - 1 ? "Book my free counselling →" : "Continue →"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}