/** Native <details>: keyboard + screen-reader accessible with zero JS. */
export function Accordion({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-navy-950/70 backdrop-blur-md">
      {items.map((it) => (
        <details key={it.q} className="group px-6 py-5 sm:px-8">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white">
            {it.q}
            <span aria-hidden className="text-xl text-brass-400 transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
