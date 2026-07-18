import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import type { Article } from "@/content/types";
import { formatArticleDate } from "@/lib/date";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

/** Card articolo per la griglia del blog. */
export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
      className="group h-full"
    >
      <Link
        to={`/blog/${article.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 transition-all duration-300 hover:border-secondary/60 hover:bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={article.cover}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            {article.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
            <time dateTime={article.publishedAt}>
              {formatArticleDate(article.publishedAt)}
            </time>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.readingTime} min
            </span>
          </div>

          <h3 className="mb-2 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-secondary md:text-xl">
            {article.title}
          </h3>
          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>

          <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-secondary">
            Leggi l'articolo
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
