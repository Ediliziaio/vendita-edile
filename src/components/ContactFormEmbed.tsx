import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { trackContact } from "@/lib/analytics";

interface ContactFormEmbedProps {
  className?: string;
  /** Altezza dell'iframe in px (default 640). */
  height?: number;
}

/**
 * Form di richiesta contatto embeddato (Form Builder EdiliziaInCloud).
 * L'URL è centralizzato in siteConfig.contactFormEmbedUrl.
 * Traccia un evento Meta "Contact" quando il form entra in viewport (una volta).
 */
export function ContactFormEmbed({ className, height = 640 }: ContactFormEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            trackContact({ content_name: "Form richiesta contatto" });
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-[640px] overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-black/30",
        className
      )}
    >
      <iframe
        src={siteConfig.contactFormEmbedUrl}
        title="Richiedi informazioni"
        loading="lazy"
        className="block w-full"
        style={{ border: 0, height }}
      />
    </div>
  );
}
