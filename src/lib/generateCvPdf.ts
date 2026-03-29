import type { Locale, Messages } from "@/i18n/messages";
import { SITE_URL, showPublicPhone } from "@/config/site";

type PdfContent = Record<string, unknown> | Record<string, unknown>[];

/** Matches site `:root` — dark shell + mint primary (hsl 160 100% ~50%) */
const palette = {
  page: "#0b0d10",
  text: "#e6e8eb",
  textMuted: "#9aa3ad",
  textDim: "#6b7684",
  accent: "#00e68a",
  accentDim: "#00b870",
  rule: "#2a3038",
  ruleAccent: "#00e68a",
} as const;

/**
 * Builds a PDF from `t` for the active UI language (`messagesPl` or `messagesEn`).
 */
type PdfMakeBrowser = {
  addVirtualFileSystem: (vfs: Record<string, string>) => void;
  createPdf: (doc: Record<string, unknown>) => { download: (filename: string) => Promise<void> };
};

function resolvePdfMake(mod: { default?: PdfMakeBrowser } & Record<string, unknown>): PdfMakeBrowser {
  const d = mod.default;
  if (d && typeof d.addVirtualFileSystem === "function" && typeof d.createPdf === "function") {
    return d;
  }
  if (typeof (mod as PdfMakeBrowser).addVirtualFileSystem === "function") {
    return mod as PdfMakeBrowser;
  }
  throw new Error("pdfmake: invalid module export");
}

const ROLES_FONT_PT = 10.5;

/** Approximate underline width for pdfmake canvas (no text measure API in doc tree). */
function rolesLineWidthPts(rolesLine: string): number {
  const plain = rolesLine
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean)
    .join(" · ");
  // ~0.52em average glyph width for mixed Latin at ~10.5pt; cap so it never spills the column on long strings.
  return Math.min(440, Math.max(96, plain.length * ROLES_FONT_PT * 0.52));
}

function rolesRichText(rolesLine: string): Record<string, unknown> {
  const parts = rolesLine.split("|").map((s) => s.trim());
  const nodes: { text: string; color?: string }[] = [];
  for (let i = 0; i < parts.length; i++) {
    if (i > 0) {
      nodes.push({ text: " · ", color: palette.accent });
    }
    nodes.push({ text: parts[i]!, color: palette.textMuted });
  }
  return { text: nodes, fontSize: ROLES_FONT_PT, margin: [0, 10, 0, 10] };
}

/** PDF document properties — not printed on the page; factual only (roles + skills from `t`). */
function buildPdfDocumentInfo(t: Messages) {
  const roleParts = t.hero.roles
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
  const skillTokens = t.skills.categories.flatMap((c) => c.skills);
  const keywords = [...new Set([...roleParts, ...skillTokens])].join(", ");
  const rolesLine = roleParts.join(" · ");
  return {
    // Title shows in browser tab / file lists — name + roles reads professional and matches typical searches (e.g. .NET, Azure).
    title: rolesLine ? `${t.hero.name} — ${rolesLine}` : `CV — ${t.hero.name}`,
    author: t.hero.name,
    subject: rolesLine,
    keywords,
  };
}

const CV_PHOTO_PATH = "/cv-photo.png";

async function fetchCvPhotoDataUrl(): Promise<string> {
  const base = typeof window !== "undefined" ? window.location.origin : "";
  const url = `${base}${CV_PHOTO_PATH}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Nie znaleziono zdjęcia CV (${res.status})`);
  }
  const blob = await res.blob();
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Odczyt zdjęcia nie powiódł się"));
    reader.readAsDataURL(blob);
  });
}

function sectionHeader(title: string): PdfContent {
  return {
    stack: [
      {
        text: title.toUpperCase(),
        fontSize: 9,
        letterSpacing: 1.2,
        bold: true,
        color: palette.accent,
        margin: [0, 18, 0, 6],
      },
      {
        canvas: [
          {
            type: "line" as const,
            x1: 0,
            y1: 0,
            x2: 499,
            y2: 0,
            lineWidth: 0.5,
            lineColor: palette.rule,
          },
        ],
        margin: [0, 0, 0, 10],
      },
    ],
  };
}

type ExperienceItem = Messages["experience"]["items"][number];

function experienceJobHeader(job: ExperienceItem): PdfContent {
  return {
    columns: [
      {
        width: "*",
        stack: [
          {
            text: job.role,
            bold: true,
            fontSize: 10.5,
            color: palette.text,
          },
          {
            text: job.company,
            fontSize: 9.5,
            color: palette.accentDim,
            margin: [0, 2, 0, 0],
          },
        ],
      },
      {
        width: "auto",
        text: job.period,
        fontSize: 8.5,
        color: palette.textDim,
        alignment: "right",
        noWrap: true,
      },
    ],
    margin: [0, 10, 0, 6],
  };
}

/** Kolumna kropka | tekst — osobno unbreakable; nagłówek + pierwszy punkt łączone w stack, żeby nie zostawał sam nagłówek na łamie strony. */
function experienceBulletRow(point: string): PdfContent {
  return {
    unbreakable: true,
    columns: [
      {
        width: 14,
        margin: [0, 3, 0, 0],
        canvas: [
          {
            type: "ellipse" as const,
            x: 5,
            y: 6,
            r1: 2.3,
            r2: 2.3,
            color: palette.accent,
          },
        ],
      },
      {
        width: "*",
        text: point,
        fontSize: 9,
        color: palette.textMuted,
        lineHeight: 1.35,
      },
    ],
    columnGap: 6,
    margin: [0, 0, 0, 4],
  };
}

export async function downloadCvPdf(t: Messages, locale: Locale): Promise<void> {
  const pdfMakeMod = await import("pdfmake/build/pdfmake");
  const vfsMod = await import("pdfmake/build/vfs_fonts");
  const pdfMake = resolvePdfMake(pdfMakeMod as { default?: PdfMakeBrowser } & Record<string, unknown>);
  const vfs = (vfsMod as { default?: Record<string, string> }).default ?? (vfsMod as Record<string, string>);
  pdfMake.addVirtualFileSystem(vfs);

  const nameParts = t.hero.name.trim().split(/\s+/);
  const firstName = nameParts[0] ?? t.hero.name;
  const lastName = nameParts.slice(1).join(" ");
  /** Public portfolio URL in PDF — always production, not localhost when generating locally. */
  const sitePublic = SITE_URL.replace(/\/$/, "");

  let cvPhotoDataUrl: string | null = null;
  try {
    cvPhotoDataUrl = await fetchCvPhotoDataUrl();
  } catch {
    console.warn(`[CV PDF] Brak zdjęcia pod ${CV_PHOTO_PATH} — generuję bez fotografii.`);
  }

  const headerTextStack: PdfContent[] = [
    {
      text: firstName,
      fontSize: 26,
      bold: true,
      color: palette.text,
    },
    ...(lastName
      ? [
          {
            text: lastName,
            fontSize: 26,
            bold: true,
            color: palette.accent,
            margin: [0, -2, 0, 0],
          } as PdfContent,
        ]
      : []),
    rolesRichText(t.hero.roles),
    {
      canvas: [
        {
          type: "line" as const,
          x1: 0,
          y1: 0,
          x2: rolesLineWidthPts(t.hero.roles),
          y2: 0,
          lineWidth: 1,
          lineColor: palette.ruleAccent,
        },
      ],
      margin: [0, 0, 0, 0],
    },
  ];

  const headerBlock: PdfContent = cvPhotoDataUrl
    ? {
        columns: [
          {
            width: 124,
            stack: [
              {
                image: "cvPhoto",
                width: 118,
                alignment: "center" as const,
              },
            ],
            margin: [0, 0, 12, 0],
          },
          { width: "auto" as const, stack: headerTextStack },
        ],
        columnGap: 14,
        margin: [0, 0, 0, 12],
      }
    : {
        stack: headerTextStack,
        margin: [0, 0, 0, 12],
      };

  const content: PdfContent[] = [
    headerBlock,
    {
      text: t.hero.bio,
      fontSize: 10,
      lineHeight: 1.35,
      color: palette.textMuted,
      margin: [0, 0, 0, 14],
    },
    {
      columns: [
        {
          width: "*",
          stack: [
            { text: t.cvPdf.emailLabel, fontSize: 7.5, color: palette.textDim, margin: [0, 0, 0, 2] },
            { text: t.hero.email, fontSize: 9, color: palette.text },
          ],
        },
        ...(showPublicPhone
          ? [
              {
                width: "auto" as const,
                stack: [
                  { text: t.cvPdf.phoneLabel, fontSize: 7.5, color: palette.textDim, margin: [0, 0, 0, 2] },
                  {
                    text: t.hero.phoneDisplay,
                    fontSize: 9,
                    color: palette.text,
                    noWrap: true,
                  },
                ],
              },
            ]
          : []),
        {
          width: "*",
          stack: [
            { text: t.hero.locationLabel, fontSize: 7.5, color: palette.textDim, margin: [0, 0, 0, 2] },
            { text: t.hero.location, fontSize: 9, color: palette.text },
          ],
        },
      ],
      columnGap: 12,
      margin: [0, 0, 0, 6],
    },
  ];

  content.push({
    text: t.cvPdf.portfolioLabel,
    fontSize: 7.5,
    color: palette.textDim,
    margin: [0, 0, 0, 2],
  });
  content.push({
    text: sitePublic.replace(/^https?:\/\//, ""),
    link: `${sitePublic}/`,
    fontSize: 9,
    color: palette.accent,
    decoration: "underline",
    margin: [0, 0, 0, 4],
  });

  content.push(sectionHeader(t.skills.sectionTitle));
  for (const cat of t.skills.categories) {
    content.push({
      text: cat.title,
      bold: true,
      fontSize: 10,
      color: palette.text,
      margin: [0, 0, 0, 4],
    });
    content.push({
      text: cat.skills.join("  ·  "),
      fontSize: 9,
      color: palette.textMuted,
      margin: [0, 0, 0, 10],
    });
  }

  content.push(sectionHeader(t.experience.sectionTitle));
  for (const job of t.experience.items) {
    const header = experienceJobHeader(job);
    const pts = job.points;
    if (pts.length === 0) {
      content.push({ unbreakable: true, stack: [header] });
      continue;
    }
    const [first, ...rest] = pts;
    content.push({
      unbreakable: true,
      stack: [header, experienceBulletRow(first)],
    });
    for (const p of rest) {
      content.push(experienceBulletRow(p));
    }
  }

  content.push(sectionHeader(t.education.sectionTitle));
  for (const ed of t.education.items) {
    content.push({
      text: `${ed.degree} — ${ed.field}`,
      bold: true,
      fontSize: 10,
      color: palette.text,
      margin: [0, 10, 0, 2],
    });
    content.push({
      text: `${ed.school}, ${ed.year}`,
      fontSize: 9,
      color: palette.textMuted,
      margin: [0, 0, 0, 10],
    });
  }

  content.push(sectionHeader(t.certifications.sectionTitle));
  for (const c of t.certifications.items) {
    content.push({
      text: c.title,
      bold: true,
      fontSize: 10,
      color: palette.text,
      margin: [0, 10, 0, 2],
    });
    content.push({
      text: `${c.issuer} (${c.year})`,
      link: c.url,
      fontSize: 9,
      color: palette.textMuted,
      decoration: "underline",
      margin: [0, 0, 0, 10],
    });
  }

  const docDefinition: Record<string, unknown> = {
    info: buildPdfDocumentInfo(t),
    pageMargins: [48, 48, 48, 48] as [number, number, number, number],
    defaultStyle: {
      fontSize: 10,
      color: palette.text,
    },
    background: (currentPage: number, pageSize: { width: number; height: number }) => [
      {
        canvas: [
          {
            type: "rect" as const,
            x: 0,
            y: 0,
            w: pageSize.width,
            h: pageSize.height,
            color: palette.page,
          },
        ],
      },
    ],
    content,
  };

  if (cvPhotoDataUrl) {
    docDefinition.images = { cvPhoto: cvPhotoDataUrl };
  }

  await pdfMake.createPdf(docDefinition).download(`Mikolaj_Tanski_CV_${locale}.pdf`);
}
