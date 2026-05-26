import { djangoStarter } from './django-starter.js';
import { fastapiStarter } from './fastapi-starter.js';
import { nextSaasStarter } from './next-saas-starter.js';
import { reactViteStarter } from './react-vite-starter.js';
import type { Recipe } from './types.js';
import { viteClassic } from './vite-classic.js';

export const allRecipes: ReadonlyArray<Recipe> = [
  viteClassic,
  nextSaasStarter,
  fastapiStarter,
  djangoStarter,
  reactViteStarter,
];

export { viteClassic, nextSaasStarter, fastapiStarter, djangoStarter, reactViteStarter };
export type { Recipe } from './types.js';
