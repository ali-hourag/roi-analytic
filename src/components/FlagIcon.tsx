import type { SupportedLocale } from "@/i18n";
import { cn } from "@/lib/utils";

const localeFlags: Record<SupportedLocale, string> = {
  es: "🇪🇸",
  en: "🇬🇧",
  nl: "🇳🇱",
};

interface FlagIconProps {
  locale: SupportedLocale;
  className?: string;
}

export const FlagIcon = ({ locale, className }: FlagIconProps) => (
  <span className={cn("text-lg leading-none", className)} role="img" aria-hidden>
    {localeFlags[locale]}
  </span>
);
