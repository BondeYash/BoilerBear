'use client';

import { getRegistry } from '@/lib/registry';
import { useBuilder } from '@/lib/store/builder';
import { detectConflicts, sortModules } from '@boilerbear/core';
import { Badge } from '@boilerbear/ui/components/badge';
import * as React from 'react';
import { ConflictBanner } from './conflict-banner';

export function ReviewStep(): React.JSX.Element {
  const plan = useBuilder((s) => s.plan);
  const registry = React.useMemo(() => getRegistry(), []);

  const conflicts = React.useMemo(() => detectConflicts(plan, registry), [plan, registry]);

  const ordered = React.useMemo(() => {
    if (conflicts.hasErrors) return null;
    try {
      return sortModules(plan, registry);
    } catch {
      return null;
    }
  }, [plan, registry, conflicts.hasErrors]);

  const totalDeps = React.useMemo(() => {
    if (!ordered) return 0;
    const seen = new Set<string>();
    for (const m of ordered.slice(1)) {
      for (const d of m.packages.deps) seen.add(d.name);
      for (const d of m.packages.devDeps) seen.add(d.name);
    }
    return seen.size;
  }, [ordered]);

  return (
    <div className="grid gap-4">
      <div>
        <h2 className="text-lg font-semibold">Review plan</h2>
        <p className="text-sm text-muted-foreground">Resolved module order and warnings.</p>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <Stat label="Project" value={plan.projectName} />
        <Stat label="Framework" value={plan.base} />
        <Stat label="Package manager" value={plan.packageManager} />
        <Stat label="Modules selected" value={String(plan.modules.length)} />
        <Stat label="Unique packages" value={String(totalDeps)} />
        <Stat label="Warnings" value={String(conflicts.warnings.length)} />
      </div>

      <ConflictBanner warnings={conflicts.warnings} />

      {ordered && (
        <div className="rounded-md border p-3">
          <div className="mb-2 text-sm font-medium">Install order</div>
          <ol className="grid gap-1.5">
            {ordered.map((m, i) => (
              <li key={m.id} className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">{i + 1}.</span>
                <span className="font-mono">{m.id}</span>
                <Badge variant="outline" className="text-[10px]">
                  {m.category}
                </Badge>
                <span className="truncate text-xs text-muted-foreground">{m.name}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {!ordered && conflicts.hasErrors && (
        <p className="rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive">
          Resolve the errors above before generating the install command.
        </p>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }): React.JSX.Element {
  return (
    <div className="rounded-md border p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 font-mono text-sm">{value}</div>
    </div>
  );
}
