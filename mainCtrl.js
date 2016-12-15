var app = angular.module('myApp', ["ngRoute"]);

app.controller('indexCtrl', ['$scope',function($scope) {
  $scope.teste = "testando";
}]);
