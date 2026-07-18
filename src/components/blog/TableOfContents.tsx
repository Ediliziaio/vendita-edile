import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/markdown";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

interface TableOfContentsProps {
  items: TocItem[];
}

/** Indice laterale (desktop) con evidenziazione della sezione attiva. */
export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (items.length < 3) return null;

  return (
    <nav aria-label="Indice dell'articolo" className="text-sm">
      <div className="flex items-center gap-2 mb-4 text-foreground font-semibold uppercase tracking-wide text-xs">
        <List className="w-4 h-4 text-secondary" />
        In questo articolo
      </div>
      <ul className="space-y-2 border-l border-border">
        {items.map((item) => (
          <li key={item.id} className={cn(item.level === 3 && "ml-3")}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                "block -ml-px pl-4 border-l-2 border-transparent py-1 transition-colors leading-snug",
                activeId === item.id
                  ? "border-secondary text-secondary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
