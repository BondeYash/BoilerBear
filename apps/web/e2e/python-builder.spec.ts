import { expect, test } from './fixtures';

test.describe('python builder flow', () => {
  test('user can pick Python → FastAPI → ruff and copy uv command', async ({ page }) => {
    await page.goto('/builder');

    await expect(page.getByRole('heading', { name: 'Stack builder' })).toBeVisible();

    // Step 1: Basics — flip language to Python.
    // Confirm dialog only fires when modules are non-empty; default is empty, so no prompt.
    await page.getByRole('radio', { name: 'Python' }).click();
    await expect(page.getByRole('button', { name: 'uv' })).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('button', { name: 'Next', exact: true }).click();

    // Step 2: Framework — should default to FastAPI (LANGUAGE_DEFAULTS).
    await expect(page.getByRole('heading', { name: 'Pick a base framework' })).toBeVisible();
    await expect(page.getByRole('button', { name: /FastAPI/ })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    await page.getByRole('button', { name: 'Next', exact: true }).click();

    // Step 3: Modules — pick Ruff (lint).
    await expect(page.getByRole('heading', { name: 'Select modules' })).toBeVisible();
    await page.getByRole('tab', { name: 'Lint' }).click();
    await page.getByRole('switch', { name: /Toggle Ruff/i }).click();
    await page.getByRole('button', { name: 'Next', exact: true }).click();

    // Step 4: Review.
    await expect(page.getByRole('heading', { name: 'Review plan' })).toBeVisible();
    await page.getByRole('button', { name: 'Next', exact: true }).click();

    // Step 5: Generate — the bash one-liner should add fastapi via uv.
    await expect(page.getByRole('heading', { name: 'Generate' })).toBeVisible();
    const command = page.locator('pre').first();
    await expect(command).toContainText('uv init my-app');
    await expect(command).toContainText('uv add fastapi==');
    await expect(command).toContainText('uv add --dev ruff==');
  });
});
