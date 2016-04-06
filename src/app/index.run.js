(function() {
  'use strict';

  angular
    .module('uploadSampleAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
