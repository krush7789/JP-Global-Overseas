import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/PageShell";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { LEGAL } from "@/content";

type Params = { legal: string };

// The four S16 legal routes. Only these slugs exist in the static export.
export const dynamicParams = false;
export const generateStaticParams = () => LEGAL.map((l) => ({ legal: l.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { legal } = await params;
  const page = LEGAL.find((l) => l.slug === legal);
  return page ? { title: page.title } : {};
}

/** Title only until the client supplies the real text (set `body` in content — blank line = new paragraph). */
export default async function Legal({ params }: { params: Promise<Params> }) {
  const { legal } = await params;
  const page = LEGAL.find((l) => l.slug === legal);
  if (!page) notFound();

  return (
    <PageShell title={page.title}>
      {page.body && (
        <GlassPanel as="section" className="space-y-4 text-sm leading-relaxed text-white/80">
          {page.body.split(/\n{2,}/).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </GlassPanel>
      )}
    </PageShell>
  );
}
