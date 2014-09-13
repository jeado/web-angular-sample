angular.module('routerApp', ['ngRoute'])
 .config(function ($routeProvider) {
  $routeProvider
    .when('/home', {templateUrl: 'views/home.html'})
    .when('/userList', {templateUrl: 'views/userList.html', controller: 'userListCtrl'})
    .when('/user/:userId', {templateUrl: 'views/userDetail.html', controller: 'userDetailCtrl'})
    .otherwise({redirectTo: '/home'});
  }).
  controller('userListCtrl',function($scope, $http, $location) {
    var reqPromise = $http.get('sample.json');

    reqPromise.success(function(data) {
      $scope.userList = data;
    });

    reqPromise.error(function(data) {
      console.error("Ajax 에러 발생");
    });

    $scope.goDetail = function(userId) {
      $location.url('/user/'+userId);
    };
  }).
  controller('userDetailCtrl',function($scope, $http, $routeParams, $location) {
    var id = $routeParams.userId;
    var reqPromise = $http.get('sample-'+id+'.json');

    reqPromise.success(function(data) {
      $scope.user = data;
    });

    reqPromise.error(function(data) {
      console.error("Ajax 에러 발생");
    });

    $scope.back = function() {
      $location.url('/userList')
    };
  });