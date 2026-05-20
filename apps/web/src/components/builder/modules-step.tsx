'use client';

import { getRegistry } from '@/lib/registry';
import { useBuilder } from '@/lib/store/builder';
import type { Category, ModuleManifest } from '@boilerbear/core';
import { detectConflicts, recommendAdditions } from '@boilerbear/core';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@boilerbear/ui/components/tabs';
import * as React from 'react';
import { ConflictBanner } from './conflict-banner';
import { ModuleCard } from './module-card';
import { SuggestionList } from './suggestion-list';

const VISIBLE_CATEGORIES: ReadonlyArray<{ id: Category; label: string }> = [
  { id: 'styling', label: 'Styling' },
  { id: 'components', label: 'Components' },
  { id: 'state', label: 'State' },
  { id: 'data', label: 'Data' },
  { id: 'routing', label: 'Routing' },
  { id: 'auth', label: 'Auth' },
  { id: 'testing', label: 'Testing' },
  { id: 'lint', label: 'Lint' },
  { id: 'ci', label: 'CI' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'misc', label: 'Misc' },
];

export function ModulesStep(): React.JSX.Element {
  const plan = useBuilder((s) => s.plan);
  const toggleModule = useBuilder((s) => s.toggleModule);
  const registry = React.useMemo(() => getRegistry(), []);
  const selected = React.useMemo(() => new Set(plan.modules), [plan.modules]);

  const conflicts = React.useMemo(() => detectConflicts(plan, registry), [plan, registry]);
  const suggestions = React.useMemo(() => recommendAdditions(plan, registry), [plan, registry]);

  const categories = React.useMemo(() => {
    const map = new Map<Category, ModuleManifest[]>();
    for (const cat of VISIBLE_CATEGORIES) {
      const list = registry
        .byCategory(cat.id)
        .filter((m) => m.appliesTo.length === 0 || m.appliesTo.includes(plan.base));
      if (list.length > 0) map.set(cat.id, list as ModuleManifest[]);
    }
    return map;
  }, [registry, plan.base]);

  const tabs = VISIBLE_CATEGORIES.filter((c) => categories.has(c.id));
  const firstTab = tabs[0]?.id ?? 'styling';

  return (
    <div className="grid gap-4">
      <div>
        <h2 className="text-lg font-semibold">Select modules</h2>
        <p className="text-sm text-muted-foreground">
          Toggle libraries. Conflicts and missing requirements are flagged below.
        </p>
      </div>

      <ConflictBanner warnings={conflicts.warnings} />

      <Tabs defaultValue={firstTab}>
        <TabsList className="flex flex-wrap h-auto">
          {tabs.map((cat) => (
            <TabsTrigger key={cat.id} value={cat.id}>
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((cat) => {
          const items = categories.get(cat.id) ?? [];
          return (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((m) => (
                  <ModuleCard
                    key={m.id}
                    manifest={m}
                    selected={selected.has(m.id)}
                    onToggle={() => toggleModule(m.id)}
                  />
                ))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>

      <SuggestionList suggestions={suggestions} />
    </div>
  );
}
