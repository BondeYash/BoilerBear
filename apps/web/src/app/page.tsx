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
    <div className="container py-16 md:py-24">
      <section className="mx-auto max-w-3xl text-center">
        <div className="mb-6 flex justify-center">
          <Logo size={88} />
        </div>
        <Badge variant="secondary" className="mb-4">
          Pre-alpha · {moduleCount} modules · {recipeCount} recipes
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Pick your stack.
          <br />
          Get <span className="text-primary">one command</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          BoilerBear is a UI-driven scaffolder for JavaScript and TypeScript projects. Compose a
          stack from a curated registry, then copy a single shell command that installs and
          configures everything.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/builder">
              Start building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com/empiricinfotech/BoilerBear"
              target="_blank"
              rel="noreferrer noopener"
            >
              View on GitHub
            </a>
          </Button>
        </div>
      </section>

      <section className="mt-20 md:mt-28 grid gap-6 md:grid-cols-3">
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
  );
}
