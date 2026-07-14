"use client";

export default function WizardSidebar({
    badge,
    title,
    description,
    bullets,
}) {
    return (
        <div className="hidden lg:block relative overflow-hidden bg-primary text-white p-8">
            <div className="relative z-10">
                <img
                    src="/logo.png"
                    className="h-12 mb-10"
                />

                <span className="rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
                    {badge}
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight">
                    {title}
                </h2>

                <p className="mt-5 max-w-md text-white/80 leading-relaxed">
                    {description}
                </p>

                <div className="mt-5 space-y-3 text-sm">
                    {bullets.map((item) => (
                        <div
                            key={item}
                            className="flex items-center gap-3"
                        >
                            ✓ {item}
                        </div>
                    ))}
                </div>

            </div>

            <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-white/10" />

            <div className="absolute right-10 top-20 h-50 w-50 rounded-full bg-white/10" />

        </div>
    );
}