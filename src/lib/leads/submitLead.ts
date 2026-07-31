export async function submitLead(payload: any) {

  const response = await fetch(
    "/api/leads",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(payload),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Lead failed"
    );
  }

  return data;
}