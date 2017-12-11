var app = angular.module('BarManager');

app.controller('stafflistController', ['$scope', '$http', function($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Staff List!';

    findAll();

    function findAll() {
        $http.get('/staff')
            .success(function (data) {
                $scope.staffs = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
}
]);