import type { ModuleManifest } from '@boilerbear/core';

export const emberCliDeploy: ModuleManifest = {
  id: 'ember-cli-deploy',
  name: 'ember-cli-deploy',
  category: 'ci',
  tags: ['ci', 'deploy', 'ember'],
  description:
    'Pluggable deployment pipeline for Ember apps with adapters for S3, Redis, and more.',
  homepage: 'https://github.com/ember-cli-deploy/ember-cli-deploy',
  license: 'MIT',
  popularity: 100_000,
  versions: { range: '^2.1.0', min: '2.1.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [{ name: 'ember-cli-deploy', version: '^2.1.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['ember'],
  setup: [],
  maintainers: ['ember-cli-deploy'],
  docs: { quickstart: 'http://ember-cli-deploy.com/docs/v1.0.x/quickstart/' },
};
