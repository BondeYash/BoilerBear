import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, DM_Mono } from 'next/font/google';
import type * as React from 'react';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ThemeProvider } from '../components/theme-provider';
import '../styles/globals.css';

const fontSans = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  axes: ['opsz', 'wdth'],
});

const fontMono = DM_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: {
    default: 'BoilerBear — Pick your stack. Get one command.',
    template: '%s · BoilerBear',
  },
  description:
    'UI-driven scaffolding for JavaScript and TypeScript projects. Pick frameworks and libraries, copy a single shell command, and ship.',
  openGraph: {
    type: 'website',
    title: 'BoilerBear',
    description: 'Pick your stack. Get one command. Ship in minutes.',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
