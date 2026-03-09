import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) { setCount(end); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, end, duration]);

  return { count, ref };
};

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const stat1 = useCountUp(74);
  const stat2 = useCountUp(100);
  const stat3 = useCountUp(12);
  const stat4 = useCountUp(87);

  const stats = [
    { ...stat1, label: t.hero.stats.items, suffix: "" },
    { ...stat2, label: t.hero.stats.coverage, suffix: "%" },
    { ...stat3, label: t.hero.stats.domains, suffix: "" },
    { ...stat4, label: t.hero.stats.databases, suffix: "" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-14 overflow-hidden bg-foreground">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 clip-diagonal" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-x-1/2 translate-y-1/2 animate-[pulse_4s_ease-in-out_infinite]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-col items-start gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-sysde-green/20 border border-[hsl(var(--sysde-green))]/30 rounded-full px-4 py-1.5 text-sm font-semibold text-[hsl(var(--sysde-green-foreground))] animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
            <Shield className="w-4 h-4 text-[hsl(var(--sysde-green))]" />
            {t.legend.status} — 100%
          </div>

          {/* Title */}
          <div className="animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "both" }}>
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">SYSDE — RFP Response</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-background leading-[1.1] max-w-3xl">
              {t.hero.title}
            </h1>
          </div>

          <p className="text-background/50 text-base md:text-lg max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "both" }}>
            {t.hero.subtitle}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                ref={stat.ref}
                className="bg-background/5 border border-background/10 rounded-xl p-5 text-center hover:bg-background/10 hover:border-primary/30 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${800 + i * 150}ms`, animationFillMode: "both" }}
              >
                <div className="text-3xl md:text-4xl font-black text-primary mb-1">
                  {stat.count}{stat.suffix}
                </div>
                <div className="text-background/40 text-xs font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm px-6 py-5 rounded-lg mt-2 hover:scale-105 transition-transform duration-200 animate-fade-in"
            style={{ animationDelay: "1400ms", animationFillMode: "both" }}
            onClick={() => document.getElementById("propuesta")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t.hero.cta}
            <ArrowDown className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
