import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FlagIcon } from "@/components/FlagIcon";
import { supportedLanguages, type SupportedLocale } from "@/i18n";
import { cn } from "@/lib/utils";

export const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = (lang && supportedLanguages.includes(lang as SupportedLocale) ? lang : "es") as SupportedLocale;

  const switchLanguage = (newLang: SupportedLocale) => {
    if (newLang === currentLang) return;
    navigate(`/${newLang}`, { replace: true });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "group flex items-center justify-center gap-0.5 rounded-lg h-9 w-12 border border-border bg-background",
            "text-foreground transition-colors hover:bg-muted/50",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
            "shrink-0"
          )}
          aria-expanded={undefined}
          aria-haspopup="true"
          aria-label={t("language.label")}
        >
          <FlagIcon locale={currentLang} className="shrink-0" />
          <ChevronDown
            className="ml-0.5 h-3.5 w-3.5 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        {supportedLanguages.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => switchLanguage(l)}
            className={cn(
              "flex items-center justify-center gap-2 py-2.5 cursor-pointer",
              currentLang === l && "bg-accent"
            )}
            aria-label={t(`language.${l}`)}
          >
            <FlagIcon locale={l} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
