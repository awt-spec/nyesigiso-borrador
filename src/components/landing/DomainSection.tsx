import { useLanguage } from "@/contexts/LanguageContext";
import { Domain, CoverageStatus } from "@/data/domains";
import { CheckCircle2, ChevronDown, AlertTriangle, XCircle, Ban, PackageCheck, PackageX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import IdentityCard from "./IdentityCard";
import FinancialSummary from "./FinancialSummary";
import CompanyStructure from "./CompanyStructure";
import WorldMap from "./WorldMap";
import BusinessLines from "./BusinessLines";
import ProductEvolution from "./ProductEvolution";
import ArchitectureDiagram from "./ArchitectureDiagram";
import ReferencesGrid from "./ReferencesGrid";
import RDOrgChart from "./RDOrgChart";
import CreditScopeRenderer from "./CreditScopeRenderer";
import RegulatoryExchanges from "./RegulatoryExchanges";
import WorkflowDiagram from "./WorkflowDiagram";

interface DomainSectionProps {
  domain: Domain;
  index: number;
}

const CUSTOM_RENDERERS: Record<string, Record<number, React.FC>> = {
  presentacion: {
    0: IdentityCard,
    2: FinancialSummary,
    3: CompanyStructure,
    4: RDOrgChart,
    5: BusinessLines,
    6: ProductEvolution,
    7: ReferencesGrid,
  },
  "intercambios-ext": {
    0: RegulatoryExchanges,
  },
  "intercambios-int": {
    0: WorkflowDiagram,
  },
};

const sectionLabels = {
  es: { scope: "Alcance", expand: "Expandir", collapse: "Colapsar" },
  fr: { scope: "Portée", expand: "Développer", collapse: "Réduire" },
  en: { scope: "Scope", expand: "Expand", collapse: "Collapse" },
};

const statusConfig: Record<CoverageStatus, {
  label: { es: string; fr: string; en: string };
  description: { es: string; fr: string; en: string };
  className: string;
  icon: React.FC<{ className?: string }>;
}> = {
  cubierto: {
    label: { es: "CUBIERTO", fr: "COUVERT", en: "COVERED" },
    description: { es: "SYSDE lo realiza con su plataforma actual", fr: "SYSDE le réalise avec sa plateforme actuelle", en: "SYSDE delivers this with its current platform" },
    className: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
    icon: CheckCircle2,
  },
  parcial: {
    label: { es: "PARCIAL", fr: "PARTIEL", en: "PARTIAL" },
    description: { es: "Cobertura parcial con la plataforma actual", fr: "Couverture partielle avec la plateforme actuelle", en: "Partial coverage with current platform" },
    className: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30",
    icon: AlertTriangle,
  },
  "no-cubierto": {
    label: { es: "NO CUBIERTO", fr: "NON COUVERT", en: "NOT COVERED" },
    description: { es: "No cubierto por la plataforma actual", fr: "Non couvert par la plateforme actuelle", en: "Not covered by the current platform" },
    className: "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30",
    icon: XCircle,
  },
  excluido: {
    label: { es: "EXCLUIDO - Art. 6", fr: "EXCLU - Art. 6", en: "EXCLUDED - Art. 6" },
    description: { es: "Excluido por normativa", fr: "Exclu par réglementation", en: "Excluded by regulation" },
    className: "bg-gray-500/15 text-gray-600 dark:text-gray-400 border-gray-500/30",
    icon: Ban,
  },
};

const inclusionConfig = {
  included: {
    label: { es: "COTIZADO", fr: "CHIFFRÉ", en: "QUOTED" },
    description: { es: "Incluido y cotizado en esta propuesta", fr: "Inclus et chiffré dans cette offre", en: "Included and quoted in this proposal" },
    className: "bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30",
    icon: PackageCheck,
  },
  notIncluded: {
    label: { es: "POR COTIZAR", fr: "À CHIFFRER", en: "TO QUOTE" },
    description: { es: "No cotizado — requiere presupuesto adicional", fr: "Non chiffré — nécessite un devis additionnel", en: "Not quoted — requires additional budget" },
    className: "bg-orange-500/15 text-orange-700 dark:text-orange-400 border-orange-500/30",
    icon: PackageX,
  },
};

const DomainSection = ({ domain, index }: DomainSectionProps) => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [allExpanded, setAllExpanded] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isEven = index % 2 === 0;
  const hasStatuses = domain.items.some(item => item.status);
  const isInfoOnly = domain.id === "presentacion"; // No inclusion badges for info-only domains

  // Coverage stats
  const coveredCount = domain.items.filter(i => i.status === "cubierto").length;
  const totalCount = domain.items.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const toggleItem = (i: number) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedItems(new Set());
      setAllExpanded(false);
    } else {
      setExpandedItems(new Set(domain.items.map((_, i) => i)));
      setAllExpanded(true);
    }
  };

  const showArchitecture = domain.id === "tecnicas";

  // Group items by their group field
  const renderItems = () => {
    if (!domain.groups || domain.groups.length === 0) {
      // No groups — flat list
      return domain.items.map((item, i) => renderItem(item, i));
    }

    // Render grouped
    const elements: React.ReactNode[] = [];
    let currentGroup = "";
    domain.items.forEach((item, i) => {
      if (item.group && item.group !== currentGroup) {
        currentGroup = item.group;
        const groupDef = domain.groups!.find(g => g.id === item.group);
        if (groupDef) {
          elements.push(
            <div
              key={`group-${item.group}`}
              className="rounded-lg bg-primary/10 border border-primary/20 px-4 py-2.5 mt-4 first:mt-0"
            >
              <h3 className="text-sm font-bold text-primary tracking-wide">
                {groupDef.title[language]}
              </h3>
            </div>
          );
        }
      }
      elements.push(renderItem(item, i));
    });
    return elements;
  };

  const renderItem = (item: typeof domain.items[0], i: number) => {
    const isOpen = expandedItems.has(i);
    const CustomRenderer = CUSTOM_RENDERERS[domain.id]?.[i];
    const status = item.status;
    const config = status ? statusConfig[status] : null;
    const StatusIcon = config?.icon || CheckCircle2;
    const isCreditItem = item.group === "creditos";
    const isIncluded = item.included !== false; // default true
    const inclConfig = isIncluded ? inclusionConfig.included : inclusionConfig.notIncluded;
    const InclIcon = inclConfig.icon;

    const iconColor = !status
      ? "text-sysde-green"
      : status === "cubierto"
        ? "text-emerald-500"
        : status === "parcial"
          ? "text-amber-500"
          : status === "no-cubierto"
            ? "text-red-500"
            : "text-gray-400";

    return (
      <div
        key={i}
        className={`rounded-lg border transition-all duration-300 ${
          isOpen
            ? "border-primary/20 bg-card shadow-sm"
            : "border-transparent hover:border-border hover:bg-card/50"
        } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        style={{ transitionDelay: `${80 + i * 30}ms` }}
      >
        <button
          onClick={() => toggleItem(i)}
          className="w-full flex items-center gap-3 p-3.5 text-left group"
        >
          <StatusIcon className={`w-4 h-4 ${iconColor} flex-shrink-0`} />
          <span className="flex-1 text-foreground font-semibold text-sm group-hover:text-primary transition-colors">
            {item[language]}
          </span>
          <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
            {config && (
              <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${config.className}`} title={config.description[language]}>
                {config.label[language]}
              </span>
            )}
            {!isInfoOnly && (
              <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${inclConfig.className}`}>
                <InclIcon className="w-3 h-3" />
                {inclConfig.label[language]}
              </span>
            )}
          </div>
          <span className={`text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
            <ChevronDown className="w-4 h-4" />
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-3.5 pb-4 pl-11">
            {/* Mobile status badges */}
            <div className="sm:hidden mb-3 flex flex-wrap gap-1.5">
              {config && (
                <span className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full border ${config.className}`}>
                  {config.label[language]}
                </span>
              )}
              {!isInfoOnly && (
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${inclConfig.className}`}>
                  <InclIcon className="w-3 h-3" />
                  {inclConfig.label[language]}
                </span>
              )}
            </div>
            {CustomRenderer ? (
              <div>
                <CustomRenderer />
              </div>
            ) : isCreditItem ? (
              <CreditScopeRenderer text={item.scope[language]} />
            ) : (
              <div className="bg-muted/50 rounded-lg p-4 border border-border/50 mb-4">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
                  {sectionLabels[language].scope}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.scope[language]}
                </p>
              </div>
            )}
            {domain.id === "presentacion" && i === 3 && (
              <div className="mt-4">
                <WorldMap />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id={domain.id}
      ref={ref}
      className={`py-12 md:py-16 px-4 ${isEven ? "bg-background" : "bg-muted/30"}`}
    >
      <div
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Domain header */}
        <div className="flex items-start gap-4 mb-6 pb-5 border-b border-border">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary font-black text-lg flex-shrink-0">
            {domain.number}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg md:text-xl font-bold text-foreground leading-tight">
              {domain.title[language]}
            </h2>
            <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
              {domain.description[language]}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {hasStatuses ? (
              <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {coveredCount}/{totalCount}
              </span>
            ) : (
              <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-sysde-green bg-[hsl(var(--sysde-green))]/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {totalCount}/{totalCount}
              </span>
            )}
            <button
              onClick={toggleAll}
              className="text-xs text-muted-foreground hover:text-primary font-medium px-2.5 py-1.5 rounded-md hover:bg-muted transition-colors border border-border"
            >
              {allExpanded ? sectionLabels[language].collapse : sectionLabels[language].expand}
            </button>
          </div>
        </div>

        {/* Items list */}
        <div className="space-y-1.5">
          {renderItems()}
        </div>

        {/* Architecture diagram at the bottom of tecnicas domain */}
        {showArchitecture && (
          <div className="mt-10 pt-8 border-t border-border">
            <ArchitectureDiagram />
          </div>
        )}
      </div>
    </section>
  );
};

export default DomainSection;
