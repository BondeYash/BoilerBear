# BoilerBear

> Pick your stack. Get one command. Ship in minutes.

BoilerBear is an open-source, UI-driven platform for JavaScript / TypeScript developers. Choose a base framework (Vite, Next.js, …), add libraries (Tailwind, shadcn/ui, Zustand, React Query, …), and copy a single shell command that scaffolds and configures the whole project.

**Phase 1 is fully client-side** — plans are encoded in the URL, no backend, no database, no accounts.

## Status — Pre-alpha (M0–M6 complete)

| Done | Component |
|------|-----------|
| ✅ | `@boilerbear/config` — shared TS / Biome / Tailwind preset |
| ✅ | `@boilerbear/core` — Zod schemas, registry, resolver, emitter, plan codec (32 tests) |
| ✅ | `@boilerbear/modules` — 25 manifests + 2 recipes, validation script (3 tests) |
| ✅ | `@boilerbear/cli` — `npx boilerbear run …` with recipes/hash/plan sources (11 tests) |
| ✅ | `@boilerbear/ui` — shadcn-based component library (Button, Card, Tabs, Switch, …) |
| ✅ | `apps/web` — Next.js 15 App Router, landing, builder wizard (5 steps), share view, OG image edge route |

**Pipeline:** typecheck + test + build green across all workspaces. 46 unit tests passing.

See:
- [docs/PROJECT_PLAN.md](docs/PROJECT_PLAN.md) — full architecture & roadmap
- [docs/PHASE1_IMPLEMENTATION.md](docs/PHASE1_IMPLEMENTATION.md) — milestone breakdown with status

## Quick start (contributors)

```bash
nvm use            # Node 22 from .nvmrc
corepack enable    # pnpm 11
pnpm install
pnpm build         # build core + modules + cli (web is dev-only)
```

### Run the web app

```bash
pnpm --filter @boilerbear/web dev          # http://localhost:3000
```

Visit `/builder` to compose a stack. Plan state is encoded in the URL — share it as `/s/<hash>` or `/builder?s=<hash>`.

### Run the CLI

```bash
node packages/cli/dist/cli.js recipes
node packages/cli/dist/cli.js run --recipe vite-classic --name my-app --dry-run
node packages/cli/dist/cli.js run --recipe next-saas-starter --name my-saas --cwd /tmp --yes
```

Available recipes: `vite-classic`, `next-saas-starter`.

### Validate manifests

```bash
pnpm validate-manifests
```

Loads every manifest through `createRegistry`, cross-checks refs, runs each recipe through `detectConflicts` + `sortModules` + `emitCommand`.

### Repository layout

```
apps/web                Next.js 15 app — landing, /builder wizard, /s/[hash] share view, /og/[hash] OG image
packages/config         Shared TS / Biome / Tailwind preset
packages/core           Pure domain — schemas, registry, resolver, emitter, codec
packages/modules        Module manifests + recipes (the registry data)
packages/cli            npx boilerbear shim (cac + execa + prompts)
packages/ui             Shared shadcn-based component library
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

## License

MIT — see [LICENSE](LICENSE).
