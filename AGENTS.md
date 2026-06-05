# AGENTS.md – kaizencode-shadcn-registry

A shadcn registry for creating, sharing, and demonstrating custom shadcn/ui components. Components authored here are consumable via the shadcn registry API (`npx shadcn@latest add <name>` from external projects).

## Stack

- **Astro v6** + **React 19** + **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **shadcn/ui** (style: `radix-rhea`), managed via `npx shadcn@latest`
- **TypeScript ~6.0** (strict), **pnpm** (v9 lockfile), **Node >=22.12.0**

## Commands

| Command | What |
|---------|------|
| `pnpm dev` | Astro dev server with HMR |
| `pnpm build` | Static build → `dist/` |
| `pnpm preview` | Preview built site |
| `pnpm lint` | ESLint v10 flat config |
| `pnpm format` | Prettier (no semi, double quotes, 2-space tabs, trailingComma es5, printWidth 80) |
| `pnpm typecheck` | `astro check` |
| `pnpm astro` | Raw Astro CLI |

Run in order: `lint → typecheck → build` before committing.

## Demo site

The demo site is deployed to GitHub Pages via `.github/workflows/deploy.yml` (GitHub Actions).
Live at: `https://kaizencode-sl.github.io/kaizencode-shadcn-registry/`

## Path aliases

`@/*` → `./src/*`. Always use `@/` imports (e.g. `@/components/ui/button`, `@/lib/utils`).

## Component conventions

Components must be **standalone** — never wrap a registry component in a parent element (e.g. `<footer>`, `<div>`) unless the wrapper is strictly part of the component's own implementation. Consumers should be free to place components in any container they choose. Page-level layout belongs in the demo page (`src/pages/`), not in the component itself.

## Adding components

```
pnpm dlx shadcn@latest add <component-name>
```

Components land in `src/components/ui/`. The `shadcn` MCP server is already configured in `opencode.json`.

## Registry

The root `registry.json` defines the registry catalog. To add a component to the registry:

1. Create the component in `src/components/ui/`
2. Add an item entry to `registry.json`
3. Reference the source file path (relative to project root)

Available components are showcased on the homepage (`src/pages/index.astro`).

## Project structure

```
├── .github/workflows/     ← deploy.yml (GitHub Pages deployment via Astro actions)
├── registry.json          ← Registry catalog (entry point for external consumption)
├── src/
│   components/
│     ui/                  ← shadcn React components (also registry source files)
│   layouts/
│     main.astro           ← Base Astro layout (head, SEO, global styles)
│   lib/
│     utils.ts             ← cn() utility (clsx + tailwind-merge)
│   pages/
│     index.astro          ← Homepage — showcases all registry components
│   styles/
│     global.css           ← Tailwind v4 @import, CSS variables, theme
public/                    ← Static assets (favicon, etc.)
```

## Testing

No test framework is installed. Focus on lint, typecheck, and build.

## Build artifacts

Ignore `dist/` and `.astro/` – they are gitignored and regenerated on every build.

## Formatting quirks

- **No semicolons**, double quotes, 2-space indent, trailing commas (es5).
- Astro files use the `astro` parser (overridden in `.prettierrc`).
- Run `pnpm format` before committing.
