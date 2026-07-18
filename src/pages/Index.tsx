import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import {
  SITE_URL,
  organizationSchema,
  websiteSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/schema";

// Vendita Edile Components - Nuovo ordine ottimizzato (da 17 a 13 sezioni)
import VEHeroSection from "@/components/vendita-edile/VEHeroSection";
import VEMarketChangedSection from "@/components/vendita-edile/VEMarketChangedSection";
import VEMarketTimelineSection from "@/components/vendita-edile/VEMarketTimelineSection";
import VEPainPointsSection from "@/components/vendita-edile/VEPainPointsSection";
import VEOriginStorySection from "@/components/vendita-edile/VEOriginStorySection";
import VETrueCostSection from "@/components/vendita-edile/VETrueCostSection";
import VEWhoWinsSection from "@/components/vendita-edile/VEWhoWinsSection";

import VEResultsSection from "@/components/vendita-edile/VEResultsSection";
import VEDifferentiatorSection from "@/components/vendita-edile/VEDifferentiatorSection";
import VEPillarsSection from "@/components/vendita-edile/VEPillarsSection";
import VECaseStudiesSection from "@/components/vendita-edile/VECaseStudiesSection";
import VEPricingSection from "@/components/vendita-edile/VEPricingSection";
import VEGuaranteeSection from "@/components/vendita-edile/VEGuaranteeSection";
import VESelectionProcessSection from "@/components/vendita-edile/VESelectionProcessSection";
import VEFAQSection from "@/components/vendita-edile/VEFAQSection";
import VEFinalCTASection from "@/components/vendita-edile/VEFinalCTASection";

// Caricato on-demand: i testi degli articoli restano fuori dal bundle della
// homepage, che così rimane leggera (importante per il caricamento su mobile).
const VEBlogTeaserSection = lazy(
  () => import("@/components/vendita-edile/VEBlogTeaserSection")
);

const Index = () => {
  const location = useLocation();

  // Handle hash scroll on navigation
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location.hash]);

  // FAQ answer-first per AEO (le obiezioni chiave in forma domanda/risposta)
  const homeFaq = [
    {
      question: "Quanto costa il programma VENDITA EDILE® e conviene?",
      answer:
        "L'investimento è di 9.000 € e si ripaga in genere con un solo contratto chiuso meglio. La media dei clienti perde 30.000-50.000 € al mese in trattative che non chiudono: il programma punta a un ritorno di circa 5 volte l'investimento in 90 giorni.",
    },
    {
      question: "È un corso di vendita?",
      answer:
        "No. VENDITA EDILE® non è un corso ma un affiancamento sul campo di 90 giorni: ogni settimana si revisionano le trattative reali, con feedback e correzioni. Non ti lasciamo con un PDF, lavoriamo sui tuoi preventivi veri.",
    },
    {
      question: "Funziona per il mio settore in edilizia?",
      answer:
        "Sì. Il metodo è applicato con oltre 47 aziende in tutta l'edilizia: infissi, serramenti, fotovoltaico, ristrutturazioni e impianti. I principi di vendita sono gli stessi, l'applicazione viene personalizzata sul tuo prodotto.",
    },
    {
      question: "Serve essere già bravi a vendere?",
      answer:
        "No. Non servono doti innate ma un sistema: script, qualifica, gestione delle obiezioni e follow-up. Circa il 70% dei clienti non aveva esperienza di vendita prima di iniziare.",
    },
    {
      question: "Cosa succede se non ottengo risultati?",
      answer:
        "C'è una garanzia 100%: se non vedi risultati, il rimborso è totale ed è messo per iscritto prima di iniziare. Il rischio è a carico nostro.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Programma di Affiancamento Vendite per Imprese Edili"
        description="L'unico programma di affiancamento vendite per imprenditori edili. +30-50% fatturato in 90 giorni. Infissi, serramenti, fotovoltaico, edilizia, ristrutturazioni."
        url={SITE_URL}
        jsonLd={[
          organizationSchema(),
          websiteSchema(),
          serviceSchema(),
          faqSchema(homeFaq),
          breadcrumbSchema([{ name: "Home", url: SITE_URL }]),
        ]}
      />
      <Navbar />
      <main className="overflow-hidden">
        {/* FUNNEL OTTIMIZZATO - 14 sezioni (da 17) */}
        
        {/* 1. HOOK - Cattura attenzione */}
        <VEHeroSection />
        
        {/* 2. MERCATO CAMBIATO - 3 stat + sistema */}
        <VEMarketChangedSection />
        
        
        {/* 3. DATI - Timeline con numeri ufficiali */}
        <VEMarketTimelineSection />
        
        {/* 4. IDENTIFICAZIONE - Quanti pain points riconosci? */}
        <VEPainPointsSection />
        
        {/* 5. ORIGIN STORY - Chi siamo */}
        <VEOriginStorySection />
        
        {/* 6. METODO - Il programma completo */}
        <VEPillarsSection />
        
        {/* 6b. CASI STUDIO E RECENSIONI */}
        <VECaseStudiesSection />
        
        {/* 7. VALUE STACK + PREZZO */}
        <VEPricingSection />
        
        {/* 8. COSTO - Quanto ti sta costando */}
        <VETrueCostSection />
        
        {/* 9. SOLUZIONE - Chi vince e cosa fanno + Truth Block (fuse) */}
        <VEWhoWinsSection />
        
        
        
        {/* 11. DIFFERENZIAZIONE - Affiancamento vs corsi */}
        <VEDifferentiatorSection />
        
        {/* 12. GARANZIA - Sezione separata */}
        <VEGuaranteeSection />
        
        {/* 13. SELEZIONE - Chi accettiamo + processo (fuse) */}
        <VESelectionProcessSection />
        
        {/* 13. OBIEZIONI - FAQ */}
        <VEFAQSection />

        {/* 14. RISORSE - Ultimi articoli del blog (internal linking + valore) */}
        <Suspense fallback={null}>
          <VEBlogTeaserSection />
        </Suspense>

        {/* 15. CTA FINALE */}
        <VEFinalCTASection />
        
        <Footer />
      </main>
    </>
  );
};

export default Index;
