import { test } from "@playwright/test";
import { Dynamic_Control_Page } from "../Pages/dynamic_control_page";

test.describe("Dynamic Controls", () => {
  test("CheckBox Removing", async ({ page }) => {
    const dynamicControl = new Dynamic_Control_Page(page);
    await dynamicControl.goto();
    await dynamicControl.checkBoxDefault();
    await dynamicControl.removeButtonDefault();
    await dynamicControl.removeButtonClick();
    await dynamicControl.removeButtonAfterClick();
    await dynamicControl.textAfterRemoving(/It's gone!.*/);
  });
});
