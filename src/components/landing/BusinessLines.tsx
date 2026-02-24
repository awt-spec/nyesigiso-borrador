import { useState } from "react";
import { ChevronDown, CreditCard, Building2, PiggyBank, Wallet, Landmark } from "lucide-react";

interface BusinessLine {
  icon: React.ReactNode;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
}

const lines: BusinessLine[] = [
  {
    icon: <CreditCard className="w-5 h-5" />,
    name: "SAF+ Credits",
    subtitle: "Core de Crédito",
    description: "Core especializado en originación, administración y gestión del ciclo completo de crédito.",
    features: [
      "Originación y evaluación automatizada",
      "Gestión del ciclo de vida completo del crédito",
      "Tablas de amortización configurables",
      "Motor de políticas y scoring integrado",
    ],
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    name: "SAF+ Leasing",
    subtitle: "Leasing Financiero y Operativo",
    description: "Gestión integral de leasing financiero y operativo, incluyendo parametrización de productos.",
    features: [
      "Leasing financiero y operativo",
      "Parametrización flexible de productos",
      "Control de operaciones y vencimientos",
      "Reportería regulatoria integrada",
    ],
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    name: "SAF+ Factoring",
    subtitle: "Factoring y Confirming",
    description: "Core especializado en factoring y confirming con trazabilidad de extremo a extremo.",
    features: [
      "Gestión de transacciones de factoring",
      "Confirming y reverse factoring",
      "Control de plazos y liquidaciones",
      "Trazabilidad completa",
    ],
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    name: "SAF+ Cards",
    subtitle: "Administración de Tarjetas",
    description: "Administración integral de tarjetas de crédito y débito con procesamiento en tiempo real.",
    features: [
      "Tarjetas de crédito y débito",
      "Procesamiento en tiempo real",
      "Parametrización de políticas por producto",
      "Integración con redes de pago",
    ],
  },
  {
    icon: <PiggyBank className="w-5 h-5" />,
    name: "SAF+ Pension",
    subtitle: "Fondos de Pensión",
    description: "Plataforma líder para gestión de fondos de pensión con enfoque integral.",
    features: [
      "Administración de fondos de pensión",
      "Control y trazabilidad operativa",
      "Reportería regulatoria configurable",
      "Continuidad operativa garantizada",
    ],
  },
  {
    icon: <Landmark className="w-5 h-5" />,
    name: "SYSDE Banco",
    subtitle: "Core Bancario Completo",
    description: "Core bancario completo para instituciones financieras modernas.",
    features: [
      "Gestión integral de productos bancarios",
      "Multicanal y multimoneda",
      "Cumplimiento regulatorio multi-jurisdicción",
      "Arquitectura modular y escalable",
    ],
  },
];

const BusinessLines = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

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
              {/* Icon */}
              <div
                className={`flex items-center justify-center w-11 h-11 rounded-xl transition-colors ${
                  isOpen
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary group-hover:bg-primary/20"
                }`}
              >
                {line.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-foreground text-sm md:text-base leading-tight">
                  {line.name}
                </h4>
                <p className="text-muted-foreground text-xs mt-0.5">{line.subtitle}</p>
              </div>

              {/* Chevron */}
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Expandable content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 pl-[4.5rem]">
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {line.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {line.features.map((feat, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-2 text-xs text-foreground/80"
                    >
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
