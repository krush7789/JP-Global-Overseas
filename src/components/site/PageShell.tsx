import { GlassPanel } from "@/components/ui/GlassPanel";
import { Eyebrow } from "@/components/ui/Section";

/** Inner-page frame: readable glass content over the parked 3D scene. */
export function PageShell({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-28 pt-16 sm:px-6 sm:pt-24 lg:px-8">
      <GlassPanel as="section" className="sm:p-10">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-2 text-4xl leading-tight text-white sm:text-6xl">{title}</h1>
        {copy && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{copy}</p>}
      </GlassPanel>
      {children && <div className="mt-8 space-y-8">{children}</div>}
    </div>
  );
}

/** Numbered topic grid used by S7 / S8 / S9 (the blueprint's short labels ARE the content). */
export function TopicGrid({ topics }: { topics: readonly string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((t, i) => (
        <li key={t}>
          <GlassPanel as="article" className="flex h-full items-start gap-4 p-5 sm:p-6">
            <span className="font-display text-2xl text-brass-400">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-sm font-medium leading-snug text-white">{t}</p>
          </GlassPanel>
        </li>
      ))}
    </ul>
  );
}
