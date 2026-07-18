import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404: rotta inesistente richiesta:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHead title="Pagina non trovata (404)" noindex />
      <Navbar />

      <main className="overflow-hidden">
        <section className="section-padding relative flex min-h-[70vh] items-center pt-28 md:pt-36">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.1)_0%,transparent_55%)]" />
          <div className="container-narrow relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gradient text-7xl font-black md:text-9xl"
            >
              404
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto mt-4 max-w-2xl text-2xl font-bold text-foreground md:text-4xl"
            >
              Questa pagina non esiste (o è stata spostata)
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-4 max-w-xl text-muted-foreground"
            >
              Nessun problema. Torna alla home o dai un'occhiata alle nostre
              guide sulla vendita in edilizia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button asChild variant="gold" size="lg">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Torna alla home
                </Link>
              </Button>
              <Button asChild variant="goldOutline" size="lg">
                <Link to="/blog">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Vai al blog
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default NotFound;
