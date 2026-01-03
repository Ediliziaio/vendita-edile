import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Check } from "lucide-react";
import fakeSite1 from "@/assets/fake-site-1.jpg";
import fakeSite2 from "@/assets/fake-site-2.jpg";
import fakeSite3 from "@/assets/fake-site-3.jpg";

interface WebsiteMockupProps {
  image: string;
  label: string;
  delay: number;
  isCopy?: boolean;
}

const WebsiteMockup = ({ image, label, delay, isCopy = false }: WebsiteMockupProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      className="relative group cursor-pointer"
    >
      <div className="w-48 md:w-64 bg-card border border-border rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl">
        {/* Browser Chrome */}
        <div className="h-5 bg-muted border-b border-border flex items-center px-2 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-destructive/60" />
          <div className="w-2 h-2 rounded-full bg-gold/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-2 h-2.5 bg-background/50 rounded-sm" />
        </div>
        
        {/* Website Screenshot */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img 
            src={image} 
            alt={label}
            className="w-full h-full object-cover object-top"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-destructive/0 group-hover:bg-destructive/10 transition-colors duration-300" />
        </div>
      </div>

      {/* Label */}
      <p className="text-center mt-3 text-sm font-medium text-muted-foreground">
        {label}
      </p>

      {/* Copy-Paste Badge */}
      {isCopy && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.3 }}
          viewport={{ once: true }}
          className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg"
        >
          COPIA
        </motion.div>
      )}
    </motion.div>
  );
};

const FakeStrategySection = () => {
  const changesOnly = [
    { text: "Il logo", icon: Check },
    { text: "I colori", icon: Check },
    { text: "Le foto (forse)", icon: Check },
  ];

  const unchanged = [
    { label: "STRUTTURA", value: "Identica" },
    { label: "TESTI", value: "Copia-incolla" },
    { label: "STRATEGIA", value: "Inesistente" },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              "Strategia personalizzata", dicono.
            </p>
            <h2 className="heading-section text-foreground mb-4">
              Poi scopri che ti danno lo <span className="text-destructive">STESSO</span> sito
            </h2>
            <p className="text-lg text-muted-foreground">
              che hanno dato ai tuoi 50 competitor.
            </p>
          </div>
        </AnimatedSection>

        {/* Website Screenshots Comparison */}
        <AnimatedSection delay={0.2}>
          <div className="relative py-12">
            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
              <WebsiteMockup 
                image={fakeSite1}
                label="Il tuo sito" 
                delay={0.1}
              />
              <WebsiteMockup 
                image={fakeSite2}
                label="Competitor A" 
                delay={0.25}
                isCopy
              />
              <WebsiteMockup 
                image={fakeSite3}
                label="Competitor B" 
                delay={0.4}
                isCopy
              />
            </div>

            {/* Equals Sign Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="text-7xl md:text-9xl font-black text-destructive/15">
                =
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* What Actually Changes */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mb-8">
            <p className="text-xl md:text-2xl font-medium text-foreground mb-6">
              L'unica differenza?
            </p>
            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
              {changesOnly.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <item.icon className="w-5 h-5 text-gold" />
                  <span className="text-lg">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* What Stays The Same */}
        <AnimatedSection delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-card border-2 border-destructive/30 rounded-2xl p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {unchanged.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-xs font-bold text-muted-foreground tracking-wider mb-1">
                    {item.label}?
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-destructive">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FakeStrategySection;
