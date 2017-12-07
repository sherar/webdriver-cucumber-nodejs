require("chromedriver");
var webdriver = require("selenium-webdriver");
var { defineSupportCode } = require("cucumber");

function CustomWorld() {
  this.driver = new webdriver.Builder().forBrowser("chrome").build();

  //Funtion to get all values from fromCurrency and toCurrency field
  //And then comparing to define value and getting that value
  this.selectByText = function(id, currency) {
    var desiredOption;
    return this.driver
      .findElement({ id: id })
      .then(function(elm) {
        elm.click();
        return elm.findElements({ css: "option" });
      })
      .then(function(options) {
        return webdriver.promise.filter(options, function(element) {
          return element.getText().then(function(text) {
            if (text === currency) {
              desiredOption = element;
              return true;
            }
          });
        });
      })
      .then(function() {
        if (desiredOption) {
          desiredOption.click();
        }
      });
  };
  // Returns a promise that resolves to the element
  this.waitForElement = function(locator) {
    var condition = webdriver.until.elementLocated(locator);
    return this.driver.wait(condition);
  };
}

defineSupportCode(function({ setWorldConstructor }) {
  setWorldConstructor(CustomWorld);
});
