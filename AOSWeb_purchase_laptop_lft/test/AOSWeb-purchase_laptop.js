
var LFT = require('leanft');
var SDK = LFT.SDK;
var Web = LFT.Web;
var SAPUI5 = LFT.SAPUI5;
var whenDone = LFT.whenDone;
var verify = require('leanft/verify');

describe('demo',function(){
	var browser;

	before(function(done){
		LFT.init({});

		whenDone(done);
	});

	beforeEach(function(done){
		LFT.beforeTest();

		Web.Browser.launch(Web.BrowserType.Chrome).then(function(b){
			browser = b;
		});

		whenDone(done);
	});

	it('should work',function(done){
		browser.navigate("http://tinyurl.com/hpe-shop");

		var myAccountMyOrdersSign = browser.$(Web.Link({
				innerText: "My account My Orders Sign out ",
				tagName: "A"
			}));
		myAccountMyOrdersSign.click();

		var username = browser.$(Web.Element({
				innerText: "Username",
				tagName: "LABEL"
			}));
		username.click();

		var username1 = browser.$(Web.Edit({
				name: "username",
				tagName: "INPUT",
				type: "text"
			}));
		username1.setValue("Shahar");

		var password = browser.$(Web.Element({
				innerText: "Password",
				tagName: "LABEL"
			}));
		password.click();

		var password1 = browser.$(Web.Edit({
				name: "password",
				tagName: "INPUT",
				type: "password"
			}));
		password1.setSecure("4d0808322f23f9c94f8ee42543");

		var rememberMe = browser.$(Web.CheckBox({
				name: "remember_me",
				tagName: "INPUT",
				type: "checkbox"
			}));
		rememberMe.set(true);

		var signInBtnundefined = browser.$(Web.Button({
				buttonType: "button",
				name: "SIGN IN",
				tagName: "BUTTON"
			}));
		signInBtnundefined.click();

		var laptopsShopNow = browser.$(Web.Link({
				innerText: "LAPTOPS Shop Now ",
				tagName: "DIV"
			}));
		laptopsShopNow.click();

		var fetchimageimageId1250 = browser.$(Web.Image({
				alt: "",
				tagName: "IMG",
				type: "normal",
				index: 2
			}));
		fetchimageimageId1250.click();

		var saveToCart = browser.$(Web.Button({
				buttonType: "submit",
				name: "ADD TO CART",
				tagName: "BUTTON"
			}));
		saveToCart.click();

		var checkOutBtn = browser.$(Web.Button().buttonType("submit").name(/CHECKOUT.*/).tagName("BUTTON"))
		checkOutBtn.click();

		var nextBtn = browser.$(Web.Button({
				buttonType: "submit",
				name: "NEXT",
				tagName: "BUTTON"
			}));
		nextBtn.click();

		var payNowBtnMastercredit = browser.$(Web.Button({
				buttonType: "submit",
				name: "PAY NOW",
				tagName: "BUTTON"
			}));
		payNowBtnMastercredit.click();

		var thankYouForBuyingWith = browser.$(Web.Element({
				innerText: "Thank you for buying with Advantage",
				tagName: "SPAN"
			}));
		thankYouForBuyingWith.click();

		var shaharMyAccountMyOrders = browser.$(Web.Link({
				innerText: "Shahar My account My Orders Sign out ",
				tagName: "A"
			}));
		shaharMyAccountMyOrders.click();

		var signOut = browser.$(Web.Link({
				innerText: "Sign out",
				tagName: "LABEL"
			}));
		signOut.click();

		var dvantageDemo = browser.$(Web.Link({
				innerText: "dvantage DEMO ",
				tagName: "A"
			}));
		dvantageDemo.click();

/* <== Placeholder for next recorded step. Cut and paste this line to start recording from a different line in your code. Do not delete or duplicate this line.  ==> */

		whenDone(done);
	});

	afterEach(function(done){
		LFT.afterTest();

		if(browser){
			browser.close();
		}

		whenDone(done);
	});

	after(function(done){
		LFT.cleanup();

		whenDone(done);
	});
});
