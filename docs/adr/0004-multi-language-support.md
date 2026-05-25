# ADR 0004 — Multi-language support (JS / Python / Go / Rust)

- **Status:** Accepted
- **Date:** 2026-05-25
- **Deciders:** core maintainers

## Context

Phase 1 shipped a JS/TS-only scaffolder. The schema (`Plan`, `ModuleManifest`) and emitter
bake JS assumptions: `packageManager` enum is `pnpm | npm | yarn | bun`; `patchJson` /
`appendScript` steps assume a `package.json`; the emitter's `pm.ts` switches over those
four names; manifests carry no language tag.

Phase 2 expands to Python, then Go and Rust. We need a way to:

1. Tag plans and manifests with a language so the UI can filter and the resolver can reject
   incoherent combinations (Vite + Python, ruff + JS, etc.).
2. Widen `PackageManager` to include `pip | uv | poetry | go | cargo` without letting a
   user pick `pnpm` for a Rust plan.
3. Keep every share URL already in the wild working after the upgrade.

## Decision

- **`Plan.language: 'js' | 'py' | 'go' | 'rust'`**, Zod default `'js'`. Existing decoded
  plans (no `language` field) gain `'js'` for free.
- **`PackageManager` enum widens** to the full union. Plan-level `superRefine` enforces
  `pmsForLanguage(plan.language).includes(plan.packageManager)`. Old plans with
  `packageManager ∈ JS-set` still validate because the default language is `'js'`.
- **`ModuleManifest.languages: Language[]`**, default `['js']`. All 25 existing manifests
  inherit `['js']` with zero edits. Polyglot tools (Biome, Playwright) can list multiple.
- **`v: 1` stays.** Adding defaulted optional fields is precisely what defaults are for —
  there is no decode-time error for old payloads, so no version bump is justified.
- **Codec back-compat trick:** in `encodePlan`, delete `language` when `=== 'js'` before
  `JSON.stringify`. Newly encoded JS plans produce **byte-identical** hashes to today's
  encoder. A captured production hash is asserted byte-identical in `codec.test.ts`.

## Consequences

**Good:**
- Old share URLs decode unchanged.
- The UI gets a clean filter axis (`registry.byLanguage(plan.language)`).
- New PM families slot in without breaking JS code paths.
- Phase 4 polyglot modules (Docker, env-validator) can list every supported language.

**Bad:**
- Recipe authoring gains one extra field to think about (`languages`).
- The PM widening is a single point that must stay in sync with new language tracks
  (Phase 3 adds `go` and `cargo`).

**Mitigated:**
- `pnpm new-module` is extended to prompt for `language` so manifest authors do not need
  to remember the field.
- `check-manifests` cross-checks every recipe's modules against the recipe's language —
  a `languages: ['js']` module inside a Python recipe fails CI.

## Why not bump `v: 2`?

A version bump is reserved for shape changes that a default cannot rescue — for example,
per-language `packages` map (`packages.py.deps`) or multi-base recipes. Those land in a
future plan. Adding two optional, defaulted fields does not qualify.

## Why not infer `language` from `packageManager`?

`languageForPm('uv') === 'py'` works, but inferring `language` from `packageManager` makes
the UI hard to reason about: switching the PM dropdown would secretly change the language
and clear the module list. Storing `language` explicitly keeps the two axes orthogonal.

## Revisit

Re-open when:
- A 5th language track lands (the PM enum starts feeling like a junk drawer).
- A real demand surfaces for per-language `packages` maps inside a single manifest — at
  that point bump to `v: 2` with an explicit migration.
