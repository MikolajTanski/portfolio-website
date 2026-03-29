export type ProjectDescSegment =
  | { kind: "text"; value: string }
  | { kind: "repo" }
  | { kind: "certs" };

/**
 * Dzieli opis projektu na fragmenty tekstu oraz placeholdery `{{repo}}` / `{{certs}}`.
 */
export function parseProjectDescription(description: string): ProjectDescSegment[] {
  const out: ProjectDescSegment[] = [];
  const re = /\{\{repo\}\}|\{\{certs\}\}/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(description)) !== null) {
    if (m.index > last) {
      out.push({ kind: "text", value: description.slice(last, m.index) });
    }
    out.push(m[0] === "{{repo}}" ? { kind: "repo" } : { kind: "certs" });
    last = m.index + m[0].length;
  }
  if (last < description.length) {
    out.push({ kind: "text", value: description.slice(last) });
  }
  return out;
}
