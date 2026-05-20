import type { ModuleManifest } from '@boilerbear/core';

export const next: ModuleManifest = {
  id: 'next',
  name: 'Next.js',
  category: 'framework',
  tags: ['react', 'ssr', 'ssg', 'app-router'],
  description: 'React framework with SSR, SSG, RSC, and the App Router.',
  homepage: 'https://nextjs.org',
  license: 'MIT',
  popularity: 8_000_000,
  versions: { range: '^15.0.0', min: '15.0.0' },
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [
    { id: 'tailwindcss', reason: 'Next ships with first-class Tailwind support.' },
    { id: 'tanstack-query', reason: 'Reasonable choice for client-side data alongside RSC.' },
  ],
  appliesTo: [],
  framework: {
    template: 'app-router-ts',
    createCommand:
      '{pm} create next-app@latest {name} --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-{pm}',
  },
  setup: [],
  maintainers: ['vercel'],
  docs: { quickstart: 'https://nextjs.org/docs/app/getting-started/installation' },
};
