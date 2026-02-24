import { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronUp, ChevronDown, DollarSign, BookOpen, Calculator, Lightbulb, Shield, FileText } from "lucide-react";

interface CreditScopeRendererProps {
  text: string;
}

interface ParsedBlock {
  type: "context" | "formula" | "params" | "example" | "rule" | "result";
  title?: string;
  formula?: string;
  lines?: { label: string; value?: string; isCalc?: boolean; isResult?: boolean }[];
  text?: string;
}

const labels: Record<string, Record<string, string>> = {
  context: { es: "CONTEXTO", fr: "CONTEXTE", en: "CONTEXT" },
  formula: { es: "FÓRMULA", fr: "FORMULE", en: "FORMULA" },
  example: { es: "EJEMPLO", fr: "EXEMPLE", en: "EXAMPLE" },
  rule: { es: "REGLA SAF+", fr: "RÈGLE SAF+", en: "SAF+ RULE" },
  result: { es: "RESULTADO", fr: "RÉSULTAT", en: "RESULT" },
};

function parseText(text: string, lang: string): ParsedBlock[] {
  const blocks: ParsedBlock[] = [];
  const sentences = text.split(/(?<=\.)\s+/);

  let contextBuf: string[] = [];
  let formulaBuf: string[] = [];
  let exampleBuf: string[] = [];
  let ruleBuf: string[] = [];

  const formulaRe = /Fórmula|Formule|Formula|cuota|mensualit|installment|LTV\s*=|Cmáx|Cmax|Pmáx|Pmax|Comisión\s*=|Commission\s*=|Provisión\s*=|Provision\s*=|Découvert Máx|Découvert Max|Max Overdraft|Saldo Único|Solde Unique|Single Balance|Cnueva|Cnouvelle|Cnew|Ingreso Neto|Revenu Net|Estimated Net|Flujo Neto|Flux Net|Net Flow|Límite|Limite|Limit/i;
  const exampleRe = /Ejemplo|Exemple|Example|Salario mínimo|Salaire minimum|Minimum salary|Verificación|Vérification|Verification/i;
  const ruleRe = /BCEAO|regla|règle|rule|SAF\+|Capacidad de pago|Capacité de paiement|payment capacity/i;

  for (const s of sentences) {
    if (exampleRe.test(s)) exampleBuf.push(s);
    else if (formulaRe.test(s)) formulaBuf.push(s);
    else if (ruleRe.test(s)) ruleBuf.push(s);
    else contextBuf.push(s);
  }

  // Context block
  if (contextBuf.length > 0) {
    blocks.push({ type: "context", text: contextBuf.join(" ") });
  }

  // Formula block — extract the formula expression and parameters
  if (formulaBuf.length > 0) {
    const fullText = formulaBuf.join(" ");
    // Try to extract key formulas like "X = ..."
    const formulaMatches = fullText.match(/([A-ZΣ][a-záéíóúàèùêôîïüñ\w\s]*\s*=\s*[^.]+?)(?:\.|$)/g);
    const params: { label: string; value?: string }[] = [];

    if (formulaMatches) {
      for (const fm of formulaMatches) {
        const parts = fm.split(/\s*=\s*/);
        if (parts.length >= 2) {
          params.push({ label: parts[0].trim(), value: parts.slice(1).join("=").replace(/\.$/, "").trim() });
        }
      }
    }

    // Remaining descriptive text
    let descText = fullText;
    if (formulaMatches) {
      for (const fm of formulaMatches) {
        descText = descText.replace(fm, "");
      }
    }
    descText = descText.replace(/\s+/g, " ").trim();

    blocks.push({
      type: "formula",
      text: descText || undefined,
      lines: params.map(p => ({ label: p.label, value: p.value })),
    });
  }

  // Rule block
  if (ruleBuf.length > 0) {
    blocks.push({ type: "rule", text: ruleBuf.join(" ") });
  }

  // Example block — parse into line items
  if (exampleBuf.length > 0) {
    const fullText = exampleBuf.join(" ");
    // Try to extract "key = value" or "key: value" patterns with numbers
    const lineItems: { label: string; value?: string; isCalc?: boolean; isResult?: boolean }[] = [];
    
    // Split by comma or → to find individual data points
    const parts = fullText.split(/[,→]/);
    for (const part of parts) {
      const trimmed = part.trim();
      const kvMatch = trimmed.match(/^(.+?)\s*[=:]\s*(.+)$/);
      if (kvMatch) {
        const val = kvMatch[2].replace(/\.$/, "").trim();
        // Check if it has a number with currency/unit
        if (/\d/.test(val)) {
          lineItems.push({ label: kvMatch[1].trim(), value: val });
        } else {
          lineItems.push({ label: trimmed });
        }
      } else if (/\d/.test(trimmed)) {
        lineItems.push({ label: trimmed });
      }
    }

    if (lineItems.length > 0) {
      // Mark the last numeric item as result
      for (let i = lineItems.length - 1; i >= 0; i--) {
        if (lineItems[i].value && /\d/.test(lineItems[i].value!)) {
          lineItems[i].isResult = true;
          break;
        }
      }
      blocks.push({ type: "example", lines: lineItems });
    } else {
      blocks.push({ type: "example", text: fullText });
    }
  }

  return blocks;
}

const blockIcons: Record<string, React.ElementType> = {
  context: BookOpen,
  formula: Calculator,
  example: Lightbulb,
  rule: Shield,
  result: DollarSign,
};

const CreditScopeRenderer = ({ text }: CreditScopeRendererProps) => {
  const { language } = useLanguage();
  const blocks = useMemo(() => parseText(text, language), [text, language]);

  if (blocks.length === 0) {
    return (
      <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
        <p className="text-muted-foreground text-sm">{text}</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {blocks.map((block, idx) => (
        <BlockRenderer key={idx} block={block} index={idx} lang={language} />
      ))}
    </div>
  );
};

interface BlockRendererProps {
  block: ParsedBlock;
  index: number;
  lang: string;
}

const BlockRenderer = ({ block, index, lang }: BlockRendererProps) => {
  const [open, setOpen] = useState(index === 0);
  const Icon = blockIcons[block.type] || FileText;
  const label = labels[block.type]?.[lang] || block.type.toUpperCase();

  const headerColors: Record<string, string> = {
    context: "border-l-primary/60",
    formula: "border-l-blue-500/60",
    example: "border-l-amber-500/60",
    rule: "border-l-emerald-500/60",
  };

  const iconColors: Record<string, string> = {
    context: "bg-primary/10 text-primary",
    formula: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    example: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    rule: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  };

  return (
    <div
      className={`rounded-xl border border-border/60 bg-card overflow-hidden transition-all duration-300 animate-fade-in border-l-[3px] ${headerColors[block.type] || "border-l-primary/40"}`}
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: "both" }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left group hover:bg-muted/30 transition-colors"
      >
        <span className={`flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 ${iconColors[block.type] || "bg-primary/10 text-primary"}`}>
          <Icon className="w-4 h-4" />
        </span>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-bold tracking-wider text-muted-foreground">
            {label}
          </span>
          {block.type === "context" && block.text && (
            <p className="text-sm text-foreground/80 mt-0.5 line-clamp-1">{block.text.split(".")[0]}.</p>
          )}
        </div>
        <span className="text-muted-foreground transition-transform duration-200">
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>

      {/* Body */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 pb-4 space-y-3">
          {/* Context: paragraph */}
          {block.type === "context" && block.text && (
            <p className="text-muted-foreground text-sm leading-relaxed">{block.text}</p>
          )}

          {/* Formula: formula expressions as cards */}
          {block.type === "formula" && (
            <>
              {block.text && (
                <p className="text-muted-foreground text-sm leading-relaxed">{block.text}</p>
              )}
              {block.lines && block.lines.length > 0 && (
                <div className="space-y-2">
                  {block.lines.map((line, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-4 bg-muted/40 rounded-lg px-4 py-3 border border-border/40"
                    >
                      <span className="text-sm text-foreground/80 font-medium">{line.label}</span>
                      {line.value && (
                        <span className="text-xs font-semibold text-primary bg-primary/8 border border-primary/15 px-3 py-1.5 rounded-lg whitespace-nowrap font-mono">
                          {line.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Rule: highlighted text */}
          {block.type === "rule" && block.text && (
            <div className="bg-emerald-500/5 dark:bg-emerald-500/10 rounded-lg px-4 py-3 border border-emerald-500/15">
              <p className="text-sm text-foreground/80 leading-relaxed">{block.text}</p>
            </div>
          )}

          {/* Example: structured line items */}
          {block.type === "example" && (
            <>
              {block.text && (
                <p className="text-muted-foreground text-sm leading-relaxed">{block.text}</p>
              )}
              {block.lines && block.lines.length > 0 && (
                <div className="space-y-0 rounded-xl overflow-hidden border border-border/40">
                  {block.lines.map((line, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between gap-4 px-4 py-3 ${
                        line.isResult
                          ? "bg-primary/8 border-t-2 border-t-primary/20"
                          : i % 2 === 0
                            ? "bg-muted/30"
                            : "bg-card"
                      }`}
                    >
                      <span className={`text-sm ${line.isResult ? "font-bold text-foreground" : "text-foreground/70"}`}>
                        {line.label}
                      </span>
                      {line.value && (
                        <span className={`text-sm font-mono font-bold px-3 py-1 rounded-lg border whitespace-nowrap ${
                          line.isResult
                            ? "text-primary bg-primary/10 border-primary/20 text-base"
                            : "text-foreground/80 bg-muted/50 border-border/50"
                        }`}>
                          {line.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditScopeRenderer;
