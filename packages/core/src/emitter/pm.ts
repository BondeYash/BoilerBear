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
