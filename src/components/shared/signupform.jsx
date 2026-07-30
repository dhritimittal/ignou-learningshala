"use client";

import { useMemo, useState } from "react";

const QUICK_LOCATIONS = [
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
];

const STATES = {
  Delhi: ["New Delhi"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Karnataka: ["Bangalore", "Mysore"],
  Telangana: ["Hyderabad"],
  TamilNadu: ["Chennai", "Coimbatore"],
};

export default function SignupForm({
    form,
    update,
    onSubmit,
    context = "wizard",
  }) {

  const cities = useMemo(() => {
    return STATES[form.state] || [];
  }, [form.state]);
  const [selectedLocation, setSelectedLocation] = useState("");

  
  function chooseLocation(location) {
    setSelectedLocation(location);
    switch (location) {
      case "Delhi NCR":
        update("state", "Delhi");
        update("city", "New Delhi");
        break;

      case "Mumbai":
        update("state", "Maharashtra");
        update("city", "Mumbai");
        break;

      case "Bangalore":
        update("state", "Karnataka");
        update("city", "Bangalore");
        break;

      case "Hyderabad":
        update("state", "Telangana");
        update("city", "Hyderabad");
        break;

      case "Chennai":
        update("state", "TamilNadu");
        update("city", "Chennai");
        break;
    }
  }


  return (
    <form onSubmit={onSubmit} className="space-y-5">

      <div className="lg:hidden">

        {context === "wizard" ? <div className="hidden" /> : 
          <h2 className="text-2xl font-black text-foreground">
          Find your perfect fit
          </h2>
        }

        {context === "wizard" ? <div className="hidden"/> :
          <p className="mt-2 text-sm text-muted-foreground">
            Answer a few quick questions and we'll help you choose the right course.
          </p>
        }

      </div>
      {/* Name + Email */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>

          <label className="block mb-1 text-[13px] font-semibold">
            Name<span className="text-red-500">*</span>
          </label>

          <input
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
            className="w-full rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-primary"
          />

        </div>

        <div>

          <label className="block mb-1 text-[13px] font-semibold">
            Email<span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="your@email.com"
            className="w-full rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-primary"
          />

        </div>

      </div>

      {/* Phone */}

      <div>

        <label className="block mb-1 text-[13px] font-semibold">
          Phone<span className="text-red-500">*</span>
        </label>

        <input
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="+91 XXXXX XXXXX"
          className="w-full rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-primary"
        />

      </div>

      {/* Quick Locations */}

      <div>

        <p className="mb-3 text-sm font-semibold">
          Quick Locations
        </p>

        <div
            className="
            flex
            gap-2

            overflow-x-auto
            scrollbar-hide

            [-ms-overflow-style:none]
            [scrollbar-width:none]

            pb-2

            whitespace-nowrap
            "
        >

          {QUICK_LOCATIONS.map((location) => (
            <button
              key={location}
              type="button"
              onClick={() => chooseLocation(location)}
              className={`
              rounded-full border px-3 py-2 text-xs font-medium transition-colors
              ${
                selectedLocation === location
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary hover:bg-secondary"
              }
            `}
            >
              {location}
            </button>
          ))}

        </div>

      </div>

      {/* State + City */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>

          <label className="block mb-1 text-[13px] font-semibold">
            State<span className="text-red-500">*</span>
          </label>

          <select
            value={form.state}
            onChange={(e) => {
              update("state", e.target.value);
              update("city", "");
            }}
            className="w-full rounded-xl border border-border bg-card px-4 py-3"
          >
            <option value="">Select your state</option>

            {Object.keys(STATES).map((state) => (
              <option key={state}>{state}</option>
            ))}

          </select>

        </div>

        <div>

          <label className="block mb-1 text-[13px] font-semibold">
            City<span className="text-red-500">*</span>
          </label>

          <select
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
            disabled={!form.state}
            className="w-full rounded-xl border border-border bg-card px-4 py-3"
          >
            <option value="">
              {form.state
                ? "Select your city"
                : "Select your state first"}
            </option>

            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}

          </select>

        </div>

      </div>

      {/* Terms */}

      <label className="flex items-start gap-3">

        <span className="text-sm text-muted-foreground">
          By clicking on Continue, you agree to receive admission updates and counselling
          communication.
        </span>

      </label>

      {/* CTA */}
      <div className="sticky bottom-0 bg-background p-4 z-20 px-6">
        <button
          type="submit"
          className="w-full rounded-xl bg-primary py-3 font-semibold text-white transition hover:opacity-90"
        >
          Continue →
        </button>
      </div>

      

    </form>
  );
}