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
    items: {
      title: string;
      issuer: string;
      year: string;
      url: string;
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
  "https://github.com/MikolajTanski/Nebula",
  "https://github.com/MikolajTanski/Clipper",
  "https://github.com/MikolajTanski/mango_azure",
  "https://github.com/MikolajTanski/portfolio-website",
] as const;

export const projectMeta: readonly {
  url: string | null;
  tags: readonly string[];
}[] = [
  { url: projectUrls[0], tags: ["Kubernetes", "Terraform", "Argo CD", "Helm"] },
  { url: projectUrls[1], tags: ["React", "Python", "Flask", "Docker"] },
  { url: projectUrls[2], tags: [".NET 10", "AKS", "Terraform", "Azure Service Bus", "GitHub Actions"] },
  { url: projectUrls[3], tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Vercel"] },
  {
    url: null,
    tags: [".NET", "AKS", "Azure", "Terraform", "GitHub Actions", "PostgreSQL", "Azure Service Bus"],
  },
];

export const messagesPl: Messages = {
  meta: {
    title: "Mikołaj Tański — .NET Developer · portfolio",
    description:
      ".NET Developer i DevOps Engineer z doświadczeniem bankowym, absolwent informatyki i ekonometrii. Gdańsk.",
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
    roles: ".NET Developer | DevOps Engineer",
    bio:
      ".NET Developer z praktyką DevOps, m.in. w sektorze bankowym, z wykształceniem z informatyki i ekonometrii na Uniwersytecie Gdańskim. W projektach buduje i utrzymuje systemy backendowe w architekturze skalowalnej, z automatyzacją wdrożeń, konteneryzacją i chmurą, tak aby były przewidywalne w utrzymaniu i bezpieczne na produkcji.",
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
        skills: ["Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "TeamCity", "Octopus Deploy", "GitLab"],
      },
      { title: "Monitoring i bazy", skills: ["ELK Stack", "Prometheus", "Microsoft SQL Server", "MongoDB", "IIS"] },
    ],
  },
  experience: {
    sectionTitle: "Doświadczenie",
    items: [
      {
        role: "DevOps Engineer with .NET",
        company: "VeloBank S.A.",
        period: "paź 2024 – obecnie",
        points: [
          "Rozwój i utrzymanie aplikacji .NET Framework, w tym narzędzi administracyjnych dla II i III linii wsparcia oraz zespołu monitoringu, w środowisku bankowym o podwyższonych wymaganiach bezpieczeństwa.",
          "Automatyzacja procesów operacyjnych (Jenkins, Python, PowerShell), m.in. przepływy związane z ticketami oraz zadaniami na IIS, z mniejszą pracą ręczną i lepszą przejrzystością przy incydentach.",
          "Konfiguracja IIS, administracja serwerami oraz wykorzystanie ELK przy monitorowaniu i dochodzeniach na środowisku produkcyjnym.",
          "Zarządzanie kopiami zapasowymi oraz środowiskami testowymi.",
        ],
      },
      {
        role: ".NET Developer",
        company: "Assel",
        period: "sty 2023 – paź 2024",
        points: [
          "Rozwój aplikacji .NET Core, administracja IIS oraz wykorzystanie Dockera, optymalizacja wydajności i czytelności kodu.",
          "Wdrożenie CI/CD od podstaw z TeamCity i Octopus Deploy, krótsze, powtarzalne wdrożenia i lepsza przewidywalność wydań.",
          "Przejęcie utrzymania największej aplikacji w organizacji po okresie narosłego długu technicznego i utrudnionej eksploatacji, doprowadzenie do stabilnego, codziennego utrzymania.",
          "Incydenty o podwyższonym priorytecie, analiza przyczyn i wdrażanie poprawek, w architekturze m.in. RabbitMQ.",
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
        title: "Nebula",
        subtitle: "Środowisko labowe: Kubernetes i GitOps",
        description:
          "Projekt demonstracyjny: lokalny klaster Kubernetes z przepływami GitOps, ingress i zarządzaniem sekretami zgodnymi z praktykami produkcyjnymi. Cel: powtarzalna walidacja obrazów i konfiguracji przed wdrożeniem na współdzielone środowiska, bez uzależnienia od zewnętrznego klastra szkoleniowego. {{repo}}",
      },
      {
        title: "Clipper",
        subtitle: "Merge PDF przy przetwarzaniu lokalnym lub w kontrolowanej infrastrukturze",
        description:
          "Aplikacja ogranicza ryzyko związane z przekazywaniem dokumentów do publicznych serwisów online. Oferuje wybór plików, podgląd i scalanie w przeglądarce; operacja merge wykonywana jest przez backend uruchomiony na infrastrukturze pozostającej pod kontrolą organizacji, co ogranicza ekspozycję danych na usługi zewnętrzne. {{repo}}",
      },
      {
        title: "mango_azure",
        subtitle: "Architektura mikroserwisowa zamówień na Microsoft Azure",
        description:
          "Implementacja referencyjna dla scenariusza e-commerce / zamówień (m.in. gastronomia): usługi na Azure Kubernetes Service, infrastruktura w Terraformie, CI/CD w GitHub Actions, integracja przez bramkę API oraz komunikacja asynchroniczna. Rozdzielenie odpowiedzialności między usługami umożliwia niezależne skalowanie komponentów wraz z obciążeniem w porównaniu z monolitem. {{repo}}",
      },
      {
        title: "Strona portfolio",
        subtitle: "Witryna statyczna: profil, projekty, certyfikaty",
        description:
          "Pojedyncza strona z sekcjami (m.in. doświadczenie, projekty, edukacja, certyfikaty), nawigacją kotwicową. {{repo}} · {{certs}}. Hosting statyczny na Vercel; źródła w repozytorium Git, co ułatwia śledzenie zmian i wdrożenia ciągłe.",
      },
      {
        title: "Nautly",
        subtitle: "Własny startup · W przygotowaniu",
        description:
          "Produkt rozwijany zespołowo w modelu startupu; publiczny link i materiały zewnętrzne po ustabilizowaniu oferty. Backend i infrastruktura na Azure: Azure Kubernetes Service, Terraform, GitHub Actions, .NET, PostgreSQL, Azure Service Bus.",
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
        year: "maj 2025 (w toku)",
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
    items: [
      {
        title: "Model Context Protocol: Advanced Topics",
        issuer: "Anthropic Academy",
        year: "2026",
        url: "https://verify.skilljar.com/c/mm58gfuvm9ze",
      },
      {
        title: "Claude Code in Action",
        issuer: "Anthropic Academy",
        year: "2026",
        url: "https://verify.skilljar.com/c/2ynbxcvjkjk2",
      },
      {
        title: "Introduction to subagents",
        issuer: "Anthropic Academy",
        year: "2026",
        url: "https://verify.skilljar.com/c/nmd54onbzr24",
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
    title: "Mikołaj Tański — .NET Developer Portfolio",
    description:
      ".NET Developer and DevOps Engineer with banking experience; background in computer science and econometrics. Gdańsk, Poland.",
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
    roles: ".NET Developer | DevOps Engineer",
    bio:
      ".NET Developer with DevOps experience in banking and an academic background in computer science and econometrics from the University of Gdańsk. Builds and maintains scalable backend systems with automated delivery, containers, and cloud infrastructure, with emphasis on maintainability and production safety.",
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
        skills: ["Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "TeamCity", "Octopus Deploy", "GitLab"],
      },
      { title: "Observability & data", skills: ["ELK Stack", "Prometheus", "Microsoft SQL Server", "MongoDB", "IIS"] },
    ],
  },
  experience: {
    sectionTitle: "Experience",
    items: [
      {
        role: "DevOps Engineer with .NET",
        company: "VeloBank S.A.",
        period: "Oct 2024 – Present",
        points: [
          "Builds and maintains .NET Framework applications, including internal admin tools for L2/L3 support and monitoring, in a regulated banking environment with strict security requirements.",
          "Automates operational work with Jenkins, Python, and PowerShell, including ticket workflows and tasks around IIS, with clearer signals for incident analysis and less manual toil.",
          "Configures IIS, supports server operations, and uses the ELK stack for production monitoring, log analysis, and investigations.",
          "Manages backups and non-production test environments.",
        ],
      },
      {
        role: ".NET Developer",
        company: "Assel",
        period: "Jan 2023 – Oct 2024",
        points: [
          "Builds and evolves .NET Core applications, manages IIS, uses Docker, and improves runtime performance and code clarity.",
          "Introduced CI/CD from the ground up with TeamCity and Octopus Deploy, with shorter, repeatable deployments and a more predictable release cadence.",
          "Inherited the organization’s largest application after significant technical debt and fragile day-to-day operations, stabilized ownership, and brought maintenance back to a predictable baseline.",
          "Root cause analysis and fixes for high-priority incidents, with RabbitMQ among other integration components in the stack.",
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
        title: "Nebula",
        subtitle: "Lab environment: Kubernetes and GitOps",
        description:
          "Demonstration stack: local Kubernetes cluster with GitOps, ingress, and secrets handling aligned with production-style practice. Intended for repeatable validation of container images and configuration prior to promotion to shared environments, without dependency on an external training cluster. {{repo}}",
      },
      {
        title: "Clipper",
        subtitle: "PDF merge on-premises or on controlled infrastructure",
        description:
          "Reduces risk associated with uploading documents to public online merge services. Provides file selection, preview, and merge in the browser; merge runs on a backend deployed on infrastructure controlled by the organization, limiting exposure of sensitive data to third-party SaaS paths. {{repo}}",
      },
      {
        title: "mango_azure",
        subtitle: "Order-processing microservices on Microsoft Azure",
        description:
          "Reference implementation for an e-commerce / ordering scenario (including food service): services on Azure Kubernetes Service, infrastructure as code with Terraform, CI/CD pipelines in GitHub Actions, API gateway integration, and asynchronous messaging. Service decomposition supports independent scaling of components under load compared with a monolithic design. {{repo}}",
      },
      {
        title: "Portfolio website",
        subtitle: "Static site: profile, projects, certifications",
        description:
          "Single-page layout with sections for experience, projects, education, and certifications, plus anchor navigation, {{repo}} and {{certs}}. Static hosting on Vercel; content maintained in Git for traceability and straightforward deployment.",
      },
      {
        title: "Nautly",
        subtitle: "Founding-stage startup · In progress",
        description:
          "Team-built product in a startup setting; no public URL yet while the offering stabilises. Azure Kubernetes Service, Terraform, GitHub Actions, .NET, PostgreSQL, and Azure Service Bus.",
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
        year: "Expected May 2025",
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
    items: [
      {
        title: "Model Context Protocol: Advanced Topics",
        issuer: "Anthropic Academy",
        year: "2026",
        url: "https://verify.skilljar.com/c/mm58gfuvm9ze",
      },
      {
        title: "Claude Code in Action",
        issuer: "Anthropic Academy",
        year: "2026",
        url: "https://verify.skilljar.com/c/2ynbxcvjkjk2",
      },
      {
        title: "Introduction to subagents",
        issuer: "Anthropic Academy",
        year: "2026",
        url: "https://verify.skilljar.com/c/nmd54onbzr24",
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
