import type { ModuleManifest } from '@boilerbear/core';

export const ruff: ModuleManifest = {
  id: 'ruff',
  name: 'Ruff',
  category: 'lint',
  tags: ['python', 'lint', 'format'],
  description: 'Extremely fast Python linter + formatter written in Rust.',
  homepage: 'https://docs.astral.sh/ruff',
  license: 'MIT',
  popularity: 50_000_000,
  languages: ['py'],
  versions: { range: '^0.7.0', min: '0.7.0' },
  packages: {
    deps: [],
    devDeps: [{ name: 'ruff', version: '^0.7.0' }],
  },
  requires: [],
  conflicts: [{ id: 'black', severity: 'warning', reason: 'Ruff formats too; pick one.' }],
  recommends: [],
  appliesTo: ['fastapi', 'django', 'flask', 'litestar'],
  setup: [
    {
      kind: 'writeFile',
      path: 'ruff.toml',
      content:
        'line-length = 100\ntarget-version = "py312"\n\n[lint]\nselect = ["E", "F", "I", "B", "UP", "SIM"]\nignore = []\n',
      ifMissing: true,
    },
  ],
  maintainers: [],
};
