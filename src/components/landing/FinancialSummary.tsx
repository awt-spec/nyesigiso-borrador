import { DollarSign, TrendingUp, BarChart3, Shield } from "lucide-react";

const FinancialSummary = () => {
  return (
    <div className="space-y-4">
      {/* Revenue & Profit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-5 h-5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Ingresos (Revenue)</span>
          </div>
          <div className="space-y-2">
            <div>
              <p className="text-muted-foreground text-xs">Promedio anual</p>
              <p className="text-xl font-black text-foreground">USD 10,000,000</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Acumulado 3 años</p>
              <p className="text-lg font-bold text-foreground">&gt; USD 30,000,000</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Utilidad Neta (Net Profit)</span>
          </div>
          <div className="space-y-2">
            <div>
              <p className="text-muted-foreground text-xs">Promedio anual</p>
              <p className="text-xl font-black text-foreground">USD 1,100,000</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Acumulado 3 años</p>
              <p className="text-lg font-bold text-foreground">&gt; USD 3,000,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Capital Structure */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-primary" />
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Estructura de Capital</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-muted-foreground text-xs mb-1">Deuda Total</p>
            <p className="text-lg font-black text-foreground">USD 850K</p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-xs mb-1">Patrimonio</p>
            <p className="text-lg font-black text-foreground">USD 10M</p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-xs mb-1">Ratio D/E</p>
            <div className="flex flex-col items-center">
              <p className="text-lg font-black text-primary">0.085</p>
              <div className="flex items-center gap-1 mt-1">
                <Shield className="w-3.5 h-3.5 text-sysde-green" />
                <span className="text-[10px] font-bold text-sysde-green">8.5% — Bajo riesgo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;
