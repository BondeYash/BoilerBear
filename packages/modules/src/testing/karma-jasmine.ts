import type { ModuleManifest } from '@boilerbear/core';

export const karmaJasmine: ModuleManifest = {
  id: 'karma-jasmine',
  name: 'Karma + Jasmine',
  category: 'testing',
  tags: ['testing', 'unit', 'angular'],
  description: 'Test runner and behavior-driven testing framework, the Angular default.',
  homepage: 'https://karma-runner.github.io',
  license: 'MIT',
  popularity: 2_500_000,
  versions: { range: '^6.4.0', min: '6.4.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [
      { name: 'karma', version: '^6.4.0' },
      { name: 'jasmine-core', version: '^5.4.0' },
      { name: 'karma-jasmine', version: '^5.1.0' },
    ],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [],
  maintainers: ['karma-runner'],
  docs: { quickstart: 'https://karma-runner.github.io/6.4/intro/installation.html' },
};
