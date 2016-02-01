(function() {
  'use strict';
  angular.module('frontendTask')
    .controller('LocationController', LocationController);

  /** @ngInject */
  function LocationController($scope, $stateParams) {
    $scope.categoryName = $stateParams.category;
    $scope.locationName = $stateParams.location;
  }
})();
