import { test, expect } from "@playwright/test";

test.describe("Dynamic Controls", () => {
  test("CheckBox Removing", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
    const checkbox = page.locator('//*/input[@label="blah"]');
    const removeButton = page.locator('(//*/button[@type="button"])[1]');
    await expect(checkbox).toBeVisible({ timeout: 1000 });
    await expect(removeButton).toBeEnabled({ timeout: 1000 });
    await removeButton.click();
    await expect(removeButton).toBeDisabled({ timeout: 1000 });
    const text = page.locator('//*/p[@id="message"]');
    await expect(text).toHaveText(/It's gone!.*/);
  });
});
