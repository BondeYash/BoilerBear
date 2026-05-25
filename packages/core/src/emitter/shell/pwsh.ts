import { pwshDoubleQuoteCommandArg, pwshHereString, pwshSingleQuote } from '../escape.js';
import type { ShellDialect } from './index.js';

function parentDir(path: string): string {
  const idx = path.lastIndexOf('/');
  return idx === -1 ? '.' : path.slice(0, idx) || '.';
}

export const pwshDialect: ShellDialect = {
  id: 'pwsh',
  preamble: "$ErrorActionPreference='Stop'",
  quote: pwshSingleQuote,
  cd: (path) => `Set-Location -LiteralPath ${pwshSingleQuote(path)}`,
  mkdirP: (path) => `New-Item -ItemType Directory -Force -Path ${pwshSingleQuote(path)} | Out-Null`,
  writeFile: (path, content, ifMissing) => {
    const here = pwshHereString(content);
    const write = `${here} | Set-Content -LiteralPath ${pwshSingleQuote(path)} -NoNewline:$false`;
    const mkdir = `New-Item -ItemType Directory -Force -Path ${pwshSingleQuote(parentDir(path))} | Out-Null`;
    if (!ifMissing) return [mkdir, write];
    return [mkdir, `if (-not (Test-Path -LiteralPath ${pwshSingleQuote(path)})) {\n${write}\n}`];
  },
  appendEnvLine: (path, line) =>
    `Add-Content -LiteralPath ${pwshSingleQuote(path)} -Value ${pwshSingleQuote(line)}`,
  nodeEval: (jsCode) => `node -e ${pwshSingleQuote(jsCode)}`,
  wrapAsOneLiner: (script) => `pwsh -NoProfile -Command "${pwshDoubleQuoteCommandArg(script)}"`,
};
