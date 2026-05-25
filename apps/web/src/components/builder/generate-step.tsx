'use client';

import { getRegistry } from '@/lib/registry';
import { useShellDefault } from '@/lib/share/shell-default';
import { buildShareUrl } from '@/lib/share/url';
import { useBuilder } from '@/lib/store/builder';
import { EmitterError, type Shell, emitCommand } from '@boilerbear/core';
import { Button } from '@boilerbear/ui/components/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@boilerbear/ui/components/tabs';
import {
  AlertTriangle,
  Apple,
  Check,
  Copy,
  Link as LinkIcon,
  Square,
  Terminal,
} from 'lucide-react';
import * as React from 'react';

export function GenerateStep(): React.JSX.Element {
  const plan = useBuilder((s) => s.plan);
  const registry = React.useMemo(() => getRegistry(), []);
  const defaultShell = useShellDefault();
  const [shellTab, setShellTab] = React.useState<Shell>('bash');
  React.useEffect(() => {
    setShellTab(defaultShell);
  }, [defaultShell]);

  const bashResult = React.useMemo(() => safeEmit(plan, registry, 'bash'), [plan, registry]);
  const pwshResult = React.useMemo(() => safeEmit(plan, registry, 'pwsh'), [plan, registry]);
  const result = shellTab === 'pwsh' ? pwshResult : bashResult;

  const [origin, setOrigin] = React.useState('');
  React.useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const shareUrl = origin ? buildShareUrl(plan, origin) : '';
  const cliInvocation = 'npx @boilerbear/cli@latest run --plan -';

  return (
    <div className="grid gap-4">
      <div>
        <h2 className="text-lg font-semibold">Generate</h2>
        <p className="text-sm text-muted-foreground">
          Copy the install command, or share the plan URL.
        </p>
      </div>

      {!result.ok ? (
        <div className="rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive">
          {result.error}
        </div>
      ) : (
        <Tabs defaultValue="command">
          <TabsList>
            <TabsTrigger value="command">
              <Terminal className="mr-2 h-4 w-4" />
              Command
            </TabsTrigger>
            <TabsTrigger value="share">
              <LinkIcon className="mr-2 h-4 w-4" />
              Share
            </TabsTrigger>
          </TabsList>

          <TabsContent value="command">
            <Tabs value={shellTab} onValueChange={(v) => setShellTab(v as Shell)}>
              <TabsList>
                <TabsTrigger value="bash">
                  <Apple className="mr-2 h-4 w-4" />
                  macOS / Linux
                </TabsTrigger>
                <TabsTrigger value="pwsh">
                  <Square className="mr-2 h-4 w-4" />
                  Windows (PowerShell)
                </TabsTrigger>
              </TabsList>

              <TabsContent value="bash">
                <CodeBlock label="One-liner (bash)" value={result.value.command} />
                <FullScript script={result.value.script} />
              </TabsContent>

              <TabsContent value="pwsh">
                <PwshWarnings warnings={result.value.warnings} />
                <CodeBlock label="One-liner (pwsh)" value={result.value.command} />
                <FullScript script={result.value.script} />
              </TabsContent>
            </Tabs>

            <p className="mt-3 text-xs text-muted-foreground">
              Or run it via the CLI shim (Phase 1 stays stateless — pipe the plan via stdin; the CLI
              uses bash):
            </p>
            <CodeBlock label="CLI" value={cliInvocation} />
          </TabsContent>

          <TabsContent value="share">
            <CodeBlock label="Share URL" value={shareUrl} disabled={!shareUrl} />
            <p className="mt-2 text-xs text-muted-foreground">
              The plan is encoded in the URL. No backend, no account.
            </p>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}

function safeEmit(
  plan: Parameters<typeof emitCommand>[0],
  registry: Parameters<typeof emitCommand>[1],
  shell: Shell,
): { ok: true; value: ReturnType<typeof emitCommand> } | { ok: false; error: string } {
  try {
    return { ok: true, value: emitCommand(plan, registry, { shell }) };
  } catch (err) {
    if (err instanceof EmitterError) return { ok: false, error: err.message };
    throw err;
  }
}

function PwshWarnings({
  warnings,
}: {
  warnings: ReturnType<typeof emitCommand>['warnings'];
}): React.JSX.Element | null {
  const unsupported = warnings.filter((w) => w.code === 'pwsh-unsupported-shell-step');
  if (unsupported.length === 0) return null;
  return (
    <div
      role="alert"
      className="mb-3 flex items-start gap-2 rounded-md border border-amber-500/40 bg-amber-500/10 p-3 text-xs text-amber-900 dark:text-amber-200"
    >
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <div>
        <p className="font-medium">This stack uses shell steps not yet ported to PowerShell.</p>
        <p className="mt-1">
          Use the macOS / Linux tab, or contribute a <code>pwshCommand</code> on the offending
          module
          {unsupported.length === 1 ? '' : 's'}:{' '}
          {unsupported
            .map((w) => w.moduleId)
            .filter(Boolean)
            .join(', ') || 'unknown'}
          .
        </p>
      </div>
    </div>
  );
}

function FullScript({ script }: { script: string }): React.JSX.Element {
  return (
    <details className="mt-3 rounded-md border bg-muted/40 p-3">
      <summary className="cursor-pointer text-xs font-medium">View full script</summary>
      <pre className="mt-2 overflow-x-auto whitespace-pre rounded bg-background p-3 font-mono text-[11px]">
        {script}
      </pre>
    </details>
  );
}

function CodeBlock({
  label,
  value,
  disabled,
}: {
  label: string;
  value: string;
  disabled?: boolean;
}): React.JSX.Element {
  const [copied, setCopied] = React.useState(false);

  const copy = React.useCallback(async () => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard rejected — silent */
    }
  }, [value]);

  return (
    <div className="grid gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <Button size="sm" variant="outline" onClick={copy} disabled={disabled || !value}>
          {copied ? <Check className="mr-1 h-3 w-3" /> : <Copy className="mr-1 h-3 w-3" />}
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </div>
      <pre className="overflow-x-auto rounded-md border bg-muted/40 p-3 font-mono text-[11px] leading-relaxed">
        {value || '—'}
      </pre>
    </div>
  );
}
