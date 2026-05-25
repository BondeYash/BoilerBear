import type { ModuleManifest } from '@boilerbear/core';

export const slonik: ModuleManifest = {
  id: 'slonik',
  name: 'Slonik',
  category: 'orm',
  tags: ['postgres', 'sql', 'safety'],
  description: 'Battle-tested PostgreSQL client with strict types and safe SQL templates.',
  homepage: 'https://github.com/gajus/slonik',
  license: 'BSD-3-Clause',
  popularity: 120_000,
  versions: { range: '^46.0.0', min: '46.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'slonik', version: '^46.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'pg', severity: 'warning', reason: 'Slonik wraps pg.' }],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['gajus'],
  docs: { quickstart: 'https://github.com/gajus/slonik#usage' },
};
