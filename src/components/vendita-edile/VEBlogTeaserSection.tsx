import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { articles } from "@/content";

/**
 * Teaser del blog in homepage: mostra gli ultimi 3 articoli.
 * Crea link interni verso il blog (utile per SEO/GEO) e dà valore
 * al visitatore ancora "freddo" con contenuti pratici prima della CTA.
 */
const VEBlogTeaserSection = () => {
  const latest = articles.slice(0, 3);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.05)_0%,transparent_50%)]" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
              <BookOpen className="h-4 w-4" />
              Risorse gratuite
            </span>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Impara a vendere meglio,{" "}
              <span className="text-gold">a partire da oggi</span>
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Guide pratiche di vendita, marketing e gestione per imprese edili.
              Scritte da chi vende infissi e serramenti ogni giorno.
            </p>
          </div>
          <Button asChild variant="goldOutline" size="lg" className="shrink-0">
            <Link to="/blog">
              Vai al blog
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((a, i) => (
            <ArticleCard key={a.slug} article={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VEBlogTeaserSection;
