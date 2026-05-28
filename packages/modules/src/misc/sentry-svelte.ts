import type { ModuleManifest } from '@boilerbear/core';

export const sentrySvelte: ModuleManifest = {
  id: 'sentry-svelte',
  name: 'Sentry for Svelte',
  category: 'monitoring',
  tags: ['errors', 'observability', 'svelte'],
  description: 'Error tracking and performance monitoring for Svelte apps.',
  homepage: 'https://docs.sentry.io/platforms/javascript/guides/svelte/',
  license: 'MIT',
  popularity: 200_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/svelte', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['svelte'],
  setup: [
    {
      kind: 'envVar',
      key: 'VITE_SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/guides/svelte/' },
};
