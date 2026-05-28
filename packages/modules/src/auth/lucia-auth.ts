import type { ModuleManifest } from '@boilerbear/core';

export const luciaAuth: ModuleManifest = {
  id: 'lucia-auth',
  name: 'Lucia Auth',
  category: 'auth',
  tags: ['auth', 'session', 'svelte', 'solid'],
  description: 'Simple and flexible authentication library for the modern web.',
  homepage: 'https://lucia-auth.com',
  license: 'MIT',
  popularity: 300_000,
  versions: { range: '^3.2.0', min: '3.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'lucia', version: '^3.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['svelte', 'solid'],
  setup: [],
  maintainers: ['pilcrowonpaper'],
  docs: { quickstart: 'https://lucia-auth.com/getting-started' },
};
