'use client';

import { useBuilder } from '@/lib/store/builder';
import type { PackageManager } from '@boilerbear/core';
import { Input } from '@boilerbear/ui/components/input';
import { Label } from '@boilerbear/ui/components/label';
import { cn } from '@boilerbear/ui/lib/cn';
import type * as React from 'react';

const PMS: ReadonlyArray<{ id: PackageManager; label: string; description: string }> = [
  { id: 'pnpm', label: 'pnpm', description: 'Fast, disk-efficient' },
  { id: 'npm', label: 'npm', description: 'Default Node package manager' },
  { id: 'yarn', label: 'yarn', description: 'Berry / classic compatible' },
  { id: 'bun', label: 'bun', description: 'Bun runtime + installer' },
];

const NAME_PATTERN = /^(?!\.)(?!-)[a-z0-9._~-]+$/;

export function BasicsStep(): React.JSX.Element {
  const projectName = useBuilder((s) => s.plan.projectName);
  const pm = useBuilder((s) => s.plan.packageManager);
  const setProjectName = useBuilder((s) => s.setProjectName);
  const setPM = useBuilder((s) => s.setPM);

  const isValidName = NAME_PATTERN.test(projectName);

  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <Label htmlFor="projectName">Project name</Label>
        <Input
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="my-app"
          autoComplete="off"
          spellCheck={false}
          aria-invalid={!isValidName || undefined}
        />
        <p className={cn('text-xs', isValidName ? 'text-muted-foreground' : 'text-destructive')}>
          Lowercase, a-z 0-9 . _ ~ -, must not start with . or -.
        </p>
      </div>

      <div className="grid gap-2">
        <Label>Package manager</Label>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {PMS.map((opt) => {
            const selected = opt.id === pm;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setPM(opt.id)}
                className={cn(
                  'rounded-md border p-3 text-left transition-colors',
                  selected
                    ? 'border-primary bg-primary/5 ring-1 ring-primary/40'
                    : 'border-border hover:bg-accent',
                )}
                aria-pressed={selected}
              >
                <div className="font-medium">{opt.label}</div>
                <div className="text-xs text-muted-foreground">{opt.description}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
