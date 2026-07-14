"use client";

import WizardSidebar from "./wizardsidebar";
import WizardProgress from "./wizardprogress";

export default function WizardShell({
    children,
    step,
    totalSteps,
    title,
    subtitle,
    sidebar,
    onClose,
    contentClassName = "",
}) {
    return (
        <div className="w-screen max-w-full h-[85vh] lg:h-[88vh] lg:max-w-4xl overflow-hidden rounded-t-3xl rounded-b-none lg:rounded-3xl bg-card shadow-2xl">

            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] h-full">
                {/* Desktop Sidebar */}
                <WizardSidebar {...sidebar} />

                {/* Right Panel */}
                <div className="bg-background flex flex-col overflow-hidden h-full">
                    <WizardProgress
                        step={step}
                        totalSteps={totalSteps}
                        title={title}
                        subtitle={subtitle}
                    />

                    <div
                        className={`flex-1 overflow-y-auto px-8 pt-8 ${contentClassName}`}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}