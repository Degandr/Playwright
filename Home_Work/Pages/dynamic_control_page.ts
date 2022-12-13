import { expect, Locator, Page } from "@playwright/test";

const oneSecond = 1000;

export class Dynamic_Control_Page {
  readonly page: Page;
  readonly checkBox: Locator;
  readonly removeButton: Locator;
  readonly text: Locator;
  constructor(page: Page) {
    this.page = page;
    this.checkBox = page.locator('//*/input[@label="blah"]');
    this.removeButton = page.locator('(//*/button[@type="button"])[1]');
    this.text = page.locator('//*/p[@id="message"]');
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/dynamic_controls");
  }
  async checkBoxDefault() {
    return expect(this.checkBox).toBeVisible({ timeout: +oneSecond });
  }
  async removeButtonDefault() {
    return expect(this.removeButton).toBeEnabled({ timeout: +oneSecond });
  }
  async removeButtonClick() {
    await this.removeButton.click();
  }
  async removeButtonAfterClick() {
    return expect(this.removeButton).toBeDisabled({ timeout: +oneSecond });
  }
  async textAfterRemoving(str: RegExp) {
    return expect(this.text).toHaveText(str);
  }
}
