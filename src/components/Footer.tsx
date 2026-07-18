import { Mail, MapPin, Building2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "@/assets/vendita-edile-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Il Metodo", href: "#metodo" },
  { label: "Investimento", href: "#investimento" },
  { label: "Blog", href: "/blog" },
  { label: "Candidati", href: "#candidati" },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleSmoothScroll = (href: string) => {
    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (href.startsWith("/")) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        navigate(`/${href}`);
        return;
      }
      const element = document.getElementById(href.slice(1));
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark border-t border-border">
      <div className="container-narrow px-4 md:px-6 lg:px-24 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button onClick={scrollToTop} className="mb-3">
              <img src={logoImg} alt="VENDITA EDILE®" className="h-8 md:h-10 w-auto" />
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed">
              L'unico programma di affiancamento vendite per imprenditori edili.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-3 text-sm">Link Rapidi</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleSmoothScroll(link.href)}
                    className="text-muted-foreground text-sm hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti + Dati Aziendali merged */}
          <div>
            <h3 className="text-foreground font-semibold mb-3 text-sm">Contatti & Dati</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-secondary shrink-0" />
                <a href="mailto:Amministrazione@domusgroupitalia.it" className="hover:text-secondary transition-colors truncate">
                  Amministrazione@domusgroupitalia.it
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>Via Aurelio Saffi 29, 20123 Milano</span>
              </li>
              <li className="flex items-start gap-2 pt-2 border-t border-border mt-2">
                <Building2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <span className="block">Domus Group S.r.l.</span>
                  <span className="block">P.IVA: 13132010961</span>
                  <span className="block">PEC: domusgroupsrl@legalmail.it</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Domus Group S.r.l. — VENDITA EDILE®</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie" className="hover:text-secondary transition-colors">
              Cookie Policy
            </Link>
            <Link to="/termini" className="hover:text-secondary transition-colors">
              Termini
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
