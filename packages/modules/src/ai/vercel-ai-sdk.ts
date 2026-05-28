import type { ModuleManifest } from '@boilerbear/core';

export const vercelAiSdk: ModuleManifest = {
  id: 'vercel-ai-sdk',
  name: 'Vercel AI SDK',
  category: 'ai',
  tags: ['ai', 'llm', 'streaming'],
  description: 'TypeScript toolkit for building AI-powered apps with streaming UIs.',
  homepage: 'https://sdk.vercel.ai',
  license: 'Apache-2.0',
  popularity: 1_800_000,
  versions: { range: '^4.0.0', min: '4.0.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: 'ai', version: '^4.0.0' },
      { name: '@ai-sdk/openai', version: '^1.0.0' },
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
    'nuxt',
    'svelte',
    'sveltekit',
    'solid',
    'solid-start',
    'astro',
    'remix',
    'qwik',
    'preact',
  ],
  setup: [
    {
      kind: 'envVar',
      key: 'OPENAI_API_KEY',
      example: 'sk-...',
      required: true,
    },
  ],
  maintainers: ['vercel'],
  docs: { quickstart: 'https://sdk.vercel.ai/docs/getting-started' },
};
