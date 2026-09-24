import { cn } from "@/lib/cn";

/** Readable content surface over the dark 3D scene (keeps text AA-contrast on any frame). */
export function GlassPanel({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "li";
}) {
  return (
    <Tag
      className={cn(
        "rounded-3xl border border-white/10 bg-navy-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-8",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
