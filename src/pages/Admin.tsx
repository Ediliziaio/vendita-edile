import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { supabase } from '@/integrations/supabase/client';
import { FileText, Users, Eye, TrendingUp } from 'lucide-react';

interface Stats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalAuthors: number;
}

export default function Admin() {
  const [stats, setStats] = useState<Stats>({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalAuthors: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch posts stats
        const { data: posts } = await supabase
          .from('blog_posts')
          .select('status');

        // Fetch authors count
        const { count: authorsCount } = await supabase
          .from('blog_authors')
          .select('*', { count: 'exact', head: true });

        if (posts) {
          const published = posts.filter((p) => p.status === 'published').length;
          setStats({
            totalPosts: posts.length,
            publishedPosts: published,
            draftPosts: posts.length - published,
            totalAuthors: authorsCount || 0,
          });
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      label: 'Articoli Totali',
      value: stats.totalPosts,
      icon: FileText,
      color: 'text-secondary',
    },
    {
      label: 'Pubblicati',
      value: stats.publishedPosts,
      icon: Eye,
      color: 'text-green-500',
    },
    {
      label: 'Bozze',
      value: stats.draftPosts,
      icon: TrendingUp,
      color: 'text-orange-500',
    },
    {
      label: 'Autori',
      value: stats.totalAuthors,
      icon: Users,
      color: 'text-blue-500',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Benvenuto nel pannello di amministrazione
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-xl border border-border p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground mt-1">
                    {loading ? '-' : stat.value}
                  </p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Azioni Rapide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/admin/posts/new"
              className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
            >
              <FileText className="h-5 w-5 text-secondary" />
              <span className="font-medium">Nuovo Articolo</span>
            </a>
            <a
              href="/admin/posts"
              className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
            >
              <Eye className="h-5 w-5 text-secondary" />
              <span className="font-medium">Gestisci Articoli</span>
            </a>
            <a
              href="/admin/authors"
              className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
            >
              <Users className="h-5 w-5 text-secondary" />
              <span className="font-medium">Gestisci Autori</span>
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
