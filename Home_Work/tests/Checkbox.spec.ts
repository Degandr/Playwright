import { test, expect } from "@playwright/test";

test.describe("Checkbox", () => {
  test("Checkbox checking", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const checkbox_1 = page.locator('(//*/form/input[@type="checkbox"])[1]');
    const checkbox_2 = page.locator('(//*/form/input[@type="checkbox"])[2]');
    await expect(checkbox_1).toBeChecked({ checked: false });
    await expect(checkbox_2).toBeChecked({ checked: true });
    await checkbox_1.click();
    await checkbox_2.click();
    await expect(checkbox_1).toBeChecked({ checked: true });
    await expect(checkbox_2).toBeChecked({ checked: false });
  });
});
