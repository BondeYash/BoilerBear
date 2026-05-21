import { expect, test } from './fixtures';

test.describe('share view', () => {
  test('renders a shared plan with install command from URL only', async ({ page }) => {
    // Build a plan via builder, then capture the share URL.
    await page.goto('/builder');
    await page.getByRole('button', { name: 'Next', exact: true }).click(); // basics
    await page.getByRole('button', { name: 'Next', exact: true }).click(); // framework
    const tw = page.getByRole('switch', { name: /Toggle Tailwind CSS/i });
    await tw.click();
    await expect(tw).toBeChecked();
    await page.waitForTimeout(400);
    const hash = new URL(page.url()).searchParams.get('s')!;
    expect(hash.length).toBeGreaterThan(0);

    await page.goto(`/s/${hash}`);
    await expect(page.getByRole('heading', { name: 'my-app' })).toBeVisible();
    await expect(page.getByText('Install command')).toBeVisible();
    await expect(page.locator('pre')).toContainText("bash -c '");
  });

  test('garbage hash returns 404', async ({ page }) => {
    const response = await page.goto('/s/not-a-real-hash');
    expect(response?.status()).toBe(404);
  });
});
