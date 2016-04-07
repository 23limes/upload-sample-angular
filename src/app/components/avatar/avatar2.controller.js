(function() {
  'use strict';

  angular
    .module('uploadSampleAngular')
    .controller('Avatar2Controller', AvatarController);

  /** @ngInject */
  function AvatarController($modalInstance, toastr) {
    var vm = this;

    vm.ok = function () {
      if(vm.picFile.$error){
        toastr.error("Please fix your image file errors before continuing, thank you.", "Error");
      }
      else{
        $modalInstance.close(vm.croppedDataUrl);
      }
    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }
})();