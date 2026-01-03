import { useState } from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp, Quote, Clock, MapPin, Users, Calendar, Target } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Import logos
import logoMilano from "@/assets/logo-serramentista-milano.png";
import logoRoma from "@/assets/logo-impresa-edile-roma.png";
import logoVeneto from "@/assets/logo-posatore-veneto.png";
import logoToscana from "@/assets/logo-showroom-toscana.png";

interface CaseStudyResult {
  label: string;
  before: string;
  after: string;
  icon: React.ReactNode;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface CaseStudy {
  id: string;
  company: string;
  sector: string;
  logo: string;
  location: string;
  companySize: string;
  yearFounded: string;
  challenge: string;
  solution: string[];
  results: CaseStudyResult[];
  timeline: string;
  highlight: string;
  highlightLabel: string;
  servicesUsed: string[];
  testimonial: Testimonial;
}

const caseStudies: CaseStudy[] = [
  {
    id: "milano",
    company: "Serramentista Milano",
    sector: "Infissi e Serramenti",
    logo: logoMilano,
    location: "Milano, Lombardia",
    companySize: "15 dipendenti",
    yearFounded: "Dal 2005",
    challenge: "Ricevevano decine di richieste di preventivo ogni mese, ma il 70% erano persone che cercavano solo il prezzo più basso. Il team commerciale perdeva ore in sopralluoghi e trattative che non si chiudevano mai.",
    solution: [
      "Funnel di pre-qualificazione con domande strategiche",
      "Landing page focalizzata sul valore, non sul prezzo",
      "Advertising mirato a proprietari di immobili di valore",
      "Sistema di scoring lead automatico"
    ],
    results: [
      { label: "Lead qualificati", before: "12/mese", after: "30/mese", icon: <Users className="w-5 h-5" /> },
      { label: "Tasso di chiusura", before: "15%", after: "42%", icon: <Target className="w-5 h-5" /> },
      { label: "Tempo in trattative inutili", before: "25h/sett", after: "8h/sett", icon: <Clock className="w-5 h-5" /> }
    ],
    timeline: "4 mesi",
    highlight: "+150%",
    highlightLabel: "lead qualificati",
    servicesUsed: ["Funnel Marketing", "Lead Qualification", "Google Ads"],
    testimonial: {
      text: "Finalmente riceviamo richieste da clienti che vogliono qualità, non il prezzo più basso. Il nostro team commerciale ora può concentrarsi su chi davvero vuole comprare.",
      author: "Marco B.",
      role: "Titolare"
    }
  },
  {
    id: "roma",
    company: "Impresa Edile Roma",
    sector: "Costruzioni e Ristrutturazioni",
    logo: logoRoma,
    location: "Roma, Lazio",
    companySize: "25 dipendenti",
    yearFounded: "Dal 1998",
    challenge: "Zero presenza online. L'azienda viveva solo di passaparola da 20 anni, ma i figli dei titolari volevano espandersi e non sapevano da dove iniziare.",
    solution: [
      "Creazione brand identity professionale",
      "Sito web con portfolio lavori",
      "Strategia content su progetti completati",
      "Campagne Google Ads geolocalizzate"
    ],
    results: [
      { label: "Richieste mensili", before: "3-4", after: "35+", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Nuovi contratti", before: "€0", after: "€180k", icon: <Target className="w-5 h-5" /> },
      { label: "Visibilità online", before: "Nulla", after: "Top 3 local", icon: <Users className="w-5 h-5" /> }
    ],
    timeline: "3 mesi",
    highlight: "€180k",
    highlightLabel: "nuovi contratti",
    servicesUsed: ["Brand Identity", "Sito Web", "Content Strategy", "Google Ads"],
    testimonial: {
      text: "In 20 anni non avevamo mai avuto una presenza online. Ora i clienti ci trovano su Google e arrivano già convinti della nostra professionalità.",
      author: "Giuseppe R.",
      role: "Socio Fondatore"
    }
  },
  {
    id: "veneto",
    company: "Posatore Veneto",
    sector: "Posa Infissi Specializzata",
    logo: logoVeneto,
    location: "Treviso, Veneto",
    companySize: "8 dipendenti",
    yearFounded: "Dal 2012",
    challenge: "Dipendenza totale da un unico general contractor che rappresentava l'80% del fatturato. Quando il contractor ha ridotto i lavori, l'azienda ha rischiato di chiudere.",
    solution: [
      "Posizionamento come specialista premium",
      "Strategia B2B per serramentisti",
      "LinkedIn outreach strutturato",
      "Case study e certificazioni in evidenza"
    ],
    results: [
      { label: "Clienti B2B attivi", before: "1", after: "6", icon: <Users className="w-5 h-5" /> },
      { label: "Fatturato annuo", before: "€120k", after: "€265k", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Dipendenza cliente principale", before: "80%", after: "25%", icon: <Target className="w-5 h-5" /> }
    ],
    timeline: "6 mesi",
    highlight: "+120%",
    highlightLabel: "fatturato",
    servicesUsed: ["Posizionamento B2B", "LinkedIn Strategy", "Sales Automation"],
    testimonial: {
      text: "Non dipendiamo più da un unico cliente. Abbiamo diversificato il portafoglio e raddoppiato il fatturato. Marketing Edile ci ha salvato l'azienda.",
      author: "Andrea M.",
      role: "Fondatore"
    }
  },
  {
    id: "toscana",
    company: "Showroom Toscana",
    sector: "Vendita Infissi Premium",
    logo: logoToscana,
    location: "Firenze, Toscana",
    companySize: "10 dipendenti",
    yearFounded: "Dal 2010",
    challenge: "Lo showroom attirava clienti interessati solo a \"quanto costa al metro quadro\". Le trattative erano estenuanti e spesso finivano con \"ci devo pensare\" per poi sparire.",
    solution: [
      "Comunicazione focalizzata su risparmio energetico e comfort",
      "Filtro qualità nei form di contatto",
      "Contenuti educativi pre-appuntamento",
      "Follow-up automatizzato con valore"
    ],
    results: [
      { label: "Valore medio ordine", before: "€4.200", after: "€5.700", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Trattative concluse", before: "22%", after: "38%", icon: <Target className="w-5 h-5" /> },
      { label: "Tempo medio chiusura", before: "45 giorni", after: "21 giorni", icon: <Clock className="w-5 h-5" /> }
    ],
    timeline: "5 mesi",
    highlight: "+35%",
    highlightLabel: "valore ordini",
    servicesUsed: ["Content Marketing", "Lead Nurturing", "Email Automation"],
    testimonial: {
      text: "I clienti arrivano già informati e convinti. Le trattative sono diventate più brevi e profittevoli. Non torniamo più indietro.",
      author: "Lucia T.",
      role: "Direttrice Commerciale"
    }
  }
];

const CaseStudyDialog = ({ 
  caseStudy, 
  open, 
  onClose 
}: { 
  caseStudy: CaseStudy | null; 
  open: boolean; 
  onClose: () => void;
}) => {
  if (!caseStudy) return null;
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader className="pb-4 border-b border-border">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex items-center justify-center shrink-0">
              <img 
                src={caseStudy.logo} 
                alt={`Logo ${caseStudy.company}`}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-xl font-heading font-bold text-foreground">
                {caseStudy.company}
              </DialogTitle>
              <p className="text-sm text-muted-foreground mb-2">{caseStudy.sector}</p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gold" />
                  {caseStudy.location}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-gold" />
                  {caseStudy.companySize}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-gold" />
                  {caseStudy.yearFounded}
                </span>
              </div>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Servizi Utilizzati */}
          <div>
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
              Servizi Utilizzati
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.servicesUsed.map((service, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full border border-gold/20"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* La Sfida */}
          <div>
            <h4 className="text-sm font-bold text-gold uppercase tracking-wider mb-2">
              La Sfida
            </h4>
            <p className="text-foreground/80 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>
          
          {/* La Soluzione */}
          <div>
            <h4 className="text-sm font-bold text-gold uppercase tracking-wider mb-2">
              La Soluzione
            </h4>
            <ul className="space-y-2">
              {caseStudy.solution.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground/80">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* I Risultati */}
          <div>
            <h4 className="text-sm font-bold text-gold uppercase tracking-wider mb-4">
              I Risultati
            </h4>
            <div className="grid gap-4">
              {caseStudy.results.map((result, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border"
                >
                  <div className="p-2 bg-gold/10 text-gold rounded-lg">
                    {result.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">
                      {result.label}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-foreground/50 line-through text-sm">
                        {result.before}
                      </span>
                      <span className="text-gold">→</span>
                      <span className="text-lg font-bold text-gold">
                        {result.after}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gold/5 border border-gold/20 rounded-xl p-5">
            <Quote className="w-8 h-8 text-gold/40 mb-3" />
            <p className="text-foreground/90 italic leading-relaxed mb-4">
              "{caseStudy.testimonial.text}"
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                {caseStudy.testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {caseStudy.testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {caseStudy.testimonial.role}
                </p>
              </div>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border">
            <Clock className="w-4 h-4" />
            <span>Tempo di implementazione: <strong className="text-foreground">{caseStudy.timeline}</strong></span>
          </div>
          
          {/* CTA */}
          <div className="pt-4">
            <Button 
              className="w-full bg-gold hover:bg-gold/90 text-background font-bold"
              onClick={() => {
                onClose();
                document.getElementById('candidati')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Vuoi risultati simili? Candidati ora
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const TestimonialsSection = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="casi-studio" className="section-padding bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-navy-light/20 rounded-full blur-[120px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-sm text-gold font-medium mb-6">
            <Star size={16} className="fill-gold" />
            Risultati Reali, Non Promesse
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Cosa Dicono I Nostri{" "}
            <span className="text-gold">Clienti</span>
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Non ti mostriamo vanity metrics. Ti mostriamo{" "}
            <span className="text-foreground font-semibold">
              fatturato, commesse chiuse e tempo risparmiato.
            </span>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="space-y-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 relative overflow-hidden cursor-pointer group hover:border-gold/50 transition-colors"
              onClick={() => setSelectedCase(caseStudy)}
            >
              {/* Quote icon */}
              <Quote
                size={80}
                className="absolute top-4 right-4 text-gold/10"
              />

              <div className="grid md:grid-cols-[1fr,auto] gap-8">
                {/* Left: Quote and Author */}
                <div className="space-y-6">
                  {/* Author info with logo */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted flex items-center justify-center border border-border">
                      <img 
                        src={caseStudy.logo} 
                        alt={`Logo ${caseStudy.company}`}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {caseStudy.company}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {caseStudy.sector}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {caseStudy.location}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed relative">
                    "{caseStudy.testimonial.text}"
                  </blockquote>

                  {/* Before/After preview */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
                    {caseStudy.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground line-through">
                          {result.before}
                        </span>
                        <TrendingUp size={16} className="text-emerald-500" />
                        <span className="text-sm font-semibold text-emerald-400">
                          {result.after}
                        </span>
                      </div>
                    ))}
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {caseStudy.timeline}
                    </span>
                  </div>
                </div>

                {/* Right: Results */}
                <div className="flex md:flex-col justify-center gap-4 md:gap-6 md:border-l md:border-border/50 md:pl-8">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gold">
                      {caseStudy.highlight}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {caseStudy.highlightLabel}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <span className="text-sm font-medium text-gold group-hover:underline">
                      Vedi caso studio completo →
                    </span>
                  </div>
                </div>
              </div>

              {/* 5 stars and author */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  — {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-6 md:p-8 bg-gold/5 border border-gold/20 rounded-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">
                47
              </div>
              <div className="text-sm text-muted-foreground">
                Aziende Edili Servite
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">
                +43%
              </div>
              <div className="text-sm text-muted-foreground">
                Fatturato Medio Clienti
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">
                €2.8M
              </div>
              <div className="text-sm text-muted-foreground">
                Commesse Generate
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">
                98%
              </div>
              <div className="text-sm text-muted-foreground">
                Clienti Soddisfatti
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dialog for full case study */}
      <CaseStudyDialog 
        caseStudy={selectedCase}
        open={!!selectedCase}
        onClose={() => setSelectedCase(null)}
      />
    </section>
  );
};

export default TestimonialsSection;
