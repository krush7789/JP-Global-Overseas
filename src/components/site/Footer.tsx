import Link from "next/link";
import { BRAND, CONTACT, FOOTER } from "@/content";
import { channels, mailHref, mapsUrl, telHref, waHref } from "@/lib/contact";

/** S13 footer. Contact channels render only if the client has confirmed them. */
export function Footer() {
  const ch = channels();
  return (
    <footer className="border-t border-white/10 bg-navy-950/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-xl text-white">{BRAND}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            Explore international education, career and overseas opportunities across Russia, Europe and the Middle East.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {FOOTER.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 transition-colors hover:text-brass-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="text-sm not-italic leading-relaxed text-white/70">
          <p>{CONTACT.address}</p>
          <ul className="mt-3 space-y-2">
            {ch.phone && <li><a className="hover:text-brass-400" href={telHref(ch.phone)}>{ch.phone}</a></li>}
            {ch.email && <li><a className="hover:text-brass-400" href={mailHref(ch.email)}>{ch.email}</a></li>}
            {ch.whatsapp && <li><a className="hover:text-brass-400" href={waHref(ch.whatsapp)} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>}
            <li>
              <a className="text-brass-400 hover:text-brass-100" href={mapsUrl()} target="_blank" rel="noopener noreferrer">
                Open in Google Maps
              </a>
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
}
