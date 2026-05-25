'use client';

import { useBuilder } from '@/lib/store/builder';
import { type Language, type PackageManager, pmsForLanguage } from '@boilerbear/core';
import { Input } from '@boilerbear/ui/components/input';
import { Label } from '@boilerbear/ui/components/label';
import { cn } from '@boilerbear/ui/lib/cn';
import type * as React from 'react';

const LANGUAGES: ReadonlyArray<{ id: Language; label: string; description: string }> = [
  { id: 'js', label: 'JS / TS', description: 'Vite, Next.js, etc.' },
  { id: 'py', label: 'Python', description: 'FastAPI, Django, Flask, Litestar' },
  { id: 'go', label: 'Go', description: 'Gin, Echo, Fiber' },
  { id: 'rust', label: 'Rust', description: 'Axum, Actix, Rocket' },
];

const PM_LABELS: Record<PackageManager, string> = {
  pnpm: 'Fast, disk-efficient',
  npm: 'Default Node package manager',
  yarn: 'Berry / classic compatible',
  bun: 'Bun runtime + installer',
  pip: 'Stock Python installer',
  uv: 'Astral uv — fast resolver (recommended)',
  poetry: 'Lockfile + virtualenv workflow',
  go: 'Go modules (go get / go mod)',
  cargo: 'Rust crates.io / cargo',
};

const NAME_PATTERN = /^(?!\.)(?!-)[a-z0-9._~-]+$/;

export function BasicsStep(): React.JSX.Element {
  const projectName = useBuilder((s) => s.plan.projectName);
  const language = useBuilder((s) => s.plan.language);
  const pm = useBuilder((s) => s.plan.packageManager);
  const setProjectName = useBuilder((s) => s.setProjectName);
  const setLanguage = useBuilder((s) => s.setLanguage);
  const setPM = useBuilder((s) => s.setPM);
  const planModules = useBuilder((s) => s.plan.modules);

  const isValidName = NAME_PATTERN.test(projectName);
  const availablePms = pmsForLanguage(language);

  const handleLanguage = (next: Language): void => {
    if (next === language) return;
    if (planModules.length > 0) {
      const ok = window.confirm(
        `Switching to ${next.toUpperCase()} clears the current framework + module selections. Continue?`,
      );
      if (!ok) return;
    }
    setLanguage(next);
  };

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
        <Label>Language</Label>
        <div
          className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
          role="radiogroup"
          aria-label="Language"
        >
          {LANGUAGES.map((opt) => {
            const selected = opt.id === language;
            return (
              <button
                key={opt.id}
                type="button"
                // biome-ignore lint/a11y/useSemanticElements: custom radio card needs button affordances (focus ring, hover, full-card click target)
                role="radio"
                aria-checked={selected}
                onClick={() => handleLanguage(opt.id)}
                className={cn(
                  'rounded-md border p-3 text-left transition-colors',
                  selected
                    ? 'border-primary bg-primary/5 ring-1 ring-primary/40'
                    : 'border-border hover:bg-accent',
                )}
              >
                <div className="font-medium">{opt.label}</div>
                <div className="text-xs text-muted-foreground">{opt.description}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-2">
        <Label>Package manager</Label>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {availablePms.map((id) => {
            const selected = id === pm;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setPM(id)}
                className={cn(
                  'rounded-md border p-3 text-left transition-colors',
                  selected
                    ? 'border-primary bg-primary/5 ring-1 ring-primary/40'
                    : 'border-border hover:bg-accent',
                )}
                aria-pressed={selected}
              >
                <div className="font-medium">{id}</div>
                <div className="text-xs text-muted-foreground">{PM_LABELS[id]}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
