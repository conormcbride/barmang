var app = angular.module('BarManager');

<<<<<<< HEAD
app.controller('barlistcontroller', ['$scope', '$location', '$http', require('./barlistcontroller')]);
app.controller('mainController', ['$scope', '$location', '$http', require('./maincontroller')]);
app.controller('stafflistcontroller', ['$scope', '$location', '$http', require('./stafflistcontroller')]);
app.controller('addbarcontroller',['$scope', '$location', '$http', require('./addbarcontroller')]);
app.controller('addstaffcontroller',['$scope', '$location', '$http', require('./addstaffcontroller')]);
=======
app.controller('barlistcontroller', require('./barlistcontroller'));
app.controller('mainController', require('./maincontroller'));
app.controller('stafflistController', require('./stafflistcontroller'));
app.controller('addbarcontroller',require('./addbarcontroller'));
app.controller('addstaffcontroller', require('./addstaffcontroller'));
>>>>>>> workingbranch

