var app = angular.module('BarManager');

app.controller('stafflistController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'Staff List!';
}
]);