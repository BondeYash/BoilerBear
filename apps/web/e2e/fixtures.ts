import AxeBuilder from '@axe-core/playwright';
import { test as base, expect } from '@playwright/test';

export interface E2EFixtures {
  makeAxe: (selector?: string) => AxeBuilder;
}

export const test = base.extend<E2EFixtures>({
  makeAxe: async ({ page }, use) => {
    await use((selector?: string) => {
      const builder = new AxeBuilder({ page }).withTags([
        'wcag2a',
        'wcag2aa',
        'wcag21a',
        'wcag21aa',
      ]);
      return selector ? builder.include(selector) : builder;
    });
  },
});

export { expect };
