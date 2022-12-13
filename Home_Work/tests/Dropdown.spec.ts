import { test } from "@playwright/test";
import { Dropdown_Page } from "../Pages/dropdown_page";

test.describe("Dropdown", () => {
  test("Dropdown checking", async ({ page }) => {
    const dropdownPage = new Dropdown_Page(page);
    await dropdownPage.goto();
    await dropdownPage.checkDefaultOptionIsDisabled();
    await dropdownPage.checkDefaultOptionText(/Please select an option.*/);
    await dropdownPage.selectFirstOptionInDropdown();
    await dropdownPage.checkFirstOptionAfterFirstWasSelected();
    await dropdownPage.checkSecondOptionAfterFirstWasSelected();
    await dropdownPage.selectSecondOptionInDropdown();
    await dropdownPage.checkFirstOptionAfterSecondWasSelected();
    await dropdownPage.checkSecondOptionAfterSecondWasSelected();
  });
});
