import type { ModuleManifest } from '@boilerbear/core';

export const emberTailwind: ModuleManifest = {
  id: 'ember-tailwind',
  name: 'Tailwind CSS for Ember',
  category: 'styling',
  tags: ['css', 'tailwind', 'ember'],
  description: 'Tailwind CSS integration for Ember CLI projects.',
  homepage: 'https://tailwindcss.com',
  license: 'MIT',
  popularity: 200_000,
  versions: { range: '^3.4.0', min: '3.4.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'tailwindcss', version: '^3.4.0' },
      { name: 'ember-cli-tailwind', version: '^1.0.0-alpha.5' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [],
  maintainers: ['tailwindlabs'],
  docs: { quickstart: 'https://tailwindcss.com/docs/installation' },
};
