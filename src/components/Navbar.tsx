import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useLocale } from "@/i18n/useLocale";
import type { Locale } from "@/i18n/messages";
import { downloadCvPdf } from "@/lib/generateCvPdf";

function LocaleToggle() {
  const { locale, setLocale, t } = useLocale();
  const btn = (lang: Locale, label: string) => (
    <button
      type="button"
      onClick={() => setLocale(lang)}
      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors min-w-[2.5rem] ${
        locale === lang
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div
      className="flex items-center rounded-md border border-border p-0.5 shrink-0"
      role="group"
      aria-label={t.a11y.language}
    >
      {btn("en", "EN")}
      {btn("pl", "PL")}
    </div>
  );
}

const Navbar = () => {
  const { t, locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [cvLoading, setCvLoading] = useState(false);

  const handleDownloadCv = async () => {
    setCvLoading(true);
    try {
      await downloadCvPdf(t, locale);
    } catch (err) {
      console.error(err);
      window.alert(t.nav.cvDownloadFailed);
    } finally {
      setCvLoading(false);
    }
  };

  const links = [
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.certifications, href: "#certifications" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border pt-[env(safe-area-inset-top)]">
      <div className="container flex items-center min-h-14 gap-3">
        <a href="#" className="font-mono font-bold text-sm text-primary tracking-wider py-3 shrink-0">
          MT<span className="text-muted-foreground">.dev</span>
        </a>

        <div className="flex flex-1 min-w-0 justify-end items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
                {l.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={handleDownloadCv}
            disabled={cvLoading}
            className="inline-flex items-center gap-2 rounded-md border border-primary/35 bg-primary/5 px-2.5 sm:px-3 py-1.5 font-mono text-xs text-primary hover:bg-primary/10 hover:border-primary/55 transition-colors whitespace-nowrap shrink-0 disabled:opacity-60 disabled:pointer-events-none"
          >
            <Download className="w-3.5 h-3.5 shrink-0" aria-hidden />
            <span className="max-[420px]:hidden">{cvLoading ? "…" : t.nav.downloadCv}</span>
            <span className="hidden max-[420px]:inline">{cvLoading ? "…" : "CV"}</span>
          </button>
          <div className="flex items-center gap-2 shrink-0">
            <LocaleToggle />
            <button
              type="button"
              aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="md:hidden text-muted-foreground hover:text-primary transition-colors p-3 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-b border-border"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-mono text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
