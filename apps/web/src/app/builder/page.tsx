import { Badge } from '@boilerbear/ui/components/badge';
import { Button } from '@boilerbear/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@boilerbear/ui/components/card';
import { Construction } from 'lucide-react';
import Link from 'next/link';
import type * as React from 'react';

export const metadata = {
  title: 'Builder',
};

export default function BuilderPage(): React.JSX.Element {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="secondary" className="mb-3">
          Milestone 5
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Builder</h1>
        <p className="mt-3 text-muted-foreground">
          Pick a base framework, toggle libraries, review the resolved plan, and copy your install
          command. This UI is under construction.
        </p>
      </div>

      <Card className="mx-auto mt-10 max-w-xl">
        <CardHeader>
          <Construction className="h-8 w-8 text-primary" />
          <CardTitle className="mt-3">Builder UI in progress</CardTitle>
          <CardDescription>
            The core domain (resolver, emitter, codec) and module registry are live. The interactive
            wizard is the next milestone.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-sm">In the meantime, try the CLI shim against a built-in recipe:</p>
          <pre className="overflow-x-auto rounded-md bg-muted p-3 font-mono text-xs">
            npx @boilerbear/cli run --recipe vite-classic --name my-app --dry-run
          </pre>
          <div className="mt-2 flex gap-2">
            <Button asChild variant="outline">
              <Link href="/">← Back to landing</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
