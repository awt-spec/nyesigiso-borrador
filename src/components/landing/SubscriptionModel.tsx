import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2, Infinity, Shield, Zap, Globe, Users, Database, Server, Headphones, TrendingUp, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

type Lang = "es" | "fr" | "en";

const labels: Record<Lang, Record<string, string>> = {
  es: {
    badge: "MODELO DE SUSCRIPCIÓN",
    title: "Todo Ilimitado. Sin costos adicionales. Sin Sorpresas.",
    subtitle: "Una suscripción que crece con Nyèsigiso. Sin límites de usuarios, sin restricciones de agencias, sin costos ocultos.",
    unlimited: "Ilimitado",
    usersTitle: "Usuarios Concurrentes",
    usersDesc: "Sin restricción de puestos de trabajo ni usuarios simultáneos. Toda la organización conectada.",
    agenciesTitle: "Agencias Conectadas",
    agenciesDesc: "94 sucursales operando en tiempo real sobre una plataforma unificada y centralizada.",
    licensesTitle: "Licencias de Uso",
    licensesDesc: "Licencia perpetua sin límite. Crecimiento orgánico sin costos adicionales de licenciamiento.",
    dbTitle: "Bases de Datos Consolidadas",
    dbDesc: "87 bases unificadas en una sola base centralizada. Una fuente de verdad para toda la red.",
    supportTitle: "Soporte Técnico",
    supportDesc: "Acceso completo al equipo SYSDE: solicitudes, correcciones, actualizaciones y asistencia continua.",
    updatesTitle: "Actualizaciones de Plataforma",
    updatesDesc: "Todas las mejoras, parches de seguridad y nuevas funcionalidades incluidas en la suscripción.",
    scalabilityTitle: "Escalabilidad",
    scalabilityDesc: "Arquitectura preparada para crecer: más agencias, más usuarios, más volumen — sin cargos extra.",
    securityTitle: "Seguridad y Cumplimiento",
    securityDesc: "Cumplimiento regulatorio BCEAO, cifrado de datos, auditoría y trazabilidad completa.",
    bottomTitle: "Un precio. Todo incluido.",
    bottomDesc: "Sin negociaciones por módulo. Sin sorpresas al final del trimestre. La transformación digital completa de Nyèsigiso bajo un modelo predecible y transparente.",
  },
  fr: {
    badge: "MODÈLE D'ABONNEMENT",
    title: "Tout Illimité. Sans coûts additionnels. Sans Surprises.",
    subtitle: "Un abonnement qui grandit avec Nyèsigiso. Sans limites d'utilisateurs, sans restrictions d'agences, sans coûts cachés.",
    unlimited: "Illimité",
    usersTitle: "Utilisateurs Concurrents",
    usersDesc: "Aucune restriction de postes de travail ni d'utilisateurs simultanés. Toute l'organisation connectée.",
    agenciesTitle: "Agences Connectées",
    agenciesDesc: "94 succursales opérant en temps réel sur une plateforme unifiée et centralisée.",
    licensesTitle: "Licences d'Utilisation",
    licensesDesc: "Licence perpétuelle sans limite. Croissance organique sans coûts additionnels de licence.",
    dbTitle: "Bases de Données Consolidées",
    dbDesc: "87 bases unifiées en une seule base centralisée. Une source de vérité pour tout le réseau.",
    supportTitle: "Support Technique",
    supportDesc: "Accès complet à l'équipe SYSDE : requêtes, corrections, mises à jour et assistance continue.",
    updatesTitle: "Mises à Jour de la Plateforme",
    updatesDesc: "Toutes les améliorations, correctifs de sécurité et nouvelles fonctionnalités inclus dans l'abonnement.",
    scalabilityTitle: "Évolutivité",
    scalabilityDesc: "Architecture prête à grandir : plus d'agences, plus d'utilisateurs, plus de volume — sans frais supplémentaires.",
    securityTitle: "Sécurité et Conformité",
    securityDesc: "Conformité réglementaire BCEAO, chiffrement des données, audit et traçabilité complète.",
    bottomTitle: "Un prix. Tout inclus.",
    bottomDesc: "Sans négociation par module. Sans surprises en fin de trimestre. La transformation digitale complète de Nyèsigiso sous un modèle prévisible et transparent.",
  },
  en: {
    badge: "SUBSCRIPTION MODEL",
    title: "Everything Unlimited. No Additional Costs. No Surprises.",
    subtitle: "A subscription that grows with Nyèsigiso. No user limits, no agency restrictions, no hidden costs.",
    unlimited: "Unlimited",
    usersTitle: "Concurrent Users",
    usersDesc: "No workstation or simultaneous user restrictions. The entire organization connected.",
    agenciesTitle: "Connected Agencies",
    agenciesDesc: "94 branches operating in real time on a unified, centralized platform.",
    licensesTitle: "Usage Licenses",
    licensesDesc: "Perpetual license without limits. Organic growth without additional licensing costs.",
    dbTitle: "Consolidated Databases",
    dbDesc: "87 databases unified into a single centralized database. One source of truth for the entire network.",
    supportTitle: "Technical Support",
    supportDesc: "Full access to the SYSDE team: requests, fixes, updates, and ongoing assistance.",
    updatesTitle: "Platform Updates",
    updatesDesc: "All improvements, security patches, and new features included in the subscription.",
    scalabilityTitle: "Scalability",
    scalabilityDesc: "Architecture built to grow: more agencies, more users, more volume — no extra charges.",
    securityTitle: "Security & Compliance",
    securityDesc: "BCEAO regulatory compliance, data encryption, audit trails, and full traceability.",
    bottomTitle: "One Price. Everything Included.",
    bottomDesc: "No per-module negotiations. No end-of-quarter surprises. Nyèsigiso's complete digital transformation under a predictable, transparent model.",
  },
};

const SubscriptionModel = () => {
  const { language } = useLanguage();
  const t = labels[language];
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Users, title: t.usersTitle, desc: t.usersDesc, color: "from-blue-500 to-cyan-500" },
    { icon: Globe, title: t.agenciesTitle, desc: t.agenciesDesc, color: "from-emerald-500 to-teal-500" },
    { icon: Star, title: t.licensesTitle, desc: t.licensesDesc, color: "from-amber-500 to-orange-500" },
    { icon: Database, title: t.dbTitle, desc: t.dbDesc, color: "from-purple-500 to-violet-500" },
    { icon: Headphones, title: t.supportTitle, desc: t.supportDesc, color: "from-pink-500 to-rose-500" },
    { icon: TrendingUp, title: t.updatesTitle, desc: t.updatesDesc, color: "from-primary to-primary/70" },
    { icon: Server, title: t.scalabilityTitle, desc: t.scalabilityDesc, color: "from-indigo-500 to-blue-500" },
    { icon: Shield, title: t.securityTitle, desc: t.securityDesc, color: "from-emerald-600 to-green-500" },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-foreground relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4 text-xs font-bold tracking-widest">
            <Infinity className="w-3.5 h-3.5 mr-1.5" />
            {t.badge}
          </Badge>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-background leading-tight mb-4 whitespace-nowrap">
            {t.title}
          </h2>
          <p className="text-background/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-2xl border border-background/10 bg-background/5 p-6 transition-all duration-500 hover:bg-background/10 hover:border-primary/30 hover:scale-[1.03] hover:-translate-y-1 cursor-default ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Infinity className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{t.unlimited}</span>
                  </div>

                  <h3 className="text-background font-bold text-sm mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-background/40 text-xs leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-block rounded-2xl border border-primary/20 bg-primary/5 p-8 max-w-2xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <Zap className="w-5 h-5 text-primary" />
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-background mb-3">
              {t.bottomTitle}
            </h3>
            <p className="text-background/50 text-sm leading-relaxed">
              {t.bottomDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionModel;
