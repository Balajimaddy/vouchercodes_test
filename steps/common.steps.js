const { Given } = require('@cucumber/cucumber');
const { BasePage } = require('../pageObjects/basePage');

Given('I launch the application', async () => {
    const basePage = new BasePage(this.page);
    await basePage.navigateToHomePage();
});