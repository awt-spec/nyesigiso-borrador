import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Layers, DollarSign, TrendingDown, ChevronRight, Shield, AlertTriangle, Scale, Globe, Users, Building, UserCheck, BarChart3, Workflow, Zap, Calendar, ChevronDown, ChevronUp, Eye } from "lucide-react";
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
    id: "G", label: "G", icon: Shield,
    subtotalName: { es: "Seguridad & Control", fr: "Sécurité & Contrôle", en: "Security & Control" },
    modules: [
      { name: { es: "Habilitations — Autorizaciones y Permisos", fr: "Habilitations — Autorisations et Permissions", en: "Authorizations & Permissions" }, status: "EXCL. Art.6", monthly: "$1,400", quarterly: "$4,200", annual: "$16,800" },
      { name: { es: "Delegaciones", fr: "Délégations", en: "Delegations" }, status: "EXCL. Art.6", monthly: "$700", quarterly: "$2,100", annual: "$8,400" },
      { name: { es: "Inspección", fr: "Inspection", en: "Inspection" }, status: "NO CUBIERTO", monthly: "$300", quarterly: "$900", annual: "$3,600" },
      { name: { es: "Control y Trazabilidad", fr: "Contrôle et Traçabilité", en: "Control & Traceability" }, status: "EXCL. Art.6", monthly: "$1,000", quarterly: "$3,000", annual: "$12,000" },
    ],
    subtotalMonthly: "$3,400", subtotalQuarterly: "$10,200", subtotalAnnual: "$40,800",
  },
  {
    id: "C", label: "C", icon: AlertTriangle,
    subtotalName: { es: "Riesgos & Scoring", fr: "Risques & Scoring", en: "Risks & Scoring" },
    modules: [
      { name: { es: "Garantías", fr: "Garanties", en: "Guarantees" }, status: "NO CUBIERTO", monthly: "$800", quarterly: "$2,400", annual: "$9,600" },
      { name: { es: "Calificación / Scoring", fr: "Qualification / Scoring", en: "Qualification / Scoring" }, status: "NO CUBIERTO", monthly: "$1,050", quarterly: "$3,150", annual: "$12,600" },
      { name: { es: "Compromisos (upgrade PARCIAL → Completo)", fr: "Engagements (upgrade PARTIEL → Complet)", en: "Commitments (upgrade PARTIAL → Full)" }, status: "UPGRADE", monthly: "$300", quarterly: "$900", annual: "$3,600" },
    ],
    subtotalMonthly: "$2,150", subtotalQuarterly: "$6,450", subtotalAnnual: "$25,800",
  },
  {
    id: "D", label: "D", icon: Scale,
    subtotalName: { es: "Jurídico & Contencioso", fr: "Juridique & Contentieux", en: "Legal & Litigation" },
    modules: [
      { name: { es: "Contencioso", fr: "Contentieux", en: "Litigation" }, status: "NO CUBIERTO", monthly: "$500", quarterly: "$1,500", annual: "$6,000" },
      { name: { es: "Sucesiones", fr: "Successions", en: "Succession" }, status: "NO CUBIERTO", monthly: "$300", quarterly: "$900", annual: "$3,600" },
      { name: { es: "Embargos / ATD", fr: "Saisies / ATD", en: "Seizures / ATD" }, status: "NO CUBIERTO", monthly: "$400", quarterly: "$1,200", annual: "$4,800" },
      { name: { es: "Reclamaciones", fr: "Réclamations", en: "Claims" }, status: "NO CUBIERTO", monthly: "$300", quarterly: "$900", annual: "$3,600" },
    ],
    subtotalMonthly: "$1,500", subtotalQuarterly: "$4,500", subtotalAnnual: "$18,000",
  },
  {
    id: "A", label: "A", icon: Globe,
    subtotalName: { es: "Canales Digitales", fr: "Canaux Digitaux", en: "Digital Channels" },
    modules: [
      { name: { es: "Internet Banking", fr: "Internet Banking", en: "Internet Banking" }, status: "NO CUBIERTO", monthly: "$2,000", quarterly: "$6,000", annual: "$24,000" },
      { name: { es: "Mobile Banking (iOS/Android + PWA)", fr: "Mobile Banking (iOS/Android + PWA)", en: "Mobile Banking (iOS/Android + PWA)" }, status: "NO CUBIERTO", monthly: "$2,000", quarterly: "$6,000", annual: "$24,000" },
      { name: { es: "SMS & Alertas Transaccionales", fr: "SMS & Alertes Transactionnelles", en: "SMS & Transactional Alerts" }, status: "NO CUBIERTO", monthly: "$900", quarterly: "$2,700", annual: "$10,800" },
    ],
    subtotalMonthly: "$4,900", subtotalQuarterly: "$14,700", subtotalAnnual: "$58,800",
  },
  {
    id: "B", label: "B", icon: Users,
    subtotalName: { es: "CRM & Marketing", fr: "CRM & Marketing", en: "CRM & Marketing" },
    modules: [
      { name: { es: "Archivo de Prospectos", fr: "Archive de Prospects", en: "Prospect Archive" }, status: "NO CUBIERTO", monthly: "$400", quarterly: "$1,200", annual: "$4,800" },
      { name: { es: "Carteras Comerciales", fr: "Portefeuilles Commerciaux", en: "Commercial Portfolios" }, status: "NO CUBIERTO", monthly: "$700", quarterly: "$2,100", annual: "$8,400" },
      { name: { es: "Gestión de Eventos", fr: "Gestion des Événements", en: "Event Management" }, status: "NO CUBIERTO", monthly: "$250", quarterly: "$750", annual: "$3,000" },
      { name: { es: "Seguimiento de Actividad del Asesor", fr: "Suivi d'Activité du Conseiller", en: "Advisor Activity Tracking" }, status: "NO CUBIERTO", monthly: "$250", quarterly: "$750", annual: "$3,000" },
    ],
    subtotalMonthly: "$1,600", subtotalQuarterly: "$4,800", subtotalAnnual: "$19,200",
  },
  {
    id: "E", label: "E", icon: Building,
    subtotalName: { es: "ERP Financiero", fr: "ERP Financier", en: "Financial ERP" },
    modules: [
      { name: { es: "Activos Fijos", fr: "Immobilisations", en: "Fixed Assets" }, status: "NO CUBIERTO", monthly: "$600", quarterly: "$1,800", annual: "$7,200" },
      { name: { es: "Conciliación", fr: "Rapprochement / Lettrage", en: "Reconciliation / Lettrage" }, status: "NO CUBIERTO", monthly: "$500", quarterly: "$1,500", annual: "$6,000" },
      { name: { es: "Compras / Inventarios", fr: "Achats / Inventaires", en: "Purchasing / Inventory" }, status: "NO CUBIERTO", monthly: "$800", quarterly: "$2,400", annual: "$9,600" },
      { name: { es: "Proveedores", fr: "Fournisseurs", en: "Vendors" }, status: "NO CUBIERTO", monthly: "$400", quarterly: "$1,200", annual: "$4,800" },
      { name: { es: "Obras y Proyectos", fr: "Chantiers et Projets", en: "Projects & Construction" }, status: "NO CUBIERTO", monthly: "$300", quarterly: "$900", annual: "$3,600" },
      { name: { es: "Archivo", fr: "Archivage", en: "Archiving" }, status: "NO CUBIERTO", monthly: "$500", quarterly: "$1,500", annual: "$6,000" },
    ],
    subtotalMonthly: "$3,100", subtotalQuarterly: "$9,300", subtotalAnnual: "$37,200",
  },
  {
    id: "F", label: "F", icon: UserCheck,
    subtotalName: { es: "RRHH & Nómina", fr: "RH & Paie", en: "HR & Payroll" },
    modules: [
      { name: { es: "Nómina / Paie (DNSI, INPS)", fr: "Paie (DNSI, INPS)", en: "Payroll (DNSI, INPS)" }, status: "NO CUBIERTO", monthly: "$1,500", quarterly: "$4,500", annual: "$18,000" },
      { name: { es: "Gestión del Personal", fr: "Gestion du Personnel", en: "Personnel Management" }, status: "NO CUBIERTO", monthly: "$700", quarterly: "$2,100", annual: "$8,400" },
    ],
    subtotalMonthly: "$2,200", subtotalQuarterly: "$6,600", subtotalAnnual: "$26,400",
  },
  {
    id: "I", label: "I", icon: BarChart3,
    subtotalName: { es: "BI & DataWarehouse", fr: "BI & DataWarehouse", en: "BI & DataWarehouse" },
    modules: [
      { name: { es: "Tableros Avanzados (upgrade PARCIAL → Avanzado)", fr: "Tableaux Avancés (upgrade PARTIEL → Avancé)", en: "Advanced Dashboards (upgrade PARTIAL → Advanced)" }, status: "UPGRADE", monthly: "$400", quarterly: "$1,200", annual: "$4,800" },
      { name: { es: "Contabilidad Analítica", fr: "Comptabilité Analytique", en: "Analytical Accounting" }, status: "NO CUBIERTO", monthly: "$600", quarterly: "$1,800", annual: "$7,200" },
      { name: { es: "Presupuesto", fr: "Budget", en: "Budget" }, status: "NO CUBIERTO", monthly: "$400", quarterly: "$1,200", annual: "$4,800" },
      { name: { es: "DataWarehouse", fr: "DataWarehouse", en: "DataWarehouse" }, status: "NO CUBIERTO", monthly: "$1,200", quarterly: "$3,600", annual: "$14,400" },
      { name: { es: "Herramientas BI / Soporte a la Decisión", fr: "Outils BI / Aide à la décision", en: "BI Tools / Decision Support" }, status: "NO CUBIERTO", monthly: "$1,050", quarterly: "$3,150", annual: "$12,600" },
    ],
    subtotalMonthly: "$3,650", subtotalQuarterly: "$10,950", subtotalAnnual: "$43,800",
  },
  {
    id: "J", label: "J", icon: Workflow,
    subtotalName: { es: "Integración & APIs", fr: "Intégration & APIs", en: "Integration & APIs" },
    modules: [
      { name: { es: "Workflow / Gestión de Flujos", fr: "Workflow / Gestion des Flux", en: "Workflow / Flow Management" }, status: "NO CUBIERTO", monthly: "$800", quarterly: "$2,400", annual: "$9,600" },
      { name: { es: "GED — Gestión Electrónica de Documentos", fr: "GED — Gestion Électronique de Documents", en: "DMS — Electronic Document Management" }, status: "NO CUBIERTO", monthly: "$600", quarterly: "$1,800", annual: "$7,200" },
    ],
    subtotalMonthly: "$1,400", subtotalQuarterly: "$4,200", subtotalAnnual: "$16,800",
  },
];

const labels: Record<Lang, Record<string, string>> = {
  es: {
    title: "Propuesta de Expansión",
    subtitle: "FASE 1 — Base · FASE 2 — ALL IN",
    detailTitle: "Detalle de Módulos Adicionales",
    detailSubtitle: "34 módulos agrupados · precios individuales del Cadre de Réponse",
    group: "Grupo",
    module: "Módulo",
    status: "Estado",
    monthly: "Susc./Mes",
    quarterly: "Susc./Trim",
    annual: "Susc./Año",
    subtotal: "Subtotal",
    totalAlaCarte: "TOTAL A LA CARTA",
    totalAllIn: "FASE 2 ALL IN (incluye FASE 1)",
    totalSavings: "AHORRO eligiendo ALL IN",
    perMonth: "/mes",
    billing: "Suscripción mensual · Facturación trimestral anticipada · Precios en USD",
    chooseTitle: "Escoja su Modalidad",
    chooseSubtitle: "Dos opciones para implementar los 34 módulos adicionales",
    option1Title: "Opción A — A la Carta",
    option1Subtitle: "Implemente módulos individuales cuando quiera",
    option1Desc: "Elija e implemente solo los módulos que necesita, uno por uno, al precio individual del Cadre de Réponse. Sin compromiso de paquete.",
    option1Price: "USD $21,600",
    option1Note: "Suma de todos los módulos por separado",
    option2Title: "Opción B — ALL IN",
    option2Subtitle: "Todos los 34 módulos en un solo bundle",
    option2Desc: "Implemente todos los módulos de una vez con un descuento masivo. Incluye FASE 1 + FASE 2 por un precio único e imbatible.",
    option2Price: "USD $16,999",
    option2Note: "FASE 1 (USD $7,500) + FASE 2 (USD $9,499)",
    phase1: "FASE 1 — BASE VIGENTE",
    phase1desc: "SAF UPV 7.0 · 87 BD · 94 Agencias",
    phase1note: "Ya activo desde la firma",
    phase1includes: "Migración SAF UPV 7.0 completa · Consolidación 87 BD → 1 · Licencias ilimitadas · Soporte + BCEAO",
    setupFee: "Setup Fee (único)",
    active: "ACTIVA",
    recommended: "RECOMENDADO",
    savingsTitle: "Ahorro vs. A la Carta",
    savingsDesc: "eligiendo ALL IN",
    comparisonTitle: "Comparación de Escenarios",
    phase1Label: "FASE 1",
    alaCarte: "A la Carta",
    allIn: "ALL IN",
    coverage: "Cobertura",
    modules: "Módulos",
    perMonthLabel: "Susc./Mes",
    perQuarterLabel: "Susc./Trim",
    perYearLabel: "Susc./Año",
    viewDetail: "Ver Detalle",
    hideDetail: "Ocultar Detalle",
    cronogramaTitle: "Cronograma de Implementación",
    cronogramaSubtitle: "Plan de despliegue por fases",
    cronogramaPhase1: "FASE 1 — Migración y Consolidación",
    cronogramaPhase2: "FASE 2 — ALL IN / A la Carta",
    cronogramaDate: "Fecha",
    cronogramaActivity: "Actividad",
    cronogramaAcceptance: "Aceptación del proyecto",
    cronograma30days: "30 días después del inicio",
    cronogramaMonth: "mes",
    cronogramaMonths: "meses",
    cronogramaSupportContract: "Contrato de asistencia primer año",
    cronograma12later: "12 meses después",
    cronogramaInstallation: "Costos de instalación",
    cronogramaReporting: "Reporting operacional y reglamentario. Informes BCEAO y operaciones de Nyèsigiso",
    cronogramaMigration: "Migración de la base de datos centralizadora hacia SAF UPV 7.0",
    cronogramaConsol2: "Consolidación de 2 primeras bases de datos",
    cronogramaConsol5: "Consolidación de 5 bases de datos",
    cronogramaConsol10: "Consolidación de 10 bases de datos",
    cronogramaCertification: "Proceso final de certificación de la base de datos para su puesta en producción",
    cronogramaSupport: "Acceso al soporte técnico — Envío de solicitudes, correcciones, soportes diversos",
    cronogramaP2Setup: "Configuración y despliegue de los 34 módulos adicionales",
    cronogramaP2Training: "Capacitación de usuarios por grupo funcional",
    cronogramaP2Parallel: "Operación en paralelo y validación",
    cronogramaP2GoLive: "Puesta en producción progresiva por módulo",
    cronogramaP2Optimize: "Optimización y ajustes post-producción",
    cronogramaP2Ongoing: "Soporte continuo y mejora continua",
    cronogramaP2Flexible: "Cronograma definido según las prioridades del cliente",
    cronogramaP2Priority: "Priorización por el Cliente",
    cronogramaP2PriorityDesc: "Nyèsigiso define el orden de implementación de los 34 módulos según sus prioridades operativas y estratégicas.",
    cronogramaP2Scope: "9 Grupos Funcionales",
    cronogramaP2ScopeDesc: "Seguridad, Riesgos, Jurídico, Canales Digitales, CRM, ERP, RRHH, BI y APIs — despliegue por bloques o individual.",
    cronogramaP2Support: "Acompañamiento SYSDE",
    cronogramaP2SupportDesc: "Capacitación, operación en paralelo, validación y puesta en producción progresiva para cada módulo implementado.",
    cronogramaP2NoteTitle: "Calendario abierto y flexible",
    cronogramaP2NoteDesc: "La Fase 2 no tiene un cronograma rígido. Los módulos se implementan según las necesidades y prioridades que Nyèsigiso determine, con acompañamiento completo de SYSDE en cada etapa.",
  },
  fr: {
    title: "Proposition d'Expansion",
    subtitle: "PHASE 1 — Base · PHASE 2 — ALL IN",
    detailTitle: "Détail des Modules Additionnels",
    detailSubtitle: "34 modules groupés · prix individuels du Cadre de Réponse",
    group: "Groupe",
    module: "Module",
    status: "Statut",
    monthly: "Abon./Mois",
    quarterly: "Abon./Trim",
    annual: "Abon./An",
    subtotal: "Sous-total",
    totalAlaCarte: "TOTAL À LA CARTE",
    totalAllIn: "PHASE 2 ALL IN (inclut PHASE 1)",
    totalSavings: "ÉCONOMIE en choisissant ALL IN",
    perMonth: "/mois",
    billing: "Abonnement mensuel · Facturation trimestrielle anticipée · Prix en USD",
    chooseTitle: "Choisissez votre Modalité",
    chooseSubtitle: "Deux options pour déployer les 34 modules supplémentaires",
    option1Title: "Option A — À la Carte",
    option1Subtitle: "Déployez les modules individuels quand vous voulez",
    option1Desc: "Choisissez et déployez uniquement les modules dont vous avez besoin, un par un, au prix individuel du Cadre de Réponse. Sans engagement de package.",
    option1Price: "USD $21,600",
    option1Note: "Somme de tous les modules séparément",
    option2Title: "Option B — ALL IN",
    option2Subtitle: "Les 34 modules dans un seul bundle",
    option2Desc: "Déployez tous les modules d'un coup avec une remise massive. Inclut PHASE 1 + PHASE 2 pour un prix unique et imbattable.",
    option2Price: "USD $16,999",
    option2Note: "PHASE 1 (USD $7,500) + PHASE 2 (USD $9,499)",
    phase1: "PHASE 1 — BASE ACTIVE",
    phase1desc: "SAF UPV 7.0 · 87 BD · 94 Agences",
    phase1note: "Active depuis la signature",
    phase1includes: "Migration SAF UPV 7.0 complète · Consolidation 87 BD → 1 · Licences illimitées · Support + BCEAO",
    setupFee: "Setup Fee (unique)",
    active: "ACTIVE",
    recommended: "RECOMMANDÉ",
    savingsTitle: "Économie vs. À la Carte",
    savingsDesc: "en choisissant ALL IN",
    comparisonTitle: "Comparaison des Scénarios",
    phase1Label: "PHASE 1",
    alaCarte: "À la Carte",
    allIn: "ALL IN",
    coverage: "Couverture",
    modules: "Modules",
    perMonthLabel: "Abon./Mois",
    perQuarterLabel: "Abon./Trim",
    perYearLabel: "Abon./An",
    viewDetail: "Voir Détail",
    hideDetail: "Masquer Détail",
    cronogramaTitle: "Chronogramme d'Implémentation",
    cronogramaSubtitle: "Plan de déploiement par phases",
    cronogramaPhase1: "PHASE 1 — Migration et Consolidation",
    cronogramaPhase2: "PHASE 2 — ALL IN / À la Carte",
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
    cronogramaP2Setup: "Configuration et déploiement des 34 modules supplémentaires",
    cronogramaP2Training: "Formation des utilisateurs par groupe fonctionnel",
    cronogramaP2Parallel: "Fonctionnement en parallèle et validation",
    cronogramaP2GoLive: "Mise en production progressive par module",
    cronogramaP2Optimize: "Optimisation et ajustements post-production",
    cronogramaP2Ongoing: "Support continu et amélioration continue",
    cronogramaP2Flexible: "Chronogramme défini selon les priorités du client",
    cronogramaP2Priority: "Priorisation par le Client",
    cronogramaP2PriorityDesc: "Nyèsigiso définit l'ordre de déploiement des 34 modules selon ses priorités opérationnelles et stratégiques.",
    cronogramaP2Scope: "9 Groupes Fonctionnels",
    cronogramaP2ScopeDesc: "Sécurité, Risques, Juridique, Canaux Digitaux, CRM, ERP, RH, BI et APIs — déploiement par blocs ou individuel.",
    cronogramaP2Support: "Accompagnement SYSDE",
    cronogramaP2SupportDesc: "Formation, fonctionnement en parallèle, validation et mise en production progressive pour chaque module déployé.",
    cronogramaP2NoteTitle: "Calendrier ouvert et flexible",
    cronogramaP2NoteDesc: "La Phase 2 n'a pas de chronogramme rigide. Les modules sont déployés selon les besoins et priorités que Nyèsigiso détermine, avec accompagnement complet de SYSDE à chaque étape.",
  },
  en: {
    title: "Expansion Proposal",
    subtitle: "PHASE 1 — Base · PHASE 2 — ALL IN",
    detailTitle: "Additional Module Detail",
    detailSubtitle: "34 grouped modules · individual pricing from Cadre de Réponse",
    group: "Group",
    module: "Module",
    status: "Status",
    monthly: "Subs./Mo",
    quarterly: "Subs./Qtr",
    annual: "Subs./Yr",
    subtotal: "Subtotal",
    totalAlaCarte: "TOTAL À LA CARTE",
    totalAllIn: "PHASE 2 ALL IN (includes PHASE 1)",
    totalSavings: "SAVINGS by choosing ALL IN",
    perMonth: "/mo",
    billing: "Monthly subscription · Quarterly prepaid billing · Prices in USD",
    chooseTitle: "Choose your Option",
    chooseSubtitle: "Two ways to deploy the 34 additional modules",
    option1Title: "Option A — À la Carte",
    option1Subtitle: "Deploy individual modules when you want",
    option1Desc: "Choose and deploy only the modules you need, one by one, at individual Cadre de Réponse pricing. No package commitment.",
    option1Price: "USD $21,600",
    option1Note: "Sum of all modules separately",
    option2Title: "Option B — ALL IN",
    option2Subtitle: "All 34 modules in a single bundle",
    option2Desc: "Deploy all modules at once with a massive discount. Includes PHASE 1 + PHASE 2 for a single unbeatable price.",
    option2Price: "USD $16,999",
    option2Note: "PHASE 1 (USD $7,500) + PHASE 2 (USD $9,499)",
    phase1: "PHASE 1 — CURRENT BASE",
    phase1desc: "SAF UPV 7.0 · 87 DBs · 94 Agencies",
    phase1note: "Active since signing",
    phase1includes: "Full SAF UPV 7.0 migration · 87 DB consolidation → 1 · Unlimited licenses · Support + BCEAO",
    setupFee: "Setup Fee (one-time)",
    active: "ACTIVE",
    recommended: "RECOMMENDED",
    savingsTitle: "Savings vs. À la Carte",
    savingsDesc: "by choosing ALL IN",
    comparisonTitle: "Scenario Comparison",
    phase1Label: "PHASE 1",
    alaCarte: "À la Carte",
    allIn: "ALL IN",
    coverage: "Coverage",
    modules: "Modules",
    perMonthLabel: "Subs./Mo",
    perQuarterLabel: "Subs./Qtr",
    perYearLabel: "Subs./Yr",
    viewDetail: "View Detail",
    hideDetail: "Hide Detail",
    cronogramaTitle: "Implementation Timeline",
    cronogramaSubtitle: "Phase-based deployment plan",
    cronogramaPhase1: "PHASE 1 — Migration & Consolidation",
    cronogramaPhase2: "PHASE 2 — ALL IN / À la Carte",
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
    cronogramaP2Setup: "Configuration and deployment of all 34 additional modules",
    cronogramaP2Training: "User training by functional group",
    cronogramaP2Parallel: "Parallel operation and validation",
    cronogramaP2GoLive: "Progressive production rollout per module",
    cronogramaP2Optimize: "Post-production optimization and adjustments",
    cronogramaP2Ongoing: "Ongoing support and continuous improvement",
    cronogramaP2Flexible: "Timeline defined by client priorities",
    cronogramaP2Priority: "Client Prioritization",
    cronogramaP2PriorityDesc: "Nyèsigiso defines the deployment order of the 34 modules based on their operational and strategic priorities.",
    cronogramaP2Scope: "9 Functional Groups",
    cronogramaP2ScopeDesc: "Security, Risks, Legal, Digital Channels, CRM, ERP, HR, BI and APIs — deployment by blocks or individually.",
    cronogramaP2Support: "SYSDE Accompaniment",
    cronogramaP2SupportDesc: "Training, parallel operation, validation, and progressive rollout for each deployed module.",
    cronogramaP2NoteTitle: "Open & Flexible Calendar",
    cronogramaP2NoteDesc: "Phase 2 has no rigid timeline. Modules are deployed based on needs and priorities determined by Nyèsigiso, with full SYSDE accompaniment at every stage.",
  },
};

const statusColor = (status: string) => {
  if (status.includes("EXCL")) return "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30";
  if (status === "UPGRADE") return "bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30";
  return "bg-muted text-muted-foreground border-border";
};

/** Prefix any $amount with USD */
const usd = (v: string) => {
  if (!v || v === "bundled" || v === "—") return v;
  return v.startsWith("$") ? `USD ${v}` : v.startsWith("−$") ? `−USD ${v.slice(1)}` : v;
};

const ImplementationPlan = () => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [showAllInDetail, setShowAllInDetail] = useState(false);
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

        {/* FASE 1 Active Banner */}
        <div className={`mb-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <Card className="border-emerald-500/30 bg-emerald-500/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Badge className="bg-emerald-500 text-white text-xs">{t.active}</Badge>
                  <div>
                    <p className="font-bold text-foreground">{t.phase1}</p>
                    <p className="text-sm text-muted-foreground">{t.phase1desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="text-right">
                    <span className="text-2xl font-bold text-foreground">USD $7,500</span>
                    <span className="text-muted-foreground text-sm">{t.perMonth}</span>
                  </div>
                  <div className="text-right border-l border-border pl-4">
                    <p className="text-xs text-muted-foreground">{t.setupFee}</p>
                    <span className="text-lg font-bold text-foreground">USD $35,000</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">~61% {t.coverage}</Badge>
                </div>
              </div>
              <div className="mt-3 flex flex-col md:flex-row md:items-center gap-2">
                <p className="text-xs text-muted-foreground flex-1">{t.phase1includes}</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t.phase1note}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Module Detail with Accordions */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
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
                        USD {group.subtotalMonthly}{t.perMonth}
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
                              <td className="px-3 py-2.5 text-right font-medium text-foreground">{usd(mod.monthly)}</td>
                              <td className="px-3 py-2.5 text-right text-muted-foreground">{usd(mod.quarterly)}</td>
                              <td className="px-4 py-2.5 text-right text-muted-foreground">{usd(mod.annual)}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr className="bg-primary/5 font-bold">
                            <td className="px-4 py-2.5 text-foreground" colSpan={2}>{t.subtotal} — {group.subtotalName[language]}</td>
                            <td className="px-3 py-2.5 text-right text-primary">{usd(group.subtotalMonthly)}</td>
                            <td className="px-3 py-2.5 text-right text-foreground">{usd(group.subtotalQuarterly)}</td>
                            <td className="px-4 py-2.5 text-right text-foreground">{usd(group.subtotalAnnual)}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* Totals summary */}
          <Card className="mt-4 overflow-hidden border-primary/20">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="bg-muted/30">
                    <td className="px-4 py-3 font-semibold text-foreground">{t.totalAlaCarte}</td>
                    <td className="px-3 py-3 text-right font-bold text-foreground">USD $21,600</td>
                    <td className="px-3 py-3 text-right text-muted-foreground">USD $64,800</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">USD $259,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Choose your option */}
        <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-3">
              <Zap className="w-4 h-4" />
              {t.chooseSubtitle}
            </div>
            <h3 className="text-2xl font-bold text-foreground">{t.chooseTitle}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {/* Option A - À la Carte */}
            <Card className="border-border hover:border-primary/30 transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-muted-foreground/30" />
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-foreground">{t.option1Title}</CardTitle>
                <p className="text-sm text-muted-foreground">{t.option1Subtitle}</p>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <p className="text-sm text-muted-foreground">{t.option1Desc}</p>
                <div className="flex items-baseline gap-1 pt-2">
                  <span className="text-3xl font-bold text-foreground">{t.option1Price}</span>
                  <span className="text-muted-foreground text-sm">{t.perMonth}</span>
                </div>
                <p className="text-xs text-muted-foreground">{t.option1Note}</p>
              </CardContent>
            </Card>

            {/* Option B - ALL IN */}
            <Card className="border-primary/40 bg-primary/5 relative overflow-hidden ring-2 ring-primary/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <div className="absolute top-3 right-3">
                <Badge className="bg-primary text-primary-foreground text-xs">{t.recommended}</Badge>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-foreground">{t.option2Title}</CardTitle>
                <p className="text-sm text-muted-foreground">{t.option2Subtitle}</p>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <p className="text-sm text-muted-foreground">{t.option2Desc}</p>
                <div className="flex items-baseline gap-1 pt-2">
                  <span className="text-3xl font-bold text-primary">{t.option2Price}</span>
                  <span className="text-muted-foreground text-sm">{t.perMonth}</span>
                </div>
                <p className="text-xs text-muted-foreground">{t.option2Note}</p>
              </CardContent>
            </Card>
          </div>

          {/* Savings Banner */}
          <Card className="border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 mb-8">
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
                    <p className="text-xs text-muted-foreground uppercase">{t.perMonthLabel}</p>
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">−USD $12,101 <span className="text-sm">(42%)</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">{t.perQuarterLabel}</p>
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">−USD $36,303 <span className="text-sm">(42%)</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">{t.perYearLabel}</p>
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">−USD $145,212 <span className="text-sm">(42%)</span></p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparison Table */}
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">{t.comparisonTitle}</h3>
          <Card className="overflow-hidden border-primary/20 mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/5 border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground"></th>
                    <th className="text-center px-4 py-3 font-semibold text-foreground">{t.phase1Label}</th>
                    <th className="text-center px-4 py-3 font-semibold text-muted-foreground">{t.alaCarte}</th>
                    <th className="text-center px-4 py-3 font-semibold text-primary">{t.allIn}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="px-4 py-3 font-medium text-foreground">{t.setupFee}</td>
                    <td className="px-4 py-3 text-center text-foreground">USD $35,000</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">—</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">—</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="px-4 py-3 font-medium text-foreground">{t.perMonthLabel}</td>
                    <td className="px-4 py-3 text-center text-foreground">USD $7,500</td>
                    <td className="px-4 py-3 text-center text-muted-foreground line-through">USD $29,100</td>
                    <td className="px-4 py-3 text-center font-bold text-primary">USD $16,999</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="px-4 py-3 font-medium text-foreground">{t.perQuarterLabel}</td>
                    <td className="px-4 py-3 text-center text-foreground">USD $22,500</td>
                    <td className="px-4 py-3 text-center text-muted-foreground line-through">USD $87,300</td>
                    <td className="px-4 py-3 text-center font-bold text-primary">USD $50,997</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="px-4 py-3 font-medium text-foreground">{t.perYearLabel}</td>
                    <td className="px-4 py-3 text-center text-foreground">USD $90,000</td>
                    <td className="px-4 py-3 text-center text-muted-foreground line-through">USD $349,200</td>
                    <td className="px-4 py-3 text-center font-bold text-primary">USD $203,988</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="px-4 py-3 font-medium text-foreground">{t.coverage}</td>
                    <td className="px-4 py-3 text-center"><Badge variant="secondary">~61%</Badge></td>
                    <td className="px-4 py-3 text-center"><Badge>100%</Badge></td>
                    <td className="px-4 py-3 text-center"><Badge>100%</Badge></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">{t.modules}</td>
                    <td className="px-4 py-3 text-center text-foreground font-semibold">63</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">34</td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => setShowAllInDetail(!showAllInDetail)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        {showAllInDetail ? t.hideDetail : t.viewDetail}
                      </button>
                    </td>
                  </tr>
                  {showAllInDetail && (
                    <tr>
                      <td colSpan={4} className="px-4 py-4">
                        <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                          <p className="text-xs font-bold text-primary mb-3">63 + 34 = 97 {t.modules}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <p className="text-xs font-semibold text-foreground mb-1">{t.phase1Label} — 63 {t.modules}</p>
                              <p className="text-xs text-muted-foreground">{t.phase1includes}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-foreground mb-1">FASE 2 — 34 {t.modules}</p>
                              <div className="space-y-0.5">
                                {moduleGroups.map(g => (
                                  <p key={g.id} className="text-xs text-muted-foreground">
                                    <span className="font-medium">{g.label}.</span> {g.subtotalName[language]} ({g.modules.length})
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Card>

          <p className="text-xs text-muted-foreground text-center mt-3">
            💡 {t.billing}
          </p>
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

          {/* Phase 1 Timeline - Collapsible */}
          <Accordion type="multiple" className="space-y-4">
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
              <AccordionContent className="px-6 pt-6 pb-6">
                {/* Visual timeline */}
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

                  {(() => {
                    const phase1Steps = [
                      { 
                        period: t.cronogramaAcceptance, 
                        items: [t.cronogramaInstallation, t.cronogramaLicenses, t.cronogramaReporting],
                        icon: "🚀",
                        color: "bg-primary/10 border-primary/30"
                      },
                      { 
                        period: t.cronograma30days, 
                        items: [t.cronogramaMigration],
                        icon: "🔄",
                        color: "bg-primary/10 border-primary/30"
                      },
                      { 
                        period: `2-3 ${t.cronogramaMonths}`, 
                        items: [t.cronogramaConsol2, t.cronogramaConsol5],
                        icon: "📦",
                        color: "bg-secondary/50 border-secondary"
                      },
                      { 
                        period: `4 ${t.cronogramaMonths}`, 
                        items: [t.cronogramaConsol10],
                        icon: "⚡",
                        color: "bg-secondary/50 border-secondary"
                      },
                      { 
                        period: `5 ${t.cronogramaMonths}`, 
                        items: [t.cronogramaConsol10],
                        icon: "⚡",
                        color: "bg-secondary/50 border-secondary"
                      },
                      { 
                        period: `6 ${t.cronogramaMonths}`, 
                        items: [t.cronogramaConsol10],
                        icon: "⚡",
                        color: "bg-secondary/50 border-secondary"
                      },
                      { 
                        period: `7 ${t.cronogramaMonths}`, 
                        items: [t.cronogramaConsol10],
                        icon: "⚡",
                        color: "bg-secondary/50 border-secondary"
                      },
                      { 
                        period: `8 ${t.cronogramaMonths}`, 
                        items: [t.cronogramaConsol10],
                        icon: "⚡",
                        color: "bg-secondary/50 border-secondary"
                      },
                      { 
                        period: `9 ${t.cronogramaMonths}`, 
                        items: [t.cronogramaConsol10],
                        icon: "⚡",
                        color: "bg-secondary/50 border-secondary"
                      },
                      { 
                        period: `10 ${t.cronogramaMonths}`, 
                        items: [t.cronogramaConsol10],
                        icon: "⚡",
                        color: "bg-secondary/50 border-secondary"
                      },
                      { 
                        period: `11 ${t.cronogramaMonths}`, 
                        items: [t.cronogramaConsol10],
                        icon: "⚡",
                        color: "bg-secondary/50 border-secondary"
                      },
                      { 
                        period: `12 ${t.cronogramaMonths}`, 
                        items: [t.cronogramaCertification],
                        icon: "✅",
                        color: "bg-primary/10 border-primary/30"
                      },
                      { 
                        period: t.cronogramaSupportContract, 
                        items: [t.cronogramaSupport],
                        icon: "🛟",
                        color: "bg-muted border-border"
                      },
                      { 
                        period: t.cronograma12later, 
                        items: [t.cronogramaSupport],
                        icon: "🔁",
                        color: "bg-muted border-border"
                      },
                    ];

                    return phase1Steps.map((step, i) => (
                      <div key={i} className="relative pl-12 pb-6 last:pb-0 group">
                        {/* Dot on line */}
                        <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all" />
                        
                        <div className={`rounded-lg border p-4 ${step.color} hover:shadow-md transition-all duration-200`}>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-base">{step.icon}</span>
                            <span className="text-sm font-bold text-foreground">{step.period}</span>
                          </div>
                          <ul className="space-y-1">
                            {step.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-primary flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Phase 2 - Collapsible */}
            <AccordionItem value="phase2" className="border rounded-lg overflow-hidden border-primary/20">
              <AccordionTrigger className="px-5 py-4 hover:no-underline bg-primary/5 border-b border-border">
                <div className="flex items-center gap-3 flex-1 mr-4">
                  <Badge className="bg-primary text-primary-foreground">2</Badge>
                  <div className="text-left">
                    <p className="text-lg font-bold text-foreground">{t.cronogramaPhase2}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">34 {t.modules} · {t.cronogramaP2Flexible}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-6 pb-6">
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

                {/* 9 Module groups as interactive cards */}
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">{t.cronogramaP2Scope}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {moduleGroups.map((group) => {
                    const Icon = group.icon;
                    return (
                      <div
                        key={group.id}
                        className="group relative rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-4.5 h-4.5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-foreground truncate">{group.subtotalName[language]}</p>
                            <p className="text-[11px] text-muted-foreground">{group.modules.length} {t.modules}</p>
                          </div>
                          <Badge variant="outline" className="text-[10px] font-mono flex-shrink-0">{group.label}</Badge>
                        </div>
                        <div className="space-y-0.5">
                          {group.modules.slice(0, 3).map((mod, j) => (
                            <p key={j} className="text-[11px] text-muted-foreground truncate flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                              {mod.name[language]}
                            </p>
                          ))}
                          {group.modules.length > 3 && (
                            <p className="text-[11px] text-primary/60 font-medium">+{group.modules.length - 3} más</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Accompaniment + flexible note */}
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ImplementationPlan;
