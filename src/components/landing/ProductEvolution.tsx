import { ArrowUp, Calendar, Bug, Zap, DollarSign, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  es: {
    title: "Política de Releases",
    type: "Tipo",
    frequency: "Frecuencia",
    scope: "Alcance",
    keyPoints: "Puntos Clave",
    releases: [
      { type: "Major", frequency: "1–2 por año", scope: "Nuevos módulos, cambios funcionales" },
      { type: "Minor", frequency: "Trimestral", scope: "Mejoras menores" },
      { type: "Patches", frequency: "Mensual / on-demand", scope: "Bugs, seguridad" },
      { type: "Hotfix", frequency: "Inmediato", scope: "Correcciones críticas" },
    ],
    points: [
      "Hasta 2 Major Releases por año",
      "Patches mensuales regulares",
      "Hotfixes inmediatos para seguridad/bugs críticos",
      "Driver de costo: Cuentas de usuario activas",
      "Aplican límites y cuotas",
    ],
  },
  fr: {
    title: "Politique de Releases",
    type: "Type",
    frequency: "Fréquence",
    scope: "Portée",
    keyPoints: "Points Clés",
    releases: [
      { type: "Major", frequency: "1–2 par an", scope: "Nouveaux modules, changements fonctionnels" },
      { type: "Minor", frequency: "Trimestrielle", scope: "Améliorations mineures" },
      { type: "Patches", frequency: "Mensuelle / à la demande", scope: "Bugs, sécurité" },
      { type: "Hotfix", frequency: "Immédiat", scope: "Corrections critiques" },
    ],
    points: [
      "Jusqu'à 2 Major Releases par an",
      "Patches mensuels réguliers",
      "Hotfixes immédiats pour sécurité/bugs critiques",
      "Driver de coût : comptes utilisateurs actifs",
      "Limites et quotas applicables",
    ],
  },
  en: {
    title: "Software Release Policy",
    type: "Type",
    frequency: "Frequency",
    scope: "Scope",
    keyPoints: "Key Policy Points",
    releases: [
      { type: "Major", frequency: "1–2 per year", scope: "New modules, functional changes" },
      { type: "Minor", frequency: "Quarterly", scope: "Minor improvements" },
      { type: "Patches", frequency: "Monthly / on-demand", scope: "Bugs, security" },
      { type: "Hotfix", frequency: "Immediate", scope: "Critical fixes" },
    ],
    points: [
      "Up to 2 Major Releases Annually",
      "Regular Monthly Patches",
      "Immediate Hotfixes for Critical Security/Bugs",
      "Cost Driver: Active User Accounts/Features",
      "Limits & Quotas Apply",
    ],
  },
};

const icons = [
  <ArrowUp className="w-4 h-4" />,
  <Calendar className="w-4 h-4" />,
  <Bug className="w-4 h-4" />,
  <DollarSign className="w-4 h-4" />,
  <BarChart3 className="w-4 h-4" />,
];

const ProductEvolution = () => {
  const { language } = useLanguage();
  const l = t[language];

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-2">
        <Zap className="w-5 h-5 text-primary" />
        <h4 className="font-black text-foreground text-sm uppercase tracking-wider">{l.title}</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-4 py-2.5 font-bold text-xs">{l.type}</th>
                <th className="text-left px-4 py-2.5 font-bold text-xs">{l.frequency}</th>
                <th className="text-left px-4 py-2.5 font-bold text-xs">{l.scope}</th>
              </tr>
            </thead>
            <tbody>
              {l.releases.map((r, i) => (
                <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                  <td className="px-4 py-2.5 font-bold text-foreground text-xs">{r.type}</td>
                  <td className="px-4 py-2.5 text-muted-foreground text-xs">{r.frequency}</td>
                  <td className="px-4 py-2.5 text-muted-foreground text-xs">{r.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h5 className="font-bold text-foreground text-sm mb-3">{l.keyPoints}</h5>
          <div className="space-y-3">
            {l.points.map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  {icons[i]}
                </div>
                <span className="text-xs text-foreground font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEvolution;
