# Phase 1 — Step-by-Step Implementation Plan

> **Goal of Phase 1:** A public web app where a developer picks a stack and gets a single shell command to scaffold the project. **Zero backend.** All state encoded in the URL.

**Stack for the app itself:** Next.js 15 (App Router, static-exportable), TypeScript strict, Tailwind v3.4, shadcn/ui (source-only `@boilerbear/ui`), Zustand, Vitest, Playwright (E2E target), Biome, pnpm + Turborepo.

**Deliverables at end of Phase 1:**
1. `boilerbear.dev` builder UI live on Vercel free tier.
2. `@boilerbear/core`, `@boilerbear/modules`, `@boilerbear/cli` published to npm.
3. ~30 module manifests covering Vite + Next.js stacks.
4. `npx boilerbear@latest run <hash>` works end-to-end.
5. Contribution docs so external devs can add modules.

---

## Current Status (as of 2026-05-21)

| Milestone | Title | State |
|-----------|-------|-------|
| 0 | Repo & Tooling Foundation | ✅ Done |
| 1 | Core Domain (`@boilerbear/core`) | ✅ Done |
| 2 | First Manifests (`@boilerbear/modules`) | ✅ Done — 25 manifests + 2 recipes |
| 3 | CLI Shim (`@boilerbear/cli`) | ✅ Done — `run` + `recipes` commands |
| 4 | Web App Skeleton + `@boilerbear/ui` | ✅ Done — landing + builder stub |
| 5 | Builder UI | ✅ Done — 5-step wizard, URL sync |
| 6 | Sharing & OG Images | ✅ Done — `/s/[hash]` view + `/og/[hash]` edge route |
| 7 | Manifest Quality Gates | ✅ Done — strict checker + nightly install matrix |
| 8 | Testing & Quality | ✅ Done — 90%+ core coverage, Playwright E2E + axe a11y gate |
| 9 | Docs & Contribution | ✅ Done — /docs site, ADRs, ADDING_A_MODULE walkthrough, `pnpm new-module` scaffolder |
| 10 | Beta Launch | ⏳ Next |

**Pipeline state:** 5 packages (`config`, `core`, `modules`, `cli`, `ui`) + 1 app (`web`). 59 unit tests pass (core 45, modules 3, cli 11). `pnpm typecheck` and `pnpm build` clean across all workspaces. Biome clean across ~144 files. Next.js production build: 7 route trees (`/`, `/builder`, `/s/[hash]`, `/og/[hash]`, `/docs`, `/docs/[slug]` SSG × 5, 404). 8 Playwright E2E specs cover builder happy path, share-restore, conflict UX, share view, and axe-core a11y across landing + docs + all builder steps. `@boilerbear/core` line/statement coverage 98.5% (threshold 90). Three ADRs published (`docs/adr/0001-0003`).

---

## Milestone 0 — Repo & Tooling Foundation (Day 1–2) ✅

### Step 0.1 — Initialize monorepo
**Tasks**
- `pnpm init` at root. Set `"private": true`, `"packageManager": "pnpm@9.x"`.
- Create `pnpm-workspace.yaml`:
  ```yaml
  packages:
    - "apps/*"
    - "packages/*"
  ```
- Add `.nvmrc` pinning Node 20 LTS.
- Add `turbo.json` with `build`, `dev`, `lint`, `test`, `typecheck` pipelines and shared `outputs`.

**Acceptance**
- `pnpm install` succeeds at root.
- `pnpm turbo run build --dry-run` lists tasks across (empty) workspaces.

### Step 0.2 — Shared config package
**Tasks**
- `packages/config/` exports:
  - `tsconfig.base.json` (strict, `moduleResolution: bundler`, `noUncheckedIndexedAccess`).
  - `tsconfig.next.json`, `tsconfig.lib.json` (extend base).
  - `biome.json` (lint + format, tabs vs spaces decision, single quotes).
  - `tailwind.preset.ts` placeholder.

**Acceptance**
- `packages/core/tsconfig.json` extends `@boilerbear/config/tsconfig.lib.json` and compiles.

### Step 0.3 — Git, CI, repo hygiene
**Tasks**
- `.gitignore` for Node, Next, Turbo, Vercel, OS files.
- `.github/workflows/ci.yml`: matrix on Node 20, runs `pnpm install --frozen-lockfile`, `pnpm turbo run lint typecheck test build`.
- `LICENSE` (MIT).
- `CODE_OF_CONDUCT.md` (Contributor Covenant).
- `CONTRIBUTING.md` skeleton (filled in Milestone 9).
- Issue + PR templates in `.github/`.
- Husky + lint-staged: pre-commit runs Biome on changed files.

**Acceptance**
- CI green on an empty commit.
- `git commit` with a lint error is blocked.

---

## Milestone 1 — Core Domain (Day 3–6) ✅

### Step 1.1 — Schemas in `@boilerbear/core`
**Tasks**
- Create `packages/core/` with build via `tsup` (CJS + ESM + d.ts).
- `src/schema/module.ts` — Zod schema for `ModuleManifest`:
  ```ts
  export const ModuleManifest = z.object({
    id: z.string().regex(/^[a-z0-9][a-z0-9-]*$/),
    name: z.string().min(1),
    category: Category,
    tags: z.array(z.string()).default([]),
    description: z.string().min(1),
    homepage: z.string().url(),
    versions: z.object({ range: z.string(), min: z.string() }),
    packages: z.object({
      deps: z.array(PkgSpec).default([]),
      devDeps: z.array(PkgSpec).default([]),
    }),
    requires: z.array(ModuleRef).default([]),
    conflicts: z.array(ModuleRef).default([]),
    recommends: z.array(ModuleRef).default([]),
    appliesTo: z.array(FrameworkRef).default([]),
    setup: z.array(SetupStep).default([]),
    postInstall: z.array(ShellStep).default([]),
    options: z.record(OptionDef).optional(),
  });
  ```
- `src/schema/plan.ts` — `Plan` schema (project name, PM, base framework, modules, options).
- `src/schema/compiled.ts` — `CompiledPlan` (command string, warnings, resolved versions).
- Export all types via `src/index.ts`.

**Acceptance**
- `pnpm --filter @boilerbear/core test` runs Vitest schema parse tests for valid + invalid samples.
- 100% coverage on schema parsing edge cases.

### Step 1.2 — Registry loader
**Tasks**
- `src/registry/index.ts` — `createRegistry(manifests: unknown[]): Registry`.
  - Validates each via `ModuleManifest.parse`.
  - Indexes by `id`, by `category`, by `appliesTo`.
  - Throws aggregate error listing all invalid manifests.
- `src/registry/types.ts` — `Registry` interface with `get(id)`, `byCategory(cat)`, `forFramework(fw)`.

**Acceptance**
- Unit tests: invalid manifest produces error pointing to the offending field path.

### Step 1.3 — Resolver
**Tasks**
- `src/resolver/conflicts.ts` — `detectConflicts(plan, registry): Conflict[]`.
  - Walks `conflicts` and `requires` edges.
  - Returns structured conflicts with `severity: 'error' | 'warning' | 'info'`.
- `src/resolver/topo.ts` — `sortModules(plan, registry): ModuleManifest[]`.
  - Topological sort by `requires`.
  - Detects cycles → error.
- `src/resolver/recommend.ts` — `recommendAdditions(plan, registry): Suggestion[]`.
  - Reads `recommends` edges of chosen modules; skips already-chosen.

**Acceptance**
- Tests cover: missing requirement, hard conflict, soft conflict, cyclic dep, recommendation generation.

### Step 1.4 — Emitter (Phase 1: command string)
**Tasks**
- `src/emitter/command.ts` — `emitCommand(plan, registry): string`.
  - Steps:
    1. `npm create <base-framework>` (per `appliesTo` template).
    2. `cd <name>`.
    3. `<pm> add <deps>` and `<pm> add -D <devDeps>`.
    4. Inline `node -e "..."` to write small config files, OR `cat > file <<'EOF'` heredocs for larger files.
    5. Run each `postInstall.shellStep`.
  - Output is a single newline-joined script wrapped in `sh -c '...'` with proper escaping.
- Per-package-manager abstraction: `pmInstall(pm, deps, dev)` → `'pnpm add -D x y'` etc.

**Acceptance**
- Snapshot tests for `Vite + TS + Tailwind` and `Next + TS + Tailwind + shadcn` plans produce stable commands.
- Manual: copy command, paste in a clean dir, project builds and `tsc --noEmit` passes.

### Step 1.5 — Plan codec (URL state)
**Tasks**
- `src/codec/plan.ts`:
  - `encodePlan(plan): string` — JSON → `lz-string`-compressed → base64url.
  - `decodePlan(hash): Plan` — reverse, then `Plan.parse`.
- Add `lz-string` as a dep.

**Acceptance**
- Roundtrip property test (fast-check) over 1000 random valid plans.
- Encoded length for a 10-module plan < 600 chars.

---

## Milestone 2 — First Manifests in `@boilerbear/modules` (Day 7–10) ✅

### Step 2.1 — Package skeleton
**Tasks**
- `packages/modules/` exports `allManifests: ModuleManifest[]`.
- Folder structure:
  ```
  packages/modules/src/
    frameworks/vite.ts
    frameworks/next.ts
    ui/tailwindcss.ts
    ui/shadcn-ui.ts
    ui/mui.ts
    state/zustand.ts
    state/redux-toolkit.ts
    data/react-query.ts
    testing/vitest.ts
    testing/playwright.ts
    lint/biome.ts
    lint/eslint-prettier.ts
    auth/clerk.ts
    auth/next-auth.ts
    ci/github-actions.ts
    recipes/next-saas-starter.ts
    recipes/vite-mui-redux.ts
    index.ts
  ```
- Each manifest is a plain TS object satisfying `ModuleManifest` (no runtime Zod parse needed inside this package; consumed package runs validation).

### Step 2.2 — Frameworks first (2 manifests)
**Tasks**
- Implement `vite` and `next` manifests with correct `npm create` templates per package manager.
- Define `appliesTo` keys consistently (`'vite' | 'next' | 'remix' | ...`).

### Step 2.3 — UI + styling (4 manifests)
**Tasks**
- `tailwindcss` with options for `forms`, `typography`, `animate`.
- `shadcn-ui` with `requires: ['tailwindcss']`.
- `mui` (Material UI) with `conflicts: ['tailwindcss']` flagged as `warning` (they can coexist but rarely should).
- `chakra-ui`.

### Step 2.4 — State, data, auth, testing, lint, CI (rest to ~30)
**Tasks**
- Add remaining manifests listed in 2.1.
- Each must include a real working `setup` step list, validated by Milestone 7's CI install test.

**Acceptance**
- `pnpm --filter @boilerbear/modules build` produces a single bundle.
- `@boilerbear/core` test that loads all manifests into a registry passes.

---

## Milestone 3 — CLI Shim `@boilerbear/cli` (Day 11–13) ✅

### Step 3.1 — CLI scaffold
**Tasks**
- `packages/cli/` with `bin: { boilerbear: './dist/cli.js' }`.
- Use `cac` or `commander` for arg parsing. Lean toward `cac` (smaller).
- Commands:
  - `run <hash>` — decode plan, validate, print summary, prompt confirm, execute.
  - `run --plan <path-to-json>` — same but from local file.
  - `--dry-run` — print steps, don't execute.
  - `--pm <pnpm|npm|yarn|bun>` — override.
  - `--yes` — skip confirm (for CI).
- Use `execa` for shell exec, `picocolors` for output, `prompts` for confirm.

### Step 3.2 — Telemetry (opt-in, anonymous)
**Tasks**
- Defer until Phase 2 if persistence isn't ready. For Phase 1, ship a `--telemetry` flag wired as a noop; document the contract.

**Acceptance**
- `npx -y @boilerbear/cli run <hash> --dry-run` prints the resolved plan as a tree and the command that *would* run.
- End-to-end: live URL share-hash → `npx` → working project on disk.

---

## Milestone 4 — Web App Skeleton (Day 14–17) ✅

### Step 4.1 — Bootstrap `apps/web`
**Tasks**
- `pnpm create next-app apps/web --ts --tailwind --eslint --app --src-dir --import-alias "@/*"`. Replace ESLint config with Biome.
- Remove default content, keep app router setup.
- Wire to monorepo: `tsconfig` extends `@boilerbear/config/tsconfig.next.json`.
- Configure `next.config.mjs`:
  - `transpilePackages: ['@boilerbear/core', '@boilerbear/modules', '@boilerbear/ui']`.
  - Plan for static export later if it fits — keep dynamic for OG route.

### Step 4.2 — Design system `@boilerbear/ui`
**Tasks**
- Install shadcn/ui in `packages/ui/` (not in the app directly) so primitives are reusable and unit-testable.
- Components for Phase 1:
  - `Button`, `Card`, `Switch`, `Checkbox`, `Tabs`, `Tooltip`, `Dialog`, `Badge`, `Input`, `Label`, `Select`, `Toast`, `Tree`, `CommandPalette` (cmdk-based).
- Theme tokens via Tailwind preset shared from `@boilerbear/config`.
- Storybook optional in Phase 1; deferred unless needed.

### Step 4.3 — App shell
**Tasks**
- Layout (`apps/web/src/app/layout.tsx`): header (logo, GitHub link, theme toggle), main, footer.
- Theme toggle with `next-themes`.
- Marketing landing at `/` (hero, "How it works", CTA → `/builder`).

**Acceptance**
- `pnpm dev` serves `/` and `/builder` with shared shell.
- Lighthouse ≥ 95 on landing for Performance + Accessibility.

---

## Milestone 5 — Builder UI (Day 18–25) ✅

### Step 5.1 — Store
**Tasks**
- `apps/web/src/lib/store/builder.ts` — Zustand store:
  - `plan: Plan`, `setProjectName`, `setPM`, `setBase`, `toggleModule`, `setOption`.
  - `derived: { conflicts, warnings, suggestions, command }` computed via selectors that call `@boilerbear/core` resolver + emitter on change (memoized).
- Persist to `sessionStorage` only — Phase 1 has no accounts. Source of truth for sharing = URL hash.

### Step 5.2 — Steps
**Tasks**
1. **`<BasicsStep />`** — project name (slug-validated), PM picker (segmented control), Node target.
2. **`<FrameworkStep />`** — card grid of frameworks. Selection filters subsequent modules.
3. **`<ModulesStep />`** — tabbed categories on the left, cards on the right.
   - Each `<ModuleCard />`: toggle, description, popularity badge, "Why" inline note, options drawer.
   - Live conflict banner at top of tab when issues are present.
4. **`<ReviewStep />`** — resolved module tree, warnings list, dependency count, est. install size (sum of `installSize` field if present per manifest, else "~").
5. **`<GenerateStep />`** — three tabs:
   - **Copy command** (primary).
   - **Share link** (with QR code).
   - **Open in StackBlitz** — disabled badge "Phase 2".

### Step 5.3 — URL ↔ state sync
**Tasks**
- `/builder?s=<hash>` and `/s/<hash>` both decode into the store on mount.
- Whenever `plan` changes, debounce 300ms, update URL with `history.replaceState` so back/forward isn't polluted.
- "Share" button copies `boilerbear.dev/s/<hash>` to clipboard, shows toast.

### Step 5.4 — Recommendation surfacing
**Tasks**
- Sidebar widget "Suggested next" lists 0–3 recommendations from `recommendAdditions`.
- Inline "Fix it" buttons on conflict banners call the minimum mutation to resolve (toggle one module).

**Acceptance**
- Picking Vite + TS + Tailwind + shadcn + Vitest + Biome generates a working command.
- Picking `tailwindcss` and `mui` together flags the soft conflict.
- Refreshing the page on a share URL restores the exact same plan.

---

## Milestone 6 — Sharing & OG Images (Day 26–28) ✅

### Step 6.1 — Share view
**Tasks**
- `app/s/[hash]/page.tsx` (Server Component):
  - Decodes hash via `@boilerbear/core` codec on the server (no network).
  - Renders a read-only plan summary + "Open in builder" button + the install command.
  - Sets `<meta>` OG tags pointing to `/og/[hash]`.

### Step 6.2 — OG image route
**Tasks**
- `app/og/[hash]/route.tsx` (Edge runtime) using `next/og` `ImageResponse`.
- Renders a card: project name, base framework logo, up-to-8 module badges, BoilerBear logo, gradient.
- Pure derivation from hash → image; no DB.

### Step 6.3 — Short URLs (deferred)
**Tasks**
- Document that hashes are URL-safe and long is acceptable in Phase 1.
- Add `?utm`-friendly query stripping when generating share links.

**Acceptance**
- Pasting `boilerbear.dev/s/<hash>` into a tweet shows the OG card with correct badges.

---

## Milestone 7 — Manifest Quality Gates (Day 29–32) ✅

### Step 7.1 — Static validation in CI
**Tasks**
- `scripts/check-manifests.ts` — loads all manifests, runs `ModuleManifest.parse`, asserts:
  - No duplicate IDs.
  - Every `requires` / `conflicts` / `recommends` ID exists.
  - Every `appliesTo` framework is a known framework manifest.
  - Every `setup` step targets a writable path (no `..`, no absolute).
- Wire into `pnpm turbo run validate-manifests`; CI runs it on every PR.

### Step 7.2 — Synthetic install tests
**Tasks**
- `scripts/install-recipes.ts` — for each `recipes/*.ts`:
  - Generate command into a temp dir.
  - Execute under `execa` with a 5-min timeout.
  - Assert `package.json` exists, `pnpm install` succeeded, `pnpm tsc --noEmit` passes.
- Run nightly via `.github/workflows/nightly.yml` on Ubuntu; matrix on pnpm + npm.
- Output a `manifest-health.json` artifact; later surfaced in the UI as a green/red badge per recipe.

**Acceptance**
- A broken manifest (intentionally fail one in a draft PR) is caught by CI before merge.

---

## Milestone 8 — Testing & Quality (Day 33–37) ✅

### Step 8.1 — Unit tests ✅
**Tasks**
- Vitest in every package. Target ≥ 90% line coverage for `@boilerbear/core` — **current: 98.5% lines / 100% functions** with thresholds enforced via `vitest.config.ts`.
- Snapshot tests for the emitter on representative plans (`Vite + Tailwind + shadcn` pnpm, `Next + Zustand` bun) plus an explicit test for every `setup` step kind and every package manager.
- Property tests (`@fast-check/vitest`) for codec roundtrip (1000 random plans) and resolver determinism (sortModules, detectConflicts, recommendAdditions across input permutations).

### Step 8.2 — E2E tests ✅
**Tasks**
- Playwright in `apps/web/e2e/`:
  - `builder.spec.ts` — pick a stack → command appears; share URL → identical state on fresh page; tailwind + shadcn + mui → conflict banner.
  - `share.spec.ts` — share view renders plan + install command from URL alone; garbage hash → 404.
- `playwright.config.ts` runs chromium on every PR; firefox + webkit projects are tagged `@nightly` for the nightly job.
- Web server boots the production build on port 3100 (`pnpm start --port 3100`). CI workflow has a dedicated `e2e` job that uploads the HTML report as an artifact.

### Step 8.3 — Accessibility ✅
**Tasks**
- `@axe-core/playwright` configured via shared fixture in `e2e/fixtures.ts` with `wcag2a/2aa/21a/21aa` tag set.
- `a11y.spec.ts` runs axe on the landing page and every builder step (Basics → Framework → Modules → Review → Generate). Critical violations fail the build.

**Acceptance**
- `pnpm --filter @boilerbear/core test:coverage` enforces the threshold locally; CI runs it and uploads the `coverage/` directory as an artifact.
- `pnpm --filter @boilerbear/web test:e2e` passes all 7 specs locally; CI runs the same in a dedicated job after the build job.

---

## Milestone 9 — Docs & Contribution (Day 38–40) ✅

### Step 9.1 — User docs ✅
**Tasks**
- `apps/web/src/app/docs/` — flat-file markdown loader at `apps/web/src/lib/docs.ts` reads `apps/web/src/content/docs/*.md` with a tiny frontmatter parser. Rendered via `react-markdown` + `remark-gfm`, styled with `@tailwindcss/typography`.
- Routes: `/docs` (index card grid via `listDocs`) and `/docs/[slug]` (server component, `generateStaticParams` for SSG).
- Pages: Getting Started, How sharing works, CLI reference, Roadmap, FAQ — all SSG-prerendered at build.
- a11y: axe-core E2E covers `/docs` + `/docs/getting-started`.

### Step 9.2 — Contribution docs ✅
**Tasks**
- `CONTRIBUTING.md` updated with `pnpm new-module` quick-path, "running nightly checks locally" section, and a pointer to ADRs.
- `docs/contributing/ADDING_A_MODULE.md` — full walkthrough using a fictional daisyui manifest. Covers field reference, setup-step kinds, common pitfalls, and the PR-open flow.
- `packages/modules/scripts/new-module.ts` — interactive scaffolder. Prompts for category, name, description, homepage, semver range, primary dep, and `appliesTo` frameworks. Writes `packages/modules/src/<category>/<id>.ts` and auto-patches `src/index.ts` (import + `allManifests` array + named `export {}` block). Wired as `pnpm new-module <id>` at root.

### Step 9.3 — ADRs ✅
**Tasks**
- `docs/adr/0001-no-backend-phase-1.md` — trade-offs of URL-encoded plans vs a DB-backed store.
- `docs/adr/0002-manifest-format.md` — why manifests are TypeScript objects + Zod schemas, not JSON or YAML.
- `docs/adr/0003-cli-shim-vs-raw-command.md` — why both the raw `bash -c '…'` and the `@boilerbear/cli` shim exist, and the boundary between them.

**Acceptance**
- A contributor following `ADDING_A_MODULE.md` can land a manifest in under 30 minutes from a clean clone (scaffold → validate → smoke-test in builder → PR).
- `/docs` ships in the production build (5 SSG pages, ~165 B route shell).

---

## Milestone 10 — Beta Launch (Day 41–45)

### Step 10.1 — Hosting
**Tasks**
- Deploy `apps/web` to Vercel.
- Domain `boilerbear.dev`. HTTPS auto.
- Set `next/og` image route to Edge runtime.
- No env vars required (no backend).

### Step 10.2 — Publishing packages
**Tasks**
- Configure Changesets in CI: `release.yml` runs on `main`, opens a Version PR, publishes on merge.
- npm scopes:
  - `@boilerbear/core`
  - `@boilerbear/modules`
  - `@boilerbear/cli`
  - `@boilerbear/ui` (private for now; promote later)
- Add `provenance: true` for supply-chain attestations.

### Step 10.3 — Launch checklist
**Tasks**
- README badges (CI, npm versions, license).
- Demo GIF in README.
- Show HN draft.
- Twitter/X thread draft.
- Submit to `awesome-nextjs` etc.
- Open a `good first issue` set (10 modules to add).

**Acceptance**
- A first-time visitor can land, build a stack, copy a command, run it, and have a working project in under 3 minutes.

---

## Phase 1 Definition of Done

- [ ] `boilerbear.dev/builder` is live and stateless.
- [ ] ≥ 30 module manifests validated nightly.
- [ ] `npx @boilerbear/cli run <hash>` scaffolds successfully on Linux + macOS + Windows (WSL).
- [ ] Share URL produces an OG card.
- [ ] Conflict detection has caught at least one real misconfiguration in dogfooding.
- [ ] First 3 external contributor PRs merged (modules or recipes).
- [ ] Zero secrets, zero env vars, zero databases.

---

## Out of Scope for Phase 1 (explicit)

- Auth, user accounts, team templates.
- Saving plans to a database.
- Generating zips or pushing to GitHub.
- WebContainer in-browser previews.
- AI stack assistant.
- Drift mode against existing repos.
- Plugin SDK for third parties.

All these arrive in Phase 2+ on top of the registry and resolver Phase 1 establishes.

---

## File-by-File Cheat Sheet (Phase 1 critical paths)

```
packages/core/src/
  schema/{module,plan,compiled,steps,refs}.ts
  registry/index.ts
  resolver/{conflicts,topo,recommend}.ts
  emitter/{command,pm,escape}.ts
  codec/plan.ts
  index.ts

packages/modules/src/
  frameworks/{vite,next}.ts
  ui/{tailwindcss,shadcn-ui,mui,chakra-ui}.ts
  state/{zustand,redux-toolkit,jotai}.ts
  data/{react-query,swr}.ts
  testing/{vitest,playwright}.ts
  lint/{biome,eslint-prettier,husky-lint-staged}.ts
  auth/{clerk,next-auth}.ts
  ci/{github-actions}.ts
  recipes/{next-saas-starter,vite-mui-redux,...}.ts
  index.ts

packages/cli/src/
  cli.ts
  commands/run.ts
  exec.ts
  ui.ts

apps/web/src/
  app/
    (marketing)/page.tsx
    builder/page.tsx
    s/[hash]/page.tsx
    og/[hash]/route.tsx
    layout.tsx
  components/
    builder/{BasicsStep,FrameworkStep,ModulesStep,ReviewStep,GenerateStep}.tsx
    builder/{ModuleCard,ConflictBanner,SuggestionList}.tsx
    common/{Header,Footer,ThemeToggle}.tsx
  lib/
    store/builder.ts
    share/url.ts
  styles/globals.css
```

---

## Suggested Execution Order (single-developer pace)

1. Milestone 0 + 1 in parallel (tooling + core schemas). Foundation must be solid.
2. Milestone 2 in small batches — author one manifest, write its test, merge. Repeat.
3. Milestone 4 + 5 next — visible progress, easy to dogfood.
4. Milestone 3 (CLI) after the emitter is stable.
5. Milestone 6 once the builder is working end-to-end.
6. Milestones 7–9 in parallel as polish.
7. Milestone 10 last. Don't launch before manifest CI is green for 3 consecutive nights.
