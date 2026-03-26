import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2, Infinity, Shield, Zap, Globe, Users, Database, Server, Headphones, TrendingUp, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

type Lang = "es" | "fr" | "en";

const labels: Record<Lang, Record<string, string>> = {
  es: {
    badge: "MODELO DE SUSCRIPCIÓN",
    titleLine1: "Todo Ilimitado. Sin costos adicionales.",
    titleLine2: "Sin Sorpresas.",
    subtitle: "Una suscripción que hace crecer a Nyèsigiso. Sin límites de usuarios, sin restricciones de agencias, sin costos ocultos.",
    unlimited: "Ilimitado",
    usersTitle: "Usuarios Ilimitados",
    usersDesc: "Sin restricción de la cantidad de puestos de trabajo. Toda la organización conectada hoy y a futuro.",
    agenciesTitle: "Agencias Ilimitadas",
    agenciesDesc: "94 sucursales operando en tiempo real sobre una plataforma unificada y centralizada. Agencias actuales y futuras incluidas.",
    licensesTitle: "Licencias Ilimitadas",
    licensesDesc: "Licencia perpetua sin límite. Crecimiento orgánico sin costos adicionales de licenciamiento.",
    dbTitle: "Bases de Datos Ilimitadas",
    dbDesc: "87 bases unificadas en una sola base centralizada. Una fuente de verdad para toda la red.",
    supportTitle: "Soporte Ilimitado",
    supportDesc: "Acceso completo al equipo SYSDE: solicitudes, correcciones, actualizaciones y asistencia continua.",
    updatesTitle: "Actualizaciones Ilimitadas",
    updatesDesc: "Todas las mejoras, actualizaciones y nuevas funcionalidades incluidas en la suscripción.",
    scalabilityTitle: "Escalabilidad Ilimitada",
    scalabilityDesc: "Arquitectura preparada para crecer: más agencias, más usuarios, más volumen — sin cargos extra.",
    securityTitle: "Seguridad Ilimitada",
    securityDesc: "Cumplimiento regulatorio BCEAO, cifrado de datos, auditoría y trazabilidad completa.",
    bottomTitle: "Un precio. Todo incluido.",
    bottomDesc: "Sin negociaciones adicionales. Sin sorpresas al final del trimestre. La transformación digital completa de Nyèsigiso bajo un modelo predecible y transparente.",
  },
  fr: {
    badge: "MODÈLE D'ABONNEMENT",
    titleLine1: "Tout Illimité. Sans coûts additionnels.",
    titleLine2: "Sans Surprises.",
    subtitle: "Un abonnement qui fait grandir Nyèsigiso. Sans limites d'utilisateurs, sans restrictions d'agences, sans coûts cachés.",
    unlimited: "Illimité",
    usersTitle: "Utilisateurs Illimités",
    usersDesc: "Aucune restriction de postes de travail ni d'utilisateurs simultanés. Toute l'organisation connectée.",
    agenciesTitle: "Agences Illimitées",
    agenciesDesc: "94 succursales opérant en temps réel sur une plateforme unifiée et centralisée.",
    licensesTitle: "Licences Illimitées",
    licensesDesc: "Licence perpétuelle sans limite. Croissance organique sans coûts additionnels de licence.",
    dbTitle: "Bases de Données Illimitées",
    dbDesc: "87 bases unifiées en une seule base centralisée. Une source de vérité pour tout le réseau.",
    supportTitle: "Support Illimité",
    supportDesc: "Accès complet à l'équipe SYSDE : requêtes, corrections, mises à jour et assistance continue.",
    updatesTitle: "Mises à Jour Illimitées",
    updatesDesc: "Toutes les améliorations, mises à jour et nouvelles fonctionnalités incluses dans l'abonnement.",
    scalabilityTitle: "Évolutivité Illimitée",
    scalabilityDesc: "Architecture prête à grandir : plus d'agences, plus d'utilisateurs, plus de volume — sans frais supplémentaires.",
    securityTitle: "Sécurité Illimitée",
    securityDesc: "Conformité réglementaire BCEAO, chiffrement des données, audit et traçabilité complète.",
    bottomTitle: "Un prix. Tout inclus.",
    bottomDesc: "Sans négociation par module. Sans surprises en fin de trimestre. La transformation digitale complète de Nyèsigiso sous un modèle prévisible et transparent.",
  },
  en: {
    badge: "SUBSCRIPTION MODEL",
    titleLine1: "Everything Unlimited. No Additional Costs.",
    titleLine2: "No Surprises.",
    subtitle: "A subscription that makes Nyèsigiso grow. No user limits, no agency restrictions, no hidden costs.",
    unlimited: "Unlimited",
    usersTitle: "Unlimited Users",
    usersDesc: "No workstation or simultaneous user restrictions. The entire organization connected.",
    agenciesTitle: "Unlimited Agencies",
    agenciesDesc: "94 branches operating in real time on a unified, centralized platform.",
    licensesTitle: "Unlimited Licenses",
    licensesDesc: "Perpetual license without limits. Organic growth without additional licensing costs.",
    dbTitle: "Unlimited Databases",
    dbDesc: "87 databases unified into a single centralized database. One source of truth for the entire network.",
    supportTitle: "Unlimited Support",
    supportDesc: "Full access to the SYSDE team: requests, fixes, updates, and ongoing assistance.",
    updatesTitle: "Unlimited Updates",
    updatesDesc: "All improvements, updates, and new features included in the subscription.",
    scalabilityTitle: "Unlimited Scalability",
    scalabilityDesc: "Architecture built to grow: more agencies, more users, more volume — no extra charges.",
    securityTitle: "Unlimited Security",
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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-background leading-tight mb-1 whitespace-nowrap">
            {t.titleLine1}
          </h2>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-primary leading-tight mb-4">
            {t.titleLine2}
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
                    <Infinity className="w-4 h-4 text-primary drop-shadow-[0_0_6px_hsl(var(--primary)/0.6)]" />
                    <span className="text-xs font-black text-primary uppercase tracking-wider drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)]">{t.unlimited}</span>
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
