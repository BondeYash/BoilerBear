import type { ModuleManifest } from '@boilerbear/core';

export const sentrySveltekit: ModuleManifest = {
  id: 'sentry-sveltekit',
  name: 'Sentry for SvelteKit',
  category: 'monitoring',
  tags: ['errors', 'observability', 'sveltekit'],
  description: 'Error tracking and performance monitoring for SvelteKit apps.',
  homepage: 'https://docs.sentry.io/platforms/javascript/guides/sveltekit/',
  license: 'MIT',
  popularity: 180_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/sveltekit', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['sveltekit'],
  setup: [
    {
      kind: 'envVar',
      key: 'PUBLIC_SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/guides/sveltekit/' },
};
