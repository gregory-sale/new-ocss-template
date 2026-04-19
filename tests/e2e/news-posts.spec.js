
const { test, expect } = require('@playwright/test');
test.describe('News Posts', () => {
  test('news page lists recent posts', async ({ page }) => {
    await page.goto('/news/');
    await expect(page.locator('.h-entry').first()).toBeVisible();
  });
});
