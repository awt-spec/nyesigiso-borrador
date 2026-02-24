import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, MapPin, ChevronDown, Globe, CheckCircle2 } from "lucide-react";

const t = {
  es: {
    title: "Referencias Globales",
    country: "País",
    model: "Modelo",
    result: "Resultado",
    detail: "Detalle del Proyecto",
    successful: "Exitoso",
    inProgress: "En ejecución",
    showAll: "Ver todas",
    showLess: "Ver menos",
  },
  fr: {
    title: "Références Mondiales",
    country: "Pays",
    model: "Modèle",
    result: "Résultat",
    detail: "Détail du Projet",
    successful: "Réussi",
    inProgress: "En cours",
    showAll: "Voir toutes",
    showLess: "Voir moins",
  },
  en: {
    title: "Global References",
    country: "Country",
    model: "Model",
    result: "Result",
    detail: "Project Detail",
    successful: "Successful",
    inProgress: "In progress",
    showAll: "Show all",
    showLess: "Show less",
  },
};

interface Reference {
  name: string;
  country: string;
  region: "latam" | "africa";
  model: "SaaS" | "On Premise" | "Hybrid";
  product: string;
  summary: { es: string; fr: string; en: string };
  status: "success" | "active";
}

const references: Reference[] = [
  {
    name: "Unicomer Caribbean",
    country: "CentroAmérica",
    region: "latam",
    model: "Hybrid",
    product: "Banca2000 + Tarjetas2000",
    summary: {
      es: "Implementación exitosa en 3 instancias (El Salvador, Nicaragua, Costa Rica). Grupo Unicomer gestiona +30 marcas y +1,200 tiendas en 26 países.",
      fr: "Implémentation réussie dans 3 instances (El Salvador, Nicaragua, Costa Rica). Groupe Unicomer gère +30 marques et +1 200 magasins dans 26 pays.",
      en: "Successful implementation in 3 instances (El Salvador, Nicaragua, Costa Rica). Unicomer Group manages +30 brands and +1,200 stores in 26 countries.",
    },
    status: "success",
  },
  {
    name: "MultiMoney",
    country: "CentroAmérica",
    region: "latam",
    model: "SaaS",
    product: "Banca2000",
    summary: {
      es: "5 instancias regionales. +10 años en operación exitosa con módulos completos de core bancario.",
      fr: "5 instances régionales. +10 ans en opération réussie avec modules complets de core bancaire.",
      en: "5 regional instances. +10 years in successful operation with complete banking core modules.",
    },
    status: "success",
  },
  {
    name: "AMC",
    country: "El Salvador",
    region: "latam",
    model: "SaaS",
    product: "SAF+",
    summary: {
      es: "Implementación en ejecución desde agosto 2025. Plataforma modular end-to-end, multimoneda.",
      fr: "Implémentation en cours depuis août 2025. Plateforme modulaire end-to-end, multidevise.",
      en: "Implementation in progress since August 2025. Modular end-to-end platform, multi-currency.",
    },
    status: "active",
  },
  {
    name: "CMI Group",
    country: "Multi-país",
    region: "latam",
    model: "SaaS",
    product: "SAF+ Factoring & Leasing",
    summary: {
      es: "Implementación SAF+ para Factoring y Leasing multi-país. Integración con SAP Business One.",
      fr: "Implémentation SAF+ pour Factoring et Leasing multi-pays. Intégration avec SAP Business One.",
      en: "SAF+ implementation for multi-country Factoring and Leasing. Integration with SAP Business One.",
    },
    status: "active",
  },
  {
    name: "Dos Pinos",
    country: "Costa Rica",
    region: "latam",
    model: "SaaS",
    product: "SAF+",
    summary: {
      es: "+200 puntos de venta en Centroamérica. +70 años de experiencia. Integración con SAP Business One.",
      fr: "+200 points de vente en Amérique Centrale. +70 ans d'expérience. Intégration avec SAP Business One.",
      en: "+200 points of sale in Central America. +70 years of experience. Integration with SAP Business One.",
    },
    status: "success",
  },
  {
    name: "ION Financiera",
    country: "México",
    region: "latam",
    model: "Hybrid",
    product: "nSAF / SAF+",
    summary: {
      es: "Core bancario para industria inmobiliaria. +10,000 viviendas financiadas. App móvil de seguimiento de obras.",
      fr: "Core bancaire pour l'industrie immobilière. +10 000 logements financés. App mobile de suivi des travaux.",
      en: "Banking core for real estate industry. +10,000 financed homes. Mobile app for construction tracking.",
    },
    status: "success",
  },
  {
    name: "Factor & Valor",
    country: "Colombia",
    region: "latam",
    model: "SaaS",
    product: "SAF+ Factoring",
    summary: {
      es: "Administración exitosa de cartera de Factoring. +10 años como aliado financiero de PYMEs colombianas.",
      fr: "Administration réussie du portefeuille Factoring. +10 ans en tant qu'allié financier des PME colombiennes.",
      en: "Successful factoring portfolio management. +10 years as financial partner for Colombian SMEs.",
    },
    status: "success",
  },
  {
    name: "Broxel",
    country: "México",
    region: "latam",
    model: "SaaS",
    product: "SAF2000",
    summary: {
      es: "Primera Fintech Digital en México. Super App con tarjetas débito/crédito en México y USA.",
      fr: "Première Fintech Digitale au Mexique. Super App avec cartes débit/crédit au Mexique et USA.",
      en: "First Digital Fintech in Mexico. Super App with debit/credit cards in Mexico and USA.",
    },
    status: "success",
  },
  {
    name: "Bankaool",
    country: "México",
    region: "latam",
    model: "Hybrid",
    product: "SAF2000",
    summary: {
      es: "+25 años en operación. De cooperativa a Banco de primer piso. Banca 100% digital 24x7.",
      fr: "+25 ans en opération. De coopérative à Banque de premier plan. Banque 100% digitale 24x7.",
      en: "+25 years in operation. From cooperative to full bank. 100% digital banking 24x7.",
    },
    status: "success",
  },
  {
    name: "AFP Confía",
    country: "El Salvador",
    region: "latam",
    model: "Hybrid",
    product: "Pension2000",
    summary: {
      es: "+15 años en operación. +1.8 millones de trabajadores. Líder en fondos previsionales en Centroamérica.",
      fr: "+15 ans en opération. +1,8 million de travailleurs. Leader en fonds de prévoyance en Amérique Centrale.",
      en: "+15 years in operation. +1.8 million workers. Leader in pension funds in Central America.",
    },
    status: "success",
  },
  {
    name: "Banco ADOPEM",
    country: "Rep. Dominicana",
    region: "latam",
    model: "Hybrid",
    product: "SYSDE Banca",
    summary: {
      es: "12 módulos de core bancario. Parte del grupo BBVA Microfinanzas. Inclusión financiera de mujeres emprendedoras.",
      fr: "12 modules de core bancaire. Partie du groupe BBVA Microfinance. Inclusion financière des femmes entrepreneures.",
      en: "12 banking core modules. Part of BBVA Microfinance group. Financial inclusion of women entrepreneurs.",
    },
    status: "success",
  },
  {
    name: "COOPECAR R.L.",
    country: "Costa Rica",
    region: "latam",
    model: "Hybrid",
    product: "SYSDE SAF",
    summary: {
      es: "Cliente activo desde 2006. Módulos operativos completos + sistema regulatorio SICVECA.",
      fr: "Client actif depuis 2006. Modules opérationnels complets + système réglementaire SICVECA.",
      en: "Active client since 2006. Full operational modules + SICVECA regulatory system.",
    },
    status: "success",
  },
  {
    name: "Financiera MVA",
    country: "Guatemala",
    region: "latam",
    model: "Hybrid",
    product: "Banca2000",
    summary: {
      es: "Implementación exitosa de 13 módulos bancarios para PYMEs guatemaltecas.",
      fr: "Implémentation réussie de 13 modules bancaires pour les PME guatémaltèques.",
      en: "Successful implementation of 13 banking modules for Guatemalan SMEs.",
    },
    status: "success",
  },
  // Africa
  {
    name: "FECECAM",
    country: "Benín",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    summary: {
      es: "33 cooperativas, 35 agencias, 28 puntos de servicio. Presencia en las 77 comunas de Benín.",
      fr: "33 coopératives, 35 agences, 28 points de service. Présence dans les 77 communes du Bénin.",
      en: "33 cooperatives, 35 agencies, 28 service points. Presence in all 77 communes of Benin.",
    },
    status: "success",
  },
  {
    name: "FCPB",
    country: "Burkina Faso",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    summary: {
      es: "Red de microfinanzas más grande de Burkina Faso. Fundada en 1972. +1,200 empleados.",
      fr: "Plus grand réseau de microfinance du Burkina Faso. Fondé en 1972. +1 200 employés.",
      en: "Largest microfinance network in Burkina Faso. Founded in 1972. +1,200 employees.",
    },
    status: "success",
  },
  {
    name: "CPECG",
    country: "Guinea",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    summary: {
      es: "+150,000 clientes. 27 sucursales. Inclusión financiera de mujeres emprendedoras y jóvenes.",
      fr: "+150 000 clients. 27 succursales. Inclusion financière des femmes entrepreneures et des jeunes.",
      en: "+150,000 clients. 27 branches. Financial inclusion of women entrepreneurs and youth.",
    },
    status: "success",
  },
  {
    name: "CTI Senegal",
    country: "Senegal",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    summary: {
      es: "Informatización de 72 Systèmes Financiers Décentralisés (SFD).",
      fr: "Informatisation de 72 Systèmes Financiers Décentralisés (SFD).",
      en: "Digitization of 72 Decentralized Financial Systems (SFD).",
    },
    status: "success",
  },
  {
    name: "CFE Rwanda",
    country: "Ruanda",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    summary: {
      es: "Implementación en 2004. Evolucionó a Agaseke Bank y luego a Bank of Africa Rwanda.",
      fr: "Implémentation en 2004. Évolution vers Agaseke Bank puis Bank of Africa Rwanda.",
      en: "Implementation in 2004. Evolved to Agaseke Bank and then Bank of Africa Rwanda.",
    },
    status: "success",
  },
  {
    name: "CNEC Djibouti",
    country: "Yibuti",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    summary: {
      es: "Microfinanzas desde 2009. Inclusión financiera de mujeres emprendedoras y jóvenes.",
      fr: "Microfinance depuis 2009. Inclusion financière des femmes entrepreneures et des jeunes.",
      en: "Microfinance since 2009. Financial inclusion of women entrepreneurs and youth.",
    },
    status: "success",
  },
  {
    name: "Nyogondemeso",
    country: "Mali",
    region: "africa",
    model: "SaaS",
    product: "SAF+",
    summary: {
      es: "Fusión exitosa de dos cooperativas. Gobernanza democrática y apoyo a mujeres emprendedoras.",
      fr: "Fusion réussie de deux coopératives. Gouvernance démocratique et soutien aux femmes entrepreneures.",
      en: "Successful merger of two cooperatives. Democratic governance and support for women entrepreneurs.",
    },
    status: "success",
  },
  {
    name: "FCRMD",
    country: "Mali",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    summary: {
      es: "Desde 1983. Crédito agrícola para productores del Delta del Níger.",
      fr: "Depuis 1983. Crédit agricole pour les producteurs du Delta du Niger.",
      en: "Since 1983. Agricultural credit for Niger Delta producers.",
    },
    status: "success",
  },
  {
    name: "Dunduliza",
    country: "Tanzania",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    summary: {
      es: "Fortalecimiento de cooperativas de ahorro y crédito (SACCOs) en Tanzania.",
      fr: "Renforcement des coopératives d'épargne et de crédit (SACCOs) en Tanzanie.",
      en: "Strengthening savings and credit cooperatives (SACCOs) in Tanzania.",
    },
    status: "success",
  },
  {
    name: "CRG Guinea",
    country: "Guinea",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    summary: {
      es: "Red más extensa del país. ~450,000 clientes. Canales digitales con app y USSD.",
      fr: "Réseau le plus étendu du pays. ~450 000 clients. Canaux digitaux avec app et USSD.",
      en: "Most extensive network in the country. ~450,000 clients. Digital channels with app and USSD.",
    },
    status: "success",
  },
  {
    name: "KAFO Jiginew",
    country: "Mali",
    region: "africa",
    model: "SaaS",
    product: "SAF",
    summary: {
      es: "Red mutualista con fuerte foco rural. Inclusión financiera a escala nacional.",
      fr: "Réseau mutualiste à fort focus rural. Inclusion financière à l'échelle nationale.",
      en: "Mutualist network with strong rural focus. National-scale financial inclusion.",
    },
    status: "success",
  },
];

const ReferencesGrid = () => {
  const { language } = useLanguage();
  const l = t[language];
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleRefs = showAll ? references : references.slice(0, 8);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <Globe className="w-5 h-5 text-primary" />
        <h4 className="font-black text-foreground text-sm uppercase tracking-wider">{l.title}</h4>
        <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
          {references.length}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {visibleRefs.map((ref, i) => {
          const isOpen = expanded === i;
          return (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-300 ${
                isOpen ? "border-primary/30 bg-card shadow-sm" : "border-border bg-card/50 hover:border-primary/20"
              }`}
            >
              <button
                onClick={() => setExpanded(isOpen ? null : i)}
                className="w-full flex items-center gap-3 p-3.5 text-left group"
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${
                  ref.region === "africa" ? "bg-[hsl(var(--sysde-green))]/10 text-sysde-green" : "bg-primary/10 text-primary"
                } flex-shrink-0`}>
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-bold text-foreground text-sm leading-tight">{ref.name}</h5>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {ref.country}
                    </span>
                    <span className="text-[10px] font-bold bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{ref.model}</span>
                    <span className="text-[10px] font-bold text-primary">{ref.product}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <CheckCircle2 className={`w-4 h-4 ${ref.status === "success" ? "text-sysde-green" : "text-amber-500"}`} />
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-3.5 pb-4 pl-[3.75rem]">
                  <p className="text-muted-foreground text-sm leading-relaxed">{ref.summary[language]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {references.length > 8 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full text-center text-xs font-bold text-primary hover:text-primary/80 py-2 border border-border rounded-lg hover:bg-primary/5 transition-colors"
        >
          {showAll ? l.showLess : `${l.showAll} (${references.length})`}
        </button>
      )}
    </div>
  );
};

export default ReferencesGrid;
