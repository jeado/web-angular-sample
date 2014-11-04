describe('서비스를 테스트한다.', function () {
  var UserListCtrl, scope, mockService;

  beforeEach(function () {
    module('demoTestApp');
  });

  it('UserService가 정의되어 있다.', inject(function(UserService) {
    expect(UserService).toBeDefined();
  }));

  it('UserService는 사용자 목록을 조회한다.', inject(function(UserService, $httpBackend) {
    var d = [];
    $httpBackend.when('GET','sample.json')
      .respond([{ name : "test" }]);

    UserService.getUserList(function (data) {
      d = data;
    });
    $httpBackend.flush();

    expect(d.length).toBe(1);
  }));
});