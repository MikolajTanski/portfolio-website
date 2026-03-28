import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { SITE_URL } from "@/config/site";
import { LocaleContext } from "./context";
import { type Locale, type Messages, messagesByLocale, DEFAULT_LOCALE } from "./messages";

const SITE_ORIGIN = `${SITE_URL}/`;

const STORAGE_KEY = "portfolio-locale";

function readStoredLocale(): Locale {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === "en" || s === "pl") return s;
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE;
}

function applyDocument(locale: Locale, t: Messages) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale;
  document.title = t.meta.title;

  const setMeta = (selector: string, attr: string, value: string) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  };

  const setMetaProperty = (property: string, content: string) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("property", property);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", SITE_ORIGIN);

  setMeta('meta[name="description"]', "content", t.meta.description);
  setMeta('meta[property="og:title"]', "content", t.meta.title);
  setMeta('meta[property="og:description"]', "content", t.meta.description);
  setMeta('meta[property="og:locale"]', "content", t.meta.ogLocale);
  setMetaProperty("og:url", SITE_ORIGIN);
  setMeta('meta[name="twitter:title"]', "content", t.meta.title);
  setMeta('meta[name="twitter:description"]', "content", t.meta.description);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale());

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const t = messagesByLocale[locale];

  useEffect(() => {
    applyDocument(locale, t);
  }, [locale, t]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
