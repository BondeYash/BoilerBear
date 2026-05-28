import type { ModuleManifest } from '@boilerbear/core';

export const nuxtContent: ModuleManifest = {
  id: 'nuxt-content',
  name: 'Nuxt Content',
  category: 'misc',
  tags: ['cms', 'markdown', 'nuxt'],
  description: 'File-based CMS for Nuxt with Markdown, YAML, JSON, and MDC support.',
  homepage: 'https://content.nuxt.com',
  license: 'MIT',
  popularity: 800_000,
  versions: { range: '^2.13.4', min: '2.13.4' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@nuxt/content', version: '^2.13.4' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['nuxt'],
  setup: [],
  maintainers: ['nuxt'],
  docs: { quickstart: 'https://content.nuxt.com/get-started/installation' },
};
