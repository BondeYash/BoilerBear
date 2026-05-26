import type { ModuleManifest } from '@boilerbear/core';

export const stripeJs: ModuleManifest = {
  id: 'stripe-js',
  name: 'Stripe.js',
  category: 'payments',
  tags: ['payments', 'billing', 'browser'],
  description: 'Stripe browser SDK for Elements, Checkout, and Payment Intents.',
  homepage: 'https://stripe.com/docs/js',
  license: 'MIT',
  popularity: 11_000_000,
  versions: { range: '^4.10.0', min: '4.10.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: '@stripe/stripe-js', version: '^4.10.0' },
      { name: '@stripe/react-stripe-js', version: '^3.0.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [
    'react',
    'next',
    'vue',
    'svelte',
    'solid',
    'qwik',
    'preact',
    'lit',
    'alpine',
    'htmx',
    'mithril',
    'stencil',
  ],
  setup: [
    {
      kind: 'envVar',
      key: 'VITE_STRIPE_PUBLISHABLE_KEY',
      example: 'pk_test_...',
      required: true,
    },
  ],
  maintainers: ['stripe'],
  docs: { quickstart: 'https://stripe.com/docs/stripe-js' },
};
