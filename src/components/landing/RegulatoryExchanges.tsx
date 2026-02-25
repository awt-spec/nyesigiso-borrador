import { useLanguage } from "@/contexts/LanguageContext";
import { Landmark, FileText, Shield, AlertTriangle, Send, Database } from "lucide-react";

const t = {
  es: {
    title: "Conectividad Regulatoria",
    subtitle: "SAF+ genera e intercambia automáticamente los reportes exigidos",
    unlimited: "Reportes ilimitados incluidos • Actualizaciones normativas continuas",
    formats: "Formatos de salida",
    bodies: [
      {
        name: "BCEAO",
        full: "Banque Centrale",
        icon: Landmark,
        color: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
        iconColor: "text-blue-600 dark:text-blue-400",
        items: ["Estados financieros periódicos", "Ratios prudenciales", "Balance de comprobación", "Reportes de crédito y morosidad"],
      },
      {
        name: "Commission Bancaire",
        full: "CCS-SFD",
        icon: Shield,
        color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        items: ["Reportes de conformidad", "Indicadores de solvencia", "Calidad de cartera", "Normas OHADA / UEMOA"],
      },
      {
        name: "Min. Finanzas",
        full: "Ministerio de Finanzas",
        icon: FileText,
        color: "from-amber-500/20 to-amber-600/10 border-amber-500/30",
        iconColor: "text-amber-600 dark:text-amber-400",
        items: ["Declaraciones fiscales", "Retenciones", "Impuestos sobre operaciones"],
      },
      {
        name: "CENTIF",
        full: "Anti-blanchiment",
        icon: AlertTriangle,
        color: "from-red-500/20 to-red-600/10 border-red-500/30",
        iconColor: "text-red-600 dark:text-red-400",
        items: ["Declaraciones de sospecha (DOS)", "Operaciones inusuales", "Umbrales de vigilancia"],
      },
    ],
  },
  fr: {
    title: "Connectivité Réglementaire",
    subtitle: "SAF+ génère et échange automatiquement les rapports exigés",
    unlimited: "Rapports illimités inclus • Mises à jour normatives continues",
    formats: "Formats de sortie",
    bodies: [
      {
        name: "BCEAO",
        full: "Banque Centrale",
        icon: Landmark,
        color: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
        iconColor: "text-blue-600 dark:text-blue-400",
        items: ["États financiers périodiques", "Ratios prudentiels", "Balance de vérification", "Rapports de crédit et d'impayés"],
      },
      {
        name: "Commission Bancaire",
        full: "CCS-SFD",
        icon: Shield,
        color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        items: ["Rapports de conformité", "Indicateurs de solvabilité", "Qualité du portefeuille", "Normes OHADA / UEMOA"],
      },
      {
        name: "Min. Finances",
        full: "Ministère des Finances",
        icon: FileText,
        color: "from-amber-500/20 to-amber-600/10 border-amber-500/30",
        iconColor: "text-amber-600 dark:text-amber-400",
        items: ["Déclarations fiscales", "Retenues", "Impôts sur opérations"],
      },
      {
        name: "CENTIF",
        full: "Anti-blanchiment",
        icon: AlertTriangle,
        color: "from-red-500/20 to-red-600/10 border-red-500/30",
        iconColor: "text-red-600 dark:text-red-400",
        items: ["Déclarations de soupçon (DOS)", "Opérations inhabituelles", "Seuils de vigilance"],
      },
    ],
  },
  en: {
    title: "Regulatory Connectivity",
    subtitle: "SAF+ automatically generates and exchanges required reports",
    unlimited: "Unlimited reports included • Continuous regulatory updates",
    formats: "Output formats",
    bodies: [
      {
        name: "BCEAO",
        full: "Central Bank",
        icon: Landmark,
        color: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
        iconColor: "text-blue-600 dark:text-blue-400",
        items: ["Periodic financial statements", "Prudential ratios", "Trial balance", "Credit & delinquency reports"],
      },
      {
        name: "Banking Commission",
        full: "CCS-SFD",
        icon: Shield,
        color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        items: ["Compliance reports", "Solvency indicators", "Portfolio quality", "OHADA / UEMOA standards"],
      },
      {
        name: "Min. of Finance",
        full: "Ministry of Finance",
        icon: FileText,
        color: "from-amber-500/20 to-amber-600/10 border-amber-500/30",
        iconColor: "text-amber-600 dark:text-amber-400",
        items: ["Tax declarations", "Withholdings", "Financial operations taxes"],
      },
      {
        name: "CENTIF",
        full: "Anti-money laundering",
        icon: AlertTriangle,
        color: "from-red-500/20 to-red-600/10 border-red-500/30",
        iconColor: "text-red-600 dark:text-red-400",
        items: ["Suspicious activity reports (SAR)", "Unusual transactions", "Monitoring thresholds"],
      },
    ],
  },
};

const formats = ["XML", "CSV", "PDF", "Excel"];

const RegulatoryExchanges = () => {
  const { language } = useLanguage();
  const l = t[language];

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
          <Send className="w-4.5 h-4.5 text-primary" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-foreground">{l.title}</h4>
          <p className="text-xs text-muted-foreground">{l.subtitle}</p>
        </div>
      </div>

      {/* Central SAF+ node → Bodies */}
      <div className="relative">
        {/* SAF+ center badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
            <Database className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary tracking-wide">SAF+</span>
          </div>
        </div>

        {/* Connector line */}
        <div className="hidden sm:block absolute top-12 left-1/2 w-px h-4 bg-border" />

        {/* Bodies grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {l.bodies.map((body, idx) => {
            const Icon = body.icon;
            return (
              <div
                key={body.name}
                className={`rounded-xl border bg-gradient-to-br ${body.color} p-4 space-y-3 transition-all duration-500 hover:scale-[1.02] hover:shadow-md`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-5 h-5 ${body.iconColor} flex-shrink-0`} />
                  <div>
                    <span className="text-sm font-bold text-foreground">{body.name}</span>
                    <span className="text-[10px] text-muted-foreground ml-1.5">({body.full})</span>
                  </div>
                </div>
                <div className="space-y-1.5 pl-7">
                  {body.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-foreground/40 mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-foreground/80 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer: formats + unlimited */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-border/50">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{l.formats}:</span>
          <div className="flex gap-1.5">
            {formats.map((f) => (
              <span key={f} className="text-[10px] font-mono font-semibold bg-muted px-2 py-0.5 rounded border border-border text-foreground">
                {f}
              </span>
            ))}
          </div>
        </div>
        <span className="text-[10px] text-muted-foreground italic">{l.unlimited}</span>
      </div>
    </div>
  );
};

export default RegulatoryExchanges;
