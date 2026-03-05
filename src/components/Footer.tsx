import { motion } from "framer-motion";
import { Mail, MapPin, Building2 } from "lucide-react";
import logoImg from "@/assets/vendita-edile-logo.png";

// Configura qui l'URL del tuo form esterno
const EXTERNAL_FORM_URL = "https://example.typeform.com/to/your-form";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Il Metodo", href: "#metodo" },
  { label: "Investimento", href: "#investimento" },
  { label: "Candidati", href: "#candidati" },
];

const Footer = () => {
  const handleSmoothScroll = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href.startsWith("#")) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark border-t border-border">
      <div className="container-narrow section-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <button onClick={scrollToTop} className="mb-4">
              <img src={logoImg} alt="VENDITA EDILE®" className="h-10 w-auto" />
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed">
              L'unico programma di affiancamento vendite per imprenditori edili.
              Costruito sul campo, testato su risultati reali.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-foreground font-semibold mb-4">Link Rapidi</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleSmoothScroll(link.href)}
                    className="text-muted-foreground text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-foreground font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>Amministrazione@domusgroupitalia.it</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Via Aurelio Saffi 29, 20123 Milano</span>
              </li>
            </ul>
          </motion.div>

          {/* Dati Aziendali */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-foreground font-semibold mb-4">Dati Aziendali</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Domus Group S.r.l.</span>
              </li>
              <li>P.IVA: 13132010961</li>
              <li>Capitale Sociale: 20.000,00€</li>
              <li>PEC: domusgroupsrl@legalmail.it</li>
              <li>SDI: USAL8PV</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Domus Group S.r.l. — VENDITA EDILE®. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <button className="text-muted-foreground hover:text-gold transition-colors">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-gold transition-colors">
              Termini di Servizio
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
