var app = angular.module('BarManager');

app.controller('addbarController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'Add Bar!';
}
]);