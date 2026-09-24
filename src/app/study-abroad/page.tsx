import type { Metadata } from "next";
import { ShowArcs } from "@/components/scene/ShowArcs";
import { PageShell, TopicGrid } from "@/components/site/PageShell";
import { Button } from "@/components/ui/Button";
import { STUDY_PAGE } from "@/content";

export const metadata: Metadata = { title: "Study Abroad", description: STUDY_PAGE.copy };

export default function StudyAbroad() {
  return (
    <PageShell eyebrow="Study Abroad" title={STUDY_PAGE.headline} copy={STUDY_PAGE.copy}>
      <ShowArcs kind="study" />
      <TopicGrid topics={STUDY_PAGE.topics} />
      <Button href={STUDY_PAGE.cta.href} magnetic>{STUDY_PAGE.cta.label}</Button>
    </PageShell>
  );
}
