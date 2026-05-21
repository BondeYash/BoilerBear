import {
  type CompiledPlan,
  EmitterError,
  type ModuleManifest,
  createRegistry,
  decodePlan,
  detectConflicts,
  emitCommand,
  sortModules,
} from '@boilerbear/core';
import { allManifests } from '@boilerbear/modules';
import { Badge } from '@boilerbear/ui/components/badge';
import { Button } from '@boilerbear/ui/components/button';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type * as React from 'react';
import { CopyButton } from '../../../components/copy-button';

interface SharePageProps {
  params: Promise<{ hash: string }>;
}

function safeDecode(hash: string) {
  try {
    return decodePlan(decodeURIComponent(hash));
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: SharePageProps): Promise<Metadata> {
  const { hash } = await params;
  const plan = safeDecode(hash);
  if (!plan) return { title: 'Shared plan' };

  const moduleSummary = plan.modules.slice(0, 6).join(', ') || '(framework only)';
  const description = `${plan.base} · ${plan.modules.length} modules · ${moduleSummary}`;
  const ogPath = `/og/${hash}`;

  return {
    title: `${plan.projectName} · shared stack`,
    description,
    openGraph: {
      type: 'website',
      title: `${plan.projectName} — BoilerBear stack`,
      description,
      images: [{ url: ogPath, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${plan.projectName} — BoilerBear stack`,
      description,
      images: [ogPath],
    },
  };
}

export default async function SharePage({ params }: SharePageProps): Promise<React.JSX.Element> {
  const { hash } = await params;
  const plan = safeDecode(hash);
  if (!plan) notFound();

  const registry = createRegistry(allManifests);
  const conflicts = detectConflicts(plan, registry);

  let ordered: ModuleManifest[] | null = null;
  let compiled: (CompiledPlan & { script: string }) | null = null;
  try {
    ordered = sortModules(plan, registry);
    compiled = emitCommand(plan, registry);
  } catch (err) {
    if (!(err instanceof EmitterError)) throw err;
  }

  const headerList = await headers();
  const proto = headerList.get('x-forwarded-proto') ?? 'https';
  const host = headerList.get('host') ?? 'boilerbear.dev';
  const origin = `${proto}://${host}`;
  const builderHref = `/builder?s=${encodeURIComponent(hash)}`;
  const shareUrl = `${origin}/s/${hash}`;

  return (
    <div className="container max-w-4xl py-10 md:py-16">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Badge variant="secondary" className="mb-2">
            Shared stack
          </Badge>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{plan.projectName}</h1>
          <p className="text-sm text-muted-foreground">
            Base: <span className="font-mono">{plan.base}</span> · {plan.modules.length} modules ·
            <span className="font-mono"> {plan.packageManager}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href={builderHref}>Open in builder</Link>
          </Button>
          <CopyButton value={shareUrl} label="Copy share URL" />
        </div>
      </div>

      <section className="rounded-md border p-4 md:p-6">
        <div className="mb-2 text-sm font-medium">Modules</div>
        {ordered ? (
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
        ) : (
          <p className="text-sm text-destructive">Plan has errors — open in builder to fix.</p>
        )}
      </section>

      {conflicts.warnings.length > 0 && (
        <section className="mt-4 rounded-md border border-yellow-500/40 bg-yellow-500/5 p-3 text-sm">
          <div className="mb-1 font-medium text-yellow-700 dark:text-yellow-400">
            Warnings ({conflicts.warnings.length})
          </div>
          <ul className="grid gap-1 text-muted-foreground">
            {conflicts.warnings.map((w, i) => (
              <li key={`${w.code}-${i}`}>
                <span className="font-mono text-xs">[{w.code}]</span> {w.message}
              </li>
            ))}
          </ul>
        </section>
      )}

      {compiled && (
        <section className="mt-4 rounded-md border p-4 md:p-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium">Install command</span>
            <CopyButton value={compiled.command} />
          </div>
          <pre className="overflow-x-auto rounded-md bg-muted/40 p-3 font-mono text-[11px] leading-relaxed">
            {compiled.command}
          </pre>
        </section>
      )}

      <p className="mt-6 text-xs text-muted-foreground">
        Plans are encoded entirely in the URL. No backend, no account.
      </p>
    </div>
  );
}
