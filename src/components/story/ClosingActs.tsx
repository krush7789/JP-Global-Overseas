"use client";

import { useRef } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";
import { CONTACT, FAQS, FINAL_CTA, TESTIMONIALS, TESTIMONIALS_HEADING } from "@/content";
import { channels, mailHref, mapsUrl, telHref, waHref } from "@/lib/contact";
import { useAct } from "@/lib/scroll/useAct";

/** S4.11 — genuine testimonials only; renders nothing until the client supplies real ones. */
function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  useAct(ref, { pose: "wide" });
  if (TESTIMONIALS.length === 0) return null;
  return (
    <section id="stories" ref={ref} className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <Eyebrow>Success Stories</Eyebrow>
        <h2 className="mt-2 text-4xl text-white sm:text-5xl">{TESTIMONIALS_HEADING}</h2>
      </Reveal>
      <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <li key={t.name + t.quote}>
            <GlassPanel as="article" className="h-full">
              <blockquote className="text-sm leading-relaxed text-white/80">“{t.quote}”</blockquote>
              <p className="mt-4 text-sm font-medium text-white">{t.name}</p>
              <p className="text-xs text-white/60">{t.destination} · {t.service}</p>
            </GlassPanel>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** S4.12 — the scene dims into the background; the accordion is plain accessible HTML. */
function Faq() {
  const ref = useRef<HTMLElement>(null);
  useAct(ref, { pose: "wide" });
  return (
    <section id="faq" ref={ref} className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mb-8 mt-2 text-4xl text-white sm:text-5xl">Frequently Asked Questions</h2>
      </Reveal>
      <Reveal>
        <Accordion items={FAQS.map((f) => ({ q: f.q, a: f.a }))} />
      </Reveal>
    </section>
  );
}

/** S4.13 — camera pulls back to the whole globe. */
function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  useAct(ref, { pose: "final" });
  return (
    <section ref={ref} className="mx-auto flex min-h-[80svh] max-w-4xl items-center px-4 py-24 text-center sm:px-6">
      <Reveal className="w-full">
        <h2 className="text-4xl leading-tight text-white [text-shadow:0_2px_30px_rgba(6,15,31,0.9)] sm:text-6xl">
          {FINAL_CTA.headline}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/80 sm:text-lg">{FINAL_CTA.text}</p>
        <div className="mt-10 flex justify-center">
          <Button href={FINAL_CTA.cta.href} magnetic className="px-9 py-4 text-base">
            {FINAL_CTA.cta.label}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

/** S4.14 — address always; phone/email/WhatsApp only if confirmed; map is a plain link, not an embed. */
function ContactBlock() {
  const ref = useRef<HTMLElement>(null);
  useAct(ref, { pose: "wide" });
  const ch = channels();
  return (
    <section id="contact" ref={ref} className="mx-auto max-w-4xl px-4 pb-28 pt-8 sm:px-6 lg:px-8">
      <Reveal>
        <GlassPanel>
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
      </Reveal>
    </section>
  );
}

export function ClosingActs() {
  return (
    <>
      <Testimonials />
      <Faq />
      <FinalCta />
      <ContactBlock />
    </>
  );
}
