import type { ModuleManifest } from '@boilerbear/core';

export const svelteI18n: ModuleManifest = {
  id: 'svelte-i18n',
  name: 'svelte-i18n',
  category: 'i18n',
  tags: ['i18n', 'localization', 'svelte'],
  description: 'Internationalization library for Svelte with Format.JS message syntax.',
  homepage: 'https://github.com/kaisermann/svelte-i18n',
  license: 'MIT',
  popularity: 120_000,
  versions: { range: '^4.0.1', min: '4.0.1' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'svelte-i18n', version: '^4.0.1' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['svelte'],
  setup: [],
  maintainers: ['kaisermann'],
  docs: {
    quickstart: 'https://github.com/kaisermann/svelte-i18n/blob/main/docs/Getting%20Started.md',
  },
};
