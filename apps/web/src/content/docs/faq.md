---
title: FAQ
description: Common questions about plans, the registry, security, and contributing.
order: 5
---

# FAQ

## Why a shell command instead of a zip / GitHub push?

A shell command is auditable: you can read every step before running it. There's nothing magic — `npm create vite@latest`, `pnpm add tailwindcss`, `cat > postcss.config.cjs <<'EOF' …`. You can copy it, modify it, and run pieces. Zips and direct repo pushes arrive in Phase 2 alongside accounts; they won't replace the shell command, just add options.

## Is the install command safe to run?

The command is generated from public module manifests in [packages/modules/src/](https://github.com/BondeYash/BoilerBear/tree/main/packages/modules/src). It runs:

- The framework's official `create` command (e.g. `pnpm create vite@latest`).
- `pnpm add` / `npm install` / etc. for each module's pinned deps.
- A small set of file writes via `cat > file <<'BB_EOF' … BB_EOF` or `node -e '…'` patches.

Every manifest goes through a strict checker on every PR (no `..` in paths, no absolute writes, all referenced ids exist, etc.). Read the script first — it's printed in full under "View full script" on the Generate step.

## What's a "manifest"?

A `ModuleManifest` is a TypeScript object describing one module: its id, category, dependencies, conflicts with other modules, package manager-specific install behavior, and config files. See [packages/modules/src/state/zustand.ts](https://github.com/BondeYash/BoilerBear/blob/main/packages/modules/src/state/zustand.ts) for a small example, or [docs/contributing/ADDING_A_MODULE.md](https://github.com/BondeYash/BoilerBear/blob/main/docs/contributing/ADDING_A_MODULE.md) for a walkthrough.

## What's a "recipe"?

A recipe is a pre-bundled plan — a curated set of modules with a name and description. Recipes live at `packages/modules/src/recipes/`. They're a great way to point new users at a known-good stack.

## How do I add a module?

```bash
git clone https://github.com/BondeYash/BoilerBear
cd BoilerBear && pnpm install
pnpm new-module <id>          # interactive scaffold
pnpm validate-manifests       # static checks
pnpm test                     # full suite
```

Then open a PR. The [ADDING_A_MODULE.md](https://github.com/BondeYash/BoilerBear/blob/main/docs/contributing/ADDING_A_MODULE.md) walkthrough explains each field.

## How do you resolve conflicts?

The resolver walks `requires`, `conflicts`, and `recommends` edges. Conflicts have a severity (`error` blocks the build, `warning` shows a banner but lets you continue, `info` is a hint). Missing requirements default to `error`. The exact rules live in [packages/core/src/resolver/](https://github.com/BondeYash/BoilerBear/tree/main/packages/core/src/resolver).

## What about Yarn 1 / Yarn Berry?

`--pm yarn` works for both — we use plain `yarn add` and `yarn add -D` which both classic and Berry accept. If a specific module needs Berry-only behavior, we'd express that as a per-module option rather than a separate package-manager id.

## Where's the data?

There is no database. Plans live in URLs (compressed + base64url-encoded with `lz-string`). Manifest data lives in the `@boilerbear/modules` npm package. The web app is a static + edge-rendered Next.js deploy.

## Can I host my own?

Yes. The web app is `apps/web` — a stock Next.js 15 deploy with no env vars. The CLI is `@boilerbear/cli` on npm. Fork freely.
