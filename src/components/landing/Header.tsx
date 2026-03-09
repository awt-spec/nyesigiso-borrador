import { useLanguage, Language } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { CheckCircle2, Globe, Maximize, Minimize } from "lucide-react";
import logoSysde from "@/assets/logo_sysde.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";

const langLabels: Record<Language, string> = { es: "ES 🇪🇸", fr: "FR 🇫🇷", en: "EN 🇬🇧" };

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-bold text-primary-foreground text-xs tracking-tight">
            SYS
          </div>
          <div className="hidden md:flex flex-col leading-tight">
            <span className="text-foreground font-bold text-sm">SYSDE</span>
            <span className="text-muted-foreground text-[10px]">{t.nav.project}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <Minimize className="w-3.5 h-3.5" /> : <Maximize className="w-3.5 h-3.5" />}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 text-xs font-medium">
                <Globe className="w-3.5 h-3.5 mr-1.5" />
                {langLabels[language]}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {(["es", "fr", "en"] as Language[]).map((lang) => (
                <DropdownMenuItem key={lang} onClick={() => setLanguage(lang)} className="cursor-pointer text-sm">
                  {langLabels[lang]}
                  {language === lang && <CheckCircle2 className="w-3.5 h-3.5 ml-auto text-sysde-green" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
