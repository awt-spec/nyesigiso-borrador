import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Layers, ArrowRight, Target, Calendar, DollarSign } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const phases = [
  {
    id: 0,
    name: { es: "FASE 0 — Base Vigente", fr: "PHASE 0 — Base Active", en: "PHASE 0 — Current Base" },
    subtitle: { es: "Propuesta Base SAF UPV 7.0", fr: "Proposition de Base SAF UPV 7.0", en: "Base Proposal SAF UPV 7.0" },
    timing: { es: "Activa desde la firma", fr: "Active depuis la signature", en: "Active since signing" },
    coverage: "~61%",
    investment: "$35,000 USD",
    modules: [
      { es: "Migración SAF 2000 V5.2.2 → SAF UPV 7.0 · 94 agencias", fr: "Migration SAF 2000 V5.2.2 → SAF UPV 7.0 · 94 agences", en: "Migration SAF 2000 V5.2.2 → SAF UPV 7.0 · 94 agencies" },
      { es: "Consolidación 87 BD independientes → 1 BD centralizada", fr: "Consolidation 87 BD indépendantes → 1 BD centralisée", en: "Consolidation of 87 independent DBs → 1 centralized DB" },
      { es: "Licencias ilimitadas — usuarios, agencias, módulos base", fr: "Licences illimitées — utilisateurs, agences, modules de base", en: "Unlimited licenses — users, agencies, base modules" },
      { es: "Soporte técnico + funcional ilimitado (remoto)", fr: "Support technique + fonctionnel illimité (à distance)", en: "Unlimited technical + functional support (remote)" },
      { es: "Actualizaciones regulatorias BCEAO sin costo", fr: "Mises à jour réglementaires BCEAO sans frais", en: "BCEAO regulatory updates at no cost" },
    ],
    active: true,
  },
  {
    id: 1,
    name: { es: "FASE 1 — Seguridad & Parametrización", fr: "PHASE 1 — Sécurité & Paramétrage", en: "PHASE 1 — Security & Parameterization" },
    subtitle: { es: "Cumplimiento BCEAO Art.6", fr: "Conformité BCEAO Art.6", en: "BCEAO Art.6 Compliance" },
    timing: { es: "+12 meses", fr: "+12 mois", en: "+12 months" },
    coverage: "~50%",
    investment: "$25,000 USD",
    modules: [
      { es: "Grupo G — Habilitations + Delegaciones + Inspección + Trazabilidad", fr: "Groupe G — Habilitations + Délégations + Inspection + Traçabilité", en: "Group G — Authorizations + Delegations + Inspection + Traceability" },
      { es: "Grupo H — Config. Productos + Creación de Nuevos Productos", fr: "Groupe H — Config. Produits + Création de Nouveaux Produits", en: "Group H — Product Config + New Product Creation" },
    ],
    note: { es: "Obligatorio BCEAO para instituciones Nivel 3", fr: "Obligatoire BCEAO pour institutions Niveau 3", en: "BCEAO mandatory for Level 3 institutions" },
  },
  {
    id: 2,
    name: { es: "FASE 2 — Riesgos, Jurídico y SMS", fr: "PHASE 2 — Risques, Juridique et SMS", en: "PHASE 2 — Risks, Legal & SMS" },
    subtitle: { es: "Gestión Operativa", fr: "Gestion Opérationnelle", en: "Operational Management" },
    timing: { es: "+18 meses", fr: "+18 mois", en: "+18 months" },
    coverage: "~63%",
    investment: "$30,000 USD",
    modules: [
      { es: "Grupo C — Garantías + Credit Scoring + Compromisos", fr: "Groupe C — Garanties + Credit Scoring + Engagements", en: "Group C — Guarantees + Credit Scoring + Commitments" },
      { es: "Grupo D — Contencioso + Sucesiones + Embargos/ATD + Reclamaciones", fr: "Groupe D — Contentieux + Successions + Saisies/ATD + Réclamations", en: "Group D — Litigation + Succession + Seizures/ATD + Claims" },
      { es: "SMS & Alertas Transaccionales (Orange Mali / Malitel)", fr: "SMS & Alertes Transactionnelles (Orange Mali / Malitel)", en: "SMS & Transactional Alerts (Orange Mali / Malitel)" },
    ],
    note: { es: "Scoring protege cartera de 17.9B FCFA", fr: "Scoring protège le portefeuille de 17.9B FCFA", en: "Scoring protects 17.9B FCFA portfolio" },
  },
  {
    id: 3,
    name: { es: "FASE 3 — Canales Digitales y CRM", fr: "PHASE 3 — Canaux Digitaux et CRM", en: "PHASE 3 — Digital Channels & CRM" },
    subtitle: { es: "Experiencia del Socio", fr: "Expérience du Membre", en: "Member Experience" },
    timing: { es: "+24 meses", fr: "+24 mois", en: "+24 months" },
    coverage: "~78%",
    investment: "$45,000 USD",
    modules: [
      { es: "Internet Banking — Portal web, consultas, transferencias", fr: "Internet Banking — Portail web, consultations, transferts", en: "Internet Banking — Web portal, queries, transfers" },
      { es: "Mobile Banking — App iOS/Android + PWA, biometría", fr: "Mobile Banking — App iOS/Android + PWA, biométrie", en: "Mobile Banking — iOS/Android App + PWA, biometrics" },
      { es: "Grupo B — CRM: Prospectos + Carteras + Eventos + Actividad Asesor", fr: "Groupe B — CRM: Prospects + Portefeuilles + Événements + Activité Conseiller", en: "Group B — CRM: Prospects + Portfolios + Events + Advisor Activity" },
    ],
    note: { es: "324K socios sin autoservicio digital", fr: "324K membres sans libre-service numérique", en: "324K members without digital self-service" },
  },
  {
    id: 4,
    name: { es: "FASE 4 — ERP Financiero y RRHH", fr: "PHASE 4 — ERP Financier et RH", en: "PHASE 4 — Financial ERP & HR" },
    subtitle: { es: "Integración Interna", fr: "Intégration Interne", en: "Internal Integration" },
    timing: { es: "+24 meses", fr: "+24 mois", en: "+24 months" },
    coverage: "~88%",
    investment: "$20,000 USD",
    modules: [
      { es: "Grupo E — Activos Fijos + Conciliación + Compras + Proveedores + Proyectos", fr: "Groupe E — Immobilisations + Rapprochement + Achats + Fournisseurs + Projets", en: "Group E — Fixed Assets + Reconciliation + Purchasing + Vendors + Projects" },
      { es: "Grupo F — Nómina (DNSI/INPS) + Gestión Personal + Contratos", fr: "Groupe F — Paie (DNSI/INPS) + Gestion du Personnel + Contrats", en: "Group F — Payroll (DNSI/INPS) + Personnel Mgmt + Contracts" },
    ],
    note: { es: "Puede reemplazar SAGE PAIE y SYSCOFOP", fr: "Peut remplacer SAGE PAIE et SYSCOFOP", en: "Can replace SAGE PAIE and SYSCOFOP" },
  },
  {
    id: 5,
    name: { es: "FASE 5 — BI, DataWarehouse e Integración", fr: "PHASE 5 — BI, DataWarehouse et Intégration", en: "PHASE 5 — BI, DataWarehouse & Integration" },
    subtitle: { es: "Analítica e Interoperabilidad", fr: "Analytique et Interopérabilité", en: "Analytics & Interoperability" },
    timing: { es: "+30 meses", fr: "+30 mois", en: "+30 months" },
    coverage: "100%",
    modules: [
      { es: "Grupo I — DataWarehouse + Dashboards + Contabilidad Analítica + Presupuesto", fr: "Groupe I — DataWarehouse + Tableaux de Bord + Comptabilité Analytique + Budget", en: "Group I — DataWarehouse + Dashboards + Analytical Accounting + Budget" },
      { es: "Grupo J — Workflow/BPM + GED + APIs REST (Orange Money, Wave, BCEAO)", fr: "Groupe J — Workflow/BPM + GED + APIs REST (Orange Money, Wave, BCEAO)", en: "Group J — Workflow/BPM + DMS + REST APIs (Orange Money, Wave, BCEAO)" },
    ],
    note: { es: "APIs conectan Orange Money y Wave", fr: "APIs connectent Orange Money et Wave", en: "APIs connect Orange Money and Wave" },
  },
];

const labels = {
  es: {
    title: "Propuesta de Expansión",
    subtitle: "Plan Escalonado · 6 Fases · ~30 meses",
    coverage: "Cobertura",
    timing: "Plazo",
    modules: "Alcance",
    active: "ACTIVA",
    upcoming: "PLANIFICADA",
    phases: "Fases",
    horizon: "Horizonte Total",
    finalCoverage: "Cobertura Final",
  },
  fr: {
    title: "Proposition d'Expansion",
    subtitle: "Plan Échelonné · 6 Phases · ~30 mois",
    coverage: "Couverture",
    timing: "Délai",
    modules: "Portée",
    active: "ACTIVE",
    upcoming: "PLANIFIÉE",
    phases: "Phases",
    horizon: "Horizon Total",
    finalCoverage: "Couverture Finale",
  },
  en: {
    title: "Expansion Proposal",
    subtitle: "Phased Plan · 6 Phases · ~30 months",
    coverage: "Coverage",
    timing: "Timeline",
    modules: "Scope",
    active: "ACTIVE",
    upcoming: "PLANNED",
    phases: "Phases",
    horizon: "Total Horizon",
    finalCoverage: "Final Coverage",
  },
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

        {/* Summary Stats */}
        <div className={`grid grid-cols-3 gap-4 mb-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <Card className="bg-card border-primary/20">
            <CardContent className="p-5 text-center">
              <Layers className="w-7 h-7 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t.phases}</p>
              <p className="text-2xl font-bold text-foreground">6</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-primary/20">
            <CardContent className="p-5 text-center">
              <Calendar className="w-7 h-7 text-amber-500 mx-auto mb-2" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t.horizon}</p>
              <p className="text-2xl font-bold text-foreground">~30 {language === "es" ? "meses" : language === "fr" ? "mois" : "months"}</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-primary/20">
            <CardContent className="p-5 text-center">
              <Target className="w-7 h-7 text-emerald-500 mx-auto mb-2" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t.finalCoverage}</p>
              <p className="text-2xl font-bold text-foreground">100%</p>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden sm:block" />

          <div className="space-y-5">
            {phases.map((phase, idx) => (
              <div
                key={phase.id}
                className={`relative transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                style={{ transitionDelay: `${200 + idx * 80}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-3 md:left-4 w-4 h-4 rounded-full border-2 hidden sm:flex items-center justify-center z-10 ${
                  phase.active 
                    ? "bg-emerald-500 border-emerald-500" 
                    : "bg-background border-primary"
                }`}>
                  {phase.active && <CheckCircle2 className="w-3 h-3 text-white" />}
                </div>

                {/* Card */}
                <Card className={`sm:ml-12 md:ml-14 overflow-hidden ${
                  phase.active 
                    ? "border-emerald-500/30 bg-emerald-500/5" 
                    : "border-border hover:border-primary/30"
                } transition-colors`}>
                  <CardHeader className="pb-2 pt-4 px-5">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant={phase.active ? "default" : "secondary"} className={phase.active ? "bg-emerald-500 text-xs" : "text-xs"}>
                            {phase.active ? t.active : t.upcoming}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {phase.timing[language]}
                          </span>
                        </div>
                        <CardTitle className="text-base font-bold text-foreground">
                          {phase.name[language]}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{phase.subtitle[language]}</p>
                      </div>
                      <div className="text-right">
                        <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                          {phase.coverage}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 px-5 pb-4">
                    {/* Modules */}
                    <div className="bg-muted/30 rounded-lg p-3 mt-2">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{t.modules}</p>
                      <ul className="space-y-1">
                        {phase.modules.map((mod, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                            <span>{mod[language]}</span>
                          </li>
                        ))}
                      </ul>
                      {phase.note && (
                        <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 bg-amber-500/10 rounded px-2 py-1 border border-amber-500/20">
                          💡 {phase.note[language]}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationPlan;
