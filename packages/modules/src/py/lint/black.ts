import type { ModuleManifest } from '@boilerbear/core';

export const black: ModuleManifest = {
  id: 'black',
  name: 'Black',
  category: 'lint',
  tags: ['python', 'format'],
  description: 'Uncompromising Python code formatter.',
  homepage: 'https://black.readthedocs.io',
  license: 'MIT',
  popularity: 80_000_000,
  languages: ['py'],
  versions: { range: '^24.10.0', min: '24.10.0' },
  packages: {
    deps: [],
    devDeps: [{ name: 'black', version: '^24.10.0' }],
  },
  requires: [],
  conflicts: [{ id: 'ruff', severity: 'warning', reason: 'Ruff formats too; pick one.' }],
  recommends: [],
  appliesTo: ['fastapi', 'django', 'flask', 'litestar'],
  setup: [],
  maintainers: [],
};
