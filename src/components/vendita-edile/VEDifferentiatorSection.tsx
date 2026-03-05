import { motion } from "framer-motion";
import { X, Check, Video, BookOpen, Phone, Users, Clock, HeartHandshake, MessageSquare, Target } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";
import teamMember5 from "@/assets/team-member-5.jpg";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const VEDifferentiatorSection = () => {
  const whatTheySell = [
    { icon: Video, text: "Videocorso da 47€" },
    { icon: BookOpen, text: '"Consulente" che non ha mai venduto un infisso' },
    { icon: MessageSquare, text: "Slide motivazionali sul mindset" },
    { icon: Clock, text: 'Teoria da applicare "prima o poi"' },
    { icon: X, text: "Ti lasciano solo dopo il corso" },
  ];

  const whatWeDo = [
    { icon: Users, text: "Affiancamento 1:1 operativo" },
    { icon: Target, text: "Ex imprenditori edili ATTIVI" },
    { icon: Phone, text: "Chiamate reali con i TUOI clienti" },
    { icon: Clock, text: "Implementazione in 90 giorni" },
    { icon: HeartHandshake, text: "90 giorni di supporto costante" },
  ];

  const whatWeDoList = [
    "ENTRIAMO nella tua azienda",
    "ASCOLTIAMO le tue chiamate",
    "CORREGGIAMO i tuoi errori in tempo reale",
    "CHIUDIAMO insieme i tuoi primi contratti",
  ];

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Pattern Interrupt Pre-header */}
        <AnimatedSection>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-destructive/10 border border-destructive/30 rounded-full text-destructive text-sm font-medium mb-6 uppercase tracking-wider">
              Perché il 90% dei corsi di vendita NON funziona in edilizia
            </span>
          </div>
        </AnimatedSection>

        {/* Tags */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-destructive/20 border border-destructive/40 rounded-full text-destructive text-xs md:text-sm font-semibold uppercase">
              Non è un corso
            </span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-destructive/20 border border-destructive/40 rounded-full text-destructive text-xs md:text-sm font-semibold uppercase">
              Non è consulenza
            </span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-destructive/20 border border-destructive/40 rounded-full text-destructive text-xs md:text-sm font-semibold uppercase">
              Non è coaching
            </span>
          </div>
        </AnimatedSection>

        {/* Main Headline */}
        <AnimatedSection delay={0.15}>
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              È <span className="text-gold drop-shadow-[0_0_20px_hsl(var(--gold)/0.5)]">AFFIANCAMENTO OPERATIVO</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La differenza tra <span className="text-destructive font-semibold">guardare un video</span> e{" "}
              <span className="text-gold font-semibold">avere qualcuno al tuo fianco</span> che ti dice esattamente cosa fare.
            </p>
          </div>
        </AnimatedSection>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* What They Sell */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-background border-2 border-destructive/30 rounded-2xl relative overflow-hidden hover:border-destructive/50 transition-colors"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive/50" />
            <h3 className="text-xl font-bold text-destructive mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              Quello che ti vendono
            </h3>
            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {whatTheySell.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/10 hover:bg-destructive/10 transition-colors">
                    <item.icon className="w-5 h-5 text-destructive/60 flex-shrink-0" />
                    <span className="text-muted-foreground line-through decoration-destructive/40">{item.text}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-gold/5 border-2 border-gold rounded-2xl relative overflow-hidden shadow-xl shadow-gold/10 hover:shadow-gold/20 transition-all"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            <h3 className="text-xl font-bold text-gold mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" />
              Quello che facciamo noi
            </h3>
            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {whatWeDo.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-3 p-3 bg-gold/5 rounded-lg border border-gold/20 hover:bg-gold/10 transition-colors">
                    <item.icon className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </div>

        {/* Team Members Grid */}
        <AnimatedSection delay={0.25}>
          <div className="mb-12 max-w-5xl mx-auto">
            <p className="text-center text-gold font-bold text-xl md:text-2xl mb-8">Il nostro team sul campo</p>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" staggerDelay={0.1}>
              {[
                { name: "Membro 1", role: "Fondatore", description: "Ha costruito 3 aziende edili da zero. Ora guida il metodo.", photo: teamMember1 },
                { name: "Membro 2", role: "Sales Manager", description: "Oltre 2.000 trattative chiuse nel settore serramenti.", photo: teamMember2 },
                { name: "Membro 3", role: "Consulente Operativo", description: "Specializzato in ottimizzazione processi di vendita.", photo: teamMember3 },
                { name: "Membro 4", role: "Account Manager", description: "Segue ogni cliente dal primo contatto alla chiusura.", photo: teamMember4 },
                { name: "Membro 5", role: "Strategist", description: "Analizza i numeri e costruisce strategie su misura.", photo: teamMember5 },
              ].map((member, index) => (
                <StaggerItem key={index}>
                  <div className="flex flex-col items-center text-center p-5 bg-secondary/5 border border-secondary/20 rounded-2xl hover:border-secondary/40 transition-colors">
                    <img src={member.photo} alt={member.name} className="w-28 h-28 rounded-full object-cover border-2 border-gold/30 mb-4" />
                    <p className="text-foreground font-semibold text-base">{member.name}</p>
                    <p className="text-gold text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{member.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <p className="text-center text-muted-foreground text-sm mt-4">Imprenditori edili che vendono ogni giorno. Non formatori da palco.</p>
          </div>
        </AnimatedSection>

        {/* Central Impact Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-gold/20 blur-xl rounded-3xl" />
          <div className="relative p-5 md:p-8 lg:p-10 bg-background border-2 border-gold rounded-2xl text-center shadow-xl">
            <div className="inline-block px-4 py-1 bg-gold/20 rounded-full text-gold text-sm font-bold mb-6 uppercase tracking-wider">
              Vendita Edile® — Programma 90 Giorni
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Non ti diamo un manuale.
            </h3>
            <StaggerContainer className="space-y-3 max-w-lg mx-auto text-left" staggerDelay={0.1}>
              {whatWeDoList.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-gold flex-shrink-0" />
                    <span className="text-lg text-foreground">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </motion.div>

        {/* Closing Question */}
        <AnimatedSection delay={0.3}>
          <div className="text-center p-6 md:p-8 bg-card border border-border rounded-2xl">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              Preferisci guardare <span className="text-muted-foreground">un altro video</span>...
              <br className="hidden md:block" />
              o preferisci che qualcuno ti mostri{" "}
              <span className="text-gold font-bold">ESATTAMENTE cosa dire</span>
              <br className="hidden md:block" />
              al prossimo cliente che ti chiede lo sconto?
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEDifferentiatorSection;
