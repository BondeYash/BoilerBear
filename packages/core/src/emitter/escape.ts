/**
 * Quote a value safely for inclusion inside single-quoted POSIX shell strings.
 * Replaces every embedded single quote with `'\''` (close, escape, reopen).
 */
export function shellSingleQuote(value: string): string {
  return `'${value.replace(/'/g, `'\\''`)}'`;
}

/** Escape arbitrary content for inclusion in a `cat > file <<'BB_EOF' ... BB_EOF` heredoc. */
export function heredocBody(content: string, marker = 'BB_EOF'): string {
  if (content.includes(marker)) {
    throw new Error(`Heredoc marker collision: content contains "${marker}".`);
  }
  return content.endsWith('\n') ? content : `${content}\n`;
}

/**
 * Quote a value safely for inclusion inside single-quoted PowerShell strings.
 * In pwsh, single-quoted strings are literal; the only escape is `''` for an embedded `'`.
 */
export function pwshSingleQuote(value: string): string {
  return `'${value.replace(/'/g, "''")}'`;
}

/**
 * Wrap arbitrary content in a single-quoted here-string `@'\n...\n'@` for PowerShell.
 * Single-quoted here-strings do not expand `$variable` — content is fully literal.
 * Rejects content whose own line consists of `'@` because that would terminate the
 * here-string mid-content and produce a parse error or silent corruption.
 */
export function pwshHereString(content: string): string {
  const body = content.endsWith('\n') ? content : `${content}\n`;
  if (/^'@\s*$/m.test(body)) {
    throw new Error('pwsh here-string collision: content contains "\'@" on its own line.');
  }
  return `@'\n${body}'@`;
}

/**
 * Escape a script for inclusion inside a pwsh double-quoted string consumed by
 * the outer shell that invokes `pwsh -NoProfile -Command "..."`. Inside pwsh
 * dbl-quoted: `` ` `` is the escape char; `"`, `$`, and `` ` `` are special.
 * Order matters — backtick first, then introduced backticks pass through.
 */
export function pwshDoubleQuoteCommandArg(script: string): string {
  return script.replace(/`/g, '``').replace(/"/g, '`"').replace(/\$/g, '`$');
}
