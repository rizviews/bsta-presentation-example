const homePageElements = require('../page-elements/homepage.elements')
/**
 * sub page containing specific selectors and methods for a specific page
 */
module.exports = {
    isHomepageLoaded(){
        $('.product_label').waitForDisplayed({timeout: 15000});
        expect($('.product_label').isExisting()).toBeTruthy();
    }
}