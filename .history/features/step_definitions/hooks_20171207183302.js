const { defineSupportCode } = require("cucumber");
var createGoogleHomePage = require("../pages/googleHomePage");

defineSupportCode(function({ Before, After }) {
  Before(function() {
    this.homePage = createGoogleHomePage(this.driver);
  });

  After(function() {
    return this.driver.quit();
  });
});
