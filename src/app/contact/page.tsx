import type { Metadata } from "next";
import { EnquiryPanel } from "@/components/site/EnquiryPanel";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Eyebrow } from "@/components/ui/Section";
import { CONTACT } from "@/content";
import { channels, mailHref, mapsUrl, telHref, waHref } from "@/lib/contact";

export const metadata: Metadata = { title: "Contact Us", description: CONTACT.address };

export default function Contact() {
  const ch = channels();
  return (
    <PageShell eyebrow="Contact" title="Contact Us">
      <GlassPanel as="section">
        <Eyebrow>Office</Eyebrow>
        <address className="mt-3 text-lg not-italic leading-relaxed text-white">{CONTACT.address}</address>
        <div className="mt-6 flex flex-wrap gap-3">
          {ch.phone && <Button href={telHref(ch.phone)} variant="outline">Call</Button>}
          {ch.whatsapp && <Button href={waHref(ch.whatsapp)} variant="outline">WhatsApp</Button>}
          {ch.email && <Button href={mailHref(ch.email)} variant="outline">Email</Button>}
          <Button href={mapsUrl()} variant="outline">Open in Google Maps</Button>
        </div>
      </GlassPanel>
      {/* Renders nothing until a WhatsApp number or email is confirmed. */}
      <EnquiryPanel />
    </PageShell>
  );
}
