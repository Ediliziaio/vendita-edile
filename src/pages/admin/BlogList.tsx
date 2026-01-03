import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  PlusCircle,
  Search,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  Loader2,
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  status: string;
  category: string;
  created_at: string;
  published_at: string | null;
}

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [deleting, setDeleting] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, status, category, created_at, published_at')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: 'Errore',
        description: 'Impossibile caricare gli articoli',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Sei sicuro di voler eliminare "${title}"?`)) return;

    setDeleting(id);
    try {
      const { error } = await supabase.from('blog_posts').delete().eq('id', id);
      if (error) throw error;

      setPosts((prev) => prev.filter((p) => p.id !== id));
      toast({
        title: 'Articolo eliminato',
        description: `"${title}" è stato eliminato`,
      });
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: 'Errore',
        description: 'Impossibile eliminare l\'articolo',
        variant: 'destructive',
      });
    } finally {
      setDeleting(null);
    }
  };

  const togglePublish = async (post: BlogPost) => {
    const newStatus = post.status === 'published' ? 'draft' : 'published';
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({
          status: newStatus,
          published_at: newStatus === 'published' ? new Date().toISOString() : null,
        })
        .eq('id', post.id);

      if (error) throw error;

      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id
            ? { ...p, status: newStatus, published_at: newStatus === 'published' ? new Date().toISOString() : null }
            : p
        )
      );

      toast({
        title: newStatus === 'published' ? 'Articolo pubblicato' : 'Articolo messo in bozza',
      });
    } catch (error) {
      console.error('Error updating post:', error);
      toast({
        title: 'Errore',
        description: 'Impossibile aggiornare lo stato',
        variant: 'destructive',
      });
    }
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Articoli</h1>
            <p className="text-muted-foreground mt-1">
              Gestisci tutti gli articoli del blog
            </p>
          </div>
          <Link to="/admin/posts/new">
            <Button variant="gold">
              <PlusCircle className="h-5 w-5 mr-2" />
              Nuovo Articolo
            </Button>
          </Link>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Cerca articoli..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Posts Table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-secondary" />
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nessun articolo trovato</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">
                      Titolo
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">
                      Categoria
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">
                      Stato
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">
                      Data
                    </th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-foreground">
                      Azioni
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-foreground truncate max-w-xs">
                            {post.title}
                          </p>
                          <p className="text-sm text-muted-foreground">/{post.slug}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-muted-foreground">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            post.status === 'published'
                              ? 'bg-green-500/20 text-green-500'
                              : 'bg-orange-500/20 text-orange-500'
                          }`}
                        >
                          {post.status === 'published' ? 'Pubblicato' : 'Bozza'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {new Date(post.published_at || post.created_at).toLocaleDateString('it-IT')}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => togglePublish(post)}
                            title={post.status === 'published' ? 'Metti in bozza' : 'Pubblica'}
                          >
                            {post.status === 'published' ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                          <Link to={`/admin/posts/${post.id}`}>
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(post.id, post.title)}
                            disabled={deleting === post.id}
                            className="text-destructive hover:text-destructive"
                          >
                            {deleting === post.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
