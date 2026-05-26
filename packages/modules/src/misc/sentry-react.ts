import type { ModuleManifest } from '@boilerbear/core';

export const sentryReact: ModuleManifest = {
  id: 'sentry-react',
  name: 'Sentry for React',
  category: 'monitoring',
  tags: ['errors', 'observability', 'react'],
  description: 'Error tracking and performance monitoring for React apps.',
  homepage: 'https://docs.sentry.io/platforms/javascript/guides/react/',
  license: 'BSD-3-Clause',
  popularity: 7_500_000,
  versions: { range: '^8.40.0', min: '8.40.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@sentry/react', version: '^8.40.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['react'],
  setup: [
    {
      kind: 'envVar',
      key: 'VITE_SENTRY_DSN',
      example: 'https://<key>@sentry.io/<project>',
      required: true,
    },
  ],
  maintainers: ['getsentry'],
  docs: { quickstart: 'https://docs.sentry.io/platforms/javascript/guides/react/' },
};
