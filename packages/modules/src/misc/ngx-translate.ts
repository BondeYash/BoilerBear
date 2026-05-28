import type { ModuleManifest } from '@boilerbear/core';

export const ngxTranslate: ModuleManifest = {
  id: 'ngx-translate',
  name: 'ngx-translate',
  category: 'misc',
  tags: ['i18n', 'translation', 'angular'],
  description: 'Internationalization (i18n) library for Angular with runtime translation loading.',
  homepage: 'https://github.com/ngx-translate/core',
  license: 'MIT',
  popularity: 600_000,
  versions: { range: '^15.0.0', min: '15.0.0' },
  languages: ['js'],
  packages: {
    deps: [
      { name: '@ngx-translate/core', version: '^15.0.0' },
      { name: '@ngx-translate/http-loader', version: '^8.0.0' },
    ],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['angular'],
  setup: [],
  maintainers: ['ngx-translate'],
  docs: { quickstart: 'https://github.com/ngx-translate/core#readme' },
};
