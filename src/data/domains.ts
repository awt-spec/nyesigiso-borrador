export interface DomainItem {
  es: string;
  fr: string;
  en: string;
}

export interface Domain {
  id: string;
  number: string;
  title: { es: string; fr: string; en: string };
  items: DomainItem[];
}

export const domains: Domain[] = [
  {
    id: "presentacion",
    number: "I",
    title: {
      es: "Presentación General",
      fr: "Présentation Générale",
      en: "General Presentation",
    },
    items: [
      { es: "Identidad del editor", fr: "Identité de l'éditeur", en: "Publisher Identity" },
      { es: "Referencias del editor", fr: "Références de l'éditeur", en: "Publisher References" },
      { es: "Arquitectura funcional global", fr: "Architecture fonctionnelle globale", en: "Global Functional Architecture" },
      { es: "Arquitectura técnica global", fr: "Architecture technique globale", en: "Global Technical Architecture" },
      { es: "Modelo de datos", fr: "Modèle de données", en: "Data Model" },
      { es: "Principios de parametrización", fr: "Principes de paramétrage", en: "Parameterization Principles" },
      { es: "Seguridad y control de acceso", fr: "Sécurité et contrôle d'accès", en: "Security and Access Control" },
      { es: "Pistas de auditoría", fr: "Pistes d'audit", en: "Audit Trails" },
      { es: "Documentación y ayuda en línea", fr: "Documentation et aide en ligne", en: "Documentation and Online Help" },
    ],
  },
  {
    id: "multicanal",
    number: "II",
    title: {
      es: "Multicanal",
      fr: "Multicanal",
      en: "Multichannel",
    },
    items: [
      { es: "Gestión de agencias", fr: "Gestion des agences", en: "Agency Management" },
      { es: "Operaciones en ventanilla", fr: "Opérations au guichet", en: "Counter Operations" },
      { es: "Banca a distancia — Internet Banking", fr: "Banque à distance — Internet Banking", en: "Remote Banking — Internet Banking" },
      { es: "Banca a distancia — Mobile Banking", fr: "Banque à distance — Mobile Banking", en: "Remote Banking — Mobile Banking" },
      { es: "Banca a distancia — USSD", fr: "Banque à distance — USSD", en: "Remote Banking — USSD" },
      { es: "Banca a distancia — SMS Banking", fr: "Banque à distance — SMS Banking", en: "Remote Banking — SMS Banking" },
    ],
  },
  {
    id: "marketing",
    number: "III",
    title: {
      es: "Marketing y Comercial",
      fr: "Marketing et Commercial",
      en: "Marketing and Commercial",
    },
    items: [
      { es: "Gestión de campañas", fr: "Gestion des campagnes", en: "Campaign Management" },
      { es: "Gestión de prospectos", fr: "Gestion des prospects", en: "Prospect Management" },
      { es: "Gestión de oportunidades", fr: "Gestion des opportunités", en: "Opportunity Management" },
      { es: "Gestión de fuerza de ventas", fr: "Gestion de la force de vente", en: "Sales Force Management" },
      { es: "Informes comerciales", fr: "Rapports commerciaux", en: "Commercial Reports" },
      { es: "Segmentación de clientes", fr: "Segmentation des clients", en: "Customer Segmentation" },
    ],
  },
  {
    id: "referencial",
    number: "IV",
    title: {
      es: "Referencial de Terceros",
      fr: "Référentiel des Tiers",
      en: "Third-Party Reference",
    },
    items: [
      { es: "Gestión del referencial de terceros", fr: "Gestion du référentiel des tiers", en: "Third-Party Reference Management" },
      { es: "Conocimiento del cliente (KYC)", fr: "Connaissance du client (KYC)", en: "Know Your Customer (KYC)" },
      { es: "Gestión de grupos y relaciones", fr: "Gestion des groupes et relations", en: "Group and Relationship Management" },
      { es: "Deduplicación y calidad de datos", fr: "Dédoublonnage et qualité des données", en: "Deduplication and Data Quality" },
    ],
  },
  {
    id: "clientes",
    number: "V",
    title: {
      es: "Gestión de Clientes",
      fr: "Gestion des Clients",
      en: "Client Management",
    },
    items: [
      { es: "Apertura y cierre de cuentas", fr: "Ouverture et clôture de comptes", en: "Account Opening and Closing" },
      { es: "Gestión de cuentas corrientes", fr: "Gestion des comptes courants", en: "Current Account Management" },
      { es: "Gestión de firmas y poderes", fr: "Gestion des signatures et pouvoirs", en: "Signature and Power of Attorney Management" },
      { es: "Gestión de incidentes de pago", fr: "Gestion des incidents de paiement", en: "Payment Incident Management" },
      { es: "Gestión de riesgos de crédito", fr: "Gestion des risques de crédit", en: "Credit Risk Management" },
      { es: "Scoring y rating", fr: "Scoring et rating", en: "Scoring and Rating" },
      { es: "Gestión de garantías", fr: "Gestion des garanties", en: "Guarantee Management" },
      { es: "Gestión de cobros y recuperaciones", fr: "Gestion des recouvrements", en: "Collection and Recovery Management" },
      { es: "Gestión jurídica y contenciosa", fr: "Gestion juridique et contentieuse", en: "Legal and Litigation Management" },
      { es: "Conformidad y lucha contra el blanqueo", fr: "Conformité et lutte anti-blanchiment", en: "Compliance and Anti-Money Laundering" },
    ],
  },
  {
    id: "productos",
    number: "VI",
    title: {
      es: "Productos y Servicios",
      fr: "Produits et Services",
      en: "Products and Services",
    },
    items: [
      { es: "Depósitos a la vista", fr: "Dépôts à vue", en: "Demand Deposits" },
      { es: "Depósitos a plazo", fr: "Dépôts à terme", en: "Term Deposits" },
      { es: "Cuentas de ahorro", fr: "Comptes d'épargne", en: "Savings Accounts" },
      { es: "Créditos a corto plazo", fr: "Crédits à court terme", en: "Short-Term Loans" },
      { es: "Créditos a mediano y largo plazo", fr: "Crédits à moyen et long terme", en: "Medium and Long-Term Loans" },
      { es: "Créditos grupales/solidarios", fr: "Crédits groupés/solidaires", en: "Group/Solidarity Loans" },
      { es: "Microcréditos", fr: "Microcrédits", en: "Microloans" },
      { es: "Gestión de tarjetas", fr: "Gestion des cartes", en: "Card Management" },
      { es: "Transferencias y pagos", fr: "Transferts et paiements", en: "Transfers and Payments" },
      { es: "Catálogo de productos", fr: "Catalogue de produits", en: "Product Catalog" },
      { es: "Paquetes de productos", fr: "Packages de produits", en: "Product Packages" },
    ],
  },
  {
    id: "intercambios-ext",
    number: "VII",
    title: {
      es: "Intercambios Externos",
      fr: "Échanges Externes",
      en: "External Exchanges",
    },
    items: [
      { es: "Interfaces con sistemas externos (BCEAO, compensación, etc.)", fr: "Interfaces avec systèmes externes (BCEAO, compensation, etc.)", en: "Interfaces with External Systems (BCEAO, clearing, etc.)" },
    ],
  },
  {
    id: "soporte",
    number: "VIII",
    title: {
      es: "Funciones de Soporte",
      fr: "Fonctions Support",
      en: "Support Functions",
    },
    items: [
      { es: "Contabilidad general", fr: "Comptabilité générale", en: "General Accounting" },
      { es: "Contabilidad auxiliar", fr: "Comptabilité auxiliaire", en: "Subsidiary Accounting" },
      { es: "Contabilidad presupuestaria", fr: "Comptabilité budgétaire", en: "Budget Accounting" },
      { es: "Contabilidad analítica", fr: "Comptabilité analytique", en: "Cost Accounting" },
      { es: "Gestión de tesorería", fr: "Gestion de trésorerie", en: "Treasury Management" },
      { es: "Gestión de inmovilizados", fr: "Gestion des immobilisations", en: "Fixed Asset Management" },
      { es: "Gestión de RRHH", fr: "Gestion des RH", en: "HR Management" },
      { es: "Nóminas y compensaciones", fr: "Paie et rémunérations", en: "Payroll and Compensation" },
      { es: "Control de gestión", fr: "Contrôle de gestion", en: "Management Control" },
      { es: "Gestión fiscal", fr: "Gestion fiscale", en: "Tax Management" },
      { es: "Gestión de compras", fr: "Gestion des achats", en: "Procurement Management" },
      { es: "Gestión de stocks", fr: "Gestion des stocks", en: "Inventory Management" },
      { es: "Gestión logística", fr: "Gestion logistique", en: "Logistics Management" },
      { es: "Gestión de proveedores", fr: "Gestion des fournisseurs", en: "Supplier Management" },
      { es: "Reporting financiero", fr: "Reporting financier", en: "Financial Reporting" },
    ],
  },
  {
    id: "pilotaje",
    number: "IX",
    title: {
      es: "Pilotaje y Decisión",
      fr: "Pilotage et Décision",
      en: "Steering and Decision-Making",
    },
    items: [
      { es: "Cuadros de mando (dashboards)", fr: "Tableaux de bord (dashboards)", en: "Dashboards" },
      { es: "Reporting regulatorio", fr: "Reporting réglementaire", en: "Regulatory Reporting" },
      { es: "Reporting gerencial", fr: "Reporting managérial", en: "Management Reporting" },
      { es: "Análisis de rentabilidad", fr: "Analyse de rentabilité", en: "Profitability Analysis" },
      { es: "Indicadores clave de rendimiento (KPI)", fr: "Indicateurs clés de performance (KPI)", en: "Key Performance Indicators (KPI)" },
      { es: "Business Intelligence", fr: "Business Intelligence", en: "Business Intelligence" },
      { es: "Alertas y notificaciones", fr: "Alertes et notifications", en: "Alerts and Notifications" },
    ],
  },
  {
    id: "intercambios-int",
    number: "X",
    title: {
      es: "Intercambios Internos",
      fr: "Échanges Internes",
      en: "Internal Exchanges",
    },
    items: [
      { es: "Workflow y procesos internos", fr: "Workflow et processus internes", en: "Workflow and Internal Processes" },
      { es: "Gestión electrónica de documentos (GED)", fr: "Gestion électronique de documents (GED)", en: "Electronic Document Management (EDM)" },
      { es: "Mensajería interna", fr: "Messagerie interne", en: "Internal Messaging" },
      { es: "APIs y servicios web internos", fr: "APIs et services web internes", en: "Internal APIs and Web Services" },
    ],
  },
  {
    id: "tecnicas",
    number: "XI",
    title: {
      es: "Características Técnicas",
      fr: "Caractéristiques Techniques",
      en: "Technical Characteristics",
    },
    items: [
      { es: "Arquitectura multi-tenant", fr: "Architecture multi-tenant", en: "Multi-Tenant Architecture" },
      { es: "Escalabilidad horizontal y vertical", fr: "Évolutivité horizontale et verticale", en: "Horizontal and Vertical Scalability" },
      { es: "Alta disponibilidad", fr: "Haute disponibilité", en: "High Availability" },
      { es: "Plan de recuperación ante desastres (DRP)", fr: "Plan de reprise d'activité (PRA)", en: "Disaster Recovery Plan (DRP)" },
      { es: "Gestión de respaldos", fr: "Gestion des sauvegardes", en: "Backup Management" },
      { es: "Monitoreo y supervisión", fr: "Monitoring et supervision", en: "Monitoring and Supervision" },
      { es: "Gestión de logs y trazabilidad", fr: "Gestion des logs et traçabilité", en: "Log Management and Traceability" },
      { es: "Compatibilidad con estándares", fr: "Compatibilité avec les standards", en: "Standards Compatibility" },
      { es: "Integración continua / DevOps", fr: "Intégration continue / DevOps", en: "Continuous Integration / DevOps" },
      { es: "Gestión de versiones", fr: "Gestion des versions", en: "Version Management" },
      { es: "Rendimiento y optimización", fr: "Performance et optimisation", en: "Performance and Optimization" },
      { es: "Soporte multi-idioma y multi-divisa", fr: "Support multi-langue et multi-devise", en: "Multi-Language and Multi-Currency Support" },
    ],
  },
  {
    id: "anexas",
    number: "XII",
    title: {
      es: "Prestaciones Anexas",
      fr: "Prestations Annexes",
      en: "Additional Services",
    },
    items: [
      { es: "Soporte técnico y mantenimiento", fr: "Support technique et maintenance", en: "Technical Support and Maintenance" },
      { es: "Plan de migración de datos", fr: "Plan de migration des données", en: "Data Migration Plan" },
      { es: "Formación y capacitación", fr: "Formation et capacitation", en: "Training and Capacity Building" },
      { es: "Acompañamiento al cambio", fr: "Accompagnement au changement", en: "Change Management Support" },
      { es: "Garantía post-implementación", fr: "Garantie post-implémentation", en: "Post-Implementation Warranty" },
      { es: "Metodología de proyecto", fr: "Méthodologie de projet", en: "Project Methodology" },
      { es: "Gestión de proyecto y gobernanza", fr: "Gestion de projet et gouvernance", en: "Project Management and Governance" },
      { es: "Condiciones comerciales", fr: "Conditions commerciales", en: "Commercial Terms" },
    ],
  },
];
