import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface ContactFormEmbedProps {
  className?: string;
  /** Altezza dell'iframe in px (default 640). */
  height?: number;
}

/**
 * Form di richiesta contatto embeddato (Form Builder EdiliziaInCloud).
 * L'URL è centralizzato in siteConfig.contactFormEmbedUrl.
 */
export function ContactFormEmbed({ className, height = 640 }: ContactFormEmbedProps) {
  return (
    <div
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
