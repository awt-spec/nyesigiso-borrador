export interface DomainItem {
  es: string;
  fr: string;
  en: string;
  scope: { es: string; fr: string; en: string };
}

export interface Domain {
  id: string;
  number: string;
  title: { es: string; fr: string; en: string };
  description: { es: string; fr: string; en: string };
  items: DomainItem[];
}

export const domains: Domain[] = [
  {
    id: "presentacion",
    number: "01",
    title: {
      es: "Presentación General",
      fr: "Présentation Générale",
      en: "General Presentation",
    },
    description: {
      es: "Información corporativa de SYSDE: identidad, presencia global, clientes activos, diferenciadores del sistema y líneas de negocio.",
      fr: "Informations corporatives de SYSDE : identité, présence mondiale, clients actifs, différenciateurs du système et lignes d'activité.",
      en: "SYSDE corporate information: identity, global presence, active clients, system differentiators, and lines of business.",
    },
    items: [
      {
        es: "Identidad",
        fr: "Identité",
        en: "Identity",
        scope: {
          es: "SYSDE — Empresa tecnológica especializada en el sector financiero con más de 25 años de experiencia. Diseño, desarrollo, implementación y soporte de sistemas core financieros modulares.",
          fr: "SYSDE — Entreprise technologique spécialisée dans le secteur financier avec plus de 25 ans d'expérience. Conception, développement, implémentation et support de systèmes core financiers modulaires.",
          en: "SYSDE — Technology company specialized in the financial sector with over 25 years of experience. Design, development, implementation, and support of modular financial core systems.",
        },
      },
      {
        es: "Naturaleza Jurídica",
        fr: "Nature Juridique",
        en: "Legal Nature",
        scope: {
          es: "Sociedad Anónima de capital privado. Gobernanza corporativa sólida con directivos de larga trayectoria en el sector financiero y tecnológico.",
          fr: "Société Anonyme à capital privé. Gouvernance corporative solide avec des dirigeants de longue expérience dans le secteur financier et technologique.",
          en: "Private capital Corporation. Solid corporate governance with executives with extensive experience in the financial and technology sectors.",
        },
      },
      {
        es: "Balance Financiero",
        fr: "Bilan Financier",
        en: "Financial Statement",
        scope: {
          es: "Ingresos promedio anuales USD 10M, utilidad neta promedio USD 1.1M. Ratio Deuda/Patrimonio 0.085 (8.5%), indicativo de bajo riesgo financiero. Informe anual detallado disponible bajo solicitud.",
          fr: "Revenus moyens annuels USD 10M, bénéfice net moyen USD 1.1M. Ratio Dette/Capitaux propres 0.085 (8.5%), indicatif de faible risque financier. Rapport annuel détaillé disponible sur demande.",
          en: "Average annual revenue USD 10M, average net profit USD 1.1M. Debt-to-Equity ratio 0.085 (8.5%), indicative of low financial risk. Detailed annual report available upon request.",
        },
      },
      {
        es: "Tamaño",
        fr: "Taille",
        en: "Size",
        scope: {
          es: "Equipo de +200 personas. Oficinas comerciales, fábricas de desarrollo y centros SVA en Latinoamérica y África. Operaciones en 35+ países en 4 continentes.",
          fr: "Équipe de +200 personnes. Bureaux commerciaux, usines de développement et centres SVA en Amérique Latine et Afrique. Opérations dans 35+ pays sur 4 continents.",
          en: "Team of 200+ people. Commercial offices, development factories, and SVA centers in Latin America and Africa. Operations in 35+ countries across 4 continents.",
        },
      },
      {
        es: "Investigación y Desarrollo",
        fr: "Recherche et Développement",
        en: "Research & Development",
        scope: {
          es: "Equipo dedicado de 120 personas en I+D. Desarrollo continuo de SAF UPV con actualizaciones regulatorias permanentes, mejoras funcionales y adaptación a nuevas normativas por jurisdicción.",
          fr: "Équipe dédiée de 120 personnes en R&D. Développement continu de SAF UPV avec mises à jour réglementaires permanentes, améliorations fonctionnelles et adaptation aux nouvelles réglementations par juridiction.",
          en: "Dedicated team of 120 people in R&D. Continuous SAF UPV development with permanent regulatory updates, functional improvements, and adaptation to new regulations by jurisdiction.",
        },
      },
      {
        es: "Producto",
        fr: "Produit",
        en: "Product",
        scope: {
          es: "SYSDE SAF UPV Versión 7.0+ — Sistema core financiero modular, independiente y altamente especializado. Líneas: SAF+ Credits, SAF+ Leasing, SAF+ Factoring, SAF+ Cards, SAF+ Pension.",
          fr: "SYSDE SAF UPV Version 7.0+ — Système core financier modulaire, indépendant et hautement spécialisé. Lignes : SAF+ Credits, SAF+ Leasing, SAF+ Factoring, SAF+ Cards, SAF+ Pension.",
          en: "SYSDE SAF UPV Version 7.0+ — Modular, independent, and highly specialized financial core system. Lines: SAF+ Credits, SAF+ Leasing, SAF+ Factoring, SAF+ Cards, SAF+ Pension.",
        },
      },
      {
        es: "Evolución del Producto",
        fr: "Évolution du Produit",
        en: "Product Evolution",
        scope: {
          es: "Política de releases estructurada: Major (1-2/año), Minor (trimestral), Patches (mensual), Hotfix (inmediato). Compatibilidad garantizada entre versiones con contrato de mantenimiento activo.",
          fr: "Politique de releases structurée : Major (1-2/an), Minor (trimestriel), Patches (mensuel), Hotfix (immédiat). Compatibilité garantie entre versions avec contrat de maintenance actif.",
          en: "Structured release policy: Major (1-2/year), Minor (quarterly), Patches (monthly), Hotfix (immediate). Guaranteed version compatibility with active maintenance contract.",
        },
      },
      {
        es: "Referencias",
        fr: "Références",
        en: "References",
        scope: {
          es: "830+ clientes globales activos. Centroamérica: 159 | Caribe: 84 | Sudamérica: 187. En África, más de 400 clientes activos en zona UEMOA y otros países. Múltiples instituciones en explotación activa.",
          fr: "830+ clients mondiaux actifs. Amérique Centrale : 159 | Caraïbes : 84 | Amérique du Sud : 187. En Afrique, plus de 400 clients actifs en zone UEMOA et autres pays. Multiples institutions en exploitation active.",
          en: "830+ active global clients. Central America: 159 | Caribbean: 84 | South America: 187. In Africa, over 400 active clients in UEMOA zone and other countries. Multiple institutions in active operation.",
        },
      },
      {
        es: "Asociaciones",
        fr: "Partenariats",
        en: "Partnerships",
        scope: {
          es: "Smart-Tech Mali y otros integradores locales como socios estratégicos. Red de partners para implementación, soporte local y adaptación regulatoria en cada jurisdicción.",
          fr: "Smart-Tech Mali et autres intégrateurs locaux comme partenaires stratégiques. Réseau de partenaires pour l'implémentation, le support local et l'adaptation réglementaire dans chaque juridiction.",
          en: "Smart-Tech Mali and other local integrators as strategic partners. Partner network for implementation, local support, and regulatory adaptation in each jurisdiction.",
        },
      },
    ],
  },
  {
    id: "multicanal",
    number: "02",
    title: { es: "Multicanal", fr: "Multicanal", en: "Multichannel" },
    description: {
      es: "Canales de atención presencial y digital: agencias, internet, móvil, USSD y SMS.",
      fr: "Canaux de service en présentiel et digital : agences, internet, mobile, USSD et SMS.",
      en: "In-person and digital service channels: agencies, internet, mobile, USSD, and SMS.",
    },
    items: [
      { es: "Gestión de agencias", fr: "Gestion des agences", en: "Agency Management", scope: { es: "Apertura, cierre, configuración de sucursales y puntos de servicio", fr: "Ouverture, fermeture, configuration des succursales et points de service", en: "Opening, closing, configuration of branches and service points" } },
      { es: "Operaciones en ventanilla", fr: "Opérations au guichet", en: "Counter Operations", scope: { es: "Depósitos, retiros, cambio de divisas, operaciones de caja", fr: "Dépôts, retraits, change, opérations de caisse", en: "Deposits, withdrawals, foreign exchange, teller operations" } },
      { es: "Internet Banking", fr: "Banque à distance — Internet", en: "Internet Banking", scope: { es: "Portal web para consultas, transferencias y gestión de cuentas", fr: "Portail web pour consultations, virements et gestion de comptes", en: "Web portal for inquiries, transfers, and account management" } },
      { es: "Mobile Banking", fr: "Banque à distance — Mobile", en: "Mobile Banking", scope: { es: "App nativa para operaciones bancarias desde dispositivos móviles", fr: "App native pour opérations bancaires depuis appareils mobiles", en: "Native app for banking operations from mobile devices" } },
      { es: "Canal USSD", fr: "Banque à distance — USSD", en: "USSD Channel", scope: { es: "Acceso a servicios bancarios básicos sin conexión a internet", fr: "Accès aux services bancaires de base sans connexion internet", en: "Access to basic banking services without internet" } },
      { es: "SMS Banking", fr: "Banque à distance — SMS", en: "SMS Banking", scope: { es: "Notificaciones y consultas de saldo vía mensajes de texto", fr: "Notifications et consultations de solde via SMS", en: "Notifications and balance inquiries via text messages" } },
    ],
  },
  {
    id: "marketing",
    number: "03",
    title: { es: "Marketing y Comercial", fr: "Marketing et Commercial", en: "Marketing & Commercial" },
    description: {
      es: "Herramientas de gestión comercial, campañas, prospectos y segmentación de clientes.",
      fr: "Outils de gestion commerciale, campagnes, prospects et segmentation des clients.",
      en: "Commercial management tools, campaigns, prospects, and customer segmentation.",
    },
    items: [
      { es: "Gestión de campañas", fr: "Gestion des campagnes", en: "Campaign Management", scope: { es: "Diseño, ejecución, seguimiento y medición de campañas comerciales", fr: "Conception, exécution, suivi et mesure des campagnes commerciales", en: "Design, execution, tracking, and measurement of campaigns" } },
      { es: "Gestión de prospectos", fr: "Gestion des prospects", en: "Prospect Management", scope: { es: "Captación, calificación y conversión de leads", fr: "Captation, qualification et conversion de leads", en: "Lead capture, qualification, and conversion" } },
      { es: "Gestión de oportunidades", fr: "Gestion des opportunités", en: "Opportunity Management", scope: { es: "Pipeline comercial, probabilidad de cierre, seguimiento", fr: "Pipeline commercial, probabilité de clôture, suivi", en: "Sales pipeline, close probability, follow-up" } },
      { es: "Fuerza de ventas", fr: "Force de vente", en: "Sales Force", scope: { es: "Asignación de metas, seguimiento de desempeño por asesor", fr: "Assignation d'objectifs, suivi de performance par conseiller", en: "Goal assignment, performance tracking per advisor" } },
      { es: "Informes comerciales", fr: "Rapports commerciaux", en: "Commercial Reports", scope: { es: "Dashboards de ventas, conversión, productividad comercial", fr: "Tableaux de bord de ventes, conversion, productivité commerciale", en: "Sales dashboards, conversion, commercial productivity" } },
      { es: "Segmentación", fr: "Segmentation des clients", en: "Segmentation", scope: { es: "Clasificación de clientes por perfil, comportamiento y valor", fr: "Classification des clients par profil, comportement et valeur", en: "Customer classification by profile, behavior, and value" } },
    ],
  },
  {
    id: "referencial",
    number: "04",
    title: { es: "Referencial de Terceros", fr: "Référentiel des Tiers", en: "Third-Party Reference" },
    description: {
      es: "Gestión centralizada de terceros, KYC, relaciones entre entidades y calidad de datos.",
      fr: "Gestion centralisée des tiers, KYC, relations entre entités et qualité des données.",
      en: "Centralized third-party management, KYC, entity relationships, and data quality.",
    },
    items: [
      { es: "Referencial de terceros", fr: "Référentiel des tiers", en: "Third-Party Reference", scope: { es: "Base única de personas físicas y jurídicas, deduplicación", fr: "Base unique de personnes physiques et morales, dédoublonnage", en: "Single database of individuals and legal entities, deduplication" } },
      { es: "KYC", fr: "Connaissance du client (KYC)", en: "KYC", scope: { es: "Verificación de identidad, documentación obligatoria, PEP, sanciones", fr: "Vérification d'identité, documentation obligatoire, PEP, sanctions", en: "Identity verification, required documentation, PEP, sanctions" } },
      { es: "Grupos y relaciones", fr: "Groupes et relations", en: "Groups & Relationships", scope: { es: "Vínculos familiares, empresariales y de garantía entre clientes", fr: "Liens familiaux, d'entreprise et de garantie entre clients", en: "Family, business, and guarantee links between customers" } },
      { es: "Calidad de datos", fr: "Qualité des données", en: "Data Quality", scope: { es: "Reglas de validación, limpieza automática, scoring de calidad", fr: "Règles de validation, nettoyage automatique, scoring de qualité", en: "Validation rules, automatic cleaning, quality scoring" } },
    ],
  },
  {
    id: "clientes",
    number: "05",
    title: { es: "Gestión de Clientes", fr: "Gestion des Clients", en: "Client Management" },
    description: {
      es: "Ciclo de vida del cliente: cuentas, riesgos, garantías, cobros, cumplimiento y gestión jurídica.",
      fr: "Cycle de vie du client : comptes, risques, garanties, recouvrements, conformité et gestion juridique.",
      en: "Customer lifecycle: accounts, risks, guarantees, collections, compliance, and legal management.",
    },
    items: [
      { es: "Apertura y cierre de cuentas", fr: "Ouverture et clôture de comptes", en: "Account Opening & Closing", scope: { es: "Flujo completo de onboarding, validación documental y cierre", fr: "Flux complet d'onboarding, validation documentaire et clôture", en: "Full onboarding flow, document validation, and closing" } },
      { es: "Cuentas corrientes", fr: "Comptes courants", en: "Current Accounts", scope: { es: "Gestión de saldos, movimientos, estados de cuenta, bloqueos", fr: "Gestion des soldes, mouvements, relevés de compte, blocages", en: "Balance management, transactions, statements, blocks" } },
      { es: "Firmas y poderes", fr: "Signatures et pouvoirs", en: "Signatures & Powers", scope: { es: "Registro de firmas autorizadas y poderes notariales", fr: "Enregistrement des signatures autorisées et procurations", en: "Authorized signature and power of attorney registry" } },
      { es: "Incidentes de pago", fr: "Incidents de paiement", en: "Payment Incidents", scope: { es: "Cheques devueltos, rechazos, gestión de incidencias", fr: "Chèques rejetés, refus, gestion des incidents", en: "Returned checks, rejections, incident management" } },
      { es: "Riesgos de crédito", fr: "Risques de crédit", en: "Credit Risk", scope: { es: "Evaluación de riesgo, provisiones, clasificación de cartera", fr: "Évaluation de risque, provisions, classification du portefeuille", en: "Risk assessment, provisions, portfolio classification" } },
      { es: "Scoring y rating", fr: "Scoring et rating", en: "Scoring & Rating", scope: { es: "Modelos de scoring crediticio, calificación interna de clientes", fr: "Modèles de scoring crédit, notation interne des clients", en: "Credit scoring models, internal customer rating" } },
      { es: "Garantías", fr: "Garanties", en: "Guarantees", scope: { es: "Registro, valoración y seguimiento de garantías reales y personales", fr: "Enregistrement, évaluation et suivi des garanties réelles et personnelles", en: "Registration, valuation, and tracking of real and personal guarantees" } },
      { es: "Cobros y recuperaciones", fr: "Recouvrements", en: "Collections", scope: { es: "Estrategias de cobro, aging, gestión de mora y reestructuración", fr: "Stratégies de recouvrement, aging, gestion des impayés et restructuration", en: "Collection strategies, aging, delinquency, and restructuring" } },
      { es: "Gestión jurídica", fr: "Gestion juridique", en: "Legal Management", scope: { es: "Casos contenciosos, seguimiento judicial, provisiones legales", fr: "Cas contentieux, suivi judiciaire, provisions légales", en: "Litigation cases, judicial follow-up, legal provisions" } },
      { es: "Cumplimiento AML", fr: "Conformité anti-blanchiment", en: "AML Compliance", scope: { es: "Detección de operaciones sospechosas, reportes regulatorios, listas negras", fr: "Détection d'opérations suspectes, rapports réglementaires, listes noires", en: "Suspicious operation detection, regulatory reports, blacklists" } },
    ],
  },
  {
    id: "productos",
    number: "06",
    title: { es: "Productos y Servicios", fr: "Produits et Services", en: "Products & Services" },
    description: {
      es: "Catálogo completo de productos bancarios: depósitos, ahorro, créditos, tarjetas y pagos.",
      fr: "Catalogue complet de produits bancaires : dépôts, épargne, crédits, cartes et paiements.",
      en: "Full banking product catalog: deposits, savings, loans, cards, and payments.",
    },
    items: [
      { es: "Depósitos a la vista", fr: "Dépôts à vue", en: "Demand Deposits", scope: { es: "Cuentas corrientes, libretas, condiciones de remuneración", fr: "Comptes courants, livrets, conditions de rémunération", en: "Current accounts, passbooks, remuneration conditions" } },
      { es: "Depósitos a plazo", fr: "Dépôts à terme", en: "Term Deposits", scope: { es: "Plazos fijos, tasas, renovación automática, liquidación", fr: "Dépôts à terme, taux, renouvellement automatique, liquidation", en: "Fixed terms, rates, auto-renewal, settlement" } },
      { es: "Cuentas de ahorro", fr: "Comptes d'épargne", en: "Savings Accounts", scope: { es: "Ahorro programado, contractual, planes especiales", fr: "Épargne programmée, contractuelle, plans spéciaux", en: "Programmed savings, contractual, special plans" } },
      { es: "Créditos corto plazo", fr: "Crédits court terme", en: "Short-Term Loans", scope: { es: "Descubiertos, líneas de crédito, facilidades de caja", fr: "Découverts, lignes de crédit, facilités de caisse", en: "Overdrafts, credit lines, cash facilities" } },
      { es: "Créditos mediano/largo plazo", fr: "Crédits moyen/long terme", en: "Medium/Long-Term Loans", scope: { es: "Préstamos amortizables, hipotecarios, tablas de amortización", fr: "Prêts amortissables, hypothécaires, tableaux d'amortissement", en: "Amortizable loans, mortgages, amortization schedules" } },
      { es: "Créditos grupales", fr: "Crédits groupés", en: "Group Loans", scope: { es: "Créditos solidarios, grupales, gestión de grupo y cogarantes", fr: "Crédits solidaires, groupés, gestion du groupe et cogarants", en: "Solidarity loans, group management, co-guarantors" } },
      { es: "Microcréditos", fr: "Microcrédits", en: "Microloans", scope: { es: "Productos adaptados a microfinanzas, desembolso rápido", fr: "Produits adaptés à la microfinance, décaissement rapide", en: "Microfinance-adapted products, quick disbursement" } },
      { es: "Tarjetas", fr: "Gestion des cartes", en: "Card Management", scope: { es: "Emisión, activación, bloqueo, renovación de tarjetas débito/crédito", fr: "Émission, activation, blocage, renouvellement de cartes débit/crédit", en: "Issuance, activation, blocking, renewal of debit/credit cards" } },
      { es: "Transferencias y pagos", fr: "Transferts et paiements", en: "Transfers & Payments", scope: { es: "Transferencias nacionales/internacionales, pagos de servicios", fr: "Virements nationaux/internationaux, paiements de services", en: "Domestic/international transfers, service payments" } },
      { es: "Catálogo de productos", fr: "Catalogue de produits", en: "Product Catalog", scope: { es: "Definición paramétrica de productos, condiciones y comisiones", fr: "Définition paramétrique de produits, conditions et commissions", en: "Parametric product definition, conditions, and fees" } },
      { es: "Paquetes de productos", fr: "Packages de produits", en: "Product Packages", scope: { es: "Combinaciones de productos preconfiguradas para segmentos", fr: "Combinaisons de produits préconfigurées pour segments", en: "Preconfigured product combinations for segments" } },
    ],
  },
  {
    id: "intercambios-ext",
    number: "07",
    title: { es: "Intercambios Externos", fr: "Échanges Externes", en: "External Exchanges" },
    description: {
      es: "Interfaces con sistemas regulatorios y de compensación (BCEAO, Switch, etc.).",
      fr: "Interfaces avec systèmes réglementaires et de compensation (BCEAO, Switch, etc.).",
      en: "Interfaces with regulatory and clearing systems (BCEAO, Switch, etc.).",
    },
    items: [
      { es: "Interfaces externas", fr: "Interfaces externes", en: "External Interfaces", scope: { es: "Conexión con BCEAO, sistemas de compensación, switch monetario, reportes regulatorios automáticos", fr: "Connexion avec BCEAO, systèmes de compensation, switch monétaire, rapports réglementaires automatiques", en: "Connection with BCEAO, clearing systems, monetary switch, automatic regulatory reports" } },
    ],
  },
  {
    id: "soporte",
    number: "08",
    title: { es: "Funciones de Soporte", fr: "Fonctions Support", en: "Support Functions" },
    description: {
      es: "Contabilidad, RRHH, tesorería, compras, logística, control de gestión y reporting financiero.",
      fr: "Comptabilité, RH, trésorerie, achats, logistique, contrôle de gestion et reporting financier.",
      en: "Accounting, HR, treasury, procurement, logistics, management control, and financial reporting.",
    },
    items: [
      { es: "Contabilidad general", fr: "Comptabilité générale", en: "General Accounting", scope: { es: "Plan de cuentas, asientos automáticos, cierres periódicos", fr: "Plan comptable, écritures automatiques, clôtures périodiques", en: "Chart of accounts, automatic entries, periodic closings" } },
      { es: "Contabilidad auxiliar", fr: "Comptabilité auxiliaire", en: "Subsidiary Accounting", scope: { es: "Conciliación de cuentas auxiliares con el libro mayor", fr: "Rapprochement des comptes auxiliaires avec le grand livre", en: "Reconciliation of subsidiary accounts with general ledger" } },
      { es: "Contabilidad presupuestaria", fr: "Comptabilité budgétaire", en: "Budget Accounting", scope: { es: "Presupuestos por centro de costo, seguimiento de ejecución", fr: "Budgets par centre de coût, suivi d'exécution", en: "Budgets by cost center, execution tracking" } },
      { es: "Contabilidad analítica", fr: "Comptabilité analytique", en: "Cost Accounting", scope: { es: "Centros de costo, distribución de gastos, rentabilidad por unidad", fr: "Centres de coût, répartition des charges, rentabilité par unité", en: "Cost centers, expense allocation, unit profitability" } },
      { es: "Tesorería", fr: "Trésorerie", en: "Treasury", scope: { es: "Posición de liquidez, previsiones de flujo, gestión de bancos", fr: "Position de liquidité, prévisions de flux, gestion des banques", en: "Liquidity position, cash flow forecasts, bank management" } },
      { es: "Inmovilizados", fr: "Immobilisations", en: "Fixed Assets", scope: { es: "Registro, depreciación, bajas y revalorizaciones de activos fijos", fr: "Enregistrement, amortissement, cessions et réévaluations d'actifs fixes", en: "Registration, depreciation, disposals, and revaluation of fixed assets" } },
      { es: "Gestión de RRHH", fr: "Gestion des RH", en: "HR Management", scope: { es: "Expedientes de empleados, contratos, permisos, evaluaciones", fr: "Dossiers employés, contrats, permissions, évaluations", en: "Employee records, contracts, permissions, evaluations" } },
      { es: "Nóminas", fr: "Paie et rémunérations", en: "Payroll", scope: { es: "Cálculo de nómina, deducciones, cotizaciones, recibos de pago", fr: "Calcul de paie, déductions, cotisations, bulletins de paie", en: "Payroll calculation, deductions, contributions, pay slips" } },
      { es: "Control de gestión", fr: "Contrôle de gestion", en: "Management Control", scope: { es: "Indicadores de gestión, análisis de desviaciones, cuadros de mando", fr: "Indicateurs de gestion, analyse des écarts, tableaux de bord", en: "Management indicators, variance analysis, dashboards" } },
      { es: "Gestión fiscal", fr: "Gestion fiscale", en: "Tax Management", scope: { es: "Cálculo de impuestos, declaraciones, retenciones, IVA", fr: "Calcul des impôts, déclarations, retenues, TVA", en: "Tax calculation, filings, withholdings, VAT" } },
      { es: "Compras", fr: "Achats", en: "Procurement", scope: { es: "Solicitudes de compra, órdenes, recepción, aprobaciones", fr: "Demandes d'achat, commandes, réception, approbations", en: "Purchase requests, orders, reception, approvals" } },
      { es: "Stocks", fr: "Stocks", en: "Inventory", scope: { es: "Control de existencias, entradas/salidas, inventarios periódicos", fr: "Contrôle des stocks, entrées/sorties, inventaires périodiques", en: "Stock control, in/out, periodic inventories" } },
      { es: "Logística", fr: "Logistique", en: "Logistics", scope: { es: "Gestión de almacenes, distribución, tracking de activos", fr: "Gestion des entrepôts, distribution, tracking d'actifs", en: "Warehouse management, distribution, asset tracking" } },
      { es: "Proveedores", fr: "Fournisseurs", en: "Suppliers", scope: { es: "Base de proveedores, evaluación, contratos, pagos", fr: "Base de fournisseurs, évaluation, contrats, paiements", en: "Supplier database, evaluation, contracts, payments" } },
      { es: "Reporting financiero", fr: "Reporting financier", en: "Financial Reporting", scope: { es: "Estados financieros, balances, P&L, notas contables", fr: "États financiers, bilans, P&L, notes comptables", en: "Financial statements, balance sheets, P&L, accounting notes" } },
    ],
  },
  {
    id: "pilotaje",
    number: "09",
    title: { es: "Pilotaje y Decisión", fr: "Pilotage et Décision", en: "Steering & Decision" },
    description: {
      es: "Cuadros de mando, reportes regulatorios y gerenciales, BI, KPIs y alertas.",
      fr: "Tableaux de bord, rapports réglementaires et managériaux, BI, KPIs et alertes.",
      en: "Dashboards, regulatory and management reports, BI, KPIs, and alerts.",
    },
    items: [
      { es: "Dashboards", fr: "Tableaux de bord", en: "Dashboards", scope: { es: "Cuadros de mando ejecutivos, operativos y tácticos en tiempo real", fr: "Tableaux de bord exécutifs, opérationnels et tactiques en temps réel", en: "Executive, operational, and tactical dashboards in real time" } },
      { es: "Reporting regulatorio", fr: "Reporting réglementaire", en: "Regulatory Reporting", scope: { es: "Generación automática de reportes para BCEAO y reguladores", fr: "Génération automatique de rapports pour BCEAO et régulateurs", en: "Automatic report generation for BCEAO and regulators" } },
      { es: "Reporting gerencial", fr: "Reporting managérial", en: "Management Reporting", scope: { es: "Informes para dirección general y comités de gestión", fr: "Rapports pour la direction générale et comités de gestion", en: "Reports for general management and management committees" } },
      { es: "Análisis de rentabilidad", fr: "Analyse de rentabilité", en: "Profitability Analysis", scope: { es: "Rentabilidad por producto, cliente, agencia y segmento", fr: "Rentabilité par produit, client, agence et segment", en: "Profitability by product, customer, branch, and segment" } },
      { es: "KPIs", fr: "Indicateurs clés (KPI)", en: "KPIs", scope: { es: "Definición, monitoreo y alertas sobre indicadores clave", fr: "Définition, monitoring et alertes sur indicateurs clés", en: "Definition, monitoring, and alerts on key indicators" } },
      { es: "Business Intelligence", fr: "Business Intelligence", en: "Business Intelligence", scope: { es: "Data warehouse, cubos OLAP, análisis multidimensional", fr: "Data warehouse, cubes OLAP, analyse multidimensionnelle", en: "Data warehouse, OLAP cubes, multidimensional analysis" } },
      { es: "Alertas y notificaciones", fr: "Alertes et notifications", en: "Alerts & Notifications", scope: { es: "Sistema de alertas configurables por eventos, umbrales y reglas", fr: "Système d'alertes configurables par événements, seuils et règles", en: "Configurable alert system by events, thresholds, and rules" } },
    ],
  },
  {
    id: "intercambios-int",
    number: "10",
    title: { es: "Intercambios Internos", fr: "Échanges Internes", en: "Internal Exchanges" },
    description: {
      es: "Workflow, gestión documental, mensajería interna y APIs de integración.",
      fr: "Workflow, gestion documentaire, messagerie interne et APIs d'intégration.",
      en: "Workflow, document management, internal messaging, and integration APIs.",
    },
    items: [
      { es: "Workflow", fr: "Workflow", en: "Workflow", scope: { es: "Motor de procesos BPM, aprobaciones multinivel, escalamiento", fr: "Moteur de processus BPM, approbations multiniveaux, escalade", en: "BPM process engine, multi-level approvals, escalation" } },
      { es: "Gestión documental (GED)", fr: "GED", en: "Document Management", scope: { es: "Digitalización, indexación, almacenamiento y búsqueda de documentos", fr: "Numérisation, indexation, stockage et recherche de documents", en: "Scanning, indexing, storage, and document search" } },
      { es: "Mensajería interna", fr: "Messagerie interne", en: "Internal Messaging", scope: { es: "Comunicación entre usuarios del sistema, notificaciones internas", fr: "Communication entre utilisateurs du système, notifications internes", en: "Communication between system users, internal notifications" } },
      { es: "APIs internas", fr: "APIs internes", en: "Internal APIs", scope: { es: "Servicios REST/SOAP para integración entre módulos y sistemas", fr: "Services REST/SOAP pour intégration entre modules et systèmes", en: "REST/SOAP services for inter-module and system integration" } },
    ],
  },
  {
    id: "tecnicas",
    number: "11",
    title: { es: "Características Técnicas", fr: "Caractéristiques Techniques", en: "Technical Characteristics" },
    description: {
      es: "Arquitectura, escalabilidad, alta disponibilidad, DRP, monitoreo, DevOps y estándares.",
      fr: "Architecture, évolutivité, haute disponibilité, PRA, monitoring, DevOps et standards.",
      en: "Architecture, scalability, high availability, DRP, monitoring, DevOps, and standards.",
    },
    items: [
      { es: "Multi-tenant", fr: "Multi-tenant", en: "Multi-Tenant", scope: { es: "Aislamiento de datos por institución, configuración independiente", fr: "Isolation des données par institution, configuration indépendante", en: "Data isolation per institution, independent configuration" } },
      { es: "Escalabilidad", fr: "Évolutivité", en: "Scalability", scope: { es: "Escalamiento horizontal y vertical según demanda", fr: "Mise à l'échelle horizontale et verticale selon demande", en: "Horizontal and vertical scaling on demand" } },
      { es: "Alta disponibilidad", fr: "Haute disponibilité", en: "High Availability", scope: { es: "Clusters activo-activo, failover automático, SLA 99.9%", fr: "Clusters actif-actif, failover automatique, SLA 99.9%", en: "Active-active clusters, automatic failover, 99.9% SLA" } },
      { es: "DRP", fr: "PRA", en: "DRP", scope: { es: "Plan de recuperación ante desastres, RPO/RTO definidos", fr: "Plan de reprise d'activité, RPO/RTO définis", en: "Disaster recovery plan, defined RPO/RTO" } },
      { es: "Respaldos", fr: "Sauvegardes", en: "Backups", scope: { es: "Respaldos incrementales, completos, retención configurable", fr: "Sauvegardes incrémentales, complètes, rétention configurable", en: "Incremental, full backups, configurable retention" } },
      { es: "Monitoreo", fr: "Monitoring", en: "Monitoring", scope: { es: "Supervisión en tiempo real de infraestructura y aplicaciones", fr: "Supervision en temps réel de l'infrastructure et des applications", en: "Real-time infrastructure and application monitoring" } },
      { es: "Logs y trazabilidad", fr: "Logs et traçabilité", en: "Logs & Traceability", scope: { es: "Registro centralizado de eventos, correlación, retención", fr: "Enregistrement centralisé des événements, corrélation, rétention", en: "Centralized event logging, correlation, retention" } },
      { es: "Estándares", fr: "Standards", en: "Standards", scope: { es: "Compatibilidad con ISO 27001, PCI-DSS, COBIT, ITIL", fr: "Compatibilité avec ISO 27001, PCI-DSS, COBIT, ITIL", en: "Compatibility with ISO 27001, PCI-DSS, COBIT, ITIL" } },
      { es: "CI/CD y DevOps", fr: "CI/CD et DevOps", en: "CI/CD & DevOps", scope: { es: "Pipelines de integración y despliegue continuo automatizados", fr: "Pipelines d'intégration et déploiement continu automatisés", en: "Automated continuous integration and deployment pipelines" } },
      { es: "Versionamiento", fr: "Gestion des versions", en: "Versioning", scope: { es: "Control de versiones del sistema, releases, changelogs", fr: "Contrôle de versions du système, releases, changelogs", en: "System version control, releases, changelogs" } },
      { es: "Rendimiento", fr: "Performance", en: "Performance", scope: { es: "Optimización de consultas, caching, tiempos de respuesta <2s", fr: "Optimisation des requêtes, caching, temps de réponse <2s", en: "Query optimization, caching, response times <2s" } },
      { es: "Multi-idioma y multi-divisa", fr: "Multi-langue et multi-devise", en: "Multi-Language & Currency", scope: { es: "Soporte nativo para múltiples idiomas y divisas simultáneamente", fr: "Support natif pour plusieurs langues et devises simultanément", en: "Native support for multiple simultaneous languages and currencies" } },
    ],
  },
  {
    id: "anexas",
    number: "12",
    title: { es: "Prestaciones Anexas", fr: "Prestations Annexes", en: "Additional Services" },
    description: {
      es: "Soporte, migración, formación, acompañamiento al cambio, garantía y gobernanza de proyecto.",
      fr: "Support, migration, formation, accompagnement au changement, garantie et gouvernance de projet.",
      en: "Support, migration, training, change management, warranty, and project governance.",
    },
    items: [
      { es: "Soporte técnico", fr: "Support technique", en: "Technical Support", scope: { es: "Mesa de ayuda 24/7, SLAs diferenciados, escalamiento", fr: "Help desk 24/7, SLAs différenciés, escalade", en: "24/7 help desk, differentiated SLAs, escalation" } },
      { es: "Migración de datos", fr: "Migration de données", en: "Data Migration", scope: { es: "ETL, mapeo de datos, validación, limpieza y carga de 87 BDs", fr: "ETL, mappage des données, validation, nettoyage et chargement de 87 BDs", en: "ETL, data mapping, validation, cleaning, and loading of 87 DBs" } },
      { es: "Formación", fr: "Formation", en: "Training", scope: { es: "Programas de capacitación por perfil: usuarios, admin, técnico", fr: "Programmes de formation par profil : utilisateurs, admin, technique", en: "Training programs by profile: users, admin, technical" } },
      { es: "Gestión del cambio", fr: "Accompagnement au changement", en: "Change Management", scope: { es: "Plan de comunicación, champions, adopción progresiva", fr: "Plan de communication, champions, adoption progressive", en: "Communication plan, champions, progressive adoption" } },
      { es: "Garantía post-implementación", fr: "Garantie post-implémentation", en: "Post-Implementation Warranty", scope: { es: "Periodo de estabilización, corrección de defectos, soporte dedicado", fr: "Période de stabilisation, correction de défauts, support dédié", en: "Stabilization period, defect correction, dedicated support" } },
      { es: "Metodología", fr: "Méthodologie de projet", en: "Methodology", scope: { es: "Enfoque ágil/híbrido, sprints, entregables por fase", fr: "Approche agile/hybride, sprints, livrables par phase", en: "Agile/hybrid approach, sprints, deliverables per phase" } },
      { es: "Gobernanza de proyecto", fr: "Gouvernance de projet", en: "Project Governance", scope: { es: "Comités de dirección, reportes de avance, gestión de riesgos", fr: "Comités de direction, rapports d'avancement, gestion des risques", en: "Steering committees, progress reports, risk management" } },
      { es: "Condiciones comerciales", fr: "Conditions commerciales", en: "Commercial Terms", scope: { es: "Modelo de licenciamiento, costos, plazos y condiciones de pago", fr: "Modèle de licence, coûts, délais et conditions de paiement", en: "Licensing model, costs, timelines, and payment conditions" } },
    ],
  },
];
