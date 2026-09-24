"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { BRAND, HEADER_CTA, NAV } from "@/content";

/** Sticky S13 header. Desktop: inline nav + CTA. Mobile: compact menu with large tap targets. */
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  // Close the menu on navigation and on Escape.
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="whitespace-nowrap font-display text-lg tracking-wide text-white">
          {BRAND.replace(" OVERSEAS", "")} <span className="text-brass-400">OVERSEAS</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {NAV.map((l) => {
            const active = l.href === "/" ? path === "/" : path.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap text-sm transition-colors hover:text-brass-400 ${active ? "text-brass-400" : "text-white/80"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={HEADER_CTA.href} className="px-5 py-2.5">
            {HEADER_CTA.label}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="relative block h-3 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/10 bg-navy-950/95 px-4 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block rounded-xl px-3 py-4 text-base text-white/90 hover:bg-white/5 hover:text-brass-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href={HEADER_CTA.href} className="mt-3 w-full">
            {HEADER_CTA.label}
          </Button>
        </nav>
      )}
    </header>
  );
}
