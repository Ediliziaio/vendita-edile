import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/vendita-edile-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Il Metodo", href: "#metodo" },
  { label: "Investimento", href: "#investimento" },
  { label: "Candidati", href: "#candidati" },
];

// Configura qui l'URL del tuo form esterno
const EXTERNAL_FORM_URL = "https://example.typeform.com/to/your-form";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section on homepage
      if (location.pathname === "/") {
        const sections = ["metodo", "investimento", "candidati"];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              return;
            }
          }
        }
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleSmoothScroll = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href.startsWith("#")) {
      const targetId = href.slice(1);

      if (location.pathname === "/") {
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
      } else {
        navigate(`/${href}`);
      }
    }
  };

  const handleCtaClick = () => {
    setIsMobileMenuOpen(false);
    window.open(EXTERNAL_FORM_URL, "_blank");
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-narrow flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
          {/* Logo */}
          <motion.button
            onClick={() => handleSmoothScroll("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <img src={logoImg} alt="VENDITA EDILE®" className="h-8 md:h-10 w-auto" />
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleSmoothScroll(link.href)}
                className={`text-sm font-medium transition-colors hover-underline ${
                  activeSection === link.href.slice(1)
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="gold" size="sm" onClick={handleCtaClick}>
              Candidati Ora
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleSmoothScroll(link.href)}
                  className="text-2xl font-medium text-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="gold"
                size="lg"
                onClick={handleCtaClick}
                className="mt-4"
              >
                Candidati Ora
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
