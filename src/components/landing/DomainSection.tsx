import { useLanguage } from "@/contexts/LanguageContext";
import { Domain } from "@/data/domains";
import { CheckCircle2, ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface DomainSectionProps {
  domain: Domain;
  index: number;
}

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
              {allExpanded ? "Colapsar" : "Expandir"}
            </button>
          </div>
        </div>

        {/* Items list — accordion style */}
        <div className="space-y-1.5">
          {domain.items.map((item, i) => {
            const isOpen = expandedItems.has(i);
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
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-3.5 pb-4 pl-11">
                    <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
                        Alcance / Scope
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.scope[language]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainSection;
