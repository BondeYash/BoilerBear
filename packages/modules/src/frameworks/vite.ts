import type { ModuleManifest } from '@boilerbear/core';

export const vite: ModuleManifest = {
  id: 'vite',
  name: 'Vite',
  category: 'framework',
  tags: ['bundler', 'react', 'spa'],
  description: 'Fast dev server and bundler with React + TypeScript template.',
  homepage: 'https://vitejs.dev',
  license: 'MIT',
  popularity: 16_000_000,
  versions: { range: '^5.4.0', min: '5.4.0' },
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [
    { id: 'tailwindcss', reason: 'Pair Vite with utility-first CSS.' },
    { id: 'vitest', reason: 'Vitest is the natural test runner for a Vite project.' },
  ],
  appliesTo: [],
  framework: {
    template: 'react-ts',
    createCommand: '{pm} create vite@latest {name} -- --template react-ts',
  },
  setup: [],
  maintainers: ['vite'],
  docs: { quickstart: 'https://vitejs.dev/guide/' },
};
