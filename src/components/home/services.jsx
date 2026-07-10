"use client";

import { useState, useEffect, useRef } from "react";
import { ONLINE_SERVICES } from "@/data/home/services";
import AccentDivider from "@/components/ui/accentdivider";
import Badge from "@/components/ui/badge";

export default function ServicesSection({ openServiceWizard }) {
  const selectedServices = [
    ONLINE_SERVICES.find(s => s.name === "Samarth Portal"),
    ONLINE_SERVICES.find(s => s.name === "Gyan Darshan"),
    ONLINE_SERVICES.find(s => s.name === "Gyan Vani"),
    ONLINE_SERVICES.find(s => s.name === "eGyankosh"),
    ONLINE_SERVICES.find(s => s.name === "IGNOU Library"),
  ].filter(Boolean);

  return (
    <section id="services" className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AccentDivider />
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-3">Online Services & Resources</h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            A full ecosystem of digital tools — from a national digital library to educational TV channels — available
            to every IGNOU student.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-max">
          {selectedServices.map((svc, idx) => (
            <div
              key={svc.name}
              onClick={() => openServiceWizard(svc)}
              className={`group bg-white rounded-2xl border border-muted-foreground hover:border-primary/40 hover:shadow-md transition-all duration-200 ${
                idx === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2 p-12" : "p-6"
              }`}
            >
              <div className={`flex ${idx === 0 ? "flex-col h-full" : "flex-row"} items-start ${idx === 0 ? "gap-6" : "gap-4"}`}>
                <div className={`rounded-xl bg-secondary border border-primary/15 flex items-center justify-center flex-shrink-0 ${
                  idx === 0 ? "w-24 h-24 text-6xl" : "w-11 h-11 text-xl"
                }`}>
                  {svc.icon}
                </div>
                <div className={idx === 0 ? "flex-1" : ""}>
                  <h3 className={`font-bold ${idx === 0 ? "text-3xl" : "text-sm"} text-foreground mb-3 group-hover:text-primary transition-colors`}>
                    {svc.name}
                  </h3>
                  <p className={`${idx === 0 ? "text-base" : "text-xs"} text-muted-foreground leading-relaxed`}>{svc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}