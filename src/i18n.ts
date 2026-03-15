import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "@/locales/es.json";
import en from "@/locales/en.json";
import nl from "@/locales/nl.json";

export const supportedLanguages = ["es", "en", "nl"] as const;
export type SupportedLocale = (typeof supportedLanguages)[number];

export const defaultLocale: SupportedLocale = "es";

const resources = {
  es: { translation: es },
  en: { translation: en },
  nl: { translation: nl },
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLocale,
  fallbackLng: defaultLocale,
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
