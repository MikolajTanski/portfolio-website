import { motion } from "framer-motion";
import TerminalCursor from "@/components/TerminalCursor";
import { useLocale } from "@/i18n/useLocale";
import { Award, ExternalLink } from "lucide-react";

const cardClassName =
  "group flex flex-col bg-card border border-border rounded-lg p-5 transition-all duration-300 glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const CertificationsSection = () => {
  const { t } = useLocale();
  const certifications = t.certifications.items;

  return (
    <section className="py-24" id="certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm mb-2 text-muted-foreground flex flex-wrap items-center">
            <span className="text-primary">~/</span>certifications
            <span className="text-muted-foreground/45 ml-2 tabular-nums">· 05</span>
            <TerminalCursor />
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">{t.certifications.sectionTitle}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`${cardClassName} hover:border-glow`}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
