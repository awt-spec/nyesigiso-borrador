import { useLanguage, Language } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { domains } from "@/data/domains";
import { CheckCircle2, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const langLabels: Record<Language, string> = { es: "ES 🇪🇸", fr: "FR 🇫🇷", en: "EN 🇬🇧" };

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const domainsList = domains;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-bold text-accent-foreground text-sm">
            SYS
          </div>
          <span className="text-primary-foreground font-semibold text-sm hidden md:block">
            {t.nav.project}
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {domainsList.slice(0, 6).map((d) => (
            <a
              key={d.id}
              href={`#${d.id}`}
              className="text-primary-foreground/70 hover:text-primary-foreground text-xs px-2 py-1 rounded transition-colors"
            >
              {d.number}
            </a>
          ))}
          <span className="text-primary-foreground/40 text-xs">...</span>
          {domainsList.slice(10).map((d) => (
            <a
              key={d.id}
              href={`#${d.id}`}
              className="text-primary-foreground/70 hover:text-primary-foreground text-xs px-2 py-1 rounded transition-colors"
            >
              {d.number}
            </a>
          ))}
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              <Globe className="w-4 h-4 mr-1" />
              {langLabels[language]}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {(["es", "fr", "en"] as Language[]).map((lang) => (
              <DropdownMenuItem key={lang} onClick={() => setLanguage(lang)} className="cursor-pointer">
                {langLabels[lang]}
                {language === lang && <CheckCircle2 className="w-4 h-4 ml-auto text-sysde-green" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
