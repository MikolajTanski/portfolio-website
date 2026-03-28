import { motion } from "framer-motion";
import TerminalCursor from "@/components/TerminalCursor";
import { useLocale } from "@/i18n/useLocale";

const SkillsSection = () => {
  const { t } = useLocale();

  return (
    <section className="py-24" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm mb-2 text-muted-foreground flex flex-wrap items-center">
            <span className="text-primary">~/</span>skills
            <span className="text-muted-foreground/45 ml-2 tabular-nums">· 02</span>
            <TerminalCursor />
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">{t.skills.sectionTitle}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {t.skills.categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col h-full bg-card border border-border rounded-lg p-6 hover:border-glow hover:glow transition-[border-color,box-shadow] duration-300"
            >
              <h3 className="font-mono text-primary text-sm mb-4 tracking-wider uppercase shrink-0">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2 content-start flex-1">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center min-h-[2rem] px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono rounded-md border border-border leading-snug"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
