import type { ModuleManifest } from '@boilerbear/core';

export const angularOpenai: ModuleManifest = {
  id: 'angular-openai',
  name: 'OpenAI for Angular',
  category: 'ai',
  tags: ['ai', 'llm', 'openai', 'angular'],
  description: 'Official OpenAI Node SDK usable directly from Angular services for AI features.',
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
  appliesTo: ['angular'],
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
