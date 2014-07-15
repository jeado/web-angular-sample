angular.module('userMgnt', ['ngCookies']).
	controller('mainCtrl', ['$scope','$cookies','$cookieStore', function ($scope, $cookies, $cookieStore) {

		function gerUsers() {
			var userList = [];
			angular.forEach($cookies, function(val, key) {
				userList.push($cookieStore.get(key));
			});
			return userList;
		}

		$scope.userList = gerUsers();

		$scope.insert = function() {
	    $scope.userList.push({ edit : true });
		};

		$scope.complete = function (user) {
	  user.edit = false;
	  $cookieStore.put(user.email, user);
		};

		$scope.edit = function (user) {
	  user.edit = true;
	  $cookieStore.put(user.email, user);
		};

		$scope.del = function (index) {
			$cookieStore.remove($scope.userList[index].email);
			$scope.userList.splice(index, 1);
		}	
	}]);