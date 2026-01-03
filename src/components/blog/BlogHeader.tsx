import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface BlogHeaderProps {
  totalArticles?: number;
}

export function BlogHeader({ totalArticles }: BlogHeaderProps) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full mb-6"
          >
            <BookOpen className="w-4 h-4" />
            Blog & Risorse
            {typeof totalArticles === 'number' && totalArticles > 0 && (
              <span className="ml-1 px-2 py-0.5 bg-primary/20 rounded-full text-xs">
                {totalArticles} articoli
              </span>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6"
          >
            Strategie di Marketing per l'Edilizia
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Guide pratiche, casi studio e strategie testate per far crescere la tua impresa edile, 
            showroom o attività di serramenti nel mondo digitale.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
