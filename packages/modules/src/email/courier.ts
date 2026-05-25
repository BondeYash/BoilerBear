import type { ModuleManifest } from '@boilerbear/core';

export const courier: ModuleManifest = {
  id: 'courier',
  name: 'Courier',
  category: 'email',
  tags: ['email', 'multichannel', 'notifications'],
  description: 'Multichannel notification platform (email, SMS, push, chat).',
  homepage: 'https://www.courier.com',
  license: 'MIT',
  popularity: 40_000,
  versions: { range: '^6.2.0', min: '6.2.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@trycourier/courier', version: '^6.2.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [{ kind: 'envVar', key: 'COURIER_AUTH_TOKEN', example: 'pk_prod_xxx', required: true }],
  maintainers: ['trycourier'],
  docs: { quickstart: 'https://www.courier.com/docs/reference/courier-sdks/node/' },
};
