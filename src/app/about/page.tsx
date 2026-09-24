import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Eyebrow } from "@/components/ui/Section";
import { ABOUT_PAGE } from "@/content";

export const metadata: Metadata = { title: "About Us", description: ABOUT_PAGE.copy };

export default function About() {
  return (
    <PageShell eyebrow="About Us" title={ABOUT_PAGE.headline} copy={ABOUT_PAGE.copy}>
      <div className="grid gap-6 md:grid-cols-2">
        <GlassPanel as="section">
          <Eyebrow>{ABOUT_PAGE.focusTitle}</Eyebrow>
          <p className="mt-3 text-2xl text-white">{ABOUT_PAGE.focus.join(" | ")}</p>
        </GlassPanel>
        <GlassPanel as="section">
          <Eyebrow>{ABOUT_PAGE.approachTitle}</Eyebrow>
          <p className="mt-3 text-2xl text-white">{ABOUT_PAGE.approach.join(" → ")}</p>
        </GlassPanel>
      </div>
    </PageShell>
  );
}
