import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";
import heroWindowsImage from "@/assets/hero-windows.jpg";

interface StatCardProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

const StatCard = ({ end, suffix = "", prefix = "", label, decimals = 0 }: StatCardProps) => {
  const { ref, formattedValue } = useCountUp({ end, suffix, prefix, decimals });

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, borderColor: "hsl(var(--gold))" }}
      className="p-6 md:p-8 bg-background/80 backdrop-blur-sm border border-border rounded-2xl text-center transition-colors duration-300"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-black text-gold mb-2">
        {formattedValue}
      </div>
      <p className="text-muted-foreground text-sm md:text-base">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { end: 8, suffix: "", label: "Anni di esperienza nel settore" },
    { end: 60, prefix: "€", suffix: "M", label: "Fatturato generato per i clienti" },
    { end: 4, prefix: "€", suffix: "M", label: "Venduti direttamente da noi" },
    { end: 60, suffix: "+", label: "Aziende seguite" },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroWindowsImage}
          alt="Villa moderna con infissi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-light/90" />
      </div>

      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="heading-section text-foreground mb-4">
              I <span className="text-gold">NUMERI</span> PARLANO
            </h2>
            <p className="text-xl text-muted-foreground">
              Risultati reali, non promesse
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
