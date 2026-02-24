

# Plan: Reestructurar el sitio con la estructura exacta del documento RFP

## Problema actual
Los dominios 02-12 tienen una estructura plana (lista de items sin sub-categorias), pero el documento PDF muestra que cada dominio tiene **sub-categorias** con encabezados (ej: "Agencia / Agence", "Banca a Distancia / Banque a distance") y cada item tiene un **estado de cobertura** con colores ([CUBIERTO], [PARCIAL], [NO CUBIERTO - A COTIZAR], [EXCLUIDO - Art. 6]).

## Cambios propuestos

### 1. Actualizar el modelo de datos (`src/data/domains.ts`)

Agregar soporte para sub-categorias y estados de cobertura:

```text
DomainItem (actualizado):
  - es, fr, en (nombre del item)
  - scope: { es, fr, en } (descripcion)
  - status: "cubierto" | "parcial" | "no-cubierto" | "excluido"
  - group?: string (sub-categoria a la que pertenece)

Domain (actualizado):
  - groups?: { id: string, title: { es, fr, en } }[]
```

Actualizar **todos los dominios 02-12** con los datos exactos del PDF:
- **Dominio 02 (Multicanal)**: 2 grupos (Agencia, Banca a Distancia) con 6 items y estados correctos
- **Dominio 03 (Marketing)**: 2 grupos (Marketing, Comercial) con 6 items
- **Dominio 04 (Referencial)**: 4 items sin sub-grupos
- **Dominio 05 (Gestion Clientes)**: 3 grupos (Gestion, Riesgos, Juridico) con ~11 items
- **Dominio 06 (Productos)**: 4 grupos (Depositos, Ahorro, Creditos, Catalogo) con ~12 items
- **Dominio 07 (Intercambios Externos)**: 1 item
- **Dominio 08 (Funciones Soporte)**: 5 grupos (Contabilidad, RRHH, Control General, Finanzas, Logistica)
- **Dominio 09 (Pilotaje)**: 2 grupos (Pilotaje, Apoyo a la Decision)
- **Dominio 10 (Intercambios Internos)**: 4 items
- **Dominio 11 (Caracteristicas Tecnicas)**: 12 items tecnicas
- **Dominio 12 (Prestaciones Anexas)**: 8 items

**El Dominio 01 (Presentacion) NO se toca** - se mantiene tal cual con los componentes custom ya creados.

### 2. Actualizar el componente `DomainSection.tsx`

- Renderizar **encabezados de sub-categoria** como barras azules (estilo del screenshot) cuando un grupo cambia
- Mostrar **badges de estado** con colores:
  - Verde: [CUBIERTO]
  - Naranja/amarillo: [PARCIAL]
  - Rojo: [NO CUBIERTO - A COTIZAR]
  - Gris oscuro: [EXCLUIDO - Art. 6]
- Actualizar el contador del header para mostrar items cubiertos vs total (ej: "35/77")
- Mantener todos los custom renderers existentes para el Dominio 01

### 3. Estilo visual (referencia del screenshot)

```text
+--------------------------------------------------+
| Agencia / Agence                    [barra azul]  |
+--------------------------------------------------+
| * Puesto de Trabajo / Poste de travail [CUBIERTO] |
|   Descripcion del alcance...                      |
| * Operaciones de Ventanilla          [CUBIERTO]   |
|   Descripcion...                                  |
| * Cambio Manual de Divisas           [PARCIAL]    |
|   Descripcion...                                  |
+--------------------------------------------------+
| Banca a Distancia / Banque a distance [barra azul]|
+--------------------------------------------------+
| * Internet Banking      [NO CUBIERTO - A COTIZAR] |
|   Descripcion...                                  |
```

## Lo que NO se modifica
- Componentes custom existentes: IdentityCard, FinancialSummary, CompanyStructure, WorldMap, BusinessLines, ProductEvolution, ReferencesGrid, ArchitectureDiagram
- Dominio 01 (Presentacion General) - permanece intacto
- Header, Hero, SynthesisTable, DomainNav, Footer
- Estructura general de la pagina

## Seccion tecnica

### Archivos a modificar:
1. **`src/data/domains.ts`** - Agregar campos `status` y `group` al interface `DomainItem`, agregar `groups` al interface `Domain`, actualizar datos de dominios 02-12
2. **`src/components/landing/DomainSection.tsx`** - Renderizar sub-categorias como barras azules, badges de estado con colores, contador actualizado

### Archivos sin cambios:
- Todos los componentes en `src/components/landing/` (excepto DomainSection)
- `src/pages/Index.tsx`, `src/App.tsx`
- Todos los componentes UI

