const { When, Then, Given } = require('cucumber');

const loginPage = require('../../page-objects/login.page');
const homePage = require('../../page-objects/home.page');

Given(/^I am on the login page$/, () => {
    loginPage.isLoginPage();
});

When(/^I login with (\w+) and (.+)$/, (username, password) => {
    loginPage.login(username, password)
});

Then(/^I should see homepage$/, () => {
    homePage.isHomepageLoaded();
    //expect(SecurePage.flashAlert).toBeExisting();
    //expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

