import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ImplementationPlan from "@/components/landing/ImplementationPlan";
import SubscriptionModel from "@/components/landing/SubscriptionModel";
import Footer from "@/components/landing/Footer";

const IndexContent = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ImplementationPlan />
      <SubscriptionModel />
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
