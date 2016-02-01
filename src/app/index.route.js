(function() {
  'use strict';

  angular
    .module('frontendTask')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        ncyBreadcrumb: {
          label: 'Home'
        }
      })
      .state('category', {
        url: '/home/:category',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryController',
        controllerAs: 'category',
        ncyBreadcrumb: {
          label: '{{categoryName}}',
          parent: 'home'
        }
      })
      .state('location', {
        url: '/home/:category/:location',
        templateUrl: 'app/location/location.html',
        controller: 'LocationController',
        controllerAs: 'location',
        ncyBreadcrumb: {
          label: '{{locationName}}',
          parent: 'category'
        }
      })
      .state('property', {
        url: '/home/:category/:location/:property',
        templateUrl: 'app/property/property.html',
        controller: 'PropertyController',
        controllerAs: 'property',
        ncyBreadcrumb: {
          label: '{{propertyName}}',
          parent: 'location'
        }
      });

    $urlRouterProvider.otherwise('/home');
  }

})();
