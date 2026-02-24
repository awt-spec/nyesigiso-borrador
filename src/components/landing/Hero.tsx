import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCountUp = (end: number, duration: number = 2000, suffix: string = "") => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
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
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, end, duration]);

  return { count, ref, suffix };
};

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const stat1 = useCountUp(77);
  const stat2 = useCountUp(100);
  const stat3 = useCountUp(12);
  const stat4 = useCountUp(87);

  const stats = [
    { ...stat1, label: t.hero.stats.items },
    { ...stat2, label: t.hero.stats.coverage, suffix: "%" },
    { ...stat3, label: t.hero.stats.domains },
    { ...stat4, label: t.hero.stats.databases },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(var(--sysde-blue-dark))]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[hsl(var(--sysde-blue-light))] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-[hsl(var(--sysde-green))]/20 text-[hsl(var(--sysde-green-foreground))] border border-[hsl(var(--sysde-green))]/30 rounded-full px-4 py-1.5 mb-8 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-[hsl(var(--sysde-green))] animate-pulse" />
          {t.legend.status} — 100%
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          {t.hero.title}
        </h1>
        <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          {t.hero.subtitle}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} ref={stat.ref} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.count}{stat.suffix}
              </div>
              <div className="text-primary-foreground/60 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 py-6 rounded-xl"
          onClick={() => document.getElementById("presentacion")?.scrollIntoView({ behavior: "smooth" })}
        >
          {t.hero.cta}
          <ArrowDown className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
