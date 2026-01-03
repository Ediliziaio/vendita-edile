import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  avatar_url: string | null;
  created_at: string;
}

export interface BlogPostDB {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image_url: string | null;
  author_id: string | null;
  category: string;
  tags: string[];
  published_at: string | null;
  updated_at: string | null;
  reading_time: number;
  featured: boolean;
  status: string;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  author: BlogAuthor | null;
}

export function useBlogPosts(category?: string) {
  return useQuery({
    queryKey: ['blog-posts', category],
    queryFn: async () => {
      let query = supabase
        .from('blog_posts')
        .select(`
          *,
          author:blog_authors(*)
        `)
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (category && category !== 'all') {
        query = query.eq('category', category);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
      }

      return data as BlogPostDB[];
    },
  });
}

export function useFeaturedPosts() {
  return useQuery({
    queryKey: ['blog-posts', 'featured'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          author:blog_authors(*)
        `)
        .eq('status', 'published')
        .eq('featured', true)
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching featured posts:', error);
        throw error;
      }

      return data as BlogPostDB[];
    },
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          author:blog_authors(*)
        `)
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();

      if (error) {
        console.error('Error fetching blog post:', error);
        throw error;
      }

      return data as BlogPostDB | null;
    },
    enabled: !!slug,
  });
}

export function useRelatedPosts(currentPostId: string, category: string, tags: string[], limit = 3) {
  return useQuery({
    queryKey: ['blog-posts', 'related', currentPostId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          author:blog_authors(*)
        `)
        .eq('status', 'published')
        .neq('id', currentPostId)
        .eq('category', category)
        .limit(limit);

      if (error) {
        console.error('Error fetching related posts:', error);
        throw error;
      }

      return data as BlogPostDB[];
    },
    enabled: !!currentPostId,
  });
}
