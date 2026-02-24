import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[hsl(var(--sysde-blue-dark))] text-primary-foreground py-12 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-bold text-accent-foreground text-sm">
            SYS
          </div>
          <span className="font-display text-xl font-bold">SYSDE</span>
        </div>
        <p className="text-primary-foreground/70 text-sm">{t.footer.prepared}</p>
        <p className="text-primary-foreground/50 text-xs">{t.footer.reference}</p>
        <p className="text-primary-foreground/50 text-xs">{t.footer.contact}</p>
        <div className="border-t border-primary-foreground/10 pt-6 mt-6">
          <p className="text-primary-foreground/40 text-xs">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
