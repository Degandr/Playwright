import { expect, Locator, Page } from "@playwright/test";

const oneSecond = 1000;

export class Dropdown_Page {
  readonly page: Page;
  readonly option_default: Locator;
  readonly option_1: Locator;
  readonly option_2: Locator;
  readonly dropdown: Locator;
  constructor(page: Page) {
    this.page = page;
    this.option_default = page.locator('//*[@id="dropdown"]/option[@selected="selected"]');
    this.option_1 = page.locator('//*/div/select[@id="dropdown"]/option[@value="1"]');
    this.option_2 = page.locator('//*/div/select[@id="dropdown"]/option[@value="2"]');
    this.dropdown = page.locator('[id="dropdown"]');
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/dropdown");
  }
  async checkDefaultOptionIsDisabled() {
    return expect(this.option_default).toBeDisabled({ timeout: +oneSecond });
  }
  async checkDefaultOptionText(str: RegExp) {
    return expect(this.option_default).toHaveText(str);
  }
  async selectFirstOptionInDropdown() {
    await this.dropdown.selectOption({ value: "1" });
  }
  async selectSecondOptionInDropdown() {
    await this.dropdown.selectOption({ value: "2" });
  }
  async checkFirstOptionAfterFirstWasSelected() {
    return expect(this.option_1).toHaveAttribute("selected", "selected");
  }
  async checkSecondOptionAfterFirstWasSelected() {
    return expect(this.option_2).toBeChecked({ checked: false });
  }
  async checkFirstOptionAfterSecondWasSelected() {
    return expect(this.option_1).toBeChecked({ checked: false });
  }
  async checkSecondOptionAfterSecondWasSelected() {
    return expect(this.option_2).toHaveAttribute("selected", "selected");
  }
}
