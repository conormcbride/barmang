var app = angular.module('BarManager');

app.controller('barlistController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'Bar List!';
}
]);