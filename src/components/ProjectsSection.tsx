import { motion } from "framer-motion";
import { ProjectDescriptionText } from "@/components/ProjectDescriptionText";
import TerminalCursor from "@/components/TerminalCursor";
import { useLocale } from "@/i18n/useLocale";
import { projectMeta } from "@/i18n/messages";
import type { LucideIcon } from "lucide-react";
import { Cloud, ExternalLink, LayoutTemplate, Link2, Rocket, ShoppingBag } from "lucide-react";

const projectIcons: LucideIcon[] = [Cloud, Link2, ShoppingBag, LayoutTemplate, Rocket];

const ProjectsSection = () => {
  const { t } = useLocale();
  const projects = projectMeta.map((meta, i) => ({
    ...meta,
    ...t.projects.items[i],
    icon: projectIcons[i],
  }));

  return (
    <section className="py-24" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm mb-2 text-muted-foreground flex flex-wrap items-center">
            <span className="text-primary">~/</span>projects
            <span className="text-muted-foreground/45 ml-2 tabular-nums">· 05</span>
            <TerminalCursor />
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">{t.projects.sectionTitle}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
          {projects.map((project, i) => {
            const Icon = project.icon;
            const cardBase =
              "group flex flex-col h-full bg-card border border-border rounded-lg p-6 sm:p-8 glow transition-[border-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
            const cardLinked = "hover:border-glow hover:glow";
            const cardPending = "border-dashed border-primary/25 opacity-95 cursor-default";
            const cardClassName = `${cardBase} ${project.url ? cardLinked : cardPending}`;
            const motionProps = {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true, amount: 0.2 as const },
              transition: { duration: 0.35, delay: i * 0.05 },
            };
            const body = (
              <>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-xs font-mono">{project.subtitle}</p>
                    </div>
                  </div>
                  {project.url ? (
                    <ExternalLink
                      className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-1"
                      aria-hidden
                    />
                  ) : null}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  <ProjectDescriptionText
                    description={project.description}
                    repoUrl={project.url}
                    certsHref="#certifications"
                    linkLabelRepo={t.projects.linkLabelRepo}
                    linkLabelCerts={t.projects.linkLabelCerts}
                  />
                </p>

                <div className="flex gap-2 flex-wrap mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            );

            if (project.url) {
              return (
                <motion.a
                  key={project.url}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                  {...motionProps}
                >
                  {body}
                </motion.a>
              );
            }

            return (
              <motion.article
                key={project.title}
                className={cardClassName}
                aria-label={`${project.title}, ${t.certifications.inProgress}`}
                {...motionProps}
              >
                {body}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
