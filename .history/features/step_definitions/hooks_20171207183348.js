const { defineSupportCode } = require("cucumber");
var createGoogleHomePage = require("../pages/googleHome");
var createGoogleResultsPage = require("../pages/googleResults");

defineSupportCode(function({ Before, After }) {
  Before(function() {
    this.homePage = createGoogleHomePage(this.driver);
    this.resultsPage = createGoogleResultsPage(this.driver);
  });

  After(function() {
    return this.driver.quit();
  });
});
