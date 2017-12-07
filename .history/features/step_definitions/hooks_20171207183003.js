const { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, After }) {
  Before(function() {});

  After(function() {
    return this.driver.quit();
  });
});
