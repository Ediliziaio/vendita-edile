import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import {
  Target,
  MessageSquare,
  FileText,
  Video,
  Layout,
  Megaphone,
  BarChart3,
  User,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react";

const ServicesSection = () => {
  const categories = [
    {
      id: "strategia",
      title: "STRATEGIA",
      icon: Target,
      color: "gold",
      gradient: "from-gold/20 to-gold/5",
      borderColor: "border-gold/30",
      hoverBorder: "group-hover:border-gold",
      services: [
        {
          icon: Target,
          title: "Marketing Edile",
          description: "Attrazione → Acquisizione → Conversione → Flusso continuo",
        },
        {
          icon: MessageSquare,
          title: "Piano Comunicativo",
          description: "Messaggio chiaro che riduce il confronto sul prezzo",
        },
        {
          icon: Layout,
          title: "Landing Page",
          description: "Testi e design che filtrano i contatti sbagliati",
        },
      ],
    },
    {
      id: "produzione",
      title: "PRODUZIONE",
      icon: Video,
      color: "blue-400",
      gradient: "from-blue-400/20 to-blue-400/5",
      borderColor: "border-blue-400/30",
      hoverBorder: "group-hover:border-blue-400",
      services: [
        {
          icon: FileText,
          title: "Contenuti Scriptati",
          description: "Sai sempre cosa dire, come dirlo, quando dirlo",
        },
        {
          icon: Video,
          title: "Editing Video",
          description: "Tu registri, noi montiamo e ottimizziamo",
        },
      ],
    },
    {
      id: "gestione",
      title: "GESTIONE",
      icon: BarChart3,
      color: "emerald-400",
      gradient: "from-emerald-400/20 to-emerald-400/5",
      borderColor: "border-emerald-400/30",
      hoverBorder: "group-hover:border-emerald-400",
      services: [
        {
          icon: Megaphone,
          title: "Advertising Gestito",
          description: "Campagne ottimizzate per clienti pronti a comprare",
        },
        {
          icon: BarChart3,
          title: "Confronto Settimanale",
          description: "Numeri chiari, performance reali, decisioni operative",
        },
        {
          icon: User,
          title: "Un Unico Referente",
          description: "Un solo contatto. Niente caos.",
        },
      ],
    },
  ];

  const timelineSteps = [
    { icon: Target, label: "STRATEGIA", color: "text-gold" },
    { icon: Video, label: "PRODUZIONE", color: "text-blue-400" },
    { icon: BarChart3, label: "GESTIONE", color: "text-emerald-400" },
    { icon: Zap, label: "RISULTATI", color: "text-gold" },
  ];

  const results = [
    "Attrae clienti qualificati",
    "Li converte in appuntamenti",
    "Ti libera dalle attività ripetitive",
    "Scala con il tuo business",
  ];

  const getCategoryColors = (color: string) => {
    switch (color) {
      case "gold":
        return {
          bg: "bg-gold/10",
          border: "border-gold/30",
          text: "text-gold",
          iconBg: "bg-gold",
          badge: "bg-gold/20 text-gold border-gold/30",
        };
      case "blue-400":
        return {
          bg: "bg-blue-400/10",
          border: "border-blue-400/30",
          text: "text-blue-400",
          iconBg: "bg-blue-400",
          badge: "bg-blue-400/20 text-blue-400 border-blue-400/30",
        };
      case "emerald-400":
        return {
          bg: "bg-emerald-400/10",
          border: "border-emerald-400/30",
          text: "text-emerald-400",
          iconBg: "bg-emerald-400",
          badge: "bg-emerald-400/20 text-emerald-400 border-emerald-400/30",
        };
      default:
        return {
          bg: "bg-gold/10",
          border: "border-gold/30",
          text: "text-gold",
          iconBg: "bg-gold",
          badge: "bg-gold/20 text-gold border-gold/30",
        };
    }
  };

  return (
    <section id="servizi" className="section-padding bg-card relative overflow-hidden">
      <div className="container-narrow">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              COSA OTTIENI CON{" "}
              <span className="text-gold">MARKETING EDILE®</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Non un elenco di servizi. Un <span className="text-gold font-semibold">SISTEMA</span> completo che funziona.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection delay={0.2}>
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full">
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                    <span className={`text-sm font-bold ${step.color}`}>
                      {step.label}
                    </span>
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5 text-muted-foreground mx-2 hidden md:block" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Category Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12" staggerDelay={0.15}>
          {categories.map((category) => {
            const colors = getCategoryColors(category.color);
            return (
              <StaggerItem key={category.id}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`group h-full p-6 bg-background border ${colors.border} rounded-2xl transition-all duration-300 hover:border-opacity-100 hover:shadow-xl hover:shadow-gold/10`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                      <category.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${colors.text}`}>
                        {category.title}
                      </h3>
                      <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium border rounded-full ${colors.badge}`}>
                        {category.services.length} servizi
                      </span>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: serviceIndex * 0.1 }}
                        className="flex gap-3"
                      >
                        <div className={`flex-shrink-0 w-8 h-8 ${colors.bg} rounded-lg flex items-center justify-center`}>
                          <service.icon className={`w-4 h-4 ${colors.text}`} />
                        </div>
                        <div>
                          <h4 className="text-foreground font-semibold text-sm">
                            {service.title}
                          </h4>
                          <p className="text-muted-foreground text-xs leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Results Box */}
        <AnimatedSection delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative p-8 bg-gradient-to-br from-gold/10 via-background to-gold/5 border border-gold/30 rounded-2xl overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  IL RISULTATO?
                </h3>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                Un sistema che lavora per te <span className="text-gold font-semibold">24/7</span>:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {results.map((result, index) => (
                  <motion.div
                    key={result}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-gold/20 border border-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-foreground font-medium">
                      {result}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
