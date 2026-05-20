'use client';

import type { ModuleManifest } from '@boilerbear/core';
import { Badge } from '@boilerbear/ui/components/badge';
import { Switch } from '@boilerbear/ui/components/switch';
import { cn } from '@boilerbear/ui/lib/cn';
import { ExternalLink } from 'lucide-react';
import type * as React from 'react';

export interface ModuleCardProps {
  manifest: ModuleManifest;
  selected: boolean;
  disabled?: boolean;
  disabledReason?: string;
  onToggle: () => void;
}

export function ModuleCard({
  manifest,
  selected,
  disabled,
  disabledReason,
  onToggle,
}: ModuleCardProps): React.JSX.Element {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 rounded-md border p-3 transition-colors',
        selected ? 'border-primary/60 bg-primary/5' : 'border-border',
        disabled && 'opacity-60',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="truncate font-medium">{manifest.name}</span>
            <a
              href={manifest.homepage}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground hover:text-foreground"
              aria-label={`${manifest.name} homepage`}
            >
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
            {manifest.description}
          </p>
        </div>
        <Switch
          checked={selected}
          onCheckedChange={onToggle}
          disabled={disabled}
          aria-label={`Toggle ${manifest.name}`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        <Badge variant="outline" className="font-mono text-[10px]">
          {manifest.id}
        </Badge>
        {manifest.popularity !== undefined && (
          <span className="text-[10px] text-muted-foreground">
            {formatDownloads(manifest.popularity)}/wk
          </span>
        )}
      </div>

      {disabled && disabledReason && (
        <p className="text-[10px] text-destructive">{disabledReason}</p>
      )}
    </div>
  );
}

function formatDownloads(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}
