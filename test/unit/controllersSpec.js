'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {

  it("should do something", function() {

  });

});

describe('PhoneListCtrl', function() {
  beforeEach(module('phonecatApp'));

  it('should create phone model with 2 phones', inject(function($controller) {
    var scope = {};
    ctrl = $controller('PhoneListCtrl', {$scope: scope});

    9(scope.phones.length).toBe(2);

  }));

});
