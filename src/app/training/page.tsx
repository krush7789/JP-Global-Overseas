import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { HEADER_CTA, TRAINING_PAGE, TRAINING_PROGRAMS } from "@/content";

export const metadata: Metadata = { title: "Training & Skill Development", description: TRAINING_PAGE.headline };

/** S10 — only currently offered programmes are shown. None supplied yet, so none render. */
export default function Training() {
  return (
    <PageShell eyebrow="Training" title={TRAINING_PAGE.headline}>
      {TRAINING_PROGRAMS.length > 0 && (
        <ul className="grid gap-5 md:grid-cols-2">
          {TRAINING_PROGRAMS.map((p) => (
            <li key={p.name}>
              <GlassPanel as="article" className="h-full">
                <h2 className="text-2xl text-white">{p.name}</h2>
                <dl className="mt-4 space-y-2 text-sm text-white/80">
                  <div><dt className="inline font-medium text-white">Duration: </dt><dd className="inline">{p.duration}</dd></div>
                  <div><dt className="inline font-medium text-white">Mode: </dt><dd className="inline">{p.mode}</dd></div>
                  <div><dt className="inline font-medium text-white">Who it is for: </dt><dd className="inline">{p.audience}</dd></div>
                  <div><dt className="inline font-medium text-white">Key outcomes: </dt><dd className="inline">{p.outcomes}</dd></div>
                </dl>
              </GlassPanel>
            </li>
          ))}
        </ul>
      )}
      <Button href={HEADER_CTA.href} magnetic>{HEADER_CTA.label}</Button>
    </PageShell>
  );
}
