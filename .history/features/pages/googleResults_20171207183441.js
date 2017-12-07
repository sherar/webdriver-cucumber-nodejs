const { By, until, Key } = require("selenium-webdriver");

module.exports = driver => ({
  go: () => driver.get(GOOGLE_URL),
  search: driver => {
    driver
      .executeScript(function() {
        return document.querySelector("#resultStats").innerHTML;
      })
      .then(function(innerHTML) {
        var r = innerHTML.match(new RegExp("About (.*) results"));
        if (r) var intResults = parseInt(r[1].replace(/,/g, ""));
        expect(intResults).to.be.above(1);
        next();
      });
  }
});
