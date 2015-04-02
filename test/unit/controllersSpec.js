
describe('PhoneListCtrl', function() {
  beforeEach(module('phonecatApp'));

  it('should create phone model with 2 phones', inject(function($controller) {
    var scope = {};
    ctrl = $controller('PhoneListCtrl', {$scope: scope});

    expect(scope.phones.length).toBe(3);

  }));

});
