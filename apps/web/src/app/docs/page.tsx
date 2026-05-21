import { Card, CardDescription, CardHeader, CardTitle } from '@boilerbear/ui/components/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type * as React from 'react';
import { listDocs } from '../../lib/docs';

export const metadata = {
  title: 'Docs',
  description: 'Guides for the BoilerBear builder, CLI, and contribution flow.',
};

export default async function DocsIndexPage(): Promise<React.JSX.Element> {
  const pages = await listDocs();
  return (
    <div className="grid gap-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Documentation</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          How to use the builder, share plans, run the CLI, and contribute modules to the registry.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {pages.map((p) => (
          <Link key={p.slug} href={`/docs/${p.slug}`} className="group">
            <Card className="h-full transition-colors group-hover:border-primary/60">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{p.title}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                </CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
