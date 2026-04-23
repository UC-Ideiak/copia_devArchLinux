# AGENTS.md - Guía para Agentes de Código

Proyecto: **uc-ideiak-site** - Sitio web multi-página con Vite + TypeScript + Tailwind CSS v4.

## 1. Comandos de Desarrollo

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor desarrollo (incluye `--host` para WSL) |
| `npm run build` | Compila TypeScript + genera dist |
| `npm run preview` | Previsualiza producción |
| `npm run deploy` | Despliega a GitHub Pages (rama gh-pages) |

### Tests
No hay tests configurados. Si agregas Vitest:
```bash
npx vitest run --reporter=verbose --testNamePattern="nombre del test"
```

### Verificación de tipos
```bash
npx tsc --noEmit
```

## 2. Convenciones de Código

### TypeScript
- **Strict mode** habilitado
- **ES2022** target
- `verbatimModuleSyntax`: imports explícitos obligatorios
- `noUnusedLocals` y `noUnusedParameters`: true

### Imports
```typescript
import './style.css'
import { type ComponentProps } from './types'
```
- Imports de CSS al inicio
- Usar `import { algo }` (no `import *`)

### Nombres
- Archivos: `kebab-case.ts`
- Funciones/variables: `camelCase`
- Constantes: `UPPER_SNAKE_CASE`
- Types/interfaces: `PascalCase`

### Tipos
- `type` para tipos simples y uniones
- `interface` para objetos con métodos o extensión
- Nunca `any` — usar `unknown` si es necesario

```typescript
type Status = 'pending' | 'active' | 'completed'
interface User {
  id: string
  name: string
}
```

### Funciones
- Arrow functions para callbacks
- Funciones declaradas para lógica compleja

### Manejo de Errores
```typescript
try {
  const data = await fetchUser(id)
  return data
} catch (error) {
  console.error('Error fetching user:', error)
  throw new Error(`Failed to fetch user ${id}`)
}
```

## 3. Tailwind CSS v4

```css
@import "tailwindcss";
```

Mobile-first: clases base para móvil, `md:`/`lg:` para desktop.
```html
<div class="p-4 md:p-6 lg:p-8"></div>
```

## 4. HTML Multi-Page

Para nueva página: crear HTML en raíz → agregar a `vite.config.ts` → incluir script.

```html
<script type="module" src="/src/main.ts"></script>
```

## 5. Estructura

```
src/
├── main.ts        # Entry point
├── style.css      # Tailwind
└── assets/        # Static assets
index.html, login.html, contacto.html, thanks.html, no_login.html
```

## 6. Notas

- Sin linter (ESLint/Prettier)
- Sin framework de tests
- Idioma: Español (contenido) / Inglés (código)
