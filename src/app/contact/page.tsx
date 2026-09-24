import type { Metadata } from "next";
import { EnquiryPanel } from "@/components/site/EnquiryPanel";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Eyebrow } from "@/components/ui/Section";
import { CONTACT } from "@/content";
import { channels, mailHref, mapsUrl, telHref, waHref } from "@/lib/contact";

export const metadata: Metadata = { title: "Contact Us", description: CONTACT.offices.map((o) => `${o.name}: ${o.address}`).join(" | ") };

export default function Contact() {
  const ch = channels();
  return (
    <PageShell eyebrow="Contact" title="Contact Us">
      <GlassPanel as="section">
        <Eyebrow>Our Offices</Eyebrow>
        <div className="mt-3 grid gap-6 sm:grid-cols-2">
          {CONTACT.offices.map((o) => (
            <address key={o.name} className="text-lg not-italic leading-relaxed text-white">
              <span className="block font-medium text-brass-400">{o.name}</span>
              {o.address}
              <a className="mt-2 block text-sm text-brass-400 hover:text-brass-100" href={mapsUrl(o.address)} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
            </address>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap [&>*:last-child:nth-child(odd)]:col-span-2 sm:[&>*:last-child:nth-child(odd)]:col-span-1">
          {ch.phone && <Button href={telHref(ch.phone)} variant="outline">Call</Button>}
          {ch.whatsapp && <Button href={waHref(ch.whatsapp)} variant="outline">WhatsApp</Button>}
          {ch.email && <Button href={mailHref(ch.email)} variant="outline">Email</Button>}
        </div>
      </GlassPanel>
      {/* Renders nothing until a WhatsApp number or email is confirmed. */}
      <EnquiryPanel />
    </PageShell>
  );
}
