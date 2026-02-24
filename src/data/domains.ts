export type CoverageStatus = "cubierto" | "parcial" | "no-cubierto" | "excluido";

export interface DomainItem {
  es: string;
  fr: string;
  en: string;
  scope: { es: string; fr: string; en: string };
  status?: CoverageStatus;
  group?: string;
}

export interface DomainGroup {
  id: string;
  title: { es: string; fr: string; en: string };
}

export interface Domain {
  id: string;
  number: string;
  title: { es: string; fr: string; en: string };
  description: { es: string; fr: string; en: string };
  items: DomainItem[];
  groups?: DomainGroup[];
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
  // ===== DOMINIO 02 - MULTICANAL =====
  {
    id: "multicanal",
    number: "02",
    title: { es: "Multicanal", fr: "Multicanal", en: "Multichannel" },
    description: {
      es: "Canales de atención presencial y digital: agencias, internet, móvil, USSD y SMS.",
      fr: "Canaux de service en présentiel et digital : agences, internet, mobile, USSD et SMS.",
      en: "In-person and digital service channels: agencies, internet, mobile, USSD, and SMS.",
    },
    groups: [
      { id: "agencia", title: { es: "Agencia", fr: "Agence", en: "Agency" } },
      { id: "banca-distancia", title: { es: "Banca a Distancia", fr: "Banque à distance", en: "Remote Banking" } },
    ],
    items: [
      { es: "Puesto de Trabajo", fr: "Poste de travail", en: "Workstation", group: "agencia", status: "cubierto", scope: { es: "SAF UPV 7.0 - Módulo de operaciones de agencia incluido en propuesta.", fr: "SAF UPV 7.0 - Module d'opérations d'agence inclus dans la proposition.", en: "SAF UPV 7.0 - Agency operations module included in proposal." } },
      { es: "Operaciones de Ventanilla", fr: "Opérations de guichet", en: "Counter Operations", group: "agencia", status: "cubierto", scope: { es: "Depósitos, retiros, consultas, transferencias entre cuentas.", fr: "Dépôts, retraits, consultations, virements entre comptes.", en: "Deposits, withdrawals, inquiries, inter-account transfers." } },
      { es: "Cambio Manual de Divisas", fr: "Change manuel", en: "Manual Currency Exchange", group: "agencia", status: "cubierto", scope: { es: "Funcionalidad básica disponible, verificar parametrización FCFA.", fr: "Fonctionnalité de base disponible, vérifier le paramétrage FCFA.", en: "Basic functionality available, verify FCFA parameterization." } },
      { es: "Internet Banking", fr: "Internet Banking", en: "Internet Banking", group: "banca-distancia", status: "cubierto", scope: { es: "NO incluido en propuesta - Módulo separado requiere cotización adicional.", fr: "NON inclus dans la proposition - Module séparé nécessite un devis additionnel.", en: "NOT included in proposal - Separate module requires additional quote." } },
      { es: "Banca Móvil", fr: "Mobile Banking", en: "Mobile Banking", group: "banca-distancia", status: "cubierto", scope: { es: "NO incluido en propuesta - Módulo separado requiere cotización adicional.", fr: "NON inclus dans la proposition - Module séparé nécessite un devis additionnel.", en: "NOT included in proposal - Separate module requires additional quote." } },
      { es: "SMS / Alertas", fr: "SMS / Alertes", en: "SMS / Alerts", group: "banca-distancia", status: "cubierto", scope: { es: "NO incluido en propuesta - Módulo separado requiere cotización adicional.", fr: "NON inclus dans la proposition - Module séparé nécessite un devis additionnel.", en: "NOT included in proposal - Separate module requires additional quote." } },
    ],
  },
  // ===== DOMINIO 03 - MARKETING Y COMERCIAL =====
  {
    id: "marketing",
    number: "03",
    title: { es: "Marketing y Comercial", fr: "Marketing et Commercial", en: "Marketing & Commercial" },
    description: {
      es: "Herramientas de gestión comercial, campañas, prospectos y segmentación de clientes.",
      fr: "Outils de gestion commerciale, campagnes, prospects et segmentation des clients.",
      en: "Commercial management tools, campaigns, prospects, and customer segmentation.",
    },
    groups: [
      { id: "marketing", title: { es: "Marketing", fr: "Marketing", en: "Marketing" } },
      { id: "comercial", title: { es: "Comercial", fr: "Commercial", en: "Commercial" } },
    ],
    items: [
      { es: "Archivo de Prospectos", fr: "Fichier prospects", en: "Prospect File", group: "marketing", status: "cubierto", scope: { es: "NO incluido - Funcionalidad CRM separada requiere cotización.", fr: "NON inclus - Fonctionnalité CRM séparée nécessite un devis.", en: "NOT included - Separate CRM functionality requires quote." } },
      { es: "Segmentación de Clientes", fr: "Segmentation clientèle", en: "Customer Segmentation", group: "marketing", status: "cubierto", scope: { es: "Reportes básicos disponibles, segmentación avanzada no incluida.", fr: "Rapports de base disponibles, segmentation avancée non incluse.", en: "Basic reports available, advanced segmentation not included." } },
      { es: "Explotación del Expediente del Cliente", fr: "Exploitation du dossier client", en: "Client File Exploitation", group: "comercial", status: "cubierto", scope: { es: "Administración de miembros incluida en módulos de consolidación.", fr: "Administration des membres incluse dans les modules de consolidation.", en: "Member administration included in consolidation modules." } },
      { es: "Carteras Comerciales", fr: "Portefeuilles commerciaux", en: "Commercial Portfolios", group: "comercial", status: "cubierto", scope: { es: "NO incluido - Módulo CRM separado requiere cotización.", fr: "NON inclus - Module CRM séparé nécessite un devis.", en: "NOT included - Separate CRM module requires quote." } },
      { es: "Gestión de Eventos", fr: "Gestion événementielle", en: "Event Management", group: "comercial", status: "cubierto", scope: { es: "NO incluido en propuesta.", fr: "NON inclus dans la proposition.", en: "NOT included in proposal." } },
      { es: "Seguimiento de Actividad del Asesor", fr: "Suivi d'activité du conseiller", en: "Advisor Activity Tracking", group: "comercial", status: "cubierto", scope: { es: "NO incluido - Módulo CRM separado requiere cotización.", fr: "NON inclus - Module CRM séparé nécessite un devis.", en: "NOT included - Separate CRM module requires quote." } },
    ],
  },
  // ===== DOMINIO 04 - REFERENCIAL DE TERCEROS =====
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
      { es: "El/Los Referencial(es)", fr: "Le(s) référentiel(s)", en: "Reference(s)", status: "cubierto", scope: { es: "Administración de miembros - Módulo incluido en consolidación.", fr: "Administration des membres - Module inclus dans la consolidation.", en: "Member administration - Module included in consolidation." } },
      { es: "Referencial de Cuentas", fr: "Référentiel Comptes", en: "Account Reference", status: "cubierto", scope: { es: "Cuentas de ahorro, DAT - Incluido.", fr: "Comptes d'épargne, DAT - Inclus.", en: "Savings accounts, term deposits - Included." } },
      { es: "Referencial de Contratos", fr: "Référentiel contrats", en: "Contract Reference", status: "cubierto", scope: { es: "Préstamos, créditos - Incluido.", fr: "Prêts, crédits - Inclus.", en: "Loans, credits - Included." } },
      { es: "Referencial de Contactos", fr: "Référentiel contacts", en: "Contact Reference", status: "cubierto", scope: { es: "Datos básicos de contacto incluidos en ficha de socio.", fr: "Données de base de contact incluses dans la fiche du membre.", en: "Basic contact data included in member file." } },
    ],
  },
  // ===== DOMINIO 05 - GESTION DE CLIENTES =====
  {
    id: "clientes",
    number: "05",
    title: { es: "Gestión de Clientes", fr: "Gestion des Clients", en: "Client Management" },
    description: {
      es: "Ciclo de vida del cliente: tarifación, rentabilidad, KYC, riesgos, garantías y gestión jurídica.",
      fr: "Cycle de vie du client : tarification, rentabilité, KYC, risques, garanties et gestion juridique.",
      en: "Customer lifecycle: pricing, profitability, KYC, risks, guarantees, and legal management.",
    },
    groups: [
      { id: "gestion", title: { es: "Gestión", fr: "Gestion", en: "Management" } },
      { id: "riesgos", title: { es: "Riesgos", fr: "Risques", en: "Risks" } },
      { id: "juridico", title: { es: "Jurídico", fr: "Juridique", en: "Legal" } },
    ],
    items: [
      { es: "Tarifación", fr: "Tarification", en: "Pricing", group: "gestion", status: "cubierto", scope: { es: "Parametrización de productos incluida.", fr: "Paramétrage des produits inclus.", en: "Product parameterization included." } },
      { es: "Rentabilidad", fr: "Rentabilité", en: "Profitability", group: "gestion", status: "cubierto", scope: { es: "Reportes básicos, análisis avanzado no incluido.", fr: "Rapports de base, analyse avancée non incluse.", en: "Basic reports, advanced analysis not included." } },
      { es: "KYC (Conoce a tu Cliente)", fr: "KYC (Connaissance du client)", en: "KYC (Know Your Customer)", group: "gestion", status: "cubierto", scope: { es: "Datos básicos de identificación, KYC avanzado/AML no incluido.", fr: "Données d'identification de base, KYC avancé/AML non inclus.", en: "Basic ID data, advanced KYC/AML not included." } },
      { es: "Sobregiros, Incidentes", fr: "Dépassements, Incidents", en: "Overdrafts, Incidents", group: "riesgos", status: "cubierto", scope: { es: "Control básico de sobregiros incluido.", fr: "Contrôle de base des dépassements inclus.", en: "Basic overdraft control included." } },
      { es: "Garantías", fr: "Garanties", en: "Guarantees", group: "riesgos", status: "cubierto", scope: { es: "NO incluido - Módulo Gestión Garantías separado requiere cotización.", fr: "NON inclus - Module Gestion des Garanties séparé nécessite un devis.", en: "NOT included - Separate Guarantee Management module requires quote." } },
      { es: "Compromisos", fr: "Engagements", en: "Commitments", group: "riesgos", status: "cubierto", scope: { es: "Gestión básica de compromisos en módulo préstamos.", fr: "Gestion de base des engagements dans le module prêts.", en: "Basic commitment management in loans module." } },
      { es: "Calificación/Scoring", fr: "Cotation", en: "Scoring/Rating", group: "riesgos", status: "cubierto", scope: { es: "NO incluido - Módulo Credit Scoring separado requiere cotización.", fr: "NON inclus - Module Credit Scoring séparé nécessite un devis.", en: "NOT included - Separate Credit Scoring module requires quote." } },
      { es: "Contencioso", fr: "Contentieux", en: "Litigation", group: "juridico", status: "cubierto", scope: { es: "NO incluido - Módulo Gestión Contencioso separado requiere cotización.", fr: "NON inclus - Module Gestion Contentieux séparé nécessite un devis.", en: "NOT included - Separate Litigation Management module requires quote." } },
      { es: "Sucesiones", fr: "Successions", en: "Successions", group: "juridico", status: "cubierto", scope: { es: "NO incluido en propuesta.", fr: "NON inclus dans la proposition.", en: "NOT included in proposal." } },
      { es: "Embargos, Notificación a Terceros", fr: "Saisie arrêt, Avis à tiers détenteur", en: "Seizures, Third-Party Notices", group: "juridico", status: "cubierto", scope: { es: "NO incluido - Módulo ATD separado requiere cotización.", fr: "NON inclus - Module ATD séparé nécessite un devis.", en: "NOT included - Separate ATD module requires quote." } },
      { es: "Reclamaciones", fr: "Réclamations", en: "Claims", group: "juridico", status: "cubierto", scope: { es: "NO incluido en propuesta.", fr: "NON inclus dans la proposition.", en: "NOT included in proposal." } },
    ],
  },
  // ===== DOMINIO 06 - PRODUCTOS Y SERVICIOS =====
  {
    id: "productos",
    number: "06",
    title: { es: "Productos y Servicios", fr: "Produits et Services", en: "Products & Services" },
    description: {
      es: "Catálogo completo de productos bancarios: depósitos, ahorro, créditos y catálogo.",
      fr: "Catalogue complet de produits bancaires : dépôts, épargne, crédits et catalogue.",
      en: "Full banking product catalog: deposits, savings, loans, and catalog.",
    },
    groups: [
      { id: "depositos", title: { es: "Depósitos", fr: "Dépôts", en: "Deposits" } },
      { id: "ahorro", title: { es: "Ahorro", fr: "Épargne", en: "Savings" } },
      { id: "creditos", title: { es: "Créditos", fr: "Crédits", en: "Credits" } },
      { id: "catalogo", title: { es: "Catálogo de Productos", fr: "Catalogue Produits", en: "Product Catalog" } },
    ],
    items: [
      { es: "Depósito a la Vista, Cuenta Corriente", fr: "Dépôt à vue, compte courant", en: "Demand Deposit, Current Account", group: "depositos", status: "cubierto", scope: { es: "Cuentas de ahorro - Módulo incluido en consolidación.", fr: "Comptes d'épargne - Module inclus dans la consolidation.", en: "Savings accounts - Module included in consolidation." } },
      { es: "Depósito a Plazo Fijo (DAT)", fr: "Dépôt à terme", en: "Term Deposit (TD)", group: "ahorro", status: "cubierto", scope: { es: "DAT - Módulo explícito incluido en propuesta.", fr: "DAT - Module explicite inclus dans la proposition.", en: "TD - Explicit module included in proposal." } },
      { es: "Cuenta de Ahorro en Libreta", fr: "Compte épargne sur livret", en: "Passbook Savings Account", group: "ahorro", status: "cubierto", scope: { es: "Cuentas de ahorro - Módulo incluido.", fr: "Comptes d'épargne - Module inclus.", en: "Savings accounts - Module included." } },
      { es: "Crédito Personal", fr: "Crédit personnel", en: "Personal Loan", group: "creditos", status: "cubierto", scope: { es: "Préstamos - Módulo incluido en consolidación.", fr: "Prêts - Module inclus dans la consolidation.", en: "Loans - Module included in consolidation." } },
      { es: "Crédito Inmobiliario", fr: "Crédit immobilier", en: "Mortgage", group: "creditos", status: "cubierto", scope: { es: "Préstamos - Configurable por tipo de producto.", fr: "Prêts - Configurable par type de produit.", en: "Loans - Configurable by product type." } },
      { es: "Crédito Profesional", fr: "Crédit professionnel", en: "Professional Loan", group: "creditos", status: "cubierto", scope: { es: "Préstamos - Configurable por tipo de producto.", fr: "Prêts - Configurable par type de produit.", en: "Loans - Configurable by product type." } },
      { es: "Avales/Fianzas", fr: "Cautions", en: "Sureties/Guarantees", group: "creditos", status: "cubierto", scope: { es: "Funcionalidad básica, gestión avanzada no incluida.", fr: "Fonctionnalité de base, gestion avancée non incluse.", en: "Basic functionality, advanced management not included." } },
      { es: "Compromiso por Firma", fr: "Engagement par signature", en: "Signature Commitment", group: "creditos", status: "cubierto", scope: { es: "Funcionalidad básica disponible.", fr: "Fonctionnalité de base disponible.", en: "Basic functionality available." } },
      { es: "Sobregiro", fr: "Découvert", en: "Overdraft", group: "creditos", status: "cubierto", scope: { es: "Incluido en módulo de cuentas.", fr: "Inclus dans le module de comptes.", en: "Included in accounts module." } },
      { es: "Gestión de Balances", fr: "Gestion des bilans", en: "Balance Management", group: "creditos", status: "cubierto", scope: { es: "Incluido en contabilidad.", fr: "Inclus dans la comptabilité.", en: "Included in accounting." } },
      { es: "Parametrización de Productos", fr: "Paramétrage des produits", en: "Product Parameterization", group: "catalogo", status: "cubierto", scope: { es: "EXCLUIDO Art. 6: Módulos de parametrización NO incluidos en proceso de consolidación.", fr: "EXCLU Art. 6 : Modules de paramétrage NON inclus dans le processus de consolidation.", en: "EXCLUDED Art. 6: Parameterization modules NOT included in consolidation process." } },
      { es: "Creación de Nuevos Productos", fr: "Création de nouveaux produits", en: "New Product Creation", group: "catalogo", status: "cubierto", scope: { es: "EXCLUIDO Art. 6: Módulos de parametrización NO incluidos en proceso de consolidación.", fr: "EXCLU Art. 6 : Modules de paramétrage NON inclus dans le processus de consolidation.", en: "EXCLUDED Art. 6: Parameterization modules NOT included in consolidation process." } },
    ],
  },
  // ===== DOMINIO 07 - INTERCAMBIOS EXTERNOS =====
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
      { es: "Intercambios con Organismos de Tutela (BCEAO, etc.)", fr: "Échanges avec les organes de tutelle", en: "Exchanges with Supervisory Bodies (BCEAO, etc.)", status: "cubierto", scope: { es: "Reportes regulatorios ilimitados incluidos en propuesta. Actualizaciones normativas ilimitadas.", fr: "Rapports réglementaires illimités inclus dans la proposition. Mises à jour normatives illimitées.", en: "Unlimited regulatory reports included in proposal. Unlimited regulatory updates." } },
    ],
  },
  // ===== DOMINIO 08 - FUNCIONES DE SOPORTE =====
  {
    id: "soporte",
    number: "08",
    title: { es: "Funciones de Soporte", fr: "Fonctions Support", en: "Support Functions" },
    description: {
      es: "Contabilidad, RRHH, control general, finanzas y logística.",
      fr: "Comptabilité, RH, contrôle général, finances et logistique.",
      en: "Accounting, HR, general control, finance, and logistics.",
    },
    groups: [
      { id: "contabilidad", title: { es: "Contabilidad", fr: "Comptabilités", en: "Accounting" } },
      { id: "rrhh", title: { es: "Recursos Humanos", fr: "Ressources Humaines", en: "Human Resources" } },
      { id: "control", title: { es: "Control General", fr: "Contrôle général", en: "General Control" } },
      { id: "finanzas", title: { es: "Finanzas y Gestión", fr: "Finances & Gestion", en: "Finance & Management" } },
      { id: "logistica", title: { es: "Logística", fr: "Logistique", en: "Logistics" } },
    ],
    items: [
      { es: "Contabilidad General", fr: "Comptabilité générale", en: "General Accounting", group: "contabilidad", status: "cubierto", scope: { es: "Contabilidad - Módulo incluido en consolidación.", fr: "Comptabilité - Module inclus dans la consolidation.", en: "Accounting - Module included in consolidation." } },
      { es: "Contabilidad Auxiliar", fr: "Comptabilité auxiliaire", en: "Subsidiary Accounting", group: "contabilidad", status: "cubierto", scope: { es: "Incluido en módulo contabilidad.", fr: "Inclus dans le module comptabilité.", en: "Included in accounting module." } },
      { es: "Activos Fijos", fr: "Immobilisations", en: "Fixed Assets", group: "contabilidad", status: "cubierto", scope: { es: "NO incluido - Módulo Inmobilizaciones separado requiere cotización.", fr: "NON inclus - Module Immobilisations séparé nécessite un devis.", en: "NOT included - Separate Fixed Assets module requires quote." } },
      { es: "Conciliación", fr: "Lettrage", en: "Reconciliation", group: "contabilidad", status: "cubierto", scope: { es: "NO incluido - Módulo separado requiere cotización.", fr: "NON inclus - Module séparé nécessite un devis.", en: "NOT included - Separate module requires quote." } },
      { es: "Compras - Inventarios", fr: "Achats - Stocks", en: "Purchases - Inventory", group: "contabilidad", status: "cubierto", scope: { es: "NO incluido - Módulo ERP separado requiere cotización.", fr: "NON inclus - Module ERP séparé nécessite un devis.", en: "NOT included - Separate ERP module requires quote." } },
      { es: "Cierre de Cuentas, Intereses", fr: "Arrêté de comptes, agios", en: "Account Closing, Interest", group: "contabilidad", status: "cubierto", scope: { es: "Incluido en módulos de ahorro y préstamos.", fr: "Inclus dans les modules d'épargne et de prêts.", en: "Included in savings and loans modules." } },
      { es: "Nómina", fr: "Paie", en: "Payroll", group: "rrhh", status: "cubierto", scope: { es: "NO incluido - Módulo RRHH/Paie separado requiere cotización.", fr: "NON inclus - Module RH/Paie séparé nécessite un devis.", en: "NOT included - Separate HR/Payroll module requires quote." } },
      { es: "Gestión del Personal", fr: "Gestion du personnel", en: "Staff Management", group: "rrhh", status: "cubierto", scope: { es: "Formación, promoción, reclutamiento. NO incluido - Módulo RRHH separado requiere cotización.", fr: "Formation, promotion, recrutement. NON inclus - Module RH séparé nécessite un devis.", en: "Training, promotion, recruitment. NOT included - Separate HR module requires quote." } },
      { es: "Estructura de la Red NYESIGISO", fr: "Structure du réseau", en: "NYESIGISO Network Structure", group: "control", status: "cubierto", scope: { es: "Configuración de agencias incluida en propuesta.", fr: "Configuration des agences incluse dans la proposition.", en: "Agency configuration included in proposal." } },
      { es: "Autorizaciones/Permisos", fr: "Habilitations", en: "Authorizations/Permissions", group: "control", status: "cubierto", scope: { es: "EXCLUIDO Art. 6: Módulos de SEGURIDAD NO incluidos en proceso de consolidación.", fr: "EXCLU Art. 6 : Modules de SÉCURITÉ NON inclus dans le processus de consolidation.", en: "EXCLUDED Art. 6: SECURITY modules NOT included in consolidation process." } },
      { es: "Delegaciones", fr: "Délégations", en: "Delegations", group: "control", status: "cubierto", scope: { es: "EXCLUIDO Art. 6: Módulos de SEGURIDAD NO incluidos en proceso de consolidación.", fr: "EXCLU Art. 6 : Modules de SÉCURITÉ NON inclus dans le processus de consolidation.", en: "EXCLUDED Art. 6: SECURITY modules NOT included in consolidation process." } },
      { es: "Inspección", fr: "Inspection", en: "Inspection", group: "control", status: "cubierto", scope: { es: "NO incluido en propuesta.", fr: "NON inclus dans la proposition.", en: "NOT included in proposal." } },
      { es: "Control y Trazabilidad", fr: "Contrôle & traçabilité", en: "Control & Traceability", group: "control", status: "cubierto", scope: { es: "EXCLUIDO Art. 6: Módulos de SEGURIDAD NO incluidos en proceso de consolidación.", fr: "EXCLU Art. 6 : Modules de SÉCURITÉ NON inclus dans le processus de consolidation.", en: "EXCLUDED Art. 6: SECURITY modules NOT included in consolidation process." } },
      { es: "Tesorería", fr: "Trésorerie", en: "Treasury", group: "finanzas", status: "cubierto", scope: { es: "Bancos - Módulo básico incluido en propuesta.", fr: "Banques - Module de base inclus dans la proposition.", en: "Banks - Basic module included in proposal." } },
      { es: "Proveedores", fr: "Fournisseurs", en: "Suppliers", group: "finanzas", status: "cubierto", scope: { es: "NO incluido - Módulo ERP separado requiere cotización.", fr: "NON inclus - Module ERP séparé nécessite un devis.", en: "NOT included - Separate ERP module requires quote." } },
      { es: "Gestión de Recursos, Refinanciamiento", fr: "Gestion des ressources, refinancement", en: "Resource Management, Refinancing", group: "finanzas", status: "cubierto", scope: { es: "Funcionalidad básica en módulo Bancos.", fr: "Fonctionnalité de base dans le module Banques.", en: "Basic functionality in Banks module." } },
      { es: "Obras y Proyectos", fr: "Chantiers & projets", en: "Projects & Works", group: "logistica", status: "cubierto", scope: { es: "NO incluido - Módulo ERP separado requiere cotización.", fr: "NON inclus - Module ERP séparé nécessite un devis.", en: "NOT included - Separate ERP module requires quote." } },
      { es: "Archivo", fr: "Archivage", en: "Archiving", group: "logistica", status: "cubierto", scope: { es: "NO incluido - Módulo GED separado requiere cotización.", fr: "NON inclus - Module GED séparé nécessite un devis.", en: "NOT included - Separate DMS module requires quote." } },
    ],
  },
  // ===== DOMINIO 09 - PILOTAJE Y DECISION =====
  {
    id: "pilotaje",
    number: "09",
    title: { es: "Pilotaje y Decisión", fr: "Pilotage et Décision", en: "Steering & Decision" },
    description: {
      es: "Cuadros de mando, reportes regulatorios, contabilidad analítica, presupuesto y BI.",
      fr: "Tableaux de bord, rapports réglementaires, comptabilité analytique, budget et BI.",
      en: "Dashboards, regulatory reports, analytical accounting, budget, and BI.",
    },
    groups: [
      { id: "pilotaje", title: { es: "Pilotaje", fr: "Pilotage", en: "Steering" } },
      { id: "decision", title: { es: "Apoyo a la Decisión", fr: "Aide à la décision", en: "Decision Support" } },
    ],
    items: [
      { es: "Tableros de Control", fr: "Tableaux de bord", en: "Dashboards", group: "pilotaje", status: "cubierto", scope: { es: "Reportes operativos ilimitados incluidos, dashboards avanzados no incluidos.", fr: "Rapports opérationnels illimités inclus, tableaux de bord avancés non inclus.", en: "Unlimited operational reports included, advanced dashboards not included." } },
      { es: "Saldos de Clientes", fr: "Encours clients", en: "Client Balances", group: "pilotaje", status: "cubierto", scope: { es: "Consultas y reportes incluidos.", fr: "Consultations et rapports inclus.", en: "Inquiries and reports included." } },
      { es: "Contabilidad Analítica", fr: "Comptabilité analytique", en: "Analytical Accounting", group: "pilotaje", status: "cubierto", scope: { es: "NO incluido - Módulo BI separado requiere cotización.", fr: "NON inclus - Module BI séparé nécessite un devis.", en: "NOT included - Separate BI module requires quote." } },
      { es: "Presupuesto", fr: "Budget", en: "Budget", group: "pilotaje", status: "cubierto", scope: { es: "NO incluido - Módulo ERP separado requiere cotización.", fr: "NON inclus - Module ERP séparé nécessite un devis.", en: "NOT included - Separate ERP module requires quote." } },
      { es: "Declaraciones Regulatorias BCEAO", fr: "Déclarations réglementaires BCEAO", en: "BCEAO Regulatory Declarations", group: "pilotaje", status: "cubierto", scope: { es: "Reportes regulatorios ilimitados incluidos en propuesta.", fr: "Rapports réglementaires illimités inclus dans la proposition.", en: "Unlimited regulatory reports included in proposal." } },
      { es: "DataWarehouse", fr: "DataWarehouse", en: "DataWarehouse", group: "decision", status: "cubierto", scope: { es: "NO incluido - Módulo BI separado requiere cotización.", fr: "NON inclus - Module BI séparé nécessite un devis.", en: "NOT included - Separate BI module requires quote." } },
      { es: "Herramientas de Apoyo a la Decisión (BI)", fr: "Outils d'aide à la décision", en: "Decision Support Tools (BI)", group: "decision", status: "cubierto", scope: { es: "NO incluido - Módulo BI separado requiere cotización.", fr: "NON inclus - Module BI séparé nécessite un devis.", en: "NOT included - Separate BI module requires quote." } },
    ],
  },
  // ===== DOMINIO 10 - INTERCAMBIOS INTERNOS =====
  {
    id: "intercambios-int",
    number: "10",
    title: { es: "Intercambios Internos", fr: "Échanges Internes", en: "Internal Exchanges" },
    description: {
      es: "Workflow, gestión documental, web services y APIs.",
      fr: "Workflow, gestion documentaire, web services et APIs.",
      en: "Workflow, document management, web services, and APIs.",
    },
    items: [
      { es: "Workflow", fr: "Workflow", en: "Workflow", status: "cubierto", scope: { es: "NO incluido - Módulo Workflow separado requiere cotización.", fr: "NON inclus - Module Workflow séparé nécessite un devis.", en: "NOT included - Separate Workflow module requires quote." } },
      { es: "Gestión Electrónica de Documentos (GED)", fr: "Gestion électronique de documents", en: "Electronic Document Management (EDM)", status: "cubierto", scope: { es: "NO incluido - Módulo GED separado requiere cotización.", fr: "NON inclus - Module GED séparé nécessite un devis.", en: "NOT included - Separate DMS module requires quote." } },
      { es: "Web Services", fr: "Web Services", en: "Web Services", status: "cubierto", scope: { es: "NO incluido - Módulo APIs separado requiere cotización.", fr: "NON inclus - Module APIs séparé nécessite un devis.", en: "NOT included - Separate APIs module requires quote." } },
      { es: "APIs", fr: "APIs", en: "APIs", status: "cubierto", scope: { es: "NO incluido - Módulo APIs separado requiere cotización.", fr: "NON inclus - Module APIs séparé nécessite un devis.", en: "NOT included - Separate APIs module requires quote." } },
    ],
  },
  // ===== DOMINIO 11 - CARACTERISTICAS TECNICAS =====
  {
    id: "tecnicas",
    number: "11",
    title: { es: "Características Técnicas", fr: "Caractéristiques Techniques", en: "Technical Characteristics" },
    description: {
      es: "Arquitectura funcional, aplicativa y técnica, plataformas, lenguajes, volumetría y urbanización.",
      fr: "Architecture fonctionnelle, applicative et technique, plateformes, langages, volumétrie et urbanisation.",
      en: "Functional, application, and technical architecture, platforms, languages, volumetry, and urbanization.",
    },
    items: [
      { es: "Arquitectura Funcional General", fr: "Architecture fonctionnelle générale", en: "General Functional Architecture", status: "cubierto", scope: { es: "Arquitectura cliente-servidor, BD centralizada SAF UPV 7.0.", fr: "Architecture client-serveur, BD centralisée SAF UPV 7.0.", en: "Client-server architecture, centralized DB SAF UPV 7.0." } },
      { es: "Arquitectura Aplicativa", fr: "Architecture applicative", en: "Application Architecture", status: "cubierto", scope: { es: "SAF UPV 7.0 - Módulos integrados.", fr: "SAF UPV 7.0 - Modules intégrés.", en: "SAF UPV 7.0 - Integrated modules." } },
      { es: "Arquitectura Técnica", fr: "Architecture technique", en: "Technical Architecture", status: "cubierto", scope: { es: "Windows Server 2012+, SQL Server 2019+.", fr: "Windows Server 2012+, SQL Server 2019+.", en: "Windows Server 2012+, SQL Server 2019+." } },
      { es: "Plataforma de Origen", fr: "Plate-forme d'origine", en: "Original Platform", status: "cubierto", scope: { es: "SAF 2000 V5 soportado para migración.", fr: "SAF 2000 V5 supporté pour la migration.", en: "SAF 2000 V5 supported for migration." } },
      { es: "Plataforma Actual", fr: "Plate-forme actuelle", en: "Current Platform", status: "cubierto", scope: { es: "SQL Server 2019+, Windows Server 2012+.", fr: "SQL Server 2019+, Windows Server 2012+.", en: "SQL Server 2019+, Windows Server 2012+." } },
      { es: "Puesto Cliente", fr: "Poste client", en: "Client Workstation", status: "cubierto", scope: { es: "Windows 10+, navegador web compatible.", fr: "Windows 10+, navigateur web compatible.", en: "Windows 10+, compatible web browser." } },
      { es: "Lenguajes", fr: "Langages", en: "Languages", status: "cubierto", scope: { es: "Desarrollo propietario SYSDE.", fr: "Développement propriétaire SYSDE.", en: "SYSDE proprietary development." } },
      { es: "Modo de Funcionamiento", fr: "Mode de fonctionnement", en: "Operating Mode", status: "cubierto", scope: { es: "Tiempo real con BD centralizada post-consolidación.", fr: "Temps réel avec BD centralisée post-consolidation.", en: "Real-time with centralized DB post-consolidation." } },
      { es: "Volumetría", fr: "Volumétrie", en: "Volumetry", status: "cubierto", scope: { es: "Soporta 87+ BD, 300GB+, 784K cuentas.", fr: "Supporte 87+ BD, 300GB+, 784K comptes.", en: "Supports 87+ DBs, 300GB+, 784K accounts." } },
      { es: "Operabilidad", fr: "Exploitabilité", en: "Operability", status: "cubierto", scope: { es: "Batch fin de día, procesos automáticos.", fr: "Batch fin de journée, processus automatiques.", en: "End-of-day batch, automatic processes." } },
      { es: "Urbanización", fr: "Urbanisation", en: "Urbanization", status: "cubierto", scope: { es: "APIs disponibles bajo cotización adicional.", fr: "APIs disponibles sous devis additionnel.", en: "APIs available under additional quote." } },
      { es: "Uso de Datos", fr: "Utilisation des données", en: "Data Usage", status: "cubierto", scope: { es: "Reportes operativos ilimitados.", fr: "Rapports opérationnels illimités.", en: "Unlimited operational reports." } },
    ],
  },
  // ===== DOMINIO 12 - PRESTACIONES ANEXAS =====
  {
    id: "anexas",
    number: "12",
    title: { es: "Prestaciones Anexas", fr: "Prestations Annexes", en: "Additional Services" },
    description: {
      es: "Soporte, integración, migración, formación, documentación, metodología y socios.",
      fr: "Support, intégration, migration, formation, documentation, méthodologie et partenaires.",
      en: "Support, integration, migration, training, documentation, methodology, and partners.",
    },
    items: [
      { es: "Soporte Funcional y Técnico", fr: "Support fonctionnel & technique", en: "Functional & Technical Support", status: "cubierto", scope: { es: "Soporte ilimitado incluido con contrato de mantenimiento activo.", fr: "Support illimité inclus avec contrat de maintenance actif.", en: "Unlimited support included with active maintenance contract." } },
      { es: "Integración", fr: "Intégration", en: "Integration", status: "cubierto", scope: { es: "Acompañamiento test a producción incluido.", fr: "Accompagnement test à production inclus.", en: "Test-to-production support included." } },
      { es: "Migración de Datos y Fusión de BD", fr: "Migration des données et fusion des BD", en: "Data Migration & DB Merger", status: "cubierto", scope: { es: "Herramienta consolidación 87 BD incluida.", fr: "Outil de consolidation 87 BD inclus.", en: "87 DB consolidation tool included." } },
      { es: "Formación", fr: "Formation", en: "Training", status: "cubierto", scope: { es: "Capacitación sobre herramienta consolidación incluida.", fr: "Formation sur l'outil de consolidation incluse.", en: "Training on consolidation tool included." } },
      { es: "Documentación Funcional y Técnica", fr: "Documentation fonctionnelle et technique", en: "Functional & Technical Documentation", status: "cubierto", scope: { es: "Manuales disponibles.", fr: "Manuels disponibles.", en: "Manuals available." } },
      { es: "Asistencias Diversas", fr: "Assistances diverses", en: "Various Assistance", status: "cubierto", scope: { es: "Personalizaciones ilimitadas dentro del alcance de módulos incluidos.", fr: "Personnalisations illimitées dans le périmètre des modules inclus.", en: "Unlimited customizations within included module scope." } },
      { es: "Metodología de Implementación", fr: "Démarche de mise en œuvre", en: "Implementation Methodology", status: "cubierto", scope: { es: "30 días hábiles, cronograma detallado disponible.", fr: "30 jours ouvrables, chronogramme détaillé disponible.", en: "30 business days, detailed timeline available." } },
      { es: "Socios Susceptibles de Intervenir", fr: "Partenaires susceptibles d'intervenir", en: "Potential Partners", status: "cubierto", scope: { es: "Smart-Tech Mali disponible como integrador local.", fr: "Smart-Tech Mali disponible comme intégrateur local.", en: "Smart-Tech Mali available as local integrator." } },
    ],
  },
];
