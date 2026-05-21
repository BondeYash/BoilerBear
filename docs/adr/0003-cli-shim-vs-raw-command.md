# ADR 0003 — CLI shim vs raw command

- **Status:** Accepted
- **Date:** 2026-02-02
- **Deciders:** core maintainers

## Context

The builder's primary output is a single shell command:

```bash
bash -c 'set -euo pipefail
pnpm create vite@latest my-app -- --template react-ts
cd "my-app"
pnpm add -D tailwindcss@^3.4.0 postcss@^8.4.0 autoprefixer@^10.4.0
…'
```

That command is enough — you can copy it into a terminal and have a working project. Yet `npx boilerbear@latest run <hash>` is a real, separately published CLI. Why both?

The alternatives were:

1. **Raw shell command only.** Ship the bash one-liner. No CLI.
2. **CLI only.** The builder shows the `npx` invocation; the script is hidden behind it.
3. **Both, with the raw command as the source of truth.** The CLI is a friendly wrapper that ultimately just executes the same script.

## Decision

We ship **both**, with the raw shell command as the canonical, audit-friendly artifact. The CLI is a thin shim that:

- Decodes the plan (from a hash, recipe id, or local JSON file).
- Validates it via the same `@boilerbear/core` codec + resolver.
- Prints a readable summary (modules, install order, package count, warnings).
- Prompts for confirmation (unless `--yes`).
- Executes the install script via `execa`.

The CLI **does not** generate its own command separately. It calls `emitCommand` from `@boilerbear/core` exactly like the web app. The shell command is the contract.

## Consequences

**Good:**
- **Auditability.** Every user can read the script before running it. No hidden behavior in the CLI.
- **CI-friendly.** `npx @boilerbear/cli run <hash> --yes` produces a deterministic script that's the same byte-for-byte as the one a human would copy/paste.
- **`--dry-run` is honest.** It prints the exact script that would execute.
- **No SDK drift.** Web app and CLI share `@boilerbear/core` directly. Bug fixes in the resolver land in both at the same version pin.
- **Power-user escape hatch.** If the CLI is unavailable (corporate proxy, no Node, etc.), the raw command still works in any shell.
- **Trivial mocking in tests.** The CLI tests can assert on the script string without touching the file system.

**Bad:**
- Two surfaces to document — `/docs/cli` explains the CLI, the builder explains the raw command. Acceptable; they overlap heavily.
- The CLI must stay a *thin* shim. Any feature creep (interactive plan editing, plugin loading, etc.) belongs in `@boilerbear/core` or in a separate package, not in `@boilerbear/cli`. We enforce this by keeping the CLI test suite small and the dependencies minimal (`cac`, `execa`, `picocolors`, `prompts`).

**Mitigated:**
- Documentation duplication is handled by linking the FAQ and the CLI doc to a shared "What's in the install command?" section.
- Drift between the CLI's behavior and the web app's behavior is structurally impossible — they share the emitter.

## Why not embed the script inside the CLI?

We considered shipping the CLI with hardcoded recipes that don't decode a plan at all (faster startup, simpler tests). Rejected because:

- It would let the CLI diverge from the resolver, which is the whole point of the architecture.
- Recipes are themselves just named `Plan` objects in `@boilerbear/modules` — the same decoder handles them.

## Why publish a CLI at all?

Because `bash -c '…big multi-line…'` is unfriendly to share in chat, in a wiki, in a README quickstart. `npx @boilerbear/cli run <hash>` is one line, copy-pasteable, and self-explanatory. It also gives us a stable place to hang Phase 2 features (opt-in telemetry, login, etc.) without bloating the web app.

## Revisit

Re-open this when:
- The CLI grows past ~500 lines of source. That's a signal it's accreting features and should be split.
- We start shipping CLI-only features (e.g. local plan editing). At that point we either split the CLI into `core` + `tui`, or we decide the CLI is the place for interactivity and revisit the contract.
