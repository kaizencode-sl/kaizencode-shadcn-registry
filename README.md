# kaizencode-shadcn-registry

A [shadcn/ui](https://ui.shadcn.com) registry for creating, sharing, and demonstrating custom shadcn components. Components authored here can be consumed by any shadcn project via the registry API.

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
```

## Adding components locally (for development/demo)

```bash
pnpm dlx shadcn@latest add <component-name>
```

Components are placed in `src/components/ui/`.

## Using registry components in external projects

Add the `@kaizencode` registry namespace to your project's `components.json`.

### Via CLI

```bash
pnpm dlx shadcn@latest registry add @kaizencode=https://github.com/kaizencode-sl/kaizencode-shadcn-registry/r/{name}.json
```

### Or manually

Add a `registries` field (object, not array) to your `components.json`:

```json
{
  "registries": {
    "@kaizencode": "https://github.com/kaizencode-sl/kaizencode-shadcn-registry/r/{name}.json"
  }
}
```

The `{name}` placeholder is replaced by the item name when you install.

Then install any component using the `@kaizencode` scope:

```bash
pnpm dlx shadcn@latest add @kaizencode/developed-by-kaizencode
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
