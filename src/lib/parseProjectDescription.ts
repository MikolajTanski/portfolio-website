export type ProjectDescSegment =
  | { type: "text"; value: string }
  | { type: "repo" }
  | { type: "certs" };

/** Splits copy with `{{repo}}` / `{{certs}}` markers into segments for React / pdfmake. */
export function parseProjectDescription(description: string): ProjectDescSegment[] {
  const out: ProjectDescSegment[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const re = /\{\{(repo|certs)\}\}/g;
  while ((m = re.exec(description)) !== null) {
    if (m.index > last) {
      out.push({ type: "text", value: description.slice(last, m.index) });
    }
    out.push({ type: m[1] as "repo" | "certs" });
    last = m.index + m[0].length;
  }
  if (last < description.length) {
    out.push({ type: "text", value: description.slice(last) });
  }
  return out;
}

export type PdfDescPart = {
  text: string;
  link?: string;
  color?: string;
  decoration?: string;
};

export function projectDescriptionToPdfParts(
  description: string,
  opts: {
    repoUrl: string | null;
    certsHref: string;
    labelRepo: string;
    labelCerts: string;
    textColor: string;
    linkColor: string;
  },
): PdfDescPart[] {
  const segments = parseProjectDescription(description);
  const parts: PdfDescPart[] = [];
  for (const seg of segments) {
    if (seg.type === "text") {
      if (seg.value) parts.push({ text: seg.value, color: opts.textColor });
      continue;
    }
    if (seg.type === "repo") {
      if (opts.repoUrl) {
        parts.push({
          text: opts.labelRepo,
          link: opts.repoUrl,
          color: opts.linkColor,
          decoration: "underline",
        });
      } else {
        parts.push({ text: opts.labelRepo, color: opts.textColor });
      }
      continue;
    }
    parts.push({
      text: opts.labelCerts,
      link: opts.certsHref,
      color: opts.linkColor,
      decoration: "underline",
    });
  }
  return parts;
}
