import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Code2, TestTube, ShieldCheck, Database, Layers, Cpu, Headphones } from "lucide-react";

const t = {
  es: {
    title: "Estructura de I+D",
    subtitle: "120 profesionales dedicados",
    direction: "Dirección de I+D",
    architecture: "Arquitectura & Diseño",
    coreDev: "Desarrollo Core",
    qa: "QA & Testing",
    specializedDev: "Desarrollo Especializado",
    support: "Soporte Técnico Avanzado",
    archItems: ["Arquitectos de Software", "Diseño de Base de Datos", "UX / UI"],
    coreItems: ["Módulo Créditos", "Módulo Cuentas", "Módulo Cajas", "Contabilidad & Tesorería"],
    qaItems: ["Automatización de Pruebas", "Control de Calidad", "Certificación"],
    specItems: ["Leasing & Factoraje", "Canales Digitales", "Integraciones API"],
    supportItems: ["Soporte Nivel 3", "Actualizaciones Regulatorias", "Parches & Hotfixes"],
  },
  fr: {
    title: "Structure R&D",
    subtitle: "120 professionnels dédiés",
    direction: "Direction R&D",
    architecture: "Architecture & Conception",
    coreDev: "Développement Core",
    qa: "QA & Tests",
    specializedDev: "Développement Spécialisé",
    support: "Support Technique Avancé",
    archItems: ["Architectes Logiciels", "Conception BDD", "UX / UI"],
    coreItems: ["Module Crédits", "Module Comptes", "Module Caisses", "Comptabilité & Trésorerie"],
    qaItems: ["Automatisation Tests", "Contrôle Qualité", "Certification"],
    specItems: ["Leasing & Factoring", "Canaux Digitaux", "Intégrations API"],
    supportItems: ["Support Niveau 3", "Mises à jour Réglementaires", "Patchs & Hotfixes"],
  },
  en: {
    title: "R&D Structure",
    subtitle: "120 dedicated professionals",
    direction: "R&D Direction",
    architecture: "Architecture & Design",
    coreDev: "Core Development",
    qa: "QA & Testing",
    specializedDev: "Specialized Development",
    support: "Advanced Technical Support",
    archItems: ["Software Architects", "Database Design", "UX / UI"],
    coreItems: ["Credits Module", "Accounts Module", "Teller Module", "Accounting & Treasury"],
    qaItems: ["Test Automation", "Quality Control", "Certification"],
    specItems: ["Leasing & Factoring", "Digital Channels", "API Integrations"],
    supportItems: ["Level 3 Support", "Regulatory Updates", "Patches & Hotfixes"],
  },
};

interface OrgBranch {
  titleKey: "architecture" | "coreDev" | "qa" | "specializedDev" | "support";
  itemsKey: "archItems" | "coreItems" | "qaItems" | "specItems" | "supportItems";
  icon: React.ReactNode;
  people: string;
  accent: string;
}

const branches: OrgBranch[] = [
  { titleKey: "architecture", itemsKey: "archItems", icon: <Layers className="w-4 h-4" />, people: "15", accent: "bg-primary/10 text-primary border-primary/20" },
  { titleKey: "coreDev", itemsKey: "coreItems", icon: <Code2 className="w-4 h-4" />, people: "45", accent: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20" },
  { titleKey: "qa", itemsKey: "qaItems", icon: <ShieldCheck className="w-4 h-4" />, people: "20", accent: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20" },
  { titleKey: "specializedDev", itemsKey: "specItems", icon: <Cpu className="w-4 h-4" />, people: "25", accent: "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20" },
  { titleKey: "support", itemsKey: "supportItems", icon: <Headphones className="w-4 h-4" />, people: "15", accent: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20" },
];

const RDOrgChart = () => {
  const { language } = useLanguage();
  const l = t[language];

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-xl font-black text-foreground">{l.title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{l.subtitle}</p>
      </div>

      {/* Top: Direction node */}
      <div className="flex justify-center">
        <div className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg">
          <Users className="w-5 h-5" />
          <span className="font-bold text-sm">{l.direction}</span>
        </div>
      </div>

      {/* Connector line */}
      <div className="flex justify-center">
        <div className="w-px h-6 bg-border" />
      </div>

      {/* Horizontal connector */}
      <div className="relative">
        <div className="absolute top-0 left-[10%] right-[10%] h-px bg-border" />
        {/* Vertical ticks */}
        <div className="flex justify-between px-[10%]">
          {branches.map((_, i) => (
            <div key={i} className="w-px h-4 bg-border" />
          ))}
        </div>
      </div>

      {/* Branch cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {branches.map((branch, i) => {
          const items = l[branch.itemsKey] as string[];
          return (
            <div
              key={i}
              className={`rounded-xl border p-4 transition-all hover:shadow-md ${branch.accent}`}
            >
              {/* Branch header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-background/80 flex items-center justify-center flex-shrink-0">
                  {branch.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-xs leading-tight">{l[branch.titleKey]}</h4>
                  <span className="text-[10px] opacity-70 font-semibold">{branch.people} personas</span>
                </div>
              </div>

              {/* Sub-items */}
              <div className="space-y-1.5 pl-2 border-l-2 border-current/10">
                {items.map((item, j) => (
                  <div key={j} className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-current opacity-40 flex-shrink-0" />
                    <span className="text-[11px] font-medium opacity-80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom bar */}
      <div className="rounded-xl bg-foreground text-background p-3 text-center">
        <span className="text-xs font-bold tracking-wide">SAF UPV — Continuous Development & Regulatory Updates</span>
      </div>
    </div>
  );
};

export default RDOrgChart;
