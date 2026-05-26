import type { ModuleManifest } from '@boilerbear/core';

export const react: ModuleManifest = {
  id: 'react',
  name: 'React',
  category: 'framework',
  tags: ['react', 'spa', 'vite'],
  description: 'React UI library scaffolded via Vite + TypeScript.',
  homepage: 'https://react.dev',
  license: 'MIT',
  popularity: 25_000_000,
  versions: { range: '^18.3.0', min: '18.3.0' },
  languages: ['js'],
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [
    { id: 'tailwindcss', reason: 'Default styling pick for React projects.' },
    { id: 'vitest', reason: 'Test runner for Vite-powered React apps.' },
  ],
  appliesTo: [],
  framework: {
    template: 'react-ts',
    createCommand: '{pm} create vite@latest {name} -- --template react-ts',
  },
  setup: [],
  maintainers: ['facebook'],
  docs: { quickstart: 'https://react.dev/learn' },
};
