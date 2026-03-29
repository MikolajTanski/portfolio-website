import { motion } from "framer-motion";
import TerminalCursor from "@/components/TerminalCursor";
import { useLocale } from "@/i18n/useLocale";

const ExperienceSection = () => {
  const { t } = useLocale();
  const experiences = t.experience.items;

  return (
    <section className="py-24" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm mb-2 text-muted-foreground flex flex-wrap items-center">
            <span className="text-primary">~/</span>experience
            <span className="text-muted-foreground/45 ml-2 tabular-nums">· 03</span>
            <TerminalCursor />
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">{t.experience.sectionTitle}</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors duration-300"
            >
              <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-primary/80 border-2 border-background" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-heading font-semibold">{exp.role}</h3>
                  <p className="text-primary font-mono text-sm">{exp.company}</p>
                </div>
                <span className="font-mono text-muted-foreground text-sm mt-1 md:mt-0">{exp.period}</span>
              </div>

              <ul className="space-y-2">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80 ring-1 ring-primary/25"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
