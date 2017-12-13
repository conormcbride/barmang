<<<<<<< HEAD


function addbarController($scope, $location, $http) {
=======
addbarcontroller = function($scope,$location, $http) {
>>>>>>> workingbranch

    $scope.message = ' Add Bar Page';

    $scope.addBar = function(newBar){
        $http.post('/bar', newBar).success(function(data) {
                $scope.bars = data;
                $location.path('/barlist');
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

<<<<<<< HEAD

};
module.exports = addbarController;
=======
}
module.exports = addbarcontroller;
>>>>>>> workingbranch
