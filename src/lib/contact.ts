import { CONTACT } from "@/content";


export { mailHref, telHref, waHref } from "./links";

export const mapsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

/** Only channels the client has confirmed (non-empty). Empty = the CTA is not rendered anywhere. */
export const channels = () => ({
  phone: CONTACT.phone || null,
  email: CONTACT.email || null,
  whatsapp: CONTACT.whatsapp || null,
});
