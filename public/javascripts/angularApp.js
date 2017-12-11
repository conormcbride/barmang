var app = angular.module('BarManager', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.ejs',
            controller  : 'mainController'
        })
        // route for the about page
        .when('/barlist', {
            templateUrl : 'pages/barlist.ejs',
            controller  : 'barlistController'
        })
        // route for the about page
        .when('/stafflist', {
            templateUrl : 'pages/stafflist.ejs',
            controller  : 'stafflistController'
        })

        // route for the donate page
        .when('/addbar', {
            templateUrl : 'pages/addbar.ejs',
            controller  : 'addbarController'
        })

        // route for the donations page
        .when('/addstaff', {
            templateUrl : 'pages/addstaff.ejs',
            controller  : 'addstaffController'
        });
});
