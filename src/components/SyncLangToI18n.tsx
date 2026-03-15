import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supportedLanguages, defaultLocale, type SupportedLocale } from "@/i18n";

export const SyncLangToI18n = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();

  const validLang = lang && supportedLanguages.includes(lang as SupportedLocale) ? (lang as SupportedLocale) : null;

  useEffect(() => {
    if (validLang && i18n.language !== validLang) {
      i18n.changeLanguage(validLang);
    }
  }, [validLang, i18n]);

  useEffect(() => {
    if (!validLang && lang !== undefined) {
      navigate(`/${defaultLocale}`, { replace: true });
    }
  }, [validLang, lang, navigate]);

  return <>{children}</>;
};
