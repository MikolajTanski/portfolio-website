import { motion } from "framer-motion";
import TerminalCursor from "@/components/TerminalCursor";
import { useLocale } from "@/i18n/useLocale";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const { t } = useLocale();
  const education = t.education.items;

  return (
    <section className="py-24" id="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm mb-2 text-muted-foreground flex flex-wrap items-center">
            <span className="text-primary">~/</span>education
            <span className="text-muted-foreground/45 ml-2 tabular-nums">· 04</span>
            <TerminalCursor />
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">{t.education.sectionTitle}</h2>
        </motion.div>

        <div className="space-y-6 max-w-2xl">
          {education.map((edu, i) => (
            <motion.div
              key={`${edu.degree}-${edu.year}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm">{edu.field}</p>
                <p className="text-muted-foreground text-xs font-mono mt-1">
                  {edu.school} · {edu.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
