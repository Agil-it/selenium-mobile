const { Builder, By, Key, promise, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function execute() {
  const driver = new Builder().forBrowser("firefox").build();

  await driver.get("http://localhost:8100/")
  
  await driver.findElement(By.id("username")).sendKeys("julio", Key.RETURN);
  await driver.findElement(By.id("password")).sendKeys("julio123", Key.RETURN);  
  await (await driver.findElement(By.id("logon"))).click();

  // await element(by.css('ion-input[name="username"] input')).sendKeys('91296754')
  // await element(by.css('.logon')).click();
}

execute();


