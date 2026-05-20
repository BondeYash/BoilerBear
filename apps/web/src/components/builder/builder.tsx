'use client';

import { HASH_PARAM, hashToPlan, planToHash } from '@/lib/share/url';
import { useBuilder } from '@/lib/store/builder';
import { Button } from '@boilerbear/ui/components/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';
import { BasicsStep } from './basics-step';
import { FrameworkStep } from './framework-step';
import { GenerateStep } from './generate-step';
import { ModulesStep } from './modules-step';
import { ReviewStep } from './review-step';
import { type Step, Stepper } from './stepper';

const STEPS: ReadonlyArray<Step> = [
  { id: 'basics', label: 'Basics' },
  { id: 'framework', label: 'Framework' },
  { id: 'modules', label: 'Modules' },
  { id: 'review', label: 'Review' },
  { id: 'generate', label: 'Generate' },
];

export function Builder(): React.JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = useBuilder((s) => s.plan);
  const step = useBuilder((s) => s.step);
  const loadPlan = useBuilder((s) => s.loadPlan);
  const goToStep = useBuilder((s) => s.goToStep);
  const nextStep = useBuilder((s) => s.nextStep);
  const prevStep = useBuilder((s) => s.prevStep);
  const hydrated = React.useRef(false);

  React.useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    const hash = searchParams.get(HASH_PARAM);
    if (!hash) return;
    const decoded = hashToPlan(hash);
    if (decoded) loadPlan(decoded);
  }, [searchParams, loadPlan]);

  React.useEffect(() => {
    if (!hydrated.current) return;
    const hash = planToHash(plan);
    const params = new URLSearchParams(window.location.search);
    params.set(HASH_PARAM, hash);
    const url = `${window.location.pathname}?${params.toString()}`;
    const timer = window.setTimeout(() => {
      window.history.replaceState(null, '', url);
    }, 250);
    return () => window.clearTimeout(timer);
  }, [plan]);

  const stepContent = (() => {
    switch (step) {
      case 0:
        return <BasicsStep />;
      case 1:
        return <FrameworkStep />;
      case 2:
        return <ModulesStep />;
      case 3:
        return <ReviewStep />;
      case 4:
        return <GenerateStep />;
      default:
        return null;
    }
  })();

  const isLast = step >= STEPS.length - 1;

  return (
    <div className="container max-w-5xl py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Stack builder</h1>
          <p className="text-sm text-muted-foreground">
            Pick your tools. Get one shell command. Share via URL.
          </p>
        </div>
        <Stepper steps={STEPS} current={step} onSelect={goToStep} />
      </div>

      <div className="rounded-lg border bg-card p-4 md:p-6">{stepContent}</div>

      <div className="mt-6 flex items-center justify-between">
        <Button variant="outline" onClick={prevStep} disabled={step === 0}>
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back
        </Button>
        <span className="text-sm text-muted-foreground">
          Step {step + 1} of {STEPS.length}
        </span>
        <Button onClick={nextStep} disabled={isLast}>
          Next
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <button type="button" onClick={() => router.refresh()} className="sr-only" aria-hidden>
        refresh
      </button>
    </div>
  );
}
