# Professional Portfolio — Mikołaj Tański

A single-page professional presence for a **.NET / DevOps engineer** with a focus on **AI integration** and cloud-oriented delivery. The site presents experience, projects, education, and certifications in a clear narrative suitable for recruiters, clients, and technical stakeholders.

## Purpose

- **Personal brand & credibility** — structured sections (skills, experience, projects, education, certifications) support hiring and networking conversations.
- **Fast first impression** — lightweight client-side app, responsive layout, readable on desktop and mobile.
- **Action-oriented** — outbound links to repositories, certificates, and contact channels where relevant.

## Technology overview

| Area | Choice |
|------|--------|
| **Framework** | React 18 with TypeScript |
| **Build & dev** | Vite 5 (fast HMR, optimised production bundles) |
| **Styling** | Tailwind CSS 3, custom design tokens (dark theme), `tailwindcss-animate` |
| **Motion** | Framer Motion for section entrance animations |
| **Routing** | React Router (single main route + 404) |
| **Icons** | Lucide React |
| **Quality** | ESLint, Vitest for unit tests |

Static assets are emitted to `dist/` and can be deployed to any static host (e.g. Vercel, Netlify, Cloudflare Pages, Azure Static Web Apps, S3 + CloudFront).

## Prerequisites

- **Node.js** 18.x or newer (20 LTS recommended)
- **npm** 9+ (bundled with current Node installers)

## Getting started

Clone the repository and install dependencies:

```bash
npm install
```

### Local development

```bash
npm run dev
```

Opens the Vite dev server (default port **8080**; if busy, Vite picks the next free port). Edit files under `src/`; changes hot-reload in the browser.

### Production build

```bash
npm run build
```

Output is written to **`dist/`**. Preview the production build locally:

```bash
npm run preview
```

### Other scripts

| Command | Description |
|---------|-------------|
| `npm run lint` | Run ESLint on the project |
| `npm run test` | Run Vitest once |
| `npm run test:watch` | Vitest in watch mode |

## Project structure (high level)

- `src/pages/` — page shells (`Index`, `NotFound`)
- `src/components/` — page sections (hero, skills, experience, etc.)
- `src/index.css` — global styles and Tailwind layers
- `public/` — static files served as-is (e.g. `robots.txt`)
- `index.html` — document shell and meta tags for SEO / sharing

## Customisation

Replace copy, links, and assets to match your profile. Key touchpoints: section components under `src/components/`, meta tags in `index.html`, and `public/` for additional static files (e.g. Open Graph images once hosted).

## Licence

Private project; all rights reserved unless otherwise stated by the author.
