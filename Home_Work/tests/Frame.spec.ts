import { test } from "@playwright/test";
import { Frame_Page } from "../Pages/frame_page";

test.describe("Frame", () => {
  test("Get text from Frame", async ({ page }) => {
    const framePage = new Frame_Page(page);
    await framePage.goto();
    await framePage.goToIFramePage();
    await framePage.elemInFrameHasText(/Your content goes here.*/);
  });
});
