import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { domains } from "@/data/domains";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";

const SynthesisTable = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const totalItems = domains.reduce((acc, d) => acc + d.items.length, 0);
  const totalCovered = domains.reduce((acc, d) => acc + d.items.filter(i => !i.status || i.status === "cubierto").length, 0);
  const globalPercent = Math.round((totalCovered / totalItems) * 100);

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
    const timer = setTimeout(() => setProgress(globalPercent), 300);
    return () => clearTimeout(timer);
  }, [visible, globalPercent]);

  const getDomainCoverage = (d: typeof domains[0]) => {
    const covered = d.items.filter(i => !i.status || i.status === "cubierto").length;
    return Math.round((covered / d.items.length) * 100);
  };

  const getCoverageColor = (pct: number) => {
    if (pct >= 80) return "text-emerald-400";
    if (pct >= 50) return "text-amber-400";
    return "text-red-400";
  };

  return (
    <section id="sintesis" ref={ref} className="py-12 md:py-16 px-4 bg-foreground">
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{t.synthesis.subtitle}</p>
        <h2 className="text-2xl md:text-3xl font-black text-background mb-3">{t.synthesis.title}</h2>
        <p className="text-background/40 text-sm mb-8 max-w-xl">
          {language === "es" && "Haga clic en cualquier dominio para navegar directamente a su sección detallada."}
          {language === "fr" && "Cliquez sur un domaine pour accéder directement à sa section détaillée."}
          {language === "en" && "Click any domain to navigate directly to its detailed section."}
        </p>

        {/* Grid cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {domains.map((d, i) => (
            <a
              key={d.id}
              href={`#${d.id}`}
              className={`group relative rounded-xl border border-background/10 p-4 transition-all duration-300 cursor-pointer hover:border-primary/40 hover:bg-background/5 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${hoveredDomain === d.id ? "border-primary/40 bg-background/5 scale-[1.02]" : ""}`}
              style={{ transitionDelay: `${100 + i * 40}ms` }}
              onMouseEnter={() => setHoveredDomain(d.id)}
              onMouseLeave={() => setHoveredDomain(null)}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-black text-primary/60">{d.number}</span>
                <span className={`inline-flex items-center gap-1 font-bold text-[10px] ${getCoverageColor(getDomainCoverage(d))}`}>
                  <CheckCircle2 className="w-3 h-3" />
                  {getDomainCoverage(d)}%
                </span>
              </div>
              <h3 className="text-background/90 font-bold text-sm leading-snug mb-1.5 group-hover:text-primary transition-colors">
                {d.title[language]}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-background/30 text-xs font-mono">{d.items.length} items</span>
                <ArrowRight className="w-3.5 h-3.5 text-background/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          ))}
        </div>

        {/* Total summary bar */}
        <div className="rounded-xl border border-background/10 bg-background/5 p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-background font-bold text-sm">{t.synthesis.total}</span>
              <span className="text-background/40 text-xs ml-2 font-mono">{totalItems} items</span>
            </div>
            <span className={`font-black text-lg ${getCoverageColor(progress)}`}>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2.5 bg-background/10 [&>div]:bg-primary [&>div]:transition-all [&>div]:duration-[2s]" />
        </div>
      </div>
    </section>
  );
};

export default SynthesisTable;
