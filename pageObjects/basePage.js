const constant = require('../support/constant.json');
const { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);

class BasePage {
    //navigates to the Home Page
    async navigateToHomePage() {
        await page.goto(constant.baseURL);
    }
    //Wait until element is visible
    async waitForElementVisible(selector) {
        await page.waitForSelector(selector);
        await page.locator(selector).waitFor({ state: "visible" });
    }
}

module.exports = { BasePage }