var app = angular.module('BarManager');


app.controller('mainController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'Bar manager!!';
}
]);

module.exports = mainController;