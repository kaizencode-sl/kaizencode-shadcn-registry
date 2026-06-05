# kaizencode-shadcn-registry

A [shadcn/ui](https://ui.shadcn.com) registry for creating, sharing, and demonstrating custom shadcn components. Components authored here can be consumed by any shadcn project directly from this GitHub repo — no separate server or build step needed.

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

```bash
pnpm dlx shadcn@latest add <component-name>
```

Components are placed in `src/components/ui/`.

## Using registry components in external projects

This repo is a [GitHub registry](https://ui.shadcn.com/docs/registry/github). No build step or deployment needed — the `registry.json` at the repo root is the source of truth. Users install directly from the GitHub repo.

### Install a component

```bash
pnpm dlx shadcn@latest add kaizencode-sl/kaizencode-shadcn-registry/developed-by-kaizencode
```

Format: `pnpm dlx shadcn@latest add <owner>/<repo>/<item>`

### Validate the registry

```bash
pnpm dlx shadcn@latest registry validate kaizencode-sl/kaizencode-shadcn-registry
```

### List available items

```bash
pnpm dlx shadcn@latest list kaizencode-sl/kaizencode-shadcn-registry
```

## Available Components

| Component | Description |
|-----------|-------------|
| `developed-by-kaizencode` | Footer with "Developed with ❤️ by Kaizencode" and link to kaizencode.es |

## Registry

The root `registry.json` defines all distributable components. To add a new component:

1. Create the component in `src/components/ui/`
2. Add an item entry to `registry.json`
3. Reference the source file path relative to project root
4. Run `pnpm format && pnpm lint && pnpm typecheck && pnpm build` to verify
5. Commit and push — the registry is live immediately on the default branch
