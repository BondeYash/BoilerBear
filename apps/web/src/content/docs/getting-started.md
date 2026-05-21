---
title: Getting Started
description: Build your first stack and ship the install command.
order: 1
---

# Getting Started

BoilerBear is a UI-driven scaffolder. You pick a stack in the browser, copy a single shell command, and end up with a working project on disk in under a minute. No accounts. No backend. The plan lives in the URL.

## 1. Open the builder

Head to [/builder](/builder). You'll see a five-step wizard:

1. **Basics** — project name + package manager (`pnpm`, `npm`, `yarn`, `bun`).
2. **Framework** — pick a base framework (Vite, Next.js, …). Other modules are filtered by what this framework supports.
3. **Modules** — toggle libraries from tabbed categories (Styling, Components, State, Data, …). Conflicts and missing requirements are flagged inline.
4. **Review** — resolved install order, unique package count, warnings.
5. **Generate** — copy the one-line command, or copy the share URL.

## 2. Copy the command

On the Generate step you get a `bash -c '…'` one-liner:

```bash
bash -c 'set -euo pipefail
pnpm create vite@latest my-app -- --template react-ts
cd "my-app"
pnpm add -D tailwindcss@^3.4.0 postcss@^8.4.0 autoprefixer@^10.4.0
mkdir -p .
cat > postcss.config.cjs <<"BB_EOF"
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };
BB_EOF'
```

Paste it in an empty directory. The script:

- Creates the project with the framework's official `create` command.
- `cd`s into the directory.
- Installs all dependencies (deduped across modules).
- Writes any config files the modules need.

## 3. Share the URL

Click the Share tab. The plan is encoded as `?s=<hash>` in the URL — the entire spec, no DB. Send the link; whoever opens it sees the same builder state and can rebuild or modify.

The same plan can be installed via the CLI shim:

```bash
npx @boilerbear/cli@latest run <hash>
```

See [CLI reference](/docs/cli) for the full command surface.

## What's next

- Add more modules — the registry lives at [packages/modules/src/](https://github.com/empiricinfotech/BoilerBear/tree/main/packages/modules/src).
- Author a recipe (pre-bundled stack) — see [ADDING_A_MODULE.md](https://github.com/empiricinfotech/BoilerBear/blob/main/docs/contributing/ADDING_A_MODULE.md).
- File a bug or request a module — [open an issue](https://github.com/empiricinfotech/BoilerBear/issues/new).
