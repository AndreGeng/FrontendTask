(function() {
  'use strict';

  angular
    .module('frontendTask')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
