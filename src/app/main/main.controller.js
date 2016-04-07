(function() {
  'use strict';

  angular
    .module('uploadSampleAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, toastr, $modal, Upload, CLOUDINARY, spinnerService, localStorageService) {
    var vm = this;

    vm.showAvatarUpload = function(e){
      e.preventDefault();

      //show the modal screen

      //listen for result and upload the file, if any

    };
  }
})();
