'use client';

import { useBuilder } from '@/lib/store/builder';
import type { Suggestion } from '@boilerbear/core';
import { Button } from '@boilerbear/ui/components/button';
import { Sparkles } from 'lucide-react';
import type * as React from 'react';

export function SuggestionList({
  suggestions,
}: {
  suggestions: ReadonlyArray<Suggestion>;
}): React.JSX.Element | null {
  const toggleModule = useBuilder((s) => s.toggleModule);
  if (suggestions.length === 0) return null;

  return (
    <div className="rounded-md border bg-card p-3">
      <div className="mb-2 flex items-center gap-2 text-sm font-medium">
        <Sparkles className="h-4 w-4 text-primary" />
        Suggested additions
      </div>
      <ul className="grid gap-1.5">
        {suggestions.map((s) => (
          <li key={s.id} className="flex items-center justify-between gap-2 text-xs">
            <div className="min-w-0 flex-1">
              <span className="font-mono">{s.id}</span>
              <span className="text-muted-foreground"> — {s.reason}</span>
            </div>
            <Button size="sm" variant="outline" onClick={() => toggleModule(s.id)}>
              Add
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
