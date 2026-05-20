import type { ModuleManifest } from '@boilerbear/core';

export const posthog: ModuleManifest = {
  id: 'posthog',
  name: 'PostHog',
  category: 'analytics',
  tags: ['analytics', 'product', 'self-hostable'],
  description: 'Product analytics, session replay, feature flags. Self-hostable.',
  homepage: 'https://posthog.com',
  license: 'MIT',
  popularity: 1_200_000,
  versions: { range: '^1.180.0', min: '1.180.0' },
  packages: {
    deps: [{ name: 'posthog-js', version: '^1.180.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [
    {
      kind: 'envVar',
      key: 'NEXT_PUBLIC_POSTHOG_KEY',
      example: 'phc_...',
      required: true,
    },
    {
      kind: 'envVar',
      key: 'NEXT_PUBLIC_POSTHOG_HOST',
      example: 'https://us.i.posthog.com',
      required: false,
    },
  ],
  maintainers: ['posthog'],
  docs: { quickstart: 'https://posthog.com/docs/libraries/js' },
};
