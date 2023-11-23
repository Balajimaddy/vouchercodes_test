const { BasePage } = require('./basePage');
const { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);

class HomePage extends BasePage {
    locators = {
        categoriesTab: "#categories-dialog",
        subCategoriesLink: "[data-qa='el:adminableCategoryText']"
    }
    //clicks any subcategories under Categories link 
    async navigateToCategories(subCategory){     
        await this.waitForElementVisible(this.locators.categoriesTab);
        await page.click(this.locators.categoriesTab);
        await page.locator(this.locators.subCategoriesLink).filter(({ hasText: subCategory.trim() })).click();
    }
}

module.exports = { HomePage }