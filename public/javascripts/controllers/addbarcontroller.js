var app = angular.module('BarManager');

app.controller('addstaffController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'Add Staff!';
}
]);