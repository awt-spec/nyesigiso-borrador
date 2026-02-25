import { Building2, MapPin, Globe, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  es: {
    commercialName: "Nombre Comercial",
    years: "+33 años desarrollando software financiero",
    headquarters: "Dirección Corporativa",
    building: "Edificio",
    street: "Calle",
    district: "Distrito",
    city: "Ciudad",
    country: "País",
  },
  fr: {
    commercialName: "Nom Commercial",
    years: "+33 ans de développement logiciel financier",
    headquarters: "Siège Social",
    building: "Bâtiment",
    street: "Rue",
    district: "Quartier",
    city: "Ville",
    country: "Pays",
  },
  en: {
    commercialName: "Trade Name",
    years: "+33 years developing financial software",
    headquarters: "Corporate Headquarters",
    building: "Building",
    street: "Street",
    district: "District",
    city: "City",
    country: "Country",
  },
};

const IdentityCard = () => {
  const { language } = useLanguage();
  const l = t[language];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="rounded-xl border border-border bg-card p-5 space-y-3">
        <div className="flex items-center gap-2 text-primary">
          <Building2 className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">{l.commercialName}</span>
        </div>
        <p className="text-lg font-black text-foreground">SYSDE</p>
        <div className="flex items-center gap-2 text-muted-foreground text-xs">
          <Calendar className="w-3.5 h-3.5" />
          <span>{l.years}</span>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5 space-y-3">
        <div className="flex items-center gap-2 text-primary">
          <MapPin className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">{l.headquarters}</span>
        </div>
        <div className="space-y-1.5 text-sm text-foreground">
          {[
            [l.building, "Humboldt Tower"],
            [l.street, "53rd Street East"],
            [l.district, "Marbella District"],
            [l.city, "Panama City"],
          ].map(([label, value]) => (
            <div key={label} className="flex gap-2">
              <span className="text-muted-foreground text-xs min-w-[70px]">{label}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
          <div className="flex gap-2">
            <span className="text-muted-foreground text-xs min-w-[70px]">{l.country}</span>
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
