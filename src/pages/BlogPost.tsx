import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter, Facebook, Loader2, User } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BlogCard } from '@/components/blog/BlogCard';
import { ArticleContent } from '@/components/blog/ArticleContent';
import { LeadConnectorForm } from '@/components/blog/LeadConnectorForm';
import { useBlogPost, useRelatedPosts } from '@/hooks/useBlogPosts';
import { categoryLabels, categoryColors, BlogCategory } from '@/types/blog';
import { siteConfig, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { resolveBlogImageUrl } from '@/lib/blog-images';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || '');
  const { data: relatedPosts } = useRelatedPosts(
    post?.id || '', 
    post?.category || '', 
    post?.tags || [],
    3
  );

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background pt-20 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </main>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return <Navigate to="/blog" replace />;
  }

  const category = post.category as BlogCategory;
  const postUrl = `${siteConfig.url}/blog/${post.slug}`;
  const coverImageUrl = resolveBlogImageUrl(post.cover_image_url) || `${siteConfig.url}/og-image.jpg`;

  const articleSchema = generateArticleSchema({
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    image: coverImageUrl,
    publishedAt: post.published_at || post.created_at,
    updatedAt: post.updated_at || undefined,
    author: post.author?.name || 'EdilMarketing',
    url: postUrl
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
    { name: post.title, url: postUrl }
  ]);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(postUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`
  };

  const publishedDate = post.published_at ? new Date(post.published_at).toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }) : '';

  return (
    <>
      <SEOHead
        title={post.seo_title || post.title}
        description={post.seo_description || post.excerpt}
        keywords={post.tags}
        url={postUrl}
        image={coverImageUrl}
        type="article"
        publishedAt={post.published_at || undefined}
        updatedAt={post.updated_at || undefined}
        author={post.author?.name}
        jsonLd={[articleSchema, breadcrumbSchema]}
      />

      <Navbar />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section with Cover Image */}
        <section className="relative">
          {/* Cover Image */}
          {coverImageUrl && (
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
              <img
                src={coverImageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
          )}
          
          {/* Content Overlay */}
          <div className={`${coverImageUrl ? 'relative -mt-32 md:-mt-48' : 'pt-16'}`}>
            <div className="container relative z-10">
              {/* Back Link */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Torna al blog
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl bg-background/95 backdrop-blur-sm rounded-2xl p-6 md:p-8"
              >
                {/* Category */}
                <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${categoryColors[category] || 'bg-muted text-muted-foreground'}`}>
                  {categoryLabels[category] || category}
                </span>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                      {post.author?.avatar_url ? (
                        <img 
                          src={post.author.avatar_url} 
                          alt={post.author.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{post.author?.name || 'Autore'}</p>
                      <p className="text-xs text-muted-foreground">{post.author?.role || ''}</p>
                    </div>
                  </div>
                  <span className="text-muted-foreground/30">•</span>
                  <span className="flex items-center gap-1 text-sm">
                    <Calendar className="w-4 h-4" />
                    {publishedDate}
                  </span>
                  <span className="text-muted-foreground/30">•</span>
                  <span className="flex items-center gap-1 text-sm">
                    <Clock className="w-4 h-4" />
                    {post.reading_time} min di lettura
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container py-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Article */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              {/* Lead paragraph / Excerpt */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 pb-8 border-b border-border font-medium max-w-prose">
                {post.excerpt}
              </p>

              <ArticleContent content={post.content} />
              
              {/* Form in fondo all'articolo */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-heading font-bold text-foreground text-xl mb-4">
                  Vuoi ottenere questi risultati per la tua impresa?
                </h3>
                <LeadConnectorForm />
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Share */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Condividi
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={shareLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={shareLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={shareLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className="font-heading font-bold text-foreground mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="container py-16 border-t border-border">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
              Articoli Correlati
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
