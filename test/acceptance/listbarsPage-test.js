var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;

test.describe('Bar List page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('barlist');
    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/barlist');
        driver.wait(until.elementLocated(pageSelector), 2000);
    } );

    test.it( 'shows the main header', function() {
        driver.findElement(By.tagName('h1')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('List All Bars');
            });
        });
    } );

    test.it( 'displays the bars', function() {
        var bars = driver.findElements(By.tagName('tr'));
        //McBrides	Waterford	 100	  Remove
        bars
            .then(function( elements ) {
                return elements[0].findElement(By.name('earnings'));
            })
            .then(function(element) {
                return element.getText();
            })
            .then(function(text) {
                expect(text).to.equal('100');
            } );
     } );

    test.afterEach( function() {
        driver.manage().deleteAllCookies() ;
    } );

    test.after(function() {
        driver.quit();
    });
});
