import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { domains } from "@/data/domains";
import { CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";

const SynthesisTable = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setProgress(100), 300);
    return () => clearTimeout(timer);
  }, [visible]);

  const totalItems = domains.reduce((acc, d) => acc + d.items.length, 0);

  return (
    <section ref={ref} className="py-20 px-4 bg-primary text-primary-foreground">
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">{t.synthesis.title}</h2>
        <p className="text-center text-primary-foreground/60 mb-10">{t.synthesis.subtitle}</p>

        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-4 border-b border-primary-foreground/10 text-sm font-semibold text-primary-foreground/70">
            <span>{t.synthesis.domain}</span>
            <span className="text-center">{t.synthesis.items}</span>
            <span className="text-right">{t.synthesis.status}</span>
          </div>

          {domains.map((d) => (
            <div key={d.id} className="grid grid-cols-3 gap-4 p-4 border-b border-primary-foreground/5 text-sm hover:bg-primary-foreground/5 transition-colors">
              <span className="font-medium">{d.number}. {d.title[language]}</span>
              <span className="text-center text-primary-foreground/60">{d.items.length}</span>
              <span className="text-right">
                <span className="inline-flex items-center gap-1 text-[hsl(var(--sysde-green))] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t.synthesis.covered}
                </span>
              </span>
            </div>
          ))}

          <div className="grid grid-cols-3 gap-4 p-4 bg-primary-foreground/5 font-bold">
            <span>{t.synthesis.total}</span>
            <span className="text-center">{totalItems}</span>
            <span className="text-right text-[hsl(var(--sysde-green))]">100%</span>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-primary-foreground/60">{t.synthesis.total}</span>
            <span className="font-bold text-accent">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3 bg-primary-foreground/10 [&>div]:bg-[hsl(var(--sysde-green))] [&>div]:transition-all [&>div]:duration-[2s]" />
        </div>
      </div>
    </section>
  );
};

export default SynthesisTable;
