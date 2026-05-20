'use client';

import type { PlanWarning } from '@boilerbear/core';
import { cn } from '@boilerbear/ui/lib/cn';
import { AlertCircle, Info, TriangleAlert } from 'lucide-react';
import type * as React from 'react';

export function ConflictBanner({
  warnings,
}: {
  warnings: ReadonlyArray<PlanWarning>;
}): React.JSX.Element | null {
  if (warnings.length === 0) return null;
  return (
    <ul className="grid gap-2">
      {warnings.map((w, i) => {
        const styles = severityStyle(w.severity);
        const Icon = styles.icon;
        return (
          <li
            key={`${w.code}-${w.moduleId ?? ''}-${i}`}
            className={cn('flex items-start gap-2 rounded-md border px-3 py-2 text-sm', styles.cls)}
          >
            <Icon className="mt-0.5 h-4 w-4 shrink-0" />
            <div>
              <div className="font-medium">
                <span className="font-mono text-xs">[{w.code}]</span>{' '}
                {w.moduleId && <span className="font-mono text-xs">{w.moduleId}</span>}
              </div>
              <div className="text-muted-foreground">{w.message}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function severityStyle(severity: PlanWarning['severity']): {
  cls: string;
  icon: React.ElementType;
} {
  if (severity === 'error') {
    return {
      cls: 'border-destructive/40 bg-destructive/5 text-destructive',
      icon: AlertCircle,
    };
  }
  if (severity === 'warning') {
    return {
      cls: 'border-yellow-500/40 bg-yellow-500/5 text-yellow-700 dark:text-yellow-400',
      icon: TriangleAlert,
    };
  }
  return {
    cls: 'border-blue-500/40 bg-blue-500/5 text-blue-700 dark:text-blue-400',
    icon: Info,
  };
}
