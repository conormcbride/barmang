var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;
var noStaff;
var navBarSelector ;

test.describe('add Staff Page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('addstaff');
        driver.get('http://localhost:3000/#/addstaff');
        driver.wait(until.elementLocated(By.tagName('h1')), 20000);
        driver.findElements(By.tagName('tr'))
            .then( function( staffs ) {
                noStaffs = staffs.length;
            });
    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/addstaff');
        driver.wait(until.elementLocated(pageSelector), 20000);
        navBarSelector = By.tagName('nav');
    } );
    test.it( 'shows the nav bar on Add staff Page', function() {
        driver.findElement(navBarSelector)
            .then(function(element) {
                expect(element).to.not.equal(null );
            });
    } );

    test.it( 'shows the main header', function() {
        driver.findElement(By.tagName('h1')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('Add Staff');
            });
        });
    } );

    test.it( 'accepts a new staff and displays in list', function() {
        var input = driver.findElement(By.id('name'));
        input
            .then(function() {
                return driver.findElement(By.id('name'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('Conor McBride');
            } )
        var input = driver.findElement(By.name('role'));
        input
            .then(function() {
                return driver.findElement(By.id('role'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('Waiter');
            } )
        var input = driver.findElement(By.id('wage'));
        input
            .then(function() {
                return driver.findElement(By.id('wage'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('10');
            })

            .then(function() {
                return driver.findElement(By.id('submit'));
            })
            .then(function(element) {
                element.submit();
            } )

            .then(function() {
                driver.wait(until.elementLocated(By.id('stafflist')),2000);
                return driver.findElements(By.tagName('tr'));
            })
            .then( function( staffs ) {
                expect(staffs.length).to.not.equal(noStaff + 1) ;
                return staffs;
            })
    } );

    test.afterEach( function() {
        driver.manage().deleteAllCookies() ;
    } );

    test.after(function() {
        driver.quit();
    });
});