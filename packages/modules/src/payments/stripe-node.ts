import type { ModuleManifest } from '@boilerbear/core';

export const stripeNode: ModuleManifest = {
  id: 'stripe-node',
  name: 'Stripe Node.js',
  category: 'payments',
  tags: ['payments', 'billing', 'server'],
  description: 'Official Stripe server SDK for Node.js with full API coverage.',
  homepage: 'https://docs.stripe.com/api?lang=node',
  license: 'MIT',
  popularity: 8_500_000,
  versions: { range: '^17.4.0', min: '17.4.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'stripe', version: '^17.4.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['next', 'nuxt', 'remix', 'sveltekit', 'solid-start', 'marko'],
  setup: [
    {
      kind: 'envVar',
      key: 'STRIPE_SECRET_KEY',
      example: 'sk_test_...',
      required: true,
    },
  ],
  maintainers: ['stripe'],
  docs: { quickstart: 'https://docs.stripe.com/api?lang=node' },
};
