const { defineSupportCode } = require("cucumber");
const createGooglePage = require("../pages/googlePage");

defineSupportCode(function({ Before, After }) {
  Before(function() {});

  After(function() {
    return this.driver.quit();
  });
});
