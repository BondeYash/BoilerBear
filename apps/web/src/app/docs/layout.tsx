import type * as React from 'react';
import { DocsNav } from '../../components/docs/docs-nav';
import { listDocs } from '../../lib/docs';

export const metadata = {
  title: 'Docs',
};

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<React.JSX.Element> {
  const pages = await listDocs();
  return (
    <div className="container py-10 md:py-14">
      <div className="grid gap-10 md:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="md:sticky md:top-20 md:self-start">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Documentation
          </div>
          <DocsNav pages={pages.map(({ slug, title }) => ({ slug, title }))} />
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
