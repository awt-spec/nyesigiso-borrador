import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Layers, DollarSign, TrendingDown, ChevronRight, Shield, AlertTriangle, Scale, Globe, Users, Building, UserCheck, BarChart3, Workflow, Zap, Calendar, ChevronDown, ChevronUp, Eye, Package, Server, Database, FileCheck, Headphones, BarChart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Lang = "es" | "fr" | "en";

interface Module {
  name: Record<Lang, string>;
  status: string;
  monthly: string;
  monthlyNum: number;
  quarterly: string;
  annual: string;
  setupFee: string;
  setupFeeNum: number;
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
    id: "C", label: "C", icon: AlertTriangle,
    subtotalName: { es: "Riesgos & Scoring", fr: "Risques & Scoring", en: "Risks & Scoring" },
    modules: [
      { name: { es: "Garantías", fr: "Garanties", en: "Guarantees" }, status: "NO CUBIERTO", monthly: "$800", monthlyNum: 800, quarterly: "$2,400", annual: "$9,600", setupFee: "$2,400", setupFeeNum: 2400 },
      { name: { es: "Calificación / Scoring", fr: "Qualification / Scoring", en: "Qualification / Scoring" }, status: "NO CUBIERTO", monthly: "$1,050", monthlyNum: 1050, quarterly: "$3,150", annual: "$12,600", setupFee: "$3,150", setupFeeNum: 3150 },
      { name: { es: "Compromisos (upgrade PARCIAL → Completo)", fr: "Engagements (upgrade PARTIEL → Complet)", en: "Commitments (upgrade PARTIAL → Full)" }, status: "UPGRADE", monthly: "$300", monthlyNum: 300, quarterly: "$900", annual: "$3,600", setupFee: "$900", setupFeeNum: 900 },
    ],
    subtotalMonthly: "$2,150", subtotalQuarterly: "$6,450", subtotalAnnual: "$25,800",
  },
  {
    id: "D", label: "D", icon: Scale,
    subtotalName: { es: "Jurídico & Contencioso", fr: "Juridique & Contentieux", en: "Legal & Litigation" },
    modules: [
      { name: { es: "Contencioso", fr: "Contentieux", en: "Litigation" }, status: "NO CUBIERTO", monthly: "$500", monthlyNum: 500, quarterly: "$1,500", annual: "$6,000", setupFee: "$1,500", setupFeeNum: 1500 },
      { name: { es: "Sucesiones", fr: "Successions", en: "Succession" }, status: "NO CUBIERTO", monthly: "$300", monthlyNum: 300, quarterly: "$900", annual: "$3,600", setupFee: "$900", setupFeeNum: 900 },
      { name: { es: "Embargos / ATD", fr: "Saisies / ATD", en: "Seizures / ATD" }, status: "NO CUBIERTO", monthly: "$400", monthlyNum: 400, quarterly: "$1,200", annual: "$4,800", setupFee: "$1,200", setupFeeNum: 1200 },
      { name: { es: "Reclamaciones", fr: "Réclamations", en: "Claims" }, status: "NO CUBIERTO", monthly: "$300", monthlyNum: 300, quarterly: "$900", annual: "$3,600", setupFee: "$900", setupFeeNum: 900 },
    ],
    subtotalMonthly: "$1,500", subtotalQuarterly: "$4,500", subtotalAnnual: "$18,000",
  },
  {
    id: "A", label: "A", icon: Globe,
    subtotalName: { es: "Canales Digitales", fr: "Canaux Digitaux", en: "Digital Channels" },
    modules: [
      { name: { es: "Internet Banking", fr: "Internet Banking", en: "Internet Banking" }, status: "NO CUBIERTO", monthly: "$2,100", monthlyNum: 2100, quarterly: "$6,300", annual: "$25,200", setupFee: "$6,300", setupFeeNum: 6300 },
      { name: { es: "Mobile Banking (iOS/Android + PWA)", fr: "Mobile Banking (iOS/Android + PWA)", en: "Mobile Banking (iOS/Android + PWA)" }, status: "NO CUBIERTO", monthly: "$2,100", monthlyNum: 2100, quarterly: "$6,300", annual: "$25,200", setupFee: "$6,300", setupFeeNum: 6300 },
      { name: { es: "SMS & Alertas Transaccionales", fr: "SMS & Alertes Transactionnelles", en: "SMS & Transactional Alerts" }, status: "NO CUBIERTO", monthly: "$900", monthlyNum: 900, quarterly: "$2,700", annual: "$10,800", setupFee: "$2,700", setupFeeNum: 2700 },
    ],
    subtotalMonthly: "$5,100", subtotalQuarterly: "$15,300", subtotalAnnual: "$61,200",
  },
  {
    id: "B", label: "B", icon: Users,
    subtotalName: { es: "CRM & Marketing", fr: "CRM & Marketing", en: "CRM & Marketing" },
    modules: [
      { name: { es: "Archivo de Prospectos", fr: "Archive de Prospects", en: "Prospect Archive" }, status: "NO CUBIERTO", monthly: "$400", monthlyNum: 400, quarterly: "$1,200", annual: "$4,800", setupFee: "$1,200", setupFeeNum: 1200 },
      { name: { es: "Carteras Comerciales", fr: "Portefeuilles Commerciaux", en: "Commercial Portfolios" }, status: "NO CUBIERTO", monthly: "$700", monthlyNum: 700, quarterly: "$2,100", annual: "$8,400", setupFee: "$2,100", setupFeeNum: 2100 },
      { name: { es: "Gestión de Eventos", fr: "Gestion des Événements", en: "Event Management" }, status: "NO CUBIERTO", monthly: "$250", monthlyNum: 250, quarterly: "$750", annual: "$3,000", setupFee: "$750", setupFeeNum: 750 },
      { name: { es: "Seguimiento de Actividad del Asesor", fr: "Suivi d'Activité du Conseiller", en: "Advisor Activity Tracking" }, status: "NO CUBIERTO", monthly: "$250", monthlyNum: 250, quarterly: "$750", annual: "$3,000", setupFee: "$750", setupFeeNum: 750 },
    ],
    subtotalMonthly: "$1,600", subtotalQuarterly: "$4,800", subtotalAnnual: "$19,200",
  },
  {
    id: "E", label: "E", icon: Building,
    subtotalName: { es: "ERP Financiero", fr: "ERP Financier", en: "Financial ERP" },
    modules: [
      { name: { es: "Activos Fijos", fr: "Immobilisations", en: "Fixed Assets" }, status: "NO CUBIERTO", monthly: "$600", monthlyNum: 600, quarterly: "$1,800", annual: "$7,200", setupFee: "$1,800", setupFeeNum: 1800 },
      { name: { es: "Conciliación", fr: "Rapprochement / Lettrage", en: "Reconciliation / Lettrage" }, status: "NO CUBIERTO", monthly: "$500", monthlyNum: 500, quarterly: "$1,500", annual: "$6,000", setupFee: "$1,500", setupFeeNum: 1500 },
      { name: { es: "Compras / Inventarios", fr: "Achats / Inventaires", en: "Purchasing / Inventory" }, status: "NO CUBIERTO", monthly: "$800", monthlyNum: 800, quarterly: "$2,400", annual: "$9,600", setupFee: "$2,400", setupFeeNum: 2400 },
      { name: { es: "Proveedores", fr: "Fournisseurs", en: "Vendors" }, status: "NO CUBIERTO", monthly: "$400", monthlyNum: 400, quarterly: "$1,200", annual: "$4,800", setupFee: "$1,200", setupFeeNum: 1200 },
      { name: { es: "Obras y Proyectos", fr: "Chantiers et Projets", en: "Projects & Construction" }, status: "NO CUBIERTO", monthly: "$300", monthlyNum: 300, quarterly: "$900", annual: "$3,600", setupFee: "$900", setupFeeNum: 900 },
      { name: { es: "Archivo", fr: "Archivage", en: "Archiving" }, status: "NO CUBIERTO", monthly: "$500", monthlyNum: 500, quarterly: "$1,500", annual: "$6,000", setupFee: "$1,500", setupFeeNum: 1500 },
    ],
    subtotalMonthly: "$3,100", subtotalQuarterly: "$9,300", subtotalAnnual: "$37,200",
  },
  {
    id: "F", label: "F", icon: UserCheck,
    subtotalName: { es: "RRHH & Nómina", fr: "RH & Paie", en: "HR & Payroll" },
    modules: [
      { name: { es: "Nómina / Paie (DNSI, INPS)", fr: "Paie (DNSI, INPS)", en: "Payroll (DNSI, INPS)" }, status: "NO CUBIERTO", monthly: "$1,500", monthlyNum: 1500, quarterly: "$4,500", annual: "$18,000", setupFee: "$4,500", setupFeeNum: 4500 },
      { name: { es: "Gestión del Personal", fr: "Gestion du Personnel", en: "Personnel Management" }, status: "NO CUBIERTO", monthly: "$700", monthlyNum: 700, quarterly: "$2,100", annual: "$8,400", setupFee: "$2,100", setupFeeNum: 2100 },
    ],
    subtotalMonthly: "$2,200", subtotalQuarterly: "$6,600", subtotalAnnual: "$26,400",
  },
  {
    id: "I", label: "I", icon: BarChart3,
    subtotalName: { es: "BI & DataWarehouse", fr: "BI & DataWarehouse", en: "BI & DataWarehouse" },
    modules: [
      { name: { es: "Tableros Avanzados (upgrade PARCIAL → Avanzado)", fr: "Tableaux Avancés (upgrade PARTIEL → Avancé)", en: "Advanced Dashboards (upgrade PARTIAL → Advanced)" }, status: "UPGRADE", monthly: "$400", monthlyNum: 400, quarterly: "$1,200", annual: "$4,800", setupFee: "$1,200", setupFeeNum: 1200 },
      { name: { es: "Contabilidad Analítica", fr: "Comptabilité Analytique", en: "Analytical Accounting" }, status: "NO CUBIERTO", monthly: "$600", monthlyNum: 600, quarterly: "$1,800", annual: "$7,200", setupFee: "$1,800", setupFeeNum: 1800 },
      { name: { es: "Presupuesto", fr: "Budget", en: "Budget" }, status: "NO CUBIERTO", monthly: "$400", monthlyNum: 400, quarterly: "$1,200", annual: "$4,800", setupFee: "$1,200", setupFeeNum: 1200 },
      { name: { es: "DataWarehouse", fr: "DataWarehouse", en: "DataWarehouse" }, status: "NO CUBIERTO", monthly: "$1,400", monthlyNum: 1400, quarterly: "$4,200", annual: "$16,800", setupFee: "$4,200", setupFeeNum: 4200 },
      { name: { es: "Herramientas BI / Soporte a la Decisión", fr: "Outils BI / Aide à la décision", en: "BI Tools / Decision Support" }, status: "NO CUBIERTO", monthly: "$1,050", monthlyNum: 1050, quarterly: "$3,150", annual: "$12,600", setupFee: "$3,150", setupFeeNum: 3150 },
    ],
    subtotalMonthly: "$3,850", subtotalQuarterly: "$11,550", subtotalAnnual: "$46,200",
  },
  {
    id: "J", label: "J", icon: Workflow,
    subtotalName: { es: "Integración", fr: "Intégration", en: "Integration" },
    modules: [
      { name: { es: "Workflow / Gestión de Flujos", fr: "Workflow / Gestion des Flux", en: "Workflow / Flow Management" }, status: "NO CUBIERTO", monthly: "$800", monthlyNum: 800, quarterly: "$2,400", annual: "$9,600", setupFee: "$2,400", setupFeeNum: 2400 },
      { name: { es: "GED — Gestión Electrónica de Documentos", fr: "GED — Gestion Électronique de Documents", en: "DMS — Electronic Document Management" }, status: "NO CUBIERTO", monthly: "$600", monthlyNum: 600, quarterly: "$1,800", annual: "$7,200", setupFee: "$1,800", setupFeeNum: 1800 },
    ],
    subtotalMonthly: "$1,400", subtotalQuarterly: "$4,200", subtotalAnnual: "$16,800",
  },
];

const labels: Record<Lang, Record<string, string>> = {
  es: {
    title: "Propuesta de Transformación",
    subtitle: "PROPUESTA INICIAL · PROPUESTA INTEGRAL",
    expandAll: "Expandir todo",
    collapseAll: "Colapsar todo",
    detailTitle: "Detalle de Módulos Adicionales",
    detailSubtitle: "30 módulos agrupados · precios individuales del Cadre de Réponse",
    group: "Grupo",
    module: "Módulo",
    status: "Estado",
    monthly: "Susc./Mes",
    quarterly: "Susc./Trim",
    annual: "Susc./Año",
    subtotal: "Subtotal",
    perMonth: "/mes",
    perQuarter: "/trim",
    billing: "Suscripción mensual · Facturación trimestral anticipada · Precios en USD",
    proposalTitle: "Propuesta Integral",
    proposalSubtitle: "Todo lo de la Propuesta Inicial + 30 módulos adicionales",
    proposalDesc: "La transformación digital completa de Nyèsigiso. Incluye toda la base vigente más los 30 módulos que llevan la operación al siguiente nivel.",
    proposalPrice: "USD $16,999",
    proposalNote: "Propuesta Inicial (USD $7,500) + Módulos Adicionales (USD $9,499)",
    phase1: "PROPUESTA INICIAL",
    phase1desc: "SAF UPV 7.0 · 87 BD · 94 Agencias",
    phase1note: "Ya activo desde la firma",
    setupFee: "Setup Fee (único)",
    active: "ACTIVA",
    recommended: "RECOMENDADO",
    comparisonTitle: "Comparación de Escenarios",
    phase1Label: "PROPUESTA INICIAL",
    integralLabel: "PROPUESTA INTEGRAL",
    coverage: "Cobertura",
    modules: "Módulos",
    perMonthLabel: "Susc./Mes",
    perQuarterLabel: "Susc./Trim",
    perYearLabel: "Susc./Año",
    viewDetail: "Ver Detalle",
    hideDetail: "Ocultar Detalle",
    cronogramaTitle: "Cronograma de Implementación",
    cronogramaSubtitle: "Plan de despliegue por fases",
    cronogramaPhase1: "PROPUESTA INICIAL — Migración y Consolidación",
    cronogramaPhase2: "PROPUESTA INTEGRAL — Módulos Adicionales",
    cronogramaDate: "Fecha",
    cronogramaActivity: "Actividad",
    cronogramaAcceptance: "Aceptación del proyecto",
    cronograma30days: "30 días después del inicio",
    cronogramaMonth: "mes",
    cronogramaMonths: "meses",
    cronogramaSupportContract: "Contrato de asistencia primer año",
    cronograma12later: "12 meses después",
    cronogramaInstallation: "Costos de instalación",
    cronogramaLicenses: "Licencias de utilización — Licencia ilimitada Nyèsigiso",
    cronogramaReporting: "Reporting operacional y reglamentario. Informes BCEAO y operaciones de Nyèsigiso",
    cronogramaMigration: "Migración de la base de datos centralizadora hacia SAF UPV 7.0",
    cronogramaConsol2: "Consolidación de 2 primeras bases de datos",
    cronogramaConsol5: "Consolidación de 5 bases de datos",
    cronogramaConsol10: "Consolidación de 10 bases de datos",
    cronogramaCertification: "Proceso final de certificación de la base de datos para su puesta en producción",
    cronogramaSupport: "Acceso al soporte técnico — Envío de solicitudes, correcciones, soportes diversos",
    cronogramaP2Setup: "Configuración y despliegue de los 30 módulos adicionales",
    cronogramaP2Training: "Capacitación de usuarios por grupo funcional",
    cronogramaP2Parallel: "Operación en paralelo y validación",
    cronogramaP2GoLive: "Puesta en producción progresiva por módulo",
    cronogramaP2Optimize: "Optimización y ajustes post-producción",
    cronogramaP2Ongoing: "Soporte continuo y mejora continua",
    cronogramaP2Flexible: "Cronograma definido según las prioridades del cliente",
    cronogramaP2Priority: "Priorización por el Cliente",
    cronogramaP2PriorityDesc: "Nyèsigiso define el orden de implementación de los 30 módulos según sus prioridades operativas y estratégicas.",
    cronogramaP2Scope: "8 Grupos Funcionales",
    cronogramaP2ScopeDesc: "Riesgos, Jurídico, Canales Digitales, CRM, ERP, RRHH, BI e Integración — despliegue por bloques o individual.",
    cronogramaP2Support: "Acompañamiento SYSDE",
    cronogramaP2SupportDesc: "Capacitación, operación en paralelo, validación y puesta en producción progresiva para cada módulo implementado.",
    cronogramaP2NoteTitle: "Calendario abierto y flexible",
    cronogramaP2NoteDesc: "La Propuesta Integral no tiene un cronograma rígido. Los módulos se implementan según las necesidades y prioridades que Nyèsigiso determine, con acompañamiento completo de SYSDE en cada etapa.",
    phase1DetailTitle: "¿Qué incluye la Propuesta Inicial?",
    phase1Item1: "Migración completa a SAF UPV 7.0",
    phase1Item1Desc: "Actualización integral del Core Banking al último release de SYSDE, con todas las funcionalidades actuales preservadas.",
    phase1Item2: "Consolidación de 87 Bases de Datos → 1",
    phase1Item2Desc: "Unificación progresiva de las 87 bases de datos en una sola base centralizada, agencia por agencia durante 12 meses.",
    phase1Item3: "94 Agencias conectadas",
    phase1Item3Desc: "Todas las sucursales operando sobre la plataforma unificada con acceso en tiempo real.",
    phase1Item4: "Licencias ilimitadas",
    phase1Item4Desc: "Sin restricción de usuarios concurrentes ni de puestos de trabajo. Crecimiento sin costos adicionales de licencia.",
    phase1Item5: "Reporting BCEAO",
    phase1Item5Desc: "Informes regulatorios y operacionales listos para cumplir con los requisitos del Banco Central.",
    phase1Item6: "Soporte técnico incluido",
    phase1Item6Desc: "Acceso completo al equipo de soporte SYSDE para solicitudes, correcciones y asistencia continua.",
    setupFeeLabel: "Setup Fee",
  },
  fr: {
    title: "Proposition de Transformation",
    subtitle: "PROPOSITION INITIALE · PROPOSITION INTÉGRALE",
    expandAll: "Tout développer",
    collapseAll: "Tout réduire",
    detailTitle: "Détail des Modules Additionnels",
    detailSubtitle: "30 modules groupés · prix individuels du Cadre de Réponse",
    group: "Groupe",
    module: "Module",
    status: "Statut",
    monthly: "Abon./Mois",
    quarterly: "Abon./Trim",
    annual: "Abon./An",
    subtotal: "Sous-total",
    perMonth: "/mois",
    perQuarter: "/trim",
    billing: "Abonnement mensuel · Facturation trimestrielle anticipée · Prix en USD",
    proposalTitle: "Proposition Intégrale",
    proposalSubtitle: "Tout de la Proposition Initiale + 30 modules supplémentaires",
    proposalDesc: "La transformation digitale complète de Nyèsigiso. Inclut toute la base active plus les 30 modules qui amènent l'opération au niveau supérieur.",
    proposalPrice: "USD $16,999",
    proposalNote: "Proposition Initiale (USD $7,500) + Modules Additionnels (USD $9,499)",
    phase1: "PROPOSITION INITIALE",
    phase1desc: "SAF UPV 7.0 · 87 BD · 94 Agences",
    phase1note: "Active depuis la signature",
    setupFee: "Setup Fee (unique)",
    active: "ACTIVE",
    recommended: "RECOMMANDÉ",
    comparisonTitle: "Comparaison des Scénarios",
    phase1Label: "PROPOSITION INITIALE",
    integralLabel: "PROPOSITION INTÉGRALE",
    coverage: "Couverture",
    modules: "Modules",
    perMonthLabel: "Abon./Mois",
    perQuarterLabel: "Abon./Trim",
    perYearLabel: "Abon./An",
    viewDetail: "Voir Détail",
    hideDetail: "Masquer Détail",
    cronogramaTitle: "Chronogramme d'Implémentation",
    cronogramaSubtitle: "Plan de déploiement par phases",
    cronogramaPhase1: "PROPOSITION INITIALE — Migration et Consolidation",
    cronogramaPhase2: "PROPOSITION INTÉGRALE — Modules Additionnels",
    cronogramaDate: "Date",
    cronogramaActivity: "Activité",
    cronogramaAcceptance: "Acceptation du projet",
    cronograma30days: "30 jours après le début",
    cronogramaMonth: "mois",
    cronogramaMonths: "mois",
    cronogramaSupportContract: "Contrat d'assistance première année",
    cronograma12later: "12 mois plus tard",
    cronogramaInstallation: "Frais d'installation",
    cronogramaLicenses: "Licences d'utilisation — Licence illimitée",
    cronogramaReporting: "Reporting opérationnel et réglementaire. Rapports de la BCEAO et opérations de Nyèsigiso",
    cronogramaMigration: "Migration de la base de données centralisatrice vers SAF UPV 7.0",
    cronogramaConsol2: "Consolidation de 2 premières bases de données",
    cronogramaConsol5: "Consolidation de 5 bases de données",
    cronogramaConsol10: "Consolidation de 10 bases de données",
    cronogramaCertification: "Processus final de certification de la base de données pour sa mise en production",
    cronogramaSupport: "Accès au support technique — Envoi de requêtes, corrections, supports divers",
    cronogramaP2Setup: "Configuration et déploiement des 30 modules supplémentaires",
    cronogramaP2Training: "Formation des utilisateurs par groupe fonctionnel",
    cronogramaP2Parallel: "Fonctionnement en parallèle et validation",
    cronogramaP2GoLive: "Mise en production progressive par module",
    cronogramaP2Optimize: "Optimisation et ajustements post-production",
    cronogramaP2Ongoing: "Support continu et amélioration continue",
    cronogramaP2Flexible: "Chronogramme défini selon les priorités du client",
    cronogramaP2Priority: "Priorisation par le Client",
    cronogramaP2PriorityDesc: "Nyèsigiso définit l'ordre de déploiement des 30 modules selon ses priorités opérationnelles et stratégiques.",
    cronogramaP2Scope: "8 Groupes Fonctionnels",
    cronogramaP2ScopeDesc: "Risques, Juridique, Canaux Digitaux, CRM, ERP, RH, BI et Intégration — déploiement par blocs ou individuel.",
    cronogramaP2Support: "Accompagnement SYSDE",
    cronogramaP2SupportDesc: "Formation, fonctionnement en parallèle, validation et mise en production progressive pour chaque module déployé.",
    cronogramaP2NoteTitle: "Calendrier ouvert et flexible",
    cronogramaP2NoteDesc: "La Proposition Intégrale n'a pas de chronogramme rigide. Les modules sont déployés selon les besoins et priorités que Nyèsigiso détermine, avec accompagnement complet de SYSDE à chaque étape.",
    phase1DetailTitle: "Que comprend la Proposition Initiale ?",
    phase1Item1: "Migration complète vers SAF UPV 7.0",
    phase1Item1Desc: "Mise à niveau intégrale du Core Banking vers la dernière version SYSDE, toutes fonctionnalités actuelles préservées.",
    phase1Item2: "Consolidation de 87 Bases de Données → 1",
    phase1Item2Desc: "Unification progressive des 87 bases de données en une seule base centralisée, agence par agence sur 12 mois.",
    phase1Item3: "94 Agences connectées",
    phase1Item3Desc: "Toutes les succursales opérant sur la plateforme unifiée avec accès en temps réel.",
    phase1Item4: "Licences illimitées",
    phase1Item4Desc: "Aucune restriction d'utilisateurs concurrents ni de postes. Croissance sans coûts additionnels de licence.",
    phase1Item5: "Reporting BCEAO",
    phase1Item5Desc: "Rapports réglementaires et opérationnels prêts pour répondre aux exigences de la Banque Centrale.",
    phase1Item6: "Support technique inclus",
    phase1Item6Desc: "Accès complet à l'équipe de support SYSDE pour requêtes, corrections et assistance continue.",
    setupFeeLabel: "Setup Fee",
  },
  en: {
    title: "Transformation Proposal",
    subtitle: "INITIAL PROPOSAL · INTEGRAL PROPOSAL",
    expandAll: "Expand all",
    collapseAll: "Collapse all",
    detailTitle: "Additional Module Detail",
    detailSubtitle: "30 grouped modules · individual pricing from Cadre de Réponse",
    group: "Group",
    module: "Module",
    status: "Status",
    monthly: "Subs./Mo",
    quarterly: "Subs./Qtr",
    annual: "Subs./Yr",
    subtotal: "Subtotal",
    perMonth: "/mo",
    perQuarter: "/qtr",
    billing: "Monthly subscription · Quarterly prepaid billing · Prices in USD",
    proposalTitle: "Integral Proposal",
    proposalSubtitle: "Everything in the Initial Proposal + 30 additional modules",
    proposalDesc: "The complete digital transformation of Nyèsigiso. Includes the entire active base plus the 30 modules that take operations to the next level.",
    proposalPrice: "USD $16,999",
    proposalNote: "Initial Proposal (USD $7,500) + Additional Modules (USD $9,499)",
    phase1: "INITIAL PROPOSAL",
    phase1desc: "SAF UPV 7.0 · 87 DBs · 94 Agencies",
    phase1note: "Active since signing",
    setupFee: "Setup Fee (one-time)",
    active: "ACTIVE",
    recommended: "RECOMMENDED",
    comparisonTitle: "Scenario Comparison",
    phase1Label: "INITIAL PROPOSAL",
    integralLabel: "INTEGRAL PROPOSAL",
    coverage: "Coverage",
    modules: "Modules",
    perMonthLabel: "Subs./Mo",
    perQuarterLabel: "Subs./Qtr",
    perYearLabel: "Subs./Yr",
    viewDetail: "View Detail",
    hideDetail: "Hide Detail",
    cronogramaTitle: "Implementation Timeline",
    cronogramaSubtitle: "Phase-based deployment plan",
    cronogramaPhase1: "INITIAL PROPOSAL — Migration & Consolidation",
    cronogramaPhase2: "INTEGRAL PROPOSAL — Additional Modules",
    cronogramaDate: "Date",
    cronogramaActivity: "Activity",
    cronogramaAcceptance: "Project acceptance",
    cronograma30days: "30 days after start",
    cronogramaMonth: "month",
    cronogramaMonths: "months",
    cronogramaSupportContract: "First-year support contract",
    cronograma12later: "12 months later",
    cronogramaInstallation: "Installation fees",
    cronogramaLicenses: "Usage licenses — Unlimited license",
    cronogramaReporting: "Operational and regulatory reporting. BCEAO reports and Nyèsigiso operations",
    cronogramaMigration: "Migration of the centralizing database to SAF UPV 7.0",
    cronogramaConsol2: "Consolidation of first 2 databases",
    cronogramaConsol5: "Consolidation of 5 databases",
    cronogramaConsol10: "Consolidation of 10 databases",
    cronogramaCertification: "Final database certification process for production deployment",
    cronogramaSupport: "Access to technical support — Request submission, corrections, various support",
    cronogramaP2Setup: "Configuration and deployment of all 30 additional modules",
    cronogramaP2Training: "User training by functional group",
    cronogramaP2Parallel: "Parallel operation and validation",
    cronogramaP2GoLive: "Progressive production rollout per module",
    cronogramaP2Optimize: "Post-production optimization and adjustments",
    cronogramaP2Ongoing: "Ongoing support and continuous improvement",
    cronogramaP2Flexible: "Timeline defined by client priorities",
    cronogramaP2Priority: "Client Prioritization",
    cronogramaP2PriorityDesc: "Nyèsigiso defines the deployment order of the 30 modules based on their operational and strategic priorities.",
    cronogramaP2Scope: "8 Functional Groups",
    cronogramaP2ScopeDesc: "Risks, Legal, Digital Channels, CRM, ERP, HR, BI and Integration — deployment by blocks or individually.",
    cronogramaP2Support: "SYSDE Accompaniment",
    cronogramaP2SupportDesc: "Training, parallel operation, validation, and progressive rollout for each deployed module.",
    cronogramaP2NoteTitle: "Open & Flexible Calendar",
    cronogramaP2NoteDesc: "The Integral Proposal has no rigid timeline. Modules are deployed based on needs and priorities determined by Nyèsigiso, with full SYSDE accompaniment at every stage.",
    phase1DetailTitle: "What does the Initial Proposal include?",
    phase1Item1: "Full migration to SAF UPV 7.0",
    phase1Item1Desc: "Complete Core Banking upgrade to SYSDE's latest release, preserving all current functionality.",
    phase1Item2: "Consolidation of 87 Databases → 1",
    phase1Item2Desc: "Progressive unification of 87 databases into a single centralized database, agency by agency over 12 months.",
    phase1Item3: "94 Agencies connected",
    phase1Item3Desc: "All branches operating on the unified platform with real-time access.",
    phase1Item4: "Unlimited licenses",
    phase1Item4Desc: "No concurrent user or workstation restrictions. Growth without additional licensing costs.",
    phase1Item5: "BCEAO Reporting",
    phase1Item5Desc: "Regulatory and operational reports ready to meet Central Bank requirements.",
    phase1Item6: "Technical support included",
    phase1Item6Desc: "Full access to SYSDE's support team for requests, fixes, and ongoing assistance.",
    setupFeeLabel: "Setup Fee",
  },
};

const statusColor = (status: string) => {
  if (status.includes("EXCL")) return "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30";
  if (status === "UPGRADE") return "bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30";
  return "bg-muted text-muted-foreground border-border";
};

const usd = (v: string) => {
  if (!v || v === "bundled" || v === "—") return v;
  return v.startsWith("$") ? `USD ${v}` : v.startsWith("−$") ? `−USD ${v.slice(1)}` : v;
};

const ImplementationPlan = () => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"comparison" | "allin">("comparison");
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

  const phase1Items = [
    { icon: Database, title: t.phase1Item1, desc: t.phase1Item1Desc },
    { icon: Server, title: t.phase1Item2, desc: t.phase1Item2Desc },
    { icon: Globe, title: t.phase1Item3, desc: t.phase1Item3Desc },
    { icon: Users, title: t.phase1Item4, desc: t.phase1Item4Desc },
    { icon: FileCheck, title: t.phase1Item5, desc: t.phase1Item5Desc },
    { icon: Headphones, title: t.phase1Item6, desc: t.phase1Item6Desc },
  ];

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


        {/* ═══════════════════════════════════════════════ */}
        {/* PROPUESTAS — Side by Side */}
        {/* ═══════════════════════════════════════════════ */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* LEFT — Propuesta Inicial */}
          <Card className="border-emerald-500/30 bg-emerald-500/5 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
            <CardContent className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-emerald-500 text-white text-xs">{t.active}</Badge>
                <div>
                  <p className="font-bold text-lg text-foreground">{t.phase1}</p>
                  <p className="text-xs text-muted-foreground">{t.phase1desc}</p>
                </div>
              </div>

              {/* Pricing row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="text-center p-3 rounded-lg bg-background/60 border border-border/50">
                  <p className="text-[10px] text-muted-foreground font-medium mb-1">{t.setupFee}</p>
                  <p className="text-lg font-bold text-foreground">USD $35,000</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-background/60 border border-border/50">
                  <p className="text-[10px] text-muted-foreground font-medium mb-1">{t.perMonthLabel}</p>
                  <p className="text-lg font-bold text-foreground">USD $7,500</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-background/60 border border-border/50">
                  <p className="text-[10px] text-muted-foreground font-medium mb-1">{t.perQuarterLabel}</p>
                  <p className="text-lg font-bold text-foreground">USD $22,500</p>
                </div>
              </div>

              <Badge variant="secondary" className="text-xs w-fit mb-4">~69% {t.coverage} · 67 {t.modules}</Badge>

              {/* Items */}
              <p className="text-sm font-bold text-foreground mb-3">{t.phase1DetailTitle}</p>
              <div className="grid grid-cols-1 gap-2 flex-1">
                {phase1Items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-background/60 border border-border/50 hover:border-emerald-500/30 transition-colors">
                      <div className="w-7 h-7 rounded-md bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground leading-tight">{item.title}</p>
                        <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 pt-3 mt-4 border-t border-emerald-500/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">{t.phase1note}</p>
              </div>
            </CardContent>
          </Card>

          {/* RIGHT — Propuesta Integral */}
          <Card className="border-primary/40 bg-primary/5 relative overflow-hidden ring-2 ring-primary/20 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <div className="absolute top-3 right-3">
              <Badge className="bg-primary text-primary-foreground text-xs">{t.recommended}</Badge>
            </div>
            <CardContent className="p-6 flex flex-col flex-1">
              <div className="mb-4">
                <p className="font-bold text-lg text-foreground">{t.proposalTitle}</p>
                <p className="text-xs text-muted-foreground">{t.proposalSubtitle}</p>
              </div>

              {/* Pricing row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="text-center p-3 rounded-lg bg-background/60 border border-primary/20">
                  <p className="text-[10px] text-muted-foreground font-medium mb-1">{t.setupFee}</p>
                  <p className="text-lg font-bold text-foreground">USD $35,000</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-[10px] text-muted-foreground font-medium mb-1">{t.perMonthLabel}</p>
                  <p className="text-xl font-bold text-primary">USD $16,999</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-background/60 border border-primary/20">
                  <p className="text-[10px] text-muted-foreground font-medium mb-1">{t.perQuarterLabel}</p>
                  <p className="text-lg font-bold text-primary">USD $50,997</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">{t.phase1Label}: $7,500</span>
                <span>+</span>
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">{language === "es" ? "Adicionales" : language === "fr" ? "Additionnels" : "Additional"}: $9,499</span>
              </div>

              <Badge className="bg-primary text-primary-foreground text-xs w-fit mb-4">100% {t.coverage} · 97 {t.modules}</Badge>

              <p className="text-sm text-muted-foreground mb-4">{t.proposalDesc}</p>

              {/* Included groups */}
              <p className="text-xs font-bold text-foreground mb-2">
                {language === "es" ? "Incluye todo de la Propuesta Inicial +" : language === "fr" ? "Inclut tout de la Proposition Initiale +" : "Includes everything in Initial Proposal +"}
              </p>
              <div className="grid grid-cols-1 gap-1.5 flex-1">
                {moduleGroups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <div key={group.id} className="flex items-center gap-2.5 p-2 rounded-lg bg-background/60 border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-foreground truncate">{group.subtotalName[language]}</p>
                        <p className="text-[10px] text-muted-foreground">{group.modules.length} {t.modules}</p>
                      </div>
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 pt-3 mt-4 border-t border-primary/10">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  {language === "es" ? "Sin setup fee adicional" : language === "fr" ? "Pas de setup fee additionnel" : "No additional setup fee"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

          {/* ═══════════════════════════════════════════════ */}
          {/* INTERACTIVE TABS: Comparison / ALL IN Detail */}
          {/* ═══════════════════════════════════════════════ */}
          <div className="mb-10">
            {/* Tab switcher */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <button
                onClick={() => setActiveTab("comparison")}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === "comparison"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <BarChart className="w-4 h-4 inline mr-1.5" />
                {t.comparisonTitle}
              </button>
              <button
                onClick={() => setActiveTab("allin")}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === "allin"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Package className="w-4 h-4 inline mr-1.5" />
                {t.proposalTitle}
              </button>
            </div>

            {/* TAB: Comparison */}
            {activeTab === "comparison" && (
              <div className="animate-in fade-in duration-300">
                <Card className="overflow-hidden border-primary/20 mb-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary/5 border-b border-border">
                          <th className="text-left px-4 py-3 font-semibold text-foreground"></th>
                          <th className="text-center px-4 py-3">
                            <div className="font-semibold text-foreground">{t.phase1Label}</div>
                            <div className="text-[10px] text-muted-foreground font-normal">67 {t.modules}</div>
                          </th>
                          <th className="text-center px-4 py-3 relative">
                            <div className="font-semibold text-primary">{t.integralLabel}</div>
                            <div className="text-[10px] text-primary/60 font-normal">67 + 30 {t.modules}</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                          <td className="px-4 py-3 font-medium text-foreground">{t.setupFee}</td>
                          <td className="px-4 py-3 text-center text-foreground font-semibold">USD $35,000</td>
                          <td className="px-4 py-3 text-center text-primary font-semibold">USD $35,000</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                          <td className="px-4 py-3 font-medium text-foreground">{t.perMonthLabel}</td>
                          <td className="px-4 py-3 text-center text-foreground">USD $7,500</td>
                          <td className="px-4 py-3 text-center font-bold text-primary">USD $16,999</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                          <td className="px-4 py-3 font-medium text-foreground">{t.perQuarterLabel}</td>
                          <td className="px-4 py-3 text-center text-foreground">USD $22,500</td>
                          <td className="px-4 py-3 text-center font-bold text-primary">USD $50,997</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                          <td className="px-4 py-3 font-medium text-foreground">{t.perYearLabel}</td>
                          <td className="px-4 py-3 text-center text-foreground">USD $90,000</td>
                          <td className="px-4 py-3 text-center font-bold text-primary">USD $203,988</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                          <td className="px-4 py-3 font-medium text-foreground">{t.coverage}</td>
                          <td className="px-4 py-3 text-center"><Badge variant="secondary">~69%</Badge></td>
                          <td className="px-4 py-3 text-center"><Badge className="bg-primary text-primary-foreground">100%</Badge></td>
                        </tr>
                        <tr className="hover:bg-muted/20 transition-colors">
                          <td className="px-4 py-3 font-medium text-foreground">{t.modules}</td>
                          <td className="px-4 py-3 text-center text-foreground">67</td>
                          <td className="px-4 py-3 text-center font-bold text-primary">97</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            )}

            {/* TAB: ALL IN / Integral Detail */}
            {activeTab === "allin" && (
              <div className="animate-in fade-in duration-300">
                <Card className="border-primary/20 overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-primary to-primary/50" />
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-primary text-primary-foreground">{t.recommended}</Badge>
                          <h4 className="font-bold text-lg text-foreground">{t.proposalTitle}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">{t.proposalDesc}</p>
                      </div>
                      <div className="flex items-center gap-4 flex-shrink-0">
                        <div className="text-right">
                          <span className="text-3xl font-bold text-primary">USD $16,999</span>
                          <span className="text-muted-foreground text-sm">{t.perMonth}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
                        <p className="text-xs text-muted-foreground uppercase font-medium mb-1">{t.phase1Label}</p>
                        <p className="text-xl font-bold text-foreground">USD $7,500<span className="text-sm text-muted-foreground font-normal">{t.perMonth}</span></p>
                        <p className="text-xs text-muted-foreground mt-1">67 {t.modules} · ~69% {t.coverage}</p>
                      </div>
                      <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                        <p className="text-xs text-muted-foreground uppercase font-medium mb-1">{language === "es" ? "MÓDULOS ADICIONALES" : language === "fr" ? "MODULES ADDITIONNELS" : "ADDITIONAL MODULES"}</p>
                        <p className="text-xl font-bold text-primary">USD $9,499<span className="text-sm text-muted-foreground font-normal">{t.perMonth}</span></p>
                        <p className="text-xs text-muted-foreground mt-1">30 {t.modules} · +31% {t.coverage}</p>
                      </div>
                      <div className="rounded-lg border border-border bg-muted/30 p-4">
                        <p className="text-xs text-muted-foreground uppercase font-medium mb-1">{t.setupFee}</p>
                        <p className="text-xl font-bold text-foreground">USD $35,000</p>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1 font-medium">
                          {language === "es" ? "Sin setup fee adicional" : language === "fr" ? "Pas de setup fee additionnel" : "No additional setup fee"}
                        </p>
                      </div>
                    </div>

                    {/* All 8 groups with their modules */}
                    <div>
                      <p className="text-sm font-bold text-foreground mb-4">
                        {language === "es" ? "97 Módulos Incluidos — Detalle por Grupo Funcional" : language === "fr" ? "97 Modules Inclus — Détail par Groupe Fonctionnel" : "97 Modules Included — Detail by Functional Group"}
                      </p>

                      {/* Phase 1 included note */}
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 mb-4">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{t.phase1} — 67 {t.modules}</p>
                          <p className="text-xs text-muted-foreground">
                            {language === "es" ? "Migración SAF UPV 7.0 · Consolidación 87 BD → 1 · Licencias ilimitadas · Soporte + BCEAO" : language === "fr" ? "Migration SAF UPV 7.0 · Consolidation 87 BD → 1 · Licences illimitées · Support + BCEAO" : "SAF UPV 7.0 migration · 87 DB consolidation → 1 · Unlimited licenses · Support + BCEAO"}
                          </p>
                        </div>
                        <Badge className="bg-emerald-500 text-white text-xs ml-auto flex-shrink-0">{t.active}</Badge>
                      </div>

                      {/* Phase 2 groups */}
                      <div className="space-y-3">
                        {moduleGroups.map((group) => {
                          const Icon = group.icon;
                          return (
                            <div key={group.id} className="rounded-lg border border-border bg-card overflow-hidden">
                              <div className="flex items-center gap-3 px-4 py-3 bg-muted/30">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <Icon className="w-4 h-4 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-semibold text-foreground">{group.subtotalName[language]}</p>
                                  <p className="text-[10px] text-muted-foreground">{group.modules.length} {t.modules}</p>
                                </div>
                                <Badge variant="outline" className="text-[10px] font-mono">{t.group} {group.label}</Badge>
                                <span className="text-xs font-bold text-primary whitespace-nowrap">
                                  {language === "es" ? "Incluido" : language === "fr" ? "Inclus" : "Included"} ✓
                                </span>
                              </div>
                              <div className="px-4 py-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                {group.modules.map((mod, j) => (
                                  <div key={j} className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-muted/20 transition-colors">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                    <span className="text-xs text-foreground truncate">{mod.name[language]}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3 mb-8">
            💡 {t.billing}
          </p>

          {/* ═══════════════════════════════════════════════ */}
          {/* MODULE DETAIL */}
          {/* ═══════════════════════════════════════════════ */}
        </div>

        {/* Cronograma */}
        <div className={`mt-16 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-3">
              <Calendar className="w-4 h-4" />
              {t.cronogramaSubtitle}
            </div>
            <h3 className="text-2xl font-bold text-foreground">{t.cronogramaTitle}</h3>
          </div>

          <Accordion type="multiple" className="space-y-4">
            {/* Phase 1 — Interactive Timeline */}
            <AccordionItem value="phase1" className="border rounded-lg overflow-hidden border-primary/20">
              <AccordionTrigger className="px-5 py-4 hover:no-underline bg-primary/5 border-b border-border">
                <div className="flex items-center gap-3 flex-1 mr-4">
                  <Badge className="bg-primary text-primary-foreground">1</Badge>
                  <div className="text-left">
                    <p className="text-lg font-bold text-foreground">{t.cronogramaPhase1}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">12 {t.cronogramaMonths} · 87 BD · Setup Fee USD $35,000</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6">
                <Phase1Timeline language={language} t={t} />
              </AccordionContent>
            </AccordionItem>

            {/* Phase 2 — Interactive Groups */}
            <AccordionItem value="phase2" className="border rounded-lg overflow-hidden border-primary/20">
              <AccordionTrigger className="px-5 py-4 hover:no-underline bg-primary/5 border-b border-border">
                <div className="flex items-center gap-3 flex-1 mr-4">
                  <Badge className="bg-primary text-primary-foreground">2</Badge>
                  <div className="text-left">
                    <p className="text-lg font-bold text-foreground">{t.cronogramaPhase2}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">30 {t.modules} · {t.cronogramaP2Flexible}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6">
                <Phase2Timeline language={language} t={t} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════ */
/* Phase 1 — Interactive horizontal timeline          */
/* ═══════════════════════════════════════════════════ */
const Phase1Timeline = ({ language, t }: { language: Lang; t: Record<string, string> }) => {
  const [activeStep, setActiveStep] = useState(0);

  const phases = [
    {
      label: language === "es" ? "Inicio" : language === "fr" ? "Début" : "Start",
      icon: "🚀",
      color: "from-primary to-primary/70",
      title: t.cronogramaAcceptance,
      items: [t.cronogramaInstallation, t.cronogramaLicenses, t.cronogramaReporting],
    },
    {
      label: "30d",
      icon: "🔄",
      color: "from-primary to-primary/70",
      title: t.cronogramaMigration,
      items: [t.cronogramaMigration],
    },
    {
      label: `M2-3`,
      icon: "📦",
      color: "from-blue-500 to-blue-400",
      title: language === "es" ? "Consolidación Inicial" : language === "fr" ? "Consolidation Initiale" : "Initial Consolidation",
      items: [t.cronogramaConsol2, t.cronogramaConsol5],
    },
    {
      label: "M4-11",
      icon: "⚡",
      color: "from-amber-500 to-amber-400",
      title: language === "es" ? "Consolidación Masiva" : language === "fr" ? "Consolidation Massive" : "Mass Consolidation",
      items: [
        t.cronogramaConsol10,
        language === "es" ? "8 meses de consolidación progresiva — 10 BD por mes" : language === "fr" ? "8 mois de consolidation progressive — 10 BD par mois" : "8 months of progressive consolidation — 10 DBs per month",
      ],
    },
    {
      label: "M12",
      icon: "✅",
      color: "from-emerald-500 to-emerald-400",
      title: language === "es" ? "Certificación Final" : language === "fr" ? "Certification Finale" : "Final Certification",
      items: [t.cronogramaCertification],
    },
    {
      label: "∞",
      icon: "🛟",
      color: "from-muted-foreground/60 to-muted-foreground/40",
      title: language === "es" ? "Soporte Continuo" : language === "fr" ? "Support Continu" : "Ongoing Support",
      items: [t.cronogramaSupportContract, t.cronogramaSupport],
    },
  ];

  return (
    <div>
      {/* Step selector — horizontal row */}
      <div className="flex items-center gap-0 mb-6 relative">
        {/* Progress bar */}
        <div className="absolute top-5 left-0 right-0 h-1 bg-muted rounded-full" />
        <div
          className="absolute top-5 left-0 h-1 bg-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(activeStep / (phases.length - 1)) * 100}%` }}
        />

        {phases.map((phase, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className="flex-1 flex flex-col items-center z-10 group"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                i === activeStep
                  ? "bg-primary border-primary scale-110 shadow-lg shadow-primary/25"
                  : i < activeStep
                  ? "bg-primary/20 border-primary/50"
                  : "bg-card border-border group-hover:border-primary/40 group-hover:scale-105"
              }`}
            >
              <span className={`text-sm ${i === activeStep ? "scale-110" : ""} transition-transform`}>{phase.icon}</span>
            </div>
            <span
              className={`text-[11px] font-bold mt-1.5 transition-colors ${
                i === activeStep ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {phase.label}
            </span>
          </button>
        ))}
      </div>

      {/* Active step detail */}
      <div className="relative overflow-hidden rounded-xl border border-border bg-card">
        {/* Gradient accent top */}
        <div className={`h-1.5 bg-gradient-to-r ${phases[activeStep].color}`} />

        <div className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{phases[activeStep].icon}</span>
            <div>
              <p className="text-lg font-bold text-foreground">{phases[activeStep].title}</p>
              <Badge variant="outline" className="text-xs mt-0.5">{phases[activeStep].label}</Badge>
            </div>
          </div>

          <div className="space-y-2">
            {phases[activeStep].items.map((item, j) => (
              <div
                key={j}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50 animate-fade-in"
                style={{ animationDelay: `${j * 80}ms`, animationFillMode: "both" }}
              >
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-between mt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className="text-muted-foreground"
        >
          <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
          {activeStep > 0 ? phases[activeStep - 1].label : ""}
        </Button>
        <span className="text-xs text-muted-foreground">{activeStep + 1} / {phases.length}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setActiveStep(Math.min(phases.length - 1, activeStep + 1))}
          disabled={activeStep === phases.length - 1}
          className="text-muted-foreground"
        >
          {activeStep < phases.length - 1 ? phases[activeStep + 1].label : ""}
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════ */
/* Phase 2 — Interactive card-based layout            */
/* ═══════════════════════════════════════════════════ */
const Phase2Timeline = ({ language, t }: { language: Lang; t: Record<string, string> }) => {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  return (
    <div>
      {/* Priority banner */}
      <div className="flex items-center gap-3 mb-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Zap className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{t.cronogramaP2Priority}</p>
          <p className="text-xs text-muted-foreground">{t.cronogramaP2PriorityDesc}</p>
        </div>
      </div>

      {/* Two-column: group list + detail */}
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">{t.cronogramaP2Scope}</p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
        {/* Left: clickable group list */}
        <div className="lg:col-span-2 space-y-2">
          {moduleGroups.map((group) => {
            const Icon = group.icon;
            const isActive = activeGroup === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setActiveGroup(isActive ? null : group.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 ${
                  isActive
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border bg-card hover:border-primary/30 hover:bg-muted/30"
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                  isActive ? "bg-primary/20" : "bg-primary/10"
                }`}>
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold truncate transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                    {group.subtotalName[language]}
                  </p>
                  <p className="text-[10px] text-muted-foreground">{group.modules.length} {t.modules} · USD {group.subtotalMonthly}{t.perMonth}</p>
                </div>
                <Badge variant="outline" className={`text-[9px] font-mono flex-shrink-0 transition-colors ${isActive ? "border-primary text-primary" : ""}`}>
                  {group.label}
                </Badge>
                <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${isActive ? "rotate-90 text-primary" : ""}`} />
              </button>
            );
          })}
        </div>

        {/* Right: detail panel */}
        <div className="lg:col-span-3">
          {activeGroup ? (
            (() => {
              const group = moduleGroups.find(g => g.id === activeGroup)!;
              const Icon = group.icon;
              return (
                <div className="rounded-xl border border-primary/20 bg-card overflow-hidden animate-fade-in h-full">
                  <div className="h-1.5 bg-gradient-to-r from-primary to-primary/50" />
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{group.subtotalName[language]}</p>
                        <p className="text-xs text-muted-foreground">{group.modules.length} {t.modules} · USD {group.subtotalMonthly}{t.perMonth}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {group.modules.map((mod, j) => (
                        <div
                          key={j}
                          className="flex items-center justify-between gap-3 p-3 rounded-lg bg-muted/30 border border-border/50 animate-fade-in"
                          style={{ animationDelay: `${j * 60}ms`, animationFillMode: "both" }}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-sm text-foreground truncate">{mod.name[language]}</span>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${statusColor(mod.status)}`}>
                              {mod.status}
                            </span>
                            <span className="text-xs font-bold text-primary whitespace-nowrap">{usd(mod.monthly)}{t.perMonth}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (
            <div className="rounded-xl border-2 border-dashed border-border bg-muted/10 flex items-center justify-center h-full min-h-[200px]">
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-3">
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {language === "es" ? "Seleccione un grupo para ver sus módulos" : language === "fr" ? "Sélectionnez un groupe pour voir ses modules" : "Select a group to view its modules"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom cards */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-primary" />
            <p className="text-sm font-bold text-foreground">{t.cronogramaP2Support}</p>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{t.cronogramaP2SupportDesc}</p>
        </div>
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-primary" />
            <p className="text-sm font-bold text-foreground">{t.cronogramaP2NoteTitle}</p>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{t.cronogramaP2NoteDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default ImplementationPlan;
