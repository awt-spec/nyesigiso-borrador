import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Layers, DollarSign, TrendingDown, ChevronRight, Shield, Settings, AlertTriangle, Scale, Globe, Users, Building, UserCheck, BarChart3, Workflow } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Lang = "es" | "fr" | "en";

interface Module {
  name: Record<Lang, string>;
  status: string;
  monthly: string;
  quarterly: string;
  annual: string;
}

interface ModuleGroup {
  id: string;
  label: string;
  icon: React.ElementType;
  subtotalName: Record<Lang, string>;
  modules: Module[];
  subtotalMonthly: string;
  subtotalQuarterly: string;
  subtotalAnnual: string;
}

const moduleGroups: ModuleGroup[] = [
  {
    id: "G",
    label: "G",
    icon: Shield,
    subtotalName: {
      es: "Seguridad & Control",
      fr: "Sécurité & Contrôle",
      en: "Security & Control",
    },
    modules: [
      { name: { es: "Habilitations — Autorizaciones y Permisos", fr: "Habilitations — Autorisations et Permissions", en: "Authorizations & Permissions" }, status: "EXCL. Art.6", monthly: "$1,400", quarterly: "$4,200", annual: "$16,800" },
      { name: { es: "Delegaciones", fr: "Délégations", en: "Delegations" }, status: "EXCL. Art.6", monthly: "$700", quarterly: "$2,100", annual: "$8,400" },
      { name: { es: "Inspección", fr: "Inspection", en: "Inspection" }, status: "NO CUBIERTO", monthly: "$300", quarterly: "$900", annual: "$3,600" },
      { name: { es: "Control y Trazabilidad", fr: "Contrôle et Traçabilité", en: "Control & Traceability" }, status: "EXCL. Art.6", monthly: "$1,000", quarterly: "$3,000", annual: "$12,000" },
    ],
    subtotalMonthly: "$3,400",
    subtotalQuarterly: "$10,200",
    subtotalAnnual: "$40,800",
  },
  {
    id: "H",
    label: "H",
    icon: Settings,
    subtotalName: {
      es: "Parametrización de Productos",
      fr: "Paramétrage des Produits",
      en: "Product Parameterization",
    },
    modules: [
      { name: { es: "Parametrización de Productos", fr: "Paramétrage des Produits", en: "Product Parameterization" }, status: "EXCL. Art.6", monthly: "$700", quarterly: "$2,100", annual: "$8,400" },
      { name: { es: "Creación de Nuevos Productos", fr: "Création de Nouveaux Produits", en: "New Product Creation" }, status: "EXCL. Art.6", monthly: "$500", quarterly: "$1,500", annual: "$6,000" },
    ],
    subtotalMonthly: "$1,200",
    subtotalQuarterly: "$3,600",
    subtotalAnnual: "$14,400",
  },
  {
    id: "C",
    label: "C",
    icon: AlertTriangle,
    subtotalName: {
      es: "Riesgos & Scoring",
      fr: "Risques & Scoring",
      en: "Risks & Scoring",
    },
    modules: [
      { name: { es: "Garantías", fr: "Garanties", en: "Guarantees" }, status: "NO CUBIERTO", monthly: "$800", quarterly: "$2,400", annual: "$9,600" },
      { name: { es: "Calificación / Scoring", fr: "Qualification / Scoring", en: "Qualification / Scoring" }, status: "NO CUBIERTO", monthly: "$1,050", quarterly: "$3,150", annual: "$12,600" },
      { name: { es: "Compromisos (upgrade PARCIAL → Completo)", fr: "Engagements (upgrade PARTIEL → Complet)", en: "Commitments (upgrade PARTIAL → Full)" }, status: "UPGRADE", monthly: "$300", quarterly: "$900", annual: "$3,600" },
    ],
    subtotalMonthly: "$2,150",
    subtotalQuarterly: "$6,450",
    subtotalAnnual: "$25,800",
  },
  {
    id: "D",
    label: "D",
    icon: Scale,
    subtotalName: {
      es: "Jurídico & Contencioso",
      fr: "Juridique & Contentieux",
      en: "Legal & Litigation",
    },
    modules: [
      { name: { es: "Contencioso", fr: "Contentieux", en: "Litigation" }, status: "NO CUBIERTO", monthly: "$500", quarterly: "$1,500", annual: "$6,000" },
      { name: { es: "Sucesiones", fr: "Successions", en: "Succession" }, status: "NO CUBIERTO", monthly: "$300", quarterly: "$900", annual: "$3,600" },
      { name: { es: "Embargos / ATD", fr: "Saisies / ATD", en: "Seizures / ATD" }, status: "NO CUBIERTO", monthly: "$400", quarterly: "$1,200", annual: "$4,800" },
      { name: { es: "Reclamaciones", fr: "Réclamations", en: "Claims" }, status: "NO CUBIERTO", monthly: "$300", quarterly: "$900", annual: "$3,600" },
    ],
    subtotalMonthly: "$1,500",
    subtotalQuarterly: "$4,500",
    subtotalAnnual: "$18,000",
  },
  {
    id: "A",
    label: "A",
    icon: Globe,
    subtotalName: {
      es: "Canales Digitales",
      fr: "Canaux Digitaux",
      en: "Digital Channels",
    },
    modules: [
      { name: { es: "Internet Banking", fr: "Internet Banking", en: "Internet Banking" }, status: "NO CUBIERTO", monthly: "$2,000", quarterly: "$6,000", annual: "$24,000" },
      { name: { es: "Mobile Banking (iOS/Android + PWA)", fr: "Mobile Banking (iOS/Android + PWA)", en: "Mobile Banking (iOS/Android + PWA)" }, status: "NO CUBIERTO", monthly: "$2,000", quarterly: "$6,000", annual: "$24,000" },
      { name: { es: "SMS & Alertas Transaccionales", fr: "SMS & Alertes Transactionnelles", en: "SMS & Transactional Alerts" }, status: "NO CUBIERTO", monthly: "$900", quarterly: "$2,700", annual: "$10,800" },
    ],
    subtotalMonthly: "$4,900",
    subtotalQuarterly: "$14,700",
    subtotalAnnual: "$58,800",
  },
  {
    id: "B",
    label: "B",
    icon: Users,
    subtotalName: {
      es: "CRM & Marketing",
      fr: "CRM & Marketing",
      en: "CRM & Marketing",
    },
    modules: [
      { name: { es: "Archivo de Prospectos", fr: "Archive de Prospects", en: "Prospect Archive" }, status: "NO CUBIERTO", monthly: "$400", quarterly: "$1,200", annual: "$4,800" },
      { name: { es: "Carteras Comerciales", fr: "Portefeuilles Commerciaux", en: "Commercial Portfolios" }, status: "NO CUBIERTO", monthly: "$700", quarterly: "$2,100", annual: "$8,400" },
      { name: { es: "Gestión de Eventos", fr: "Gestion des Événements", en: "Event Management" }, status: "NO CUBIERTO", monthly: "$250", quarterly: "$750", annual: "$3,000" },
      { name: { es: "Seguimiento de Actividad del Asesor", fr: "Suivi d'Activité du Conseiller", en: "Advisor Activity Tracking" }, status: "NO CUBIERTO", monthly: "$250", quarterly: "$750", annual: "$3,000" },
    ],
    subtotalMonthly: "$1,600",
    subtotalQuarterly: "$4,800",
    subtotalAnnual: "$19,200",
  },
  {
    id: "E",
    label: "E",
    icon: Building,
    subtotalName: {
      es: "ERP Financiero",
      fr: "ERP Financier",
      en: "Financial ERP",
    },
    modules: [
      { name: { es: "Activos Fijos / Immobilisations", fr: "Immobilisations", en: "Fixed Assets" }, status: "NO CUBIERTO", monthly: "$600", quarterly: "$1,800", annual: "$7,200" },
      { name: { es: "Conciliación / Lettrage", fr: "Rapprochement / Lettrage", en: "Reconciliation / Lettrage" }, status: "NO CUBIERTO", monthly: "$500", quarterly: "$1,500", annual: "$6,000" },
      { name: { es: "Compras / Inventarios", fr: "Achats / Inventaires", en: "Purchasing / Inventory" }, status: "NO CUBIERTO", monthly: "$800", quarterly: "$2,400", annual: "$9,600" },
      { name: { es: "Proveedores / Fournisseurs", fr: "Fournisseurs", en: "Vendors" }, status: "NO CUBIERTO", monthly: "$400", quarterly: "$1,200", annual: "$4,800" },
      { name: { es: "Obras y Proyectos / Chantiers", fr: "Chantiers et Projets", en: "Projects & Construction" }, status: "NO CUBIERTO", monthly: "$300", quarterly: "$900", annual: "$3,600" },
      { name: { es: "Archivo / Archivage", fr: "Archivage", en: "Archiving" }, status: "NO CUBIERTO", monthly: "$500", quarterly: "$1,500", annual: "$6,000" },
    ],
    subtotalMonthly: "$3,100",
    subtotalQuarterly: "$9,300",
    subtotalAnnual: "$37,200",
  },
  {
    id: "F",
    label: "F",
    icon: UserCheck,
    subtotalName: {
      es: "RRHH & Nómina",
      fr: "RH & Paie",
      en: "HR & Payroll",
    },
    modules: [
      { name: { es: "Nómina / Paie (DNSI, INPS)", fr: "Paie (DNSI, INPS)", en: "Payroll (DNSI, INPS)" }, status: "NO CUBIERTO", monthly: "$1,500", quarterly: "$4,500", annual: "$18,000" },
      { name: { es: "Gestión del Personal", fr: "Gestion du Personnel", en: "Personnel Management" }, status: "NO CUBIERTO", monthly: "$700", quarterly: "$2,100", annual: "$8,400" },
    ],
    subtotalMonthly: "$2,200",
    subtotalQuarterly: "$6,600",
    subtotalAnnual: "$26,400",
  },
  {
    id: "I",
    label: "I",
    icon: BarChart3,
    subtotalName: {
      es: "BI & DataWarehouse",
      fr: "BI & DataWarehouse",
      en: "BI & DataWarehouse",
    },
    modules: [
      { name: { es: "Tableros Avanzados (upgrade PARCIAL → Avanzado)", fr: "Tableaux Avancés (upgrade PARTIEL → Avancé)", en: "Advanced Dashboards (upgrade PARTIAL → Advanced)" }, status: "UPGRADE", monthly: "$400", quarterly: "$1,200", annual: "$4,800" },
      { name: { es: "Contabilidad Analítica", fr: "Comptabilité Analytique", en: "Analytical Accounting" }, status: "NO CUBIERTO", monthly: "$600", quarterly: "$1,800", annual: "$7,200" },
      { name: { es: "Presupuesto / Budget", fr: "Budget", en: "Budget" }, status: "NO CUBIERTO", monthly: "$400", quarterly: "$1,200", annual: "$4,800" },
      { name: { es: "DataWarehouse", fr: "DataWarehouse", en: "DataWarehouse" }, status: "NO CUBIERTO", monthly: "$1,200", quarterly: "$3,600", annual: "$14,400" },
      { name: { es: "Herramientas BI / Outils d'aide à la décision", fr: "Outils BI / Aide à la décision", en: "BI Tools / Decision Support" }, status: "NO CUBIERTO", monthly: "$1,050", quarterly: "$3,150", annual: "$12,600" },
    ],
    subtotalMonthly: "$3,650",
    subtotalQuarterly: "$10,950",
    subtotalAnnual: "$43,800",
  },
  {
    id: "J",
    label: "J",
    icon: Workflow,
    subtotalName: {
      es: "Integración & APIs",
      fr: "Intégration & APIs",
      en: "Integration & APIs",
    },
    modules: [
      { name: { es: "Workflow / Gestión de Flujos", fr: "Workflow / Gestion des Flux", en: "Workflow / Flow Management" }, status: "NO CUBIERTO", monthly: "$800", quarterly: "$2,400", annual: "$9,600" },
      { name: { es: "GED — Gestión Electrónica de Documentos", fr: "GED — Gestion Électronique de Documents", en: "DMS — Electronic Document Management" }, status: "NO CUBIERTO", monthly: "$600", quarterly: "$1,800", annual: "$7,200" },
      { name: { es: "Web Services (STRATEGO, Orange Money, BCEAO…)", fr: "Web Services (STRATEGO, Orange Money, BCEAO…)", en: "Web Services (STRATEGO, Orange Money, BCEAO…)" }, status: "NO CUBIERTO", monthly: "$700", quarterly: "$2,100", annual: "$8,400" },
      { name: { es: "APIs REST (bundled con Web Services)", fr: "APIs REST (bundled avec Web Services)", en: "REST APIs (bundled with Web Services)" }, status: "NO CUBIERTO", monthly: "bundled", quarterly: "—", annual: "—" },
    ],
    subtotalMonthly: "$2,100",
    subtotalQuarterly: "$6,300",
    subtotalAnnual: "$25,200",
  },
];

const labels: Record<Lang, Record<string, string>> = {
  es: {
    title: "Propuesta de Expansión",
    subtitle: "FASE 1 — Base · FASE 2 — ALL IN",
    phase1: "FASE 1 — BASE VIGENTE",
    phase1desc: "SAF UPV 7.0 · 87 BD · 94 Agencias",
    phase1note: "Ya activo desde la firma",
    phase2: "FASE 2 — ALL IN",
    phase2desc: "36 módulos adicionales sobre FASE 1",
    phase2note: "Se activa cuando NYESIGISO esté lista",
    active: "ACTIVA",
    planned: "BUNDLE",
    monthly: "OPEX/Mes",
    quarterly: "OPEX/Trim",
    annual: "OPEX/Año",
    coverage: "Cobertura",
    modules: "Módulos",
    savingsTitle: "Ahorro vs. À la Carte",
    savingsDesc: "eligiendo ALL IN",
    alaCarte: "À la Carte",
    allIn: "ALL IN",
    savings: "Ahorro",
    detailTitle: "Detalle de Módulos — FASE 2",
    detailSubtitle: "36 módulos agrupados · precios individuales del Cadre de Réponse",
    group: "Grupo",
    module: "Módulo",
    status: "Estado",
    subtotal: "Subtotal",
    totalAlaCarte: "TOTAL À LA CARTE",
    totalAllIn: "FASE 2 ALL IN (incluye FASE 1)",
    totalSavings: "AHORRO eligiendo ALL IN",
    perMonth: "/mes",
    billing: "Facturación trimestral anticipada · Precios en USD",
    phase1includes: "Migración SAF UPV 7.0 completa · Consolidación 87 BD → 1 · Licencias ilimitadas · Soporte + BCEAO",
    phase2includes: "Grupos G+H+C+D+A+B+E+F+I+J — Seguridad, Riesgos, Digital, CRM, ERP, RRHH, BI, APIs",
    comparisonTitle: "Comparación de Escenarios",
  },
  fr: {
    title: "Proposition d'Expansion",
    subtitle: "PHASE 1 — Base · PHASE 2 — ALL IN",
    phase1: "PHASE 1 — BASE ACTIVE",
    phase1desc: "SAF UPV 7.0 · 87 BD · 94 Agences",
    phase1note: "Active depuis la signature",
    phase2: "PHASE 2 — ALL IN",
    phase2desc: "36 modules supplémentaires sur PHASE 1",
    phase2note: "S'active quand NYESIGISO est prête",
    active: "ACTIVE",
    planned: "BUNDLE",
    monthly: "OPEX/Mois",
    quarterly: "OPEX/Trim",
    annual: "OPEX/An",
    coverage: "Couverture",
    modules: "Modules",
    savingsTitle: "Économie vs. À la Carte",
    savingsDesc: "en choisissant ALL IN",
    alaCarte: "À la Carte",
    allIn: "ALL IN",
    savings: "Économie",
    detailTitle: "Détail des Modules — PHASE 2",
    detailSubtitle: "36 modules groupés · prix individuels du Cadre de Réponse",
    group: "Groupe",
    module: "Module",
    status: "Statut",
    subtotal: "Sous-total",
    totalAlaCarte: "TOTAL À LA CARTE",
    totalAllIn: "PHASE 2 ALL IN (inclut PHASE 1)",
    totalSavings: "ÉCONOMIE en choisissant ALL IN",
    perMonth: "/mois",
    billing: "Facturation trimestrielle anticipée · Prix en USD",
    phase1includes: "Migration SAF UPV 7.0 complète · Consolidation 87 BD → 1 · Licences illimitées · Support + BCEAO",
    phase2includes: "Groupes G+H+C+D+A+B+E+F+I+J — Sécurité, Risques, Digital, CRM, ERP, RH, BI, APIs",
    comparisonTitle: "Comparaison des Scénarios",
  },
  en: {
    title: "Expansion Proposal",
    subtitle: "PHASE 1 — Base · PHASE 2 — ALL IN",
    phase1: "PHASE 1 — CURRENT BASE",
    phase1desc: "SAF UPV 7.0 · 87 DBs · 94 Agencies",
    phase1note: "Active since signing",
    phase2: "PHASE 2 — ALL IN",
    phase2desc: "36 additional modules on top of PHASE 1",
    phase2note: "Activates when NYESIGISO is ready",
    active: "ACTIVE",
    planned: "BUNDLE",
    monthly: "OPEX/Mo",
    quarterly: "OPEX/Qtr",
    annual: "OPEX/Yr",
    coverage: "Coverage",
    modules: "Modules",
    savingsTitle: "Savings vs. À la Carte",
    savingsDesc: "by choosing ALL IN",
    alaCarte: "À la Carte",
    allIn: "ALL IN",
    savings: "Savings",
    detailTitle: "Module Detail — PHASE 2",
    detailSubtitle: "36 grouped modules · individual pricing from Cadre de Réponse",
    group: "Group",
    module: "Module",
    status: "Status",
    subtotal: "Subtotal",
    totalAlaCarte: "TOTAL À LA CARTE",
    totalAllIn: "PHASE 2 ALL IN (includes PHASE 1)",
    totalSavings: "SAVINGS by choosing ALL IN",
    perMonth: "/mo",
    billing: "Quarterly prepaid billing · Prices in USD",
    phase1includes: "Full SAF UPV 7.0 migration · 87 DB consolidation → 1 · Unlimited licenses · Support + BCEAO",
    phase2includes: "Groups G+H+C+D+A+B+E+F+I+J — Security, Risks, Digital, CRM, ERP, HR, BI, APIs",
    comparisonTitle: "Scenario Comparison",
  },
};

const statusColor = (status: string) => {
  if (status.includes("EXCL")) return "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30";
  if (status === "UPGRADE") return "bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30";
  return "bg-muted text-muted-foreground border-border";
};

const ImplementationPlan = () => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const t = labels[language];

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
      id="propuesta"
      ref={ref}
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Layers className="w-4 h-4" />
            {t.subtitle}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t.title}
          </h2>
        </div>

        {/* Two Phases Side by Side */}
        <div className={`grid md:grid-cols-2 gap-5 mb-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* FASE 1 */}
          <Card className="border-emerald-500/30 bg-emerald-500/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-emerald-500 text-white text-xs">{t.active}</Badge>
                <Badge variant="secondary" className="text-xs">~61% {t.coverage}</Badge>
              </div>
              <CardTitle className="text-lg font-bold text-foreground">{t.phase1}</CardTitle>
              <p className="text-sm text-muted-foreground">{t.phase1desc}</p>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">$7,500</span>
                <span className="text-muted-foreground text-sm">{t.perMonth}</span>
              </div>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>$22,500 {t.quarterly.split("/")[1]}</span>
                <span>$90,000 {t.annual.split("/")[1]}</span>
              </div>
              <div className="bg-muted/40 rounded-lg p-3 mt-2">
                <p className="text-xs text-muted-foreground leading-relaxed">{t.phase1includes}</p>
              </div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {t.phase1note}
              </p>
            </CardContent>
          </Card>

          {/* FASE 2 */}
          <Card className="border-primary/30 bg-primary/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-primary text-primary-foreground text-xs">{t.planned}</Badge>
                <Badge variant="secondary" className="text-xs">100% {t.coverage}</Badge>
              </div>
              <CardTitle className="text-lg font-bold text-foreground">{t.phase2}</CardTitle>
              <p className="text-sm text-muted-foreground">{t.phase2desc}</p>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="flex items-baseline gap-1">
                <span className="text-lg text-muted-foreground line-through mr-1">$7,500</span>
                <span className="text-sm text-muted-foreground">+</span>
                <span className="text-lg text-muted-foreground line-through ml-1">$7,499</span>
                <span className="text-sm text-muted-foreground">=</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-primary">$14,999</span>
                <span className="text-muted-foreground text-sm">{t.perMonth}</span>
              </div>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>$44,997 {t.quarterly.split("/")[1]}</span>
                <span>$179,988 {t.annual.split("/")[1]}</span>
              </div>
              <div className="bg-muted/40 rounded-lg p-3 mt-2">
                <p className="text-xs text-muted-foreground leading-relaxed">{t.phase2includes}</p>
              </div>
              <p className="text-xs text-primary flex items-center gap-1">
                <ChevronRight className="w-3.5 h-3.5" />
                {t.phase2note}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Savings Banner */}
        <div className={`mb-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <Card className="border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5">
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.savingsTitle}</p>
                    <p className="text-sm text-muted-foreground">{t.savingsDesc}</p>
                  </div>
                </div>
                <div className="flex gap-6 text-center">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">{t.monthly}</p>
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">−$18,301</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">{t.quarterly}</p>
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">−$54,903</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">{t.annual}</p>
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">−$219,612</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className={`mb-10 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">{t.comparisonTitle}</h3>
          <Card className="overflow-hidden border-primary/20">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/5 border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground"></th>
                    <th className="text-center px-4 py-3 font-semibold text-foreground">{t.phase1.split("—")[0]?.trim()}</th>
                    <th className="text-center px-4 py-3 font-semibold text-muted-foreground">{t.alaCarte}</th>
                    <th className="text-center px-4 py-3 font-semibold text-primary">{t.allIn}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="px-4 py-3 font-medium text-foreground">{t.monthly}</td>
                    <td className="px-4 py-3 text-center text-foreground">$7,500</td>
                    <td className="px-4 py-3 text-center text-muted-foreground line-through">$33,300</td>
                    <td className="px-4 py-3 text-center font-bold text-primary">$14,999</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="px-4 py-3 font-medium text-foreground">{t.quarterly}</td>
                    <td className="px-4 py-3 text-center text-foreground">$22,500</td>
                    <td className="px-4 py-3 text-center text-muted-foreground line-through">$99,900</td>
                    <td className="px-4 py-3 text-center font-bold text-primary">$44,997</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="px-4 py-3 font-medium text-foreground">{t.annual}</td>
                    <td className="px-4 py-3 text-center text-foreground">$90,000</td>
                    <td className="px-4 py-3 text-center text-muted-foreground line-through">$399,600</td>
                    <td className="px-4 py-3 text-center font-bold text-primary">$179,988</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="px-4 py-3 font-medium text-foreground">{t.coverage}</td>
                    <td className="px-4 py-3 text-center"><Badge variant="secondary">~61%</Badge></td>
                    <td className="px-4 py-3 text-center"><Badge>100%</Badge></td>
                    <td className="px-4 py-3 text-center"><Badge>100%</Badge></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">{t.modules}</td>
                    <td className="px-4 py-3 text-center text-foreground">—</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">36</td>
                    <td className="px-4 py-3 text-center font-bold text-primary">36</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Module Detail with Accordions */}
        <div className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-3">
              <DollarSign className="w-4 h-4" />
              {t.detailSubtitle}
            </div>
            <h3 className="text-2xl font-bold text-foreground">{t.detailTitle}</h3>
          </div>

          <Accordion type="multiple" className="space-y-2">
            {moduleGroups.map((group) => {
              const Icon = group.icon;
              return (
                <AccordionItem key={group.id} value={group.id} className="border rounded-lg overflow-hidden bg-card">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/30">
                    <div className="flex items-center gap-3 flex-1 mr-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <Badge variant="outline" className="text-xs font-mono flex-shrink-0">{t.group} {group.label}</Badge>
                        <span className="font-semibold text-foreground text-sm truncate">{group.subtotalName[language]}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-bold text-primary flex-shrink-0">
                        <DollarSign className="w-3.5 h-3.5" />
                        {group.subtotalMonthly.replace("$", "")}{t.perMonth}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pb-0">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-muted/30 border-y border-border">
                            <th className="text-left px-4 py-2 text-xs font-medium text-muted-foreground">{t.module}</th>
                            <th className="text-center px-3 py-2 text-xs font-medium text-muted-foreground">{t.status}</th>
                            <th className="text-right px-3 py-2 text-xs font-medium text-muted-foreground">{t.monthly}</th>
                            <th className="text-right px-3 py-2 text-xs font-medium text-muted-foreground">{t.quarterly}</th>
                            <th className="text-right px-4 py-2 text-xs font-medium text-muted-foreground">{t.annual}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.modules.map((mod, i) => (
                            <tr key={i} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                              <td className="px-4 py-2.5 text-foreground">{mod.name[language]}</td>
                              <td className="px-3 py-2.5 text-center">
                                <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full border ${statusColor(mod.status)}`}>
                                  {mod.status}
                                </span>
                              </td>
                              <td className="px-3 py-2.5 text-right font-medium text-foreground">{mod.monthly}</td>
                              <td className="px-3 py-2.5 text-right text-muted-foreground">{mod.quarterly}</td>
                              <td className="px-4 py-2.5 text-right text-muted-foreground">{mod.annual}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr className="bg-primary/5 font-bold">
                            <td className="px-4 py-2.5 text-foreground" colSpan={2}>{t.subtotal} — {group.subtotalName[language]}</td>
                            <td className="px-3 py-2.5 text-right text-primary">{group.subtotalMonthly}</td>
                            <td className="px-3 py-2.5 text-right text-foreground">{group.subtotalQuarterly}</td>
                            <td className="px-4 py-2.5 text-right text-foreground">{group.subtotalAnnual}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* Totals */}
          <Card className="mt-4 overflow-hidden border-primary/20">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-border bg-muted/30">
                    <td className="px-4 py-3 font-semibold text-foreground">{t.totalAlaCarte}</td>
                    <td className="px-3 py-3 text-right font-bold text-foreground">$25,800</td>
                    <td className="px-3 py-3 text-right text-muted-foreground">$77,400</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">$309,600</td>
                  </tr>
                  <tr className="border-b border-border bg-primary/5">
                    <td className="px-4 py-3 font-bold text-primary">{t.totalAllIn}</td>
                    <td className="px-3 py-3 text-right font-bold text-primary">$14,999</td>
                    <td className="px-3 py-3 text-right text-primary">$44,997</td>
                    <td className="px-4 py-3 text-right text-primary">$179,988</td>
                  </tr>
                  <tr className="bg-emerald-500/10">
                    <td className="px-4 py-3 font-bold text-emerald-600 dark:text-emerald-400">{t.totalSavings}</td>
                    <td className="px-3 py-3 text-right font-bold text-emerald-600 dark:text-emerald-400">−$18,301</td>
                    <td className="px-3 py-3 text-right text-emerald-600 dark:text-emerald-400">−$54,903</td>
                    <td className="px-4 py-3 text-right text-emerald-600 dark:text-emerald-400">−$219,612</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <p className="text-xs text-muted-foreground text-center mt-3">
            💡 {t.billing}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImplementationPlan;
