'use client';

import { getRegistry } from '@/lib/registry';
import { useBuilder } from '@/lib/store/builder';
import { cn } from '@boilerbear/ui/lib/cn';
import { Boxes } from 'lucide-react';
import * as React from 'react';

export function FrameworkStep(): React.JSX.Element {
  const base = useBuilder((s) => s.plan.base);
  const setBase = useBuilder((s) => s.setBase);
  const frameworks = React.useMemo(() => getRegistry().frameworks(), []);

  return (
    <div className="grid gap-4">
      <div>
        <h2 className="text-lg font-semibold">Pick a base framework</h2>
        <p className="text-sm text-muted-foreground">
          Other tooling will be filtered by what this framework supports.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {frameworks.map((f) => {
          const selected = f.id === base;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setBase(f.id)}
              className={cn(
                'group flex flex-col gap-2 rounded-lg border p-4 text-left transition-colors',
                selected
                  ? 'border-primary bg-primary/5 ring-1 ring-primary/40'
                  : 'border-border hover:bg-accent',
              )}
              aria-pressed={selected}
            >
              <div className="flex items-center gap-2">
                <Boxes className="h-5 w-5 text-primary" />
                <span className="text-base font-semibold">{f.name}</span>
              </div>
              <p className="text-sm text-muted-foreground">{f.description}</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {f.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
