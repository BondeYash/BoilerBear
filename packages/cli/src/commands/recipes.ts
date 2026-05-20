import { allRecipes } from '@boilerbear/modules';
import pc from 'picocolors';
import { log } from '../ui.js';

export async function recipesCommand(): Promise<number> {
  log.banner('recipes');
  if (allRecipes.length === 0) {
    log.dim('No recipes registered.');
    return 0;
  }
  for (const recipe of allRecipes) {
    log.raw(`${pc.bold(pc.cyan(recipe.id))}  ${pc.dim(recipe.template.base)}`);
    log.raw(`  ${recipe.name}`);
    log.raw(`  ${pc.dim(recipe.description)}`);
    log.raw(`  ${pc.dim('modules:')} ${recipe.template.modules.join(', ')}`);
    log.raw('');
  }
  log.dim('Run one with:  boilerbear run --recipe <id> --name my-app');
  return 0;
}
