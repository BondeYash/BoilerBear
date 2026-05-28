import type { ModuleManifest } from '@boilerbear/core';

export const nuxtSentry: ModuleManifest = {
  id: 'nuxt-sentry',
  name: 'Sentry for Nuxt',
  category: 'monitoring',
  tags: ['errors', 'observability', 'nuxt'],
  description: 'Error tracking and performance monitoring for Nuxt 3 apps.',
  homepage: 'https://docs.sentry.io/platforms/javascript/guides/nuxt/',
  license: 'BSD-3-Clause',
  popularity: 250_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/nuxt', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['nuxt'],
  setup: [
    {
      kind: 'envVar',
      key: 'NUXT_PUBLIC_SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/guides/nuxt/' },
};
