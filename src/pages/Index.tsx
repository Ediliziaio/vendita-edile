import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

// Vendita Edile Components
import VEHeroSection from "@/components/vendita-edile/VEHeroSection";
import VEProblemSection from "@/components/vendita-edile/VEProblemSection";
import VEPainPointsSection from "@/components/vendita-edile/VEPainPointsSection";
import VEOldTechniquesSection from "@/components/vendita-edile/VEOldTechniquesSection";
import VETrueCostSection from "@/components/vendita-edile/VETrueCostSection";
import VEWhoWinsSection from "@/components/vendita-edile/VEWhoWinsSection";
import VEWhyWeCanSection from "@/components/vendita-edile/VEWhyWeCanSection";
import VEResultsSection from "@/components/vendita-edile/VEResultsSection";
import VEDifferentiatorSection from "@/components/vendita-edile/VEDifferentiatorSection";
import VECredibilitySection from "@/components/vendita-edile/VECredibilitySection";
import VEFalsePromisesSection from "@/components/vendita-edile/VEFalsePromisesSection";
import VEUncomfortableQuestionSection from "@/components/vendita-edile/VEUncomfortableQuestionSection";
import VESalesIsDifferentSection from "@/components/vendita-edile/VESalesIsDifferentSection";
import VEPillarsSection from "@/components/vendita-edile/VEPillarsSection";
import VEClientResultsSection from "@/components/vendita-edile/VEClientResultsSection";
import VECostOfInactionSection from "@/components/vendita-edile/VECostOfInactionSection";
import VEPricingSection from "@/components/vendita-edile/VEPricingSection";
import VEForWhoSection from "@/components/vendita-edile/VEForWhoSection";
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
        <VEHeroSection />
        <VEProblemSection />
        <VEPainPointsSection />
        <VEOldTechniquesSection />
        <VETrueCostSection />
        <VEWhoWinsSection />
        <VEWhyWeCanSection />
        <VEResultsSection />
        <VEDifferentiatorSection />
        <VECredibilitySection />
        <VEFalsePromisesSection />
        <VEUncomfortableQuestionSection />
        <VESalesIsDifferentSection />
        <VEPillarsSection />
        <VEClientResultsSection />
        <VECostOfInactionSection />
        <VEPricingSection />
        <VEForWhoSection />
        <VESelectionProcessSection />
        <VEFAQSection />
        <VEFinalCTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
