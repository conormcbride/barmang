
require('angular');
require('angular-route');
var app = angular.module('BarManager', ['ngRoute']);
require('./controllers/index');


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
            controller  : 'barlistController'
        })
        // route for the about page
        .when('/stafflist', {
            templateUrl : 'public/pages/stafflist.ejs',
            controller  : 'stafflistController'
        })

        // route for the donate page
        .when('/addbar', {
            templateUrl : 'public/pages/addbar.ejs',
            controller  : 'addbarController'
        })

        // route for the donations page
        .when('/addstaff', {
            templateUrl : 'public/pages/addstaff.ejs',
            controller  : 'addstaffController'
        });
});
