"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ScholarshipModal({
  open,
  onOpenChange,
  scholarship,
}) {
  if (!scholarship) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-[95vw]
          !max-w-4xl
          p-0
          overflow-hidden
        "
      >
        <DialogHeader className="border-b px-8 py-5">
          <DialogTitle>

            {scholarship.title}

          </DialogTitle>
        </DialogHeader>

        <div
          className="
            max-h-[75vh]
            overflow-y-auto
            px-8
            py-6
            space-y-8
          "
        >
          {scholarship.heading && (
            <h3 className="text-xl font-semibold">

              {scholarship.heading}

            </h3>
          )}

          {scholarship.blocks.map((block, index) => {
            if (block.type === "richText") {
              return (
                <div
                  key={index}
                  className="
                    leading-8
                    text-muted-foreground

                    [&_p]:mb-6

                    [&_h2]:mb-4
                    [&_h2]:text-2xl
                    [&_h2]:font-bold
                    [&_h2]:text-foreground

                    [&_h3]:mb-3
                    [&_h3]:text-xl
                    [&_h3]:font-semibold
                    [&_h3]:text-foreground

                    [&_ul]:ml-6
                    [&_ul]:list-disc

                    [&_ol]:ml-6
                    [&_ol]:list-decimal

                    [&_li]:mb-2

                    [&_strong]:font-semibold
                    [&_strong]:text-foreground
                    "
                  dangerouslySetInnerHTML={{
                    __html: block.html,
                  }}
                />
              );
            }
            return (
            <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
                {/* Header */}
                <div className="grid gap-4 px-6 py-4 md:grid-cols-[280px_1fr] divide-x divide-slate-200 border-b border-slate-200 bg-slate-50">
                <div className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    {block.headers?.[0] || "Category"}
                </div>

                <div className="grid gap-4 md:grid-cols-[160px_1fr] divide-x divide-slate-200">
                    <div className="px-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    {block.headers?.[1] || "Scholarship"}
                    </div>

                    <div className="px-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    {block.headers?.[2] || "Eligibility Criteria"}
                    </div>
                </div>
                </div>

                {/* Rows */}
                {block.rows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className={`grid gap-4 px-6 py-5 md:grid-cols-[280px_1fr] divide-x divide-slate-200 ${
                    rowIndex !== block.rows.length - 1
                        ? "border-b border-slate-200"
                        : ""
                    } odd:bg-white even:bg-slate-50/50`}
                >
                    {/* Category */}
                    <div
                    className="text-[15px] font-medium leading-7 text-foreground"
                    dangerouslySetInnerHTML={{
                        __html: row[0],
                    }}
                    />

                    {/* Right Side */}
                    <div className="grid gap-4 md:grid-cols-[160px_1fr] divide-x divide-slate-200">
                    {/* Discount */}
                    <div
                        className="px-4 text-[15px] font-semibold leading-7 text-primary"
                        dangerouslySetInnerHTML={{
                        __html: row[1],
                        }}
                    />

                    {/* Eligibility */}
                    <div
                        className="px-4 text-[15px] leading-7 text-muted-foreground"
                        dangerouslySetInnerHTML={{
                        __html: row[2],
                        }}
                    />
                    </div>
                </div>
                ))}
            </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}