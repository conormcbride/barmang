<<<<<<< HEAD


function addstaffController($scope, $location, $http) {
=======
>>>>>>> workingbranch

 addstaffcontroller = function($scope,$location, $http){
    //
    $scope.message = ' Add Staff Page';
    //
    $scope.addStaff = function(newStaff){
        $http.post('/staff', newStaff).success(function(data) {
            $scope.bars = data;
            $location.path('/stafflist');
            console.log(data);
        })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


<<<<<<< HEAD
};

module.exports = addstaffController;
=======
}
module.exports = addstaffcontroller;
>>>>>>> workingbranch
