# portfolio-website — Wartość Biznesowa

## Cel produktu

Dostarczyć **szybką, tanią i łatwą w utrzymaniu** stronę portfolio — bez infrastruktury backendowej, bez subskrypcji CMS i z pełną kontrolą nad kodem i treścią.

## Korzyści

### Koszt

- **$0/miesiąc** na hosting (Vercel / Netlify / Cloudflare Pages — free tier)
- Brak bazy danych, brak API — zero kosztów backendowych
- Brak subskrypcji page buildera (Webflow, Squarespace)

### Czas

| Operacja | Czas | Jak |
|----------|------|-----|
| Pierwsze wdrożenie | ~5 min | Podłączenie repo do Vercel |
| Aktualizacja treści | ~2 min | Edycja `messages.ts` + push |
| Nowa sekcja / certyfikat | ~5 min | Wpis w tablicy + deploy |
| Rollback | ~1 min | Promote poprzedni deploy w Vercel |

### Jakość techniczna

- **Spójność UI ↔ PDF** — jedno źródło treści (`messages.ts`)
- **Dwujęzyczność** — PL/EN bez duplikacji struktury
- **Wydajność** — statyczny bundle + CDN, LCP < 2,5 s
- **Prywatność** — CV generowane lokalnie, telefon ukryty w produkcji

### Prostota utrzymania

- Brak migracji bazy, brak secretów API (MVP)
- Deploy = push do GitHub
- Preview per PR (Vercel) — review przed produkcją

## Scenariusze użycia produktu

| Scenariusz | Bez tego projektu | Z portfolio-website |
|------------|-------------------|---------------------|
| Aktualizacja CV i strony | Dwa osobne pliki / narzędzia | Jeden plik `messages.ts` |
| Wersja angielska | Osobny PDF / strona | Przełącznik PL/EN + PDF w obu językach |
| Deploy | Konfiguracja serwera / CMS | `git push` → auto-deploy |
| Koszt przy niskim ruchu | CMS ~$15+/mies. | $0 na free tier |
| Prywatność CV | Upload do generatora online | pdfmake w przeglądarce |
| Fork dla innej osoby | Przepisywanie od zera | Podmiana treści w `messages.ts` |

## Porównanie z alternatywami

| Podejście | Koszt | Kontrola | i18n + PDF | Wydajność |
|-----------|-------|----------|------------|-----------|
| **portfolio-website** | $0 | Pełna (kod) | Tak | Wysoka (static) |
| Notion / LinkedIn | $0–$10 | Niska | Nie | Zależy od platformy |
| Webflow / Squarespace | $15+/mies. | Średnia | Nie | Średnia |
| Next.js + CMS | $0–$20+ | Wysoka | Wymaga pracy | Wysoka |
| PDF-only (Canva) | $0–$13 | Niska | Nie | N/A |

## Metryki sukcesu produktu

| Metryka | Cel | Jak mierzyć |
|---------|-----|-------------|
| Czas ładowania (LCP) | < 2,5 s | Lighthouse |
| Dostępność | 99,9%+ | Vercel SLA / UptimeRobot |
| Czas deployu | < 2 min | Vercel dashboard |
| Czas aktualizacji treści | < 5 min | Od edycji do live |
| Bundle size (gzip) | < 200 KB (bez pdfmake) | `vite build` output |

## Długoterminowa wartość

Projekt to **szablon produkcyjny**, nie prototyp:

- Kod można sklonować i zaadaptować pod inny profil
- Stack (React, Vite, Tailwind) jest standardowy i łatwy do rozbudowy
- Architektura bez backendu skaluje się na dowolny ruch bez dodatkowych kosztów

---

**Następny krok:** [Architektura →](architecture.md)
