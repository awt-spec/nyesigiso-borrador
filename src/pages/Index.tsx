import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import DomainSection from "@/components/landing/DomainSection";
import SynthesisTable from "@/components/landing/SynthesisTable";
import DomainNav from "@/components/landing/DomainNav";
import Footer from "@/components/landing/Footer";
import { domains } from "@/data/domains";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <SynthesisTable />
        <DomainNav />
        {domains.map((domain, i) => (
          <DomainSection key={domain.id} domain={domain} index={i} />
        ))}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
