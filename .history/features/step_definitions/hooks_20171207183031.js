const { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, After }) {
  Before(function() {
    this.homePage = createGoogleHomePage(this.driver);
  });

  After(function() {
    return this.driver.quit();
  });
});
