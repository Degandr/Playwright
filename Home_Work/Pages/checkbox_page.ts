import { expect, Locator, Page } from "@playwright/test";

export class Checkbox_Page {
  readonly page: Page;
  readonly checkbox_1: Locator;
  readonly checkbox_2: Locator;
  constructor(page: Page) {
    this.page = page;
    this.checkbox_1 = page.locator('(//*/form/input[@type="checkbox"])[1]');
    this.checkbox_2 = page.locator('(//*/form/input[@type="checkbox"])[2]');
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/checkboxes");
  }
  async checkBox_1_State(state: boolean) {
    return expect(this.checkbox_1).toBeChecked({ checked: state });
  }
  async checkBox_2_State(state: boolean) {
    return expect(this.checkbox_2).toBeChecked({ checked: state });
  }
  async clickFirstCheckBox() {
    await this.checkbox_1.click();
  }
  async clickSecondCheckBox() {
    await this.checkbox_2.click();
  }
}
