# Wdrożenie — portfolio-website

Statyczna strona — po `npm run build` otrzymujesz folder `dist/` do hostowania na dowolnej platformie CDN.

---

## Obecne wdrożenie

| Parametr | Wartość |
|----------|---------|
| **URL demo** | [mikolajtanski.vercel.app](https://mikolajtanski.vercel.app) |
| **Platforma** | Vercel |
| **Trigger** | Push do GitHub (`main`) |
| **Build command** | `npm run build` |
| **Output** | `dist` |

---

## Diagram opcji wdrożenia

![Opcje wdrożenia](assets/deployment-options.png)

---

## Porównanie platform

| Platforma | Koszt | Deploy | Zalety | Wady |
|-----------|-------|--------|--------|------|
| **Vercel** (obecnie) | $0 | Auto z GitHub | Zero config, CDN, preview PR | Umiarkowany vendor lock-in |
| **Netlify** | $0 | Auto / drag & drop | Prosty UI | Więcej konfiguracji niż Vercel |
| **Cloudflare Pages** | $0 | Auto z GitHub | Nieskończony ruch (free) | Więcej configu DNS |
| **Azure Static Web Apps** | $0 (free) | GitHub Actions | Azure ecosystem | Więcej setupu |
| **S3 + CloudFront** | ~$1/mies. | CI / ręczny | Pełna kontrola AWS | Najwięcej pracy |

**Rekomendacja:** Vercel dla Vite/React — zero konfiguracji.

---

## Proces deploy (Vercel)

```
git push origin main
        │
        ▼
  Vercel: npm install && npm run build
        │
        ▼
  dist/ → CDN (globalnie)
        │
        ▼
  https://twoja-domena.vercel.app
```

### Wymagania buildu

- Node.js 18+ (20 LTS zalecane)
- Build: `npm run build`
- Output: `dist`
- Brak env vars w MVP

---

## Własna domena

1. Kup domenę
2. Vercel → Settings → Domains
3. Skonfiguruj DNS (A/CNAME)
4. Zaktualizuj `SITE_URL` w `src/config/site.ts`
5. Zaktualizuj meta w `index.html`

---

## Lokalny podgląd produkcji

```bash
npm run build
npm run preview
```

Serwuje `dist/` — identyczny wynik jak na CDN.

---

## Rollback

Vercel: Deployments → poprzedni deploy → **Promote to Production**.

Alternatywa: `git revert` + push.

---

← [Architektura](architecture.md) · [Personalizacja →](customization.md)
