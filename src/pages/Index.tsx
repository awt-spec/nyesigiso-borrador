import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import SynthesisTable from "@/components/landing/SynthesisTable";
import DomainSection from "@/components/landing/DomainSection";
import ImplementationPlan from "@/components/landing/ImplementationPlan";
import Footer from "@/components/landing/Footer";
import { domains } from "@/data/domains";
import { useState } from "react";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";

const detailLabels = {
  es: { expand: "Ver Detalle Completo por Dominio", collapse: "Ocultar Detalle por Dominio", desc: "12 dominios · Presentación General, Multicanal, Marketing, y más" },
  fr: { expand: "Voir le Détail Complet par Domaine", collapse: "Masquer le Détail par Domaine", desc: "12 domaines · Présentation Générale, Multicanal, Marketing, et plus" },
  en: { expand: "View Full Domain Detail", collapse: "Hide Domain Detail", desc: "12 domains · General Presentation, Multichannel, Marketing, and more" },
};

const IndexContent = () => {
  const { language } = useLanguage();
  const [showDomains, setShowDomains] = useState(false);
  const dl = detailLabels[language];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SynthesisTable />

      {/* Expandable domain detail */}
      <div className="py-8 px-4 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => setShowDomains(!showDomains)}
            className="w-full flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:bg-card/80 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {showDomains ? dl.collapse : dl.expand}
                </p>
                <p className="text-sm text-muted-foreground">{dl.desc}</p>
              </div>
            </div>
            {showDomains ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ${showDomains ? "max-h-none opacity-100" : "max-h-0 opacity-0"}`}>
        {domains.map((domain, i) => (
          <DomainSection key={domain.id} domain={domain} index={i} />
        ))}
      </div>

      <ImplementationPlan />
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;
