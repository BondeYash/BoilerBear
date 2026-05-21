---
title: CLI reference
description: npx @boilerbear/cli run — flags, examples, exit codes.
order: 3
---

# CLI reference

The `@boilerbear/cli` package is a thin shim that decodes a plan, prints a summary, asks for confirmation, and executes the install script. It's optional — the one-line shell command from the builder works just as well — but the CLI gives you nicer prompts, dry-run output, and the ability to pin a plan in source control.

## Install

You typically don't install it. Use `npx`:

```bash
npx @boilerbear/cli@latest run <hash>
```

If you'd rather have a local install:

```bash
pnpm add -g @boilerbear/cli
boilerbear run <hash>
```

## Commands

### `run [hash]`

Scaffold a project from a share hash, a recipe id, or a local plan file.

#### Plan sources (pick one)

| Flag | Description |
|------|-------------|
| `<hash>` | A share hash from the builder (the `s` query param, or the path segment from `/s/<hash>`). |
| `--recipe <id>` | A built-in recipe id (see `boilerbear recipes`). |
| `--plan <path>` | Path to a local JSON file containing a `Plan` object. |

#### Overrides

| Flag | Default | Description |
|------|---------|-------------|
| `--name <name>` | from plan | Override the project name. |
| `--pm <pm>` | from plan | Package manager: `pnpm` \| `npm` \| `yarn` \| `bun`. |
| `--cwd <dir>` | `$PWD` | Directory to scaffold into. |

#### Behavior flags

| Flag | Description |
|------|-------------|
| `--dry-run` | Print the resolved plan and the script that *would* run. No exec. |
| `--yes`, `-y` | Skip the confirmation prompt (for CI). |

#### Examples

```bash
# From a builder share URL
npx @boilerbear/cli@latest run 'N4IgZiBcDaIE...'

# Built-in recipe with a custom name, dry run first
npx @boilerbear/cli@latest run --recipe vite-classic --name my-app --dry-run

# Local plan checked into source control
npx @boilerbear/cli@latest run --plan ./stack.json --yes

# Override the package manager
npx @boilerbear/cli@latest run <hash> --pm bun
```

### `recipes`

List built-in recipes — id, name, base framework, included modules.

```bash
npx @boilerbear/cli@latest recipes
```

## Exit codes

| Code | Meaning |
|------|---------|
| 0 | Project scaffolded successfully (or dry-run completed). |
| 1 | Generic failure — message printed to stderr. |
| 2 | Plan failed validation (decode or Zod). |
| 3 | User declined the confirmation prompt. |
| 4 | Install script returned non-zero. |

## Piping a plan via stdin

Phase 2 will support `--plan -` to read a plan from stdin. For now use a temp file:

```bash
echo '{"v":1,"projectName":"x","base":"vite",...}' > /tmp/plan.json
npx @boilerbear/cli@latest run --plan /tmp/plan.json --yes
```

## Telemetry

The CLI does not collect telemetry in Phase 1. A `--telemetry` flag exists as a noop so the contract is stable for Phase 2 opt-in metrics.
