import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calculator, BookOpen, Lightbulb, AlertTriangle } from "lucide-react";

interface CreditScopeRendererProps {
  text: string;
}

interface ScopeSection {
  type: "context" | "formula" | "example" | "rule";
  content: string;
}

const sectionIcons = {
  context: BookOpen,
  formula: Calculator,
  example: Lightbulb,
  rule: AlertTriangle,
};

const sectionLabels: Record<string, Record<string, string>> = {
  context: { es: "Contexto", fr: "Contexte", en: "Context" },
  formula: { es: "Fórmula", fr: "Formule", en: "Formula" },
  example: { es: "Ejemplo", fr: "Exemple", en: "Example" },
  rule: { es: "Regla", fr: "Règle", en: "Rule" },
};

const sectionStyles = {
  context: {
    bg: "bg-primary/5",
    border: "border-primary/15",
    iconColor: "text-primary",
    labelColor: "text-primary",
  },
  formula: {
    bg: "bg-blue-500/5 dark:bg-blue-500/10",
    border: "border-blue-500/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    labelColor: "text-blue-700 dark:text-blue-400",
  },
  example: {
    bg: "bg-amber-500/5 dark:bg-amber-500/10",
    border: "border-amber-500/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    labelColor: "text-amber-700 dark:text-amber-400",
  },
  rule: {
    bg: "bg-emerald-500/5 dark:bg-emerald-500/10",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    labelColor: "text-emerald-700 dark:text-emerald-400",
  },
};

function parseScope(text: string, lang: string): ScopeSection[] {
  const sections: ScopeSection[] = [];
  
  // Split by sentences (period followed by space and uppercase or specific keywords)
  const formulaPatterns = [
    /Fórmula/i, /Formule/i, /Formula/i,
    /\bC\s*=\s*P\s*×/, /\bLTV\s*=/, /\bCmáx\s*=/, /\bCmax\s*=/, 
    /\bPmáx\s*=/, /\bPmax\s*=/, /\bROI\s/,
    /Flujo Neto/i, /Flux Net/i, /Net Flow/i,
    /Ingreso Neto Estimado/i, /Revenu Net Estimé/i, /Estimated Net Income/i,
    /Saldo consolidado/i, /Solde consolidé/i, /Consolidated balance/i,
    /Comisión\s*=/i, /Commission\s*=/i,
    /Provisión\s*=/i, /Provision\s*=/i,
    /Límite/i, /Limite/i, /Limit/i,
    /Interés:/i, /Intérêt/i, /Interest:/i,
    /Découvert Máx/i, /Découvert Max/i, /Max Overdraft/i,
    /Monto máximo/i, /Montant maximum/i, /Maximum amount/i,
    /Nueva cuota/i, /Nouvelle mensualité/i, /New restructured/i,
    /Saldo Único/i, /Solde Unique/i, /Single Balance/i,
  ];
  
  const examplePatterns = [
    /Ejemplo/i, /Exemple/i, /Example/i,
    /Salario mínimo requerido/i, /Salaire minimum requis/i, /Minimum salary required/i,
    /Verificación/i, /Vérification/i, /Verification/i,
  ];
  
  const rulePatterns = [
    /BCEAO/i, /regla/i, /règle/i, /rule/i,
    /Capacidad de pago/i, /Capacité de paiement/i, /payment capacity/i,
    /SAF\+ debe/i, /SAF\+ doit/i, /SAF\+ must/i,
    /SAF\+ lo gestiona/i, /SAF\+ le gère/i, /SAF\+ manages/i,
    /SAF\+ registra/i, /SAF\+ enregistre/i, /SAF\+ records/i,
    /SAF\+ permite/i, /SAF\+ permet/i, /SAF\+ enables/i,
    /SAF\+ liquida/i, /SAF\+ liquide/i, /SAF\+ automatically/i,
  ];
  
  // Split the text into sentences
  const sentences = text.split(/(?<=\.)\s+/);
  
  let contextBuffer = "";
  let formulaBuffer = "";
  let exampleBuffer = "";
  let ruleBuffer = "";
  
  const flushBuffers = () => {
    if (contextBuffer) sections.push({ type: "context", content: contextBuffer.trim() });
    if (formulaBuffer) sections.push({ type: "formula", content: formulaBuffer.trim() });
    if (ruleBuffer) sections.push({ type: "rule", content: ruleBuffer.trim() });
    if (exampleBuffer) sections.push({ type: "example", content: exampleBuffer.trim() });
    contextBuffer = formulaBuffer = exampleBuffer = ruleBuffer = "";
  };
  
  for (const sentence of sentences) {
    const isFormula = formulaPatterns.some(p => p.test(sentence));
    const isExample = examplePatterns.some(p => p.test(sentence));
    const isRule = rulePatterns.some(p => p.test(sentence));
    
    if (isExample) {
      exampleBuffer += (exampleBuffer ? " " : "") + sentence;
    } else if (isFormula) {
      formulaBuffer += (formulaBuffer ? " " : "") + sentence;
    } else if (isRule) {
      ruleBuffer += (ruleBuffer ? " " : "") + sentence;
    } else {
      contextBuffer += (contextBuffer ? " " : "") + sentence;
    }
  }
  
  flushBuffers();
  
  return sections;
}

/** Highlights formula expressions within text */
function renderWithFormulas(text: string) {
  // Match patterns like C = P × [...], LTV = ..., etc.
  const formulaRegex = /([A-ZΣ][a-záéíóúàèùêôîïüñ_\s]*\s*=\s*[^.]+?)(?=\.|$)/g;
  const numericRegex = /(\d[\d\s,.']*\s*(?:XOF|USD|%|meses|mois|months|años|ans|years|días|jours|days)(?:\/mes|\/mois|\/month)?)/gi;
  
  // Split text into parts, highlight formulas and numbers
  const parts: { text: string; isFormula: boolean; isNumber: boolean }[] = [];
  let lastIndex = 0;
  
  // First pass: find numeric values with units
  const matches: { start: number; end: number; type: "number" }[] = [];
  let m;
  while ((m = numericRegex.exec(text)) !== null) {
    matches.push({ start: m.index, end: m.index + m[0].length, type: "number" });
  }
  
  if (matches.length === 0) {
    return <span>{text}</span>;
  }
  
  // Sort by position
  matches.sort((a, b) => a.start - b.start);
  
  const result: React.ReactNode[] = [];
  let idx = 0;
  
  for (const match of matches) {
    if (match.start > idx) {
      result.push(<span key={`t-${idx}`}>{text.slice(idx, match.start)}</span>);
    }
    result.push(
      <span
        key={`m-${match.start}`}
        className="font-semibold text-foreground bg-primary/10 px-1 py-0.5 rounded text-xs"
      >
        {text.slice(match.start, match.end)}
      </span>
    );
    idx = match.end;
  }
  if (idx < text.length) {
    result.push(<span key={`end`}>{text.slice(idx)}</span>);
  }
  
  return <>{result}</>;
}

const CreditScopeRenderer = ({ text }: CreditScopeRendererProps) => {
  const { language } = useLanguage();
  
  const sections = useMemo(() => parseScope(text, language), [text, language]);
  
  if (sections.length <= 1) {
    // Fallback: just render plain text if parsing didn't split anything meaningful
    return (
      <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
        <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-3">
      {sections.map((section, idx) => {
        const Icon = sectionIcons[section.type];
        const style = sectionStyles[section.type];
        const label = sectionLabels[section.type][language];
        
        return (
          <div
            key={idx}
            className={`${style.bg} rounded-lg border ${style.border} p-4 animate-fade-in`}
            style={{ animationDelay: `${idx * 80}ms`, animationFillMode: "both" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon className={`w-3.5 h-3.5 ${style.iconColor} flex-shrink-0`} />
              <span className={`text-[10px] font-bold uppercase tracking-wider ${style.labelColor}`}>
                {label}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {section.type === "formula" || section.type === "example"
                ? renderWithFormulas(section.content)
                : section.content
              }
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CreditScopeRenderer;
