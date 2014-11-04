angular.module('demoTestApp', []).
	controller('UserListCtrl', ['$scope','UserService', function ($scope, UserService) {
		$scope.userList = [];

		$scope.searchUsers = function () {
			UserService.getUserList(function (data) {
				$scope.userList = data;
			});
		};
	}]).
	factory('UserService', ['$http', function ($http) {
		return {
			getUserList : function (callback) {
				$http.get('sample.json')
					.success(callback);
			}
		};
	}]);