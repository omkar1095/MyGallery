'use strict';

var app=angular.module('myApp.view1', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      })
      .when('/view1/:viewId', {
        templateUrl: 'view1/view1.html',
        controller: 'DisplayCtrl'
      });
}]);

app.controller('View1Ctrl', [function() {
}]);

app.controller('DisplayCtrl', [function($scope,$routeParams) {
    var myParam = $routeParams.viewId;
    $scope.newVar = myParam;
}]);