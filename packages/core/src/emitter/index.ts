export { emitCommand, EmitterError } from './command.js';
export type { EmitCommandResult, EmitCommandOptions } from './command.js';
export { getPm, renderCreateCommand } from './pm.js';
export type { PmCommands } from './pm.js';
export {
  shellSingleQuote,
  heredocBody,
  pwshSingleQuote,
  pwshHereString,
  pwshDoubleQuoteCommandArg,
} from './escape.js';
export { getShell, bashDialect, pwshDialect } from './shell/index.js';
export type { ShellDialect } from './shell/index.js';
