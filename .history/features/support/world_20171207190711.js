require("chromedriver");
var webdriver = require("selenium-webdriver");
var { defineSupportCode } = require("cucumber");

function CustomWorld() {
  this.driver = new webdriver.Builder().forBrowser("chrome").build();

  //Funtion to get all values from fromCurrency and toCurrency field
  //And then comparing to define value and getting that value
}

defineSupportCode(function({ setWorldConstructor }) {
  setWorldConstructor(CustomWorld);
});
