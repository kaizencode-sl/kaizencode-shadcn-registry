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

## Path aliases

`@/*` → `./src/*`. Always use `@/` imports (e.g. `@/components/ui/button`, `@/lib/utils`).

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
├── registry.json          ← Registry catalog (entry point for external consumption)
├── src/
│   components/ui/         ← shadcn React components (also registry source files)
│   layouts/               ← Astro layouts (.astro)
│   lib/                   ← utilities (utils.ts → cn())
│   pages/                 ← Astro routes (.astro)
│   styles/                ← global.css (Tailwind v4 @import, theme vars)
```

## Testing

No test framework is installed. Focus on lint, typecheck, and build.

## Build artifacts

Ignore `dist/` and `.astro/` – they are gitignored and regenerated on every build.

## Formatting quirks

- **No semicolons**, double quotes, 2-space indent, trailing commas (es5).
- Astro files use the `astro` parser (overridden in `.prettierrc`).
- Run `pnpm format` before committing.

## Generated files

- `.astro/` – Astro internal cache (generated at dev/build time)
- `dist/` – build output
