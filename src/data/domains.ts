export type CoverageStatus = "cubierto" | "parcial" | "no-cubierto" | "excluido";

export interface DomainItem {
  es: string;
  fr: string;
  en: string;
  scope: { es: string; fr: string; en: string };
  status?: CoverageStatus;
  group?: string;
  included?: boolean; // true = included in proposal (default true)
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
          es: "SYSDE — Empresa tecnológica especializada en el sector financiero con más de 33 años desarrollando software para la industria financiera. Diseño, desarrollo, implementación y soporte de sistemas core financieros modulares.",
          fr: "SYSDE — Entreprise technologique spécialisée dans le secteur financier avec plus de 33 ans de développement de logiciels pour l'industrie financière. Conception, développement, implémentation et support de systèmes core financiers modulaires.",
          en: "SYSDE — Technology company specialized in the financial sector with over 33 years developing software for the financial industry. Design, development, implementation, and support of modular financial core systems.",
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
      { es: "Internet Banking", fr: "Internet Banking", en: "Internet Banking", group: "banca-distancia", status: "cubierto", included: false, scope: { es: "NO incluido en propuesta - Módulo separado requiere cotización adicional.", fr: "NON inclus dans la proposition - Module séparé nécessite un devis additionnel.", en: "NOT included in proposal - Separate module requires additional quote." } },
      { es: "Banca Móvil", fr: "Mobile Banking", en: "Mobile Banking", group: "banca-distancia", status: "cubierto", included: false, scope: { es: "NO incluido en propuesta - Módulo separado requiere cotización adicional.", fr: "NON inclus dans la proposition - Module séparé nécessite un devis additionnel.", en: "NOT included in proposal - Separate module requires additional quote." } },
      { es: "SMS / Alertas", fr: "SMS / Alertes", en: "SMS / Alerts", group: "banca-distancia", status: "cubierto", included: false, scope: { es: "NO incluido en propuesta - Módulo separado requiere cotización adicional.", fr: "NON inclus dans la proposition - Module séparé nécessite un devis additionnel.", en: "NOT included in proposal - Separate module requires additional quote." } },
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
      { es: "Archivo de Prospectos", fr: "Fichier prospects", en: "Prospect File", group: "marketing", status: "cubierto", included: false, scope: { es: "NO incluido - Funcionalidad CRM separada requiere cotización.", fr: "NON inclus - Fonctionnalité CRM séparée nécessite un devis.", en: "NOT included - Separate CRM functionality requires quote." } },
      { es: "Segmentación de Clientes", fr: "Segmentation clientèle", en: "Customer Segmentation", group: "marketing", status: "cubierto", scope: { es: "Reportes básicos disponibles, segmentación avanzada no incluida.", fr: "Rapports de base disponibles, segmentation avancée non incluse.", en: "Basic reports available, advanced segmentation not included." } },
      { es: "Explotación del Expediente del Cliente", fr: "Exploitation du dossier client", en: "Client File Exploitation", group: "comercial", status: "cubierto", scope: { es: "Administración de miembros incluida en módulos de consolidación.", fr: "Administration des membres incluse dans les modules de consolidation.", en: "Member administration included in consolidation modules." } },
      { es: "Carteras Comerciales", fr: "Portefeuilles commerciaux", en: "Commercial Portfolios", group: "comercial", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo CRM separado requiere cotización.", fr: "NON inclus - Module CRM séparé nécessite un devis.", en: "NOT included - Separate CRM module requires quote." } },
      { es: "Gestión de Eventos", fr: "Gestion événementielle", en: "Event Management", group: "comercial", status: "cubierto", included: false, scope: { es: "NO incluido en propuesta.", fr: "NON inclus dans la proposition.", en: "NOT included in proposal." } },
      { es: "Seguimiento de Actividad del Asesor", fr: "Suivi d'activité du conseiller", en: "Advisor Activity Tracking", group: "comercial", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo CRM separado requiere cotización.", fr: "NON inclus - Module CRM séparé nécessite un devis.", en: "NOT included - Separate CRM module requires quote." } },
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
      { es: "Garantías", fr: "Garanties", en: "Guarantees", group: "riesgos", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo Gestión Garantías separado requiere cotización.", fr: "NON inclus - Module Gestion des Garanties séparé nécessite un devis.", en: "NOT included - Separate Guarantee Management module requires quote." } },
      { es: "Compromisos", fr: "Engagements", en: "Commitments", group: "riesgos", status: "cubierto", scope: { es: "Gestión básica de compromisos en módulo préstamos.", fr: "Gestion de base des engagements dans le module prêts.", en: "Basic commitment management in loans module." } },
      { es: "Calificación/Scoring", fr: "Cotation", en: "Scoring/Rating", group: "riesgos", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo Credit Scoring separado requiere cotización.", fr: "NON inclus - Module Credit Scoring séparé nécessite un devis.", en: "NOT included - Separate Credit Scoring module requires quote." } },
      { es: "Contencioso", fr: "Contentieux", en: "Litigation", group: "juridico", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo Gestión Contencioso separado requiere cotización.", fr: "NON inclus - Module Gestion Contentieux séparé nécessite un devis.", en: "NOT included - Separate Litigation Management module requires quote." } },
      { es: "Sucesiones", fr: "Successions", en: "Successions", group: "juridico", status: "cubierto", included: false, scope: { es: "NO incluido en propuesta.", fr: "NON inclus dans la proposition.", en: "NOT included in proposal." } },
      { es: "Embargos, Notificación a Terceros", fr: "Saisie arrêt, Avis à tiers détenteur", en: "Seizures, Third-Party Notices", group: "juridico", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo ATD separado requiere cotización.", fr: "NON inclus - Module ATD séparé nécessite un devis.", en: "NOT included - Separate ATD module requires quote." } },
      { es: "Reclamaciones", fr: "Réclamations", en: "Claims", group: "juridico", status: "cubierto", included: false, scope: { es: "NO incluido en propuesta.", fr: "NON inclus dans la proposition.", en: "NOT included in proposal." } },
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
      { es: "Crédito Personal", fr: "Crédit personnel", en: "Personal Loan", group: "creditos", status: "cubierto", scope: { es: "Crédit à la Consommation / Crédit Salaire-Pension. Producto de entrada para socios de la red: financia bienes de consumo (electrodomésticos, mobiliario), bienes sociales (escolaridad, salud, ceremonias). El Crédit Salaire/Pension domicilia el reembolso contra nómina o pensión, reduciendo el riesgo de impago. Desembolso en efectivo o especie. Fórmula cuota mensual (Sistema Francés): C = P × [i(1+i)^n / ((1+i)^n − 1)]. Capacidad de pago asalariados (regla BCEAO): Cmáx = Salario Neto × 33%. Ejemplo: 1 500 000 XOF a 18 meses, 18% anual → i = 1,5%/mes → cuota = 97 842 XOF/mes. Salario mínimo requerido = 97 842 / 0,33 = 296 490 XOF/mes.", fr: "Crédit à la Consommation / Crédit Salaire-Pension. Produit d'entrée pour les membres du réseau : finance l'accès aux biens de consommation (électroménager, mobilier), biens sociaux (scolarité, santé, cérémonies). Le Crédit Salaire/Pension domicilie le remboursement sur le salaire ou la pension, réduisant le risque d'impayé. Décaissement en espèces ou en nature. Formule mensualité (Système Français) : C = P × [i(1+i)^n / ((1+i)^n − 1)]. Capacité de paiement salariés (règle BCEAO) : Cmax = Salaire Net × 33%. Exemple : 1 500 000 XOF sur 18 mois, 18% annuel → i = 1,5%/mois → mensualité = 97 842 XOF/mois. Salaire minimum requis = 97 842 / 0,33 = 296 490 XOF/mois.", en: "Crédit à la Consommation / Crédit Salaire-Pension. Entry-level product for network members: finances consumer goods (appliances, furniture), social goods (schooling, health, ceremonies). Crédit Salaire/Pension domiciles repayment against payroll or pension, reducing default risk. Disbursement in cash or in kind. Monthly installment formula (French System): C = P × [i(1+i)^n / ((1+i)^n − 1)]. Salaried payment capacity (BCEAO rule): Cmax = Net Salary × 33%. Example: 1,500,000 XOF over 18 months at 18% annual → i = 1.5%/month → installment = 97,842 XOF/month. Minimum salary required = 97,842 / 0.33 = 296,490 XOF/month." } },
      { es: "Crédito Inmobiliario", fr: "Crédit immobilier", en: "Mortgage", group: "creditos", status: "cubierto", scope: { es: "Crédit Habitat — 3 modalidades: (1) Habitat Salariés completo: terreno + construcción para empleados formales; (2) Habitat Salariés Acquisition de terrain: solo compra de terreno, plazo más corto; (3) Habitat Non-Salariés: sector informal, análisis por flujo de negocio. En Mali la titulación es compleja (titre foncier, permis d'occuper). SAF+ registra distintos tipos de garantía real según documentación disponible. LTV ajustado: LTV = (Monto Crédito / Valor Tasado) × 100 ≤ 70%. Cuota Habitat: C = P × [i(1+i)^n / ((1+i)^n − 1)]. Ejemplo terreno: 3 000 000 XOF a 5 años, 15% anual → i = 1,25%/mes, n = 60 → cuota = 71 378 XOF/mes. Para No-Asalariados: Ingreso Neto Estimado = Ventas Promedio − Costos Operativos − Obligaciones Existentes; Cmáx = Ingreso Neto × 35%.", fr: "Crédit Habitat — 3 modalités : (1) Habitat Salariés complet : terrain + construction pour employés formels ; (2) Habitat Salariés Acquisition de terrain : achat terrain uniquement, durée plus courte ; (3) Habitat Non-Salariés : secteur informel, analyse par flux d'activité. Au Mali, la titrisation est complexe (titre foncier, permis d'occuper). SAF+ enregistre différents types de garantie réelle selon la documentation disponible. LTV ajusté : LTV = (Montant Crédit / Valeur Estimée) × 100 ≤ 70%. Mensualité Habitat : C = P × [i(1+i)^n / ((1+i)^n − 1)]. Exemple terrain : 3 000 000 XOF sur 5 ans, 15% annuel → i = 1,25%/mois, n = 60 → mensualité = 71 378 XOF/mois. Pour Non-Salariés : Revenu Net Estimé = Ventes Moyennes − Coûts Opérationnels − Obligations Existantes ; Cmax = Revenu Net × 35%.", en: "Crédit Habitat — 3 modalities: (1) Habitat Salariés full: land + construction for formal employees; (2) Habitat Salariés Land Acquisition: land purchase only, shorter term; (3) Habitat Non-Salariés: informal sector, cash-flow based analysis. In Mali, land titling is complex (titre foncier, permis d'occuper). SAF+ registers different types of real guarantees per available documentation. Adjusted LTV: LTV = (Loan Amount / Appraised Value) × 100 ≤ 70%. Habitat installment: C = P × [i(1+i)^n / ((1+i)^n − 1)]. Example land: 3,000,000 XOF over 5 years at 15% annual → i = 1.25%/month, n = 60 → installment = 71,378 XOF/month. For Non-Salaried: Estimated Net Income = Average Sales − Operating Costs − Existing Obligations; Cmax = Net Income × 35%." } },
      { es: "Crédito Profesional", fr: "Crédit professionnel", en: "Professional Loan", group: "creditos", status: "cubierto", scope: { es: "AGR (Activités Génératrices de Revenus) — Crédito productivo/PYME en microfinanzas. Segmentado por monto: AGR < 1 000 000 XOF (~$550 USD): proceso simplificado, garantía mínima (aval solidario/grupal), desembolso rápido, orientado a microempresarios de subsistencia. AGR > 1 000 000 XOF: análisis riguroso del flujo del negocio, garantía real o prendaria, seguimiento técnico del uso del crédito, orientado a pequeños empresarios con actividad demostrable. Flujo Neto Mensual = Ingresos − Costos Variables − Costos Fijos − Obligaciones Existentes. Capacidad de pago: Cmáx = Flujo Neto × 40%. Monto máximo: Pmáx = Cmáx × [(1+i)^n − 1] / [i(1+i)^n]. ROI Mínimo del negocio > Tasa de Interés del Crédito (ej. si tasa = 20%, ROI debe superar 20%). Ejemplo AGR pequeño: 800 000 XOF a 12 meses, 20% anual → i = 1,67%/mes → cuota = 74 218 XOF/mes.", fr: "AGR (Activités Génératrices de Revenus) — Crédit productif/PME en microfinance. Segmenté par montant : AGR < 1 000 000 XOF (~550 USD) : processus simplifié, garantie minimale (caution solidaire/groupale), décaissement rapide, orienté micro-entrepreneurs de subsistance. AGR > 1 000 000 XOF : analyse rigoureuse du flux d'activité, garantie réelle ou nantissement, suivi technique de l'utilisation du crédit, orienté petits entrepreneurs avec activité démontrable. Flux Net Mensuel = Revenus − Coûts Variables − Coûts Fixes − Obligations Existantes. Capacité de paiement : Cmax = Flux Net × 40%. Montant maximum : Pmax = Cmax × [(1+i)^n − 1] / [i(1+i)^n]. ROI Minimum de l'activité > Taux d'intérêt du crédit (ex. si taux = 20%, ROI doit dépasser 20%). Exemple AGR petit : 800 000 XOF sur 12 mois, 20% annuel → i = 1,67%/mois → mensualité = 74 218 XOF/mois.", en: "AGR (Activités Génératrices de Revenus) — Productive/SME credit in microfinance. Segmented by amount: AGR < 1,000,000 XOF (~$550 USD): simplified process, minimal guarantee (solidarity/group guarantee), quick disbursement, targeting subsistence micro-entrepreneurs. AGR > 1,000,000 XOF: rigorous business cash-flow analysis, real or pledge guarantee, technical monitoring of credit usage, targeting small entrepreneurs with demonstrable activity. Monthly Net Flow = Revenue − Variable Costs − Fixed Costs − Existing Obligations. Payment capacity: Cmax = Net Flow × 40%. Maximum amount: Pmax = Cmax × [(1+i)^n − 1] / [i(1+i)^n]. Minimum business ROI > Credit Interest Rate (e.g. if rate = 20%, ROI must exceed 20%). Example small AGR: 800,000 XOF over 12 months at 20% annual → i = 1.67%/month → installment = 74,218 XOF/month." } },
      { es: "Avales/Fianzas", fr: "Cautions", en: "Sureties/Guarantees", group: "creditos", status: "cubierto", scope: { es: "Avales solidarios entre socios o garantías de Nyèsigiso ante instituciones de segundo piso (BNDA, fondos de garantía UEMOA) para acceder a líneas de refinanciamiento. SAF+ registra estos compromisos como exposición contingente con impacto en el riesgo de cartera. Comisión de aval: Comisión = Monto Aval × Tasa × (Días / 360). Provisión contingente: Provisión = Monto Aval × PD × LGD × CCF.", fr: "Cautions solidaires entre membres ou garanties de Nyèsigiso auprès d'institutions de deuxième niveau (BNDA, fonds de garantie UEMOA) pour accéder à des lignes de refinancement. SAF+ enregistre ces engagements comme exposition contingente avec impact sur le risque du portefeuille. Commission de caution : Commission = Montant Caution × Taux × (Jours / 360). Provision contingente : Provision = Montant Caution × PD × LGD × CCF.", en: "Solidarity guarantees between members or guarantees issued by Nyèsigiso to second-tier institutions (BNDA, WAEMU guarantee funds) to access refinancing lines. SAF+ records these commitments as contingent exposure with portfolio risk impact. Guarantee commission: Commission = Guarantee Amount × Rate × (Days / 360). Contingent provision: Provision = Guarantee Amount × PD × LGD × CCF." } },
      { es: "Compromiso por Firma", fr: "Engagement par signature", en: "Signature Commitment", group: "creditos", status: "cubierto", scope: { es: "Aplica cuando Nyèsigiso emite cartas de compromiso ante proveedores de insumos agrícolas o instituciones de fondeo externas, formalizando un acuerdo de financiamiento antes del desembolso efectivo. SAF+ lo gestiona como exposición pre-desembolso con control de cupos y seguimiento de la vigencia del compromiso.", fr: "S'applique lorsque Nyèsigiso émet des lettres d'engagement auprès de fournisseurs d'intrants agricoles ou d'institutions de financement externes, formalisant un accord de financement avant le décaissement effectif. SAF+ le gère comme exposition pré-décaissement avec contrôle de quotas et suivi de la validité de l'engagement.", en: "Applies when Nyèsigiso issues commitment letters to agricultural input suppliers or external funding institutions, formalizing a financing agreement before actual disbursement. SAF+ manages it as pre-disbursement exposure with quota control and commitment validity tracking." } },
      { es: "Sobregiro", fr: "Découvert", en: "Overdraft", group: "creditos", status: "cubierto", scope: { es: "Découvert Salaire/Pension — Facilidad de cortesía para socios asalariados/pensionados que necesitan liquidez antes del cierre de nómina. El socio dispone de una fracción de su salario esperado antes de su acreditación en cuenta. Plazo típico: 15-30 días, liquidación automática al recibir depósito de nómina. En Mali, muchos empleadores acreditan salarios en las caisses de Nyèsigiso, dando visibilidad directa sobre el flujo esperado. Límite: Découvert Máx = Salario Neto Esperado × Factor (50-70%). Interés: I = |Saldo en Découvert| × (TNA / 360) × D. Ejemplo: 200 000 XOF por 20 días a 24% anual → I = 200 000 × 24% / 360 × 20 = 2 667 XOF. SAF+ liquida automáticamente découvert + intereses al impactar la nómina.", fr: "Découvert Salaire/Pension — Facilité de courtoisie pour membres salariés/pensionnés nécessitant de la liquidité avant la clôture de la paie. Le membre dispose d'une fraction de son salaire attendu avant son crédit en compte. Durée typique : 15-30 jours, liquidation automatique à la réception du dépôt de paie. Au Mali, de nombreux employeurs créditent les salaires dans les caisses de Nyèsigiso, offrant une visibilité directe sur le flux attendu. Limite : Découvert Max = Salaire Net Attendu × Facteur (50-70%). Intérêt : I = |Solde en Découvert| × (TNA / 360) × D. Exemple : 200 000 XOF pendant 20 jours à 24% annuel → I = 200 000 × 24% / 360 × 20 = 2 667 XOF. SAF+ liquide automatiquement découvert + intérêts à l'impact de la paie.", en: "Découvert Salaire/Pension — Courtesy facility for salaried/pensioned members needing liquidity before payroll closing. The member accesses a fraction of expected salary before it is credited. Typical term: 15-30 days, automatic settlement upon payroll deposit. In Mali, many employers credit salaries directly to Nyèsigiso caisses, providing direct visibility on expected flows. Limit: Max Overdraft = Expected Net Salary × Factor (50-70%). Interest: I = |Overdraft Balance| × (APR / 360) × D. Example: 200,000 XOF for 20 days at 24% annual → I = 200,000 × 24% / 360 × 20 = 2,667 XOF. SAF+ automatically settles overdraft + interest when payroll hits." } },
      { es: "Gestión de Balances", fr: "Gestion des bilans", en: "Balance Management", group: "creditos", status: "cubierto", scope: { es: "Reestructuración preventiva de socios con múltiples créditos activos (AGR + consumo + habitat), evitando mora y pérdida de membresía. SAF+ permite consolidar deudas y ajustar condiciones antes del deterioro irreversible. Saldo consolidado: Saldo Único = Σ Si + Σ Ii(acum). Nueva cuota reestructurada: Cnueva = Saldo Único × [i'(1+i')^n' / ((1+i')^n' − 1)].", fr: "Restructuration préventive des membres avec multiples crédits actifs (AGR + consommation + habitat), évitant les impayés et la perte de la qualité de membre. SAF+ permet de consolider les dettes et d'ajuster les conditions avant la détérioration irréversible. Solde consolidé : Solde Unique = Σ Si + Σ Ii(accum). Nouvelle mensualité restructurée : Cnouvelle = Solde Unique × [i'(1+i')^n' / ((1+i')^n' − 1)].", en: "Preventive restructuring for members with multiple active credits (AGR + consumer + habitat), avoiding default and membership loss. SAF+ enables debt consolidation and condition adjustment before irreversible deterioration. Consolidated balance: Single Balance = Σ Si + Σ Ii(accrued). New restructured installment: Cnew = Single Balance × [i'(1+i')^n' / ((1+i')^n' − 1)]." } },
      { es: "Parametrización de Productos", fr: "Paramétrage des produits", en: "Product Parameterization", group: "catalogo", status: "cubierto", included: false, scope: { es: "EXCLUIDO Art. 6: Módulos de parametrización NO incluidos en proceso de consolidación.", fr: "EXCLU Art. 6 : Modules de paramétrage NON inclus dans le processus de consolidation.", en: "EXCLUDED Art. 6: Parameterization modules NOT included in consolidation process." } },
      { es: "Creación de Nuevos Productos", fr: "Création de nouveaux produits", en: "New Product Creation", group: "catalogo", status: "cubierto", included: false, scope: { es: "EXCLUIDO Art. 6: Módulos de parametrización NO incluidos en proceso de consolidación.", fr: "EXCLU Art. 6 : Modules de paramétrage NON inclus dans le processus de consolidation.", en: "EXCLUDED Art. 6: Parameterization modules NOT included in consolidation process." } },
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
      { es: "Intercambios con Organismos de Tutela (BCEAO, etc.)", fr: "Échanges avec les organes de tutelle", en: "Exchanges with Supervisory Bodies (BCEAO, etc.)", status: "cubierto", scope: {
        es: "📡 Conectividad regulatoria — SAF+ genera e intercambia automáticamente los reportes exigidos por los organismos de supervisión:\n\n• BCEAO (Banque Centrale): Estados financieros periódicos, ratios prudenciales, balance de comprobación, reportes de crédito y morosidad en formatos oficiales.\n• Commission Bancaire / CCS-SFD: Reportes de conformidad, indicadores de solvencia, liquidez y calidad de cartera según las normas OHADA y directivas UEMOA.\n• Ministerio de Finanzas: Declaraciones fiscales, retenciones, impuestos sobre operaciones financieras.\n• CENTIF (Cellule anti-blanchiment): Declaraciones de sospecha (DOS), reportes de operaciones inusuales y umbrales de vigilancia.\n\n⚙️ Capacidad ilimitada — Todos los reportes regulatorios están incluidos en la propuesta sin costo adicional. Las actualizaciones normativas se incorporan de forma continua conforme evoluciona la regulación vigente.\n\n📤 Formatos de salida: XML, CSV, PDF, Excel — compatibles con las plataformas de transmisión electrónica de cada organismo.",
        fr: "📡 Connectivité réglementaire — SAF+ génère et échange automatiquement les rapports exigés par les organismes de supervision :\n\n• BCEAO (Banque Centrale) : États financiers périodiques, ratios prudentiels, balance de vérification, rapports de crédit et d'impayés aux formats officiels.\n• Commission Bancaire / CCS-SFD : Rapports de conformité, indicateurs de solvabilité, liquidité et qualité du portefeuille selon les normes OHADA et directives UEMOA.\n• Ministère des Finances : Déclarations fiscales, retenues, impôts sur les opérations financières.\n• CENTIF (Cellule anti-blanchiment) : Déclarations de soupçon (DOS), rapports d'opérations inhabituelles et seuils de vigilance.\n\n⚙️ Capacité illimitée — Tous les rapports réglementaires sont inclus dans la proposition sans coût additionnel. Les mises à jour normatives sont intégrées en continu selon l'évolution de la réglementation en vigueur.\n\n📤 Formats de sortie : XML, CSV, PDF, Excel — compatibles avec les plateformes de transmission électronique de chaque organisme.",
        en: "📡 Regulatory connectivity — SAF+ automatically generates and exchanges the reports required by supervisory bodies:\n\n• BCEAO (Central Bank): Periodic financial statements, prudential ratios, trial balance, credit and delinquency reports in official formats.\n• Banking Commission / CCS-SFD: Compliance reports, solvency, liquidity, and portfolio quality indicators per OHADA standards and UEMOA directives.\n• Ministry of Finance: Tax declarations, withholdings, financial operations taxes.\n• CENTIF (Anti-money laundering unit): Suspicious activity reports (SAR), unusual transaction reports, and monitoring thresholds.\n\n⚙️ Unlimited capacity — All regulatory reports are included in the proposal at no additional cost. Regulatory updates are continuously incorporated as current regulations evolve.\n\n📤 Output formats: XML, CSV, PDF, Excel — compatible with each body's electronic transmission platforms."
      } },
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
      { es: "Activos Fijos", fr: "Immobilisations", en: "Fixed Assets", group: "contabilidad", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo Inmobilizaciones separado requiere cotización.", fr: "NON inclus - Module Immobilisations séparé nécessite un devis.", en: "NOT included - Separate Fixed Assets module requires quote." } },
      { es: "Conciliación", fr: "Lettrage", en: "Reconciliation", group: "contabilidad", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo separado requiere cotización.", fr: "NON inclus - Module séparé nécessite un devis.", en: "NOT included - Separate module requires quote." } },
      { es: "Compras - Inventarios", fr: "Achats - Stocks", en: "Purchases - Inventory", group: "contabilidad", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo ERP separado requiere cotización.", fr: "NON inclus - Module ERP séparé nécessite un devis.", en: "NOT included - Separate ERP module requires quote." } },
      { es: "Cierre de Cuentas, Intereses", fr: "Arrêté de comptes, agios", en: "Account Closing, Interest", group: "contabilidad", status: "cubierto", scope: { es: "Incluido en módulos de ahorro y préstamos.", fr: "Inclus dans les modules d'épargne et de prêts.", en: "Included in savings and loans modules." } },
      { es: "Nómina", fr: "Paie", en: "Payroll", group: "rrhh", status: "cubierto", included: false, scope: { es: "Cálculo de nómina (DNSI, INPS). Fuera del alcance inicial — disponible como módulo adicional.", fr: "Calcul de la paie (DNSI, INPS). Hors périmètre initial — disponible comme module additionnel.", en: "Payroll calculation (DNSI, INPS). Outside initial scope — available as additional module." } },
      { es: "Gestión del Personal", fr: "Gestion du personnel", en: "Staff Management", group: "rrhh", status: "cubierto", included: false, scope: { es: "Formación, promoción, reclutamiento. Fuera del alcance inicial — disponible como módulo adicional.", fr: "Formation, promotion, recrutement. Hors périmètre initial — disponible comme module additionnel.", en: "Training, promotion, recruitment. Outside initial scope — available as additional module." } },
      { es: "Estructura de la Red NYESIGISO", fr: "Structure du réseau", en: "NYESIGISO Network Structure", group: "control", status: "cubierto", scope: { es: "Configuración de agencias incluida en propuesta.", fr: "Configuration des agences incluse dans la proposition.", en: "Agency configuration included in proposal." } },
      { es: "Autorizaciones/Permisos", fr: "Habilitations", en: "Authorizations/Permissions", group: "control", status: "cubierto", included: false, scope: { es: "EXCLUIDO Art. 6: Módulos de SEGURIDAD NO incluidos en proceso de consolidación.", fr: "EXCLU Art. 6 : Modules de SÉCURITÉ NON inclus dans le processus de consolidation.", en: "EXCLUDED Art. 6: SECURITY modules NOT included in consolidation process." } },
      { es: "Delegaciones", fr: "Délégations", en: "Delegations", group: "control", status: "cubierto", included: false, scope: { es: "EXCLUIDO Art. 6: Módulos de SEGURIDAD NO incluidos en proceso de consolidación.", fr: "EXCLU Art. 6 : Modules de SÉCURITÉ NON inclus dans le processus de consolidation.", en: "EXCLUDED Art. 6: SECURITY modules NOT included in consolidation process." } },
      { es: "Inspección", fr: "Inspection", en: "Inspection", group: "control", status: "cubierto", included: false, scope: { es: "NO incluido en propuesta.", fr: "NON inclus dans la proposition.", en: "NOT included in proposal." } },
      { es: "Control y Trazabilidad", fr: "Contrôle & traçabilité", en: "Control & Traceability", group: "control", status: "cubierto", included: false, scope: { es: "EXCLUIDO Art. 6: Módulos de SEGURIDAD NO incluidos en proceso de consolidación.", fr: "EXCLU Art. 6 : Modules de SÉCURITÉ NON inclus dans le processus de consolidation.", en: "EXCLUDED Art. 6: SECURITY modules NOT included in consolidation process." } },
      { es: "Tesorería", fr: "Trésorerie", en: "Treasury", group: "finanzas", status: "cubierto", scope: { es: "Bancos - Módulo básico incluido en propuesta.", fr: "Banques - Module de base inclus dans la proposition.", en: "Banks - Basic module included in proposal." } },
      { es: "Proveedores", fr: "Fournisseurs", en: "Suppliers", group: "finanzas", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo ERP separado requiere cotización.", fr: "NON inclus - Module ERP séparé nécessite un devis.", en: "NOT included - Separate ERP module requires quote." } },
      { es: "Gestión de Recursos, Refinanciamiento", fr: "Gestion des ressources, refinancement", en: "Resource Management, Refinancing", group: "finanzas", status: "cubierto", scope: { es: "Funcionalidad básica en módulo Bancos.", fr: "Fonctionnalité de base dans le module Banques.", en: "Basic functionality in Banks module." } },
      { es: "Obras y Proyectos", fr: "Chantiers & projets", en: "Projects & Works", group: "logistica", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo ERP separado requiere cotización.", fr: "NON inclus - Module ERP séparé nécessite un devis.", en: "NOT included - Separate ERP module requires quote." } },
      { es: "Archivo", fr: "Archivage", en: "Archiving", group: "logistica", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo GED separado requiere cotización.", fr: "NON inclus - Module GED séparé nécessite un devis.", en: "NOT included - Separate DMS module requires quote." } },
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
      { es: "Contabilidad Analítica", fr: "Comptabilité analytique", en: "Analytical Accounting", group: "pilotaje", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo BI separado requiere cotización.", fr: "NON inclus - Module BI séparé nécessite un devis.", en: "NOT included - Separate BI module requires quote." } },
      { es: "Presupuesto", fr: "Budget", en: "Budget", group: "pilotaje", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo ERP separado requiere cotización.", fr: "NON inclus - Module ERP séparé nécessite un devis.", en: "NOT included - Separate ERP module requires quote." } },
      { es: "Declaraciones Regulatorias BCEAO", fr: "Déclarations réglementaires BCEAO", en: "BCEAO Regulatory Declarations", group: "pilotaje", status: "cubierto", scope: { es: "Reportes regulatorios ilimitados incluidos en propuesta.", fr: "Rapports réglementaires illimités inclus dans la proposition.", en: "Unlimited regulatory reports included in proposal." } },
      { es: "DataWarehouse", fr: "DataWarehouse", en: "DataWarehouse", group: "decision", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo BI separado requiere cotización.", fr: "NON inclus - Module BI séparé nécessite un devis.", en: "NOT included - Separate BI module requires quote." } },
      { es: "Herramientas de Apoyo a la Decisión (BI)", fr: "Outils d'aide à la décision", en: "Decision Support Tools (BI)", group: "decision", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo BI separado requiere cotización.", fr: "NON inclus - Module BI séparé nécessite un devis.", en: "NOT included - Separate BI module requires quote." } },
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
      { es: "Workflow", fr: "Workflow", en: "Workflow", status: "cubierto", included: false, scope: {
        es: "🔄 Motor de Workflow No-Code — SAF+ incluye un motor de workflow visual completamente configurable sin necesidad de programación, adaptable al 100% a los procesos operativos de Nyèsigiso.\n\n• Diseñador visual drag & drop para definir flujos de aprobación, escalamiento y notificaciones.\n• Reglas de negocio configurables: montos, niveles de autorización, segregación de funciones, plazos y alertas automáticas.\n• Flujos predefinidos para: apertura de cuentas, solicitudes de crédito, desembolsos, reestructuraciones, cierre de caja y operaciones de compensación.\n• Trazabilidad completa: cada paso del flujo queda registrado con usuario, fecha, hora, acción y comentario — cumpliendo requisitos de auditoría interna y externa.\n• Integración nativa con todos los módulos de SAF+ (créditos, ahorro, contabilidad, caja).\n\n⚙️ Personalización total — Los flujos se adaptan en tiempo real a cambios normativos o de política interna sin intervención de desarrollo.",
        fr: "🔄 Moteur de Workflow No-Code — SAF+ inclut un moteur de workflow visuel entièrement configurable sans programmation, adaptable à 100% aux processus opérationnels de Nyèsigiso.\n\n• Concepteur visuel drag & drop pour définir les flux d'approbation, d'escalade et de notifications.\n• Règles métier configurables : montants, niveaux d'autorisation, séparation des fonctions, délais et alertes automatiques.\n• Flux prédéfinis pour : ouverture de comptes, demandes de crédit, décaissements, restructurations, clôture de caisse et opérations de compensation.\n• Traçabilité complète : chaque étape du flux est enregistrée avec utilisateur, date, heure, action et commentaire — conforme aux exigences d'audit interne et externe.\n• Intégration native avec tous les modules de SAF+ (crédits, épargne, comptabilité, caisse).\n\n⚙️ Personnalisation totale — Les flux s'adaptent en temps réel aux changements normatifs ou de politique interne sans intervention de développement.",
        en: "🔄 No-Code Workflow Engine — SAF+ includes a fully configurable visual workflow engine requiring no programming, 100% adaptable to Nyèsigiso's operational processes.\n\n• Visual drag & drop designer to define approval flows, escalation, and notifications.\n• Configurable business rules: amounts, authorization levels, segregation of duties, deadlines, and automatic alerts.\n• Predefined flows for: account opening, credit applications, disbursements, restructuring, cash closing, and clearing operations.\n• Complete traceability: every step in the flow is recorded with user, date, time, action, and comment — meeting internal and external audit requirements.\n• Native integration with all SAF+ modules (credits, savings, accounting, cash).\n\n⚙️ Full customization — Flows adapt in real time to regulatory or internal policy changes without development intervention."
      } },
      { es: "Gestión Electrónica de Documentos (GED)", fr: "Gestion électronique de documents", en: "Electronic Document Management (EDM)", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo GED separado requiere cotización.", fr: "NON inclus - Module GED séparé nécessite un devis.", en: "NOT included - Separate DMS module requires quote." } },
      { es: "Web Services", fr: "Web Services", en: "Web Services", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo APIs separado requiere cotización.", fr: "NON inclus - Module APIs séparé nécessite un devis.", en: "NOT included - Separate APIs module requires quote." } },
      { es: "APIs", fr: "APIs", en: "APIs", status: "cubierto", included: false, scope: { es: "NO incluido - Módulo APIs separado requiere cotización.", fr: "NON inclus - Module APIs séparé nécessite un devis.", en: "NOT included - Separate APIs module requires quote." } },
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
