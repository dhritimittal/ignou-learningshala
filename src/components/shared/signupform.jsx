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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const [errors, setErrors] = useState({});

  // Wraps `update` so editing a field clears its error immediately,
  // instead of the message sitting there until the next submit attempt.
  function setField(field, value) {
    update(field, value);
    setErrors((prev) => {
      if (!(field in prev)) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function handlePhoneChange(e) {
    // Only digits, capped at 10 — invalid characters never make it into state.
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    setField("phone", digitsOnly);
  }

  function validate() {
    const nextErrors = {};

    if (!form.name?.trim()) {
      nextErrors.name = "Name is required";
    }

    if (!form.email?.trim()) {
      nextErrors.email = "Email is required";
    } else if (!EMAIL_RE.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address";
    }

    if (!form.phone) {
      nextErrors.phone = "Phone number is required";
    } else if (form.phone.length !== 10) {
      nextErrors.phone = "Enter a 10-digit phone number";
    }

    if (!form.state) {
      nextErrors.state = "Select your state";
    }

    if (!form.city) {
      nextErrors.city = "Select your city";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      onSubmit(e);
    }
  }

  function fieldClasses(field) {
    return errors[field]
      ? "border-red-400 focus:border-red-400"
      : "border-border focus:border-primary";
  }

  
  function chooseLocation(location) {
    setSelectedLocation(location);
    switch (location) {
      case "Delhi NCR":
        setField("state", "Delhi");
        setField("city", "New Delhi");
        break;

      case "Mumbai":
        setField("state", "Maharashtra");
        setField("city", "Mumbai");
        break;

      case "Bangalore":
        setField("state", "Karnataka");
        setField("city", "Bangalore");
        break;

      case "Hyderabad":
        setField("state", "Telangana");
        setField("city", "Hyderabad");
        break;

      case "Chennai":
        setField("state", "TamilNadu");
        setField("city", "Chennai");
        break;
    }
  }


  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

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
            onChange={(e) => setField("name", e.target.value)}
            placeholder="Your full name"
            className={`w-full rounded-xl border bg-card px-4 py-3 outline-none ${fieldClasses("name")}`}
          />

          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}

        </div>

        <div>

          <label className="block mb-1 text-[13px] font-semibold">
            Email<span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            placeholder="your@email.com"
            className={`w-full rounded-xl border bg-card px-4 py-3 outline-none ${fieldClasses("email")}`}
          />

          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}

        </div>

      </div>

      {/* Phone */}

      <div>

        <label className="block mb-1 text-[13px] font-semibold">
          Phone<span className="text-red-500">*</span>
        </label>

        <input
          type="tel"
          inputMode="numeric"
          maxLength={10}
          value={form.phone}
          onChange={handlePhoneChange}
          placeholder="10-digit mobile number"
          className={`w-full rounded-xl border bg-card px-4 py-3 outline-none ${fieldClasses("phone")}`}
        />

        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
        )}

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
              setField("state", e.target.value);
              setField("city", "");
            }}
            className={`w-full rounded-xl border bg-card px-4 py-3 ${fieldClasses("state")}`}
          >
            <option value="">Select your state</option>

            {Object.keys(STATES).map((state) => (
              <option key={state}>{state}</option>
            ))}

          </select>

          {errors.state && (
            <p className="mt-1 text-xs text-red-500">{errors.state}</p>
          )}

        </div>

        <div>

          <label className="block mb-1 text-[13px] font-semibold">
            City<span className="text-red-500">*</span>
          </label>

          <select
            value={form.city}
            onChange={(e) => setField("city", e.target.value)}
            disabled={!form.state}
            className={`w-full rounded-xl border bg-card px-4 py-3 ${fieldClasses("city")}`}
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

          {errors.city && (
            <p className="mt-1 text-xs text-red-500">{errors.city}</p>
          )}

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