import { useState } from "react";
import { Globe, MapPin } from "lucide-react";

interface Region {
  name: string;
  color: string;
  countries: string[];
  count: number;
}

const regions: Region[] = [
  {
    name: "Américas",
    color: "hsl(var(--primary))",
    countries: [
      "Costa Rica", "Ecuador", "El Salvador", "Guatemala", "Honduras",
      "Nicaragua", "Bolivia", "Brasil", "Canadá", "Chile", "Colombia",
      "Haití", "México", "Panamá", "Paraguay", "Perú",
      "Rep. Dominicana", "Uruguay", "Venezuela"
    ],
    count: 19,
  },
  {
    name: "África",
    color: "hsl(var(--sysde-green))",
    countries: [
      "Benín", "Burkina Faso", "Djibouti", "Gabón", "Guinea",
      "Madagascar", "Malí", "Mauritania", "Níger", "Senegal",
      "Tanzania", "Togo", "Zambia"
    ],
    count: 13,
  },
  {
    name: "Europa",
    color: "hsl(var(--accent))",
    countries: ["Bulgaria", "Polonia"],
    count: 2,
  },
  {
    name: "Asia",
    color: "hsl(var(--ring))",
    countries: ["Corea del Sur"],
    count: 1,
  },
];

// Simplified SVG world map paths for continents (very simplified outlines)
const WorldMap = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const totalCountries = regions.reduce((acc, r) => acc + r.count, 0);

  return (
    <div className="space-y-6">
      {/* Header stats */}
      <div className="flex items-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          <span className="text-2xl font-black text-foreground">{totalCountries}</span>
          <span className="text-muted-foreground text-sm">países</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-foreground">4</span>
          <span className="text-muted-foreground text-sm">continentes</span>
        </div>
      </div>

      {/* Interactive Map Grid */}
      <div className="relative w-full aspect-[2/1] bg-muted/30 rounded-2xl border border-border overflow-hidden">
        {/* Grid background */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Americas - left side */}
        <button
          className={`absolute left-[8%] top-[15%] w-[28%] h-[70%] rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-1 cursor-pointer ${
            activeRegion === "Américas"
              ? "border-primary bg-primary/15 scale-[1.02] shadow-lg"
              : "border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40"
          }`}
          onClick={() => setActiveRegion(activeRegion === "Américas" ? null : "Américas")}
        >
          <span className="text-3xl font-black text-primary">19</span>
          <span className="text-xs font-bold text-primary/80">AMÉRICAS</span>
          <div className="flex flex-wrap justify-center gap-0.5 mt-1 px-2">
            {[...Array(19)].map((_, i) => (
              <MapPin key={i} className="w-2.5 h-2.5 text-primary/60" />
            ))}
          </div>
        </button>

        {/* Africa - center-right */}
        <button
          className={`absolute left-[42%] top-[20%] w-[22%] h-[65%] rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-1 cursor-pointer ${
            activeRegion === "África"
              ? "border-[hsl(var(--sysde-green))] bg-[hsl(var(--sysde-green))]/15 scale-[1.02] shadow-lg"
              : "border-[hsl(var(--sysde-green))]/20 bg-[hsl(var(--sysde-green))]/5 hover:bg-[hsl(var(--sysde-green))]/10 hover:border-[hsl(var(--sysde-green))]/40"
          }`}
          onClick={() => setActiveRegion(activeRegion === "África" ? null : "África")}
        >
          <span className="text-3xl font-black text-sysde-green">13</span>
          <span className="text-xs font-bold text-[hsl(var(--sysde-green))]/80">ÁFRICA</span>
          <div className="flex flex-wrap justify-center gap-0.5 mt-1 px-2">
            {[...Array(13)].map((_, i) => (
              <MapPin key={i} className="w-2.5 h-2.5 text-[hsl(var(--sysde-green))]/60" />
            ))}
          </div>
        </button>

        {/* Europe - top-right */}
        <button
          className={`absolute left-[66%] top-[10%] w-[14%] h-[35%] rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-1 cursor-pointer ${
            activeRegion === "Europa"
              ? "border-primary bg-primary/15 scale-[1.02] shadow-lg"
              : "border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40"
          }`}
          onClick={() => setActiveRegion(activeRegion === "Europa" ? null : "Europa")}
        >
          <span className="text-2xl font-black text-primary">2</span>
          <span className="text-[10px] font-bold text-primary/80">EUROPA</span>
        </button>

        {/* Asia - far right */}
        <button
          className={`absolute left-[82%] top-[18%] w-[14%] h-[35%] rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-1 cursor-pointer ${
            activeRegion === "Asia"
              ? "border-primary bg-primary/15 scale-[1.02] shadow-lg"
              : "border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40"
          }`}
          onClick={() => setActiveRegion(activeRegion === "Asia" ? null : "Asia")}
        >
          <span className="text-2xl font-black text-primary">1</span>
          <span className="text-[10px] font-bold text-primary/80">ASIA</span>
        </button>
      </div>

      {/* Country detail panel */}
      {activeRegion && (
        <div className="bg-card rounded-xl border border-border p-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary" />
            {activeRegion}
          </h4>
          <div className="flex flex-wrap gap-2">
            {regions
              .find((r) => r.name === activeRegion)
              ?.countries.map((country) => (
                <span
                  key={country}
                  className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full"
                >
                  <MapPin className="w-3 h-3" />
                  {country}
                </span>
              ))}
          </div>
        </div>
      )}

      {/* Region summary pills */}
      {!activeRegion && (
        <div className="flex flex-wrap gap-2">
          {regions.map((r) => (
            <button
              key={r.name}
              onClick={() => setActiveRegion(r.name)}
              className="inline-flex items-center gap-2 text-xs font-bold bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary px-4 py-2 rounded-full transition-colors border border-border"
            >
              {r.name}
              <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded-full text-[10px]">
                {r.count}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorldMap;
