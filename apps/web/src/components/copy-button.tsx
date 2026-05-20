'use client';

import { Button } from '@boilerbear/ui/components/button';
import { Check, Copy } from 'lucide-react';
import * as React from 'react';

export interface CopyButtonProps {
  value: string;
  label?: string;
  size?: 'sm' | 'default';
}

export function CopyButton({
  value,
  label = 'Copy',
  size = 'sm',
}: CopyButtonProps): React.JSX.Element {
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
    <Button size={size} variant="outline" onClick={copy} disabled={!value}>
      {copied ? <Check className="mr-1 h-3 w-3" /> : <Copy className="mr-1 h-3 w-3" />}
      {copied ? 'Copied' : label}
    </Button>
  );
}
