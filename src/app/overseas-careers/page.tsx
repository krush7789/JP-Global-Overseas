import type { Metadata } from "next";
import { ShowArcs } from "@/components/scene/ShowArcs";
import { PageShell, TopicGrid } from "@/components/site/PageShell";
import { Button } from "@/components/ui/Button";
import { CAREERS_PAGE } from "@/content";

export const metadata: Metadata = { title: "Overseas Careers", description: CAREERS_PAGE.copy };

export default function OverseasCareers() {
  return (
    <PageShell eyebrow="Overseas Careers" title={CAREERS_PAGE.headline} copy={CAREERS_PAGE.copy}>
      <ShowArcs kind="careers" />
      <TopicGrid topics={CAREERS_PAGE.topics} />
      <Button href={CAREERS_PAGE.cta.href} magnetic>{CAREERS_PAGE.cta.label}</Button>
    </PageShell>
  );
}
