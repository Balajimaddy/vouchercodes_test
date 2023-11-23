const { When, Then } = require("@cucumber/cucumber");
const { RestaurantVoucherPage } = require("../pageObjects/restaurantvoucherPage");

const restaurantVoucherPage = new RestaurantVoucherPage();

When(/^I search restaurant voucher for postcode "([^"]*)" from day "([^"]*)" for "([^"]*)" people$/, async (postcode, day, people) => {
     await restaurantVoucherPage.enterRestaurantVoucherDetails(postcode,day,people);
})

Then("I validate restaurants voucher are displayed as expected", async () => {
     await restaurantVoucherPage.validateRestaurantsVouchersDisplayed();
})