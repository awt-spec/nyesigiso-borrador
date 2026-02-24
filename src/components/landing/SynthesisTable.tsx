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
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
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
    <section id="sintesis" ref={ref} className="py-16 px-4 bg-foreground">
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{t.synthesis.subtitle}</p>
        <h2 className="text-2xl md:text-3xl font-black text-background mb-8">{t.synthesis.title}</h2>

        <div className="rounded-xl border border-background/10 overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_80px_100px] gap-4 px-5 py-3 bg-background/5 text-xs font-bold text-background/50 uppercase tracking-wider">
            <span>{t.synthesis.domain}</span>
            <span className="text-center">{t.synthesis.items}</span>
            <span className="text-right">{t.synthesis.status}</span>
          </div>

          {domains.map((d, i) => (
            <div key={d.id} className={`grid grid-cols-[1fr_80px_100px] gap-4 px-5 py-3 text-sm border-t border-background/5 hover:bg-background/5 transition-colors ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${200 + i * 50}ms`, transitionDuration: "500ms" }}>
              <span className="text-background/80 font-medium">{d.number}. {d.title[language]}</span>
              <span className="text-center text-background/40 font-mono">{d.items.length}</span>
              <span className="text-right">
                <span className="inline-flex items-center gap-1 text-[hsl(var(--sysde-green))] font-bold text-xs">
                  <CheckCircle2 className="w-3 h-3" />
                  100%
                </span>
              </span>
            </div>
          ))}

          {/* Total row */}
          <div className="grid grid-cols-[1fr_80px_100px] gap-4 px-5 py-4 bg-primary/20 border-t border-background/10 font-bold text-sm">
            <span className="text-background">{t.synthesis.total}</span>
            <span className="text-center text-background font-mono">{totalItems}</span>
            <span className="text-right text-[hsl(var(--sysde-green))] font-black">100%</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-background/40 font-medium">{t.synthesis.total}</span>
            <span className="font-black text-primary">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-background/10 [&>div]:bg-primary [&>div]:transition-all [&>div]:duration-[2s]" />
        </div>
      </div>
    </section>
  );
};

export default SynthesisTable;
