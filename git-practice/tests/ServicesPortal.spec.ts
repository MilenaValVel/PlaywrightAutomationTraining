import { test, expect } from '@playwright/test';

test('Playwright Training Portal website has correct title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/City Services Portal/);
});

test('Login page has correct heading and Login button', async ({ page }) => {
  await page.goto('/');

  // Verify the heading is visible
  const heading = page.getByRole('heading', { name: 'City Services Login' });
  await expect(heading).toBeVisible();

  // Verify the Login button is visible
  const loginButton = page.getByTestId('cs-login-submit');
  await expect(loginButton).toBeVisible();
});