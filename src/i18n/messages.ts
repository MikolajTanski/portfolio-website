export type Locale = "pl" | "en";

/** First visit and invalid `localStorage` values fall back to English. */
export const DEFAULT_LOCALE: Locale = "en";

export type Messages = {
  meta: { title: string; description: string; ogLocale: string };
  nav: {
    skills: string;
    experience: string;
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
