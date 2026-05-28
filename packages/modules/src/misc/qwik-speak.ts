import type { ModuleManifest } from '@boilerbear/core';

export const qwikSpeak: ModuleManifest = {
  id: 'qwik-speak',
  name: 'Qwik Speak',
  category: 'i18n',
  tags: ['i18n', 'l10n', 'qwik'],
  description: 'Internationalization library for Qwik with lazy-loaded translations.',
  homepage: 'https://github.com/robisim74/qwik-speak',
  license: 'MIT',
  popularity: 30_000,
  versions: { range: '^0.21.0', min: '0.21.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: 'qwik-speak', version: '^0.21.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['qwik'],
  setup: [],
  maintainers: ['robisim74'],
  docs: { quickstart: 'https://github.com/robisim74/qwik-speak' },
};
