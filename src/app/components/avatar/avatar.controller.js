(function() {
  'use strict';

  angular
    .module('uploadSampleAngular')
    .controller('AvatarController', AvatarController);

  /** @ngInject */
  function AvatarController($modalInstance) {
    var vm = this;

    vm.ok = function () {

      //check for validation errors

      //if all good, close modal and return image url

    };

    vm.cancel = function () {
      //dismiss the modal
    };
  }
})();