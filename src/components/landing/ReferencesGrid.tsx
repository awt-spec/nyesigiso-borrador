import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, MapPin, ChevronDown, Globe, CheckCircle2, Filter, Users, Clock, Landmark, BarChart3 } from "lucide-react";

const t = {
  es: {
    title: "Referencias Globales",
    country: "País",
    model: "Modelo",
    contact: "Contacto",
    position: "Puesto",
    phone: "Teléfono",
    email: "Email",
    web: "Sitio Web",
    detail: "Detalle del Proyecto",
    result: "Resultado",
    product: "Producto",
    instances: "Instancias",
    all: "Todas",
    africa: "África",
    latam: "Latinoamérica",
    filterBy: "Filtrar por región",
    totalRefs: "referencias",
    totalCountries: "países",
    yearsExp: "años de experiencia",
    clients: "clientes atendidos",
  },
  fr: {
    title: "Références Mondiales",
    country: "Pays",
    model: "Modèle",
    contact: "Contact",
    position: "Poste",
    phone: "Téléphone",
    email: "Email",
    web: "Site Web",
    detail: "Détail du Projet",
    result: "Résultat",
    product: "Produit",
    instances: "Instances",
    all: "Toutes",
    africa: "Afrique",
    latam: "Amérique Latine",
    filterBy: "Filtrer par région",
    totalRefs: "références",
    totalCountries: "pays",
    yearsExp: "ans d'expérience",
    clients: "clients servis",
  },
  en: {
    title: "Global References",
    country: "Country",
    model: "Model",
    contact: "Contact",
    position: "Position",
    phone: "Phone",
    email: "Email",
    web: "Website",
    detail: "Project Detail",
    result: "Result",
    product: "Product",
    instances: "Instances",
    all: "All",
    africa: "Africa",
    latam: "Latin America",
    filterBy: "Filter by region",
    totalRefs: "references",
    totalCountries: "countries",
    yearsExp: "years of experience",
    clients: "clients served",
  },
};

interface Reference {
  name: string;
  country: string;
  region: "africa" | "latam";
  model: string;
  product: string;
  contact?: string;
  position?: string;
  phone?: string;
  email?: string;
  web?: string;
  instances?: string[];
  detail: { es: string; fr: string; en: string };
  result: { es: string; fr: string; en: string };
}

const references: Reference[] = [
  // ——— AFRICA ———
  {
    name: "FECECAM",
    country: "Benín",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    contact: "Abou AMOUDA",
    position: "IT Manager",
    phone: "(229) 21 04 86 77",
    email: "fececam@intnet.bj",
    detail: {
      es: "SYSDE implementó SAF en 33 cooperativas de FECECAM. Automatización de procesos financieros de ahorro, crédito y otros servicios, logrando mayor precisión y rapidez en las transacciones.",
      fr: "SYSDE a implémenté SAF dans 33 coopératives de FECECAM. Automatisation des processus financiers d'épargne, de crédit et d'autres services, atteignant une plus grande précision et rapidité dans les transactions.",
      en: "SYSDE implemented SAF across 33 FECECAM cooperatives. Automation of financial processes for savings, credit and other services, achieving greater precision and speed in transactions.",
    },
    result: {
      es: "33 cooperativas, 35 agencias y 28 puntos de servicio. Presencia en las 77 comunas de Benín. Crecimiento significativo en membresía y digitalización con soluciones móviles.",
      fr: "33 coopératives, 35 agences et 28 points de service. Présence dans les 77 communes du Bénin. Croissance significative en adhésion et digitalisation avec solutions mobiles.",
      en: "33 cooperatives, 35 agencies and 28 service points. Presence in all 77 communes of Benin. Significant growth in membership and digitization with mobile solutions.",
    },
  },
  {
    name: "FCPB (Réseau des Caisses Populaires)",
    country: "Burkina Faso",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    contact: "Daouda Sawadogo",
    position: "CEO",
    phone: "(226) (50) 304910",
    email: "fcpb@fasonet.bf",
    detail: {
      es: "SYSDE implementó SAF en FCPB para transformar digitalmente su infraestructura financiera, mejorando la eficiencia operativa y fortaleciendo la transparencia en la gestión de +1,200 empleados y 455 dirigentes.",
      fr: "SYSDE a implémenté SAF dans la FCPB pour transformer numériquement son infrastructure financière, améliorant l'efficacité opérationnelle et renforçant la transparence dans la gestion de +1 200 employés et 455 dirigeants.",
      en: "SYSDE implemented SAF at FCPB to digitally transform its financial infrastructure, improving operational efficiency and strengthening transparency in the management of +1,200 employees and 455 leaders.",
    },
    result: {
      es: "Red de microfinanzas más grande y antigua de Burkina Faso. Fundada en 1972 con apoyo de Développement International Desjardins (DID). Crecimiento en membresía y digitalización con soluciones móviles.",
      fr: "Plus grand et plus ancien réseau de microfinance du Burkina Faso. Fondé en 1972 avec le soutien de Développement International Desjardins (DID). Croissance en adhésion et digitalisation avec solutions mobiles.",
      en: "Largest and oldest microfinance network in Burkina Faso. Founded in 1972 with support from Développement International Desjardins (DID). Growth in membership and digitization with mobile solutions.",
    },
  },
  {
    name: "CPECG",
    country: "Guinea",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    contact: "Karamo Condé",
    position: "Directeur général",
    phone: "224 (42) 12-81",
    email: "karamoconde@yahoo.fr",
    detail: {
      es: "SYSDE implementó SAF en CPECG para revolucionar su gestión financiera, brindando una solución moderna y automatizada que mejora significativamente el control y la visibilidad de sus operaciones.",
      fr: "SYSDE a implémenté SAF dans CPECG pour révolutionner sa gestion financière, fournissant une solution moderne et automatisée qui améliore significativement le contrôle et la visibilité de ses opérations.",
      en: "SYSDE implemented SAF at CPECG to revolutionize its financial management, providing a modern and automated solution that significantly improves control and visibility of operations.",
    },
    result: {
      es: "+150,000 clientes y 27 sucursales en áreas urbanas y rurales. Servicios financieros integrales: ahorro, crédito, microseguros y educación financiera. Impacto social destacado en inclusión financiera de mujeres emprendedoras y jóvenes.",
      fr: "+150 000 clients et 27 succursales en zones urbaines et rurales. Services financiers intégraux : épargne, crédit, micro-assurances et éducation financière. Impact social notable dans l'inclusion financière des femmes entrepreneures et des jeunes.",
      en: "+150,000 clients and 27 branches in urban and rural areas. Comprehensive financial services: savings, credit, microinsurance and financial education. Outstanding social impact in financial inclusion of women entrepreneurs and youth.",
    },
  },
  {
    name: "CTI (Centre de Traitement Informatique)",
    country: "Senegal",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    contact: "Yves Charland",
    position: "Project Director",
    phone: "(221)33 824 0420",
    detail: {
      es: "SYSDE implementó SAF en CTI para transformar la infraestructura tecnológica, mejorando la automatización y el control de operaciones financieras. Informatización de 72 Systèmes Financiers Décentralisés (SFD).",
      fr: "SYSDE a implémenté SAF au CTI pour transformer l'infrastructure technologique, améliorant l'automatisation et le contrôle des opérations financières. Informatisation de 72 Systèmes Financiers Décentralisés (SFD).",
      en: "SYSDE implemented SAF at CTI to transform technological infrastructure, improving automation and control of financial operations. Digitization of 72 Decentralized Financial Systems (SFD).",
    },
    result: {
      es: "Informatización exitosa de 72 SFD en Senegal. Mejora de eficiencia y transparencia en gestión financiera de instituciones de microfinanza en África.",
      fr: "Informatisation réussie de 72 SFD au Sénégal. Amélioration de l'efficacité et de la transparence dans la gestion financière des institutions de microfinance en Afrique.",
      en: "Successful digitization of 72 SFDs in Senegal. Improved efficiency and transparency in financial management of microfinance institutions in Africa.",
    },
  },
  {
    name: "CFE Rwanda (→ Bank of Africa Rwanda)",
    country: "Ruanda",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    contact: "Gasigwa Festus",
    position: "Gerente General",
    email: "fgasigwa@yahoo.fr",
    detail: {
      es: "En 2004, SYSDE implementó SAF en CFE Rwanda para automatizar y optimizar procesos financieros incluyendo contabilidad, préstamos y arrendamiento. CFE Rwanda fue fundada en 2003 para servicios financieros a PYMEs.",
      fr: "En 2004, SYSDE a implémenté SAF à CFE Rwanda pour automatiser et optimiser les processus financiers incluant comptabilité, prêts et location. CFE Rwanda a été fondée en 2003 pour les services financiers aux PME.",
      en: "In 2004, SYSDE implemented SAF at CFE Rwanda to automate and optimize financial processes including accounting, loans and leasing. CFE Rwanda was founded in 2003 for SME financial services.",
    },
    result: {
      es: "En 2010 se transformó en Agaseke Bank. En 2015, Bank of Africa adquirió 90% de participación, convirtiéndose en Bank of Africa Rwanda Limited — banco comercial.",
      fr: "En 2010, il s'est transformé en Agaseke Bank. En 2015, Bank of Africa a acquis 90% de participation, devenant Bank of Africa Rwanda Limited — banque commerciale.",
      en: "In 2010 it transformed into Agaseke Bank. In 2015, Bank of Africa acquired 90% stake, becoming Bank of Africa Rwanda Limited — commercial bank.",
    },
  },
  {
    name: "CNEC Djibouti",
    country: "Yibuti",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    contact: "Réal Véronneau",
    position: "Conseiller technique",
    phone: "(253) 35-08-96",
    email: "real.veronneau@hotmail.com",
    detail: {
      es: "SYSDE implementó SAF en CNEC Djibouti en 2009 para optimizar operaciones financieras. Caisse Nationale d'Épargne et de Crédit de Djibouti, abierta en 2008 para facilitar acceso a servicios financieros para grupos vulnerables.",
      fr: "SYSDE a implémenté SAF à CNEC Djibouti en 2009 pour optimiser les opérations financières. Caisse Nationale d'Épargne et de Crédit de Djibouti, ouverte en 2008 pour faciliter l'accès aux services financiers pour les groupes vulnérables.",
      en: "SYSDE implemented SAF at CNEC Djibouti in 2009 to optimize financial operations. Caisse Nationale d'Épargne et de Crédit de Djibouti, opened in 2008 to facilitate access to financial services for vulnerable groups.",
    },
    result: {
      es: "En 2011, CNEC inició fusión con CPEC. Impacto social destacado en inclusión financiera de mujeres emprendedoras y jóvenes. Microseguros y educación financiera.",
      fr: "En 2011, CNEC a initié une fusion avec CPEC. Impact social notable dans l'inclusion financière des femmes entrepreneures et des jeunes. Micro-assurances et éducation financière.",
      en: "In 2011, CNEC initiated merger with CPEC. Outstanding social impact in financial inclusion of women entrepreneurs and youth. Microinsurance and financial education.",
    },
  },
  {
    name: "Nyogondemeso-Soba",
    country: "Mali",
    region: "africa",
    model: "SaaS",
    product: "SAF+",
    email: "nyogondemso@nyogodemeso",
    detail: {
      es: "SYSDE implementó SAF+ en Union des Coopératives Nyogondemeso-Soba tras fusión exitosa de dos cooperativas. Automatización de gestión financiera con servicios de ahorro, crédito y transferencias de dinero.",
      fr: "SYSDE a implémenté SAF+ dans l'Union des Coopératives Nyogondemeso-Soba après la fusion réussie de deux coopératives. Automatisation de la gestion financière avec services d'épargne, de crédit et de transferts d'argent.",
      en: "SYSDE implemented SAF+ at Union des Coopératives Nyogondemeso-Soba after successful merger of two cooperatives. Automation of financial management with savings, credit and money transfer services.",
    },
    result: {
      es: "Fusión exitosa de dos cooperativas. Gobernanza democrática y equitativa. Apoyo a la lucha contra la pobreza y desarrollo económico local. Enfoque en mujeres emprendedoras.",
      fr: "Fusion réussie de deux coopératives. Gouvernance démocratique et équitable. Soutien à la lutte contre la pauvreté et développement économique local. Focus sur les femmes entrepreneures.",
      en: "Successful merger of two cooperatives. Democratic and equitable governance. Support for poverty alleviation and local economic development. Focus on women entrepreneurs.",
    },
  },
  {
    name: "FCRMD (Fédération des Caisses Rurales Mutualistes du Delta)",
    country: "Mali",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    contact: "Mahamadou S. Traore",
    position: "Manager",
    phone: "(226) (50) 304910",
    email: "fcrmd@afribonemali.net",
    detail: {
      es: "SYSDE implementó SAF en FCRMD para transformar su infraestructura financiera, automatizando la gestión de ahorros y créditos rurales. Establecida en 1983 con apoyo del Fonds de Développement Villageois (FDV).",
      fr: "SYSDE a implémenté SAF dans la FCRMD pour transformer son infrastructure financière, automatisant la gestion de l'épargne et des crédits ruraux. Établie en 1983 avec le soutien du Fonds de Développement Villageois (FDV).",
      en: "SYSDE implemented SAF at FCRMD to transform its financial infrastructure, automating rural savings and credit management. Established in 1983 with support from the Fonds de Développement Villageois (FDV).",
    },
    result: {
      es: "Financiamiento directo a productores agrícolas del Delta del Níger desde 1983. Inclusión económica de mujeres y jóvenes con soluciones móviles.",
      fr: "Financement direct aux producteurs agricoles du Delta du Niger depuis 1983. Inclusion économique des femmes et des jeunes avec solutions mobiles.",
      en: "Direct financing to agricultural producers in the Niger Delta since 1983. Economic inclusion of women and youth with mobile solutions.",
    },
  },
  {
    name: "Dunduliza",
    country: "Tanzania",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    contact: "Yves Charland",
    position: "Project Director",
    phone: "(221)33 824 0420",
    detail: {
      es: "SYSDE implementó SAF en Dunduliza para automatizar procesos financieros y mejorar el control sobre las operaciones. Apoyo a varias SACCOs en Tanzania incluyendo Tandale SACCO.",
      fr: "SYSDE a implémenté SAF à Dunduliza pour automatiser les processus financiers et améliorer le contrôle des opérations. Soutien à plusieurs SACCOs en Tanzanie, dont Tandale SACCO.",
      en: "SYSDE implemented SAF at Dunduliza to automate financial processes and improve operational control. Support for various SACCOs in Tanzania including Tandale SACCO.",
    },
    result: {
      es: "Fortalecimiento de cooperativas de ahorro y crédito (SACCOs). Desarrollo económico local y mejora del acceso a servicios financieros para las comunidades.",
      fr: "Renforcement des coopératives d'épargne et de crédit (SACCOs). Développement économique local et amélioration de l'accès aux services financiers pour les communautés.",
      en: "Strengthening of savings and credit cooperatives (SACCOs). Local economic development and improved access to financial services for communities.",
    },
  },
  {
    name: "CRG (Crédit Rural de Guinée)",
    country: "Guinea",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    detail: {
      es: "Red más extensa del país. Base de clientes creciente: 250k→450k entre 2014–2019. Canales digitales: app y USSD activos para microahorro, crédito y transferencias.",
      fr: "Réseau le plus étendu du pays. Base de clients croissante : 250k→450k entre 2014–2019. Canaux digitaux : app et USSD actifs pour micro-épargne, crédit et transferts.",
      en: "Most extensive network in the country. Growing client base: 250k→450k between 2014–2019. Digital channels: active app and USSD for microsavings, credit and transfers.",
    },
    result: {
      es: "~450,000 clientes (2019). Conectividad variable y operación distribuida. Canales digitales con app y USSD.",
      fr: "~450 000 clients (2019). Connectivité variable et opération distribuée. Canaux digitaux avec app et USSD.",
      en: "~450,000 clients (2019). Variable connectivity and distributed operation. Digital channels with app and USSD.",
    },
  },
  {
    name: "KAFO Jiginew",
    country: "Mali",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    detail: {
      es: "Red mutualista de ahorro y crédito con fuerte foco rural. Una de las más grandes del país. Servicios: ahorro, crédito, microseguros, transferencias. Estrategia de inclusión financiera a escala nacional.",
      fr: "Réseau mutualiste d'épargne et de crédit à fort focus rural. L'un des plus grands du pays. Services : épargne, crédit, micro-assurances, transferts. Stratégie d'inclusion financière à l'échelle nationale.",
      en: "Mutualist savings and credit network with strong rural focus. One of the largest in the country. Services: savings, credit, microinsurance, transfers. National-scale financial inclusion strategy.",
    },
    result: {
      es: "Inclusión financiera a escala nacional en Mali. Inclusión económica de mujeres y jóvenes.",
      fr: "Inclusion financière à l'échelle nationale au Mali. Inclusion économique des femmes et des jeunes.",
      en: "National-scale financial inclusion in Mali. Economic inclusion of women and youth.",
    },
  },
  // ——— LATAM ———
  {
    name: "Unicomer Caribbean Holding",
    country: "CentroAmérica",
    region: "latam",
    model: "On Premise + SaaS",
    product: "Banca2000 + Tarjetas2000",
    contact: "Guillermo J. Siman",
    position: "ViceChairman & Executive VP — Unicomer Group / ALSICORP",
    phone: "2298-3777",
    email: "guilles@siman.com",
    instances: ["El Salvador", "Nicaragua", "Costa Rica"],
    detail: {
      es: "Implementación de Banca2000 y Tarjetas2000 con módulos: Cobranzas, Cuentas, Créditos (incluyendo Retail), Depósitos a Plazo, Cajas, Contabilidad, Bancos, IVA, PLD, Central de Riesgos, Activos Fijos, Inversiones, Custodia de Valores, Accionistas, Compras, SIG y Presupuesto.",
      fr: "Implémentation de Banca2000 et Tarjetas2000 avec modules : Recouvrement, Comptes, Crédits (incluant Retail), Dépôts à terme, Caisses, Comptabilité, Banques, TVA, LAB, Centrale des Risques, Actifs Fixes, Investissements, Garde de Titres, Actionnaires, Achats, SIG et Budget.",
      en: "Implementation of Banca2000 and Tarjetas2000 with modules: Collections, Accounts, Credits (including Retail), Term Deposits, Cash Management, Accounting, Banks, VAT, AML, Risk Center, Fixed Assets, Investments, Securities Custody, Shareholders, Procurement, MIS and Budget.",
    },
    result: {
      es: "Implementación comenzó en 2008, con expansiones para El Salvador (2011) y Nicaragua (2014). Grupo Unicomer gestiona +30 marcas, +1,200 tiendas en 26 países, +13,000 colaboradores.",
      fr: "Implémentation débutée en 2008, avec expansions pour El Salvador (2011) et Nicaragua (2014). Groupe Unicomer gère +30 marques, +1 200 magasins dans 26 pays, +13 000 collaborateurs.",
      en: "Implementation started in 2008, with expansions for El Salvador (2011) and Nicaragua (2014). Unicomer Group manages +30 brands, +1,200 stores in 26 countries, +13,000 employees.",
    },
  },
  {
    name: "MultiMoney",
    country: "CentroAmérica",
    region: "latam",
    model: "SaaS",
    product: "Banca2000",
    contact: "Ernesto Fernández Lang",
    position: "Presidente",
    phone: "(503) 2209-0800",
    web: "https://multimoney.com/",
    instances: ["Guatemala", "Costa Rica", "Honduras", "Nicaragua", "El Salvador"],
    detail: {
      es: "Implementación de Core Bancario Banca2000. Contribuyendo a su visión de crear productos eficientes, transparentes y honestos. Opera a nivel regional con Akros como Corporativo Tecnológico.",
      fr: "Implémentation du Core Bancaire Banca2000. Contribuant à sa vision de créer des produits efficaces, transparents et honnêtes. Opère au niveau régional avec Akros comme Corporate Technologique.",
      en: "Implementation of Banking Core Banca2000. Contributing to their vision of creating efficient, transparent and honest products. Operates regionally with Akros as Technology Corporate.",
    },
    result: {
      es: "Exitoso — Más de 10 años en operación. Módulos completos: Seguridad, Políticas Bancarias, Clientes, Préstamos, Cobranza, Cuentas de Ahorro, Depósitos a Plazo, Cajas, Contabilidad, Activos Fijos, PLD, Factoraje.",
      fr: "Réussi — Plus de 10 ans en opération. Modules complets : Sécurité, Politiques Bancaires, Clients, Prêts, Recouvrement, Comptes d'Épargne, Dépôts à terme, Caisses, Comptabilité, Actifs Fixes, LAB, Affacturage.",
      en: "Successful — More than 10 years in operation. Complete modules: Security, Banking Policies, Clients, Loans, Collections, Savings Accounts, Term Deposits, Cash Management, Accounting, Fixed Assets, AML, Factoring.",
    },
  },
  {
    name: "AMC",
    country: "El Salvador",
    region: "latam",
    model: "SaaS",
    product: "SAF+",
    web: "https://amc.com.sv",
    detail: {
      es: "Desde agosto 2025, AMC ejecuta implementación de SAF+: plataforma modular (modelo todo incluido) que maneja el ciclo end-to-end, multimoneda con trazabilidad total, alineada a nuevas regulaciones de El Salvador.",
      fr: "Depuis août 2025, AMC exécute l'implémentation de SAF+ : plateforme modulaire (modèle tout inclus) gérant le cycle end-to-end, multidevise avec traçabilité totale, alignée aux nouvelles réglementations du Salvador.",
      en: "Since August 2025, AMC executes SAF+ implementation: modular platform (all-inclusive model) managing the end-to-end cycle, multi-currency with full traceability, aligned with new El Salvador regulations.",
    },
    result: {
      es: "En ejecución — Implementación activa desde agosto 2025.",
      fr: "En cours — Implémentation active depuis août 2025.",
      en: "In progress — Active implementation since August 2025.",
    },
  },
  {
    name: "Grupo CMI",
    country: "Multi-país (12 países)",
    region: "latam",
    model: "SaaS",
    product: "SAF+ Factoring & Leasing",
    web: "https://somoscmi.com/es/",
    instances: ["Guatemala", "El Salvador", "Honduras", "Nicaragua", "Costa Rica", "Panamá", "Belice", "Rep. Dominicana", "México", "Estados Unidos", "Ecuador", "España"],
    detail: {
      es: "Desde agosto 2025, SYSDE implementa SAF+ para Factoring y Leasing de Grupo CMI, estandarizando procesos multi-país y multi-moneda. Integración con SAP Business One. Módulos: SAF+, Factoring, Leasing, Crédito Puente.",
      fr: "Depuis août 2025, SYSDE implémente SAF+ pour le Factoring et Leasing du Groupe CMI, standardisant les processus multi-pays et multi-devises. Intégration avec SAP Business One. Modules : SAF+, Factoring, Leasing, Crédit Pont.",
      en: "Since August 2025, SYSDE implements SAF+ for CMI Group Factoring and Leasing, standardizing multi-country and multi-currency processes. Integration with SAP Business One. Modules: SAF+, Factoring, Leasing, Bridge Credit.",
    },
    result: {
      es: "En ejecución — App móvil para administrar avance de obras. +1,090 sueños de vivienda cumplidos, +$15 mil MDP en construcción, +10 mil viviendas financiadas en México.",
      fr: "En cours — App mobile pour gérer l'avancement des travaux. +1 090 rêves de logement réalisés, +15 milliards MXN en construction, +10 000 logements financés au Mexique.",
      en: "In progress — Mobile app for construction progress management. +1,090 housing dreams fulfilled, +$15B MXN under construction, +10K homes financed in Mexico.",
    },
  },
  {
    name: "Dos Pinos",
    country: "Costa Rica",
    region: "latam",
    model: "SaaS",
    product: "SAF+",
    contact: "Kelvin Calvo Brown",
    position: "Consultor de Estrategia TI",
    phone: "506 2508-2500",
    email: "kcalvo@dospinos.com",
    detail: {
      es: "Implementación de SAF+ con módulos: Seguridad, Reglas de Negocio, Clientes, Contabilidad, Reportes SICVECA, Bancos, Cajas, Préstamos y Líneas de Crédito. Integración con SAP Business One.",
      fr: "Implémentation de SAF+ avec modules : Sécurité, Règles Métier, Clients, Comptabilité, Rapports SICVECA, Banques, Caisses, Prêts et Lignes de Crédit. Intégration avec SAP Business One.",
      en: "SAF+ implementation with modules: Security, Business Rules, Clients, Accounting, SICVECA Reports, Banks, Cash Management, Loans and Credit Lines. Integration with SAP Business One.",
    },
    result: {
      es: "+200 puntos de venta en Centroamérica. Presencia en Costa Rica, Panamá y Nicaragua. +70 años de experiencia. +10 millones de consumidores. Modelo de suscripción mensual con capacitación ilimitada y soporte continuo.",
      fr: "+200 points de vente en Amérique Centrale. Présence au Costa Rica, Panama et Nicaragua. +70 ans d'expérience. +10 millions de consommateurs. Modèle d'abonnement mensuel avec formation illimitée et support continu.",
      en: "+200 points of sale in Central America. Presence in Costa Rica, Panama and Nicaragua. +70 years of experience. +10 million consumers. Monthly subscription model with unlimited training and continuous support.",
    },
  },
  {
    name: "ION Financiera",
    country: "México",
    region: "latam",
    model: "On Premise + SaaS",
    product: "nSAF / SAF+",
    contact: "Edgar Rojas Flores",
    position: "Líder nSAF",
    phone: "+52 55 5493 6377",
    email: "edgar.rojas@ion.com.mx",
    detail: {
      es: "Implementación exitosa de nSAF e implementación de SAF+ en proceso. Focalizada en industria inmobiliaria: portafolio de servicios financieros para desarrolladores, empresas y personas físicas. Crédito puente como funcionalidad única.",
      fr: "Implémentation réussie de nSAF et implémentation de SAF+ en cours. Focalisée sur l'industrie immobilière : portefeuille de services financiers pour développeurs, entreprises et personnes physiques. Crédit pont comme fonctionnalité unique.",
      en: "Successful nSAF implementation and SAF+ implementation in progress. Focused on real estate industry: financial services portfolio for developers, companies and individuals. Bridge credit as unique functionality.",
    },
    result: {
      es: "1,090 sueños de vivienda cumplidos. +$15 mil MDP en casas y negocios en construcción. +10 mil viviendas financiadas en México. $3,500 MDP en financiamiento. App móvil para seguimiento de obras.",
      fr: "1 090 rêves de logement réalisés. +15 milliards MXN en maisons et commerces en construction. +10 000 logements financés au Mexique. 3 500 milliards MXN en financement. App mobile pour suivi des travaux.",
      en: "1,090 housing dreams fulfilled. +$15B MXN in homes and businesses under construction. +10K homes financed in Mexico. $3,500M MXN in financing. Mobile app for construction tracking.",
    },
  },
  {
    name: "Factor & Valor",
    country: "Colombia",
    region: "latam",
    model: "SaaS",
    product: "SAF+ Factoring",
    contact: "Jorge Ivan Bedoya Correa",
    position: "Director General",
    phone: "(574) 322 91 60",
    email: "jorge_bedoya@factoryvalor.com",
    detail: {
      es: "Administración de cartera de Factoring. Factor & Valor: +10 años como aliado financiero de PYMEs colombianas con soluciones de capital de trabajo y liquidez oportuna.",
      fr: "Administration du portefeuille Factoring. Factor & Valor : +10 ans en tant qu'allié financier des PME colombiennes avec solutions de fonds de roulement et liquidité opportune.",
      en: "Factoring portfolio management. Factor & Valor: +10 years as financial partner for Colombian SMEs with working capital and timely liquidity solutions.",
    },
    result: {
      es: "Administración exitosa de la cartera de Factoring con más de una década de operación continua.",
      fr: "Administration réussie du portefeuille Factoring avec plus d'une décennie d'opération continue.",
      en: "Successful factoring portfolio management with more than a decade of continuous operation.",
    },
  },
  {
    name: "SOFIMSA",
    country: "Costa Rica",
    region: "latam",
    model: "SaaS",
    product: "SAF+ Factoring",
    detail: {
      es: "Servicio SaaS en la nube Microsoft Azure de Factoring administrado por SYSDE SAF+. Soluciones de capital de trabajo y liquidez oportuna.",
      fr: "Service SaaS dans le cloud Microsoft Azure de Factoring administré par SYSDE SAF+. Solutions de fonds de roulement et liquidité opportune.",
      en: "SaaS service on Microsoft Azure cloud for Factoring managed by SYSDE SAF+. Working capital and timely liquidity solutions.",
    },
    result: {
      es: "Administración exitosa de cartera de Factoring en la nube.",
      fr: "Administration réussie du portefeuille Factoring dans le cloud.",
      en: "Successful cloud-based factoring portfolio management.",
    },
  },
  {
    name: "CCSS",
    country: "Costa Rica",
    region: "latam",
    model: "On Premise + SaaS",
    product: "FileMaster",
    detail: {
      es: "Migración exitosa de expedientes digitales de FileMaster con +6,120 usuarios activos. Transición a almacenamiento en la nube con seguridad y accesibilidad mejoradas.",
      fr: "Migration réussie des dossiers numériques de FileMaster avec +6 120 utilisateurs actifs. Transition vers le stockage cloud avec sécurité et accessibilité améliorées.",
      en: "Successful migration of FileMaster digital records with +6,120 active users. Transition to cloud storage with enhanced security and accessibility.",
    },
    result: {
      es: "Infraestructura escalable adaptada para alto volumen de usuarios y datos en tiempo real.",
      fr: "Infrastructure évolutive adaptée pour un grand volume d'utilisateurs et de données en temps réel.",
      en: "Scalable infrastructure adapted for high-volume users and real-time data.",
    },
  },
  {
    name: "Broxel",
    country: "México",
    region: "latam",
    model: "SaaS",
    product: "SAF2000",
    contact: "Rodrigo Díaz",
    position: "VIP Operaciones",
    phone: "(52) 55-4433 0303",
    email: "Rodrigo.diazdeleon@broxel.com",
    detail: {
      es: "Implementación de SAF2000 como core central para Banca Digital. Broxel lanzó una de las primeras Super App en México apalancado en SAF2000.",
      fr: "Implémentation de SAF2000 comme core central pour Banque Digitale. Broxel a lancé l'une des premières Super App au Mexique en s'appuyant sur SAF2000.",
      en: "SAF2000 implementation as central core for Digital Banking. Broxel launched one of the first Super Apps in Mexico leveraging SAF2000.",
    },
    result: {
      es: "Primera Fintech Digital en México. Operación exitosa de Tarjetas Débito/Crédito en entorno digital tanto en México como USA.",
      fr: "Première Fintech Digitale au Mexique. Opération réussie de cartes débit/crédit en environnement digital au Mexique et aux USA.",
      en: "First Digital Fintech in Mexico. Successful debit/credit card operation in digital environment in both Mexico and USA.",
    },
  },
  {
    name: "Bankaool",
    country: "México",
    region: "latam",
    model: "On Premise + SaaS",
    product: "SAF2000",
    contact: "Randall González / Sergio Becerra R.",
    position: "CTO / Gerente General",
    phone: "+506 8847 3101",
    email: "rgonzalez@bankaool.com",
    detail: {
      es: "Implementación y Evolución de SAF2000. Bankaool tiene +40 años de historia, originario de Chihuahua. Desde 2019 cuenta con licencia bancaria. Banca 100% digital y en línea 24x7.",
      fr: "Implémentation et Évolution de SAF2000. Bankaool a +40 ans d'histoire, originaire de Chihuahua. Depuis 2019, dispose d'une licence bancaire. Banque 100% digitale et en ligne 24x7.",
      en: "SAF2000 Implementation and Evolution. Bankaool has +40 years of history, originating from Chihuahua. Since 2019 holds a banking license. 100% digital and online banking 24x7.",
    },
    result: {
      es: "Exitoso — +25 años en operación. De cooperativa (Unión de Crédito Progreso) a Banco de primer piso. Visión de Banca 100% digital.",
      fr: "Réussi — +25 ans en opération. De coopérative (Unión de Crédito Progreso) à banque de premier plan. Vision de Banque 100% digitale.",
      en: "Successful — +25 years in operation. From cooperative (Unión de Crédito Progreso) to full bank. Vision of 100% digital banking.",
    },
  },
  {
    name: "AFP Confía",
    country: "El Salvador",
    region: "latam",
    model: "On Premise + SaaS",
    product: "Pension2000",
    contact: "Luis Diego Varaona Magaña",
    position: "Director de Operaciones y Tecnología",
    phone: "(503) 2267 7777",
    web: "https://www.confia.com.sv/",
    detail: {
      es: "Implementación de Pension2000 desde sus inicios. AFP CONFIA, fundada en 1998, líder en fondos previsionales en Centroamérica y el Caribe. +1.8 millones de trabajadores salvadoreños.",
      fr: "Implémentation de Pension2000 depuis ses débuts. AFP CONFIA, fondée en 1998, leader en fonds de prévoyance en Amérique Centrale et Caraïbes. +1,8 million de travailleurs salvadoriens.",
      en: "Pension2000 implementation since inception. AFP CONFIA, founded in 1998, leader in pension funds in Central America and the Caribbean. +1.8 million Salvadoran workers.",
    },
    result: {
      es: "Exitoso — +15 años en operación. Líder con +1.8 millones de trabajadores en fondos previsionales.",
      fr: "Réussi — +15 ans en opération. Leader avec +1,8 million de travailleurs en fonds de prévoyance.",
      en: "Successful — +15 years in operation. Leader with +1.8 million workers in pension funds.",
    },
  },
  {
    name: "Banco ADOPEM",
    country: "Rep. Dominicana",
    region: "latam",
    model: "On Premise + SaaS",
    product: "SYSDE Banca",
    contact: "Mercedes Canalda",
    position: "Presidente Ejecutiva",
    phone: "+809 563-3939",
    email: "mcanalda@adopem.com.do",
    detail: {
      es: "Implementación exitosa de Core Bancario SYSDE Banca — 12 módulos. Transferencia tecnológica al área informática del Banco. Parte del grupo Fundación Microfinanzas BBVA desde 2012.",
      fr: "Implémentation réussie du Core Bancaire SYSDE Banca — 12 modules. Transfert technologique au département informatique de la Banque. Partie du groupe Fondation Microfinance BBVA depuis 2012.",
      en: "Successful SYSDE Banca Banking Core implementation — 12 modules. Technology transfer to the Bank's IT department. Part of BBVA Microfinance Foundation group since 2012.",
    },
    result: {
      es: "Inclusión financiera de mujeres emprendedoras y jóvenes. Primer operador por número de clientes con metodología individual en Latinoamérica. Presencia en 4 países a través de 5 entidades.",
      fr: "Inclusion financière des femmes entrepreneures et des jeunes. Premier opérateur par nombre de clients avec méthodologie individuelle en Amérique Latine. Présence dans 4 pays à travers 5 entités.",
      en: "Financial inclusion of women entrepreneurs and youth. Leading operator by number of clients with individual methodology in Latin America. Presence in 4 countries through 5 entities.",
    },
  },
  {
    name: "COOPECAR R.L.",
    country: "Costa Rica",
    region: "latam",
    model: "On Premise + SaaS",
    product: "SYSDE SAF",
    contact: "MBA Carmen Milena Arce Alfaro",
    position: "Gerente General",
    phone: "2463-3666 ext. 1000",
    email: "carce@coopecar.fi.cr",
    detail: {
      es: "Adecuación de módulos operativos: Cuentas de Efectivo, Depósitos a Plazo, Préstamos, Contabilidad, Cajas, Bancos. Implementación adicional de sistema SICVECA (regulatorio Costa Rica — SUGEF vía XML).",
      fr: "Adaptation des modules opérationnels : Comptes de Trésorerie, Dépôts à terme, Prêts, Comptabilité, Caisses, Banques. Implémentation additionnelle du système SICVECA (réglementaire Costa Rica — SUGEF via XML).",
      en: "Operational module adaptation: Cash Accounts, Term Deposits, Loans, Accounting, Cash Management, Banks. Additional SICVECA system implementation (Costa Rica regulatory — SUGEF via XML).",
    },
    result: {
      es: "Exitoso. Cliente activo desde 2006. Mantenimiento continuo, desarrollo de nuevas funcionalidades y actualizaciones regulatorias.",
      fr: "Réussi. Client actif depuis 2006. Maintenance continue, développement de nouvelles fonctionnalités et mises à jour réglementaires.",
      en: "Successful. Active client since 2006. Continuous maintenance, new feature development and regulatory updates.",
    },
  },
  {
    name: "Financiera MVA",
    country: "Guatemala",
    region: "latam",
    model: "On Premise + SaaS",
    product: "Banca2000",
    contact: "Mario Ernesto López Pineda",
    position: "Gerente General",
    phone: "(502) 2388 3888",
    web: "https://www.financieramva.com/",
    detail: {
      es: "Implementación exitosa de Banca2000. Módulos: Seguridad, Políticas Bancarias, Clientes, Préstamos, Cobranza, Cuentas de Ahorro, Depósitos a Plazo, Cajas, Contabilidad, Cuentas Bancarias, Activos Fijos, PLD, Factoraje.",
      fr: "Implémentation réussie de Banca2000. Modules : Sécurité, Politiques Bancaires, Clients, Prêts, Recouvrement, Comptes d'Épargne, Dépôts à terme, Caisses, Comptabilité, Comptes Bancaires, Actifs Fixes, LAB, Affacturage.",
      en: "Successful Banca2000 implementation. Modules: Security, Banking Policies, Clients, Loans, Collections, Savings Accounts, Term Deposits, Cash Management, Accounting, Bank Accounts, Fixed Assets, AML, Factoring.",
    },
    result: {
      es: "Compromiso con crecimiento de PYMEs guatemaltecas. Agilidad, rapidez y asesoría para necesidades de crecimiento empresarial.",
      fr: "Engagement pour la croissance des PME guatémaltèques. Agilité, rapidité et conseil pour les besoins de croissance entrepreneuriale.",
      en: "Commitment to Guatemalan SME growth. Agility, speed and advisory for business growth needs.",
    },
  },
];

const stats = [
  { icon: <Globe className="w-5 h-5" />, valueKey: "totalRefs" as const, value: references.length },
  { icon: <MapPin className="w-5 h-5" />, valueKey: "totalCountries" as const, value: 15 },
  { icon: <Clock className="w-5 h-5" />, valueKey: "yearsExp" as const, value: 25 },
  { icon: <Users className="w-5 h-5" />, valueKey: "clients" as const, value: 830 },
];

const ReferencesGrid = () => {
  const { language } = useLanguage();
  const l = t[language];
  const [expanded, setExpanded] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "africa" | "latam">("all");

  const filtered = useMemo(() => {
    if (filter === "all") return references;
    return references.filter((r) => r.region === filter);
  }, [filter]);

  const africaCount = references.filter((r) => r.region === "africa").length;
  const latamCount = references.filter((r) => r.region === "latam").length;

  return (
    <div className="space-y-5">
      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-4 text-center">
            <div className="flex justify-center mb-2 text-primary">{s.icon}</div>
            <p className="text-2xl font-black text-foreground">{s.value}+</p>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{l[s.valueKey]}</p>
          </div>
        ))}
      </div>

      {/* Filter bar */}
      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="w-4 h-4 text-muted-foreground" />
        <span className="text-xs text-muted-foreground font-medium mr-1">{l.filterBy}:</span>
        {[
          { key: "all" as const, label: l.all, count: references.length },
          { key: "africa" as const, label: l.africa, count: africaCount },
          { key: "latam" as const, label: l.latam, count: latamCount },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => { setFilter(f.key); setExpanded(null); }}
            className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${
              filter === f.key
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
            }`}
          >
            {f.label}
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
              filter === f.key ? "bg-primary-foreground/20" : "bg-muted"
            }`}>{f.count}</span>
          </button>
        ))}
      </div>

      {/* References list */}
      <div className="grid grid-cols-1 gap-2">
        {filtered.map((ref, i) => {
          const isOpen = expanded === i;
          return (
            <div
              key={`${ref.name}-${i}`}
              className={`rounded-xl border transition-all duration-300 ${
                isOpen ? "border-primary/30 bg-card shadow-sm" : "border-border bg-card/50 hover:border-primary/20"
              }`}
            >
              <button
                onClick={() => setExpanded(isOpen ? null : i)}
                className="w-full flex items-center gap-3 p-3.5 text-left group"
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 ${
                  ref.region === "africa"
                    ? "bg-[hsl(var(--sysde-green))]/10 text-sysde-green"
                    : "bg-primary/10 text-primary"
                }`}>
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-bold text-foreground text-sm leading-tight truncate">{ref.name}</h5>
                  <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {ref.country}
                    </span>
                    <span className="text-[10px] font-bold bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{ref.model}</span>
                    <span className="text-[10px] font-bold text-primary">{ref.product}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    ref.region === "africa"
                      ? "bg-[hsl(var(--sysde-green))]/10 text-sysde-green"
                      : "bg-primary/10 text-primary"
                  }`}>
                    {ref.region === "africa" ? l.africa : l.latam}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-4 pb-4 pl-[3.75rem] space-y-3">
                  {/* Contact info */}
                  {(ref.contact || ref.email || ref.phone || ref.web) && (
                    <div className="rounded-lg bg-muted/50 p-3 border border-border/50 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                      {ref.contact && (
                        <div><span className="text-muted-foreground">{l.contact}: </span><span className="font-semibold text-foreground">{ref.contact}</span></div>
                      )}
                      {ref.position && (
                        <div><span className="text-muted-foreground">{l.position}: </span><span className="font-semibold text-foreground">{ref.position}</span></div>
                      )}
                      {ref.phone && (
                        <div><span className="text-muted-foreground">{l.phone}: </span><span className="font-semibold text-foreground">{ref.phone}</span></div>
                      )}
                      {ref.email && (
                        <div><span className="text-muted-foreground">{l.email}: </span><span className="font-semibold text-foreground">{ref.email}</span></div>
                      )}
                      {ref.web && (
                        <div><span className="text-muted-foreground">{l.web}: </span><a href={ref.web} target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">{ref.web}</a></div>
                      )}
                    </div>
                  )}

                  {/* Instances */}
                  {ref.instances && (
                    <div>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1.5">{l.instances}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {ref.instances.map((inst) => (
                          <span key={inst} className="inline-flex items-center gap-1 text-[10px] font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                            <MapPin className="w-2.5 h-2.5" /> {inst}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Detail */}
                  <div className="rounded-lg bg-muted/50 p-3 border border-border/50">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">{l.detail}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{ref.detail[language]}</p>
                  </div>

                  {/* Result */}
                  <div className="rounded-lg bg-primary/5 p-3 border border-primary/10">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> {l.result}
                    </p>
                    <p className="text-foreground text-sm leading-relaxed font-medium">{ref.result[language]}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReferencesGrid;
