var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;
var noBars;
var navBarSelector ;

test.describe('add Bar Page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('addBar');
        driver.get('http://localhost:3000/#/addbar');
        driver.wait(until.elementLocated(By.tagName('h1')), 20000);
        driver.findElements(By.tagName('tr'))
            .then( function( bars ) {
                noBars = bars.length;
            });
    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/addbar');
        driver.wait(until.elementLocated(pageSelector), 20000);
        navBarSelector = By.tagName('nav');
    } );
    test.it( 'shows the nav bar on Add Bar Page', function() {
        driver.findElement(navBarSelector)
            .then(function(element) {
                expect(element).to.not.equal(null );
            });
    } );

    test.it( 'shows the main header', function() {
        driver.findElement(By.tagName('h1')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('Add Bar');
            });
        });
    } );

    test.it( 'accepts a new bar and displays in list', function() {
        var input = driver.findElement(By.id('barName'));
        input
            .then(function() {
                return driver.findElement(By.id('barName'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('McBrides');
            } )
        var input = driver.findElement(By.name('location'));
        input
            .then(function() {
                return driver.findElement(By.id('location'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('Waterford');
            } )
        var input = driver.findElement(By.id('earnings'));
        input
            .then(function() {
                return driver.findElement(By.id('earnings'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('100');
            })

            .then(function() {
                return driver.findElement(By.id('submit'));
            })
            .then(function(element) {
                element.submit();
            } )

            .then(function() {
                driver.wait(until.elementLocated(By.id('barlist')),2000);
                return driver.findElements(By.tagName('tr'));
            })
            .then( function( bars ) {
                expect(bars.length).to.not.equal(noBars + 1) ;
                return bars;
            })
    } );

    test.afterEach( function() {
        driver.manage().deleteAllCookies() ;
    } );

    test.after(function() {
        driver.quit();
    });
});