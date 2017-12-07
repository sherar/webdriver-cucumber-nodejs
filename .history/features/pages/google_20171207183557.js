const { By, until, Key } = require("selenium-webdriver");
const GOOGLE_URL = "https://www.google.co.nz/";

module.exports = driver => ({
  home: () => driver.get(GOOGLE_URL),
  search: query => {
    driver.findElement(By.name("q")).sendKeys(query);
    driver.findElement(By.name("q")).sendKeys(Key.ENTER);
  },
  checkResults: () => {
    driver
      .executeScript(() => document.querySelector("#resultStats").innerHTML)
      .then(function(innerHTML) {
        var r = innerHTML.match(new RegExp("About (.*) results"));
        if (r) var intResults = parseInt(r[1].replace(/,/g, ""));
        expect(intResults).to.be.above(1);
        next();
      });
  }
});
