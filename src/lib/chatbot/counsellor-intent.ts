// These bypass the KB entirely and open the wizard directly — kept static
// and hand-curated on purpose, this isn't content that should come from the CMS.
export const COUNSELLOR_KEYWORDS = [
  "talk to a counsellor",
  "talk to counsellor",
  "counsellor",
  "counselor",
  "start counselling",
  "start counseling",
  "free counselling",
  "free counseling",
  "speak to someone",
  "speak to an expert",
  "connect me",
  "human help",
  "human agent",
  "real person",
  "get help",
  "book a call",
  "book call",
  "call me",
  "contact",
  "reach out",
  "whatsapp",
];

export function isCounsellorIntent(input: string): boolean {
  const lower = input.toLowerCase().trim();
  return COUNSELLOR_KEYWORDS.some((kw) => lower.includes(kw));
}
