# ADR 0002 — Manifest format

- **Status:** Accepted
- **Date:** 2026-01-19
- **Deciders:** core maintainers

## Context

A BoilerBear "module" — Tailwind, shadcn/ui, Zustand, Vitest, etc. — needs a machine-readable description so the resolver, emitter, and builder UI can all work from the same source. We had three honest options:

1. **JSON files** in a directory, loaded at runtime.
2. **TypeScript files** that export a typed object.
3. **A DSL or YAML** with its own parser.

We also had to pick a validation strategy: structural typing only (trust the import), runtime validation via Zod, or external (e.g. JSON Schema).

## Decision

Module manifests are **TypeScript objects** that satisfy a **Zod schema**:

- One file per module under `packages/modules/src/<category>/<id>.ts`.
- Each file `export const <camelId>: ModuleManifest = { … }`.
- The package barrel (`src/index.ts`) re-exports them and a flat `allManifests: ReadonlyArray<ModuleManifest>`.
- `@boilerbear/core` defines `ModuleManifest` as a Zod schema. Consumers call `createRegistry(manifests)` which runs `ModuleManifest.parse` over each one and indexes the result.

Concretely the schema lives at [`packages/core/src/schema/module.ts`](../../packages/core/src/schema/module.ts) and the package layout at [`packages/modules/src/`](../../packages/modules/src/).

## Consequences

**Good:**
- **Static type checking** during authoring. Mis-typed fields fail `tsc` in the contributing PR, not at runtime.
- **Refactors are safe**. Renaming an enum value in `Category` produces compile errors at every call site.
- **Zod runtime validation** catches edge cases (URL fields, regex IDs, semver-shaped strings) that pure TypeScript can't.
- **No parser to maintain.** TypeScript is the parser. `tsx` runs the validation script directly.
- **Free dead-code elimination** for the bundle — only modules pulled into `allManifests` ship.
- **Each manifest is its own commit-reviewable file** — clean PR diffs, easy attribution.

**Bad:**
- Non-TS contributors can't author manifests in pure data. Workaround: `pnpm new-module <id>` scaffolds the file from prompts.
- Loading manifests at build time requires the consumer to depend on `@boilerbear/modules` and run it through their bundler. Acceptable for the web app and the CLI; would be awkward for a future "registry server" use case.
- The Zod schema is duplicated as a runtime type and as a TypeScript type via `z.infer`. We accept this — it's the only way to get both pre-PR static safety and runtime validation.

**Mitigated:**
- The `pnpm new-module` scaffolder removes the TypeScript barrier for first-time contributors.
- A static check (`pnpm validate-manifests`) runs on every PR and catches schema mismatches before review.
- Nightly recipe-install matrix catches semantically broken manifests (right shape, wrong content) that the static check can't.

## Alternatives considered

1. **JSON files.** Rejected. No type-checking in authoring tools. Versioning fields like `requires` is harder. Would still need a Zod schema, so we'd validate twice.
2. **YAML + custom DSL.** Rejected. Adds a parser; adds tooling drift. The savings in line count are tiny.
3. **No Zod, just TypeScript.** Rejected. Without runtime validation, malformed manifests would crash deep in the resolver, not at parse time. Also no protection if a future plugin SDK loads third-party manifests.

## Schema versioning

The `Plan` schema carries `v: 1`. The `ModuleManifest` schema does **not** carry a version field — we're tracking module-schema changes via the workspace dependency between `@boilerbear/modules` and `@boilerbear/core`. Breaking changes in the manifest schema require a major bump of `@boilerbear/core`.

## Revisit

Re-open this when:
- Third-party plugins want to ship their own manifests from a different repo (Phase 3). At that point we'll need either a published types-only package or a JSON+schema split.
- The schema grows past ~30 top-level fields, which usually signals it's time to refactor into nested groups.
