import { DollarSign, TrendingUp, BarChart3, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  es: {
    revenue: "Ingresos (Revenue)",
    avgAnnual: "Promedio anual",
    accumulated3y: "Acumulado 3 años",
    netProfit: "Utilidad Neta (Net Profit)",
    capitalStructure: "Estructura de Capital",
    totalDebt: "Deuda Total",
    equity: "Patrimonio",
    ratio: "Ratio D/E",
    lowRisk: "8.5% — Bajo riesgo",
  },
  fr: {
    revenue: "Revenus (Revenue)",
    avgAnnual: "Moyenne annuelle",
    accumulated3y: "Cumulé 3 ans",
    netProfit: "Bénéfice Net (Net Profit)",
    capitalStructure: "Structure du Capital",
    totalDebt: "Dette Totale",
    equity: "Capitaux Propres",
    ratio: "Ratio D/E",
    lowRisk: "8,5% — Risque faible",
  },
  en: {
    revenue: "Revenue",
    avgAnnual: "Annual average",
    accumulated3y: "3-year accumulated",
    netProfit: "Net Profit",
    capitalStructure: "Capital Structure",
    totalDebt: "Total Debt",
    equity: "Equity",
    ratio: "D/E Ratio",
    lowRisk: "8.5% — Low risk",
  },
};

const FinancialSummary = () => {
  const { language } = useLanguage();
  const l = t[language];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-5 h-5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">{l.revenue}</span>
          </div>
          <div className="space-y-2">
            <div>
              <p className="text-muted-foreground text-xs">{l.avgAnnual}</p>
              <p className="text-xl font-black text-foreground">USD 10,000,000</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs">{l.accumulated3y}</p>
              <p className="text-lg font-bold text-foreground">&gt; USD 30,000,000</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">{l.netProfit}</span>
          </div>
          <div className="space-y-2">
            <div>
              <p className="text-muted-foreground text-xs">{l.avgAnnual}</p>
              <p className="text-xl font-black text-foreground">USD 1,100,000</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs">{l.accumulated3y}</p>
              <p className="text-lg font-bold text-foreground">&gt; USD 3,000,000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-primary" />
          <span className="text-xs font-bold text-primary uppercase tracking-wider">{l.capitalStructure}</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-muted-foreground text-xs mb-1">{l.totalDebt}</p>
            <p className="text-lg font-black text-foreground">USD 850K</p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-xs mb-1">{l.equity}</p>
            <p className="text-lg font-black text-foreground">USD 10M</p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-xs mb-1">{l.ratio}</p>
            <div className="flex flex-col items-center">
              <p className="text-lg font-black text-primary">0.085</p>
              <div className="flex items-center gap-1 mt-1">
                <Shield className="w-3.5 h-3.5 text-sysde-green" />
                <span className="text-[10px] font-bold text-sysde-green">{l.lowRisk}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;
