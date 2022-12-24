import { test } from "@playwright/test";
import { Login_Page } from "../Pages/page_login";
import { logger } from "../../configLogger";

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
    logger.debug("Exemplar creation");
    const loginPage = new Login_Page(page);
    logger.debug("Go to the Login page");
    await loginPage.goto();
    logger.debug("Fill Login filed");
    await loginPage.fillLogin("tomsmith1");
    logger.debug("Fill Password filed");
    await loginPage.fillPassword("SuperSecretPassword!1");
    logger.debug("Click Login button");
    await loginPage.clickLoginButton();
    logger.debug("Get Error message");
    await loginPage.flashNotOK(/Your username is invalid!.*/);
  });
});
