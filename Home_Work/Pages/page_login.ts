import { expect, Locator, Page } from "@playwright/test";

export class Login_Page {
  readonly page: Page;
  readonly loginField: Locator;
  readonly passwordField: Locator;
  readonly flashSuccess: Locator;
  readonly flashFailed: Locator;
  readonly loginButton: Locator;
  readonly logoutButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.loginField = page.locator('[id="username"]');
    this.passwordField = page.locator('[id="password"]');
    this.flashSuccess = page.locator('[class="flash success"]');
    this.flashFailed = page.locator('[class="flash error"]');
    this.loginButton = page.locator('[type="submit"]');
    this.logoutButton = page.locator('[href="/logout"]');
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }
  async fillLogin(str: string) {
    await this.loginField.fill(str);
  }
  async fillPassword(str: string) {
    await this.passwordField.fill(str);
  }
  async clickLoginButton() {
    await this.loginButton.click();
  }
  async clickLogoutButton() {
    await this.logoutButton.click();
  }
  async flashOK(str: RegExp) {
    return expect(this.flashSuccess).toHaveText(str);
  }
  async flashNotOK(str: RegExp) {
    return expect(this.flashFailed).toHaveText(str);
  }
}
