angular.module('mobileSample', ['ngTouch','ngRoute','mobile-angular-ui'])
 .config(function ($routeProvider) {
  $routeProvider
   .when('/', {templateUrl: 'views/main.tpl.html', controller: 'mainCtrl'})
   .when('/list', {templateUrl: 'views/list.tpl.html', controller: 'listCtrl'})
   .otherwise({redirectTo: '/'});
  })
 .controller('mainCtrl', ['$scope','$location', function ($scope, $location) {
  $scope.go = function(loc) {
   $location.url(loc);
  };
 }])
 .controller('listCtrl', ['$scope', function ($scope) {
  var i=1, arr=[];
  for (; i <= 30; i++) {
   arr.push({title:i+"회 연재"});
  };
  $scope.tutorials = arr;
 }]);