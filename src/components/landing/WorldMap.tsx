import { useState } from "react";
import { Globe, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  es: { countries: "países", continents: "continentes", americas: "AMÉRICAS", africa: "ÁFRICA", europe: "EUROPA", asia: "ASIA" },
  fr: { countries: "pays", continents: "continents", americas: "AMÉRIQUES", africa: "AFRIQUE", europe: "EUROPE", asia: "ASIE" },
  en: { countries: "countries", continents: "continents", americas: "AMERICAS", africa: "AFRICA", europe: "EUROPE", asia: "ASIA" },
};

interface Region {
  nameKey: "americas" | "africa" | "europe" | "asia";
  countries: string[];
  count: number;
}

const regions: Region[] = [
  {
    nameKey: "americas",
    countries: [
      "Costa Rica", "Ecuador", "El Salvador", "Guatemala", "Honduras",
      "Nicaragua", "Bolivia", "Brasil", "Canadá", "Chile", "Colombia",
      "Haití", "México", "Panamá", "Paraguay", "Perú",
      "Rep. Dominicana", "Uruguay", "Venezuela"
    ],
    count: 19,
  },
  {
    nameKey: "africa",
    countries: [
      "Benín", "Burkina Faso", "Djibouti", "Gabón", "Guinea",
      "Madagascar", "Malí", "Mauritania", "Níger", "Senegal",
      "Tanzania", "Togo", "Zambia"
    ],
    count: 13,
  },
  {
    nameKey: "europe",
    countries: ["Bulgaria", "Polonia"],
    count: 2,
  },
  {
    nameKey: "asia",
    countries: ["Corea del Sur"],
    count: 1,
  },
];

const WorldMap = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const { language } = useLanguage();
  const l = t[language];
  const totalCountries = regions.reduce((acc, r) => acc + r.count, 0);

  const regionColors: Record<string, { border: string; bg: string; text: string }> = {
    americas: { border: "border-primary", bg: "bg-primary", text: "text-primary" },
    africa: { border: "border-[hsl(var(--sysde-green))]", bg: "bg-[hsl(var(--sysde-green))]", text: "text-sysde-green" },
    europe: { border: "border-primary", bg: "bg-primary", text: "text-primary" },
    asia: { border: "border-primary", bg: "bg-primary", text: "text-primary" },
  };

  const positions: Record<string, string> = {
    americas: "left-[8%] top-[15%] w-[28%] h-[70%]",
    africa: "left-[42%] top-[20%] w-[22%] h-[65%]",
    europe: "left-[66%] top-[10%] w-[14%] h-[35%]",
    asia: "left-[82%] top-[18%] w-[14%] h-[35%]",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          <span className="text-2xl font-black text-foreground">{totalCountries}</span>
          <span className="text-muted-foreground text-sm">{l.countries}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-foreground">4</span>
          <span className="text-muted-foreground text-sm">{l.continents}</span>
        </div>
      </div>

      <div className="relative w-full aspect-[2/1] bg-muted/30 rounded-2xl border border-border overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {regions.map((region) => {
          const isActive = activeRegion === region.nameKey;
          const c = regionColors[region.nameKey];
          return (
            <button
              key={region.nameKey}
              className={`absolute ${positions[region.nameKey]} rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-1 cursor-pointer ${
                isActive
                  ? `${c.border} ${c.bg}/15 scale-[1.02] shadow-lg`
                  : `${c.border}/20 ${c.bg}/5 hover:${c.bg}/10 hover:${c.border}/40`
              }`}
              onClick={() => setActiveRegion(isActive ? null : region.nameKey)}
            >
              <span className={`text-3xl font-black ${c.text}`}>{region.count}</span>
              <span className={`text-xs font-bold ${c.text}/80`}>{l[region.nameKey]}</span>
              {region.count > 5 && (
                <div className="flex flex-wrap justify-center gap-0.5 mt-1 px-2">
                  {[...Array(Math.min(region.count, 19))].map((_, i) => (
                    <MapPin key={i} className={`w-2.5 h-2.5 ${c.text}/60`} />
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {activeRegion && (
        <div className="bg-card rounded-xl border border-border p-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary" />
            {l[activeRegion as keyof typeof l]}
          </h4>
          <div className="flex flex-wrap gap-2">
            {regions
              .find((r) => r.nameKey === activeRegion)
              ?.countries.map((country) => (
                <span key={country} className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                  <MapPin className="w-3 h-3" />
                  {country}
                </span>
              ))}
          </div>
        </div>
      )}

      {!activeRegion && (
        <div className="flex flex-wrap gap-2">
          {regions.map((r) => (
            <button
              key={r.nameKey}
              onClick={() => setActiveRegion(r.nameKey)}
              className="inline-flex items-center gap-2 text-xs font-bold bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary px-4 py-2 rounded-full transition-colors border border-border"
            >
              {l[r.nameKey]}
              <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded-full text-[10px]">{r.count}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorldMap;
