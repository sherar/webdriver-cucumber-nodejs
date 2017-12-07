const { By, until, Key } = require("selenium-webdriver");
const GOOGLE_URL = "https://www.google.co.nz/";

module.exports = driver => {
  const check = regex => () =>
    driver
      .executeScript(() => document.querySelector("#resultStats").innerHTML)
      .then(innerHTML => {
        const result = innerHTML.match(new RegExp(regex));
        return result && parseInt(result[1].replace(/,/g, ""));
      });

  return {
    home: () => driver.get(GOOGLE_URL),
    search: query => {
      driver.findElement(By.name("q")).sendKeys(query);
      driver.findElement(By.name("q")).sendKeys(Key.ENTER);
    },
    checkResults: () => check("About (.*) results"),
    checkElapsedTime: () => check("((.*) seconds)")
  };
};
