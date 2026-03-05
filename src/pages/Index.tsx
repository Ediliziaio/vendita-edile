import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

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
import VEPricingSection from "@/components/vendita-edile/VEPricingSection";
import VEGuaranteeSection from "@/components/vendita-edile/VEGuaranteeSection";
import VESelectionProcessSection from "@/components/vendita-edile/VESelectionProcessSection";
import VEFAQSection from "@/components/vendita-edile/VEFAQSection";
import VEFinalCTASection from "@/components/vendita-edile/VEFinalCTASection";

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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VENDITA EDILE®",
    description: "Programma di affiancamento vendite per imprenditori edili",
    url: "https://venditaedile.it",
  };

  return (
    <>
      <SEOHead
        title="VENDITA EDILE® | Programma di Affiancamento per Imprenditori Edili"
        description="L'unico programma di affiancamento vendite per imprenditori edili. +30-50% fatturato in 90 giorni. Infissi, serramenti, fotovoltaico, edilizia, ristrutturazioni."
        jsonLd={[organizationSchema]}
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
        
        {/* 6. COSTO - Quanto ti sta costando */}
        <VETrueCostSection />
        
        {/* 6. SOLUZIONE - Chi vince e cosa fanno + Truth Block (fuse) */}
        <VEWhoWinsSection />
        
        
        {/* 8. RISULTATI - Cosa ottieni */}
        <VEResultsSection />
        
        {/* 9. DIFFERENZIAZIONE - Affiancamento vs corsi */}
        <VEDifferentiatorSection />
        
        {/* 10. METODO - I 5 pilastri */}
        <VEPillarsSection />
        
        {/* 11. VALUE STACK + PREZZO */}
        <VEPricingSection />
        
        {/* 12. GARANZIA - Sezione separata */}
        <VEGuaranteeSection />
        
        {/* 13. SELEZIONE - Chi accettiamo + processo (fuse) */}
        <VESelectionProcessSection />
        
        {/* 13. OBIEZIONI - FAQ */}
        <VEFAQSection />
        
        {/* 14. CTA FINALE */}
        <VEFinalCTASection />
        
        <Footer />
      </main>
    </>
  );
};

export default Index;
