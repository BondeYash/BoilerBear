import type { Shell } from '../../schema/refs.js';
import { bashDialect } from './bash.js';
import { pwshDialect } from './pwsh.js';

export interface ShellDialect {
  readonly id: Shell;
  readonly preamble: string;
  quote(value: string): string;
  cd(path: string): string;
  mkdirP(path: string): string;
  writeFile(path: string, content: string, ifMissing: boolean): string[];
  appendEnvLine(path: string, line: string): string;
  nodeEval(jsCode: string): string;
  wrapAsOneLiner(script: string): string;
}

export function getShell(id: Shell): ShellDialect {
  return id === 'pwsh' ? pwshDialect : bashDialect;
}

export { bashDialect } from './bash.js';
export { pwshDialect } from './pwsh.js';
