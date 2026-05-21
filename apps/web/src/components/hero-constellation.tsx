'use client';

import * as React from 'react';

interface Chip {
  id: string;
  label: string;
  x: number;
  y: number;
  delay: number;
  size?: 'sm' | 'md' | 'lg';
}

const CHIPS: Chip[] = [
  { id: 'next', label: 'next', x: 18, y: 14, delay: 0, size: 'lg' },
  { id: 'tailwind', label: 'tailwindcss', x: 58, y: 9, delay: 0.4, size: 'md' },
  { id: 'shadcn', label: 'shadcn-ui', x: 76, y: 26, delay: 0.8, size: 'md' },
  { id: 'drizzle', label: 'drizzle', x: 12, y: 38, delay: 1.2, size: 'sm' },
  { id: 'clerk', label: 'clerk', x: 38, y: 30, delay: 1.6, size: 'sm' },
  { id: 'zod', label: 'zod', x: 64, y: 44, delay: 2.0, size: 'sm' },
  { id: 'vitest', label: 'vitest', x: 24, y: 56, delay: 2.4, size: 'md' },
  { id: 'tanstack', label: 'tanstack-query', x: 52, y: 62, delay: 2.8, size: 'lg' },
  { id: 'biome', label: 'biome', x: 82, y: 56, delay: 3.2, size: 'sm' },
  { id: 'zustand', label: 'zustand', x: 16, y: 74, delay: 3.6, size: 'sm' },
  { id: 'playwright', label: 'playwright', x: 46, y: 82, delay: 4.0, size: 'md' },
  { id: 'auth-js', label: 'next-auth', x: 74, y: 78, delay: 4.4, size: 'sm' },
];

const EDGES: Array<[string, string]> = [
  ['next', 'tailwind'],
  ['next', 'shadcn'],
  ['next', 'clerk'],
  ['tailwind', 'shadcn'],
  ['drizzle', 'clerk'],
  ['clerk', 'zod'],
  ['zod', 'tanstack'],
  ['vitest', 'tanstack'],
  ['tanstack', 'biome'],
  ['zustand', 'vitest'],
  ['playwright', 'tanstack'],
  ['playwright', 'auth-js'],
  ['auth-js', 'clerk'],
];

const SIZE_CLASS: Record<NonNullable<Chip['size']>, string> = {
  sm: 'text-[9px] px-2 py-0.5',
  md: 'text-[10px] px-2.5 py-1',
  lg: 'text-[11px] px-3 py-1 font-medium',
};

export function HeroConstellation(): React.JSX.Element {
  const chipById = React.useMemo(() => {
    const m = new Map<string, Chip>();
    for (const c of CHIPS) m.set(c.id, c);
    return m;
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        role="presentation"
        className="absolute inset-0 h-full w-full text-primary/25"
      >
        {EDGES.map(([a, b]) => {
          const A = chipById.get(a);
          const B = chipById.get(b);
          if (!A || !B) return null;
          return (
            <line
              key={`${a}-${b}`}
              x1={A.x}
              y1={A.y}
              x2={B.x}
              y2={B.y}
              stroke="currentColor"
              strokeWidth="0.15"
              strokeDasharray="0.6 0.4"
            />
          );
        })}
      </svg>

      {CHIPS.map((c) => (
        <span
          key={c.id}
          className={`absolute rounded-full border border-border/70 bg-card/70 font-mono ${SIZE_CLASS[c.size ?? 'sm']} text-foreground/70 shadow-sm backdrop-blur-sm hero-chip-drift hero-chip-pulse`}
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            animationDelay: `${c.delay}s, ${c.delay * 1.5}s`,
          }}
        >
          {c.label}
        </span>
      ))}

      <FloatingTicket />

      <style>{`
        @keyframes hero-chip-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(4px, -6px); }
        }
        @keyframes hero-chip-pulse {
          0%, 92%, 100% {
            border-color: hsl(var(--border) / 0.7);
            color: hsl(var(--foreground) / 0.7);
            box-shadow: 0 1px 2px hsl(var(--foreground) / 0.05);
          }
          96% {
            border-color: hsl(var(--primary));
            color: hsl(var(--primary));
            box-shadow: 0 0 0 4px hsl(var(--primary) / 0.15), 0 0 18px hsl(var(--primary) / 0.35);
          }
        }
        .hero-chip-drift { animation: hero-chip-drift 7s ease-in-out infinite; }
        .hero-chip-pulse { animation: hero-chip-drift 7s ease-in-out infinite, hero-chip-pulse 14s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

function FloatingTicket(): React.JSX.Element {
  return (
    <div className="absolute right-[6%] top-[2%] hidden -rotate-3 select-none rounded-md border border-primary/40 bg-primary/5 px-3 py-2 shadow-md backdrop-blur-sm md:block ticket-bob">
      <div className="font-mono text-[9px] uppercase tracking-wider text-primary/80">
        stack ticket
      </div>
      <div className="mt-0.5 font-mono text-[10px] font-semibold">plan · ab3f9c2</div>
      <div className="mt-1 flex items-center gap-1 font-mono text-[8px] text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-emerald-500" />
        ready in <span className="font-semibold text-foreground">42s</span>
      </div>
      <style>{`
        @keyframes ticket-bob {
          0%, 100% { transform: rotate(-3deg) translateY(0); }
          50% { transform: rotate(-2deg) translateY(-6px); }
        }
        .ticket-bob { animation: ticket-bob 4.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
