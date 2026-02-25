import { useLanguage } from "@/contexts/LanguageContext";
import { Workflow, MousePointerClick, ShieldCheck, GitBranch, ClipboardList, Plug, Settings } from "lucide-react";

const t = {
  es: {
    title: "Motor de Workflow No-Code",
    subtitle: "100% adaptable a los procesos operativos de Nyèsigiso",
    badge: "No-Code",
    features: [
      { icon: MousePointerClick, label: "Diseñador Visual", desc: "Drag & drop para flujos de aprobación, escalamiento y notificaciones" },
      { icon: ShieldCheck, label: "Reglas de Negocio", desc: "Montos, niveles de autorización, segregación de funciones, plazos y alertas" },
      { icon: ClipboardList, label: "Trazabilidad", desc: "Cada paso registrado: usuario, fecha, hora, acción y comentario" },
      { icon: Plug, label: "Integración Nativa", desc: "Conectado con créditos, ahorro, contabilidad y caja" },
    ],
    flows: "Flujos predefinidos",
    flowList: ["Apertura de cuentas", "Solicitudes de crédito", "Desembolsos", "Reestructuraciones", "Cierre de caja", "Compensación"],
    customization: "Personalización total",
    customDesc: "Los flujos se adaptan en tiempo real a cambios normativos o de política interna sin intervención de desarrollo.",
  },
  fr: {
    title: "Moteur de Workflow No-Code",
    subtitle: "100% adaptable aux processus opérationnels de Nyèsigiso",
    badge: "No-Code",
    features: [
      { icon: MousePointerClick, label: "Concepteur Visuel", desc: "Drag & drop pour flux d'approbation, escalade et notifications" },
      { icon: ShieldCheck, label: "Règles Métier", desc: "Montants, niveaux d'autorisation, séparation des fonctions, délais et alertes" },
      { icon: ClipboardList, label: "Traçabilité", desc: "Chaque étape enregistrée : utilisateur, date, heure, action et commentaire" },
      { icon: Plug, label: "Intégration Native", desc: "Connecté avec crédits, épargne, comptabilité et caisse" },
    ],
    flows: "Flux prédéfinis",
    flowList: ["Ouverture de comptes", "Demandes de crédit", "Décaissements", "Restructurations", "Clôture de caisse", "Compensation"],
    customization: "Personnalisation totale",
    customDesc: "Les flux s'adaptent en temps réel aux changements normatifs ou de politique interne sans développement.",
  },
  en: {
    title: "No-Code Workflow Engine",
    subtitle: "100% adaptable to Nyèsigiso's operational processes",
    badge: "No-Code",
    features: [
      { icon: MousePointerClick, label: "Visual Designer", desc: "Drag & drop for approval flows, escalation, and notifications" },
      { icon: ShieldCheck, label: "Business Rules", desc: "Amounts, authorization levels, segregation of duties, deadlines, and alerts" },
      { icon: ClipboardList, label: "Traceability", desc: "Every step recorded: user, date, time, action, and comment" },
      { icon: Plug, label: "Native Integration", desc: "Connected with credits, savings, accounting, and cash" },
    ],
    flows: "Predefined Flows",
    flowList: ["Account opening", "Credit applications", "Disbursements", "Restructuring", "Cash closing", "Clearing"],
    customization: "Full Customization",
    customDesc: "Flows adapt in real time to regulatory or internal policy changes without development intervention.",
  },
};

const WorkflowDiagram = () => {
  const { language } = useLanguage();
  const l = t[language];

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
          <Workflow className="w-4.5 h-4.5 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-foreground">{l.title}</h4>
            <span className="text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">{l.badge}</span>
          </div>
          <p className="text-xs text-muted-foreground">{l.subtitle}</p>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {l.features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={feat.label}
              className="rounded-xl border border-border bg-card p-4 space-y-2 transition-all duration-500 hover:border-primary/30 hover:shadow-sm"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-sm font-bold text-foreground">{feat.label}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-9">{feat.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Predefined flows */}
      <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-3">
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-foreground uppercase tracking-wider">{l.flows}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {l.flowList.map((flow) => (
            <span
              key={flow}
              className="text-xs bg-card border border-border rounded-lg px-3 py-1.5 text-foreground font-medium hover:border-primary/40 transition-colors"
            >
              {flow}
            </span>
          ))}
        </div>
      </div>

      {/* Customization footer */}
      <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
        <Settings className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
        <div>
          <span className="text-xs font-bold text-primary">{l.customization}</span>
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{l.customDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkflowDiagram;
