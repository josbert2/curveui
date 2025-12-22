# Development Guide

## Quick Start

Para desarrollo necesitas 3 terminales corriendo simultáneamente:

### Terminal 1: FlyonUI CSS Watcher
```bash
cd packages/flyonui
bun run watch:css
```
Observa cambios en `src/components/*.css` y genera `flyonui.css`

### Terminal 2: FlyonUI JS Watcher
```bash
cd packages/flyonui
bun run watch:mjs
```
Observa cambios en `src/js/*.ts` y genera `dist/index.js`

### Terminal 3: Next.js Dev Server
```bash
cd apps/ui
bun dev
```
Inicia el servidor en http://localhost:4000

---

## Flujo de Desarrollo

```
┌─────────────────────────────────────────────────────────────┐
│  packages/flyonui/src/components/button.css                 │
│                    ↓                                        │
│  bun run watch:css                                          │
│                    ↓                                        │
│  packages/flyonui/flyonui.css (compilado)                   │
│                    ↓                                        │
│  apps/ui/styles/flyoui.css (@import del CSS compilado)      │
│                    ↓                                        │
│  Next.js detecta cambio → Hot Reload automático             │
└─────────────────────────────────────────────────────────────┘
```

---

## Estructura de Archivos

```
curveui/
├── apps/
│   └── ui/                          # Documentación Next.js
│       ├── app/docs/html/           # Docs HTML/FlyonUI
│       ├── app/docs/react/          # Docs React
│       ├── styles/flyoui.css        # Importa flyonui.css
│       └── content/docs/html/       # MDX de componentes HTML
│
├── packages/
│   └── flyonui/                     # Librería CSS
│       ├── src/
│       │   ├── components/          # CSS fuente (editar aquí)
│       │   ├── base/
│       │   ├── utilities/
│       │   └── themes/
│       ├── flyonui.css              # CSS compilado (generado)
│       ├── flyonui.js               # JS compilado (generado)
│       ├── build.js                 # Script de build CSS
│       └── watch.js                 # Script de watch CSS
```

---

## Scripts Disponibles

### packages/flyonui
| Script | Descripción |
|--------|-------------|
| `bun run watch:css` | Watch mode para CSS |
| `bun run watch:mjs` | Watch mode para JS |
| `bun run build:css` | Build completo CSS |
| `bun run build:mjs` | Build completo JS |

### apps/ui
| Script | Descripción |
|--------|-------------|
| `bun dev` | Dev server (puerto 4000) |
| `bun build` | Build producción |

---

## Agregar un Nuevo Componente HTML

1. **Crear el CSS** en `packages/flyonui/src/components/nuevo.css`

2. **Ejecutar build** para generar el CSS compilado:
   ```bash
   cd packages/flyonui
   bun run build:css
   ```

3. **Crear ejemplo** en `apps/ui/registry/html/nuevo/`:
   ```ts
   // nuevo-default.ts
   export default {
     name: "nuevo-default",
     description: "Default nuevo",
     html: `<div class="nuevo">Contenido</div>`,
   };
   ```

4. **Registrar** en `apps/ui/registry/html/index.ts`

5. **Crear documentación** en `apps/ui/content/docs/html/components/nuevo.mdx`

---

## Troubleshooting

### Los estilos no se actualizan
1. Verifica que `watch:css` esté corriendo
2. Verifica que Next.js esté corriendo
3. Haz hard refresh (Ctrl+Shift+R)

### Error de módulo CommonJS/ESM
Ejecuta el build de JS:
```bash
cd packages/flyonui
bun run build:mjs
```

### Limpiar cache
```bash
cd apps/ui
rm -rf .next
bun dev
```
