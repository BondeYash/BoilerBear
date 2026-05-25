import type { ModuleManifest } from '@boilerbear/core';

export const pytest: ModuleManifest = {
  id: 'pytest',
  name: 'pytest',
  category: 'testing',
  tags: ['python', 'test'],
  description: 'De-facto Python testing framework with fixtures, parametrization, and plugins.',
  homepage: 'https://docs.pytest.org',
  license: 'MIT',
  popularity: 200_000_000,
  languages: ['py'],
  versions: { range: '^8.3.0', min: '8.3.0' },
  packages: {
    deps: [],
    devDeps: [
      { name: 'pytest', version: '^8.3.0' },
      { name: 'pytest-asyncio', version: '^0.24.0' },
    ],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['fastapi', 'django', 'flask', 'litestar'],
  setup: [
    { kind: 'writeFile', path: 'tests/__init__.py', content: '', ifMissing: true },
    {
      kind: 'writeFile',
      path: 'tests/test_smoke.py',
      content: 'def test_smoke():\n    assert True\n',
      ifMissing: true,
    },
    {
      kind: 'writeFile',
      path: 'pytest.ini',
      content:
        '[pytest]\ntestpaths = tests\nasyncio_mode = auto\nfilterwarnings =\n    ignore::DeprecationWarning\n',
      ifMissing: true,
    },
  ],
  maintainers: [],
};
