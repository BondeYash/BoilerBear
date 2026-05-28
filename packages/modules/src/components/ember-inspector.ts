import type { ModuleManifest } from '@boilerbear/core';

export const emberInspector: ModuleManifest = {
  id: 'ember-inspector',
  name: 'Ember Inspector',
  category: 'components',
  tags: ['devtools', 'ember', 'debug'],
  description: 'Browser extension dev tools for inspecting Ember apps at runtime.',
  homepage: 'https://github.com/emberjs/ember-inspector',
  license: 'MIT',
  popularity: 300_000,
  versions: { range: '^4.13.0', min: '4.13.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [{ name: 'ember-inspector', version: '^4.13.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [],
  maintainers: ['emberjs'],
  docs: { quickstart: 'https://github.com/emberjs/ember-inspector#readme' },
};
