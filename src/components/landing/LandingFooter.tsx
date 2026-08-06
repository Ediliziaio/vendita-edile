import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

/**
 * Footer minimale per le landing pubblicitarie (replica del footer
 * delle pagine funnel originali): solo dati legali + link policy,
 * senza navigazione, per non disperdere il traffico delle ads.
 */
export function LandingFooter() {
  return (
    <footer className="bg-[#0E182C] px-6 py-12 text-center text-white">
      <div className="mx-auto max-w-3xl space-y-2">
        <p className="text-lg font-bold">{siteConfig.company.legalName}</p>
        <p className="text-sm text-white/70">
          Sede Legale: {siteConfig.company.address}
        </p>
        <p className="text-sm text-white/70">P.IVA: {siteConfig.company.vat}</p>
        <div className="flex items-center justify-center gap-4 pt-4 text-sm">
          <Link to="/privacy" className="text-white/80 underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          <span className="text-white/40">·</span>
          <Link to="/cookie" className="text-white/80 underline-offset-4 hover:underline">
            Cookie Policy
          </Link>
          <span className="text-white/40">·</span>
          <Link to="/termini" className="text-white/80 underline-offset-4 hover:underline">
            Termini
          </Link>
        </div>
      </div>
    </footer>
  );
}
