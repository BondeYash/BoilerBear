import * as React from 'react';
import { Builder } from '../../components/builder/builder';

export const metadata = {
  title: 'Builder',
};

export default function BuilderPage(): React.JSX.Element {
  return (
    <React.Suspense
      fallback={
        <div className="container py-12 text-sm text-muted-foreground">Loading builder…</div>
      }
    >
      <Builder />
    </React.Suspense>
  );
}
