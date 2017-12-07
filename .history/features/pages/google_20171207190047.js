const { By, until, Key } = require("selenium-webdriver");
const GOOGLE_URL = "https://www.google.co.nz/";
const ELAPSED_TIME_REGEX = /\((.*) seconds/;
const RESULTS_REGEX = /About (.*) results/;

const parseResults = value => parseInt(value[1].replace(/,/g, ""));
const parseElapsedTime = value => parseInt(value[1]);

module.exports = driver => {
  const check = (regex, parser) => () =>
    driver
      .executeScript(() => document.querySelector("#resultStats").innerHTML)
      .then(innerHTML => {
        const result = innerHTML.match(new RegExp(regex));
        return result && parser(result);
      });

  return {
    home: () => driver.get(GOOGLE_URL),
    search: query => {
      driver.findElement(By.name("q")).sendKeys(query);
      driver.findElement(By.name("q")).sendKeys(Key.ENTER);
    },
    checkResults: check(RESULTS_REGEX, parseResults),
    checkElapsedTime: check(ELAPSED_TIME_REGEX, parseElapsedTime)
  };
};