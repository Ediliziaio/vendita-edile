import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  PlusCircle,
  Pencil,
  Trash2,
  Loader2,
  X,
  Upload,
  Check,
} from 'lucide-react';

interface Author {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  avatar_url: string | null;
}

interface AuthorForm {
  name: string;
  role: string;
  bio: string;
  avatar_url: string;
}

const defaultForm: AuthorForm = {
  name: '',
  role: '',
  bio: '',
  avatar_url: '',
};

export default function AuthorsList() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<AuthorForm>(defaultForm);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchAuthors = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_authors')
        .select('*')
        .order('name');

      if (error) throw error;
      setAuthors(data || []);
    } catch (error) {
      console.error('Error fetching authors:', error);
      toast({
        title: 'Errore',
        description: 'Impossibile caricare gli autori',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `avatars/${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: publicUrl } = supabase.storage
        .from('blog-images')
        .getPublicUrl(fileName);

      setForm((prev) => ({ ...prev, avatar_url: publicUrl.publicUrl }));
      toast({ title: 'Immagine caricata' });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: 'Errore',
        description: "Impossibile caricare l'immagine",
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (author: Author) => {
    setEditingId(author.id);
    setForm({
      name: author.name,
      role: author.role,
      bio: author.bio || '',
      avatar_url: author.avatar_url || '',
    });
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(defaultForm);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.role.trim()) {
      toast({
        title: 'Errore',
        description: 'Nome e ruolo sono obbligatori',
        variant: 'destructive',
      });
      return;
    }

    setSaving(true);
    try {
      if (editingId) {
        const { error } = await supabase
          .from('blog_authors')
          .update({
            name: form.name,
            role: form.role,
            bio: form.bio || null,
            avatar_url: form.avatar_url || null,
          })
          .eq('id', editingId);

        if (error) throw error;
        toast({ title: 'Autore aggiornato' });
      } else {
        const { error } = await supabase.from('blog_authors').insert([
          {
            name: form.name,
            role: form.role,
            bio: form.bio || null,
            avatar_url: form.avatar_url || null,
          },
        ]);

        if (error) throw error;
        toast({ title: 'Autore creato' });
      }

      handleCancel();
      fetchAuthors();
    } catch (error) {
      console.error('Error saving author:', error);
      toast({
        title: 'Errore',
        description: "Impossibile salvare l'autore",
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Sei sicuro di voler eliminare "${name}"?`)) return;

    setDeleting(id);
    try {
      const { error } = await supabase.from('blog_authors').delete().eq('id', id);
      if (error) throw error;

      setAuthors((prev) => prev.filter((a) => a.id !== id));
      toast({
        title: 'Autore eliminato',
        description: `"${name}" è stato eliminato`,
      });
    } catch (error) {
      console.error('Error deleting author:', error);
      toast({
        title: 'Errore',
        description: "Impossibile eliminare l'autore",
        variant: 'destructive',
      });
    } finally {
      setDeleting(null);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Autori</h1>
            <p className="text-muted-foreground mt-1">
              Gestisci gli autori del blog
            </p>
          </div>
          {!showForm && (
            <Button variant="gold" onClick={() => setShowForm(true)}>
              <PlusCircle className="h-5 w-5 mr-2" />
              Nuovo Autore
            </Button>
          )}
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {editingId ? 'Modifica Autore' : 'Nuovo Autore'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Nome completo"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Ruolo *</Label>
                  <Input
                    id="role"
                    value={form.role}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, role: e.target.value }))
                    }
                    placeholder="es. Marketing Specialist"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  value={form.bio}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, bio: e.target.value }))
                  }
                  placeholder="Breve biografia..."
                  rows={3}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>

              <div className="space-y-2">
                <Label>Avatar</Label>
                <div className="flex items-center gap-4">
                  {form.avatar_url ? (
                    <div className="relative">
                      <img
                        src={form.avatar_url}
                        alt="Avatar"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({ ...prev, avatar_url: '' }))
                        }
                        className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full p-1"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex items-center justify-center w-16 h-16 border-2 border-dashed border-border rounded-full cursor-pointer hover:border-secondary transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        disabled={uploading}
                      />
                      {uploading ? (
                        <Loader2 className="h-5 w-5 animate-spin text-secondary" />
                      ) : (
                        <Upload className="h-5 w-5 text-muted-foreground" />
                      )}
                    </label>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Annulla
                </Button>
                <Button type="submit" variant="gold" disabled={saving}>
                  {saving ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <Check className="h-5 w-5 mr-2" />
                      {editingId ? 'Aggiorna' : 'Crea'}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Authors List */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-secondary" />
            </div>
          ) : authors.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nessun autore trovato</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {authors.map((author) => (
                <div
                  key={author.id}
                  className="flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {author.avatar_url ? (
                      <img
                        src={author.avatar_url}
                        alt={author.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-secondary font-bold text-lg">
                          {author.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-foreground">{author.name}</p>
                      <p className="text-sm text-muted-foreground">{author.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(author)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(author.id, author.name)}
                      disabled={deleting === author.id}
                      className="text-destructive hover:text-destructive"
                    >
                      {deleting === author.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
