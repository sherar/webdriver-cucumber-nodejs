const { defineSupportCode } = require("cucumber");
var createGooglePage = require("../pages/google");

defineSupportCode(function({ Before, After }) {
  Before(function() {
    this.googlePage = createGooglePage(this.driver);
  });

  After(function() {
    return this.driver.quit();
  });
});
