import { test } from "@playwright/test";
import { Checkbox_Page } from "../Pages/checkbox_page";

test.describe("Checkbox", () => {
  test("Checkbox checking", async ({ page }) => {
    const checkBoxPage = new Checkbox_Page(page);
    await checkBoxPage.goto();
    await checkBoxPage.checkBox_1_State(false);
    await checkBoxPage.checkBox_2_State(true);
    await checkBoxPage.clickFirstCheckBox();
    await checkBoxPage.clickSecondCheckBox();
    await checkBoxPage.checkBox_1_State(true);
    await checkBoxPage.checkBox_2_State(false);
  });
});
