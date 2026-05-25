import { expect, test } from './fixtures';

test.describe('builder flow', () => {
  test('user can pick a stack and reach the install command', async ({ page }) => {
    await page.goto('/builder');

    await expect(page.getByRole('heading', { name: 'Stack builder' })).toBeVisible();

    // Step 1: Basics — name + pm preset already fine. Move on.
    await page.getByRole('button', { name: 'Next', exact: true }).click();

    // Step 2: Framework — keep default Vite (already selected). Move on.
    await expect(page.getByRole('heading', { name: 'Pick a base framework' })).toBeVisible();
    await page.getByRole('button', { name: 'Next', exact: true }).click();

    // Step 3: Modules — pick tailwindcss.
    await expect(page.getByRole('heading', { name: 'Select modules' })).toBeVisible();
    const tailwindToggle = page.getByRole('switch', { name: /Toggle Tailwind CSS/i });
    await tailwindToggle.click();
    await expect(tailwindToggle).toBeChecked();
    await page.getByRole('button', { name: 'Next', exact: true }).click();

    // Step 4: Review.
    await expect(page.getByRole('heading', { name: 'Review plan' })).toBeVisible();
    await expect(page.getByText('Install order')).toBeVisible();
    await page.getByRole('button', { name: 'Next', exact: true }).click();

    // Step 5: Generate.
    await expect(page.getByRole('heading', { name: 'Generate' })).toBeVisible();
    const command = page.locator('pre').first();
    await expect(command).toContainText("bash -c '");
    await expect(command).toContainText('vite@latest');
    await expect(command).toContainText('tailwindcss');

    // Switch to Windows (PowerShell) sub-tab and verify pwsh-flavoured output.
    await page.getByRole('tab', { name: /Windows \(PowerShell\)/ }).click();
    const pwshCommand = page.locator('pre').first();
    await expect(pwshCommand).toContainText('pwsh -NoProfile -Command "');
    await expect(pwshCommand).toContainText('Set-Content');
  });

  test('share URL restores the exact plan on reload', async ({ page, context }) => {
    await page.goto('/builder');
    await page.getByRole('button', { name: 'Next', exact: true }).click(); // basics → framework
    await page.getByRole('button', { name: 'Next', exact: true }).click(); // framework → modules
    await page.getByRole('tab', { name: 'State' }).click();
    const zustandToggle = page.getByRole('switch', { name: /Toggle Zustand/i });
    await zustandToggle.click();
    await expect(zustandToggle).toBeChecked();

    // URL sync is debounced 250ms; wait for the final state to settle.
    await page.waitForTimeout(400);
    const sharedUrl = page.url();
    expect(sharedUrl).toContain('?s=');

    const fresh = await context.newPage();
    await fresh.goto(sharedUrl);
    await expect(fresh.getByRole('heading', { name: 'Stack builder' })).toBeVisible();
    await fresh.getByRole('button', { name: 'Next', exact: true }).click(); // basics
    await fresh.getByRole('button', { name: 'Next', exact: true }).click(); // framework
    await expect(fresh.getByRole('heading', { name: 'Select modules' })).toBeVisible();
    await fresh.getByRole('tab', { name: 'State' }).click();
    await expect(fresh.getByRole('switch', { name: /Toggle Zustand/i })).toBeChecked();
  });

  test('selecting two conflicting UI libs shows a conflict warning', async ({ page }) => {
    await page.goto('/builder');
    await page.getByRole('button', { name: 'Next', exact: true }).click(); // basics
    await page.getByRole('button', { name: 'Next', exact: true }).click(); // framework
    await page.getByRole('tab', { name: 'Styling' }).click();
    await page.getByRole('switch', { name: /Toggle Tailwind CSS/i }).click();
    await page.getByRole('tab', { name: 'Components' }).click();
    await page.getByRole('switch', { name: /Toggle shadcn\/ui/i }).click();
    await page.getByRole('switch', { name: /Toggle Material UI/i }).click();

    const conflictBanner = page.getByText('[conflict]', { exact: false }).first();
    await expect(conflictBanner).toBeVisible();
  });
});
