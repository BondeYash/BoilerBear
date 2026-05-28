import type { ModuleManifest } from '@boilerbear/core';

export const tailwindcss: ModuleManifest = {
  id: 'tailwindcss',
  name: 'Tailwind CSS',
  category: 'styling',
  tags: ['css', 'utility-first'],
  description: 'Utility-first CSS framework with JIT engine.',
  homepage: 'https://tailwindcss.com',
  license: 'MIT',
  popularity: 22_000_000,
  versions: { range: '^3.4.0', min: '3.4.0' },
  languages: ['js'],
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
  recommends: [{ id: 'shadcn-ui', reason: 'shadcn/ui is built directly on Tailwind.' }],
  appliesTo: [
    'vite',
    'next',
    'react',
    'vue',
    'svelte',
    'sveltekit',
    'solid',
    'solid-start',
    'qwik',
    'astro',
    'remix',
    'preact',
    'alpine',
    'htmx',
    'mithril',
    'stencil',
    'marko',
  ],
  options: {
    plugins: {
      type: 'multiselect',
      label: 'Tailwind plugins',
      description: 'Optional first-party plugins to enable.',
      choices: [
        { value: 'forms', label: '@tailwindcss/forms' },
        { value: 'typography', label: '@tailwindcss/typography' },
        { value: 'aspect-ratio', label: '@tailwindcss/aspect-ratio' },
      ],
      default: [],
    },
  },
  setup: [
    {
      kind: 'writeFile',
      path: 'postcss.config.cjs',
      content: `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`,
      ifMissing: false,
    },
    {
      kind: 'writeFile',
      path: 'tailwind.config.cjs',
      content: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
`,
      ifMissing: false,
    },
    {
      kind: 'writeFile',
      path: 'src/index.css',
      content: `@tailwind base;
@tailwind components;
@tailwind utilities;
`,
      ifMissing: false,
    },
  ],
  maintainers: ['tailwindlabs'],
  docs: { quickstart: 'https://tailwindcss.com/docs/installation' },
};
