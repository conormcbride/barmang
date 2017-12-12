

require('angular');
require('angular-route');

var app = angular.module('BarManager', ['ngRoute']);
require('./controllers/index');
require('../../node_modules/bootstrap/dist/css/bootstrap.css' );
require('../../node_modules/font-awesome/css/font-awesome.css' );
require('../stylesheets/style.css');


app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'public/pages/home.ejs',
            controller  : 'mainController'
        })
        // route for the about page
        .when('/barlist', {
            templateUrl : 'public/pages/barlist.ejs',
            controller  : 'barlistcontroller'
        })
        // route for the about page
        .when('/stafflist', {
            templateUrl : 'public/pages/stafflist.ejs',
            controller  : 'stafflistController'
        })

        // route for the donate page
        .when('/addbar', {
            templateUrl : 'public/pages/addbar.ejs',
            controller  : 'addbarcontroller'
        })

        // route for the donations page
        .when('/addstaff', {
            templateUrl : 'public/pages/addstaff.ejs',
            controller  : 'addstaffcontroller'
        });
});
