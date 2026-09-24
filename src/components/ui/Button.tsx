"use client";

import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/cn";
import { useCoarsePointer, usePrefersReducedMotion } from "@/lib/env";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  /** Subtle cursor-follow. Off on touch and reduced-motion. */
  magnetic?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium tracking-wide whitespace-nowrap transition-[transform,color,background-color,border-color] duration-300 ease-out will-change-transform";
const variants = {
  primary: "bg-brass-500 text-navy-950 hover:bg-brass-400",
  outline: "border border-white/40 text-white hover:border-brass-400 hover:text-brass-400",
};

export function Button({ href, children, variant = "primary", magnetic = false, className }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = usePrefersReducedMotion();
  const coarse = useCoarsePointer();
  const active = magnetic && !reduced && !coarse;

  return (
    <Link
      ref={ref}
      href={href}
      className={cn(base, variants[variant], className)}
      onPointerMove={
        active
          ? (e) => {
              const el = ref.current;
              if (!el) return;
              const r = el.getBoundingClientRect();
              const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
              const y = (e.clientY - (r.top + r.height / 2)) * 0.25;
              el.style.transform = `translate(${x}px, ${y}px)`;
            }
          : undefined
      }
      onPointerLeave={active ? () => { if (ref.current) ref.current.style.transform = ""; } : undefined}
    >
      {children}
    </Link>
  );
}
