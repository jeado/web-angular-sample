angular.module('userMgnt', ['ngCookies','ui.bootstrap']).
 factory('userSvc', ['$cookies', '$cookieStore', function($cookies, $cookieStore){
  return {
   getUsers : function () {
    var userList = [];
    angular.forEach($cookies, function(val, key) {
     userList.push($cookieStore.get(key));
    });
    return userList;
   },
   saveUser : function (user) {
     $cookieStore.put(user.email, user);
   },
   deleteUser : function (key) {
    $cookieStore.remove(key);
   }
  };
 }]).
 controller('mainCtrl', ['$scope','userSvc', function ($scope, userSvc) {
  $scope.userList = userSvc.getUsers();
  $scope.totalItems = $scope.userList.length;
  $scope.currentPage = 1;

  $scope.insert = function() {
     $scope.userList.push({ edit : true });
  };

  $scope.complete = function (user) {
     user.edit = false;
     userSvc.saveUser(user);
  };

  $scope.edit = function (user) {
    user.edit = true;
    userSvc.saveUser(user);
  };

  $scope.del = function (index) {
   userSvc.deleteUser($scope.userList[index].email);
   $scope.userList.splice(index, 1);
  } 
 }]);