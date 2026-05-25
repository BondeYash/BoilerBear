import type { ModuleManifest } from '@boilerbear/core';

export const vitestModule: ModuleManifest = {
  id: 'vitest',
  name: 'Vitest',
  category: 'testing',
  tags: ['test', 'unit', 'vite'],
  description: 'Vite-native test runner with Jest-compatible API.',
  homepage: 'https://vitest.dev',
  license: 'MIT',
  popularity: 11_000_000,
  versions: { range: '^2.1.0', min: '2.1.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [
      { name: 'vitest', version: '^2.1.0' },
      { name: '@vitest/coverage-v8', version: '^2.1.0' },
      { name: 'jsdom', version: '^25.0.0' },
    ],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'testing-library' }],
  appliesTo: ['vite', 'next'],
  setup: [
    {
      kind: 'appendScript',
      name: 'test',
      script: 'vitest run',
    },
    {
      kind: 'appendScript',
      name: 'test:watch',
      script: 'vitest',
    },
    {
      kind: 'writeFile',
      path: 'vitest.config.ts',
      content: `import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
`,
      ifMissing: true,
    },
  ],
  maintainers: ['vitest-dev'],
  docs: { quickstart: 'https://vitest.dev/guide/' },
};
