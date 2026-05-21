# Adding a Module

This walkthrough shows how to add a new module to the BoilerBear registry. End-to-end, a clean clone → opened PR fits in about 30 minutes.

We'll add a fictional `daisyui` styling module as the running example.

---

## 0. Pre-flight

```bash
git clone https://github.com/BondeYash/BoilerBear
cd BoilerBear
nvm use            # Node 22 from .nvmrc
corepack enable    # pnpm 11
pnpm install
pnpm build         # core + modules must be built once
```

Confirm the baseline is green:

```bash
pnpm test
pnpm validate-manifests
```

Both should pass before you touch anything.

---

## 1. Scaffold the file

Use the interactive scaffolder:

```bash
pnpm new-module daisyui
```

You'll be prompted for the category, display name, description, homepage URL, and starter dependency list. The script writes a TS file under `packages/modules/src/<category>/<id>.ts` and registers it in `packages/modules/src/index.ts` automatically.

If you'd rather write the file by hand, copy [`packages/modules/src/state/zustand.ts`](../../packages/modules/src/state/zustand.ts) — it's the smallest end-to-end example.

---

## 2. Fill in the manifest

Every manifest satisfies the [`ModuleManifest` Zod schema](../../packages/core/src/schema/module.ts). Here's the daisyui example fully filled in:

```ts
import type { ModuleManifest } from '@boilerbear/core';

export const daisyui: ModuleManifest = {
  id: 'daisyui',
  name: 'daisyUI',
  category: 'styling',
  tags: ['css', 'tailwind', 'components'],
  description: 'Tailwind component classes — buttons, cards, modals with theme support.',
  homepage: 'https://daisyui.com',
  license: 'MIT',
  popularity: 35_000,
  versions: { range: '^4.0.0', min: '4.0.0' },
  packages: {
    deps: [],
    devDeps: [{ name: 'daisyui', version: '^4.0.0' }],
  },
  requires: [{ id: 'tailwindcss', reason: 'daisyUI is a Tailwind plugin.' }],
  conflicts: [],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [
    {
      kind: 'patchJson',
      path: 'tailwind.config.cjs',
      patch: { plugins: ['daisyui'] },
    },
  ],
  maintainers: ['saadeghi'],
  docs: { quickstart: 'https://daisyui.com/docs/install' },
};
```

### Field reference

| Field | Required | Notes |
|-------|:--:|------|
| `id` | ✅ | Lowercase kebab-case. Must be unique. Used in URLs, conflict edges, and the CLI. |
| `name` | ✅ | Human display name shown in the builder. |
| `category` | ✅ | One of `framework`, `styling`, `components`, `state`, `data`, `auth`, `routing`, `testing`, `lint`, `ci`, `deploy`, `analytics`, `i18n`, `misc`. |
| `tags` |  | Used by search and filters. Keep them short. |
| `description` | ✅ | One sentence. Shown on the module card. |
| `homepage` | ✅ | Full URL to project homepage or docs. |
| `license` |  | Defaults to `MIT`. |
| `popularity` |  | Weekly npm downloads (rough integer). Sorts cards. |
| `versions` | ✅ | `range` is the semver range pinned in `packages.*`, `min` is the lowest version the manifest is tested against. |
| `packages.deps` |  | Production deps. Pinned with semver ranges. |
| `packages.devDeps` |  | Dev deps. |
| `requires` |  | Hard or soft dependencies on other modules. Default severity is `error`. |
| `conflicts` |  | Modules that shouldn't be picked together. Default severity is `error`; use `warning` for soft conflicts. |
| `recommends` |  | Surfaced as "Suggested next" cards. |
| `appliesTo` |  | List of framework ids this module supports. Empty array means "any framework". |
| `setup` |  | Ordered config steps. See below. |
| `options` |  | Per-module booleans / selects / multiselects exposed in the builder. |
| `framework` |  | Only for `category: 'framework'`. Has `template` + `createCommand`. |
| `docs` |  | `quickstart` link surfaced as "Open docs". |
| `maintainers` |  | GitHub handles or npm-org names. |

### Setup step kinds

| Kind | Purpose |
|------|---------|
| `writeFile` | Write a file with literal content. Supports `ifMissing: true` to skip if the file already exists. |
| `patchJson` | Deep-merge a JSON patch into an existing JSON file (e.g. `package.json`, `tsconfig.json`). Arrays in the patch replace, objects deep-merge. |
| `appendScript` | Shortcut for adding a `scripts` entry to `package.json`. |
| `envVar` | Append `KEY=example` to `.env.example`. Set `required: true` to flag it loudly. |
| `shell` | Arbitrary shell command. `when: 'preInstall'` runs before `cd <project>`, `'postInstall'` (default) runs after. Use sparingly. |

All paths must be relative and may not contain `..`. The strict checker rejects absolute paths and parent-traversal.

### Templating

`{name}` and `{pm}` are substituted in `shell.command` and `framework.createCommand` to the project name and the chosen package manager.

---

## 3. Validate locally

```bash
pnpm validate-manifests
```

The checker enforces:

- No duplicate ids.
- Every referenced id (in `requires`, `conflicts`, `recommends`, `appliesTo`) exists.
- Every `appliesTo` framework is `category: 'framework'`.
- Every `setup.path` is relative and free of `..`.
- Versions are non-empty semver-ish strings.

Run the full test suite too:

```bash
pnpm test           # vitest across workspaces
pnpm typecheck      # tsc across workspaces
pnpm check          # biome lint + format
```

---

## 4. Smoke-test it for real

The builder dogfoods the manifest immediately. Start the web app:

```bash
pnpm --filter @boilerbear/web dev
```

Open [http://localhost:3000/builder](http://localhost:3000/builder), pick your framework, toggle the new module, and look at the generated command on the Generate step. Copy it to a scratch directory and run it. Confirm:

- The framework creates correctly.
- All deps install.
- The setup steps produce the files you expected.
- `pnpm tsc --noEmit` (or the framework's equivalent) succeeds.

---

## 5. Add the manifest to a recipe (optional)

If your module is a common companion for an existing stack, add it to a `packages/modules/src/recipes/*.ts` file. Nightly CI installs every recipe end-to-end on Ubuntu, so a broken manifest is caught fast.

---

## 6. Open the PR

```bash
git checkout -b feat/module-daisyui
git add packages/modules/src/styling/daisyui.ts packages/modules/src/index.ts
git commit -m "feat(modules): add daisyui styling manifest"
git push --set-upstream origin feat/module-daisyui
gh pr create --fill
```

CI runs `pnpm check`, `pnpm typecheck`, `pnpm test`, `pnpm build`, and `pnpm validate-manifests`. Once all green, a maintainer reviews and merges.

---

## Common pitfalls

- **Module won't show in builder:** Check `appliesTo`. An empty array means "any framework"; a non-empty array filters strictly.
- **Conflicts silently ignored:** `severity: 'warning'` lets the build proceed. Use `'error'` if the combination genuinely breaks.
- **`patchJson` writes the wrong shape:** The patch is a deep merge — arrays replace, objects merge. Test with `pnpm --filter @boilerbear/web dev` + a scratch dir.
- **Forgot `--save-dev`:** Tailwind plugins, Vite plugins, ESLint configs, and other "build-time only" packages belong in `devDeps`, not `deps`.

---

## Want help?

Open a draft PR early and tag it `help-wanted`. Maintainers are happy to triage manifest design questions on the PR rather than in long issue threads.
