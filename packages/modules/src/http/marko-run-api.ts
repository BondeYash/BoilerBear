import type { ModuleManifest } from '@boilerbear/core';

export const markoRunApi: ModuleManifest = {
  id: 'marko-run-api',
  name: 'Marko Run API',
  category: 'http',
  tags: ['http', 'api', 'marko', 'marko-run'],
  description: 'File-based API routes for Marko Run apps.',
  homepage: 'https://github.com/marko-js/run',
  license: 'MIT',
  popularity: 15_000,
  versions: { range: '^0.6.0', min: '0.6.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@marko/run', version: '^0.6.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['marko'],
  setup: [],
  maintainers: ['marko-js'],
  docs: { quickstart: 'https://github.com/marko-js/run' },
};
