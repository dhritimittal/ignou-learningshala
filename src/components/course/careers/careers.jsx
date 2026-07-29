"use client";

import { Download, PhoneCall } from "lucide-react";

export default function Careers({ data, openWizard, type = "course" }) {
  const career = data?.career;

  if (!career || !career.blocks || career.blocks.length === 0) return null;

  return (
    <section id={type === "university" ? "placements" : "careers"} className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
          Career Outcomes
        </span>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          {type === "university" 
            ? "Placements & Career Opportunities" 
            : `Build Your Career After ${data.hero?.name || "Your Course"}`
          }
        </h2>

        {career.blocks.map((block, index) => {
          if (block.type === "text") {
            return (
              <div
                key={index}
                className="mt-3 max-w-3xl leading-8 text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );
          }

          if (block.type === "table") {
            const table = block.tableData;
            if (!table) return null;

            // Handle 2-column table specifically (Snapshot layout)
            if (table.columnsCount === 2) {
              return (
                <div key={index} className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  {table.headers.length === 2 && (
                    <div className="hidden md:grid grid-cols-2 divide-x divide-slate-200 border-b border-slate-200 bg-accent-tint">
                      <div className="grid grid-cols-[240px_1fr] gap-4 px-6 py-4">
                         <div className="font-semibold text-foreground">{table.headers[0]}</div>
                         <div className="font-semibold text-foreground">{table.headers[1]}</div>
                      </div>
                      <div className="grid grid-cols-[240px_1fr] gap-4 px-6 py-4">
                         <div className="font-semibold text-foreground">{table.headers[0]}</div>
                         <div className="font-semibold text-foreground">{table.headers[1]}</div>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-slate-200">
                    {table.rows.map((row, rowIndex) => {
                      const visualRow = Math.floor(rowIndex / 2);
                      const isLastVisualRow = Math.floor((table.rows.length - 1) / 2);
                      const bgClass = visualRow % 2 === 0 ? "bg-white" : "bg-slate-50/50";
                      const borderClass = visualRow < isLastVisualRow ? "border-b border-slate-200" : "";

                      return (
                        <div 
                          key={rowIndex}
                          className={`grid gap-4 px-6 py-5 md:grid-cols-[240px_1fr] ${bgClass} ${borderClass}`}
                        >
                          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                            {row[0]}
                          </div>
                          <div className="text-[15px] leading-7 text-foreground">
                            {row[1]}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }

            // Handle > 2 columns table
            return (
              <div key={index} className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead className="bg-accent-tint">
                    <tr>
                      {table.headers.map((h, i) => (
                        <th key={i} className="px-6 py-4 font-semibold text-foreground border-b border-slate-200">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, i) => (
                      <tr key={i} className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50">
                        {row.map((cell, j) => (
                          <td key={j} className={`px-6 py-4 ${j === 0 ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          return null;
        })}
        
        {/* Call to Actions (CTA / Placement Report) */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-primary-tint via-white to-accent-tint">
          <div className="flex flex-col items-start justify-between gap-8 p-8 lg:flex-row lg:items-center">
              <>
                <div className="max-w-2xl">
                  <span className="inline-flex rounded-full bg-accent-tint px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-dark">
                    Take the Next Step
                  </span>
                  <h3 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
                    Ready to Start Your Journey?
                  </h3>
                  <p className="mt-3 max-w-2xl text-lg leading-7 text-muted-foreground">
                    Speak with an admission expert to get personalized guidance on
                    eligibility, specializations, fees, scholarships and the admission
                    process.
                  </p>
                </div>
                
                <button
                  onClick={openWizard}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-primary-dark whitespace-nowrap"
                >
                  <PhoneCall className="h-5 w-5" />
                  Talk to an Admission Expert
                </button>
              </>
          </div>
        </div>

      </div>
    </section>
  );
}
