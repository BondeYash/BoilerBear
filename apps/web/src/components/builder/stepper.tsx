'use client';

import { cn } from '@boilerbear/ui/lib/cn';
import { Check } from 'lucide-react';
import type * as React from 'react';

export interface Step {
  id: string;
  label: string;
}

export interface StepperProps {
  steps: ReadonlyArray<Step>;
  current: number;
  onSelect: (index: number) => void;
}

export function Stepper({ steps, current, onSelect }: StepperProps): React.JSX.Element {
  return (
    <ol className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => {
        const isActive = i === current;
        const isDone = i < current;
        return (
          <li key={step.id} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSelect(i)}
              className={cn(
                'flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-colors',
                isActive && 'border-primary bg-primary/10 text-foreground',
                isDone && 'border-primary/40 text-foreground',
                !isActive && !isDone && 'border-border text-muted-foreground hover:bg-accent',
              )}
            >
              <span
                className={cn(
                  'flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold',
                  isActive && 'bg-primary text-primary-foreground',
                  isDone && 'bg-primary/80 text-primary-foreground',
                  !isActive && !isDone && 'bg-muted text-muted-foreground',
                )}
              >
                {isDone ? <Check className="h-3 w-3" /> : i + 1}
              </span>
              {step.label}
            </button>
            {i < steps.length - 1 && <span className="hidden h-px w-6 bg-border md:inline-block" />}
          </li>
        );
      })}
    </ol>
  );
}
