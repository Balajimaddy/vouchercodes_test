const {RestaurantVoucherPage} = require("./page_objects/RestaurantVoucherPage");

class PageConstants {
    constructor(page) {
        this.restauranVoucherPage = new RestaurantVoucherPage(page);
    }
}
    
module.exports = { PageConstants };