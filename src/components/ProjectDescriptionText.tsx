import { parseProjectDescription } from "@/lib/parseProjectDescription";

const linkClass =
  "text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary transition-colors";

type Props = {
  description: string;
  repoUrl: string | null;
  certsHref: string;
  linkLabelRepo: string;
  linkLabelCerts: string;
};

/** Renders project copy with `{{repo}}` / `{{certs}}` replaced by links. */
export function ProjectDescriptionText({ description, repoUrl, certsHref, linkLabelRepo, linkLabelCerts }: Props) {
  const segments = parseProjectDescription(description);
  return (
    <>
      {segments.map((seg, i) => {
        if (seg.type === "text") {
          return <span key={i}>{seg.value}</span>;
        }
        if (seg.type === "repo") {
          if (!repoUrl) {
            return (
              <span key={i} className="text-muted-foreground">
                {linkLabelRepo}
              </span>
            );
          }
          return (
            <a key={i} href={repoUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {linkLabelRepo}
            </a>
          );
        }
        return (
          <a key={i} href={certsHref} className={linkClass}>
            {linkLabelCerts}
          </a>
        );
      })}
    </>
  );
}
