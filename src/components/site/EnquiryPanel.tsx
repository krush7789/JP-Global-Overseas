"use client";

import { useState } from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ENQUIRY } from "@/content";
import { channels } from "@/lib/contact";
import { enquiryLinks, validateEnquiry, type EnquiryInput } from "@/lib/enquiry";

const field =
  "w-full rounded-xl border border-white/15 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brass-400 focus:outline-none";
const empty: EnquiryInput = { fullName: "", mobile: "", email: "", interestedIn: "", region: "", country: "", message: "" };

/**
 * S12 enquiry panel — with NO backend. It never submits anything: it builds a prefilled
 * WhatsApp / email message from the visitor's choices and opens their own app.
 * Renders nothing until the client has confirmed at least one channel.
 */
export function EnquiryPanel({ defaults }: { defaults?: Partial<EnquiryInput> }) {
  const ch = channels();
  const [f, setF] = useState<EnquiryInput>({ ...empty, ...defaults });
  const [error, setError] = useState<string | null>(null);

  if (!ch.whatsapp && !ch.email) return null;

  const links = enquiryLinks(f, ch);
  const set = (k: keyof EnquiryInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((s) => ({ ...s, [k]: e.target.value }));

  // Validate on click; if invalid keep the visitor here and say why.
  const guard = (e: React.MouseEvent) => {
    const err = validateEnquiry(f);
    setError(err);
    if (err) e.preventDefault();
  };
  const primary = links.whatsapp ?? links.email!;

  return (
    <GlassPanel as="section">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()} noValidate aria-label="Enquiry">
        <input className={field} placeholder="Full Name" value={f.fullName} onChange={set("fullName")} autoComplete="name" required />
        <div className="grid gap-4 sm:grid-cols-2">
          <input className={field} placeholder="Mobile Number" value={f.mobile} onChange={set("mobile")} autoComplete="tel" inputMode="tel" />
          <input className={field} placeholder="Email" value={f.email} onChange={set("email")} autoComplete="email" type="email" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <select className={field} value={f.interestedIn} onChange={set("interestedIn")} aria-label="Interested In" required>
            <option value="">Interested In…</option>
            {ENQUIRY.interestedIn.map((o) => <option key={o}>{o}</option>)}
          </select>
          <select className={field} value={f.region} onChange={set("region")} aria-label="Preferred Region" required>
            <option value="">Preferred Region…</option>
            {ENQUIRY.regions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <input className={field} placeholder="Preferred Country (optional)" value={f.country} onChange={set("country")} />
        <textarea className={field} rows={4} placeholder="Message" value={f.message} onChange={set("message")} />

        {error && <p role="alert" className="text-sm text-red-300">{error}</p>}

        <div className="flex flex-wrap gap-3">
          <a
            href={primary}
            target="_blank"
            rel="noopener noreferrer"
            onClick={guard}
            className="inline-flex items-center justify-center rounded-full bg-brass-500 px-7 py-3.5 text-sm font-medium text-navy-950 transition-colors hover:bg-brass-400"
          >
            {ENQUIRY.cta}
          </a>
          {links.whatsapp && links.email && (
            <a href={links.email} onClick={guard} className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium text-white hover:border-brass-400 hover:text-brass-400">
              Send by email instead
            </a>
          )}
        </div>
        <p className="text-xs text-white/50">
          This opens {links.whatsapp ? "WhatsApp" : "your email app"} with your details prefilled. Nothing is stored on this website.
        </p>
      </form>
    </GlassPanel>
  );
}
