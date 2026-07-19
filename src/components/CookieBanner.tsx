import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "ve_cookie_notice_v1";

/**
 * Avviso cookie (banner informativo).
 * Nota: è un AVVISO, non un gestore di consenso: il sito usa cookie tecnici e
 * di marketing (incluso il Meta Pixel) che sono attivi da subito. Il banner
 * informa e rimanda alla Cookie Policy; alla conferma non ricompare più.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* no-op */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label="Avviso cookie"
          className="fixed inset-x-0 bottom-0 z-[100] px-3 pb-3 md:px-4 md:pb-4"
        >
          <div className="container-narrow">
            <div className="flex flex-col gap-4 rounded-2xl border border-secondary/30 bg-card/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-md md:flex-row md:items-center md:gap-6 md:p-5">
              <div className="flex items-start gap-3 md:items-center">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/15">
                  <Cookie className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Usiamo cookie tecnici e di marketing (incluso il Meta Pixel) per
                  migliorare la tua esperienza e le nostre campagne. Continuando la
                  navigazione acconsenti. Dettagli nella{" "}
                  <Link
                    to="/cookie"
                    className="font-medium text-secondary hover:underline"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-shrink-0 items-center gap-3 md:ml-auto">
                <Button
                  variant="gold"
                  size="sm"
                  onClick={dismiss}
                  className="w-full md:w-auto"
                >
                  Accetto
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
  );
}
