# portfolio-website — Opis Projektu

## Czym jest ten projekt?

**portfolio-website** to statyczna aplikacja React (SPA) — jednostronicowe portfolio z wbudowaną obsługą dwóch języków i generowaniem CV w formacie PDF bezpośrednio w przeglądarce. Nie wymaga serwera aplikacyjnego ani bazy danych.

## Problem który rozwiązuje

Budowa osobistej strony wizytówki często wiąże się z kompromisami:

| Problem | Typowe podejście | Wada |
|---------|------------------|------|
| Treść rozproszona | LinkedIn + PDF + Notion | Brak spójności, trudna aktualizacja |
| CMS / page builder | Webflow, WordPress | Koszt, vendor lock-in, wolniejsze ładowanie |
| CV oddzielnie od strony | Osobny plik Word/PDF | Dwie wersje do utrzymania |
| Wielojęzyczność | Osobne pliki per język | Duplikacja treści |
| Backend „tylko do formularza" | Node + hosting | Koszt i złożoność bez realnej wartości |

## Rozwiązanie

Jedna aplikacja frontendowa, która:

1. **Serwuje treść z pliku TypeScript** — jedno źródło prawdy dla UI i PDF
2. **Obsługuje PL/EN** — przełącznik języka + meta tagi SEO per locale
3. **Generuje CV lokalnie** — pdfmake w przeglądarce, bez wysyłki danych
4. **Deployuje się jako statyczne pliki** — `dist/` na dowolny CDN

## Co wchodzi w skład (MVP)

| Moduł | Rola techniczna |
|-------|-----------------|
| **Navbar** | Nawigacja kotwicowa, locale toggle, trigger CV |
| **Hero** | Intro — dane kontaktowe, bio |
| **Skills** | Kategorie umiejętności (konfigurowalne) |
| **Experience** | Timeline kariery (tablica w `messages.ts`) |
| **Projects** | Karty projektów + merge z metadanymi (URL, tagi) |
| **Education** | Lista wpisów edukacyjnych |
| **Certifications** | Certyfikaty z flagą `includeInCv` |
| **404** | Strona błędu z i18n |

## Decyzje architektoniczne

| Decyzja | Uzasadnienie |
|---------|--------------|
| Brak backendu | Portfolio nie wymaga API — statyczne pliki wystarczą |
| Treść w TS, nie JSON/CMS | Prostsze typowanie, jeden plik, brak zależności |
| CSR zamiast SSR | Vite + React — szybki dev, prosty deploy |
| pdfmake client-side | CV bez serwera, prywatność użytkownika |
| Vite + SWC | Szybki HMR, mały bundle produkcyjny |

## Dla kogo jest ten projekt

| Odbiorca | Zastosowanie |
|----------|--------------|
| **Developer budujący własne portfolio** | Fork / adaptacja z własną treścią |
| **Odwiedzający stronę demo** | Przegląd profilu, pobranie CV |
| **Maintainer** | Aktualizacja treści przez `messages.ts` + deploy |

## Czego projekt **nie** robi

- Nie ma panelu administracyjnego ani CMS
- Nie zbiera analityki (brak w MVP)
- Nie ma formularza kontaktowego — kontakt przez email w hero
- Nie wymaga logowania ani kont użytkowników
- Nie używa SSR / SSG (czysty Client Side Rendering)

---

**Następny krok:** [Wartość biznesowa →](02-business.md)
