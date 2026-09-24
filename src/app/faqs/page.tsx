import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS } from "@/content";

export const metadata: Metadata = { title: "FAQs", description: FAQS[0].q };

export default function Faqs() {
  return (
    <PageShell eyebrow="FAQs" title="Frequently Asked Questions">
      <Accordion items={FAQS.map((f) => ({ q: f.q, a: f.a }))} />
    </PageShell>
  );
}
