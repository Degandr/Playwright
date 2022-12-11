import { test, expect } from "@playwright/test";

test.describe("Frame", () => {
  test("Get text from Frame", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/frames");
    await page.locator('[href="/iframe"]').click();
    const frame1 = page.frames();
    if (frame1 != null) {
      const elemInFrame = await frame1[0].getByText("Your content goes here.");
      await expect(elemInFrame).toContainText(/Your content goes here.*/);
    } else throw new Error("No such Frame");
  });
});
