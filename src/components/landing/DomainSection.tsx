import { useLanguage } from "@/contexts/LanguageContext";
import { Domain } from "@/data/domains";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface DomainSectionProps {
  domain: Domain;
  index: number;
}

const DomainSection = ({ domain, index }: DomainSectionProps) => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
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

  return (
    <section
      id={domain.id}
      ref={ref}
      className={`py-16 px-4 ${isEven ? "bg-background" : "bg-muted/40"}`}
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Domain header */}
        <div className="flex items-start gap-5 mb-6 pb-6 border-b border-border">
          <span className="text-4xl font-black text-primary/15 leading-none mt-1 select-none">
            {domain.number}
          </span>
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
              {domain.title[language]}
            </h2>
            <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed max-w-2xl">
              {domain.description[language]}
            </p>
          </div>
          <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-sysde-green bg-[hsl(var(--sysde-green))]/10 px-3 py-1.5 rounded-full whitespace-nowrap mt-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {domain.items.length}/{domain.items.length}
          </span>
        </div>

        {/* Items list */}
        <div className="space-y-2">
          {domain.items.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 p-3.5 rounded-lg border border-transparent hover:border-border hover:bg-card transition-all duration-300 group ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: `${100 + i * 40}ms` }}
            >
              <CheckCircle2 className="w-4 h-4 text-sysde-green mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-foreground font-semibold text-sm">
                  {item[language]}
                </p>
                <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">
                  {item.scope[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainSection;
