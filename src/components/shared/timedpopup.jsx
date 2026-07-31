"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SignupForm from "./signupform";
import { buildLead } from "@/lib/leads/buildLead";
import { submitLead } from "@/lib/leads/submitLead";

const STORAGE_KEY = "popup-last-shown";

export default function TimedPopup({data}) {
    const [open, setOpen] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        state: "",
        city: "",
    });

    const update = (key, value) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const submit = async (e) => {
        e.preventDefault();

        try {

            const payload = buildLead(
                {
                    ...form,

                    programme: "Online MBA",

                    university: data.name,
                },

                "AutoPopup"
            );

            const result = await submitLead(payload);

            console.log("Lead submitted", result);

            setOpen(false);

            setForm({
                name: "",
                email: "",
                phone: "",
                state: "",
                city: "",
            });

        } catch (err) {

            console.error("Lead submission failed", err);

            alert("Something went wrong. Please try again.");

        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
            localStorage.setItem(STORAGE_KEY, Date.now().toString());
        }, 20000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!open) return;

        const close = (e) => {
            if (e.key === "Escape") setOpen(false);
        };

        window.addEventListener("keydown", close);

        return () => window.removeEventListener("keydown", close);
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/55 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.94, y: 40, }}
                        animate={{opacity: 1, scale: 1, y: 0, }}
                        exit={{opacity: 0, scale: 0.95, y: 30, }}
                        transition={{duration: 0.35, }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-[101] flex items-end justify-center lg:items-center lg:justify-center p-0 lg:p-6"
                    >
                        <div 
                            className="relative w-screen max-w-full h-[85vh] lg:h-[88vh] lg:max-w-4xl overflow-hidden rounded-t-3xl rounded-b-none lg:rounded-3xl bg-card shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute hidden lg:flex right-5 top-5 z-50 h-8 w-8 items-center justify-center rounded-full bg-card text-primary border border-border shadow-sm hover:scale-105 transition-transform"
                            >
                                ✕
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] h-full">

                                {/* Left */}
                                <div className="hidden lg:block relative overflow-hidden bg-primary text-white p-8">
                                    <div className="relative z-10">
                                        <img
                                            src={data.logo}
                                            className="h-12 mb-10"
                                        />

                                        <span className="rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
                                            Free Counselling
                                        </span>

                                        <h2 className="mt-5 text-3xl font-black leading-tight">
                                            Find your perfect fit.
                                        </h2>

                                        <p className="mt-5 max-w-md text-white/80 leading-relaxed">
                                            Answer a few quick questions and we'll help you choose the right course.
                                        </p>

                                        <div className="mt-5 space-y-3 text-sm">

                                            <div>✓ Eligibility check</div>
                                            <div>✓ Admission guidance</div>
                                            <div>✓ Free expert counselling</div>

                                        </div>

                                    </div>

                                    <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-white/10" />

                                    <div className="absolute right-10 top-20 h-50 w-50 rounded-full bg-white/10" />

                                </div>


                                {/* Right */}
                                <div className="bg-background flex flex-col overflow-hidden h-full">
                                    <div className="lg:hidden flex justify-center pt-6">
                                        <button
                                            type="button"
                                            onClick={() => setOpen(false)}
                                            className="h-1.5 w-14 rounded-full bg-muted-foreground"
                                        />
                                    </div>

                                    <div className="flex-1 overflow-y-auto pt-6 sm:pt-8 px-6 sm:px-8">
                                        <SignupForm
                                            form={form}
                                            update={update}
                                            onSubmit={submit}
                                            context="timed"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}