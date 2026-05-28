import type { ModuleManifest } from '@boilerbear/core';

export const webTestRunner: ModuleManifest = {
  id: 'web-test-runner',
  name: 'Web Test Runner',
  category: 'testing',
  tags: ['testing', 'web-components', 'lit'],
  description: 'Test runner for web components and modern web apps using real browsers.',
  homepage: 'https://modern-web.dev/docs/test-runner/overview/',
  license: 'MIT',
  popularity: 100_000,
  versions: { range: '^0.19.0', min: '0.19.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [
      { name: '@web/test-runner', version: '^0.19.0' },
      { name: '@open-wc/testing', version: '^4.0.0' },
    ],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['lit'],
  setup: [],
  maintainers: ['modernweb-dev'],
  docs: { quickstart: 'https://modern-web.dev/docs/test-runner/overview/' },
};
