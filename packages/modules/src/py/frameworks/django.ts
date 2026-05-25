import type { ModuleManifest } from '@boilerbear/core';

export const django: ModuleManifest = {
  id: 'django',
  name: 'Django',
  category: 'framework',
  tags: ['python', 'web', 'orm'],
  description: 'Batteries-included Python web framework with ORM, admin, auth, and migrations.',
  homepage: 'https://www.djangoproject.com',
  license: 'BSD-3-Clause',
  popularity: 12_000_000,
  languages: ['py'],
  versions: { range: '^5.1.0', min: '5.1.0' },
  packages: {
    deps: [{ name: 'django', version: '^5.1.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'pytest' }, { id: 'ruff' }],
  appliesTo: [],
  framework: {
    template: 'django-uv',
    createCommand: 'uv init {name}',
  },
  setup: [
    {
      kind: 'shell',
      command: 'uv run django-admin startproject app .',
      pwshCommand: 'uv run django-admin startproject app .',
      when: 'postInstall',
    },
  ],
  maintainers: [],
};
