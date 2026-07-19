import { useEffect, useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, CheckCircle2, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getArticleBySlug, getRelatedArticles } from "@/content";
import { extractToc } from "@/lib/markdown";
import { formatArticleDate } from "@/lib/date";
import { trackViewContent } from "@/lib/analytics";
import {
  SITE_URL,
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
} from "@/lib/schema";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (article) {
      trackViewContent({
        content_name: article.title,
        content_category: article.category,
        content_type: "article",
      });
    }
  }, [slug, article]);

  const toc = useMemo(
    () => (article ? extractToc(article.content) : []),
    [article]
  );
  const related = useMemo(
    () => (article ? getRelatedArticles(article.slug, 3) : []),
    [article]
  );

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const url = `${SITE_URL}/blog/${article.slug}`;

  return (
    <>
      <SEOHead
        title={article.metaTitle}
        description={article.metaDescription}
        url={url}
        image={article.cover}
        type="article"
        publishedAt={article.publishedAt}
        updatedAt={article.updatedAt}
        author={article.author.name}
        keywords={[article.keyword, ...article.tags]}
        jsonLd={[
          organizationSchema(),
          articleSchema(article),
          faqSchema(article.faq),
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Blog", url: `${SITE_URL}/blog` },
            { name: article.title, url },
          ]),
        ]}
      />
      <Navbar />

      <main className="overflow-hidden">
        <article>
          {/* Header */}
          <header className="section-padding pb-6 pt-28 md:pt-36">
            <div className="container-narrow px-4 md:px-6">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
              >
                <Link to="/" className="hover:text-secondary">
                  Home
                </Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-secondary">
                  Blog
                </Link>
                <span>/</span>
                <span className="text-foreground/70 line-clamp-1">
                  {article.category}
                </span>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl"
              >
                <span className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {article.category}
                </span>
                <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  {article.title}
                </h1>
                <p className="mb-6 text-lg text-muted-foreground md:text-xl">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    {article.author.avatar && (
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    )}
                    <span className="text-foreground">{article.author.name}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={article.publishedAt}>
                      {formatArticleDate(article.publishedAt)}
                    </time>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {article.readingTime} min di lettura
                  </span>
                </div>
              </motion.div>
            </div>
          </header>

          {/* Cover */}
          <div className="container-narrow px-4 md:px-6">
            <div className="overflow-hidden rounded-2xl md:rounded-3xl">
              <img
                src={article.cover}
                alt={article.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>

          {/* Body + TOC */}
          <div className="container-narrow px-4 md:px-6 py-10 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_260px]">
              <div className="min-w-0">
                {/* Key takeaways (AEO answer-first) */}
                {article.keyTakeaways.length > 0 && (
                  <div className="mb-10 rounded-2xl border border-secondary/30 bg-card/60 p-6 md:p-7">
                    <h2 className="mb-4 text-base font-bold uppercase tracking-wide text-secondary">
                      In sintesi
                    </h2>
                    <ul className="space-y-3">
                      {article.keyTakeaways.map((t, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                          <span className="text-foreground/90">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <MarkdownRenderer content={article.content} />

                {/* Tag */}
                <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* FAQ */}
                {article.faq.length > 0 && (
                  <section className="mt-12" aria-labelledby="faq-heading">
                    <h2
                      id="faq-heading"
                      className="mb-5 text-2xl font-bold text-foreground md:text-3xl"
                    >
                      Domande frequenti
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      {article.faq.map((f, i) => (
                        <AccordionItem key={i} value={`faq-${i}`}>
                          <AccordionTrigger className="text-left text-foreground">
                            {f.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {f.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </section>
                )}

                {/* Author box */}
                <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-6 sm:flex-row sm:items-start">
                  {article.author.avatar && (
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-bold text-foreground">
                      {article.author.name}
                    </p>
                    <p className="mb-2 text-sm text-secondary">
                      {article.author.role}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {article.author.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar TOC (desktop) */}
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <TableOfContents items={toc} />
                </div>
              </aside>
            </div>
          </div>

          {/* CTA */}
          <section className="px-4 md:px-6 pb-16">
            <div className="container-narrow">
              <div className="relative overflow-hidden rounded-3xl border border-secondary/40 bg-card/70 p-8 text-center md:p-12">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.1)_0%,transparent_60%)]" />
                <div className="relative">
                  <h2 className="mx-auto mb-4 max-w-2xl text-2xl font-bold text-foreground md:text-3xl">
                    Vuoi applicare tutto questo alla tua azienda?
                  </h2>
                  <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
                    VENDITA EDILE® è l'affiancamento vendite pensato per chi vende
                    infissi, serramenti e fotovoltaico. Sul campo, non in aula.
                  </p>
                  <Button asChild variant="gold" size="lg">
                    <Link to="/#candidati">Candidati al programma</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section className="px-4 md:px-6 pb-20">
              <div className="container-narrow">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    Continua a leggere
                  </h2>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline"
                  >
                    Tutti gli articoli
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((a, i) => (
                    <ArticleCard key={a.slug} article={a} index={i} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Back link */}
          <div className="container-narrow px-4 md:px-6 pb-16">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
              Torna al blog
            </Link>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
};

export default BlogPost;
