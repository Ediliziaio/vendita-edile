import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Brain, TrendingDown, Users, Target, Euro, Calculator, ArrowRight, TrendingUp, UserPlus, AlertCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const lossTimeline = [
  { period: "OGNI MESE", loss: "30.000-50.000", detail: "Vendite perse + margini compressi" },
  { period: "OGNI ANNO", loss: "360.000-600.000", detail: "Fatturato bruciato" },
  { period: "IN 3 ANNI", loss: "1.000.000+", detail: "Patrimonio evaporato" }
];

const hiddenCosts = [
  {
    icon: Clock,
    cost: "TEMPO",
    impact: "40+ ore/mese in trattative che non chiudono",
    detail: "= 480 ore/anno buttate"
  },
  {
    icon: Brain,
    cost: "STRESS",
    impact: "Notti insonni, ansia, salute compromessa",
    detail: "= incalcolabile"
  },
  {
    icon: TrendingDown,
    cost: "MARGINI",
    impact: "-20/30% su ogni preventivo",
    detail: "= lavori per pagare le bollette"
  },
  {
    icon: Target,
    cost: "OPPORTUNITÀ",
    impact: "Clienti premium che vanno ai concorrenti",
    detail: "= crescita bloccata"
  },
  {
    icon: Users,
    cost: "TEAM",
    impact: "Commerciali demotivati, turnover alto",
    detail: "= costi di formazione continui"
  }
];

// Esempio concreto serramentista
const infissiExample = {
  trattativeMese: 20,
  tassoChiusuraAttuale: 15,
  tassoChiusuraDopo: 40,
  commessaMedia: 9500,
  marginePercentuale: 40,
  investimento: 9000
};

// Calcoli derivati
const venditePrima = Math.round(infissiExample.trattativeMese * (infissiExample.tassoChiusuraAttuale / 100));
const venditeDopo = Math.round(infissiExample.trattativeMese * (infissiExample.tassoChiusuraDopo / 100));
const fatturatoPrima = venditePrima * infissiExample.commessaMedia;
const fatturatoDopo = venditeDopo * infissiExample.commessaMedia;
const marginePrima = fatturatoPrima * (infissiExample.marginePercentuale / 100);
const margineDopo = fatturatoDopo * (infissiExample.marginePercentuale / 100);
const margineExtraMese = margineDopo - marginePrima;
const marginePerVendita = infissiExample.commessaMedia * (infissiExample.marginePercentuale / 100);

// Timeline ROI
const roiTimeline = [
  { 
    periodo: "3 MESI", 
    margineExtra: margineExtraMese * 3,
    roi: ((margineExtraMese * 3) / infissiExample.investimento).toFixed(1)
  },
  { 
    periodo: "6 MESI", 
    margineExtra: margineExtraMese * 6,
    roi: ((margineExtraMese * 6) / infissiExample.investimento).toFixed(1)
  },
  { 
    periodo: "1 ANNO", 
    margineExtra: margineExtraMese * 12,
    roi: ((margineExtraMese * 12) / infissiExample.investimento).toFixed(1)
  },
  { 
    periodo: "3 ANNI", 
    margineExtra: margineExtraMese * 36,
    roi: ((margineExtraMese * 36) / infissiExample.investimento).toFixed(1)
  }
];

// Crescita con commerciale aggiuntivo
const trattativeConComm = 40;
const venditeConComm = Math.round(trattativeConComm * (infissiExample.tassoChiusuraDopo / 100));
const margineConComm = venditeConComm * marginePerVendita;
const margineExtra3AnniConComm = margineConComm * 30; // 2.5 anni (dopo 6 mesi)

const VETrueCostSection = () => {
  const { ref: monthlyRef, count: monthlyCount } = useCountUp({ end: 50000, duration: 2000 });
  const { ref: extraRef, count: extraCount } = useCountUp({ end: margineExtraMese, duration: 2500 });
  
  // State per il calcolatore ROI
  const [formData, setFormData] = useState({
    trattative: 20,
    chiusuraAttuale: 15,
    commessaMedia: 9500,
    margine: 40
  });

  // State per errori di validazione
  const [errors, setErrors] = useState<{
    trattative?: string;
    chiusuraAttuale?: string;
    commessaMedia?: string;
    margine?: string;
  }>({});

  const chiusuraDopo = 40; // Target fisso del programma
  const investimento = 9000;

  // Funzione di validazione per ogni campo
  const validateField = (field: keyof typeof formData, value: number): string | undefined => {
    switch (field) {
      case 'trattative':
        if (!value || value <= 0) return "Campo obbligatorio";
        if (value > 200) return "Massimo 200 trattative/mese";
        break;
      case 'chiusuraAttuale':
        if (!value || value <= 0) return "Campo obbligatorio";
        if (value >= 40) return "Deve essere inferiore al 40%";
        if (value > 100) return "Non può superare 100%";
        break;
      case 'commessaMedia':
        if (!value || value <= 0) return "Campo obbligatorio";
        if (value < 1000) return "Minimo €1.000";
        if (value > 500000) return "Massimo €500.000";
        break;
      case 'margine':
        if (!value || value <= 0) return "Campo obbligatorio";
        if (value < 5) return "Minimo 5%";
        if (value > 80) return "Massimo 80%";
        break;
    }
    return undefined;
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    const numValue = parseFloat(value) || 0;
    setFormData(prev => ({ ...prev, [field]: numValue }));
    
    // Valida il campo e aggiorna errori
    const error = validateField(field, numValue);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  // Verifica se il form è valido
  const isFormValid = !errors.trattative && 
                      !errors.chiusuraAttuale && 
                      !errors.commessaMedia && 
                      !errors.margine &&
                      formData.trattative > 0 &&
                      formData.chiusuraAttuale > 0 &&
                      formData.chiusuraAttuale < 40 &&
                      formData.commessaMedia >= 1000 &&
                      formData.margine >= 5;

  // Calcoli derivati in tempo reale
  const calcVenditePrima = Math.round(formData.trattative * (formData.chiusuraAttuale / 100));
  const calcVenditeDopo = Math.round(formData.trattative * (chiusuraDopo / 100));
  const calcMarginePerVendita = formData.commessaMedia * (formData.margine / 100);
  const calcMargineMesePrima = calcVenditePrima * calcMarginePerVendita;
  const calcMargineMeseDopo = calcVenditeDopo * calcMarginePerVendita;
  const calcMargineExtra = calcMargineMeseDopo - calcMargineMesePrima;
  const calcGiorniPayback = calcMargineExtra > 0 ? Math.round((investimento / calcMargineExtra) * 30) : 0;

  // Timeline ROI personalizzata
  const calcRoiTimeline = [
    { periodo: "3 MESI", margineExtra: calcMargineExtra * 3, roi: calcMargineExtra > 0 ? ((calcMargineExtra * 3) / investimento).toFixed(1) : "0" },
    { periodo: "6 MESI", margineExtra: calcMargineExtra * 6, roi: calcMargineExtra > 0 ? ((calcMargineExtra * 6) / investimento).toFixed(1) : "0" },
    { periodo: "1 ANNO", margineExtra: calcMargineExtra * 12, roi: calcMargineExtra > 0 ? ((calcMargineExtra * 12) / investimento).toFixed(1) : "0" },
    { periodo: "3 ANNI", margineExtra: calcMargineExtra * 36, roi: calcMargineExtra > 0 ? ((calcMargineExtra * 36) / investimento).toFixed(1) : "0" }
  ];
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-destructive/10 to-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-destructive/15 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Pre-header */}
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
              <Euro className="w-4 h-4" />
              Facciamo due conti. Ti faranno male.
            </span>
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-foreground">
            IL VERO COSTO DI CONTINUARE COSÌ
            <span className="block text-destructive text-2xl md:text-3xl mt-2">(E perché non puoi più ignorarlo)</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Facciamo i conti. Ti faranno male, ma devi vederli.
          </p>
        </AnimatedSection>

        {/* Loss Timeline */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {lossTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-destructive/20 to-destructive/5 border border-destructive/30 rounded-2xl p-6 text-center"
                >
                  <p className="text-sm font-bold text-destructive mb-2">{item.period}</p>
                  <p className="text-3xl md:text-4xl font-black text-foreground mb-2" ref={index === 0 ? monthlyRef : undefined}>
                    €{index === 0 ? monthlyCount.toLocaleString('it-IT') : item.loss}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Hidden Costs Grid */}
        <AnimatedSection delay={0.3}>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            I Costi Che <span className="text-destructive">Non Vedi</span> (Ma Paghi Ogni Giorno)
          </h3>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {hiddenCosts.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card/50 backdrop-blur-sm border border-destructive/20 rounded-xl p-5 h-full text-center"
              >
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-destructive" />
                </div>
                <h4 className="font-black text-foreground mb-2">{item.cost}</h4>
                <p className="text-sm text-muted-foreground mb-1">{item.impact}</p>
                <p className="text-xs font-bold text-destructive">{item.detail}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ESEMPIO CONCRETO SERRAMENTISTA */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-5xl mx-auto mb-16">
            {/* Header Esempio */}
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <Calculator className="w-4 h-4" />
                ESEMPIO CONCRETO CON NUMERI REALI
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-foreground">
                Serramentista con {infissiExample.trattativeMese} Trattative/Mese
              </h3>
            </div>

            {/* Box Parametri */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-muted/50 border border-border rounded-2xl p-6 mb-8"
            >
              <p className="text-sm font-bold text-muted-foreground mb-4 text-center">PARAMETRI DI PARTENZA</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div>
                  <p className="text-2xl font-black text-foreground">{infissiExample.trattativeMese}</p>
                  <p className="text-xs text-muted-foreground">Trattative/mese</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-destructive">{infissiExample.tassoChiusuraAttuale}%</p>
                  <p className="text-xs text-muted-foreground">Chiusura attuale</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-foreground">€{infissiExample.commessaMedia.toLocaleString('it-IT')}</p>
                  <p className="text-xs text-muted-foreground">Commessa media</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-foreground">{infissiExample.marginePercentuale}%</p>
                  <p className="text-xs text-muted-foreground">Margine</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-primary">€{infissiExample.investimento.toLocaleString('it-IT')}</p>
                  <p className="text-xs text-muted-foreground">Investimento</p>
                </div>
              </div>
            </motion.div>

            {/* Confronto PRIMA vs DOPO */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* PRIMA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-destructive/10 border-2 border-destructive/30 rounded-2xl p-6"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <TrendingDown className="w-5 h-5 text-destructive" />
                  <h4 className="font-black text-destructive text-lg">OGGI ({infissiExample.tassoChiusuraAttuale}% chiusura)</h4>
                </div>
                <div className="space-y-3 text-center">
                  <div className="bg-destructive/10 rounded-xl p-3">
                    <p className="text-3xl font-black text-foreground">{venditePrima}</p>
                    <p className="text-sm text-muted-foreground">vendite/mese</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">€{fatturatoPrima.toLocaleString('it-IT')} fatturato</span>
                  </div>
                  <div className="bg-destructive/20 rounded-xl p-4">
                    <p className="text-4xl font-black text-destructive">€{marginePrima.toLocaleString('it-IT')}</p>
                    <p className="text-sm text-muted-foreground">margine/mese</p>
                  </div>
                </div>
              </motion.div>

              {/* DOPO */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h4 className="font-black text-primary text-lg">DOPO ({infissiExample.tassoChiusuraDopo}% chiusura)</h4>
                </div>
                <div className="space-y-3 text-center">
                  <div className="bg-primary/10 rounded-xl p-3">
                    <p className="text-3xl font-black text-foreground">{venditeDopo}</p>
                    <p className="text-sm text-muted-foreground">vendite/mese</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">€{fatturatoDopo.toLocaleString('it-IT')} fatturato</span>
                  </div>
                  <div className="bg-primary/20 rounded-xl p-4">
                    <p className="text-4xl font-black text-primary">€{margineDopo.toLocaleString('it-IT')}</p>
                    <p className="text-sm text-muted-foreground">margine/mese</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Freccia Risultato */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 bg-primary/20 border-2 border-primary rounded-full px-8 py-4">
                <span className="text-lg text-foreground font-bold">DIFFERENZA:</span>
                <span className="text-3xl md:text-4xl font-black text-primary" ref={extraRef}>
                  +€{extraCount.toLocaleString('it-IT')}
                </span>
                <span className="text-lg text-foreground font-bold">/mese EXTRA</span>
              </div>
            </motion.div>

            {/* Timeline ROI */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-center text-foreground mb-6">
                Il Tuo ROI Nel Tempo
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {roiTimeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-5 text-center"
                  >
                    <p className="text-sm font-bold text-primary mb-2">{item.periodo}</p>
                    <p className="text-2xl md:text-3xl font-black text-foreground mb-1">
                      +€{item.margineExtra.toLocaleString('it-IT')}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">margine extra</p>
                    <div className="bg-primary/30 rounded-full px-3 py-1 inline-block">
                      <span className="text-sm font-black text-primary">ROI: {item.roi}x</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Crescita con Commerciale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8 mb-8"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <UserPlus className="w-6 h-6 text-primary" />
                <h4 className="text-lg md:text-xl font-bold text-foreground">
                  E se dopo 6 mesi aggiungi 1 commerciale?
                </h4>
              </div>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-black text-foreground">{trattativeConComm}</p>
                  <p className="text-xs text-muted-foreground">trattative/mese</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-foreground">{venditeConComm}</p>
                  <p className="text-xs text-muted-foreground">vendite/mese</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-primary">€{margineConComm.toLocaleString('it-IT')}</p>
                  <p className="text-xs text-muted-foreground">margine/mese</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-primary">+€{margineExtra3AnniConComm.toLocaleString('it-IT')}</p>
                  <p className="text-xs text-muted-foreground">in 3 anni</p>
                </div>
              </div>
            </motion.div>

            {/* Call-out Finale */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 text-center"
            >
              <p className="text-lg md:text-xl font-bold mb-2">
                Hai investito €{infissiExample.investimento.toLocaleString('it-IT')} e in 3 mesi hai già generato €{(margineExtraMese * 3).toLocaleString('it-IT')} di margine EXTRA.
              </p>
              <motion.p 
                className="text-2xl md:text-3xl font-black"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                L'investimento si ripaga in meno di 15 giorni.
              </motion.p>
            </motion.div>

            {/* Calcolatore ROI Personalizzato */}
            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground mb-4">
                Vuoi vedere i <span className="text-primary font-bold">TUOI</span> numeri?
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 font-bold text-lg px-8 py-6"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    CALCOLA IL TUO ROI PERSONALIZZATO
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-black text-foreground flex items-center gap-2">
                      <Calculator className="w-6 h-6 text-primary" />
                      Calcola il TUO ROI
                    </DialogTitle>
                    <p className="text-muted-foreground">
                      Inserisci i numeri della tua azienda e scopri il tuo potenziale
                    </p>
                  </DialogHeader>

                  {/* Form Input */}
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="trattative" className="text-foreground">Trattative/mese</Label>
                      <Input
                        id="trattative"
                        type="number"
                        min={1}
                        max={200}
                        value={formData.trattative}
                        onChange={(e) => handleInputChange('trattative', e.target.value)}
                        className={cn(
                          "bg-muted border-border text-foreground",
                          errors.trattative && "border-destructive focus-visible:ring-destructive"
                        )}
                      />
                      {errors.trattative && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.trattative}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="chiusura" className="text-foreground">Chiusura attuale (%)</Label>
                      <Input
                        id="chiusura"
                        type="number"
                        min={1}
                        max={39}
                        value={formData.chiusuraAttuale}
                        onChange={(e) => handleInputChange('chiusuraAttuale', e.target.value)}
                        className={cn(
                          "bg-muted border-border text-foreground",
                          errors.chiusuraAttuale && "border-destructive focus-visible:ring-destructive"
                        )}
                      />
                      {errors.chiusuraAttuale && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.chiusuraAttuale}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="commessa" className="text-foreground">Commessa media (€)</Label>
                      <Input
                        id="commessa"
                        type="number"
                        min={1000}
                        max={500000}
                        value={formData.commessaMedia}
                        onChange={(e) => handleInputChange('commessaMedia', e.target.value)}
                        className={cn(
                          "bg-muted border-border text-foreground",
                          errors.commessaMedia && "border-destructive focus-visible:ring-destructive"
                        )}
                      />
                      {errors.commessaMedia && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.commessaMedia}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="margine" className="text-foreground">Margine (%)</Label>
                      <Input
                        id="margine"
                        type="number"
                        min={5}
                        max={80}
                        value={formData.margine}
                        onChange={(e) => handleInputChange('margine', e.target.value)}
                        className={cn(
                          "bg-muted border-border text-foreground",
                          errors.margine && "border-destructive focus-visible:ring-destructive"
                        )}
                      />
                      {errors.margine && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.margine}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Risultati in tempo reale - solo se form valido */}
                  {isFormValid && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-6 space-y-4"
                    >
                      {/* Confronto OGGI vs DOPO */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 text-center">
                          <p className="text-sm font-bold text-destructive mb-2">OGGI ({formData.chiusuraAttuale}%)</p>
                          <p className="text-xl font-black text-foreground">{calcVenditePrima} vendite</p>
                          <p className="text-sm text-muted-foreground">€{(calcVenditePrima * formData.commessaMedia).toLocaleString('it-IT')} fatturato</p>
                          <p className="text-lg font-bold text-destructive mt-2">€{calcMargineMesePrima.toLocaleString('it-IT')}/mese</p>
                        </div>
                        <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
                          <p className="text-sm font-bold text-primary mb-2">DOPO ({chiusuraDopo}%)</p>
                          <p className="text-xl font-black text-foreground">{calcVenditeDopo} vendite</p>
                          <p className="text-sm text-muted-foreground">€{(calcVenditeDopo * formData.commessaMedia).toLocaleString('it-IT')} fatturato</p>
                          <p className="text-lg font-bold text-primary mt-2">€{calcMargineMeseDopo.toLocaleString('it-IT')}/mese</p>
                        </div>
                      </div>

                      {/* Differenza */}
                      <div className="bg-primary/20 border-2 border-primary rounded-xl p-4 text-center">
                        <p className="text-sm text-foreground mb-1">MARGINE EXTRA MENSILE</p>
                        <p className="text-3xl font-black text-primary">+€{calcMargineExtra.toLocaleString('it-IT')}</p>
                      </div>

                      {/* Timeline ROI */}
                      <div className="grid grid-cols-4 gap-2">
                        {calcRoiTimeline.map((item, index) => (
                          <div key={index} className="bg-muted/50 border border-border rounded-lg p-3 text-center">
                            <p className="text-xs font-bold text-primary">{item.periodo}</p>
                            <p className="text-sm font-black text-foreground">+€{item.margineExtra.toLocaleString('it-IT')}</p>
                            <p className="text-xs text-muted-foreground">ROI: {item.roi}x</p>
                          </div>
                        ))}
                      </div>

                      {/* Payback */}
                      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl p-4 text-center">
                        <p className="text-sm mb-1">Con un investimento di €{investimento.toLocaleString('it-IT')}</p>
                        <p className="text-xl font-black">
                          Sei in positivo in {calcGiorniPayback} giorni
                        </p>
                      </div>

                      {/* CTA */}
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6"
                        onClick={() => {
                          const section = document.getElementById('candidatura');
                          if (section) section.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        VOGLIO QUESTI RISULTATI
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  )}

                  {!isFormValid && (
                    <div className="mt-6 bg-muted/50 border border-border rounded-xl p-4 text-center">
                      <p className="text-muted-foreground font-medium">
                        Correggi i campi evidenziati per vedere i risultati
                      </p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </AnimatedSection>

        {/* Final Question */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mb-8">
            <p className="text-xl md:text-2xl font-bold text-foreground">
              Quanti mesi puoi ancora permetterti di perdere
              <span className="text-destructive"> €{margineExtraMese.toLocaleString('it-IT')}</span>?
            </p>
          </div>
        </AnimatedSection>

        {/* Transition - collegamento alla sezione successiva */}
        <AnimatedSection delay={0.6}>
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-2">
              Ma chi sta VINCENDO in questo mercato? E cosa fanno di diverso?
            </p>
            <p className="text-xl font-bold text-foreground">
              <span className="text-primary">Ecco cosa li distingue...</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VETrueCostSection;
