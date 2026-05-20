# BoilerBear — Project Plan

> **Tagline:** *Pick your stack. Get one command. Ship in minutes.*

BoilerBear is a UI-driven, open-source platform for JavaScript / TypeScript developers to design, validate, and scaffold project setups without wrestling with documentation, version-pinning, or tooling glue code. Phase 1 generates a single install-and-configure command; Phase 2 emits a production-ready repository.

---

## 1. Vision & Positioning

### 1.1 What it is
A web app where a developer:
1. Enters a project name.
2. Selects a base framework (Vite, Next.js, Remix, Astro, Expo, NestJS, etc.).
3. Picks tooling, libraries, and services in categorized panels (UI, state, data, auth, testing, lint, CI, infra).
4. Receives recommendations and conflict warnings in real time.
5. Copies a **single shell command** (or a shareable URL) that scaffolds the entire project.

### 1.2 Why it matters
- `create-*` CLIs are siloed and opinionated. Mixing Vite + MUI + Redux + Vitest + Storybook + Playwright + ESLint flat-config + Husky + lint-staged today means reading ~12 docs and writing custom glue.
- README setup steps go stale. Versions drift. New devs onboard slowly.
- There is no neutral, vendor-agnostic place to compare and combine the modern JS ecosystem.

### 1.3 Long-term vision
A *developer platform layer* sitting between npm and the editor: stack design → scaffolding → boilerplate code → architectural starters → live previews → team-shared templates.

---

## 2. Phased Roadmap

| Phase | Scope | Output |
|-------|-------|--------|
| **0 — Foundation** | Repo, design system, module registry schema, base UI flow | Empty registry + skeleton UI |
| **1 — Command Generator** | Stack picker, recommendation engine, conflict detection, one-command output, shareable URLs | `npx boilerbear@latest run <hash>` or copy-paste shell |
| **2 — Boilerplate Emitter** | Full repo generation (file tree, configs, sample features, CI) served as zip / `degit`-able git remote / live container | Downloadable repo, GitHub push, StackBlitz/CodeSandbox preview |
| **3 — Team & Templates** | Auth, saved templates, team libraries, version locks, drift detection against existing repos | Org accounts, template marketplace |
| **4 — Platform** | Plugin SDK for third-party tools, AI stack assistant, monetized hosted templates, enterprise self-host | Plugin registry + paid tiers |

---

## 3. Technology Recommendations

### 3.1 Frontend (the BoilerBear app itself)
| Concern | Choice | Why |
|---------|--------|-----|
| Framework | **Next.js 15 (App Router)** | RSC for fast first paint, edge route handlers for the generator API, OG-image route for shareable stacks, native ISR for marketing pages |
| Language | **TypeScript (strict)** | Required for a config-heavy domain |
| Styling | **Tailwind CSS v4** | Velocity + matches what the audience already uses |
| Components | **shadcn/ui + Radix primitives** | Headless, themable, zero vendor lock |
| State (client) | **Zustand** | Stack-builder state is local and shape-heavy; Redux is overkill |
| Forms | **react-hook-form + Zod** | Schema-driven validation matches module manifests |
| Data fetching | **TanStack Query** (when we need it) | Cache-aware mutations for saved configs |
| Icons | **Lucide** | Tree-shakeable, consistent |
| Animation | **Framer Motion** (sparingly) | Stack-diff transitions, panel slides |
| Analytics | **PostHog** (self-hostable) | Funnel of picker → copy → run |

### 3.2 Backend / Edge
| Concern | Choice | Why |
|---------|--------|-----|
| API | Next.js **Route Handlers** on Edge | Stateless command/zip generation scales horizontally |
| Persistence | **PostgreSQL (Neon)** + **Drizzle ORM** | Typed schema; serverless-friendly |
| Cache / short links | **Upstash Redis** | Cheap, edge-resident |
| Object storage | **Cloudflare R2** | Cheap egress for emitted zips |
| Auth (Phase 3) | **Clerk** or **Auth.js** | Clerk = velocity, Auth.js = OSS-pure |
| Queue (Phase 2+) | **Inngest** or **QStash** | Long boilerplate generation jobs |
| Container previews | **WebContainers (StackBlitz SDK)** + fallback to **CodeSandbox SDK** | Run generated repo in-browser without backend cost |

### 3.3 Generator
| Concern | Choice | Why |
|---------|--------|-----|
| Manifest format | **JSON + Zod schemas**, hand-authored TS sources | Discoverable, validate-at-build |
| Template engine | **Handlebars** for snippets, **AST codemods (`ts-morph`, `jscodeshift`)** for configs | Templating is fine for new files; AST is required for safely merging into existing configs (Phase 2 / 3 drift mode) |
| Package manager handling | Abstract layer that emits **pnpm / npm / yarn / bun** equivalents | Devs are picky; the same plan ships per-PM |
| Versioning | Pin each module to **semver ranges** validated nightly via GitHub Action | Avoid stale recommendations |

### 3.4 Tooling
- **pnpm workspaces** (monorepo).
- **Turborepo** for build/test caching once we add packages.
- **Biome** for lint+format (single tool, fast). ESLint optional for users; we keep our own tree fast.
- **Vitest** + **Playwright** (E2E of the picker → command flow).
- **Changesets** for the public `@boilerbear/*` packages.
- **GitHub Actions** for CI; **Vercel** for hosting Phase 1.

---

## 4. System Architecture

### 4.1 High-level

```
        ┌──────────────────────────── Browser ─────────────────────────────┐
        │  Next.js App Router (RSC + Client islands)                       │
        │  ┌─────────────┐  ┌──────────────────┐  ┌──────────────────────┐ │
        │  │ StackPicker │→ │ RecommendEngine  │→ │ CommandPreview / Zip │ │
        │  └─────────────┘  └──────────────────┘  └──────────────────────┘ │
        └───────────────────┬──────────────────────────┬───────────────────┘
                            │                          │
                  Edge Route Handlers           Static OG / Marketing
                            │
        ┌───────────────────▼──────────────────────────────────────────────┐
        │  Generator Core (pure TS, runs on edge & in CLI)                 │
        │  • Module Registry   • Compatibility Matrix   • Recipe Resolver  │
        │  • Plan Builder      • Conflict Detector      • Emitter (cmd|zip)│
        └───────────────────┬──────────────────────────────────────────────┘
                            │
        ┌──────────┬────────┴────────┬──────────────┬───────────────────┐
        │ Postgres │ Upstash Redis   │ R2 (zips)    │ Inngest (jobs)    │
        │ (configs,│ (short links,   │ (Phase 2+)   │ (Phase 2+)        │
        │ users)   │  rate limits)   │              │                   │
        └──────────┴─────────────────┴──────────────┴───────────────────┘
                                     ▲
                                     │
                          ┌──────────┴───────────┐
                          │  npx boilerbear CLI  │  (resolves share hash, runs plan locally)
                          └──────────────────────┘
```

### 4.2 Core domain model

```ts
// All types live in @boilerbear/core, consumed by web + CLI.

type Category =
  | 'framework' | 'language' | 'styling' | 'components'
  | 'state' | 'data' | 'auth' | 'routing' | 'testing'
  | 'lint' | 'ci' | 'deploy' | 'analytics' | 'i18n' | 'misc';

interface ModuleManifest {
  id: string;                       // 'tailwindcss', 'redux-toolkit'
  name: string;
  category: Category;
  tags: string[];                   // 'css', 'utility-first'
  description: string;
  homepage: string;
  versions: { range: string; min: string };
  packages: { deps: PkgSpec[]; devDeps: PkgSpec[] };
  requires?: ModuleRef[];           // hard prerequisites
  conflicts?: ModuleRef[];          // hard incompatibilities
  recommends?: ModuleRef[];         // soft suggestions
  appliesTo: FrameworkRef[];        // which base frameworks accept this
  setup: SetupStep[];               // file writes, codemods, package.json scripts, env entries
  postInstall?: ShellStep[];        // commands to run after npm install
  docs: { quickstart: string; examples?: string[] };
  maintainers: string[];
  popularity?: number;              // npm weekly downloads cache
}

interface Plan {
  projectName: string;
  packageManager: 'pnpm' | 'npm' | 'yarn' | 'bun';
  base: FrameworkRef;
  modules: ModuleRef[];
  options: Record<ModuleId, unknown>; // per-module choices (e.g., Tailwind plugin list)
}

interface CompiledPlan {
  command: string;                  // single one-liner Phase 1
  scripts: ShellScript[];           // ordered Phase 2
  files: FileEmit[];                // Phase 2
  warnings: PlanWarning[];
}
```

### 4.3 Pipeline

1. **Pick** — UI mutates a `Plan` in Zustand.
2. **Validate** — Zod parses the manifest graph; `Conflict Detector` flags violations and recommends fixes.
3. **Resolve** — Topological sort of modules by `requires`. Recipes (curated bundles) expand into modules.
4. **Compile** — Emitter walks the sorted plan, produces either:
   - Phase 1: a single `sh -c '...'` command (creates project → installs deps → writes configs → runs `git init`).
   - Phase 2: a virtual file tree, persisted as zip or pushed to a temporary git remote.
5. **Share** — Plan hashed, stored in Postgres, short-coded via Redis. URL: `boilerbear.dev/s/<code>`.
6. **Run** — User pastes command. The first half is always `npx boilerbear@latest run <code> --pm pnpm` so updates to the generator reach users without re-copying.

### 4.4 Why a CLI shim and not raw `npm create`?
- Lets us patch logic post-launch without users re-copying commands.
- Detects local Node / pnpm versions and gates the install.
- Adds telemetry (opt-in) for module popularity → feeds recommendations.
- Allows running offline against a cached plan.

---

## 5. Folder Structure (monorepo)

```
boilerbear/
├─ apps/
│  └─ web/                          # Next.js 15 app — the public site
│     ├─ app/
│     │  ├─ (marketing)/            # /, /docs, /blog
│     │  ├─ (app)/
│     │  │  ├─ builder/             # main UI
│     │  │  └─ s/[code]/            # shared plan view
│     │  ├─ api/
│     │  │  ├─ plan/route.ts        # POST → save plan, GET → fetch
│     │  │  └─ compile/route.ts     # POST → CompiledPlan
│     │  └─ og/[code]/route.tsx     # OG image for shared stacks
│     ├─ components/                # UI: StackPicker, ModuleCard, Diff, ...
│     ├─ features/                  # vertical slices (builder, share, recipes)
│     ├─ lib/
│     │  ├─ store/                  # Zustand stores
│     │  ├─ db/                     # Drizzle schema + client
│     │  └─ analytics/
│     └─ styles/
├─ packages/
│  ├─ core/                         # @boilerbear/core — pure domain logic
│  │  ├─ src/
│  │  │  ├─ schema/                 # Zod schemas for ModuleManifest, Plan, ...
│  │  │  ├─ registry/               # in-memory registry + loaders
│  │  │  ├─ resolver/               # topo sort, conflict detection
│  │  │  ├─ emitter/                # command & file emitters
│  │  │  └─ index.ts
│  │  └─ tests/
│  ├─ modules/                      # @boilerbear/modules — manifests live here
│  │  ├─ frameworks/                # vite, next, remix, astro, expo, nest
│  │  ├─ ui/                        # tailwind, mui, chakra, shadcn, mantine
│  │  ├─ state/                     # redux-toolkit, zustand, jotai, mobx
│  │  ├─ data/                      # react-query, swr, apollo, urql
│  │  ├─ auth/                      # clerk, nextauth, supabase, lucia
│  │  ├─ testing/                   # vitest, jest, playwright, cypress
│  │  ├─ lint/                      # biome, eslint+prettier, husky
│  │  ├─ ci/                        # github-actions, circle, vercel
│  │  └─ recipes/                   # curated bundles (e.g., "Next SaaS Starter")
│  ├─ cli/                          # `npx boilerbear` — thin runner
│  ├─ ui/                           # shared design system (shadcn-based)
│  └─ config/                       # tsconfig, tailwind preset, biome config
├─ docs/
│  ├─ PROJECT_PLAN.md               # this file
│  ├─ contributing/
│  │  └─ ADDING_A_MODULE.md
│  └─ adr/                          # architectural decision records
├─ scripts/
│  ├─ refresh-popularity.ts         # nightly npm download stats
│  └─ check-manifests.ts            # CI: validate every manifest
├─ .github/workflows/
├─ turbo.json
├─ pnpm-workspace.yaml
└─ package.json
```

---

## 6. Application Workflow

### 6.1 Builder flow
1. **Landing** → "Start building" → opens `/builder`.
2. **Step 1 — Basics**: project name, package manager, Node target, language (TS default).
3. **Step 2 — Framework**: card grid (Vite, Next, Remix, Astro, Expo, Nest). Selection narrows the visible modules in later steps.
4. **Step 3 — Tooling categories**: tabbed sidebar (UI / State / Data / Auth / Testing / Lint / CI). Each card has:
   - Toggle
   - Inline "Why we recommend" note
   - Conflict & dependency hints (live)
   - Optional per-module config (e.g., "Tailwind: enable forms/typography/animate")
5. **Step 4 — Review**: tree view of resolved modules, warnings, estimated install size, weekly download counts, license summary.
6. **Step 5 — Generate**:
   - **Copy command** (default tab).
   - **Open in StackBlitz** (Phase 2).
   - **Download zip** (Phase 2).
   - **Push to GitHub** (Phase 3 — OAuth).
   - **Share link** with OG image showing the stack badges.

### 6.2 Recommendation engine
- **Rule-based first** (deterministic, reviewable):
  - Compatibility matrix in each manifest.
  - "If `next` + `tailwindcss` then recommend `shadcn/ui`."
  - "If `redux-toolkit` is chosen, suggest `redux-persist` & `reselect`."
- **Popularity-weighted ranking** within a category, refreshed nightly.
- **AI assist (Phase 3)**: a side panel ("Describe what you're building") routes through a small LLM (Haiku-class) that proposes a Plan; user still edits before generating. AI never bypasses the rule engine — it only proposes a `Plan` that must validate.

### 6.3 Conflict resolution UX
- Red badge on the offending card + a one-line explanation.
- "Fix it" button proposes the minimum-impact change (e.g., "Switch from `npm` to `pnpm` to use this workspace recipe").

---

## 7. Scalability Plan

### 7.1 Compute
- Generator is pure and stateless → runs on Vercel Edge, cold start ~ms.
- Heavy Phase 2 jobs (zip + push) → Inngest queue with idempotent steps; horizontal scaling per concurrency limit.

### 7.2 Data
- Postgres holds **plans** (≤ a few KB each), **users**, **templates**.
- Redis holds **short codes** (TTL 30 days for anon, infinite for signed-in) and **rate limits**.
- R2 holds generated zips with 7-day TTL by default.

### 7.3 Registry growth
- Modules ship in `@boilerbear/modules`, versioned with Changesets.
- Each manifest validated in CI against Zod schema and a synthetic install test ("does the generated command produce a passing `tsc --noEmit`?").
- Contributors add modules via PRs scaffolded by `pnpm new-module <id>` (interactive prompt).

### 7.4 Performance budgets
- Builder TTI < 2.0s on 4G.
- Plan compile < 100ms p50 for ≤ 20 modules.
- Share-link cold read < 150ms p95.

### 7.5 Reliability
- Manifest CI gate blocks releases with broken installs.
- Synthetic E2E (Playwright) runs `pick → compile → run command in a Docker sandbox` nightly for the top 20 recipes.
- Versioned plans: a stored plan always renders, even when newer module versions are out (we record the resolved version, not the floating range).

---

## 8. Unique Features (the moat)

1. **One-command output, not a CLI dialog.** Competitors hand you a wizard you run locally. We hand you the *result* of the wizard.
2. **Compatibility-aware recommender.** Real conflict matrix maintained as code, not docs.
3. **Shareable + OG-imaged stacks.** Tweet a stack badge. Onboard a team via a URL.
4. **Drift mode (Phase 3).** Point BoilerBear at an existing repo; it diffs against a chosen recipe and proposes a PR-sized upgrade plan.
5. **Reproducible plans.** Lockfile-equivalent for *stack composition*. Plans are immutable and re-runnable years later.
6. **Plugin SDK.** Any library author can publish a `@yourorg/boilerbear-plugin-x` exposing their own module manifest — distributed and discovered through our registry without us merging PRs.
7. **In-browser preview.** WebContainer-backed live preview of the generated repo before you download anything.
8. **Side-by-side stack comparison.** Pick two recipes; see deltas in bundle size, deps, test coverage of the starter, lighthouse scores.
9. **Stack health.** Each module shows last-release recency, weekly downloads trend, open-issue ratio, security advisories (osv.dev).
10. **Team templates with versioned upgrades.** Subscribe a project to a template; BoilerBear opens PRs when the template moves.
11. **AI Stack Assistant grounded in the registry.** Free-form prompt → Plan, but constrained to known modules, so output is always installable.
12. **Offline-friendly CLI.** `npx boilerbear run --offline <code>` for air-gapped or CI usage.

---

## 9. Problems in the Current Market BoilerBear Solves

| Pain | Today | With BoilerBear |
|------|-------|-----------------|
| Tool fragmentation | Read 8 docs, copy 12 snippets | One UI, one command |
| Stack drift between team projects | "Why does repo A use ESLint and repo B use Biome?" | Shared templates, drift PRs |
| Onboarding new devs | README rot, missing steps | Run share link, get identical setup |
| Version pinning chaos | Each tutorial pins differently | Centrally validated version ranges |
| "Which library is best?" paralysis | Twitter polls, blog SEO spam | Popularity + maintenance signals next to each card |
| Migration between similar tools (Jest→Vitest, ESLint→Biome) | Manual codemods | Generator runs codemods automatically (Phase 2) |
| Sharing a stack idea | Screenshot of `package.json` | URL with OG card + clone command |
| Internal "starter repos" go stale | Manual updates, never adopted | Subscribed template auto-PRs upgrades |

---

## 10. Innovations Competitors Don't Offer

- **`vite create`, `create-next-app`, `create-t3-app`** — opinionated, single-framework, no mixing, no compatibility checks across choices.
- **`create-react-app` (deprecated)** — frozen.
- **`degit` / boilerplate repos** — static; rot the day they're committed.
- **`shadcn` CLI** — only for UI; great pattern but narrow scope.

BoilerBear is *meta* over all of these: it can wrap and chain any of them, then add the glue.

Differentiators competitors don't ship:

- Cross-framework portability of choices ("the same testing recipe on Vite, Next, and Remix").
- Stack diffs (PR comments showing what a config change actually flips on).
- Live security & maintenance signals at *selection* time, not after install.
- A registry that third parties can extend without forking the platform.
- AI suggestions constrained to a typed, validated registry — output is never hallucinated.

---

## 11. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Registry rot (modules upstream change) | Nightly synthetic install CI; alerts on manifest break; community-maintained owners per module |
| Scope creep (Phase 2/3 are huge) | Hard gating: Phase 1 ships and is loved before Phase 2 begins |
| Trust ("why should I run your command?") | Open source the generator + CLI; print the full plan in the terminal before execution; `--dry-run` flag |
| Vendor lock perception | Output is plain `package.json` + standard configs; no `boilerbear`-specific runtime needed after scaffolding |
| Monetization without alienating OSS | Hosted templates, team features, enterprise self-host — never paywall the generator itself |

---

## 12. Milestones (suggested 90-day Phase 1)

| Week | Deliverable |
|------|-------------|
| 1 | Monorepo scaffolded, design system v0, Zod schemas for `ModuleManifest` and `Plan` |
| 2–3 | Registry of ~30 manifests covering Vite + Next baselines |
| 4 | Resolver + conflict detector with tests |
| 5 | Command emitter for pnpm/npm/yarn/bun |
| 6 | Builder UI v1 (picker, review, copy command) |
| 7 | Share links, OG image route, Postgres + Redis wired |
| 8 | `npx boilerbear` CLI shim |
| 9 | Nightly manifest CI + E2E for top recipes |
| 10 | Public beta launch (docs, contribution guide) |
| 11–12 | Iterate on telemetry, add 30 more modules, recipes for common stacks |

---

## 13. Success Metrics

- **Activation**: % of visitors who reach "copy command".
- **Run-through**: % of generated commands actually executed (via opt-in CLI telemetry).
- **Stickiness**: returning users / week, share-link opens.
- **Registry health**: median module age, % with green nightly CI.
- **Community**: external module PRs merged / week.

---

## 14. Open Questions

- Default package manager — pnpm vs. npm for the lowest-friction first-run?
- Telemetry: opt-in by default vs. opt-out, and what minimum to keep recommendations honest?
- License of generated code — MIT default, but should we allow contributors to mark manifests with custom snippet licenses?
- Hosting plan boundaries: free tier limits for anon share links?

These get answered in `docs/adr/` as decisions are made.
