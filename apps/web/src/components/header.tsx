import { Button } from '@boilerbear/ui/components/button';
import { Github } from 'lucide-react';
import Link from 'next/link';
import type * as React from 'react';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';

export function Header(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
          <Logo size={40} />
          <span>boilerbear</span>
        </Link>

        <nav className="ml-8 hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/builder"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Builder
          </Link>
          <Link
            href="/docs"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild aria-label="GitHub repository">
            <a
              href="https://github.com/empiricinfotech/BoilerBear"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
