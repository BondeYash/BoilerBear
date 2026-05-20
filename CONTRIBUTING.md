# Contributing to BoilerBear

Thanks for considering a contribution. BoilerBear is an open-source platform for picking a JavaScript/TypeScript stack and getting a one-line scaffold command. We welcome bug reports, manifest additions, recipes, docs, and code.

## TL;DR

```bash
# 1. Fork + clone
git clone https://github.com/<you>/BoilerBear.git
cd BoilerBear

# 2. Use the pinned Node version
nvm use            # reads .nvmrc (Node 22)
corepack enable    # gives you pnpm

# 3. Install
pnpm install

# 4. Run checks
pnpm check          # Biome lint + format check
pnpm typecheck      # tsc across workspaces
pnpm test           # Vitest across workspaces

# 5. Make your change on a feature branch
git checkout -b feat/<short-name>

# 6. Commit (Conventional Commits encouraged) and open a PR against `main`
```

## Project Structure

```
apps/web              Next.js builder UI
packages/core         Pure domain: schemas, registry, resolver, emitter
packages/modules      Module manifests (the registry data)
packages/cli          npx boilerbear shim
packages/ui           Shared shadcn-based component library
packages/config       Shared TypeScript / Biome / Tailwind configs
```

See [`docs/PROJECT_PLAN.md`](docs/PROJECT_PLAN.md) for the long-form architecture and [`docs/PHASE1_IMPLEMENTATION.md`](docs/PHASE1_IMPLEMENTATION.md) for the current milestone breakdown.

## Adding a Module Manifest

This is the most common contribution. A walk-through lives in [`docs/contributing/ADDING_A_MODULE.md`](docs/contributing/ADDING_A_MODULE.md) (filled out in Milestone 9). Until then, copy an existing file in `packages/modules/src/` as a template.

## Commit Style

We use **Conventional Commits**:

```
feat(modules): add chakra-ui manifest
fix(core): handle empty plan in resolver
docs: clarify CLI --dry-run behavior
chore(ci): bump actions/checkout to v4
```

## Pull Requests

- Keep PRs focused. Smaller is faster to review.
- Run `pnpm check:fix && pnpm typecheck && pnpm test` before pushing.
- Add or update tests with behavior changes.
- Update relevant docs / ADRs when changing architecture.

## Reporting Bugs

Open an issue with:
- BoilerBear version (or commit SHA)
- Node + pnpm versions
- Steps to reproduce
- Expected vs. actual behavior

## Code of Conduct

Participation is governed by [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md). Please read it.

## License

By contributing, you agree that your contributions are licensed under the MIT License, the same as the project (see [`LICENSE`](LICENSE)).
