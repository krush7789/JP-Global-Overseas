/** Pure link builders (no imports) so they can be unit-checked in plain Node. */

/** Digits only — what wa.me and tel: links need. */
export const digits = (s: string) => s.replace(/\D/g, "");

export const telHref = (phone: string) => `tel:+${digits(phone)}`;

export const waHref = (whatsapp: string, text?: string) =>
  `https://wa.me/${digits(whatsapp)}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const mailHref = (email: string, subject?: string, body?: string) => {
  const q = [subject && `subject=${encodeURIComponent(subject)}`, body && `body=${encodeURIComponent(body)}`]
    .filter(Boolean)
    .join("&");
  return `mailto:${email}${q ? `?${q}` : ""}`;
};
