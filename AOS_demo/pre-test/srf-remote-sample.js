var webdriver = require('selenium-webdriver'),
proxy = require('selenium-webdriver/proxy');
By = webdriver.By,
until = webdriver.until;
var assert = require('selenium-webdriver/testing/assert');
var driver;

describe('DEMO Online Shopping Selenium', function () {
    this.timeout(60000);
    before(function(done){                
        var capabilities = {
            platform: "Windows 8.1",
            browserName: "chrome",
            //version: "58",//Instead of specific version number you can specify latest version:
            version: "latest",
            testName: "Demo_Burst_Test_Selenium_JS",
            resolution: "1366x768",
            //NOTE: Web AUT which is tested in this test changes it's UI elements dependents on resolution, in case if you will use higher resolution test will fail//Supported resolutions are: 800x600; 1024X768; 1280X1024
            SRF_CLIENT_ID: "t511780658_oauth2-r59KGnAQQhMfzYTlnpar@hpe.com",
            SRF_CLIENT_SECRET: "pskKNTcojAyDEpMpw1gS"
           };
           driver = new webdriver
           .Builder()
           .withCapabilities(capabilities)
           .usingServer("https://srf.saas.hpe.com/wd/hub/")
           //.setProxy(proxy.manual({""}))
           .build();
        driver.get('http://advantageonlineshopping.com/#').then(function() {
            console.log("open Online Shopping web page");
            done();
        });
    });
	
    it('should search required category', function (done) {
        driver
        .wait(until.elementLocated(By.xpath("//DIV[@id=\"mobileSearch\"]/INPUT[1]"), 5000))
        .then(function(searchFieldElement){
            searchFieldElement.sendKeys("speakers");
        })
        .then(()=>driver.findElement(By.css("#mobileSearch > #Layer_1")).click())
        .then(done);
    });
    
    it('should click on "Bose Soundlink Bluetooth Speaker III" in list of founded items', function (done) {
        var element = driver.findElement({partialLinkText:"Bose Soundlink Bluetooth Speaker III", tagName:'LI'});
        driver
        .actions() 
        .click(element)
        .perform();
        done();
    });
       
it('should add item into the cart',function(done){
 driver
 .wait(until.elementLocated(By.xpath("//DIV[@id=\"productProperties\"]/DIV/BUTTON[normalize-space()=\"ADD TO CART\"]"), 5000))
 .then(function(){
 driver
 .findElement(By.xpath("//DIV[@id=\"productProperties\"]/DIV/BUTTON[normalize-space()=\"ADD TO CART\"]"))
 .click()
 .then(done);
 });
});
	
it('should click on cart icon',function(done){
 driver      
  .findElement(By.xpath("//HEADER[1]/NAV[1]/UL[1]/LI[1]/A[1]"))
  .click()
  .then(done);
  }); 
	
  it('should check item price',function(done){
  var itemPrice = driver.findElement(By.css("div#shoppingCart > table > tfoot > tr:nth-child(1) > td:nth-child(2) > span:nth-child(2)"));
  itemPrice
  .getText()
  .then(function(elementText){
  assert(elementText).equals("$269.99");
  })
  .then(done);
  });
	
  it('should click on checkout button',function(done){
   driver      
  .findElement(By.xpath("//DIV[@id=\"shoppingCart\"]/TABLE[1]/TFOOT[1]/TR[2]/TD[1]/BUTTON[1]"))
  .click()
  .then(done);
  });
	
  it('should fill existing user details',function(done){   
   driver
   .findElement(By.xpath("//DIV[@id=\"orderPayment\"]/DIV[1]/DIV[1]/DIV[1]/SEC-FORM[1]/SEC-VIEW[1]/DIV[1]/LABEL[1]"))
   .click()
   .then(
    driver
    .findElement(By.xpath("//DIV[@id=\"orderPayment\"]/DIV[1]/DIV[1]/DIV[1]/SEC-FORM[1]/SEC-VIEW[1]/DIV[1]/INPUT[1]"))
    .sendKeys("SRF_DEMO")
    .then(
     driver
    .findElement(By.xpath("//DIV[@id=\"orderPayment\"]/DIV[1]/DIV[1]/DIV[1]/SEC-FORM[1]/SEC-VIEW[2]/DIV[1]/LABEL[1]"))
    .click()
    .then(
     driver
     .findElement(By.xpath("//DIV[@id=\"orderPayment\"]/DIV[1]/DIV[1]/DIV[1]/SEC-FORM[1]/SEC-VIEW[2]/DIV[1]/INPUT[1]"))
     .sendKeys("<password>")
     .then(done)
     )));
    }); 
	
    it('should click login button',function(done){
     driver
     .findElement(By.xpath("//DIV[@id=\"orderPayment\"]/DIV[1]/DIV[1]/DIV[1]/SEC-FORM[1]/SEC-SENDER[1]/A[1]"))
     .click()
     .then(done);
    }); 
	
    it('should check total price',function(done){
     var totalPrice = driver.findElement(By.css("div#userCart > div:nth-child(5) > label:nth-child(2) > span"));
     totalPrice
     .getText()
     .then(function(elementText){
      assert(elementText).equals("$269.99");
      })
     .then(done);
    }); 
	
    it('should click next button',function(done){
     driver
     .findElement(By.xpath("//DIV[@id=\"userSection\"]/DIV/DIV/BUTTON[normalize-space()=\"NEXT\"]"))
     .click()
     .then(done);
    });
	
    it('should specify user details for buying items',function(done){
	    
    driver
    .findElement(By.xpath("//DIV/SEC-FORM/SEC-VIEW/DIV/LABEL[normalize-space()=\"SafePay username\"]"))
    .click()
    .then(
    driver
    .findElement(By.css("div#paymentMethod > div > div:nth-child(3) > sec-form > sec-view:nth-child(1) > div > input"))
    .sendKeys('testTest')
    .then(
    driver
    .findElement(By.xpath("//DIV/SEC-FORM/SEC-VIEW/DIV/LABEL[normalize-space()=\"SafePay password\"]"))
    .click()
    .then(
    driver
     .findElement(By.css("div#paymentMethod > div > div:nth-child(3) > sec-form > sec-view:nth-child(2) > div > input"))
     .sendKeys('testTEST1234')
     .then(done)
     )));
    });
	
    it('should uncheck checkbox "save cahnges to profile"',function(done){
     driver
     .findElement(By.xpath("//DIV[2]/SEC-FORM[1]/DIV[1]/INPUT[1]"))
     .isSelected()
     .then(function(elementSelectedState){
      if (elementSelectedState)
      driver
      .findElement(By.xpath("//DIV[2]/SEC-FORM[1]/DIV[1]/INPUT[1]"))
      .click()
      .then(done); 
     });
    }); 
	
    it('should click on "Pay now" button',function(done){
    driver      
    .findElement(By.xpath("//DIV[2]/SEC-FORM[1]/DIV[2]/LABEL[1]/SEC-SENDER[1]/A[1]"))
    .click()
    .then(done);
   }); 
	
   it('should check price in order details',function(done){
	
     var totalPrice = driver.findElement(By.css("div#orderPaymentSuccess > div > div:nth-child(3) > div:nth-child(4) > label > a"));
     totalPrice
    .getText()
    .then(function(elementText){
    assert(elementText).equals("$269.99");
    })
   .then(done);                
  });
    
  after(function(done){   
  driver.quit().then(done);
 });
});