import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type * as React from 'react';
import { Markdown } from '../../../components/docs/markdown';
import { getDoc, listDocs } from '../../../lib/docs';

interface DocPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const pages = await listDocs();
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getDoc(slug);
  if (!doc) return { title: 'Docs' };
  return { title: doc.title, description: doc.description };
}

export default async function DocPage({ params }: DocPageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const doc = await getDoc(slug);
  if (!doc) notFound();

  return <Markdown content={doc.content} />;
}
