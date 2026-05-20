import cac from 'cac';
import { recipesCommand } from './commands/recipes.js';
import { runCommand } from './commands/run.js';

const VERSION = '0.0.0';

interface RunFlags {
  recipe?: string;
  plan?: string;
  name?: string;
  pm?: string;
  cwd?: string;
  dryRun?: boolean;
  'dry-run'?: boolean;
  yes?: boolean;
}

export async function main(argv: ReadonlyArray<string>): Promise<number> {
  const cli = cac('boilerbear');

  cli
    .command('run [hash]', 'Scaffold a project from a share hash, recipe, or local plan file.')
    .option('--recipe <id>', 'Use a built-in recipe instead of a share hash.')
    .option('--plan <path>', 'Read a plan from a local JSON file.')
    .option('--name <name>', 'Override the project name.')
    .option('--pm <pm>', 'Package manager: pnpm | npm | yarn | bun.')
    .option('--cwd <dir>', 'Directory to scaffold into (default: cwd).')
    .option('--dry-run', 'Print the plan and script without executing.')
    .option('--yes, -y', 'Skip the confirmation prompt.')
    .example('  boilerbear run --recipe vite-classic --name my-app --dry-run')
    .example('  boilerbear run <hash> --pm pnpm')
    .example('  boilerbear run --plan ./my-plan.json --yes')
    .action(async (hash: string | undefined, flags: RunFlags) => {
      const code = await runCommand({
        hash,
        recipe: flags.recipe,
        planPath: flags.plan,
        name: flags.name,
        pm: flags.pm as never,
        cwd: flags.cwd,
        dryRun: flags['dry-run'] ?? flags.dryRun,
        yes: flags.yes,
      });
      process.exit(code);
    });

  cli.command('recipes', 'List built-in recipes.').action(async () => {
    const code = await recipesCommand();
    process.exit(code);
  });

  cli.help();
  cli.version(VERSION);

  try {
    cli.parse(['node', 'boilerbear', ...argv], { run: false });
    if (!cli.matchedCommand) {
      cli.outputHelp();
      return 0;
    }
    await cli.runMatchedCommand();
    return 0;
  } catch (err) {
    console.error(err instanceof Error ? err.message : String(err));
    return 1;
  }
}

main(process.argv.slice(2)).then(
  (code) => {
    if (code !== 0) process.exit(code);
  },
  (err) => {
    console.error(err);
    process.exit(1);
  },
);
