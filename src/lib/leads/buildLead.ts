export function buildLead(form: any, clickSource: string) {
  return {
    // Required fields
    name: form.name,
    email: form.email,
    phone: form.phone,

    // Course details
    course: form.programme ?? "",
    specialization: form.specialization ?? "",

    // Location
    state: form.state ?? "",
    city: form.city ?? "",

    // University
    university: form.university ?? "",

    // Lead source
    lead_source: "Organic",
    sub_source: "LS-WEBSITE",
    click_source: clickSource,

    // Website details
    website_url: window.location.origin,
    lead_url: window.location.href,

    // Traffic
    traffic_type: "organic",

    // UTM fields
    utm_source: "",
    utm_campaign: "",
    utm_adgroup: "",
    utm_ads: "",

    // Arrays
    interested_university: Array.isArray(form.interested_university)
      ? form.interested_university
      : [],

    // Optional fields (must be strings, not null)
    preferred_date: form.preferred_date ?? "",
    preferred_time: form.preferred_time ?? "",
    budget: form.budget ?? "",
    message: form.qualification ?? "",

    // Optional questions field
    questions: form.questions ?? "",
  };
}