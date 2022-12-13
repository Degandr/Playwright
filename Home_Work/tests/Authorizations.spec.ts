import { test } from "@playwright/test";
import { Login_Page } from "../Pages/page_login";

test.describe("Authorizations", () => {
  test("Valid authorization", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto();
    await loginPage.fillLogin("tomsmith");
    await loginPage.fillPassword("SuperSecretPassword!");
    await loginPage.clickLoginButton();
    await loginPage.flashOK(/You logged into a secure area!.*/);
    await loginPage.clickLogoutButton();
    await loginPage.flashOK(/You logged out of the secure area!.*/);
  });

  test("Invalid authorization", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto();
    await loginPage.fillLogin("tomsmith1");
    await loginPage.fillPassword("SuperSecretPassword!1");
    await loginPage.clickLoginButton();
    await loginPage.flashNotOK(/Your username is invalid!.*/);
  });
});
