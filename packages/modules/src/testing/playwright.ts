import type { ModuleManifest } from '@boilerbear/core';

export const playwright: ModuleManifest = {
  id: 'playwright',
  name: 'Playwright',
  category: 'testing',
  tags: ['test', 'e2e', 'browser'],
  description: 'Fast, reliable end-to-end browser testing across Chromium, Firefox, and WebKit.',
  homepage: 'https://playwright.dev',
  license: 'Apache-2.0',
  popularity: 8_700_000,
  versions: { range: '^1.49.0', min: '1.49.0' },
  packages: {
    deps: [],
    devDeps: [{ name: '@playwright/test', version: '^1.49.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [
    {
      kind: 'appendScript',
      name: 'test:e2e',
      script: 'playwright test',
    },
    {
      kind: 'shell',
      command: '{pm} exec playwright install --with-deps chromium',
      when: 'postInstall',
    },
  ],
  maintainers: ['microsoft'],
  docs: { quickstart: 'https://playwright.dev/docs/intro' },
};
