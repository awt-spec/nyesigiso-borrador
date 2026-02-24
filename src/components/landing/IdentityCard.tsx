import { Building2, MapPin, Globe, Calendar } from "lucide-react";

const IdentityCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Company */}
      <div className="rounded-xl border border-border bg-card p-5 space-y-3">
        <div className="flex items-center gap-2 text-primary">
          <Building2 className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Nombre Comercial</span>
        </div>
        <p className="text-lg font-black text-foreground">SYSDE</p>
        <div className="flex items-center gap-2 text-muted-foreground text-xs">
          <Calendar className="w-3.5 h-3.5" />
          <span>+25 años en el sector financiero</span>
        </div>
      </div>

      {/* Address */}
      <div className="rounded-xl border border-border bg-card p-5 space-y-3">
        <div className="flex items-center gap-2 text-primary">
          <MapPin className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Dirección Corporativa</span>
        </div>
        <div className="space-y-1.5 text-sm text-foreground">
          <div className="flex gap-2">
            <span className="text-muted-foreground text-xs min-w-[70px]">Edificio</span>
            <span className="font-semibold">Humboldt Tower</span>
          </div>
          <div className="flex gap-2">
            <span className="text-muted-foreground text-xs min-w-[70px]">Calle</span>
            <span className="font-semibold">53rd Street East</span>
          </div>
          <div className="flex gap-2">
            <span className="text-muted-foreground text-xs min-w-[70px]">Distrito</span>
            <span className="font-semibold">Marbella District</span>
          </div>
          <div className="flex gap-2">
            <span className="text-muted-foreground text-xs min-w-[70px]">Ciudad</span>
            <span className="font-semibold">Panama City</span>
          </div>
          <div className="flex gap-2">
            <span className="text-muted-foreground text-xs min-w-[70px]">País</span>
            <span className="font-semibold flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-primary" /> Panama
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityCard;
