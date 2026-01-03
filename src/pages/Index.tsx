import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AgencyProblemsSection from "@/components/AgencyProblemsSection";
import FakeStrategySection from "@/components/FakeStrategySection";
import EmptyPromisesSection from "@/components/EmptyPromisesSection";
import UncomfortableQuestionSection from "@/components/UncomfortableQuestionSection";
import DifferentialSection from "@/components/DifferentialSection";
import MethodSection from "@/components/MethodSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ServicesSection from "@/components/ServicesSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import ForWhoSection from "@/components/ForWhoSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { generateOrganizationSchema, generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/seo";

const Index = () => {
  const location = useLocation();

  // Handle hash scroll on navigation from other pages
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

  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebSiteSchema()
  ];

  return (
    <>
      <SEOHead jsonLd={schemas} />
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <AgencyProblemsSection />
        <FakeStrategySection />
        <EmptyPromisesSection />
        <UncomfortableQuestionSection />
        <DifferentialSection />
        <MethodSection />
        <StatsSection />
        <TestimonialsSection />
        <WhatWeDoSection />
        <ServicesSection />
        <ComparisonSection />
        <PricingSection />
        <GuaranteeSection />
        <ForWhoSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
