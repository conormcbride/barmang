addbarcontroller = function($scope,$location, $http) {

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
    // $scope.addBar =  function hello() {
    //
    //     console.log("Hello WOrld");
    //
    // }

}
module.exports = addbarcontroller;