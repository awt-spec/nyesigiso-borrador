import { Building2, Code2, Headphones, MapPin } from "lucide-react";

interface Branch {
  type: string;
  icon: React.ReactNode;
  color: string;
  locations: string[];
}

const branches: Branch[] = [
  {
    type: "Oficinas",
    icon: <Building2 className="w-5 h-5" />,
    color: "primary",
    locations: ["Perú", "Colombia", "México", "Panamá Holding", "Costa Rica (Central)", "El Salvador", "Senegal"],
  },
  {
    type: "Fábricas",
    icon: <Code2 className="w-5 h-5" />,
    color: "primary",
    locations: ["Perú", "Colombia", "Costa Rica", "México", "El Salvador"],
  },
  {
    type: "SVA",
    icon: <Headphones className="w-5 h-5" />,
    color: "primary",
    locations: ["Perú", "Colombia", "Costa Rica", "México", "El Salvador", "República Dominicana"],
  },
];

const CompanyStructure = () => {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-black text-sm">
          SYSDE
        </div>
        <div>
          <p className="font-bold text-foreground text-sm">+200 personas</p>
          <p className="text-muted-foreground text-xs">Comercial · Desarrollo · Soporte</p>
        </div>
      </div>

      {/* Branches */}
      <div className="grid grid-cols-1 gap-3">
        {branches.map((branch, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-4 flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted text-foreground font-bold text-sm flex-shrink-0">
              {branch.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-bold text-foreground text-sm">{branch.type}</h4>
                <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  {String(branch.locations.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {branch.locations.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1 text-xs font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-full"
                  >
                    <MapPin className="w-3 h-3" />
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyStructure;
