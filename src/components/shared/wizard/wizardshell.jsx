"use client";

import WizardSidebar from "./wizardsidebar";
import WizardProgress from "./wizardprogress";
import { motion } from "framer-motion";

export default function WizardShell({
    children,
    data,
    step,
    totalSteps,
    title,
    subtitle,
    sidebar,
    onClose,
    contentClassName = "",
}) {
    return (
        <>
        {/* Backdrop */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/55 backdrop-blur-sm"
        />

        <motion.div
            initial={{opacity: 0, scale: 0.94, y: 40, }}
            animate={{opacity: 1, scale: 1, y: 0, }}
            exit={{opacity: 0, scale: 0.95, y: 30, }}
            transition={{duration: 0.35, }}
            className="fixed inset-0 z-[101] flex items-end justify-center lg:items-center lg:justify-center p-0 lg:p-6"
            onClick={onClose}
        >
            <div 
                className="relative w-screen max-w-full h-[85vh] lg:h-[88vh] lg:max-w-4xl overflow-hidden rounded-t-3xl rounded-b-none lg:rounded-3xl bg-card shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute hidden lg:flex right-5 top-5 z-50 h-8 w-8 items-center justify-center rounded-full bg-card text-primary border border-border shadow-sm hover:scale-105 transition-transform"
                >
                    ✕
                </button>
                

                <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] h-full">
                    {/* Desktop Sidebar */}
                    <WizardSidebar {...sidebar} />

                    {/* Right Panel */}
                    <div className="bg-background flex flex-col overflow-hidden h-full">

                        <div className="lg:hidden flex justify-center pt-6">
                            <button
                                type="button"
                                onClick={onClose}
                                className="h-1.5 w-14 rounded-full bg-muted-foreground"
                            />
                        </div>

                        <WizardProgress
                            step={step}
                            totalSteps={totalSteps}
                            title={title}
                            subtitle={subtitle}
                        />

                        <div
                            className={`flex-1 overflow-y-auto pt-6 sm:pt-8 px-6 sm:px-8 ${contentClassName}`}
                        >

                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    );
}