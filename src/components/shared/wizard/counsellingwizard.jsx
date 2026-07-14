"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProgrammeStep from "./steps/programmestep";
import BudgetStep from "./steps/budgetstep";
import QualificationStep from "./steps/qualificationstep";
import SignupForm from "../signupform";

import WizardShell from "@/components/shared/wizard/wizardshell";

const STEPS = [
  {
    id: "programme",
    title: "What would you like to study?",
    subtitle: "Choose the programme you're interested in.",

    sidebar: {
      badge: "Step 1 of 4",
      title: "Find your perfect fit.",
      description:
        "Answer a few quick questions and we'll recommend the best programmes for your goals.",
      bullets: [
        "Personalised recommendations",
        "Compare universities",
        "Free counselling",
      ],
    },
  },

  {
    id: "budget",
    title: "What's your budget?",
    subtitle: "We'll recommend programmes within your budget.",

    sidebar: {
      badge: "Step 2 of 4",
      title: "We'll only show what fits.",
      description:
        "Your budget helps us filter programmes that make sense for you.",
      bullets: [
        "Transparent fees",
        "EMI options",
        "Scholarship guidance",
      ],
    },
  },

  {
    id: "qualification",
    title: "What's your highest qualification?",
    subtitle: "We'll check your eligibility.",

    sidebar: {
      badge: "Step 3 of 4",
      title: "Let's check eligibility.",
      description:
        "We'll make sure every recommendation matches your academic background.",
      bullets: [
        "Instant eligibility check",
        "Admission guidance",
        "No wasted applications",
      ],
    },
  },

  {
    id: "lead",
    title: "Create your account",
    subtitle: "Save your progress and continue anytime.",

    sidebar: {
      badge: "Free Account",
      title: "Almost there!",
      description:
        "Create your free account to continue where you left off.",

      bullets: [
        "Save shortlisted programmes",
        "Compare later",
        "Get personalised guidance",
      ],
    },
  },
];

export default function CounsellingWizard({
    open = true,
    onClose,
}) {
    const [step, setStep] = useState(0);

    const [form, setForm] = useState({
        programme: "",
        budget: "",
        qualification: "",
        name: "",
        phone: "",
        email: "",
        state: "",
        city: "",
    });

    const update = (key, value) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();

        console.log(form);

        // TODO
        // CRM API
    };

    const next = () => {
        if (step < STEPS.length - 1) {
            setStep((prev) => prev + 1);
        }
    };

    const back = () => {
        if (step > 0) {
        setStep((prev) => prev - 1);
        }
    };

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    return (
                <WizardShell
                    step={step}
                    totalSteps={STEPS.length}
                    title={STEPS[step].title}
                    subtitle={STEPS[step].subtitle}
                    sidebar={STEPS[step].sidebar}
                    onClose={onClose}
                    contentClassName={
                        step === 3
                            ? "pb-0"
                            : "pb-8"
                    }
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.25 }}
                            className="flex min-h-full flex-col"
                        >
                            {/* Placeholder Content */}
                            <div className="flex-1">

                                {step === 0 && (
                                    <ProgrammeStep
                                    value={form.programme}
                                    onChange={(value) => update("programme", value)}
                                    onNext={next}
                                    />
                                )}

                                {step === 1 && (
                                    <BudgetStep
                                        value={form.budget}
                                        onChange={(value) => update("budget", value)}
                                        onBack={back}
                                        onNext={next}
                                    />
                                )}

                                {step === 2 && (
                                    <QualificationStep
                                        value={form.qualification}
                                        onChange={(value) => update("qualification", value)}
                                        onBack={back}
                                        onNext={next}
                                    />
                                )}

                                {step === 3 && (
                                    <SignupForm
                                        form={form}
                                        update={update}
                                        onSubmit={submit}
                                    />
                                )}

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </WizardShell>

    );
}