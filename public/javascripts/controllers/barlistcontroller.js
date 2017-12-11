var app = angular.module('BarManager');

app.controller('barlistController', ['$scope', '$http', function($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Bar List!';

    findAll();

    function findAll() {
        $http.get('/bar')
            .success(function (data) {
                $scope.bars = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
}
]);