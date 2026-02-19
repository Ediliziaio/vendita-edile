import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <button onClick={scrollToTop} className="mb-4">
              <span className="text-2xl font-black text-foreground tracking-tight">
                VENDITA <span className="text-gold">EDILE</span>
                <span className="text-gold text-xs align-super">®</span>
              </span>
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
                <Mail className="w-4 h-4 text-gold" />
                <span>info@venditaedile.it</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-gold" />
                <span>+39 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Italia</span>
              </li>
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
            © {new Date().getFullYear()} VENDITA EDILE®. Tutti i diritti riservati.
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
