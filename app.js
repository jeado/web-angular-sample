function mainCtrl($scope) {
  $scope.userList = [
    { name : '가인', email : 'gain@naver.com', regDate : '2014-06-30' }
  ];

	$scope.insert = function() {
    $scope.userList.push({ edit : true });
	};

	$scope.complete = function (user) {
    user.edit = false;
	};

	$scope.edit = function (user) {
    user.edit = true;
	};

	$scope.del = function (index) {
		$scope.userList.splice(index, 1);
	}
	
}