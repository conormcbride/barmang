var app = angular.module('BarManager');

app.controller('barlistcontroller', ['$scope', '$location', '$http', require('./barlistcontroller')]);
app.controller('mainController', ['$scope', '$location', '$http', require('./maincontroller')]);
app.controller('stafflistcontroller', ['$scope', '$location', '$http', require('./stafflistcontroller')]);
app.controller('addbarcontroller',['$scope', '$location', '$http', require('./addbarcontroller')]);
app.controller('addstaffcontroller',['$scope', '$location', '$http', require('./addstaffcontroller')]);

