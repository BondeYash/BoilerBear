import type { ModuleManifest } from '../src/schema/module.js';

export const fixtureVite: ModuleManifest = {
  id: 'vite',
  name: 'Vite',
  category: 'framework',
  tags: ['bundler'],
  description: 'Fast dev server and bundler.',
  homepage: 'https://vitejs.dev',
  license: 'MIT',
  versions: { range: '^5.0.0', min: '5.0.0' },
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'react-ts',
    createCommand: '{pm} create vite@latest {name} -- --template react-ts',
  },
  setup: [],
  maintainers: [],
};

export const fixtureNext: ModuleManifest = {
  id: 'next',
  name: 'Next.js',
  category: 'framework',
  tags: ['react', 'ssr'],
  description: 'React framework with SSR / SSG.',
  homepage: 'https://nextjs.org',
  license: 'MIT',
  versions: { range: '^15.0.0', min: '15.0.0' },
  packages: { deps: [], devDeps: [] },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  framework: {
    template: 'app',
    createCommand: '{pm} create next-app@latest {name} --ts --tailwind --eslint --app',
  },
  setup: [],
  maintainers: [],
};

export const fixtureTailwind: ModuleManifest = {
  id: 'tailwindcss',
  name: 'Tailwind CSS',
  category: 'styling',
  tags: ['css'],
  description: 'Utility-first CSS framework.',
  homepage: 'https://tailwindcss.com',
  license: 'MIT',
  versions: { range: '^3.4.0', min: '3.4.0' },
  packages: {
    deps: [],
    devDeps: [
      { name: 'tailwindcss', version: '^3.4.0' },
      { name: 'postcss', version: '^8.4.0' },
      { name: 'autoprefixer', version: '^10.4.0' },
    ],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'shadcn-ui' }],
  appliesTo: ['vite', 'next'],
  setup: [
    {
      kind: 'writeFile',
      path: 'postcss.config.cjs',
      content: 'module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };',
      ifMissing: false,
    },
  ],
  maintainers: [],
};

export const fixtureShadcn: ModuleManifest = {
  id: 'shadcn-ui',
  name: 'shadcn/ui',
  category: 'components',
  tags: ['ui', 'react'],
  description: 'Copy-paste UI primitives on top of Tailwind + Radix.',
  homepage: 'https://ui.shadcn.com',
  license: 'MIT',
  versions: { range: '^0.8.0', min: '0.8.0' },
  packages: { deps: [], devDeps: [] },
  requires: [{ id: 'tailwindcss' }],
  conflicts: [{ id: 'mui', severity: 'warning', reason: 'shadcn/ui and MUI overlap; pick one.' }],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [],
  maintainers: [],
};

export const fixtureMui: ModuleManifest = {
  id: 'mui',
  name: 'Material UI',
  category: 'components',
  tags: ['ui', 'react', 'material'],
  description: 'React components implementing Material Design.',
  homepage: 'https://mui.com',
  license: 'MIT',
  versions: { range: '^6.0.0', min: '6.0.0' },
  packages: {
    deps: [
      { name: '@mui/material', version: '^6.0.0' },
      { name: '@emotion/react', version: '^11.0.0' },
      { name: '@emotion/styled', version: '^11.0.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [{ id: 'shadcn-ui', severity: 'warning' }],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [],
  maintainers: [],
};

export const fixtureZustand: ModuleManifest = {
  id: 'zustand',
  name: 'Zustand',
  category: 'state',
  tags: ['state'],
  description: 'Small, fast state management.',
  homepage: 'https://zustand-demo.pmnd.rs',
  license: 'MIT',
  versions: { range: '^5.0.0', min: '5.0.0' },
  packages: {
    deps: [{ name: 'zustand', version: '^5.0.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [],
  maintainers: [],
};

export const allFixtures: ModuleManifest[] = [
  fixtureVite,
  fixtureNext,
  fixtureTailwind,
  fixtureShadcn,
  fixtureMui,
  fixtureZustand,
];
