import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import { getLegalDoc } from "@/content/legal";
import { formatArticleDate } from "@/lib/date";
import { SITE_URL, breadcrumbSchema, organizationSchema } from "@/lib/schema";

interface LegalProps {
  slug: string;
}

const Legal = ({ slug }: LegalProps) => {
  const doc = getLegalDoc(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!doc) return <Navigate to="/" replace />;

  const url = `${SITE_URL}/${doc.slug}`;

  return (
    <>
      <SEOHead
        title={doc.title}
        description={doc.metaDescription}
        url={url}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: doc.title, url },
          ]),
        ]}
      />
      <Navbar />

      <main className="overflow-hidden">
        <section className="section-padding pt-28 md:pt-36">
          <div className="container-narrow px-4 md:px-6">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground/70">{doc.title}</span>
            </nav>

            <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {doc.title}
            </h1>
            <p className="mb-10 text-sm text-muted-foreground">
              Ultimo aggiornamento: {formatArticleDate(doc.updatedAt)}
            </p>

            <MarkdownRenderer content={doc.content} />

            <div className="mt-12 border-t border-border pt-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary"
              >
                <ArrowLeft className="h-4 w-4" />
                Torna alla home
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Legal;
