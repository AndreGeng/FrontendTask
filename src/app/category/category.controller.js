(function() {
  'use strict';
  angular.module('frontendTask')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController($scope, $stateParams) {
    $scope.categoryName = $stateParams.category;
  }
})();
