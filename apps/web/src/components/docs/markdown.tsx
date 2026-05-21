import { cn } from '@boilerbear/ui/lib/cn';
import type * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export interface MarkdownProps {
  content: string;
  className?: string;
}

export function Markdown({ content, className }: MarkdownProps): React.JSX.Element {
  return (
    <article
      className={cn(
        'prose prose-zinc dark:prose-invert max-w-none',
        'prose-headings:scroll-mt-20 prose-headings:tracking-tight',
        'prose-h1:text-3xl prose-h1:font-bold md:prose-h1:text-4xl',
        'prose-h2:text-xl prose-h2:font-semibold md:prose-h2:text-2xl',
        'prose-h3:text-lg prose-h3:font-semibold',
        'prose-a:text-primary prose-a:no-underline hover:prose-a:underline',
        'prose-code:rounded prose-code:bg-muted/60 prose-code:px-1 prose-code:py-0.5 prose-code:text-[0.9em] prose-code:before:content-none prose-code:after:content-none',
        'prose-pre:rounded-md prose-pre:border prose-pre:bg-muted/30 prose-pre:p-3 prose-pre:text-[12px]',
        'prose-table:text-sm',
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children, ...rest }) => {
            const isExternal = href?.startsWith('http');
            return (
              <a
                href={href}
                {...rest}
                {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
