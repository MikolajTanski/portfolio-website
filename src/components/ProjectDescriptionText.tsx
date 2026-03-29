import { parseProjectDescription } from "@/lib/parseProjectDescription";

type Props = {
  description: string;
  repoUrl: string | null;
  certsHref: string;
  linkLabelRepo: string;
  linkLabelCerts: string;
};

export function ProjectDescriptionText({
  description,
  repoUrl,
  certsHref,
  linkLabelRepo,
  linkLabelCerts,
}: Props) {
  const segments = parseProjectDescription(description);

  return (
    <>
      {segments.map((seg, i) => {
        if (seg.kind === "text") {
          return <span key={i}>{seg.value}</span>;
        }
        if (seg.kind === "repo") {
          if (repoUrl) {
            return (
              <a
                key={i}
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-2"
              >
                {linkLabelRepo}
              </a>
            );
          }
          return (
            <span key={i} className="text-muted-foreground">
              {linkLabelRepo}
            </span>
          );
        }
        return (
          <a key={i} href={certsHref} className="text-primary hover:underline underline-offset-2">
            {linkLabelCerts}
          </a>
        );
      })}
    </>
  );
}
