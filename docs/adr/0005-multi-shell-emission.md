# ADR 0005 — Multi-shell emission (bash + pwsh)

- **Status:** Accepted
- **Date:** 2026-05-25
- **Deciders:** core maintainers

## Context

Phase 1 emits a single `bash -c '...'` one-liner. The Phase 1 DoD line in
[docs/PHASE1_IMPLEMENTATION.md](../PHASE1_IMPLEMENTATION.md) calls for
"Linux + macOS + Windows (WSL)" — but native PowerShell users on Windows get a command
their shell cannot run. The CLI hardcodes `execa('bash', ['-c', script])` and inherits
the same problem, though `npx boilerbear run` works fine under WSL.

Two questions:

1. Where does shell selection live — in the `Plan`, or as a render-time option?
2. What happens when a `shell` setup step has a bash command but no PowerShell equivalent?

## Decision

- **`shell` is NOT a `Plan` field.** It is a render-time option on
  `emitCommand(plan, registry, { shell?: 'bash' | 'pwsh' })`. Default `'bash'`. The same
  plan renders to both shells. Share URLs stay shell-agnostic.
- **`Shell = z.enum(['bash', 'pwsh'])`** lives in `packages/core/src/schema/refs.ts`.
  `CompiledPlan` gains `shell: Shell` so the UI knows what it rendered.
- **Shell dialect abstraction.** `packages/core/src/emitter/shell/{index,bash,pwsh}.ts`
  encapsulates per-shell primitives (`preamble`, `wrapAsOneLiner`, `quote`, `cd`,
  `mkdirP`, `writeFile`, `appendLine`, `comment`). Existing bash logic moves into
  `bash.ts` byte-identical to today; pwsh is a sibling.
- **PowerShell-only on Windows.** No `cmd.exe` track. Pwsh 7+ is the modern default and
  ships with Windows 11; tracking three shells is not worth the surface area.
- **`ShellStep.pwshCommand?: string`** is the only schema addition. When the active dialect
  is pwsh and a `shell` step has no `pwshCommand`, the emitter pushes a `PlanWarning` with
  code `pwsh-unsupported-shell-step` and **skips the line**. No bash-fallthrough — running
  bash inside pwsh would either fail loudly or, worse, succeed under WSL and confuse the
  user about which interpreter ran.
- **CLI stays bash-only.** Users on native Windows copy the pwsh one-liner; CLI users on
  Windows are assumed to be in WSL (consistent with Phase 1 DoD). Revisit if native
  pwsh CLI demand materializes.

## Consequences

**Good:**
- Share URL semantics unchanged. A plan from January 2026 still renders identically.
- Pwsh is opt-in render-time → existing bash snapshots stay byte-identical, so CI
  regression-tests them via a frozen snapshot.
- Fail-loud policy + UI banner surfaces gaps as `good first issue` PRs for contributors to
  add `pwshCommand` to the offending manifest.

**Bad:**
- Every new `shell` step now has a "did you add a pwshCommand?" review checklist item.
  Mitigation: `check-manifests` warns when a polyglot manifest's `setup` contains a
  `shell` step without `pwshCommand`.
- Two snapshots per Phase 1 fixture (bash + pwsh) double the snapshot file size.
  Acceptable cost.

**Mitigated:**
- A heredoc-to-here-string translator handles 90% of `writeFile` steps without manifest
  edits.
- `pwshHereString(content)` rejects content with `'@` on its own line so manifest authors
  see emit-time errors instead of silently corrupted output.

## Auto-detect

The web UI's Generate step defaults the shell sub-tab via
`navigator.userAgent.includes('Windows')` → pwsh, else bash. Cheap, mostly correct,
trivial to refine if mis-detection reports come in.

## Why fail-loud on missing `pwshCommand`?

The alternatives were:

1. **Fallback to bash inside pwsh.** Rejected — bash isn't guaranteed on Windows. If it
   is (WSL/Git Bash), the resulting `bash -c '...'` shells out to a different process tree
   with a different working directory, breaking the rest of the pwsh script.
2. **Translate bash → pwsh automatically.** Rejected — non-trivial commands (find, sed,
   tee, process substitution) have no clean mapping. Silent partial translation is worse
   than a clear warning.

Failing loud with a UI banner pointing users back to the macOS/Linux tab is the honest
signal: this stack uses a shell step not yet ported to PowerShell.

## Revisit

Re-open when:
- Native pwsh CLI demand surfaces (currently zero issues filed).
- A meaningful share of manifests grows complex enough that hand-maintaining two
  `command` / `pwshCommand` strings per step is a measurable burden.
