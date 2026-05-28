import type { Recipe } from './types.js';

export const astroStarter: Recipe = {
  id: 'astro-starter',
  name: 'Astro Starter',
  description: 'Astro + Tailwind + Nanostores + Astro DB + Vercel adapter + SEO + Vitest.',
  tags: ['astro', 'content', 'ssr', 'tailwind'],
  template: {
    v: 1,
    language: 'js',
    packageManager: 'pnpm',
    base: 'astro',
    modules: ['tailwindcss', 'nanostores', 'astro-db', 'astro-vercel', 'astro-seo', 'vitest'],
    options: {},
  },
};
