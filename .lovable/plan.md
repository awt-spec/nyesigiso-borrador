

# Plan: Actualizar descripciones de los 7 productos de crédito existentes

Solo se actualizan los `scope` (descripciones) de los 7 items que ya existen en el grupo "creditos" del Dominio 06. **No se agregan productos nuevos.**

## Items a actualizar (líneas 245-251 de `src/data/domains.ts`)

1. **Crédito Personal** (L245) → Contexto Crédit Consommation / Salaire-Pension, fórmula cuota sistema francés, regla BCEAO 33%, ejemplo numérico
2. **Crédito Inmobiliario** (L246) → 3 modalidades Habitat, LTV ≤70%, fórmula para no-asalariados por flujo de negocio
3. **Crédito Profesional** (L247) → AGR <1M / >1M XOF, análisis flujo de caja, ROI mínimo, capacidad de pago 40%
4. **Avales/Fianzas** (L248) → Avales solidarios cooperativos, comisión de aval, provisión contingente PD×LGD×CCF
5. **Compromiso por Firma** (L249) → Cartas de compromiso ante proveedores/fondeo, exposición pre-desembolso
6. **Sobregiro** (L250) → Découvert Salaire/Pension, factor 50-70%, liquidación automática contra nómina
7. **Gestión de Balances** (L251) → Reestructuración preventiva, consolidación de deudas, nueva cuota

## Archivo a modificar
- **`src/data/domains.ts`** — Líneas 245-251: reemplazar los `scope` cortos actuales por descripciones extensas trilingües (ES/FR/EN) con el contenido del documento Nyèsigiso

## Lo que NO se modifica
- No se agregan items nuevos
- No se tocan otros dominios ni grupos
- No se modifican componentes

