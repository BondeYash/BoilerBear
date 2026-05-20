import { nextSaasStarter } from './next-saas-starter.js';
import type { Recipe } from './types.js';
import { viteClassic } from './vite-classic.js';

export const allRecipes: ReadonlyArray<Recipe> = [viteClassic, nextSaasStarter];

export { viteClassic, nextSaasStarter };
export type { Recipe } from './types.js';
