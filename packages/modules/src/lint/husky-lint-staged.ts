import type { ModuleManifest } from '@boilerbear/core';

export const huskyLintStaged: ModuleManifest = {
  id: 'husky-lint-staged',
  name: 'Husky + lint-staged',
  category: 'lint',
  tags: ['git-hooks', 'pre-commit'],
  description: 'Run linters and formatters on staged files via a Git pre-commit hook.',
  homepage: 'https://typicode.github.io/husky/',
  license: 'MIT',
  popularity: 9_000_000,
  versions: { range: '^9.1.0', min: '9.1.0' },
  languages: ['js'],
  packages: {
    deps: [],
    devDeps: [
      { name: 'husky', version: '^9.1.0' },
      { name: 'lint-staged', version: '^15.2.0' },
    ],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: ['vite', 'next'],
  setup: [
    {
      kind: 'appendScript',
      name: 'prepare',
      script: 'husky',
    },
    {
      kind: 'shell',
      command:
        'mkdir -p .husky && echo "{pm} exec lint-staged" > .husky/pre-commit && chmod +x .husky/pre-commit',
      when: 'postInstall',
    },
  ],
  maintainers: ['typicode'],
  docs: { quickstart: 'https://typicode.github.io/husky/get-started.html' },
};
