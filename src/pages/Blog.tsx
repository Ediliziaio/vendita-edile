import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Search, Target, TrendingUp, Lightbulb, Settings, LayoutGrid, FileText } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { BlogCard } from '@/components/blog/BlogCard';
import { LeadConnectorForm } from '@/components/blog/LeadConnectorForm';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { categoryLabels, BlogCategory } from '@/types/blog';
import { siteConfig, generateBreadcrumbSchema } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories: (BlogCategory | 'all')[] = ['all', 'marketing', 'vendite', 'strategie', 'gestione'];

const categoryIcons: Record<BlogCategory | 'all', React.ElementType> = {
  'all': LayoutGrid,
  'marketing': Target,
  'vendite': TrendingUp,
  'strategie': Lightbulb,
  'gestione': Settings
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  
  const { data: allPosts, isLoading } = useBlogPosts(selectedCategory === 'all' ? undefined : selectedCategory);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` }
  ]);

  // Filtra articoli per ricerca
  const filteredPosts = allPosts?.filter(post => 
    searchQuery === '' || 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalArticles = allPosts?.length || 0;

  return (
    <>
      <SEOHead
        title="Blog - Strategie Marketing per l'Edilizia"
        description="Guide pratiche, casi studio e strategie testate per il marketing digitale nel settore edile. Lead generation, SEO locale, social media per imprese edili."
        url={`${siteConfig.url}/blog`}
        jsonLd={breadcrumbSchema}
      />

      <Navbar />

      <main className="min-h-screen bg-background pt-20">
        <BlogHeader totalArticles={totalArticles} />

        {/* Search & Filter Section */}
        <section className="container py-8 border-b border-border">
          {/* Search Bar */}
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cerca articoli..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => {
              const Icon = categoryIcons[category];
              return (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category === 'all' ? 'Tutti gli articoli' : categoryLabels[category]}
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Loading State */}
        {isLoading && (
          <div className="container py-20 flex flex-col items-center justify-center gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
            <p className="text-muted-foreground">Caricamento articoli...</p>
          </div>
        )}


        {/* All Posts */}
        {!isLoading && (
          <section className="container py-12">
            {selectedCategory !== 'all' || searchQuery !== '' ? (
              <div className="flex items-center gap-2 mb-8">
                <span className="text-muted-foreground">
                  {filteredPosts?.length || 0} articoli trovati
                </span>
              </div>
            ) : null}

            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedCategory + searchQuery}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredPosts?.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty State */}
            {(!filteredPosts || filteredPosts.length === 0) && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-muted rounded-2xl flex items-center justify-center">
                  <FileText className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  Nessun articolo trovato
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {searchQuery 
                    ? `Nessun risultato per "${searchQuery}". Prova con un'altra ricerca.`
                    : 'Non ci sono ancora articoli in questa categoria. Torna presto!'}
                </p>
                {(searchQuery || selectedCategory !== 'all') && (
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                    className="mt-6 px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                  >
                    Mostra tutti gli articoli
                  </button>
                )}
              </motion.div>
            )}
          </section>
        )}

        {/* CTA Section */}
        <section className="container py-20">
          <div className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto text-center mb-8">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-6">
                Pronto a crescere?
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Vuoi risultati come quelli dei nostri casi studio?
              </h2>
              <p className="text-muted-foreground">
                Prenota una consulenza gratuita e scopri come possiamo aiutare la tua impresa 
                a crescere nel digitale.
              </p>
            </div>
            <div className="relative z-10 max-w-xl mx-auto">
              <LeadConnectorForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
