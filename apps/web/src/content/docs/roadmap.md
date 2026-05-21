---
title: Roadmap
description: What's shipped, what's next, what's deferred.
order: 4
---

# Roadmap

BoilerBear ships in phases. Phase 1 is a stateless, client-side builder + CLI. Phase 2 adds persistence and richer integrations. Phase 3+ explores AI-assisted stack selection and drift mode.

## Phase 1 — Stateless builder (current)

| Done | Milestone |
|------|-----------|
| ✅ | Monorepo + tooling foundation (pnpm, Turbo, Biome, Husky, CI) |
| ✅ | `@boilerbear/core` — Zod schemas, registry, resolver, emitter, plan codec |
| ✅ | `@boilerbear/modules` — 25+ manifests, 2 recipes, validation script |
| ✅ | `@boilerbear/cli` — `run` and `recipes` commands |
| ✅ | `apps/web` — landing + 5-step builder + share view + OG image |
| ✅ | Manifest quality gates — strict checker + nightly install matrix |
| ✅ | Testing & quality — 90%+ core coverage, Playwright E2E, axe a11y gate |
| ⏳ | Docs & contribution — user docs (this page!), ADRs, `pnpm new-module` |
| ⏳ | Beta launch — `boilerbear.dev`, Changesets publish, Show HN |

## Phase 2 — Persistence + integrations

- Optional accounts (GitHub OAuth) + saved plans.
- Team templates with org-level overrides.
- "Open in StackBlitz / CodeSandbox" — already a placeholder in the Generate step.
- Generate a zip / push to a fresh GitHub repo from the UI.
- Telemetry for which modules are popular together (opt-in).

## Phase 3+ — Smarter stacks

- AI stack assistant — describe what you're building, get a draft plan.
- Drift mode — point at an existing repo, get a report of which modules are present and which manifest steps are missing.
- Plugin SDK — third parties can publish their own module collections to the registry.
- WebContainer in-browser previews.

## Anti-roadmap

We deliberately won't ship:

- A locked-in cloud service. BoilerBear is open-source; everything runs locally too.
- Forced telemetry. Anonymous, opt-in only.
- A closed marketplace. Modules and recipes are TypeScript files in this repo (and, in Phase 3, in third-party plugins).
- Yet another bundled CLI. The shell command from the builder is always the source of truth; the CLI is convenience.

## Want to influence it?

Open an [issue](https://github.com/BondeYash/BoilerBear/issues) or comment on the milestone tracker in [PHASE1_IMPLEMENTATION.md](https://github.com/BondeYash/BoilerBear/blob/main/docs/PHASE1_IMPLEMENTATION.md).
