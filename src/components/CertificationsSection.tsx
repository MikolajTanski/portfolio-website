import { motion, useReducedMotion } from "framer-motion";
import TerminalCursor from "@/components/TerminalCursor";
import { useLocale } from "@/i18n/useLocale";
import { Award, ExternalLink } from "lucide-react";

const easeSoft = [0.22, 1, 0.36, 1] as const;

const cardClassName =
  "group flex flex-col bg-card border border-border rounded-lg p-5 transition-[border-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const CertificationsSection = () => {
  const { t } = useLocale();
  const reduceMotion = useReducedMotion() === true;
  const certifications = t.certifications.items;

  const motionProps = {
    initial: reduceMotion ? { y: 0 } : { y: 14 },
    whileInView: { y: 0 },
    viewport: { once: true, amount: 0.08, margin: "0px 0px -12% 0px" } as const,
    transition: { duration: reduceMotion ? 0 : 0.42, ease: easeSoft },
  };

  return (
    <section className="py-24" id="certifications">
      <div className="container">
        <div className="mb-12">
          <p className="font-mono text-sm mb-2 text-muted-foreground flex flex-wrap items-center">
            <span className="text-primary">~/</span>certifications
            <span className="text-muted-foreground/45 ml-2 tabular-nums">· 06</span>
            <TerminalCursor />
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">{t.certifications.sectionTitle}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
          {certifications.map((cert) => {
            const verified = cert.includeInCv && cert.url;

            if (verified) {
              return (
                <motion.a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardClassName} hover:border-glow hover:glow`}
                  {...motionProps}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <ExternalLink
                      className="w-3.5 h-3.5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5"
                      aria-hidden
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-sm leading-snug group-hover:text-primary transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-xs font-mono mt-auto">
                    {cert.issuer} · {cert.year}
                  </p>
                </motion.a>
              );
            }

            return (
              <motion.div
                key={cert.title}
                className={`${cardClassName} border-dashed border-primary/25 opacity-95 cursor-default hover:border-glow hover:glow`}
                aria-label={`${cert.title}, ${t.certifications.upcomingLabel}`}
                {...motionProps}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-sm leading-snug mb-1">{cert.title}</h3>
                <p className="text-muted-foreground text-xs font-mono mt-auto">
                  {cert.issuer} · {t.certifications.upcomingLabel}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
