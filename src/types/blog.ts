export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: BlogAuthor;
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  featured: boolean;
}

export type BlogCategory = 
  | 'marketing'
  | 'vendite'
  | 'strategie'
  | 'gestione';

export const categoryLabels: Record<BlogCategory, string> = {
  'marketing': 'Marketing',
  'vendite': 'Vendite',
  'strategie': 'Strategie',
  'gestione': 'Gestione'
};

export const categoryColors: Record<BlogCategory, string> = {
  'marketing': 'bg-emerald-500/10 text-emerald-600',
  'vendite': 'bg-blue-500/10 text-blue-600',
  'strategie': 'bg-amber-500/10 text-amber-600',
  'gestione': 'bg-purple-500/10 text-purple-600'
};

export const categoryIcons: Record<BlogCategory, string> = {
  'marketing': 'Target',
  'vendite': 'TrendingUp',
  'strategie': 'Lightbulb',
  'gestione': 'Settings'
};
