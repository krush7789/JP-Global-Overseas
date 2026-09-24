import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/PageShell";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Eyebrow } from "@/components/ui/Section";
import { FAQS, HEADER_CTA, REGIONS, REGION_SERVICES, REGION_TEMPLATE } from "@/content";

type Params = { region: string };

// Static export: only the three approved regions exist. No per-country pages (S5).
export const dynamicParams = false;
export const generateStaticParams = () => REGIONS.map((r) => ({ region: r.id }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { region } = await params;
  const r = REGIONS.find((x) => x.id === region);
  return r ? { title: `${REGION_TEMPLATE.heroPrefix} ${r.name}`, description: r.text } : {};
}

/**
 * S6 destination template. The blueprint names the blocks (intro, study, career, who can
 * apply, process...) but supplies no body text for them, so only blocks with real text
 * render: the S5 service list, the FAQ (S4.12) and the two CTAs.
 */
export default async function Region({ params }: { params: Promise<Params> }) {
  const { region } = await params;
  const r = REGIONS.find((x) => x.id === region);
  if (!r) notFound();

  return (
    <PageShell eyebrow="Destination" title={`${REGION_TEMPLATE.heroPrefix} ${r.name}`} copy={r.text}>
      <GlassPanel as="section">
        <Eyebrow>What we cover in {r.name}</Eyebrow>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {REGION_SERVICES[r.id].map((s) => (
            <li key={s} className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-white">
              {s}
            </li>
          ))}
        </ul>
      </GlassPanel>

      <Accordion items={FAQS.map((f) => ({ q: f.q, a: f.a }))} />

      <div className="flex flex-wrap gap-4">
        <Button href={HEADER_CTA.href} magnetic>{HEADER_CTA.label}</Button>
        <Button href="/contact/" variant="outline">Contact Us</Button>
      </div>
    </PageShell>
  );
}
