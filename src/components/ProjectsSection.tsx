import { motion, useReducedMotion } from "framer-motion";
import { Boxes, Cloud, ExternalLink, FileStack, LayoutTemplate, Rocket, type LucideIcon } from "lucide-react";

/** Ikona dopasowana do tematu projektu (kolejność = `projectMeta` / `t.projects.items`). */
const PROJECT_ICONS: readonly LucideIcon[] = [Boxes, FileStack, Cloud, LayoutTemplate, Rocket];
import { ProjectDescriptionText } from "@/components/ProjectDescriptionText";
import TerminalCursor from "@/components/TerminalCursor";
import { projectMeta } from "@/i18n/messages";
import { useLocale } from "@/i18n/useLocale";

/** Tylko translateY — bez opacity (0→1 powoduje „miganie” przy whileInView). */
const easeSoft = [0.22, 1, 0.36, 1] as const;

const cardClass =
  "flex flex-col bg-card border border-border rounded-lg p-6 transition-all duration-300 glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background h-full";

const ProjectsSection = () => {
  const { t } = useLocale();
  const reduceMotion = useReducedMotion() === true;
  const projects = projectMeta.map((meta, i) => ({
    ...meta,
    ...t.projects.items[i]!,
  }));

  const certsHref = "/#certifications";

  return (
    <section className="py-24" id="projects">
      <div className="container">
        <div className="mb-12">
          <p className="font-mono text-sm mb-2 text-muted-foreground flex flex-wrap items-center">
            <span className="text-primary">~/</span>projects
            <span className="text-muted-foreground/45 ml-2 tabular-nums">· 04</span>
            <TerminalCursor />
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">{t.projects.sectionTitle}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
          {projects.map((project, i) => {
            const pending = project.url === null;
            const cardPending = pending ? "border-dashed border-primary/25 opacity-95" : "";
            const ProjectIcon = PROJECT_ICONS[i] ?? PROJECT_ICONS[0];

            const heading = (
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <ProjectIcon className="w-4 h-4 text-primary" aria-hidden />
                </div>
                {!pending && (
                  <ExternalLink
                    className="w-3.5 h-3.5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5"
                    aria-hidden
                  />
                )}
              </div>
            );

            const titleBlock = (
              <>
                <h3 className="font-heading font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary/90 font-mono text-sm mb-3">{project.subtitle}</p>
              </>
            );

            return (
              <motion.div
                key={project.title}
                className={`group ${cardClass} ${cardPending} ${!pending ? "hover:border-glow" : ""}`}
                initial={reduceMotion ? { y: 0 } : { y: 14 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.08, margin: "0px 0px -12% 0px" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.42,
                  ease: easeSoft,
                }}
              >
                {pending ? (
                  <>
                    {heading}
                    {titleBlock}
                  </>
                ) : (
                  <a
                    href={project.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block -m-1 p-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {heading}
                    {titleBlock}
                  </a>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  <ProjectDescriptionText
                    description={project.description}
                    repoUrl={project.url}
                    certsHref={certsHref}
                    linkLabelRepo={t.projects.linkLabelRepo}
                    linkLabelCerts={t.projects.linkLabelCerts}
                  />
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
