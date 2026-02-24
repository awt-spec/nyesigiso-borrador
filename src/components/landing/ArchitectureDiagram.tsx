import { Monitor, BarChart3, Smartphone, Search, Settings, Database, Shield } from "lucide-react";

const microservices = [
  { name: "Clientes", icon: <Settings className="w-4 h-4" /> },
  { name: "Préstamos", icon: <Settings className="w-4 h-4" /> },
  { name: "Cuentas / Dep. a Plazo", icon: <Settings className="w-4 h-4" /> },
  { name: "Cajas", icon: <Settings className="w-4 h-4" /> },
  { name: "Cont y Tesor", icon: <Settings className="w-4 h-4" /> },
  { name: "Factoraje", icon: <Settings className="w-4 h-4" /> },
  { name: "Leasing", icon: <Settings className="w-4 h-4" /> },
  { name: "Seguridad", icon: <Shield className="w-4 h-4" />, highlight: true },
];

const databases = [
  "Clientes", "Préstamos", "Factoraje", "Leasing",
  "Cont y Tesor", "Factoraje", "Leasing", "Seguridad",
];

const ArchitectureDiagram = () => {
  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-black text-foreground">ARQUITECTURA SAF+</h3>
        <p className="text-muted-foreground text-sm mt-1">
          Microservicios con API Gateway centralizado
        </p>
      </div>

      {/* Layer 1: Clients */}
      <div className="rounded-xl border border-border bg-card p-4 flex items-center justify-center gap-4">
        <span className="text-sm font-bold text-muted-foreground tracking-wider">CLIENTES</span>
        <Monitor className="w-5 h-5 text-muted-foreground" />
        <BarChart3 className="w-5 h-5 text-muted-foreground" />
        <Smartphone className="w-5 h-5 text-muted-foreground" />
        <Search className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* Layer 2: Business layer + Third parties */}
      <div className="flex gap-3">
        <div className="flex-1 rounded-xl bg-primary text-primary-foreground p-4 text-center">
          <span className="text-sm font-bold">Capa de Negocio Especializada del Cliente</span>
        </div>
        <div className="rounded-xl border border-border bg-card px-4 py-3 flex items-center">
          <span className="text-xs font-bold text-muted-foreground whitespace-nowrap">Terceros Especializados</span>
        </div>
      </div>

      {/* Layer 3: API GatewayHUB + Identity */}
      <div className="flex gap-3">
        <div className="flex-1 rounded-xl bg-primary text-primary-foreground p-4 flex items-center">
          <span className="text-sm font-bold">SYSDE API GateWayHUB</span>
        </div>
        <div className="rounded-xl bg-amber-500 text-foreground px-4 py-3 flex items-center">
          <span className="text-xs font-bold whitespace-nowrap">Identity Provider</span>
        </div>
      </div>

      {/* Layer 4: Microservices */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {microservices.map((ms, i) => (
          <div
            key={i}
            className={`rounded-lg border p-3 text-center transition-all hover:shadow-sm ${
              ms.highlight
                ? "border-amber-400/50 bg-amber-50/50 dark:bg-amber-900/10"
                : "border-primary/20 bg-primary/5"
            }`}
          >
            <div className="flex justify-center mb-1.5 text-primary">{ms.icon}</div>
            <p className="text-[10px] font-bold text-foreground leading-tight">{ms.name}</p>
            <p className="text-[9px] text-muted-foreground mt-0.5">Microservice</p>
          </div>
        ))}
      </div>

      {/* Connectors */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-4 bg-border" />
          <div className="w-px h-4 bg-border" />
        </div>
      </div>

      {/* Layer 5: Databases */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {databases.map((db, i) => (
          <div key={i} className="rounded-lg border border-border bg-card p-2.5 text-center">
            <Database className="w-4 h-4 text-muted-foreground mx-auto mb-1" />
            <p className="text-[10px] font-medium text-muted-foreground">{db}</p>
          </div>
        ))}
      </div>

      {/* Internal communication */}
      <div className="rounded-xl border border-border bg-card p-3 text-center">
        <span className="text-xs font-medium text-muted-foreground">Comunicación Interna</span>
      </div>

      {/* Layer 6: API HUB */}
      <div className="rounded-xl bg-foreground text-background p-4 text-center">
        <span className="text-sm font-bold">API HUB (API Interno)</span>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
