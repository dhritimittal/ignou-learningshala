"use client";

export default function WizardProgress({
    step,
    totalSteps,
    title,
    subtitle,
}) {
    return (
        <div className="border-b border-border px-8 py-4">

            <h1 className="mt-1 text-xl font-black text-foreground">
                {title}
            </h1>

            <div className="mt-3 flex gap-2">
                {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all ${
                        i <= step
                            ? "bg-primary"
                            : "bg-border"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}