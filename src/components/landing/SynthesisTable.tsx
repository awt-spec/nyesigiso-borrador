import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { domains } from "@/data/domains";
import { CheckCircle2, ArrowRight, PackageCheck, PackageX } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";

const scopeLabels = {
  es: {
    sysdeCapability: "Capacidad SYSDE",
    sysdeCapabilityDesc: "Lo que SYSDE puede cubrir",
    initialProposal: "Propuesta Inicial",
    initialProposalDesc: "Incluido en el alcance base",
    included: "incluidos",
    outsideScope: "fuera del alcance inicial",
  },
  fr: {
    sysdeCapability: "Capacité SYSDE",
    sysdeCapabilityDesc: "Ce que SYSDE peut couvrir",
    initialProposal: "Proposition Initiale",
    initialProposalDesc: "Inclus dans le périmètre de base",
    included: "inclus",
    outsideScope: "hors périmètre initial",
  },
  en: {
    sysdeCapability: "SYSDE Capability",
    sysdeCapabilityDesc: "What SYSDE can cover",
    initialProposal: "Initial Proposal",
    initialProposalDesc: "Included in base scope",
    included: "included",
    outsideScope: "outside initial scope",
  },
};

const SynthesisTable = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const sl = scopeLabels[language];
  const [progressSysde, setProgressSysde] = useState(0);
  const [progressInitial, setProgressInitial] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const totalItems = domains.reduce((acc, d) => acc + d.items.length, 0);
  const totalCovered = domains.reduce((acc, d) => acc + d.items.filter(i => !i.status || i.status === "cubierto").length, 0);
  const globalPercentSysde = Math.round((totalCovered / totalItems) * 100);
  const totalQuoted = domains.reduce((acc, d) => acc + d.items.filter(i => i.included !== false).length, 0);
  const totalOutsideScope = totalItems - totalQuoted;
  const globalPercentInitial = Math.round((totalQuoted / totalItems) * 100);

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
    const timer1 = setTimeout(() => setProgressSysde(globalPercentSysde), 300);
    const timer2 = setTimeout(() => setProgressInitial(globalPercentInitial), 500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [visible, globalPercentSysde, globalPercentInitial]);

  const getDomainCoverage = (d: typeof domains[0]) => {
    const covered = d.items.filter(i => !i.status || i.status === "cubierto").length;
    return Math.round((covered / d.items.length) * 100);
  };

  const getDomainQuoted = (d: typeof domains[0]) => {
    const quoted = d.items.filter(i => i.included !== false).length;
    const toQuote = d.items.length - quoted;
    return { quoted, toQuote };
  };

  const getCoverageColor = (pct: number) => {
    if (pct >= 80) return "text-emerald-400";
    if (pct >= 50) return "text-amber-400";
    return "text-red-400";
  };

  const isInfoDomain = (d: typeof domains[0]) => d.id === "presentacion";

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
              <h3 className="text-background/90 font-bold text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
                {d.title[language]}
              </h3>
              <div className="flex items-center justify-between gap-2">
                <span className="text-background/30 text-xs font-mono">{d.items.length} items</span>
                <div className="flex items-center gap-1.5">
                  {!isInfoDomain(d) && (() => {
                    const q = getDomainQuoted(d);
                    return (
                      <>
                        {q.quoted > 0 && (
                          <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-blue-400">
                            <PackageCheck className="w-2.5 h-2.5" />{q.quoted}
                          </span>
                        )}
                        {q.toQuote > 0 && (
                          <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-orange-400">
                            <PackageX className="w-2.5 h-2.5" />{q.toQuote}
                          </span>
                        )}
                      </>
                    );
                  })()}
                  <ArrowRight className="w-3.5 h-3.5 text-background/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Dual coverage bars */}
        <div className="space-y-4">
          {/* Bar 1: SYSDE Capability */}
          <div className="rounded-xl border border-background/10 bg-background/5 p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-background font-bold text-sm">{sl.sysdeCapability}</span>
                <span className="text-background/40 text-xs ml-2">{sl.sysdeCapabilityDesc}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {totalCovered}/{totalItems}
                </span>
                <span className={`font-black text-lg ${getCoverageColor(progressSysde)}`}>{progressSysde}%</span>
              </div>
            </div>
            <Progress value={progressSysde} className="h-2.5 bg-background/10 [&>div]:bg-emerald-500 [&>div]:transition-all [&>div]:duration-[2s]" />
          </div>

          {/* Bar 2: Initial Proposal */}
          <div className="rounded-xl border border-background/10 bg-background/5 p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-background font-bold text-sm">{sl.initialProposal}</span>
                <span className="text-background/40 text-xs ml-2">{sl.initialProposalDesc}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-400">
                  <PackageCheck className="w-3.5 h-3.5" />
                  {totalQuoted}
                  <span className="text-background/30 font-normal ml-0.5">{sl.included}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-400">
                  <PackageX className="w-3.5 h-3.5" />
                  {totalOutsideScope}
                  <span className="text-background/30 font-normal ml-0.5">{sl.outsideScope}</span>
                </span>
                <span className={`font-black text-lg ${getCoverageColor(progressInitial)}`}>{progressInitial}%</span>
              </div>
            </div>
            <Progress value={progressInitial} className="h-2.5 bg-background/10 [&>div]:bg-primary [&>div]:transition-all [&>div]:duration-[2s]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SynthesisTable;
