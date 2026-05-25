import type { Recipe } from './types.js';

export const djangoStarter: Recipe = {
  id: 'django-starter',
  name: 'Django Starter (uv + Ruff + pytest)',
  description: 'Django 5 on uv with Ruff and pytest pre-configured.',
  tags: ['python', 'django', 'uv'],
  template: {
    v: 1,
    language: 'py',
    packageManager: 'uv',
    base: 'django',
    modules: ['ruff', 'pytest'],
    options: {},
  },
};
