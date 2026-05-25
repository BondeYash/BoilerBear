import type { ModuleManifest } from '@boilerbear/core';

export const litestar: ModuleManifest = {
  id: 'litestar',
  name: 'Litestar',
  category: 'framework',
  tags: ['python', 'api', 'asgi'],
  description: 'Modern, type-driven Python ASGI framework (formerly Starlite).',
  homepage: 'https://litestar.dev',
  license: 'MIT',
  popularity: 5_000_000,
  languages: ['py'],
  versions: { range: '^2.12.0', min: '2.12.0' },
  packages: {
    deps: [{ name: 'litestar[standard]', version: '^2.12.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [{ id: 'pytest' }, { id: 'ruff' }],
  appliesTo: [],
  framework: {
    template: 'litestar-uv',
    createCommand: 'uv init {name}',
  },
  setup: [
    {
      kind: 'writeFile',
      path: 'app/main.py',
      content:
        'from litestar import Litestar, get\n\n\n@get("/")\ndef index() -> dict[str, str]:\n    return {"message": "Hello from BoilerBear"}\n\n\napp = Litestar([index])\n',
      ifMissing: false,
    },
  ],
  maintainers: [],
};
