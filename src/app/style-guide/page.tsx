import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Eyebrow, Section } from "@/components/ui/Section";
import { FAQS } from "@/content";

// Internal reference page — not linked, not in the sitemap.
export const metadata: Metadata = { title: "Style Guide", robots: { index: false, follow: false } };

const swatches = ["bg-navy-950", "bg-navy-900", "bg-navy-800", "bg-navy-700", "bg-brass-600", "bg-brass-500", "bg-brass-400", "bg-brass-100"];

export default function StyleGuide() {
  return (
    <Section className="space-y-14">
      <div>
        <Eyebrow>Typography</Eyebrow>
        <h1 className="mt-2 text-5xl">Instrument Serif display</h1>
        <p className="mt-3 max-w-xl text-white/75">Inter body copy. The quick brown fox jumps over the lazy dog.</p>
      </div>

      <div>
        <Eyebrow>Colour tokens</Eyebrow>
        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-8">
          {swatches.map((s) => (
            <div key={s} className={`h-16 rounded-xl border border-white/10 ${s}`} title={s} />
          ))}
        </div>
      </div>

      <div>
        <Eyebrow>Buttons</Eyebrow>
        <div className="mt-4 flex flex-wrap gap-4">
          <Button href="/" magnetic>Primary (magnetic)</Button>
          <Button href="/" variant="outline">Outline</Button>
        </div>
      </div>

      <div>
        <Eyebrow>Glass panel</Eyebrow>
        <GlassPanel className="mt-4 max-w-md">
          <h2 className="text-2xl">Readable over any frame</h2>
          <p className="mt-2 text-sm text-white/75">Blurred navy surface keeps text at AA contrast.</p>
        </GlassPanel>
      </div>

      <div>
        <Eyebrow>Accordion</Eyebrow>
        <div className="mt-4"><Accordion items={FAQS.map((f) => ({ q: f.q, a: f.a }))} /></div>
      </div>
    </Section>
  );
}
