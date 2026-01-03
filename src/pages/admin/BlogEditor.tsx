import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save, ArrowLeft, Upload, X } from 'lucide-react';
import { RichTextEditor } from '@/components/admin/RichTextEditor';
import { z } from 'zod';

const postSchema = z.object({
  title: z.string().min(1, 'Titolo obbligatorio').max(200, 'Titolo troppo lungo'),
  slug: z.string().min(1, 'Slug obbligatorio').max(200, 'Slug troppo lungo'),
  excerpt: z.string().min(1, 'Estratto obbligatorio').max(500, 'Estratto troppo lungo'),
  content: z.string().min(1, 'Contenuto obbligatorio'),
  category: z.string().min(1, 'Categoria obbligatoria'),
  seo_title: z.string().max(60, 'SEO title massimo 60 caratteri').optional(),
  seo_description: z.string().max(160, 'SEO description massimo 160 caratteri').optional(),
});

interface Author {
  id: string;
  name: string;
}

interface PostForm {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  cover_image_url: string;
  seo_title: string;
  seo_description: string;
  status: string;
  featured: boolean;
  author_id: string;
  reading_time: number;
}

const defaultForm: PostForm = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  category: '',
  tags: [],
  cover_image_url: '',
  seo_title: '',
  seo_description: '',
  status: 'draft',
  featured: false,
  author_id: '',
  reading_time: 5,
};

const categories = [
  'Marketing Digitale',
  'Social Media',
  'Strategia',
  'Case Study',
  'Guide',
  'News',
];

export default function BlogEditor() {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();
  const { toast } = useToast();

  const [form, setForm] = useState<PostForm>(defaultForm);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    const fetchAuthors = async () => {
      const { data } = await supabase.from('blog_authors').select('id, name');
      if (data) setAuthors(data);
    };
    fetchAuthors();

    if (isEditing) {
      const fetchPost = async () => {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          toast({
            title: 'Errore',
            description: 'Articolo non trovato',
            variant: 'destructive',
          });
          navigate('/admin/posts');
          return;
        }

        setForm({
          title: data.title || '',
          slug: data.slug || '',
          excerpt: data.excerpt || '',
          content: data.content || '',
          category: data.category || '',
          tags: data.tags || [],
          cover_image_url: data.cover_image_url || '',
          seo_title: data.seo_title || '',
          seo_description: data.seo_description || '',
          status: data.status || 'draft',
          featured: data.featured || false,
          author_id: data.author_id || '',
          reading_time: data.reading_time || 5,
        });
        setLoading(false);
      };
      fetchPost();
    }
  }, [id, isEditing, navigate, toast]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[àáâãäå]/g, 'a')
      .replace(/[èéêë]/g, 'e')
      .replace(/[ìíîï]/g, 'i')
      .replace(/[òóôõö]/g, 'o')
      .replace(/[ùúûü]/g, 'u')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setForm((prev) => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `covers/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: publicUrl } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setForm((prev) => ({ ...prev, cover_image_url: publicUrl.publicUrl }));
      toast({ title: 'Immagine caricata' });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: 'Errore',
        description: 'Impossibile caricare l\'immagine',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !form.tags.includes(tagInput.trim())) {
      setForm((prev) => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }));
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setForm((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));
  };

  const validateForm = () => {
    try {
      postSchema.parse(form);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((e) => {
          fieldErrors[e.path[0] as string] = e.message;
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSaving(true);
    try {
      const postData = {
        ...form,
        published_at: form.status === 'published' ? new Date().toISOString() : null,
        updated_at: new Date().toISOString(),
      };

      if (isEditing) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', id);
        if (error) throw error;
        toast({ title: 'Articolo aggiornato' });
      } else {
        const { error } = await supabase.from('blog_posts').insert([postData]);
        if (error) throw error;
        toast({ title: 'Articolo creato' });
      }

      navigate('/admin/posts');
    } catch (error) {
      console.error('Error saving post:', error);
      toast({
        title: 'Errore',
        description: 'Impossibile salvare l\'articolo',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              type="button"
              variant="ghost"
              onClick={() => navigate('/admin/posts')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {isEditing ? 'Modifica Articolo' : 'Nuovo Articolo'}
              </h1>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  status: prev.status === 'draft' ? 'published' : 'draft',
                }))
              }
            >
              {form.status === 'published' ? 'Metti in Bozza' : 'Segna come Pubblicato'}
            </Button>
            <Button type="submit" variant="gold" disabled={saving}>
              {saving ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <Save className="h-5 w-5 mr-2" />
                  Salva
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl border border-border p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Titolo *</Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Titolo dell'articolo"
                />
                {errors.title && (
                  <p className="text-sm text-destructive">{errors.title}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={form.slug}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, slug: e.target.value }))
                  }
                  placeholder="url-articolo"
                />
                {errors.slug && (
                  <p className="text-sm text-destructive">{errors.slug}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Estratto *</Label>
                <textarea
                  id="excerpt"
                  value={form.excerpt}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, excerpt: e.target.value }))
                  }
                  placeholder="Breve descrizione dell'articolo..."
                  rows={3}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                {errors.excerpt && (
                  <p className="text-sm text-destructive">{errors.excerpt}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Contenuto *</Label>
                <RichTextEditor
                  content={form.content}
                  onChange={(html) =>
                    setForm((prev) => ({ ...prev, content: html }))
                  }
                  placeholder="Inizia a scrivere il tuo articolo..."
                />
                {errors.content && (
                  <p className="text-sm text-destructive">{errors.content}</p>
                )}
              </div>
            </div>

            {/* SEO */}
            <div className="bg-card rounded-xl border border-border p-6 space-y-6">
              <h3 className="font-semibold text-foreground">SEO</h3>
              <div className="space-y-2">
                <Label htmlFor="seo_title">
                  SEO Title ({form.seo_title.length}/60)
                </Label>
                <Input
                  id="seo_title"
                  value={form.seo_title}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, seo_title: e.target.value }))
                  }
                  placeholder="Titolo per i motori di ricerca"
                  maxLength={60}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="seo_description">
                  SEO Description ({form.seo_description.length}/160)
                </Label>
                <textarea
                  id="seo_description"
                  value={form.seo_description}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      seo_description: e.target.value,
                    }))
                  }
                  placeholder="Descrizione per i motori di ricerca"
                  rows={2}
                  maxLength={160}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Settings */}
          <div className="space-y-6">
            {/* Cover Image */}
            <div className="bg-card rounded-xl border border-border p-6 space-y-4">
              <h3 className="font-semibold text-foreground">Immagine Cover</h3>
              {form.cover_image_url ? (
                <div className="relative">
                  <img
                    src={form.cover_image_url}
                    alt="Cover"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      setForm((prev) => ({ ...prev, cover_image_url: '' }))
                    }
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-secondary transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    disabled={uploading}
                  />
                  {uploading ? (
                    <Loader2 className="h-8 w-8 animate-spin text-secondary" />
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Clicca per caricare
                      </p>
                    </>
                  )}
                </label>
              )}
            </div>

            {/* Category & Author */}
            <div className="bg-card rounded-xl border border-border p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Categoria *</Label>
                <select
                  id="category"
                  value={form.category}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, category: e.target.value }))
                  }
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Seleziona categoria</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-sm text-destructive">{errors.category}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Autore</Label>
                <select
                  id="author"
                  value={form.author_id}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, author_id: e.target.value }))
                  }
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Seleziona autore</option>
                  {authors.map((author) => (
                    <option key={author.id} value={author.id}>
                      {author.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reading_time">Tempo di lettura (min)</Label>
                <Input
                  id="reading_time"
                  type="number"
                  min={1}
                  value={form.reading_time}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      reading_time: parseInt(e.target.value) || 5,
                    }))
                  }
                />
              </div>
            </div>

            {/* Tags */}
            <div className="bg-card rounded-xl border border-border p-6 space-y-4">
              <Label>Tags</Label>
              <div className="flex gap-2">
                <Input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  placeholder="Aggiungi tag"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                />
                <Button type="button" variant="outline" onClick={addTag}>
                  +
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {form.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="bg-card rounded-xl border border-border p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="featured">In evidenza</Label>
                <input
                  id="featured"
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, featured: e.target.checked }))
                  }
                  className="h-5 w-5 rounded border-input accent-secondary"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label>Stato</Label>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    form.status === 'published'
                      ? 'bg-green-500/20 text-green-500'
                      : 'bg-orange-500/20 text-orange-500'
                  }`}
                >
                  {form.status === 'published' ? 'Pubblicato' : 'Bozza'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}
