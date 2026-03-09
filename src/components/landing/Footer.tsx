import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={ref} className="bg-foreground border-t border-background/10 py-10 px-4">
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-bold text-primary-foreground text-xs">
              SYS
            </div>
            <span className="font-bold text-background text-sm">SYSDE</span>
          </div>
          <div className="text-center md:text-right space-y-1">
            <p className="text-background/50 text-xs">{t.footer.prepared}</p>
            <p className="text-background/30 text-[10px]">{t.footer.reference}</p>
          </div>
        </div>
        <div className="border-t border-background/10 mt-6 pt-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-background/30 text-[10px]">{t.footer.rights}</p>
          <p className="text-background/30 text-[10px]">{t.footer.contact}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
