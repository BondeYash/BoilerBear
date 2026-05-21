import { expect, test } from './fixtures';

test.describe('accessibility', () => {
  test('landing page has no critical axe violations', async ({ page, makeAxe }) => {
    await page.goto('/');
    const results = await makeAxe().analyze();
    const critical = results.violations.filter((v) => v.impact === 'critical');
    expect(critical, JSON.stringify(critical, null, 2)).toEqual([]);
  });

  test('docs index + a doc page have no critical axe violations', async ({ page, makeAxe }) => {
    for (const route of ['/docs', '/docs/getting-started']) {
      await page.goto(route);
      const results = await makeAxe().analyze();
      const critical = results.violations.filter((v) => v.impact === 'critical');
      expect(
        critical,
        `Critical violations on ${route}:\n${JSON.stringify(critical, null, 2)}`,
      ).toEqual([]);
    }
  });

  test('builder page has no critical axe violations across steps', async ({ page, makeAxe }) => {
    await page.goto('/builder');
    await expect(page.getByRole('heading', { name: 'Stack builder' })).toBeVisible();

    const steps = ['Basics', 'Framework', 'Modules', 'Review', 'Generate'] as const;
    for (let i = 0; i < steps.length; i++) {
      if (i > 0) await page.getByRole('button', { name: 'Next', exact: true }).click();
      await page.getByRole('heading').first().waitFor();
      const results = await makeAxe().analyze();
      const critical = results.violations.filter((v) => v.impact === 'critical');
      expect(
        critical,
        `Critical violations on step "${steps[i]}":\n${JSON.stringify(critical, null, 2)}`,
      ).toEqual([]);
    }
  });
});
