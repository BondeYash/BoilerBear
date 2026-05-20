'use client';

import { getRegistry } from '@/lib/registry';
import { buildShareUrl } from '@/lib/share/url';
import { useBuilder } from '@/lib/store/builder';
import { EmitterError, emitCommand } from '@boilerbear/core';
import { Button } from '@boilerbear/ui/components/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@boilerbear/ui/components/tabs';
import { Check, Copy, Link as LinkIcon, Terminal } from 'lucide-react';
import * as React from 'react';

export function GenerateStep(): React.JSX.Element {
  const plan = useBuilder((s) => s.plan);
  const registry = React.useMemo(() => getRegistry(), []);

  const result = React.useMemo(() => {
    try {
      return { ok: true as const, value: emitCommand(plan, registry) };
    } catch (err) {
      if (err instanceof EmitterError) {
        return { ok: false as const, error: err.message };
      }
      throw err;
    }
  }, [plan, registry]);

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
            <CodeBlock label="One-liner" value={result.value.command} />
            <p className="mt-2 text-xs text-muted-foreground">
              Or run it via the CLI shim (Phase 1 stays stateless — pipe the plan via stdin):
            </p>
            <CodeBlock label="CLI" value={cliInvocation} />
            <details className="mt-3 rounded-md border bg-muted/40 p-3">
              <summary className="cursor-pointer text-xs font-medium">View full script</summary>
              <pre className="mt-2 overflow-x-auto whitespace-pre rounded bg-background p-3 font-mono text-[11px]">
                {result.value.script}
              </pre>
            </details>
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
