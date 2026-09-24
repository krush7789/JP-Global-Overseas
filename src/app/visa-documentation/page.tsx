import type { Metadata } from "next";
import { PageShell, TopicGrid } from "@/components/site/PageShell";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { HEADER_CTA, VISA_PAGE } from "@/content";

export const metadata: Metadata = { title: "Visa & Documentation", description: VISA_PAGE.intro };

export default function VisaDocumentation() {
  return (
    <PageShell eyebrow="Visa & Documentation" title={VISA_PAGE.headline} copy={VISA_PAGE.intro}>
      <TopicGrid topics={VISA_PAGE.topics} />
      {/* S9 mandatory wording: the deciding authority is the government, not JM Global. */}
      <GlassPanel as="section" className="border-brass-400/30">
        <p className="text-sm font-medium leading-relaxed text-brass-100">{VISA_PAGE.disclaimer}</p>
      </GlassPanel>
      <Button href={HEADER_CTA.href} magnetic>{HEADER_CTA.label}</Button>
    </PageShell>
  );
}
