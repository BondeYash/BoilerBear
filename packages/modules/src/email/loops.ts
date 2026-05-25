import type { ModuleManifest } from '@boilerbear/core';

export const loops: ModuleManifest = {
  id: 'loops',
  name: 'Loops',
  category: 'email',
  tags: ['email', 'transactional', 'lifecycle'],
  description: 'Official Loops Node.js SDK for transactional and lifecycle email.',
  homepage: 'https://loops.so',
  license: 'MIT',
  popularity: 20_000,
  versions: { range: '^4.0.0', min: '4.0.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'loops', version: '^4.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'LOOPS_API_KEY', example: 'xxx', required: true }],
  maintainers: ['loops'],
  docs: { quickstart: 'https://loops.so/docs/sdks/javascript' },
};
