// import { Builder, Browser, WebDriver, By, WebElement, until } from "selenium-webdriver";
//
// import Chrome from "selenium-webdriver/chrome";
// import { path } from "chromedriver";
//
// async function authorization() {
//   const service = new Chrome.ServiceBuilder(path);
//   const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
//   await driver.manage().window().minimize();
//   await driver.get("https://the-internet.herokuapp.com/login");
//   const login: WebElement = await driver.findElement(By.id("username"));
//   await login.sendKeys("tomsmith");
//   const passwd: WebElement = await driver.findElement(By.id("password"));
//   await passwd.sendKeys("SuperSecretPassword!");
//   await driver.findElement(By.className("radius")).click();
//   await driver.wait(until.elementLocated(By.className("flash success")), 1000);
//   const text = await driver.findElement(By.className("flash success")).getText();
//   if (text.slice(0, text.length - 2) === "You logged into a secure area!") {
//     console.log("Login Successful");
//     await driver.findElement(By.css('[href="/logout"]')).click();
//     await driver.wait(until.elementLocated(By.className("flash success")), 1000);
//     const text2 = await driver.findElement(By.className("flash success")).getText();
//     if (text2.slice(0, text2.length - 2) === "You logged out of the secure area!") {
//       console.log("Logout Successful");
//       await driver.quit();
//     } else {
//       console.log("Logout Unsuccessful");
//       await driver.quit();
//     }
//   } else {
//     console.log("Login Unsuccessful");
//     await driver.quit();
//   }
// }
//
// authorization();
//
// async function isSelectedChekbox() {
//   const service = new Chrome.ServiceBuilder(path);
//   const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
//   await driver.manage().window().minimize();
//   await driver.get("https://the-internet.herokuapp.com/checkboxes");
//   const checkbox: WebElement = await driver.findElement(By.xpath('(//*/form/input[@type="checkbox"])[2]'));
//   if (await checkbox.isSelected()) {
//     console.log("Checkbox is selected");
//     await driver.quit();
//   } else {
//     console.log("Checkbox isn't selected");
//     await driver.quit();
//   }
// }
//
// isSelectedChekbox();
//
// async function isSelectedDropdown() {
//   const service = new Chrome.ServiceBuilder(path);
//   const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
//   await driver.manage().window().minimize();
//   await driver.get("https://the-internet.herokuapp.com/dropdown");
//   const dropDownOption: WebElement = await driver.findElement(
//     By.xpath('//*/div/select[@id="dropdown"]/option[@value="1"]'),
//   );
//   await dropDownOption.click();
//   if (await dropDownOption.isSelected()) {
//     console.log("Dropdown option is selected");
//     await driver.quit();
//   } else {
//     console.log("Dropdown option isn't selected");
//     await driver.quit();
//   }
// }
//
// isSelectedDropdown();
//
// async function checkBoxRemoving() {
//   const service = new Chrome.ServiceBuilder(path);
//   const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
//   await driver.manage().window().minimize();
//   await driver.get("https://the-internet.herokuapp.com/dynamic_controls");
//   const removeButton: WebElement = await driver.findElement(By.xpath('(//*/button[@type="button"])[1]'));
//   const checkbox: WebElement = await driver.findElement(By.xpath('//*/input[@label="blah"]'));
//   if ((await removeButton.isEnabled()) && (await checkbox.isDisplayed())) {
//     console.log("Button and CheckBox look good");
//     await removeButton.click();
//     if (!(await removeButton.isEnabled())) {
//       console.log("CheckBox removing in progress");
//     } else {
//       console.log("Dropdown option isn't selected");
//       await driver.quit();
//     }
//   } else {
//     console.log("Dropdown option isn't selected");
//     await driver.quit();
//   }
//   await driver.sleep(6000);
//   const text = await driver.findElement(By.xpath('//*/p[@id="message"]')).getText();
//   if (text === "It's gone!") {
//     console.log("All is OK. Checkbox was removed");
//     await driver.quit();
//   } else {
//     console.log("Something went wrong");
//     await driver.quit();
//   }
// }
//
// checkBoxRemoving();
//
// async function checkFrame() {
//   const service = new Chrome.ServiceBuilder(path);
//   const driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
//   await driver.manage().window().minimize();
//   await driver.get("https://the-internet.herokuapp.com/frames");
//   await driver.findElement(By.css('[href="/iframe"]')).click();
//   await driver.wait(until.elementLocated(By.id("content")), 6000);
//   await driver.switchTo().frame(driver.findElement(By.xpath('//*/iframe[@id="mce_0_ifr"]')));
//   await driver.sleep(2000);
//   const inputField: WebElement = await driver.findElement(By.xpath('//*/body[@id="tinymce"]/*'));
//   const textFromIFrame = await inputField.getText();
//   if (textFromIFrame === "Your content goes here.") {
//     console.log(`Text form iFrame is: ${textFromIFrame}`);
//     await driver.quit();
//   } else {
//     console.log("Something went wrong");
//     await driver.quit();
//   }
// }
//
// checkFrame();
