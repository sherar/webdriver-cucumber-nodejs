const {defineSupportCode} = require('cucumber');
const createGooglePage = require('../pages/googlePage');

defineSupportCode(function({Before, After}) {
  Before(function () {
    const googlePage = createGooglePage(this.driver);
    googlePage.go();
  });

  After(function() {
    return this.driver.quit();
  });
});
