var webdriver = require('selenium-webdriver'), By = webdriver.By, until = webdriver.until;

var capabilities = {
    browserName: 'firefox',
};

driver = new webdriver
    .Builder()
    .withCapabilities(capabilities)
    .build();

driver.get('http://advantageonlineshopping.com/#').then(function() {
    console.log("open Online Shopping web page opened");
});

driver.quit();