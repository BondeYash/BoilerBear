/**
 * Interactive scaffolder for new module manifests.
 *
 * Usage:
 *   pnpm new-module <id>
 *
 * Prompts for category, name, description, homepage, semver range, and optional deps.
 * Writes packages/modules/src/<category>/<id>.ts, then patches src/index.ts to import
 * and export the new manifest alongside `allManifests`.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { stdin, stdout } from 'node:process';
import readline from 'node:readline/promises';

const ROOT = path.resolve(import.meta.dirname, '..', 'src');
const INDEX = path.join(ROOT, 'index.ts');

const ID_RE = /^[a-z0-9][a-z0-9-]*$/;
const SEMVER_RE = /^\^?\d+\.\d+\.\d+/;

const CATEGORIES = [
  'framework',
  'language',
  'styling',
  'components',
  'state',
  'data',
  'auth',
  'routing',
  'testing',
  'lint',
  'ci',
  'deploy',
  'analytics',
  'i18n',
  'misc',
] as const;

type Category = (typeof CATEGORIES)[number];

interface Answers {
  id: string;
  name: string;
  category: Category;
  description: string;
  homepage: string;
  versionRange: string;
  versionMin: string;
  depName?: string;
  depVersion?: string;
  appliesTo: string[];
}

function fail(msg: string): never {
  console.error(`✘ ${msg}`);
  process.exit(1);
}

function toCamel(id: string): string {
  return id.replace(/-([a-z0-9])/g, (_, ch: string) => ch.toUpperCase());
}

async function ask(rl: readline.Interface, q: string, fallback?: string): Promise<string> {
  const suffix = fallback ? ` [${fallback}]` : '';
  const value = (await rl.question(`${q}${suffix}: `)).trim();
  return value || fallback || '';
}

async function askChoice(
  rl: readline.Interface,
  q: string,
  choices: ReadonlyArray<string>,
  fallback: string,
): Promise<string> {
  while (true) {
    const value = await ask(rl, `${q} (${choices.join(' | ')})`, fallback);
    if (choices.includes(value)) return value;
    console.error(`  invalid — pick one of: ${choices.join(', ')}`);
  }
}

async function collect(id: string): Promise<Answers> {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  try {
    if (!ID_RE.test(id)) fail(`id "${id}" must be lowercase kebab-case (a-z 0-9 -).`);

    const category = (await askChoice(rl, 'category', CATEGORIES, 'misc')) as Category;
    const name = await ask(rl, 'display name', id);
    const description = await ask(rl, 'one-sentence description');
    if (!description) fail('description is required.');
    const homepage = await ask(rl, 'homepage URL');
    if (!/^https?:\/\//.test(homepage)) fail('homepage must be a full URL.');
    const versionRange = await ask(rl, 'version range (semver)', '^1.0.0');
    if (!SEMVER_RE.test(versionRange)) fail('version range must look like ^1.2.3.');
    const versionMin = versionRange.replace(/^\^/, '');
    const depName = (await ask(rl, 'primary npm package (blank to skip)')) || undefined;
    const depVersion = depName ? versionRange : undefined;
    const appliesToRaw = await ask(rl, 'appliesTo frameworks (comma, blank = any)', 'vite,next');
    const appliesTo = appliesToRaw
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    return {
      id,
      name,
      category,
      description,
      homepage,
      versionRange,
      versionMin,
      depName,
      depVersion,
      appliesTo,
    };
  } finally {
    rl.close();
  }
}

function render(a: Answers): string {
  const isFramework = a.category === 'framework';
  const depsBlock =
    a.depName && a.depVersion
      ? `\n    deps: [{ name: '${a.depName}', version: '${a.depVersion}' }],\n    devDeps: [],`
      : '\n    deps: [],\n    devDeps: [],';

  const appliesTo = isFramework ? '[]' : `[${a.appliesTo.map((id) => `'${id}'`).join(', ')}]`;

  const frameworkField = isFramework
    ? `\n  framework: {\n    template: 'TODO',\n    createCommand: '{pm} create ${a.id}@latest {name}',\n  },`
    : '';

  return `import type { ModuleManifest } from '@boilerbear/core';

export const ${toCamel(a.id)}: ModuleManifest = {
  id: '${a.id}',
  name: '${a.name.replace(/'/g, "\\'")}',
  category: '${a.category}',
  tags: [],
  description: '${a.description.replace(/'/g, "\\'")}',
  homepage: '${a.homepage}',
  license: 'MIT',
  versions: { range: '${a.versionRange}', min: '${a.versionMin}' },
  packages: {${depsBlock}
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ${appliesTo},${frameworkField}
  setup: [],
  maintainers: [],
};
`;
}

async function ensureDir(dir: string): Promise<void> {
  await fs.mkdir(dir, { recursive: true });
}

function patchIndex(source: string, importLine: string, exportName: string): string {
  if (source.includes(importLine)) {
    throw new Error(`Import "${importLine}" already present.`);
  }

  const lines = source.split('\n');
  const lastImportIdx = lines.reduce((acc, line, i) => (line.startsWith('import ') ? i : acc), -1);
  if (lastImportIdx === -1) {
    throw new Error('Could not locate import block in src/index.ts.');
  }

  const arrayCloseIdx = lines.findIndex((l) => l.trim() === '];');
  if (arrayCloseIdx === -1) {
    throw new Error('Could not locate `allManifests` array close in src/index.ts.');
  }

  // Insert import after the last existing import. Biome organize-imports
  // will sort it into the right slot on the next save.
  lines.splice(lastImportIdx + 1, 0, importLine);

  // Patch the `allManifests` array — first `];` after the imports.
  const updatedArrayClose = lines.findIndex((l) => l.trim() === '];');
  lines.splice(updatedArrayClose, 0, `  ${exportName},`);

  // Patch the named `export { ... };` block. Biome alphabetizes it on save,
  // so we just need to land the name inside the block.
  const exportOpen = lines.findIndex((l) => l.trim() === 'export {');
  if (exportOpen !== -1) {
    const exportClose = lines.findIndex((l, i) => i > exportOpen && l.trim().startsWith('}'));
    if (exportClose !== -1) {
      lines.splice(exportClose, 0, `  ${exportName},`);
    }
  }

  return lines.join('\n');
}

async function main(): Promise<void> {
  const [, , id] = process.argv;
  if (!id) fail('usage: pnpm new-module <id>');

  const answers = await collect(id);
  const dir = path.join(ROOT, answers.category);
  const file = path.join(dir, `${answers.id}.ts`);

  try {
    await fs.access(file);
    fail(`file already exists: ${path.relative(process.cwd(), file)}`);
  } catch {
    /* file does not exist — good */
  }

  await ensureDir(dir);
  await fs.writeFile(file, render(answers), 'utf8');
  console.log(`✓ wrote ${path.relative(process.cwd(), file)}`);

  const exportName = toCamel(answers.id);
  const importLine = `import { ${exportName} } from './${answers.category}/${answers.id}.js';`;

  const indexSrc = await fs.readFile(INDEX, 'utf8');
  try {
    const patched = patchIndex(indexSrc, importLine, exportName);
    await fs.writeFile(INDEX, patched, 'utf8');
    console.log(`✓ patched src/index.ts with ${exportName}`);
  } catch (err) {
    console.warn(`! could not auto-patch src/index.ts: ${(err as Error).message}`);
    console.warn('  add manually:');
    console.warn(`    ${importLine}`);
    console.warn(`    then push \`${exportName}\` into the allManifests array.`);
  }

  console.log('\nNext steps:');
  console.log('  pnpm validate-manifests');
  console.log('  pnpm --filter @boilerbear/modules typecheck');
  console.log('  pnpm test');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
