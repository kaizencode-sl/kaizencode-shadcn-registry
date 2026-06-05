# kaizencode-shadcn-registry

A [shadcn/ui](https://ui.shadcn.com) registry for creating, sharing, and demonstrating custom shadcn components. Components authored here can be consumed by any shadcn project directly from this GitHub repo — no separate server or build step needed.

**Demo site:** https://kaizencode-sl.github.io/kaizencode-shadcn-registry/

## Stack

- **Astro v6** + **React 19** + **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **shadcn/ui** (style: `radix-rhea`)
- **TypeScript ~6.0** (strict), **pnpm**, **Node >=22.12.0**

## Developing

```bash
pnpm install
pnpm dev          # dev server with HMR
pnpm lint         # ESLint
pnpm format       # Prettier
pnpm typecheck    # astro check
pnpm build        # astro build (for the demo site)
```

## Adding components locally (for development/demo)

shadcn components are installed individually — the CLI copies the source files directly into your project so you own them and can customize freely.

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add dialog
```

**What happens:**
- The component's source `.tsx` file lands in `src/components/ui/`
- Dependencies are auto-detected and installed (e.g. `lucide-react`, `radix-ui`)
- `components.json` is updated to track which components are installed
- Tailwind CSS variables and base styles are already set up in `src/styles/global.css`

## Using registry components in external projects

This repo is a [GitHub registry](https://ui.shadcn.com/docs/registry/github). No build step or deployment needed — the `registry.json` at the repo root is the source of truth. Users install directly from the GitHub repo.

### Install a component

```bash
pnpm dlx shadcn@latest add kaizencode-sl/kaizencode-shadcn-registry/developed-by-kaizencode
```

### Install a config file

Config files are distributed using the `registry:file` type and land at a target path in your project.

```bash
pnpm dlx shadcn@latest add kaizencode-sl/kaizencode-shadcn-registry/opencode-config
```

This copies `opencode.json` to your project root, ready for use by the OpenCode CLI.

### Address format

```
pnpm dlx shadcn@latest add <owner>/<repo>/<item>
```

### Validate the registry

```bash
pnpm dlx shadcn@latest registry validate kaizencode-sl/kaizencode-shadcn-registry
```

### List available items

```bash
pnpm dlx shadcn@latest list kaizencode-sl/kaizencode-shadcn-registry
```

## Available Items

### Components

| Name | Description |
|------|-------------|
| [`developed-by-kaizencode`](src/components/ui/developed-by-kaizencode.tsx) | Footer with "Developed with ❤️ by Kaizencode" and link to kaizencode.es |

### Config files

| Name | Target | Description |
|------|--------|-------------|
| [`opencode-config`](opencode.json) | `opencode.json` | OpenCode MCP config for shadcn CLI and Astro docs |

Components are showcased on the [demo site](https://kaizencode-sl.github.io/kaizencode-shadcn-registry/).

## Adding an item to the registry

The registry can distribute any file type — components, configs, hooks, docs, etc.

1. Create the file (e.g. `src/components/ui/my-component.tsx` or a root-level `my-config.json`)
2. Add an item entry to `registry.json`
3. For **components**: use `type: "registry:ui"`, reference the path, list `dependencies`
4. For **config files**: use `type: "registry:item"` with a `registry:file` entry and a `target` path
5. Run `pnpm format && pnpm lint && pnpm typecheck && pnpm build` to verify
6. Commit and push — the registry is live immediately on the default branch

## CI/CD

The demo site is built with Astro and deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`). Pushes to the default branch trigger a deployment.

## Project

```
kaizencode-shadcn-registry/
├── .github/workflows/deploy.yml   ← GitHub Pages deploy
├── registry.json                   ← shadcn registry catalog
├── astro.config.mjs                ← Astro configuration
├── components.json                 ← shadcn/ui configuration
├── opencode.json                   ← OpenCode MCP config (distributable)
├── src/
│   ├── components/
│   │   └── ui/                     ← shadcn React components
│   ├── layouts/main.astro          ← Base layout
│   ├── lib/utils.ts                ← cn() utility
│   ├── pages/index.astro           ← Homepage
│   └── styles/global.css           ← Tailwind v4 + theme variables
└── public/                         ← Static assets
```
