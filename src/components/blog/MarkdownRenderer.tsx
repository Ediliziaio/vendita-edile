import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import { slugifyHeading, nodeToText } from "@/lib/markdown";

interface MarkdownRendererProps {
  content: string;
}

/**
 * Rende il Markdown degli articoli con lo stile prose del tema (navy/oro).
 * Gli H2/H3 ricevono un id derivato dal testo per l'ancoraggio dell'indice.
 */
export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert prose-lg max-w-none
      prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-28
      prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:text-foreground
      prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-foreground
      prose-p:text-muted-foreground prose-p:leading-relaxed
      prose-strong:text-foreground prose-strong:font-semibold
      prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
      prose-li:text-muted-foreground prose-li:marker:text-secondary
      prose-ol:text-muted-foreground prose-ul:text-muted-foreground
      prose-blockquote:border-l-secondary prose-blockquote:bg-card/40 prose-blockquote:rounded-r-lg
      prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-foreground/90
      prose-table:text-muted-foreground prose-th:text-foreground prose-th:border-border prose-td:border-border
      prose-hr:border-border">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 id={slugifyHeading(nodeToText(children))}>{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 id={slugifyHeading(nodeToText(children))}>{children}</h3>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-lg border border-border">
              <table className="my-0">{children}</table>
            </div>
          ),
          a: ({ href, children }) => {
            const target = href ?? "";
            // Link interni (rotte o ancore) → navigazione SPA
            if (target.startsWith("/") || target.startsWith("#")) {
              return <Link to={target}>{children}</Link>;
            }
            // Link esterni → nuova scheda in sicurezza
            return (
              <a href={target} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
