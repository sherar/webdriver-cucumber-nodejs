const { By, until, Key } = require("selenium-webdriver");
const GOOGLE_URL = "https://www.google.co.nz/";

module.exports = driver => ({
  home: () => driver.get(GOOGLE_URL),
  search: query => {
    driver.findElement(By.name("q")).sendKeys(query);
    driver.findElement(By.name("q")).sendKeys(Key.ENTER);
  },
  results:
});
