describe('컨트롤러를 테스트한다.', function () {
  var UserListCtrl, scope, mockService;

  beforeEach(function () {
    module('demoTestApp');

    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      mockService = {
        getUserList: function(callback){
          callback.call(null,[{name : "test"}]);
        }
      };
      UserListCtrl = $controller('UserListCtrl', {
        $scope : scope,
        UserService : mockService
      });
    });
  });

  it('UserListCtrl가 정의되어 있다.', function() {
    expect(UserListCtrl).toBeDefined();
  });

  it('UserList에 userList가 배열로 정의되어 있다.',function () {
    expect(scope.userList).toBeDefined();
  });

  it('사용자목록을 조회한다.', function () {
    scope.searchUsers();
    expect(scope.userList.length).toEqual(1);
  });
});
