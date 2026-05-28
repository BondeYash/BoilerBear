import type { ModuleManifest } from '@boilerbear/core';

export const litLocalize: ModuleManifest = {
  id: 'lit-localize',
  name: 'Lit Localize',
  category: 'misc',
  tags: ['i18n', 'localization', 'lit'],
  description: 'Localization for Lit using @lit/localize and tooling.',
  homepage: 'https://lit.dev/docs/localization/overview/',
  license: 'BSD-3-Clause',
  popularity: 40_000,
  versions: { range: '^0.12.2', min: '0.12.2' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@lit/localize', version: '^0.12.2' }],
    devDeps: [{ name: '@lit/localize-tools', version: '^0.8.0' }],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['lit'],
  setup: [],
  maintainers: ['lit'],
  docs: { quickstart: 'https://lit.dev/docs/localization/overview/' },
};
