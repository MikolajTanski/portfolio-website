import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import TerminalCursor from "@/components/TerminalCursor";
import { showPublicPhone } from "@/config/site";
import { useLocale } from "@/i18n/useLocale";

const HeroSection = () => {
  const { t } = useLocale();
  const nameParts = t.hero.name.trim().split(/\s+/);
  const firstName = nameParts[0] ?? "";
  const lastName = nameParts.slice(1).join(" ");

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(160 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(160 100% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-sm mb-4 text-muted-foreground flex flex-wrap items-center">
            <span className="text-primary">~/</span>hello-world
            <TerminalCursor />
          </p>

          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-4">
            {firstName}
            <br />
            <span className="text-gradient">{lastName}</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8 inline-block max-w-full min-w-0 align-top"
          >
            {/* inline-block + p (max-content) ustala szerokość; kreska 100% — pewniejsze niż flex w WebKit. */}
            <p className="mb-2 w-max max-w-full font-mono text-base sm:text-lg md:text-xl text-secondary-foreground leading-snug">
              {t.hero.roles.split("|").map((part, i, arr) => (
                <span key={i}>
                  {part.trim()}
                  {i < arr.length - 1 && <span className="text-primary"> · </span>}
                </span>
              ))}
            </p>
            <div className="h-0.5 w-full rounded-sm bg-primary/55" aria-hidden />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-2xl text-muted-foreground leading-relaxed mb-10 text-base md:text-lg"
          >
            {t.hero.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap gap-6 text-sm font-mono"
          >
            <a
              href={`mailto:${t.hero.email}`}
              className="flex items-start sm:items-center gap-2 text-muted-foreground hover:text-primary transition-colors min-w-0 max-w-full"
            >
              <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5 sm:mt-0" />
              <span className="break-all sm:break-normal">{t.hero.email}</span>
            </a>
            {showPublicPhone && (
              <a
                href={`tel:${t.hero.phoneTel}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-primary shrink-0" />
                {t.hero.phoneDisplay}
              </a>
            )}
            <span className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden />
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-[0.7rem] font-mono uppercase tracking-wide text-muted-foreground/75">
                  {t.hero.locationLabel}
                </span>
                <span>{t.hero.location}</span>
              </span>
            </span>
          </motion.div>
        </motion.div>

        {/* Terminal cursor decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 right-10 hidden lg:block font-mono text-muted-foreground/30 text-sm"
        >
          <span className="text-primary/40">$</span> {t.hero.terminalDecoration}
          <span className="inline-block w-2 h-4 bg-primary/60 ml-1 animate-blink" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
