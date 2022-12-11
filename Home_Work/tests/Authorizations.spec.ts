import { test, expect } from "@playwright/test";

test.describe("Authorizations", () => {
  test("Valid authorization", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    const login = page.locator('[id="username"]');
    await login.fill("tomsmith");
    const password = page.locator('[id="password"]');
    await password.fill("SuperSecretPassword!");
    await page.locator('[type="submit"]').click();
    const flash = page.locator('[class="flash success"]');
    await expect(flash).toHaveText(/You logged into a secure area!.*/);
    await page.locator('[href="/logout"]').click();
    await expect(flash).toHaveText(/You logged out of the secure area!.*/);
  });

  test("Invalid authorization", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    const login = page.locator('[id="username"]');
    await login.fill("tomsmith1");
    const password = page.locator('[id="password"]');
    await password.fill("SuperSecretPassword!2");
    await page.locator('[type="submit"]').click();
    const flash = page.locator('[class="flash error"]');
    await expect(flash).toHaveText(/Your username is invalid!.*/);
  });
});
