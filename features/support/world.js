require("chromedriver");
var webdriver = require("selenium-webdriver");
var { defineSupportCode } = require("cucumber");

function CustomWorld() {
  this.driver = new webdriver.Builder().forBrowser("chrome").build();
}

defineSupportCode(function({ setWorldConstructor }) {
  setWorldConstructor(CustomWorld);
});
