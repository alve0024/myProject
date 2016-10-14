'use strict';

describe('Controller: Alve0024Ctrl', function () {

  // load the controller's module
  beforeEach(module('myProjectApp'));

  var Alve0024Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Alve0024Ctrl = $controller('Alve0024Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Alve0024Ctrl.awesomeThings.length).toBe(3);
  });
});
