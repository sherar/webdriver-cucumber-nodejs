const { defineSupportCode } = require("cucumber");
var createGoogleHomePage = require("../pages/googleHome");

defineSupportCode(function({ Before, After }) {
  Before(function() {
    this.homePage = createGoogleHomePage(this.driver);
  });

  After(function() {
    return this.driver.quit();
  });
});
