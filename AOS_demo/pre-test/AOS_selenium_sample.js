var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var assert = require('selenium-webdriver/testing/assert');

//Example for specifying values for input parameters from SRF UI
//Parameter names should be same as below
var categoryToFind = process.env.categoryToFind;    
var itemToFind = process.env.itemToFind;  
var expectedPrice = process.env.expectedPrice;
var seleniumAddress = rocess.env.SELENIUM_ADDRESS;
var srfClientId = process.env.SRF_CLIENT_ID;
var srfClientSecret = process.env.SRF_CLIENT_SECRET
var driver;

//In case if input parameters where not specified in SRF, default values will be used:
if (categoryToFind===undefined)
	categoryToFind="speakers";

if (itemToFind===undefined)
	itemToFind="Bose Soundlink Bluetooth Speaker III";
     
if (expectedPrice===undefined)
	expectedPrice="$269.99";

if (seleniumAddress===undefined)
    seleniumAddress = "";

describe('1st Describe', function () {
	before(function(done){                
		var capabilities = {
            browserName: 'chrome',
			SRF_CLIENT_ID: process.env.SRF_CLIENT_ID,
			SRF_CLIENT_SECRET: process.env.SRF_CLIENT_SECRET
		};
		driver = new webdriver
		.Builder()
		.withCapabilities(capabilities)
		.usingServer(process.env.SELENIUM_ADDRESS)
		.build();
        driver.get('http://advantageonlineshopping.com/#').then(function() {
        console.log("open Online Shopping web page");
        done();
        });
	});
});