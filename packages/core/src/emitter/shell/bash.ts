import { heredocBody, shellSingleQuote } from '../escape.js';
import type { ShellDialect } from './index.js';

function parentDir(path: string): string {
  const idx = path.lastIndexOf('/');
  return idx === -1 ? '.' : path.slice(0, idx) || '.';
}

export const bashDialect: ShellDialect = {
  id: 'bash',
  preamble: 'set -euo pipefail',
  quote: shellSingleQuote,
  cd: (path) => `cd ${shellSingleQuote(path)}`,
  mkdirP: (path) => `mkdir -p ${shellSingleQuote(path)}`,
  writeFile: (path, content, ifMissing) => {
    const body = heredocBody(content);
    const guard = ifMissing ? `[ -f ${shellSingleQuote(path)} ] || ` : '';
    return [
      `mkdir -p ${shellSingleQuote(parentDir(path))}`,
      `${guard}cat > ${shellSingleQuote(path)} <<'BB_EOF'\n${body}BB_EOF`,
    ];
  },
  appendEnvLine: (path, line) => `printf '%s\\n' ${shellSingleQuote(line)} >> ${path}`,
  nodeEval: (jsCode) => `node -e ${shellSingleQuote(jsCode)}`,
  wrapAsOneLiner: (script) => `bash -c ${shellSingleQuote(script)}`,
};
