import { ArrowUp, Calendar, Bug, Zap, DollarSign, BarChart3 } from "lucide-react";

const releaseTypes = [
  { type: "Major", frequency: "1–2 por año", scope: "Nuevos módulos, cambios funcionales" },
  { type: "Minor", frequency: "Trimestral", scope: "Quarterly" },
  { type: "Patches", frequency: "Mensual / on-demand", scope: "Bugs, seguridad" },
  { type: "Hotfix", frequency: "Inmediato", scope: "Inmediato" },
];

const policyPoints = [
  { icon: <ArrowUp className="w-4 h-4" />, text: "Up to 2 Major Releases Annually" },
  { icon: <Calendar className="w-4 h-4" />, text: "Regular Monthly Patches" },
  { icon: <Bug className="w-4 h-4" />, text: "Immediate Hotfixes for Critical Security/Bugs" },
  { icon: <DollarSign className="w-4 h-4" />, text: "Cost Driver: Active User Accounts/Features" },
  { icon: <BarChart3 className="w-4 h-4" />, text: "Limits & Quotas Apply" },
];

const ProductEvolution = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-2">
        <Zap className="w-5 h-5 text-primary" />
        <h4 className="font-black text-foreground text-sm uppercase tracking-wider">Software Release Policy</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Release table */}
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-4 py-2.5 font-bold text-xs">Type</th>
                <th className="text-left px-4 py-2.5 font-bold text-xs">Frecuencia</th>
                <th className="text-left px-4 py-2.5 font-bold text-xs">Scope</th>
              </tr>
            </thead>
            <tbody>
              {releaseTypes.map((r, i) => (
                <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                  <td className="px-4 py-2.5 font-bold text-foreground text-xs">{r.type}</td>
                  <td className="px-4 py-2.5 text-muted-foreground text-xs">{r.frequency}</td>
                  <td className="px-4 py-2.5 text-muted-foreground text-xs">{r.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key Policy Points */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h5 className="font-bold text-foreground text-sm mb-3">Key Policy Points</h5>
          <div className="space-y-3">
            {policyPoints.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  {p.icon}
                </div>
                <span className="text-xs text-foreground font-medium">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEvolution;
