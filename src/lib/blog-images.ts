// Mappa delle immagini del blog - importate come ES6 modules
import blogPreventiviCover from '@/assets/blog-preventivi-edilizia-cover.jpg';
import blogControlloGestione from '@/assets/blog-controllo-gestione-edilizia.jpg';
import blogPerdereClienti from '@/assets/blog-perdere-clienti-distrazione.jpg';
import blogSmettiSconti from '@/assets/blog-smetti-fare-sconti.jpg';
import blogEfficienzaOperativa from '@/assets/blog-efficienza-operativa-edilizia.jpg';
import blogAziendaDipendeDaTe from '@/assets/blog-azienda-dipende-da-te.jpg';
import blogClientiQualificati from '@/assets/blog-clienti-qualificati-edilizia.jpg';
import blogAumentareVendite from '@/assets/blog-aumentare-vendite-edilizia.jpg';
import blog30RichiesteQualificate from '@/assets/blog-30-richieste-qualificate.jpg';

// Mappa path database -> immagine importata
const blogImageMap: Record<string, string> = {
  '/src/assets/blog-preventivi-edilizia-cover.jpg': blogPreventiviCover,
  '/src/assets/blog-controllo-gestione-edilizia.jpg': blogControlloGestione,
  '/src/assets/blog-perdere-clienti-distrazione.jpg': blogPerdereClienti,
  '/src/assets/blog-smetti-fare-sconti.jpg': blogSmettiSconti,
  '/src/assets/blog-efficienza-operativa-edilizia.jpg': blogEfficienzaOperativa,
  '/src/assets/blog-azienda-dipende-da-te.jpg': blogAziendaDipendeDaTe,
  '/src/assets/blog-clienti-qualificati-edilizia.jpg': blogClientiQualificati,
  '/src/assets/blog-aumentare-vendite-edilizia.jpg': blogAumentareVendite,
  '/src/assets/blog-30-richieste-qualificate.jpg': blog30RichiesteQualificate,
};

/**
 * Risolve l'URL dell'immagine del blog.
 * Se l'URL è un path locale (/src/assets/...), lo mappa all'import ES6.
 * Altrimenti ritorna l'URL originale (per URL esterni o storage).
 */
export function resolveBlogImageUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  
  // Se è un path locale mappato, usa l'import
  if (blogImageMap[url]) {
    return blogImageMap[url];
  }
  
  // Altrimenti ritorna l'URL originale
  return url;
}
