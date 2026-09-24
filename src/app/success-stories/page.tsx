import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { HEADER_CTA, TESTIMONIALS, TESTIMONIALS_HEADING } from "@/content";

export const metadata: Metadata = { title: "Success Stories", description: TESTIMONIALS_HEADING };

/** S11 — genuine testimonials only. The list stays empty (and unrendered) until the client supplies real ones. */
export default function SuccessStories() {
  return (
    <PageShell eyebrow="Success Stories" title={TESTIMONIALS_HEADING}>
      {TESTIMONIALS.length > 0 && (
        <ul className="grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <li key={t.name + t.quote}>
              <GlassPanel as="article" className="h-full">
                <blockquote className="text-sm leading-relaxed text-white/85">“{t.quote}”</blockquote>
                <p className="mt-4 text-sm font-medium text-white">{t.name}</p>
                <p className="text-xs text-white/60">{t.destination} · {t.service}</p>
              </GlassPanel>
            </li>
          ))}
        </ul>
      )}
      <Button href={HEADER_CTA.href} magnetic>{HEADER_CTA.label}</Button>
    </PageShell>
  );
}
