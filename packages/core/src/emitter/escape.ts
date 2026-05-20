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
