const { Given } = require("@cucumber/cucumber");
const { HomePage } = require("../pageObjects/homePage");

const homePage = new HomePage();

Given('I navigate to the {string} page under categories tab', async (subCategory) => {
    await homePage.navigateToCategories(subCategory);
});

