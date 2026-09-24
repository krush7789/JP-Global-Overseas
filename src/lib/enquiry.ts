import { mailHref, waHref } from "./links.ts";

/** S12 fields. Nothing is submitted to a server — this only builds a prefilled message. */
export type EnquiryInput = {
  fullName: string;
  mobile?: string;
  email?: string;
  interestedIn: string;
  region: string;
  country?: string;
  message?: string;
};

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns an error string, or null when the input is good enough to send. */
export function validateEnquiry(f: EnquiryInput): string | null {
  if (!f.fullName.trim()) return "Please enter your name.";
  if (!f.interestedIn) return "Please choose what you are interested in.";
  if (!f.region) return "Please choose a preferred region.";
  if (f.email?.trim() && !EMAIL_RE.test(f.email.trim())) return "Please enter a valid email address.";
  return null;
}

export const SUBJECT = "Enquiry — JM GLOBAL OVERSEAS";

export function enquiryText(f: EnquiryInput): string {
  const line = (k: string, v?: string) => (v?.trim() ? `${k}: ${v.trim()}` : null);
  return [
    "Hello JM GLOBAL OVERSEAS, I would like to make an enquiry.",
    line("Name", f.fullName),
    line("Mobile", f.mobile),
    line("Email", f.email),
    line("Interested in", f.interestedIn),
    line("Preferred region", f.region),
    line("Preferred country", f.country),
    line("Message", f.message),
  ]
    .filter(Boolean)
    .join("\n");
}

/** Links for the channels the client has confirmed; a channel that isn't configured yields null. */
export function enquiryLinks(f: EnquiryInput, ch: { whatsapp: string | null; email: string | null }) {
  const text = enquiryText(f);
  return {
    whatsapp: ch.whatsapp ? waHref(ch.whatsapp, text) : null,
    email: ch.email ? mailHref(ch.email, SUBJECT, text) : null,
  };
}
