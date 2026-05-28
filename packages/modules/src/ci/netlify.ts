import type { ModuleManifest } from '@boilerbear/core';

export const netlify: ModuleManifest = {
  id: 'netlify',
  name: 'Netlify CLI',
  category: 'ci',
  tags: ['deploy', 'hosting', 'netlify', 'ci'],
  description: 'Deploy static and serverless apps to Netlify from the command line.',
  homepage: 'https://docs.netlify.com',
  license: 'MIT',
  popularity: 500_000,
  versions: { range: '^17.37.0', min: '17.37.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [{ name: 'netlify-cli', version: '^17.37.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['alpine', 'htmx', 'mithril', 'stencil'],
  setup: [],
  maintainers: ['netlify'],
  docs: { quickstart: 'https://docs.netlify.com' },
};
