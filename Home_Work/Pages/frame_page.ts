import { expect, Locator, Page } from "@playwright/test";

export class Frame_Page {
  readonly page: Page;
  readonly iFramePage: Locator;
  readonly elemInFrame: Locator;
  constructor(page: Page) {
    this.page = page;
    this.iFramePage = page.locator('[href="/iframe"]');
    this.elemInFrame = page.frames()[0].getByText("Your content goes here.");
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/frames");
  }
  async goToIFramePage() {
    await this.iFramePage.click();
  }
  async elemInFrameHasText(str: RegExp) {
    return expect(this.elemInFrame).toContainText(str);
  }
}
