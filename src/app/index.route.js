(function() {
  'use strict';

  angular
    .module('uploadSampleAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'Main2Controller',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
