import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/marketing-edile-logo.png";

const navLinks = [
  { label: "Il Problema", href: "#problema" },
  { label: "Chi Siamo", href: "#differenza" },
  { label: "Metodo", href: "#metodo" },
  { label: "Servizi", href: "#servizi" },
  { label: "Prezzi", href: "#prezzi" },
  { label: "Blog", href: "/blog", isExternal: true },
];

const Footer = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 bg-navy-light border-t border-border/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block mb-4"
            >
              <img src={logo} alt="Marketing Edile" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground mb-6">
              Il sistema di marketing costruito sul campo per aziende edili e
              serramentisti.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4 uppercase tracking-wider text-sm">
              Link Rapidi
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-bold mb-4 uppercase tracking-wider text-sm">
              Contatti
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@marketingedile.it"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold" />
                info@marketingedile.it
              </a>
              <a
                href="tel:+390000000000"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                +39 000 000 0000
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span>Italia</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MARKETING EDILE® — Tutti i diritti
            riservati
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
