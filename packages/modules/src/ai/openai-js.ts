import type { ModuleManifest } from '@boilerbear/core';

export const openaiJs: ModuleManifest = {
  id: 'openai-js',
  name: 'OpenAI Node SDK',
  category: 'ai',
  tags: ['ai', 'llm', 'openai'],
  description: 'Official OpenAI JavaScript/TypeScript SDK for the OpenAI REST API.',
  homepage: 'https://github.com/openai/openai-node',
  license: 'Apache-2.0',
  popularity: 5_000_000,
  versions: { range: '^4.73.0', min: '4.73.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'openai', version: '^4.73.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['lit', 'alpine', 'htmx', 'ember', 'mithril', 'stencil', 'marko', 'angular'],
  setup: [
    {
      kind: 'envVar',
      key: 'OPENAI_API_KEY',
      example: 'sk-...',
      required: true,
    },
  ],
  maintainers: ['openai'],
  docs: { quickstart: 'https://github.com/openai/openai-node#readme' },
};
