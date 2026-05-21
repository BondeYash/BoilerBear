'use client';

import { cn } from '@boilerbear/ui/lib/cn';
import { Check, MousePointer2, Pause, Play, RotateCcw } from 'lucide-react';
import * as React from 'react';

type StepId = 'basics' | 'framework' | 'modules' | 'review' | 'generate';

interface Hotspot {
  id: string;
  x: number;
  y: number;
}

interface Frame {
  at: number;
  step?: StepId;
  cursor?: { id: string };
  click?: string;
  type?: { field: 'projectName' | 'command'; value: string };
  toggle?: string;
  highlightNext?: boolean;
}

const PROJECT_NAME = 'my-app';
const FINAL_COMMAND = 'npx boilerbear@latest init --plan=ab3f9c2';

const MODULE_CHOICES = [
  { id: 'next', label: 'Next.js 15', kind: 'framework' },
  { id: 'tailwind', label: 'Tailwind CSS', kind: 'styling' },
  { id: 'shadcn', label: 'shadcn/ui', kind: 'ui' },
  { id: 'drizzle', label: 'Drizzle ORM', kind: 'data' },
  { id: 'auth-js', label: 'Auth.js', kind: 'auth' },
  { id: 'vitest', label: 'Vitest', kind: 'testing' },
] as const;

const HOTSPOTS: Record<string, Hotspot> = {
  nameField: { id: 'nameField', x: 28, y: 30 },
  nextFromBasics: { id: 'nextFromBasics', x: 88, y: 88 },
  next: { id: 'next', x: 22, y: 38 },
  nextFromFramework: { id: 'nextFromFramework', x: 88, y: 88 },
  tailwind: { id: 'tailwind', x: 22, y: 32 },
  shadcn: { id: 'shadcn', x: 50, y: 32 },
  drizzle: { id: 'drizzle', x: 78, y: 32 },
  authJs: { id: 'authJs', x: 22, y: 58 },
  vitest: { id: 'vitest', x: 50, y: 58 },
  nextFromModules: { id: 'nextFromModules', x: 88, y: 88 },
  generate: { id: 'generate', x: 50, y: 60 },
  copyBtn: { id: 'copyBtn', x: 86, y: 32 },
  parking: { id: 'parking', x: 50, y: 110 },
};

const TIMELINE: Frame[] = [
  { at: 0, step: 'basics', cursor: { id: 'parking' } },
  { at: 600, cursor: { id: 'nameField' } },
  { at: 1300, click: 'nameField' },
  { at: 1500, type: { field: 'projectName', value: PROJECT_NAME } },
  { at: 2400, highlightNext: true },
  { at: 2600, cursor: { id: 'nextFromBasics' } },
  { at: 3200, click: 'nextFromBasics' },

  { at: 3400, step: 'framework', cursor: { id: 'parking' } },
  { at: 3700, cursor: { id: 'next' } },
  { at: 4200, click: 'next', toggle: 'next' },
  { at: 4600, cursor: { id: 'nextFromFramework' } },
  { at: 5100, click: 'nextFromFramework' },

  { at: 5300, step: 'modules', cursor: { id: 'parking' } },
  { at: 5600, cursor: { id: 'tailwind' } },
  { at: 6000, click: 'tailwind', toggle: 'tailwind' },
  { at: 6300, cursor: { id: 'shadcn' } },
  { at: 6700, click: 'shadcn', toggle: 'shadcn' },
  { at: 7000, cursor: { id: 'drizzle' } },
  { at: 7400, click: 'drizzle', toggle: 'drizzle' },
  { at: 7700, cursor: { id: 'authJs' } },
  { at: 8100, click: 'authJs', toggle: 'auth-js' },
  { at: 8400, cursor: { id: 'vitest' } },
  { at: 8800, click: 'vitest', toggle: 'vitest' },
  { at: 9100, cursor: { id: 'nextFromModules' } },
  { at: 9600, click: 'nextFromModules' },

  { at: 9800, step: 'review' },
  { at: 10600, cursor: { id: 'generate' } },
  { at: 11200, click: 'generate' },

  { at: 11400, step: 'generate', cursor: { id: 'parking' } },
  { at: 11800, type: { field: 'command', value: FINAL_COMMAND } },
  { at: 14200, cursor: { id: 'copyBtn' } },
  { at: 14800, click: 'copyBtn' },
  { at: 16500, cursor: { id: 'parking' } },
];

const TIMELINE_END = 18500;

export function LandingDemo(): React.JSX.Element {
  const [tick, setTick] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);
  const [click, setClick] = React.useState<{ id: string; key: number } | null>(null);
  const [copied, setCopied] = React.useState(false);
  const startRef = React.useRef<number>(0);
  const elapsedRef = React.useRef<number>(0);
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!playing) return;
    startRef.current = performance.now() - elapsedRef.current;
    const loop = (now: number): void => {
      const e = now - startRef.current;
      elapsedRef.current = e;
      setTick(e % TIMELINE_END);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return (): void => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [playing]);

  const state = React.useMemo(() => {
    let step: StepId = 'basics';
    let cursor = HOTSPOTS.parking;
    const selected = new Set<string>();
    let projectName = '';
    let command = '';
    let highlightNext = false;

    for (const f of TIMELINE) {
      if (f.at > tick) break;
      if (f.step) step = f.step;
      if (f.cursor) cursor = HOTSPOTS[f.cursor.id] ?? cursor;
      if (f.toggle) selected.add(f.toggle);
      if (f.highlightNext !== undefined) highlightNext = f.highlightNext;
      if (f.type) {
        const { field, value } = f.type;
        const progress = Math.min(1, (tick - f.at) / (value.length * 55));
        const chars = value.slice(0, Math.floor(progress * value.length));
        if (field === 'projectName') projectName = chars;
        else command = chars;
      }
    }
    return { step, cursor, selected, projectName, command, highlightNext };
  }, [tick]);

  React.useEffect(() => {
    const recent = [...TIMELINE]
      .reverse()
      .find((f) => f.click && f.at <= tick && tick - f.at < 240);
    if (recent?.click) {
      setClick({ id: recent.click, key: recent.at });
    }
  }, [tick]);

  React.useEffect(() => {
    const copyFrame = TIMELINE.find((f) => f.click === 'copyBtn');
    if (!copyFrame) return;
    if (tick >= copyFrame.at && tick < copyFrame.at + 1500) setCopied(true);
    else setCopied(false);
  }, [tick]);

  const restart = React.useCallback((): void => {
    elapsedRef.current = 0;
    startRef.current = performance.now();
    setTick(0);
    setPlaying(true);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-2xl" />
      <div
        className="relative overflow-hidden rounded-xl border bg-card shadow-2xl"
        onMouseEnter={(): void => setPlaying(false)}
        onMouseLeave={(): void => setPlaying(true)}
      >
        <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <span className="h-3 w-3 rounded-full bg-green-400/70" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              boilerbear.dev/builder
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary md:inline-flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              live demo · hover to pause
            </span>
            <button
              type="button"
              onClick={(): void => setPlaying((p) => !p)}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
              aria-label={playing ? 'Pause demo' : 'Play demo'}
            >
              {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            </button>
            <button
              type="button"
              onClick={restart}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
              aria-label="Restart demo"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <DemoStepStrip current={state.step} />

        <div className="relative aspect-[16/10] w-full bg-background">
          <DemoStage
            step={state.step}
            selected={state.selected}
            projectName={state.projectName}
            command={state.command}
            highlightNext={state.highlightNext}
            copied={copied}
          />

          <PuppetCursor x={state.cursor?.x ?? 50} y={state.cursor?.y ?? 100} />

          {click && <ClickSpark key={click.key} hotspotId={click.id} />}
        </div>
      </div>
    </div>
  );
}

const STRIP_STEPS: { id: StepId; label: string }[] = [
  { id: 'basics', label: 'Basics' },
  { id: 'framework', label: 'Framework' },
  { id: 'modules', label: 'Modules' },
  { id: 'review', label: 'Review' },
  { id: 'generate', label: 'Generate' },
];

function DemoStepStrip({ current }: { current: StepId }): React.JSX.Element {
  const idx = STRIP_STEPS.findIndex((s) => s.id === current);
  return (
    <ol className="flex items-center gap-1 border-b bg-muted/20 px-4 py-2 text-[11px] font-medium">
      {STRIP_STEPS.map((s, i) => {
        const active = i === idx;
        const done = i < idx;
        return (
          <li key={s.id} className="flex items-center gap-1">
            <span
              className={cn(
                'flex h-4 w-4 items-center justify-center rounded-full text-[9px] transition-colors',
                active && 'bg-primary text-primary-foreground',
                done && 'bg-primary/70 text-primary-foreground',
                !active && !done && 'bg-muted text-muted-foreground',
              )}
            >
              {done ? <Check className="h-2.5 w-2.5" /> : i + 1}
            </span>
            <span
              className={cn(
                'transition-colors',
                active ? 'text-foreground' : 'text-muted-foreground',
              )}
            >
              {s.label}
            </span>
            {i < STRIP_STEPS.length - 1 && (
              <span className="mx-1.5 h-px w-4 bg-border md:w-6" aria-hidden />
            )}
          </li>
        );
      })}
    </ol>
  );
}

interface StageProps {
  step: StepId;
  selected: Set<string>;
  projectName: string;
  command: string;
  highlightNext: boolean;
  copied: boolean;
}

function DemoStage(props: StageProps): React.JSX.Element {
  return (
    <div className="absolute inset-0 p-4 md:p-6">
      {props.step === 'basics' && <BasicsPanel {...props} />}
      {props.step === 'framework' && <FrameworkPanel {...props} />}
      {props.step === 'modules' && <ModulesPanel {...props} />}
      {props.step === 'review' && <ReviewPanel {...props} />}
      {props.step === 'generate' && <GeneratePanel {...props} />}
      <NextButton highlight={props.highlightNext} visible={props.step !== 'generate'} />
    </div>
  );
}

function BasicsPanel({ projectName }: StageProps): React.JSX.Element {
  return (
    <div className="mx-auto max-w-md pt-6">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">Step 1</p>
      <h3 className="mt-1 text-lg font-semibold">Name your project</h3>
      <div className="mt-4 rounded-md border bg-background px-3 py-2.5">
        <div className="block text-[10px] uppercase tracking-wider text-muted-foreground">
          Project name
        </div>
        <div className="mt-1 font-mono text-sm">
          {projectName}
          <span className="inline-block h-4 w-px animate-pulse bg-foreground/70 align-middle" />
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Package manager · <span className="font-mono">pnpm</span>
      </p>
    </div>
  );
}

function FrameworkPanel({ selected }: StageProps): React.JSX.Element {
  const frameworks = [
    { id: 'next', label: 'Next.js 15', sub: 'React · App Router' },
    { id: 'remix', label: 'Remix', sub: 'React · Vite' },
    { id: 'sveltekit', label: 'SvelteKit', sub: 'Svelte 5' },
  ];
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">Step 2</p>
      <h3 className="mt-1 text-lg font-semibold">Pick a framework</h3>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {frameworks.map((f) => {
          const on = selected.has(f.id);
          return (
            <div
              key={f.id}
              className={cn(
                'rounded-lg border p-3 transition-all',
                on ? 'border-primary bg-primary/5 shadow-sm' : 'border-border bg-card',
              )}
            >
              <div className="flex items-center justify-between">
                <div className="font-medium text-sm">{f.label}</div>
                <div
                  className={cn(
                    'flex h-4 w-4 items-center justify-center rounded-full transition-all',
                    on ? 'scale-100 bg-primary text-primary-foreground' : 'scale-0 bg-muted',
                  )}
                >
                  <Check className="h-3 w-3" />
                </div>
              </div>
              <div className="mt-0.5 text-[10px] text-muted-foreground">{f.sub}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ModulesPanel({ selected }: StageProps): React.JSX.Element {
  const stylingRow = [
    { id: 'tailwind', label: 'Tailwind CSS' },
    { id: 'shadcn', label: 'shadcn/ui' },
    { id: 'mantine', label: 'Mantine' },
  ];
  const dataRow = [
    { id: 'drizzle', label: 'Drizzle ORM' },
    { id: 'auth-js', label: 'Auth.js' },
    { id: 'trpc', label: 'tRPC' },
  ];
  const testingRow = [
    { id: 'vitest', label: 'Vitest' },
    { id: 'playwright', label: 'Playwright' },
    { id: 'biome', label: 'Biome' },
  ];
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">Step 3</p>
      <h3 className="mt-1 text-lg font-semibold">Add modules</h3>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {stylingRow.map((m) => (
          <ModuleChip key={m.id} id={m.id} label={m.label} on={selected.has(m.id)} />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {dataRow.map((m) => (
          <ModuleChip key={m.id} id={m.id} label={m.label} on={selected.has(m.id)} />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {testingRow.map((m) => (
          <ModuleChip key={m.id} id={m.id} label={m.label} on={selected.has(m.id)} />
        ))}
      </div>
    </div>
  );
}

function ModuleChip({ label, on }: { id: string; label: string; on: boolean }): React.JSX.Element {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-md border px-2.5 py-2 text-xs transition-all',
        on ? 'border-primary bg-primary/5' : 'border-border bg-card',
      )}
    >
      <span className={cn(on && 'font-medium')}>{label}</span>
      <div
        className={cn(
          'flex h-3.5 w-3.5 items-center justify-center rounded transition-all',
          on ? 'scale-100 bg-primary text-primary-foreground' : 'scale-0',
        )}
      >
        <Check className="h-2.5 w-2.5" />
      </div>
    </div>
  );
}

function ReviewPanel({ selected }: StageProps): React.JSX.Element {
  const summary = MODULE_CHOICES.filter((m) => selected.has(m.id));
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">Step 4</p>
      <h3 className="mt-1 text-lg font-semibold">Review your plan</h3>
      <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
        <div className="rounded-md border bg-card p-3">
          <div className="text-[10px] uppercase text-muted-foreground">Project</div>
          <div className="mt-1 font-mono">{PROJECT_NAME}</div>
          <div className="mt-2 text-[10px] uppercase text-muted-foreground">Package mgr</div>
          <div className="mt-1 font-mono">pnpm</div>
        </div>
        <div className="rounded-md border bg-card p-3">
          <div className="text-[10px] uppercase text-muted-foreground">
            {summary.length} modules
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            {summary.map((m) => (
              <span key={m.id} className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[10px]">
                {m.id}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="mt-5 w-full rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground"
      >
        Generate command →
      </button>
    </div>
  );
}

function GeneratePanel({ command, copied }: StageProps): React.JSX.Element {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">Done · Step 5</p>
      <h3 className="mt-1 text-lg font-semibold">Run one command</h3>
      <div className="relative mt-4 overflow-hidden rounded-lg border bg-zinc-950 px-4 py-3.5 shadow-inner">
        <div className="flex items-center justify-between">
          <div className="font-mono text-[13px] text-emerald-300">
            <span className="text-zinc-500">$ </span>
            {command}
            <span className="inline-block h-3.5 w-1.5 animate-pulse bg-emerald-300/80 align-middle" />
          </div>
          <button
            type="button"
            className={cn(
              'rounded-md border px-2 py-1 text-[10px] font-medium transition-all',
              copied
                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                : 'border-zinc-700 bg-zinc-800 text-zinc-300',
            )}
          >
            {copied ? '✓ copied' : 'copy'}
          </button>
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Share the link · same plan, same command, on any machine.
      </p>
    </div>
  );
}

function NextButton({
  highlight,
  visible,
}: {
  highlight: boolean;
  visible: boolean;
}): React.JSX.Element | null {
  if (!visible) return null;
  return (
    <button
      type="button"
      className={cn(
        'absolute bottom-4 right-4 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-sm transition-all md:bottom-6 md:right-6',
        highlight && 'ring-2 ring-primary/50 ring-offset-2 ring-offset-background',
      )}
    >
      Next →
    </button>
  );
}

function PuppetCursor({ x, y }: { x: number; y: number }): React.JSX.Element {
  return (
    <div
      className="pointer-events-none absolute z-20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transition:
          'left 650ms cubic-bezier(0.22, 1, 0.36, 1), top 650ms cubic-bezier(0.22, 1, 0.36, 1)',
        transform: 'translate(-25%, -25%)',
      }}
    >
      <div className="relative">
        <MousePointer2
          className="h-5 w-5 fill-primary text-primary drop-shadow-md"
          strokeWidth={1.5}
        />
        <div className="absolute left-5 top-4 whitespace-nowrap rounded bg-primary px-1.5 py-0.5 font-mono text-[9px] font-medium text-primary-foreground shadow-sm">
          you
        </div>
      </div>
    </div>
  );
}

function ClickSpark({ hotspotId }: { hotspotId: string }): React.JSX.Element | null {
  const spot = HOTSPOTS[hotspotId];
  if (!spot) return null;
  return (
    <div
      className="pointer-events-none absolute z-10"
      style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <span className="block h-4 w-4 animate-[ping_500ms_ease-out_forwards] rounded-full bg-primary/60" />
    </div>
  );
}
