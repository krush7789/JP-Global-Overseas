import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { REGIONS } from "@/content";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore opportunities across Russia, Europe and the Middle East.",
};

export default function Destinations() {
  return (
    <PageShell eyebrow="Destinations" title="Explore Your Destination">
      <ul className="grid gap-5 md:grid-cols-3">
        {REGIONS.map((r) => (
          <li key={r.id}>
            <Link href={r.href} className="block h-full">
              <GlassPanel as="article" className="h-full transition-colors hover:border-brass-400/50">
                <h2 className="text-3xl uppercase tracking-wide text-white">{r.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{r.text}</p>
                <span className="mt-5 inline-block text-sm font-medium text-brass-400">Explore {r.name} →</span>
              </GlassPanel>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
