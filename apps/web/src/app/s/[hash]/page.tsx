import { redirect } from 'next/navigation';
import type * as React from 'react';

interface SharePageProps {
  params: Promise<{ hash: string }>;
}

export const metadata = {
  title: 'Shared plan',
};

export default async function SharePage({ params }: SharePageProps): Promise<React.JSX.Element> {
  const { hash } = await params;
  redirect(`/builder?s=${encodeURIComponent(hash)}`);
}
