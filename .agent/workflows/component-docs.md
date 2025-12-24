# Workflow: Crear Documentación de Componentes FlyonUI

## Contexto

Este workflow describe cómo crear documentación estilo DaisyUI para componentes CSS en `packages/flyonui` y visualizarla en `apps/ui`.

## Estructura del Proyecto

```
curveui/
├── apps/ui/                        # Documentación Next.js
│   ├── components/
│   │   └── ClassesTable.tsx        # Tabla de clases con badges
│   ├── content/docs/html/components/
│   │   └── [component].mdx         # Docs MDX por componente
│   └── registry/html/[component]/
│       └── [component]-*.ts        # Ejemplos HTML
└── packages/flyonui/src/components/
    └── [component].css             # CSS del componente
```

## Pasos para Agregar un Nuevo Componente

### 1. Analizar el CSS del componente

Ver `packages/flyonui/src/components/[component].css` e identificar:
- Clase principal (ej: `.btn`, `.card`, `.alert`)
- Variantes de color (ej: `-primary`, `-secondary`)
- Variantes de estilo (ej: `-outline`, `-soft`, `-ghost`)
- Estados/behavior (ej: `-active`, `-disabled`)
- Tamaños (ej: `-xs`, `-sm`, `-md`, `-lg`, `-xl`)
- Modificadores (ej: `-wide`, `-block`, `-circle`)

### 2. Agregar datos de clases en ClassesTable.tsx

En `apps/ui/components/ClassesTable.tsx`, agregar:

```typescript
export const [component]Classes: ClassInfo[] = [
  { name: "[component]", type: "component", description: "Descripción" },
  { name: "[component]-primary", type: "color", description: "primary color" },
  // ... etc
]

export function [Component]ClassesTable() {
  return <ClassesTable classes={[component]Classes} />
}
```

### 3. Registrar en mdx-components.tsx

En `apps/ui/mdx-components.tsx`:

```typescript
import { [Component]ClassesTable } from "@/components/ClassesTable";

export const mdxComponents = {
  // ...
  [Component]ClassesTable,
}
```

### 4. Crear ejemplos HTML

En `apps/ui/registry/html/[component]/`:

```typescript
// [component]-default.ts
export default {
  name: "[component]-default",
  description: "Default [component]",
  html: `<div class="[component]">...</div>`,
};
```

### 5. Registrar ejemplos en index.ts

En `apps/ui/registry/html/index.ts`:

```typescript
import [component]Default from "./[component]/[component]-default";

export const HtmlIndex = {
  [[component]Default.name]: [component]Default,
  // ...
}
```

### 6. Crear documentación MDX

En `apps/ui/content/docs/html/components/[component].mdx`:

```mdx
---
title: [Component]
description: Descripción del componente.
---

Descripción del componente.

<[Component]ClassesTable />

## Default [Component]

Explicación de uso con la clase `[component]`.

<HtmlPreview name="[component]-default" />

## Variantes

...
```

## Tipos de Badges

| Type | Color | Uso |
|------|-------|-----|
| `component` | Gris | Clase principal |
| `color` | Verde | Colores semánticos |
| `style` | Rojo | Estilos visuales |
| `behavior` | Azul | Estados |
| `size` | Amarillo | Tamaños |
| `modifier` | Índigo | Modificadores |

## Comandos de Desarrollo

```bash
# En apps/ui
npm run dev        # Servidor en localhost:4000

# En packages/flyonui  
npm run watch:src  # Hot reload CSS
```

## Componentes Pendientes

Ver `packages/flyonui/src/components/` para lista completa:
- [ ] accordion
- [ ] alert
- [ ] avatar
- [ ] badge
- [ ] breadcrumbs
- [x] button ✅
- [ ] card
- [ ] carousel
- [ ] chat
- [ ] checkbox
- [ ] collapse
- [ ] divider
- [ ] drawer
- [ ] dropdown
- [ ] input
- [ ] menu
- [ ] modal
- [ ] progress
- [ ] radio
- [ ] range
- [ ] select
- [ ] skeleton
- [ ] switch
- [ ] tab
- [ ] table
- [ ] textarea
- [ ] timeline
- [ ] tooltip
