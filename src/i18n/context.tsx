import { createContext } from "react";
import type { Locale, Messages } from "./messages";

export type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
};

export const LocaleContext = createContext<LocaleContextValue | null>(null);
