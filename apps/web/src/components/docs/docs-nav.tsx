import type { DocPage } from '@/lib/docs';
import { cn } from '@boilerbear/ui/lib/cn';
import Link from 'next/link';
import type * as React from 'react';

export interface DocsNavProps {
  pages: ReadonlyArray<Pick<DocPage, 'slug' | 'title'>>;
  activeSlug?: string;
}

export function DocsNav({ pages, activeSlug }: DocsNavProps): React.JSX.Element {
  return (
    <nav aria-label="Documentation" className="grid gap-1">
      <Link
        href="/docs"
        className={cn(
          'rounded-md px-3 py-1.5 text-sm transition-colors',
          activeSlug === undefined
            ? 'bg-primary/10 font-medium text-foreground'
            : 'text-muted-foreground hover:bg-accent hover:text-foreground',
        )}
      >
        Overview
      </Link>
      {pages.map((p) => {
        const active = p.slug === activeSlug;
        return (
          <Link
            key={p.slug}
            href={`/docs/${p.slug}`}
            className={cn(
              'rounded-md px-3 py-1.5 text-sm transition-colors',
              active
                ? 'bg-primary/10 font-medium text-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-foreground',
            )}
            aria-current={active ? 'page' : undefined}
          >
            {p.title}
          </Link>
        );
      })}
    </nav>
  );
}
