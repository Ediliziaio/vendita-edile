import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, TrendingDown, Target, Euro, Calculator, ArrowRight, TrendingUp, AlertCircle } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const lossTimeline = [
  { period: "OGNI MESE", loss: "50.000", detail: "Vendite perse + margini compressi" },
  { period: "OGNI ANNO", loss: "360.000-600.000", detail: "Fatturato bruciato" },
  { period: "IN 3 ANNI", loss: "1.000.000+", detail: "Patrimonio evaporato" }
];

const hiddenCosts = [
  { icon: Clock, label: "TEMPO", line: "480 ore/anno in trattative che non chiudono" },
  { icon: TrendingDown, label: "MARGINI", line: "-20/30% su ogni preventivo = lavori per pagare le bollette" },
  { icon: Target, label: "OPPORTUNITÀ", line: "Clienti premium che vanno ai concorrenti = crescita bloccata" },
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

const venditePrima = Math.round(infissiExample.trattativeMese * (infissiExample.tassoChiusuraAttuale / 100));
const venditeDopo = Math.round(infissiExample.trattativeMese * (infissiExample.tassoChiusuraDopo / 100));
const marginePrima = venditePrima * infissiExample.commessaMedia * (infissiExample.marginePercentuale / 100);
const margineDopo = venditeDopo * infissiExample.commessaMedia * (infissiExample.marginePercentuale / 100);
const margineExtraMese = margineDopo - marginePrima;

const roiTimeline = [
  { periodo: "3 MESI", margineExtra: margineExtraMese * 3, roi: ((margineExtraMese * 3) / infissiExample.investimento).toFixed(1) },
  { periodo: "6 MESI", margineExtra: margineExtraMese * 6, roi: ((margineExtraMese * 6) / infissiExample.investimento).toFixed(1) },
  { periodo: "1 ANNO", margineExtra: margineExtraMese * 12, roi: ((margineExtraMese * 12) / infissiExample.investimento).toFixed(1) },
  { periodo: "3 ANNI", margineExtra: margineExtraMese * 36, roi: ((margineExtraMese * 36) / infissiExample.investimento).toFixed(1) }
];

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

  const [errors, setErrors] = useState<{
    trattative?: string;
    chiusuraAttuale?: string;
    commessaMedia?: string;
    margine?: string;
  }>({});

  const chiusuraDopo = 40;
  const investimento = 9000;

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
    const error = validateField(field, numValue);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const isFormValid = !errors.trattative && !errors.chiusuraAttuale && !errors.commessaMedia && !errors.margine &&
    formData.trattative > 0 && formData.chiusuraAttuale > 0 && formData.chiusuraAttuale < 40 &&
    formData.commessaMedia >= 1000 && formData.margine >= 5;

  const calcVenditePrima = Math.round(formData.trattative * (formData.chiusuraAttuale / 100));
  const calcVenditeDopo = Math.round(formData.trattative * (chiusuraDopo / 100));
  const calcMarginePerVendita = formData.commessaMedia * (formData.margine / 100);
  const calcMargineMesePrima = calcVenditePrima * calcMarginePerVendita;
  const calcMargineMeseDopo = calcVenditeDopo * calcMarginePerVendita;
  const calcMargineExtra = calcMargineMeseDopo - calcMargineMesePrima;
  const calcGiorniPayback = calcMargineExtra > 0 ? Math.round((investimento / calcMargineExtra) * 30) : 0;

  const calcRoiTimeline = [
    { periodo: "3 MESI", margineExtra: calcMargineExtra * 3, roi: calcMargineExtra > 0 ? ((calcMargineExtra * 3) / investimento).toFixed(1) : "0" },
    { periodo: "6 MESI", margineExtra: calcMargineExtra * 6, roi: calcMargineExtra > 0 ? ((calcMargineExtra * 6) / investimento).toFixed(1) : "0" },
    { periodo: "1 ANNO", margineExtra: calcMargineExtra * 12, roi: calcMargineExtra > 0 ? ((calcMargineExtra * 12) / investimento).toFixed(1) : "0" },
    { periodo: "3 ANNI", margineExtra: calcMargineExtra * 36, roi: calcMargineExtra > 0 ? ((calcMargineExtra * 36) / investimento).toFixed(1) : "0" }
  ];
  
  return (
    <section id="costo-reale" className="py-20 md:py-32 bg-gradient-to-b from-background via-gold/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 text-gold text-sm font-medium">
              <Euro className="w-4 h-4" />
              Facciamo due conti. Ti faranno male.
            </span>
          </div>
        </AnimatedSection>

        {/* Headline — no duplicated subtitle */}
        <AnimatedSection delay={0.1}>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-center mb-12 text-foreground">
            IL VERO COSTO DI CONTINUARE COSÌ
          </h2>
        </AnimatedSection>

        {/* Loss Timeline — il pugno */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {lossTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/30 rounded-2xl p-6 text-center"
                >
                  <p className="text-sm font-bold text-gold mb-2">{item.period}</p>
                  <p className="text-3xl md:text-4xl font-black text-destructive mb-2" ref={index === 0 ? monthlyRef : undefined}>
                    €{index === 0 ? monthlyCount.toLocaleString('it-IT') : item.loss}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 3 Hidden Costs — inline, compatto */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {hiddenCosts.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-card/50 border border-gold/20 rounded-xl p-4">
                  <item.icon className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="font-black text-foreground text-sm">{item.label}: </span>
                    <span className="text-sm text-muted-foreground">{item.line}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* PRIMA vs DOPO — semplificato */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
                <Calculator className="w-4 h-4" />
                ESEMPIO CONCRETO — Serramentista con 20 Trattative/Mese
              </span>
              <p className="text-xs text-muted-foreground mt-2">
                20 trattative/mese | 15% chiusura | €9.500 commessa | 40% margine | €9.000 investimento
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* PRIMA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-destructive/10 border-2 border-destructive/30 rounded-2xl p-6"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <TrendingDown className="w-5 h-5 text-destructive" />
                  <h4 className="font-black text-destructive text-lg">OGGI (15% chiusura)</h4>
                </div>
                <div className="space-y-3 text-center">
                  <div className="bg-destructive/10 rounded-xl p-3">
                    <p className="text-2xl md:text-3xl font-black text-foreground">{venditePrima}</p>
                    <p className="text-sm text-muted-foreground">vendite/mese</p>
                  </div>
                  <div className="bg-destructive/20 rounded-xl p-4">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-black text-destructive">€{marginePrima.toLocaleString('it-IT')}</p>
                    <p className="text-sm text-muted-foreground">margine/mese</p>
                  </div>
                </div>
              </motion.div>

              {/* DOPO */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gold/10 border-2 border-gold/30 rounded-2xl p-6"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-gold" />
                  <h4 className="font-black text-gold text-lg">DOPO (40% chiusura)</h4>
                </div>
                <div className="space-y-3 text-center">
                  <div className="bg-gold/10 rounded-xl p-3">
                    <p className="text-2xl md:text-3xl font-black text-foreground">{venditeDopo}</p>
                    <p className="text-sm text-muted-foreground">vendite/mese</p>
                  </div>
                  <div className="bg-gold/20 rounded-xl p-4">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-black text-gold">€{margineDopo.toLocaleString('it-IT')}</p>
                    <p className="text-sm text-muted-foreground">margine/mese</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* +€19.000 badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-center mb-12"
            >
              <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-gold/20 border-2 border-gold rounded-2xl sm:rounded-full px-6 py-4 sm:px-8">
                <span className="text-base md:text-lg text-foreground font-bold">DIFFERENZA:</span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-black text-gold" ref={extraRef}>
                  +€{extraCount.toLocaleString('it-IT')}
                </span>
                <span className="text-base md:text-lg text-foreground font-bold">/mese EXTRA</span>
              </div>
            </motion.div>

            {/* Timeline ROI */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-center text-foreground mb-6">Il Tuo ROI Nel Tempo</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {roiTimeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-2xl p-5 text-center"
                  >
                    <p className="text-sm font-bold text-gold mb-2">{item.periodo}</p>
                    <p className="text-2xl md:text-3xl font-black text-foreground mb-1">
                      +€{item.margineExtra.toLocaleString('it-IT')}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">margine extra</p>
                    <div className="bg-gold/30 rounded-full px-3 py-1 inline-block">
                      <span className="text-sm font-black text-gold">ROI: {item.roi}x</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Gold box — closer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-gold text-background rounded-2xl p-6 md:p-8 text-center mb-8"
            >
              <motion.p 
                className="text-2xl md:text-3xl font-black"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                L'investimento si ripaga in meno di 15 giorni.
              </motion.p>
            </motion.div>

            {/* CTA Calcolatore */}
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground mb-4">
                Vuoi vedere i <span className="text-gold font-bold">TUOI</span> numeri?
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="gold" className="font-bold text-lg px-8 py-6 glow-gold">
                    <Calculator className="w-5 h-5 mr-2" />
                    CALCOLA IL TUO ROI
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-black text-foreground flex items-center gap-2">
                      <Calculator className="w-6 h-6 text-gold" />
                      Calcola il TUO ROI
                    </DialogTitle>
                    <p className="text-muted-foreground">
                      Inserisci i numeri della tua azienda e scopri il tuo potenziale
                    </p>
                  </DialogHeader>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="trattative" className="text-foreground">Trattative/mese</Label>
                      <Input id="trattative" type="number" min={1} max={200} value={formData.trattative}
                        onChange={(e) => handleInputChange('trattative', e.target.value)}
                        className={cn("bg-muted border-border text-foreground", errors.trattative && "border-destructive focus-visible:ring-destructive")} />
                      {errors.trattative && <p className="text-sm text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.trattative}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="chiusura" className="text-foreground">Chiusura attuale (%)</Label>
                      <Input id="chiusura" type="number" min={1} max={39} value={formData.chiusuraAttuale}
                        onChange={(e) => handleInputChange('chiusuraAttuale', e.target.value)}
                        className={cn("bg-muted border-border text-foreground", errors.chiusuraAttuale && "border-destructive focus-visible:ring-destructive")} />
                      {errors.chiusuraAttuale && <p className="text-sm text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.chiusuraAttuale}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="commessa" className="text-foreground">Commessa media (€)</Label>
                      <Input id="commessa" type="number" min={1000} max={500000} value={formData.commessaMedia}
                        onChange={(e) => handleInputChange('commessaMedia', e.target.value)}
                        className={cn("bg-muted border-border text-foreground", errors.commessaMedia && "border-destructive focus-visible:ring-destructive")} />
                      {errors.commessaMedia && <p className="text-sm text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.commessaMedia}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="margine" className="text-foreground">Margine (%)</Label>
                      <Input id="margine" type="number" min={5} max={80} value={formData.margine}
                        onChange={(e) => handleInputChange('margine', e.target.value)}
                        className={cn("bg-muted border-border text-foreground", errors.margine && "border-destructive focus-visible:ring-destructive")} />
                      {errors.margine && <p className="text-sm text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.margine}</p>}
                    </div>
                  </div>

                  {isFormValid && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 text-center">
                          <p className="text-sm font-bold text-destructive mb-2">OGGI ({formData.chiusuraAttuale}%)</p>
                          <p className="text-xl font-black text-foreground">{calcVenditePrima} vendite</p>
                          <p className="text-lg font-bold text-destructive mt-2">€{calcMargineMesePrima.toLocaleString('it-IT')}/mese</p>
                        </div>
                        <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 text-center">
                          <p className="text-sm font-bold text-gold mb-2">DOPO ({chiusuraDopo}%)</p>
                          <p className="text-xl font-black text-foreground">{calcVenditeDopo} vendite</p>
                          <p className="text-lg font-bold text-gold mt-2">€{calcMargineMeseDopo.toLocaleString('it-IT')}/mese</p>
                        </div>
                      </div>
                      <div className="bg-gold/20 border-2 border-gold rounded-xl p-4 text-center">
                        <p className="text-sm text-foreground mb-1">MARGINE EXTRA MENSILE</p>
                        <p className="text-3xl font-black text-gold">+€{calcMargineExtra.toLocaleString('it-IT')}</p>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {calcRoiTimeline.map((item, index) => (
                          <div key={index} className="bg-muted/50 border border-border rounded-lg p-3 text-center">
                            <p className="text-xs font-bold text-gold">{item.periodo}</p>
                            <p className="text-sm font-black text-foreground">+€{item.margineExtra.toLocaleString('it-IT')}</p>
                            <p className="text-xs text-muted-foreground">ROI: {item.roi}x</p>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gradient-to-r from-gold to-gold/80 text-background rounded-xl p-4 text-center">
                        <p className="text-sm mb-1">Con un investimento di €{investimento.toLocaleString('it-IT')}</p>
                        <p className="text-xl font-black">Sei in positivo in {calcGiorniPayback} giorni</p>
                      </div>
                      <Button className="w-full bg-gold hover:bg-gold/90 text-background font-bold text-lg py-6"
                        onClick={() => { const s = document.getElementById('candidatura'); if (s) s.scrollIntoView({ behavior: 'smooth' }); }}>
                        VOGLIO QUESTI RISULTATI
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  )}

                  {!isFormValid && (
                    <div className="mt-6 bg-muted/50 border border-border rounded-xl p-4 text-center">
                      <p className="text-muted-foreground font-medium">Correggi i campi evidenziati per vedere i risultati</p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </AnimatedSection>

        {/* Domanda finale — chiusura emotiva */}
        <AnimatedSection delay={0.5}>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-foreground">
              Quanti mesi puoi ancora permetterti di perdere
              <span className="text-destructive"> €{margineExtraMese.toLocaleString('it-IT')}</span>?
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VETrueCostSection;
