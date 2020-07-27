const loginPageElements = require('../page-elements/login.elements');

/**
 * sub page containing specific selectors and methods for a specific page
 */
module.exports =  {
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        $('#user-name').setValue(username);
        $('#password').setValue(password);
        $('#login-button').click(); 
    },

    isLoginPage() {
        expect($('#login-button').isExisting()).toBeTruthy();

    },
    
}
