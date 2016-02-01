(function() {
  'use strict';
  angular.module('frontendTask')
    .controller('PropertyController', PropertyController);

  /** @ngInject */
  function PropertyController($scope, $stateParams) {
    $scope.categoryName = $stateParams.category;
    $scope.locationName = $stateParams.location;
    $scope.propertyName = $stateParams.property;

    var vm = this;
    vm.roomTypes = ['Deluxe', 'Shared', 'Animal Friendly', 'Super Deluxe', 'Another room type'];
    vm.selectedRoom = 'Animal Friendly';
    vm.roomSelected = function(room) {
      vm.selectedRoom = room;
    }

    vm.friendsData = {
      "deluxe": {
        "friends": [
          "Bob Smith",
          "Jane Doe",
          "Bubba Hyde",
          "Betsy Toheavens"
        ]
      },
      "shared": {
        "friends": [
          "Bob Smith"
        ]
      },
      "animal-friendly": {
        "friends": [
          "Bob Smith",
          "Jane Doe",
          "Bubba Hyde"
        ]
      },
      "super-deluxe": {
        "friends": [
          "Bob Smith",
          "Jane Doe"
        ]
      },
      "another-room-type": {
        "friends": []
      }
    }
  }
})();
