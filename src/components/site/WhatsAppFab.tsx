import { channels, waHref } from "@/lib/contact";

/** Floating WhatsApp shortcut on every page. Renders only when a WhatsApp number is set. */
export function WhatsAppFab() {
  const { whatsapp } = channels();
  if (!whatsapp) return null;
  return (
    <a
      href={waHref(whatsapp, "Hello JM Global Overseas, I would like to know more.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 focus-visible:outline-offset-4"
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.22-.36a9.44 9.44 0 0 1-1.45-5.04c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.47 9.46zM20.1 3.9A11.34 11.34 0 0 0 12.04.5C5.78.5.69 5.59.69 11.85c0 2 .52 3.95 1.52 5.67L.6 23.5l6.13-1.61a11.33 11.33 0 0 0 5.31 1.35h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.3-8z" />
      </svg>
    </a>
  );
}
