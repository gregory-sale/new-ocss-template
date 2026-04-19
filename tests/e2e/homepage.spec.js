
const { test, expect } = require('@playwright/test');
test.describe('Homepage', () => {
  test('has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Oxford & Cambridge Sailing Society/);
  });
  test('has navigation', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav a[href="/news/"]')).toBeVisible();
    await expect(page.locator('nav a[href="/info/"]')).toBeVisible();
  });
});
