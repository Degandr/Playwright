import { test, expect } from "@playwright/test";

test.describe("Dropdown", () => {
  test("Dropdown checking", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    const option_default = page.locator('//*[@id="dropdown"]/option[@selected="selected"]');
    const option_1 = page.locator('//*/div/select[@id="dropdown"]/option[@value="1"]');
    const option_2 = page.locator('//*/div/select[@id="dropdown"]/option[@value="2"]');
    await expect(option_default).toBeDisabled({ timeout: 1000 });
    await expect(option_default).toHaveText(/Please select an option.*/);
    const dropdown = page.locator('[id="dropdown"]');
    await dropdown.selectOption({ value: "1" });
    await expect(option_1).toHaveAttribute("selected", "selected");
    await expect(option_2).toBeChecked({ checked: false });
    await dropdown.selectOption({ value: "2" });
    await expect(option_1).toBeChecked({ checked: false });
    await expect(option_2).toHaveAttribute("selected", "selected");
  });
});
