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
    title: "Mikołaj Tański — DevOps / SRE · portfolio",
    description:
      "DevOps / SRE Engineer. OpenShift, Azure, CI/CD, obserwowalność. Gdańsk.",
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
    roles: "DevOps / SRE Engineer | Azure · OpenShift · GitHub Actions",
    bio:
      "DevOps / SRE Engineer: CI/CD, chmura i obserwowalność w bankowości. OpenShift, Azure/AKS, Terraform, Jenkins i GitHub Actions — od pipeline’u po produkcję (Grafana, ELK, OpenTelemetry Collector). .NET i Python tam, gdzie trzeba automatyzować wdrożenia i utrzymywać platformę.",
    locationLabel: "Lokalizacja",
    location: "Gdańsk, Polska",
    terminalDecoration: "dotnet run --project life",
  },
  skills: {
    sectionTitle: "Umiejętności",
    categories: [
      { title: "Backend", skills: ["C#", ".NET Framework", ".NET Core", "Entity Framework Core"] },
      { title: "Web i skrypty", skills: ["React", "TypeScript", "Python", "PowerShell", "Tailwind CSS"] },
      { title: "AI i integracja", skills: ["Anthropic Claude API", "Model Context Protocol", "Prompting"] },
      {
        title: "Chmura i DevOps",
        skills: ["Azure", "OpenShift", "Kubernetes", "Docker", "Jenkins", "TeamCity", "Octopus Deploy", "GitLab", "Terraform", "GitHub Actions", "SonarQube"],
      },
      { title: "Monitoring i bazy", skills: ["Grafana", "ELK Stack", "OpenTelemetry", "Prometheus", "Microsoft SQL Server", "MongoDB", "IIS"] },
    ],
  },
  experience: {
    sectionTitle: "Doświadczenie",
    items: [
      {
        role: "DevOps / SRE Engineer",
        company: "VeloBank S.A.",
        period: "paź 2024 – obecnie",
        points: [
          "Utrzymanie i wdrażanie mikroserwisów na OpenShift i Azure w regulowanym środowisku bankowym: konfiguracja środowisk, dostarczanie zmian i eksploatacja pod rygorem bezpieczeństwa.",
          "Obserwowalność produkcji: Grafana, ELK oraz OpenTelemetry Collector — logi, metryki i ślady przy incydentach i analizie przyczyn.",
          "Automatyzacja CI/CD i procesów operacyjnych w Jenkins (Python, PowerShell), m.in. przepływy związane z ticketami i zadaniami na IIS, z mniejszą pracą ręczną.",
          "Rozwój narzędzi .NET Framework dla II i III linii wsparcia oraz zespołu monitoringu; administracja IIS, kopie zapasowe i środowiska testowe.",
        ],
      },
      {
        role: ".NET Developer / DevOps Engineer",
        company: "Assel",
        period: "sty 2023 – paź 2024",
        points: [
          "Rola programisty .NET i DevOps: rozwój aplikacji .NET Core, Docker, IIS oraz automatyzacja całego łańcucha wdrożeń.",
          "CI/CD od podstaw z TeamCity i Octopus Deploy, bramki jakości w SonarQube oraz administracja GitLab — krótsze, powtarzalne wydania.",
          "Przejęcie utrzymania największej aplikacji w organizacji po okresie narosłego długu technicznego i utrudnionej eksploatacji, doprowadzenie do stabilnego, codziennego utrzymania.",
          "Incydenty o podwyższonym priorytecie, analiza przyczyn i wdrażanie poprawek, w architekturze m.in. RabbitMQ.",
        ],
      },
      {
        role: ".NET Developer (staż)",
        company: "Oakforge",
        period: "cze 2022 – gru 2022",
        points: [
          "Staż w zespole developerskim przy realnych zadaniach w ekosystemie .NET: współpraca z kodem produkcyjnym, code review oraz przestrzeganie przyjętych w projekcie standardów.",
          "Współudział w rozwoju i utrzymaniu komponentów backendowych oraz wdrażaniu dobrych praktyk inżynierskich.",
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
    title: "Mikołaj Tański — DevOps / SRE Portfolio",
    description:
      "DevOps / SRE Engineer. OpenShift, Azure, CI/CD, observability. Gdańsk, Poland.",
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
    roles: "DevOps / SRE Engineer | Azure · OpenShift · GitHub Actions",
    bio:
      "DevOps / SRE Engineer: CI/CD, cloud, and observability in banking. OpenShift, Azure/AKS, Terraform, Jenkins, and GitHub Actions — from pipeline to production (Grafana, ELK, OpenTelemetry Collector). .NET and Python where the platform needs deployment automation and day-to-day operations.",
    locationLabel: "Location",
    location: "Gdańsk, Poland",
    terminalDecoration: "dotnet run --project life",
  },
  skills: {
    sectionTitle: "Skills",
    categories: [
      { title: "Backend", skills: ["C#", ".NET Framework", ".NET Core", "Entity Framework Core"] },
      { title: "Web & scripting", skills: ["React", "TypeScript", "Python", "PowerShell", "Tailwind CSS"] },
      { title: "AI & integration", skills: ["Anthropic Claude API", "Model Context Protocol", "Prompt engineering"] },
      {
        title: "Cloud & DevOps",
        skills: ["Azure", "OpenShift", "Kubernetes", "Docker", "Jenkins", "TeamCity", "Octopus Deploy", "GitLab", "Terraform", "GitHub Actions", "SonarQube"],
      },
      { title: "Observability & data", skills: ["Grafana", "ELK Stack", "OpenTelemetry", "Prometheus", "Microsoft SQL Server", "MongoDB", "IIS"] },
    ],
  },
  experience: {
    sectionTitle: "Experience",
    items: [
      {
        role: "DevOps / SRE Engineer",
        company: "VeloBank S.A.",
        period: "Oct 2024 – Present",
        points: [
          "Operates and ships microservices on OpenShift and Azure in a regulated banking environment: environment configuration, delivery, and day-to-day operations under strict security requirements.",
          "Production observability with Grafana, ELK, and the OpenTelemetry Collector — logs, metrics, and traces for incidents and root-cause analysis.",
          "Automates CI/CD and operational work in Jenkins (Python, PowerShell), including ticket workflows and IIS tasks, with less manual toil.",
          "Builds .NET Framework tools for L2/L3 support and monitoring; IIS administration, backups, and non-production test environments.",
        ],
      },
      {
        role: ".NET Developer / DevOps Engineer",
        company: "Assel",
        period: "Jan 2023 – Oct 2024",
        points: [
          "Combined .NET developer and DevOps role: .NET Core applications, Docker, IIS, and end-to-end deployment automation.",
          "Built CI/CD from the ground up with TeamCity and Octopus Deploy, quality gates in SonarQube, and GitLab administration — shorter, repeatable releases.",
          "Inherited the organization’s largest application after significant technical debt and fragile day-to-day operations, stabilized ownership, and brought maintenance back to a predictable baseline.",
          "Root cause analysis and fixes for high-priority incidents, with RabbitMQ among other integration components in the stack.",
        ],
      },
      {
        role: ".NET Developer (internship)",
        company: "Oakforge",
        period: "Jun 2022 – Dec 2022",
        points: [
          "Internship with a product engineering team on real .NET work: exposure to production codebases, code review, and team conventions.",
          "Contributed to backend components and day-to-day engineering practices alongside senior developers.",
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
