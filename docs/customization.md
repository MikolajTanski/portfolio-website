# Personalizacja — portfolio-website

Jak aktualizować treść i konfigurację produktu. Większość zmian to edycja jednego pliku.

---

## Złota zasada

> **Single source of truth:** `src/i18n/messages.ts`  
> Zmiana tutaj aktualizuje UI **i** generowane CV.

---

## Mapa plików


| Chcę zmienić…        | Plik             | Klucz                  |
| -------------------- | ---------------- | ---------------------- |
| Intro, kontakt       | `messages.ts`    | `hero`                 |
| Umiejętności         | `messages.ts`    | `skills.categories`    |
| Doświadczenie        | `messages.ts`    | `experience.items`     |
| Projekty (tekst)     | `messages.ts`    | `projects.items`       |
| Projekty (URL, tagi) | `messages.ts`    | `projectMeta`          |
| Edukacja             | `messages.ts`    | `education.items`      |
| Certyfikaty          | `messages.ts`    | `certifications.items` |
| URL produkcyjny      | `config/site.ts` | `SITE_URL`             |
| Zdjęcie CV, favicon  | `public/`        | pliki statyczne        |
| Meta (statyczne)     | `index.html`     | `<head>`               |


---

## Dodanie wpisu doświadczenia

W `messagesPl.experience.items` i `messagesEn.experience.items`:

```typescript
{
  role: "Senior Developer",
  company: "Firma X",
  period: "2026 — obecnie",
  points: [
    "Konkretne osiągnięcie z metryką",
    "Technologie użyte w projekcie",
  ],
},
```

Sekcja Experience i PDF aktualizują się automatycznie po deployu.

---

## Dodanie projektu

1. Tekst PL/EN → `projects.items` w obu locale
2. Metadane → `projectMeta`:

```typescript
{ url: "https://github.com/user/repo", tags: ["React", "Node.js"] },
```

1. Placeholdery w opisie (opcjonalnie):
  - `{{repo}}` → link do repozytorium
  - `{{certs}}` → link do certyfikatów

---

## Certyfikaty — flagi


| Flaga                | Efekt                        |
| -------------------- | ---------------------------- |
| `includeInCv: true`  | Strona + PDF                 |
| `includeInCv: false` | Tylko strona (np. planowany) |
| Brak `url`           | Wyświetlany jako „planowany" |


---

## Język domyślny

```typescript
export const DEFAULT_LOCALE: Locale = "en"; // lub "pl"
```

---

## Zdjęcie w CV

Plik `public/cv-photo.png` — PDF dołączy automatycznie, jeśli istnieje. Min. 200×200 px, kwadrat.

---

## Telefon — widoczność

```typescript
// src/config/site.ts
export const showPublicPhone = !import.meta.env.PROD;
```

- Dev → widoczny
- Produkcja → ukryty

---

## Workflow po edycji

```bash
npm run dev          # podgląd lokalny
git add . && git commit -m "Aktualizacja treści"
git push origin main # auto-deploy
```

---

## Checklist

- [x] `messagesPl` i `messagesEn` zsynchronizowane
- [ ] `projectMeta` — linki i tagi poprawne
- [ ] Certyfikaty — `includeInCv`, `url`
- [ ] Podgląd lokalny
- [ ] CV pobrane w PL i EN
- [ ] Deploy → weryfikacja live URL

---

← [Wdrożenie](deployment.md) · [Spis treści](README.md)