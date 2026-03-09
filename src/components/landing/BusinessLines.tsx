import { useState } from "react";
import { ChevronDown, CreditCard, Building2, PiggyBank, Wallet, Landmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BusinessLine {
  icon: React.ReactNode;
  name: string;
  subtitle: { es: string; fr: string; en: string };
  description: { es: string; fr: string; en: string };
  features: { es: string[]; fr: string[]; en: string[] };
}

const lines: BusinessLine[] = [
  {
    icon: <CreditCard className="w-5 h-5" />,
    name: "SAF+ Credits",
    subtitle: { es: "Core de Crédito", fr: "Core de Crédit", en: "Credit Core" },
    description: {
      es: "Core especializado en originación, administración y gestión del ciclo completo de crédito.",
      fr: "Core spécialisé dans l'origination, l'administration et la gestion du cycle complet de crédit.",
      en: "Specialized core for origination, administration and full credit lifecycle management.",
    },
    features: {
      es: ["Originación y evaluación automatizada", "Gestión del ciclo de vida completo", "Tablas de amortización configurables", "Motor de políticas y scoring integrado"],
      fr: ["Origination et évaluation automatisée", "Gestion du cycle de vie complet", "Tables d'amortissement configurables", "Moteur de politiques et scoring intégré"],
      en: ["Automated origination and evaluation", "Full lifecycle management", "Configurable amortization tables", "Integrated policy and scoring engine"],
    },
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    name: "SAF+ Leasing",
    subtitle: { es: "Leasing Financiero y Operativo", fr: "Leasing Financier et Opérationnel", en: "Financial & Operating Leasing" },
    description: {
      es: "Gestión integral de leasing financiero y operativo, incluyendo parametrización de productos.",
      fr: "Gestion intégrale du leasing financier et opérationnel, y compris la paramétrage des produits.",
      en: "Comprehensive financial and operating leasing management, including product parameterization.",
    },
    features: {
      es: ["Leasing financiero y operativo", "Parametrización flexible de productos", "Control de operaciones y vencimientos", "Reportería regulatoria integrada"],
      fr: ["Leasing financier et opérationnel", "Paramétrage flexible des produits", "Contrôle des opérations et échéances", "Reporting réglementaire intégré"],
      en: ["Financial and operating leasing", "Flexible product parameterization", "Operations and maturity control", "Integrated regulatory reporting"],
    },
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    name: "SAF+ Factoring",
    subtitle: { es: "Factoring y Confirming", fr: "Affacturage et Confirming", en: "Factoring & Confirming" },
    description: {
      es: "Core especializado en factoring y confirming con trazabilidad de extremo a extremo.",
      fr: "Core spécialisé en affacturage et confirming avec traçabilité de bout en bout.",
      en: "Specialized core for factoring and confirming with end-to-end traceability.",
    },
    features: {
      es: ["Gestión de transacciones de factoring", "Confirming y reverse factoring", "Control de plazos y liquidaciones", "Trazabilidad completa"],
      fr: ["Gestion des transactions d'affacturage", "Confirming et reverse factoring", "Contrôle des délais et liquidations", "Traçabilité complète"],
      en: ["Factoring transaction management", "Confirming and reverse factoring", "Term and settlement control", "Full traceability"],
    },
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    name: "SAF+ Cards",
    subtitle: { es: "Administración de Tarjetas", fr: "Administration des Cartes", en: "Card Administration" },
    description: {
      es: "Administración integral de tarjetas de crédito y débito con procesamiento en tiempo real.",
      fr: "Administration intégrale des cartes de crédit et débit avec traitement en temps réel.",
      en: "Comprehensive credit and debit card administration with real-time processing.",
    },
    features: {
      es: ["Tarjetas de crédito y débito", "Procesamiento en tiempo real", "Parametrización de políticas por producto", "Integración con redes de pago"],
      fr: ["Cartes de crédit et débit", "Traitement en temps réel", "Paramétrage des politiques par produit", "Intégration avec les réseaux de paiement"],
      en: ["Credit and debit cards", "Real-time processing", "Per-product policy parameterization", "Payment network integration"],
    },
  },
  {
    icon: <PiggyBank className="w-5 h-5" />,
    name: "Fondos de Pensión",
    subtitle: { es: "Fondos de Pensión", fr: "Fonds de Pension", en: "Pension Funds" },
    description: {
      es: "Plataforma líder para gestión de fondos de pensión con enfoque integral.",
      fr: "Plateforme leader pour la gestion des fonds de pension avec une approche intégrale.",
      en: "Leading platform for pension fund management with a comprehensive approach.",
    },
    features: {
      es: ["Administración de fondos de pensión", "Control y trazabilidad operativa", "Reportería regulatoria configurable", "Continuidad operativa garantizada"],
      fr: ["Administration des fonds de pension", "Contrôle et traçabilité opérationnelle", "Reporting réglementaire configurable", "Continuité opérationnelle garantie"],
      en: ["Pension fund administration", "Operational control and traceability", "Configurable regulatory reporting", "Guaranteed operational continuity"],
    },
  },
  {
    icon: <Landmark className="w-5 h-5" />,
    name: "SYSDa Banco",
    subtitle: { es: "Core Bancario Completo", fr: "Core Bancaire Complet", en: "Full Banking Core" },
    description: {
      es: "Core bancario completo para instituciones financieras modernas.",
      fr: "Core bancaire complet pour les institutions financières modernes.",
      en: "Complete banking core for modern financial institutions.",
    },
    features: {
      es: ["Gestión integral de productos bancarios", "Multicanal y multimoneda", "Cumplimiento regulatorio multi-jurisdicción", "Arquitectura modular y escalable"],
      fr: ["Gestion intégrale des produits bancaires", "Multicanal et multidevise", "Conformité réglementaire multi-juridiction", "Architecture modulaire et évolutive"],
      en: ["Comprehensive banking product management", "Multichannel and multi-currency", "Multi-jurisdiction regulatory compliance", "Modular and scalable architecture"],
    },
  },
];

const BusinessLines = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const { language } = useLanguage();

  return (
    <div className="space-y-3">
      {lines.map((line, i) => {
        const isOpen = expanded === i;
        return (
          <div
            key={i}
            className={`rounded-xl border transition-all duration-300 ${
              isOpen
                ? "border-primary/30 bg-card shadow-md"
                : "border-border bg-card/50 hover:border-primary/20 hover:shadow-sm"
            }`}
          >
            <button
              onClick={() => setExpanded(isOpen ? null : i)}
              className="w-full flex items-center gap-4 p-4 md:p-5 text-left group"
            >
              <div
                className={`flex items-center justify-center w-11 h-11 rounded-xl transition-colors ${
                  isOpen
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary group-hover:bg-primary/20"
                }`}
              >
                {line.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-foreground text-sm md:text-base leading-tight">{line.name}</h4>
                <p className="text-muted-foreground text-xs mt-0.5">{line.subtitle[language]}</p>
              </div>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="px-5 pb-5 pl-[4.5rem]">
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{line.description[language]}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {line.features[language].map((feat, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BusinessLines;
