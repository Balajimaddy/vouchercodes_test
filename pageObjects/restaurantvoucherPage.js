const { expect } = require('@playwright/test');
const { BasePage } = require('./basePage');
const { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);

class RestaurantVoucherPage extends BasePage {
    locators= {
        postCodeSelect : "#google-autocomplete",
        postCodeDropDown: ".pac-item",
        daySelect: "[name='day-select']",
        peopleSelect: "[name='people-select']",
        findRestaurantsVoucherButton: "[data-qa='el:findRestaurantsVoucherButton']",
        restaurantVoucherList: "[id^=offer-]",
        noOfferHeading: "[data-qa='el:infoBannerTitle']"
    }
    
    //Search voucher codes for the specified postcode day and people
    async enterRestaurantVoucherDetails(postcode, day, people){ 
        await page.waitForLoadState("networkidle")
        expect(page.url()).toContain('restaurant-vouchers.html');
        await this.waitForElementVisible(this.locators.postCodeSelect);
        await page.fill(this.locators.postCodeSelect, postcode);
        await page.locator(this.locators.postCodeDropDown).filter({ hasText: postcode }).click();
        await page.locator(this.locators.daySelect).selectOption(daySelect(day));
        await page.locator(this.locators.peopleSelect).selectOption(people);
    
        const voucherButton  = await page.waitForSelector(this.locators.findRestaurantsVoucherButton);
        await voucherButton.click();
        await page.waitForLoadState();
        //await page.waitForURL(/.*\/restaurant-vouchers\/search$/)
        expect(page.url()).toContain("restaurant-vouchers/search", { timeout: 10000 })
        
    }
    //Validate the voucher codes are displayed
    async validateRestaurantsVouchersDisplayed() {
        //expect(page.url()).toContain('restaurant-vouchers/search');
        const restVoucherListCount = await page.locator(this.locators.restaurantVoucherList).count()
        expect(restVoucherListCount).toBeGreaterThan(0);

        const voucherListFirstButton =  await page.locator(this.locators.restaurantVoucherList).nth(0).locator('button');
        const voucherListButtonText = await voucherListFirstButton.textContent();
        if(voucherListButtonText == "Get CodeTXN"){
            await expect(page.locator(this.locators.noOfferHeading)).toHaveText("Sorry, we couldn't find any offers that match your criteria");
            await expect(page.locator(this.locators.restaurantVoucherList).nth(0).locator('button')).toHaveText('Get CodeTXN', { timeout: 10000 });
        }  else {
                   
        await expect(page.locator(this.locators.restaurantVoucherList).nth(0).locator('button')).toHaveText('Get Voucher', { timeout: 10000 });
        }
    }

}
//Converts day argument 2 to 7 to date format LongWeekDay date shortYear
daySelect = (day) => {

    if(day.toLowerCase() === "any" || day.toLowerCase() === "today" || day.toLowerCase() === "tomorrow" ) {
        return day;
    } else {
        const currentDate = new Date();
        const test = currentDate.setDate(currentDate.getDate() + Number(day));
        const testDate = new Date(test).toDateString();
        const suffix = ["st", "nd", "rd", "th"];
        const date = new Date(testDate + " 0:0:0");
        
        day = date.toLocaleDateString('en-Uk', {day: "numeric"})
        dateString = date.toLocaleString("en-UK", {
            weekday: "long",
            month: "short"
        });

        const [month,weekday] = dateString.split(' ')
        return `${weekday} ${day}${suffix[day < 4 ? day - 1 : 3]} ${month}`;
    }
}

module.exports = { RestaurantVoucherPage }