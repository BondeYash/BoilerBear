import Link from 'next/link';
import type * as React from 'react';

export function Footer(): React.JSX.Element {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center gap-3 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          MIT licensed. Open source on{' '}
          <a
            href="https://github.com/BondeYash/BoilerBear"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium underline-offset-4 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/docs" className="hover:text-foreground">
            Docs
          </Link>
          <Link href="/builder" className="hover:text-foreground">
            Builder
          </Link>
        </nav>
      </div>
    </footer>
  );
}
