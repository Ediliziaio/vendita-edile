import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, User } from 'lucide-react';
import { BlogPostDB } from '@/hooks/useBlogPosts';
import { categoryLabels, categoryColors, BlogCategory } from '@/types/blog';
import { resolveBlogImageUrl } from '@/lib/blog-images';

interface BlogCardProps {
  post: BlogPostDB;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const category = post.category as BlogCategory;
  const coverImageUrl = resolveBlogImageUrl(post.cover_image_url);
  const publishedDate = post.published_at ? new Date(post.published_at).toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }) : '';
  const tags = post.tags?.slice(0, 2) || [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 ${
        featured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''
      }`}
    >
      {/* Image */}
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
        <div className={`relative ${featured ? 'h-full min-h-[300px]' : 'h-48'} bg-muted`}>
          {coverImageUrl ? (
            <img
              src={coverImageUrl}
              alt={post.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                <span className="text-6xl">📰</span>
              </div>
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>

      {/* Content */}
      <div className={`p-6 ${featured ? 'flex flex-col justify-center' : ''}`}>
        {/* Category Badge */}
        <div className="flex items-center gap-3 mb-3">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[category] || 'bg-muted text-muted-foreground'}`}>
            {categoryLabels[category] || category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {post.reading_time} min
          </span>
        </div>

        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className={`font-heading font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 ${
            featured ? 'text-2xl md:text-3xl' : 'text-lg'
          }`}>
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className={`mt-3 text-muted-foreground line-clamp-2 ${featured ? 'text-base' : 'text-sm'}`}>
          {post.excerpt}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              {post.author?.avatar_url ? (
                <img 
                  src={post.author.avatar_url} 
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <User className="w-4 h-4 text-primary" />
              )}
            </div>
            <div className="text-xs">
              <p className="font-medium text-foreground">{post.author?.name || 'Autore'}</p>
              <p className="text-muted-foreground">{publishedDate}</p>
            </div>
          </div>

          {/* Read More */}
          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
          >
            Leggi
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
