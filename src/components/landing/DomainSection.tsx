import { useLanguage } from "@/contexts/LanguageContext";
import { Domain } from "@/data/domains";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import IdentityCard from "./IdentityCard";
import FinancialSummary from "./FinancialSummary";
import CompanyStructure from "./CompanyStructure";
import WorldMap from "./WorldMap";
import BusinessLines from "./BusinessLines";
import ProductEvolution from "./ProductEvolution";
import ArchitectureDiagram from "./ArchitectureDiagram";
import ReferencesGrid from "./ReferencesGrid";

interface DomainSectionProps {
  domain: Domain;
  index: number;
}

// Map specific item indices in domain "presentacion" to custom components
const CUSTOM_RENDERERS: Record<string, Record<number, React.FC>> = {
  presentacion: {
    0: IdentityCard,
    2: FinancialSummary,
    3: CompanyStructure,
    5: BusinessLines,
    6: ProductEvolution,
    7: ReferencesGrid,
  },
};

const sectionLabels = {
  es: { scope: "Alcance", expand: "Expandir", collapse: "Colapsar" },
  fr: { scope: "Portée", expand: "Développer", collapse: "Réduire" },
  en: { scope: "Scope", expand: "Expand", collapse: "Collapse" },
};

const DomainSection = ({ domain, index }: DomainSectionProps) => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [allExpanded, setAllExpanded] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isEven = index % 2 === 0;

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

  // Check if this domain has an architecture section to show at the bottom
  const showArchitecture = domain.id === "tecnicas";

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
            <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-sysde-green bg-[hsl(var(--sysde-green))]/10 px-3 py-1.5 rounded-full whitespace-nowrap">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {domain.items.length}/{domain.items.length}
            </span>
            <button
              onClick={toggleAll}
              className="text-xs text-muted-foreground hover:text-primary font-medium px-2.5 py-1.5 rounded-md hover:bg-muted transition-colors border border-border"
            >
              {allExpanded ? sectionLabels[language].collapse : sectionLabels[language].expand}
            </button>
          </div>
        </div>

        {/* Items list — accordion style */}
        <div className="space-y-1.5">
          {domain.items.map((item, i) => {
            const isOpen = expandedItems.has(i);
            const CustomRenderer = CUSTOM_RENDERERS[domain.id]?.[i];

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
                  <CheckCircle2 className="w-4 h-4 text-sysde-green flex-shrink-0" />
                  <span className="flex-1 text-foreground font-semibold text-sm group-hover:text-primary transition-colors">
                    {item[language]}
                  </span>
                  <span className={`text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {/* Expandable scope detail */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-3.5 pb-4 pl-11">
                    {/* Text scope */}
                    <div className="bg-muted/50 rounded-lg p-4 border border-border/50 mb-4">
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
                        {sectionLabels[language].scope}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.scope[language]}
                      </p>
                    </div>

                    {/* Custom interactive component if available */}
                    {CustomRenderer && (
                      <div className="mt-2">
                        <CustomRenderer />
                      </div>
                    )}

                    {/* WorldMap shown after CompanyStructure in Tamaño */}
                    {domain.id === "presentacion" && i === 3 && (
                      <div className="mt-4">
                        <WorldMap />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture diagram at the bottom of presentacion domain */}
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
