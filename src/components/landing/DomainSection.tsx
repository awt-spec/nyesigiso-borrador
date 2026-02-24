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
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={domain.id}
      ref={ref}
      className={`py-20 px-4 ${isEven ? "bg-background" : "bg-muted/50"}`}
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-baseline gap-4 mb-8">
          <span className="text-5xl font-display font-bold text-primary/20">
            {domain.number}
          </span>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {domain.title[language]}
            </h2>
            {language !== "fr" && (
              <p className="text-muted-foreground text-sm mt-1 italic">
                {domain.title.fr}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {domain.items.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-[hsl(var(--sysde-green))]/30 hover:shadow-md transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${150 + i * 50}ms` }}
            >
              <CheckCircle2 className="w-5 h-5 text-sysde-green mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium text-sm">
                  {item[language]}
                </p>
                {language !== "fr" && (
                  <p className="text-muted-foreground text-xs mt-0.5 italic">
                    {item.fr}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-right">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-sysde-green bg-[hsl(var(--sysde-green))]/10 px-4 py-2 rounded-full">
            <CheckCircle2 className="w-4 h-4" />
            {domain.items.length} / {domain.items.length} — 100%
          </span>
        </div>
      </div>
    </section>
  );
};

export default DomainSection;
