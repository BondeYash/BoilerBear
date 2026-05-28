import type { ModuleManifest } from '@boilerbear/core';

export const sentryVue: ModuleManifest = {
  id: 'sentry-vue',
  name: 'Sentry for Vue',
  category: 'monitoring',
  tags: ['errors', 'observability', 'vue'],
  description: 'Error tracking and performance monitoring for Vue apps.',
  homepage: 'https://docs.sentry.io/platforms/javascript/guides/vue/',
  license: 'BSD-3-Clause',
  popularity: 600_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/vue', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vue'],
  setup: [
    {
      kind: 'envVar',
      key: 'VITE_SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/guides/vue/' },
};
