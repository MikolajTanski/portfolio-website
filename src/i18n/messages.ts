export type Locale = "pl" | "en";

/** First visit and invalid `localStorage` values fall back to English. */
export const DEFAULT_LOCALE: Locale = "en";

export type Messages = {
  meta: { title: string; description: string; ogLocale: string };
  nav: {
    skills: string;
    experience: string;
    projects: string;
    education: string;
    certifications: string;
    downloadCv: string;
    cvDownloadFailed: string;
  };
  a11y: { openMenu: string; closeMenu: string; language: string };
  hero: {
    /** Full name — used in hero heading and generated CV */
    name: string;
    email: string;
    /** E.164-style digits for tel: links, no spaces (e.g. +48512011245) */
    phoneTel: string;
    /** Human-readable phone for display */
    phoneDisplay: string;
    roles: string;
    bio: string;
    locationLabel: string;
    location: string;
    terminalDecoration: string;
    statusChip: string;
  };
  skills: {
    sectionTitle: string;
    categories: { title: string; skills: string[] }[];
  };
  experience: {
    sectionTitle: string;
    items: {
      role: string;
      company: string;
      period: string;
      points: string[];
    }[];
  };
  projects: {
    sectionTitle: string;
    linkLabelRepo: string;
    linkLabelCerts: string;
    items: { title: string; subtitle: string; description: string }[];
  };
  education: {
    sectionTitle: string;
    items: { degree: string; field: string; school: string; year: string }[];
  };
  certifications: {
    sectionTitle: string;
    /** Wpis planowany (tylko strona, nie PDF) */
    upcomingLabel: string;
    items: {
      title: string;
      issuer: string;
      year?: string;
      url?: string;
      /** false = wyłącznie portfolio; nie trafia do generowanego CV */
      includeInCv: boolean;
    }[];
  };
  footer: { copyright: string };
  notFound: { title: string; message: string; home: string };
  /** Labels only used in generated PDF (match `locale`) */
  cvPdf: {
    emailLabel: string;
    phoneLabel: string;
    portfolioLabel: string;
  };
};

const projectUrls = [
  "https://github.com/MikolajTanski/DevBeast.Mcp",
  "https://github.com/MikolajTanski/Clipper",
  "https://github.com/MikolajTanski/portfolio-website",
  "https://github.com/MikolajTanski/Nebula",
] as const;

export const projectMeta: readonly {
  url: string | null;
  tags: readonly string[];
}[] = [
  { url: projectUrls[0], tags: [".NET 9", "MCP", "C#"] },
  { url: projectUrls[1], tags: ["React", "Python", "Flask", "Docker"] },
  { url: projectUrls[2], tags: ["React", "Vite", "TypeScript", "Tailwind CSS"] },
  { url: projectUrls[3], tags: ["Kubernetes", "Terraform", "Argo CD", "Helm"] },
];

export const messagesPl: Messages = {
  meta: {
    title: "Mikołaj Tański — DevOps Engineer / SRE · portfolio",
    description:
      "DevOps Engineer / SRE. CI/CD, automatyzacja i obserwowalność produkcji w bankowości. Gdańsk.",
    ogLocale: "pl_PL",
  },
  nav: {
    skills: "Umiejętności",
    experience: "Doświadczenie",
    projects: "Projekty",
    education: "Edukacja",
    certifications: "Certyfikaty",
    downloadCv: "Pobierz CV",
    cvDownloadFailed: "Nie udało się wygenerować CV. Spróbuj ponownie.",
  },
  a11y: {
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    language: "Język strony",
  },
  hero: {
    name: "Mikołaj Tański",
    email: "mikolajtanski1@gmail.com",
    phoneTel: "+48512011245",
    phoneDisplay: "512 011 245",
    roles: "DevOps Engineer / SRE | ELK · OpenTelemetry · .NET",
    bio:
      "Operations & Reliability / SRE Engineer w bankowości: CI/CD, automatyzacja i obserwowalność produkcji. Utrzymuję i wdrażam korporacyjne obciążenia i aplikacje .NET — Jenkins, Python i PowerShell od pipeline’u po produkcję. Na co dzień Grafana, ELK i OpenTelemetry Collector — logi, metryki i ślady, gdy coś pada. .NET i Python tam, gdzie platforma wymaga automatyzacji, nie jako osobna tożsamość: mniej ręcznych wydań, mniej ticketów, które powinny być jobem. Wcześniej .NET developer / DevOps engineer: TeamCity, Octopus Deploy, bramki jakości SonarQube, administracja GitLab.",
    locationLabel: "Lokalizacja",
    location: "Gdańsk, Polska",
    terminalDecoration: "logs-*/_search",
    statusChip: "logs · metrics · traces",
  },
  skills: {
    sectionTitle: "Umiejętności",
    categories: [
      {
        title: "Chmura i DevOps",
        skills: ["Kubernetes", "Docker", "Jenkins", "TeamCity", "Octopus Deploy", "GitLab", "GitHub Actions", "SonarQube", "Terraform", "Azure"],
      },
      { title: "Monitoring i bazy", skills: ["Grafana", "ELK Stack", "OpenTelemetry", "Prometheus", "Microsoft SQL Server", "MongoDB", "IIS"] },
      { title: "Backend", skills: ["C#", ".NET Framework", ".NET Core", "Entity Framework Core"] },
      { title: "Web i skrypty", skills: ["React", "TypeScript", "Python", "PowerShell", "Tailwind CSS"] },
      { title: "AI i integracja", skills: ["Anthropic Claude API", "Model Context Protocol", "Prompting"] },
    ],
  },
  experience: {
    sectionTitle: "Doświadczenie",
    items: [
      {
        role: "DevOps Engineer / SRE",
        company: "VeloBank S.A.",
        period: "paź 2024 – obecnie",
        points: [
          "Obserwowalność i zarządzanie incydentami: utrzymanie i skalowanie pipeline’ów monitoringu i logowania (Grafana, ELK Stack, OpenTelemetry Collector — metryki, logi strukturalne, ślady rozproszone) pod RCA, mitygację incydentów i niezawodność w rygorze bezpieczeństwa bankowego.",
          "CI/CD i automatyzacja operacyjna: pipeline’y i workflow w Jenkins, Python i PowerShell — mniej ręcznej pracy, sprawniejsze dostarczanie aplikacji w środowisku regulowanym.",
          "Operacje i dostarczanie aplikacji: konfiguracja, wydania i codzienna eksploatacja krytycznych aplikacji .NET, dostępność i stabilność w środowiskach.",
          "Infrastruktura i wsparcie L3: systemy .NET Framework, serwery WWW (IIS), kopie zapasowe i produkcyjne środowiska testowe; monitoring i diagnostyka pod kątem zdrowia systemów.",
        ],
      },
      {
        role: ".NET Developer / DevOps Engineer",
        company: "Assel",
        period: "sty 2023 – wrz 2024",
        points: [
          "Developer i DevOps przy jednym biurku: .NET Core, Docker, IIS i cały łańcuch wydań.",
          "CI/CD od zera z TeamCity i Octopus Deploy; bramki jakości w SonarQube; administracja GitLab.",
          "Przejęcie największej aplikacji w organizacji po narosłym długu technicznym i kruchej eksploatacji; przywrócenie codziennego utrzymania do stabilnego poziomu.",
          "Incydenty wysokiego priorytetu, analiza przyczyn i poprawki (w stosie m.in. RabbitMQ).",
        ],
      },
      {
        role: ".NET Developer",
        company: "Oakforge",
        period: "cze 2022 – gru 2022",
        points: [
          "Staż przy realnej pracy w .NET: kod produkcyjny, code review, konwencje zespołu.",
          "Komponenty backendowe i codzienna praktyka inżynierska.",
        ],
      },
    ],
  },
  projects: {
    sectionTitle: "Projekty",
    linkLabelRepo: "GitHub",
    linkLabelCerts: "weryfikacja certyfikatów",
    items: [
      {
        title: "DevBeast.Mcp",
        subtitle: "Serwer MCP dla agentów AI",
        description:
          "DevBeast MCP — szablonowy serwer .NET 9 dla agentów AI (Cursor, Claude). Baza danych, logi, architektura, scaffolding, mocki integracji. {{repo}}",
      },
      {
        title: "Clipper",
        subtitle: "Spinacz — lokalne scalanie PDF",
        description:
          "Lokalne scalanie PDF: Web UI, CLI i HTTP API. React + Flask + pypdf, Docker Compose. Bez chmury, bez kont. {{repo}}",
      },
      {
        title: "portfolio-website",
        subtitle: "React, Vite, Tailwind",
        description:
          "Profesjonalne portfolio — React, Vite, Tailwind. {{repo}} · {{certs}}",
      },
      {
        title: "Nebula",
        subtitle: "Lab Kubernetes / GitOps (HCL)",
        description:
          "Lokalny klaster Kubernetes z GitOps, ingress i sekretami w stylu produkcyjnym. Powtarzalna walidacja obrazów i konfiguracji przed wdrożeniem na współdzielone środowiska. {{repo}}",
      },
    ],
  },
  education: {
    sectionTitle: "Edukacja",
    items: [
      {
        degree: "Magister",
        field: "Informatyka i ekonometria",
        school: "Uniwersytet Gdański",
        year: "2026",
      },
      {
        degree: "Licencjat",
        field: "Informatyka i ekonometria",
        school: "Uniwersytet Gdański",
        year: "2024",
      },
    ],
  },
  certifications: {
    sectionTitle: "Certyfikaty",
    upcomingLabel: "w przygotowaniu",
    items: [
      {
        title: "Model Context Protocol: Advanced Topics",
        issuer: "Anthropic Academy",
        year: "2026",
        url: "https://verify.skilljar.com/c/mm58gfuvm9ze",
        includeInCv: true,
      },
      {
        title: "Claude Code in Action",
        issuer: "Anthropic Academy",
        year: "2026",
        url: "https://verify.skilljar.com/c/2ynbxcvjkjk2",
        includeInCv: true,
      },
      {
        title: "Introduction to subagents",
        issuer: "Anthropic Academy",
        year: "2026",
        url: "https://verify.skilljar.com/c/nmd54onbzr24",
        includeInCv: true,
      },
      {
        title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
        issuer: "Microsoft",
        includeInCv: false,
      },
      {
        title: "HashiCorp Certified: Terraform Associate",
        issuer: "HashiCorp",
        includeInCv: false,
      },
    ],
  },
  footer: { copyright: "2026 Mikołaj Tański" },
  notFound: {
    title: "404",
    message: "Takiej podstrony nie ma.",
    home: "Strona główna",
  },
  cvPdf: {
    emailLabel: "E-mail",
    phoneLabel: "Telefon",
    portfolioLabel: "Portfolio",
  },
};

export const messagesEn: Messages = {
  meta: {
    title: "Mikołaj Tański — DevOps Engineer / SRE Portfolio",
    description:
      "DevOps Engineer / SRE. CI/CD, automation, and production observability in banking. Gdańsk, Poland.",
    ogLocale: "en_US",
  },
  nav: {
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    certifications: "Certifications",
    downloadCv: "Download CV",
    cvDownloadFailed: "Could not generate the CV. Please try again.",
  },
  a11y: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Site language",
  },
  hero: {
    name: "Mikołaj Tański",
    email: "mikolajtanski1@gmail.com",
    phoneTel: "+48512011245",
    phoneDisplay: "+48 512 011 245",
    roles: "DevOps Engineer / SRE | ELK · OpenTelemetry · .NET",
    bio:
      "Operations & Reliability / SRE Engineer in banking: CI/CD, automation, and production observability. I run and ship enterprise .NET workloads and applications, using Jenkins, Python, and PowerShell from pipeline to production. Day-to-day work is Grafana, ELK, and OpenTelemetry Collector — logs, metrics, and traces when something breaks. .NET and Python where the platform needs automation, not as a side identity: fewer manual releases, fewer tickets that should have been a job. Previously a .NET developer / DevOps engineer: TeamCity, Octopus Deploy, SonarQube quality gates, GitLab administration.",
    locationLabel: "Location",
    location: "Gdańsk, Poland",
    terminalDecoration: "logs-*/_search",
    statusChip: "logs · metrics · traces",
  },
  skills: {
    sectionTitle: "Skills",
    categories: [
      {
        title: "Cloud & DevOps",
        skills: ["Kubernetes", "Docker", "Jenkins", "TeamCity", "Octopus Deploy", "GitLab", "GitHub Actions", "SonarQube", "Terraform", "Azure"],
      },
      { title: "Observability & data", skills: ["Grafana", "ELK Stack", "OpenTelemetry", "Prometheus", "Microsoft SQL Server", "MongoDB", "IIS"] },
      { title: "Backend", skills: ["C#", ".NET Framework", ".NET Core", "Entity Framework Core"] },
      { title: "Web & scripting", skills: ["React", "TypeScript", "Python", "PowerShell", "Tailwind CSS"] },
      { title: "AI & integration", skills: ["Anthropic Claude API", "Model Context Protocol", "Prompt engineering"] },
    ],
  },
  experience: {
    sectionTitle: "Experience",
    items: [
      {
        role: "DevOps Engineer / SRE",
        company: "VeloBank S.A.",
        period: "Oct 2024 – Present",
        points: [
          "Observability and incident management: maintaining and scaling enterprise monitoring and logging pipelines with Grafana, ELK Stack, and OpenTelemetry Collector (metrics, structured logs, distributed traces) for RCA, incident mitigation, and reliability under strict security constraints.",
          "CI/CD and operational automation: deployment pipelines and workflows in Jenkins, Python, and PowerShell — less manual overhead, faster application delivery in a regulated banking environment.",
          "Application operations and delivery: configuration, releases, and day-to-day operations for mission-critical .NET applications, with high availability and stability across environments.",
          "Infrastructure and L3 support: operating and troubleshooting .NET Framework systems, web servers (IIS), backups, and production test environments, with monitoring and diagnostics for proactive health management.",
        ],
      },
      {
        role: ".NET Developer / DevOps Engineer",
        company: "Assel",
        period: "Jan 2023 – Sep 2024",
        points: [
          "Developer and DevOps on the same desk: .NET Core, Docker, IIS, and the full release chain.",
          "CI/CD from scratch with TeamCity and Octopus Deploy; quality gates in SonarQube; GitLab administration.",
          "Took over the organization’s largest application after accumulated technical debt and fragile operations; brought day-to-day maintenance back to a stable baseline.",
          "High-priority incidents, root-cause analysis, and fixes (including RabbitMQ in the stack).",
        ],
      },
      {
        role: ".NET Developer",
        company: "Oakforge",
        period: "Jun 2022 – Dec 2022",
        points: [
          "Internship on real .NET work: production code, code review, team conventions.",
          "Backend components and day-to-day engineering practice.",
        ],
      },
    ],
  },
  projects: {
    sectionTitle: "Projects",
    linkLabelRepo: "GitHub",
    linkLabelCerts: "certificate verification",
    items: [
      {
        title: "DevBeast.Mcp",
        subtitle: "MCP server for AI agents",
        description:
          "DevBeast MCP — .NET 9 template server for AI agents (Cursor, Claude). Database, logs, architecture, scaffolding, mock integrations. {{repo}}",
      },
      {
        title: "Clipper",
        subtitle: "Spinacz — local PDF merger",
        description:
          "Local PDF merger with Web UI, CLI and HTTP API. React + Flask + pypdf, Docker Compose. No cloud, no accounts. {{repo}}",
      },
      {
        title: "portfolio-website",
        subtitle: "React, Vite, Tailwind",
        description:
          "Professional portfolio — React, Vite, Tailwind. {{repo}} · {{certs}}",
      },
      {
        title: "Nebula",
        subtitle: "Kubernetes / GitOps lab (HCL)",
        description:
          "Local Kubernetes cluster with GitOps, ingress, and secrets handling in a production-style setup. Repeatable validation of images and configuration before promotion to shared environments. {{repo}}",
      },
    ],
  },
  education: {
    sectionTitle: "Education",
    items: [
      {
        degree: "Master's Degree",
        field: "Computer Science and Econometrics",
        school: "University of Gdańsk",
        year: "2026",
      },
      {
        degree: "Bachelor's Degree",
        field: "Computer Science and Econometrics",
        school: "University of Gdańsk",
        year: "2024",
      },
    ],
  },
  certifications: {
    sectionTitle: "Certifications",
    upcomingLabel: "Coming soon",
    items: [
      {
        title: "Model Context Protocol: Advanced Topics",
        issuer: "Anthropic Academy",
        year: "2026",
        url: "https://verify.skilljar.com/c/mm58gfuvm9ze",
        includeInCv: true,
      },
      {
        title: "Claude Code in Action",
        issuer: "Anthropic Academy",
        year: "2026",
        url: "https://verify.skilljar.com/c/2ynbxcvjkjk2",
        includeInCv: true,
      },
      {
        title: "Introduction to subagents",
        issuer: "Anthropic Academy",
        year: "2026",
        url: "https://verify.skilljar.com/c/nmd54onbzr24",
        includeInCv: true,
      },
      {
        title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
        issuer: "Microsoft",
        includeInCv: false,
      },
      {
        title: "HashiCorp Certified: Terraform Associate",
        issuer: "HashiCorp",
        includeInCv: false,
      },
    ],
  },
  footer: { copyright: "2026 Mikołaj Tański" },
  notFound: {
    title: "404",
    message: "Oops! Page not found",
    home: "Return to Home",
  },
  cvPdf: {
    emailLabel: "Email",
    phoneLabel: "Phone",
    portfolioLabel: "Portfolio",
  },
};

export const messagesByLocale: Record<Locale, Messages> = {
  pl: messagesPl,
  en: messagesEn,
};
