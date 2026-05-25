import type { Shell } from '@boilerbear/core';
import * as React from 'react';

/**
 * Browser-side default for the Command sub-tab. Phase-1 heuristic: Windows UA → pwsh,
 * everything else → bash. SSR-safe (returns 'bash' on the server first paint, then
 * upgrades after hydration if needed). See ADR 0005 for why we keep this dumb.
 */
export function useShellDefault(): Shell {
  const [shell, setShell] = React.useState<Shell>('bash');
  React.useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.userAgent.includes('Windows')) {
      setShell('pwsh');
    }
  }, []);
  return shell;
}
