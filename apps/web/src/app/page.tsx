import { HeroConstellation } from '@/components/hero-constellation';
import { LandingDemo } from '@/components/landing-demo';
import { Logo } from '@/components/logo';
import { allManifests, allRecipes } from '@boilerbear/modules';
import { Badge } from '@boilerbear/ui/components/badge';
import { Button } from '@boilerbear/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@boilerbear/ui/components/card';
import { ArrowRight, Boxes, GitBranch, Zap } from 'lucide-react';
import Link from 'next/link';
import type * as React from 'react';

const features = [
  {
    title: 'Pick a stack',
    description:
      'Choose your framework, UI library, state, data, auth, and testing in a guided UI. Conflicts are flagged in real time.',
    icon: Boxes,
  },
  {
    title: 'Copy one command',
    description:
      'Get a single shell command that scaffolds the project, installs deps, and configures every tool.',
    icon: Zap,
  },
  {
    title: 'Share the URL',
    description:
      'Plans live in the URL — no account, no database. Send a link to your team and they get the same setup.',
    icon: GitBranch,
  },
];

export default function HomePage(): React.JSX.Element {
  const moduleCount = allManifests.length;
  const recipeCount = allRecipes.length;

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-primary/20 opacity-40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(hsl(var(--foreground)/0.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />

      <div className="container py-12 md:py-20">
        <section className="relative grid items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="relative z-10 md:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-1 shadow-sm backdrop-blur">
              <Logo size={20} />
              <span className="text-xs font-medium">BoilerBear</span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                pre-alpha
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Pick your stack.
              <br />
              Get{' '}
              <span className="relative inline-block text-primary">
                one command
                <svg
                  role="presentation"
                  viewBox="0 0 280 18"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2 w-full text-primary/60"
                >
                  <path
                    d="M2 13 Q70 4 140 9 T278 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>

            <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
              UI-driven scaffolder for JavaScript & TypeScript. Compose from a curated registry,
              copy one shell command, ship.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/builder">
                  Start building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/BondeYash/BoilerBear"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View on GitHub
                </a>
              </Button>
            </div>

            <dl className="mt-8 flex items-center gap-6 border-t pt-5 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Modules
                </dt>
                <dd className="font-mono text-lg font-semibold">{moduleCount}</dd>
              </div>
              <div className="h-8 w-px bg-border" aria-hidden />
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Recipes
                </dt>
                <dd className="font-mono text-lg font-semibold">{recipeCount}</dd>
              </div>
              <div className="h-8 w-px bg-border" aria-hidden />
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Setup
                </dt>
                <dd className="font-mono text-lg font-semibold">
                  &lt;60<span className="text-muted-foreground">s</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative z-10 md:col-span-7">
            <div
              aria-hidden
              className="absolute -right-4 -top-4 z-10 hidden rotate-6 select-none rounded-md border-2 border-dashed border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm md:block"
            >
              ✦ runs by itself
            </div>
            <div className="origin-bottom-left md:-rotate-[1.2deg] md:transition-transform md:duration-500 md:hover:rotate-0">
              <LandingDemo />
            </div>
            <p className="mt-3 text-center text-[11px] text-muted-foreground md:text-right">
              live demo · hover to grab the wheel
            </p>
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-[-6%] z-0 w-[60%] opacity-90 md:opacity-50">
            <HeroConstellation />
          </div>
        </section>

        <section className="mt-24 md:mt-32 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary" />
                <CardTitle className="mt-3">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section className="mt-20 md:mt-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Curated recipes</h2>
            <p className="mt-3 text-muted-foreground">
              Opinionated stack bundles. One click to start, fully editable.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {allRecipes.map((recipe) => (
              <Card key={recipe.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{recipe.name}</CardTitle>
                    <Badge variant="outline">{recipe.template.base}</Badge>
                  </div>
                  <CardDescription className="mt-2">{recipe.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {recipe.template.modules.map((id) => (
                      <Badge key={id} variant="secondary" className="font-mono text-[10px]">
                        {id}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
