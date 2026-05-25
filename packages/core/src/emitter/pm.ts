import type { PackageManager, PkgSpec } from '../schema/refs.js';

export interface PmCommands {
  install: string;
  add(deps: ReadonlyArray<PkgSpec>): string;
  addDev(deps: ReadonlyArray<PkgSpec>): string;
  exec(cmd: string): string;
  runScript(name: string): string;
}

function fmtSpec(spec: PkgSpec): string {
  return `${spec.name}@${spec.version}`;
}

/** JS package specs use `@`; Python uses `==`; Go uses `@`; Rust uses `@`. */
function pySpec(spec: PkgSpec): string {
  // Strip a leading `^` or `~`; pip/uv/poetry have their own range grammar.
  const v = spec.version.replace(/^[\^~]/, '');
  return `${spec.name}==${v}`;
}

export function getPm(pm: PackageManager): PmCommands {
  switch (pm) {
    case 'pnpm':
      return {
        install: 'pnpm install',
        add: (deps) => (deps.length === 0 ? '' : `pnpm add ${deps.map(fmtSpec).join(' ')}`),
        addDev: (deps) => (deps.length === 0 ? '' : `pnpm add -D ${deps.map(fmtSpec).join(' ')}`),
        exec: (cmd) => `pnpm exec ${cmd}`,
        runScript: (name) => `pnpm run ${name}`,
      };
    case 'npm':
      return {
        install: 'npm install',
        add: (deps) => (deps.length === 0 ? '' : `npm install ${deps.map(fmtSpec).join(' ')}`),
        addDev: (deps) =>
          deps.length === 0 ? '' : `npm install --save-dev ${deps.map(fmtSpec).join(' ')}`,
        exec: (cmd) => `npx ${cmd}`,
        runScript: (name) => `npm run ${name}`,
      };
    case 'yarn':
      return {
        install: 'yarn install',
        add: (deps) => (deps.length === 0 ? '' : `yarn add ${deps.map(fmtSpec).join(' ')}`),
        addDev: (deps) => (deps.length === 0 ? '' : `yarn add -D ${deps.map(fmtSpec).join(' ')}`),
        exec: (cmd) => `yarn dlx ${cmd}`,
        runScript: (name) => `yarn ${name}`,
      };
    case 'bun':
      return {
        install: 'bun install',
        add: (deps) => (deps.length === 0 ? '' : `bun add ${deps.map(fmtSpec).join(' ')}`),
        addDev: (deps) => (deps.length === 0 ? '' : `bun add -d ${deps.map(fmtSpec).join(' ')}`),
        exec: (cmd) => `bunx ${cmd}`,
        runScript: (name) => `bun run ${name}`,
      };
    case 'pip':
      // pip has no dev/prod split — both flow into a single `pip install` line.
      return {
        install: 'pip install -r requirements.txt',
        add: (deps) => (deps.length === 0 ? '' : `pip install ${deps.map(pySpec).join(' ')}`),
        addDev: (deps) => (deps.length === 0 ? '' : `pip install ${deps.map(pySpec).join(' ')}`),
        exec: (cmd) => `python -m ${cmd}`,
        runScript: (name) => `python -m ${name}`,
      };
    case 'uv':
      return {
        install: 'uv sync',
        add: (deps) => (deps.length === 0 ? '' : `uv add ${deps.map(pySpec).join(' ')}`),
        addDev: (deps) => (deps.length === 0 ? '' : `uv add --dev ${deps.map(pySpec).join(' ')}`),
        exec: (cmd) => `uv run ${cmd}`,
        runScript: (name) => `uv run ${name}`,
      };
    case 'poetry':
      return {
        install: 'poetry install',
        add: (deps) => (deps.length === 0 ? '' : `poetry add ${deps.map(pySpec).join(' ')}`),
        addDev: (deps) =>
          deps.length === 0 ? '' : `poetry add --group dev ${deps.map(pySpec).join(' ')}`,
        exec: (cmd) => `poetry run ${cmd}`,
        runScript: (name) => `poetry run ${name}`,
      };
    case 'go':
      // Go has no dev/prod split.
      return {
        install: 'go mod tidy',
        add: (deps) => (deps.length === 0 ? '' : `go get ${deps.map(fmtSpec).join(' ')}`),
        addDev: (deps) => (deps.length === 0 ? '' : `go get ${deps.map(fmtSpec).join(' ')}`),
        exec: (cmd) => `go run ${cmd}`,
        runScript: (name) => `go run ./cmd/${name}`,
      };
    case 'cargo':
      return {
        install: 'cargo build',
        add: (deps) =>
          deps.length === 0
            ? ''
            : `cargo add ${deps.map((s) => `${s.name}@${s.version}`).join(' ')}`,
        addDev: (deps) =>
          deps.length === 0
            ? ''
            : `cargo add --dev ${deps.map((s) => `${s.name}@${s.version}`).join(' ')}`,
        exec: (cmd) => `cargo run -- ${cmd}`,
        runScript: (name) => `cargo run --bin ${name}`,
      };
  }
}

export function renderCreateCommand(
  template: string,
  vars: { name: string; pm: PackageManager },
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => {
    if (key === 'name') return vars.name;
    if (key === 'pm') return vars.pm;
    return `{${key}}`;
  });
}
