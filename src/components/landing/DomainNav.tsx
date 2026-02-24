import { useLanguage } from "@/contexts/LanguageContext";
import { domains } from "@/data/domains";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const DomainNav = () => {
  const { language } = useLanguage();
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { threshold: 0.2, rootMargin: "-80px 0px -50% 0px" }
    );

    domains.forEach(d => {
      const el = document.getElementById(d.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-1.5">
      {domains.map((d) => {
        const isActive = activeId === d.id;
        return (
          <a
            key={d.id}
            href={`#${d.id}`}
            className={`group flex items-center gap-2 transition-all duration-200 ${
              isActive ? "opacity-100" : "opacity-40 hover:opacity-80"
            }`}
            title={d.title[language]}
          >
            <span className={`text-[10px] font-bold transition-all duration-200 ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}>
              {d.number}
            </span>
            <span className={`block rounded-full transition-all duration-300 ${
              isActive
                ? "w-8 h-1.5 bg-primary"
                : "w-4 h-1 bg-muted-foreground/30 group-hover:w-6 group-hover:bg-muted-foreground/50"
            }`} />
          </a>
        );
      })}
    </nav>
  );
};

export default DomainNav;
