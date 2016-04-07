(function() {
  'use strict';

  angular
    .module('uploadSampleAngular')
    .controller('Main2Controller', MainController);

  /** @ngInject */
  function MainController($log, toastr, $modal, Upload, CLOUDINARY, spinnerService, localStorageService) {
    var vm = this;

    //load any avatar we may have in local storage
    vm.avatar_path = localStorageService.get('avatar');

    vm.showAvatarUpload = function(e){
      e.preventDefault();
      var modalInstance = $modal.open({
        templateUrl: 'app/components/avatar/avatar2.html',
        controller: 'Avatar2Controller',
        controllerAs: 'avatar',
        backdrop : 'static',
        keyboard :false
      });

      modalInstance.result.then(
        function (imagePath) {
          if(imagePath){
            var file = Upload.dataUrltoBlob(imagePath);
            if(file) {
              spinnerService.show("avatarSpinner");

              Upload.upload({
                url: CLOUDINARY.upload_endpoint,
                data: {
                  file: file,
                  upload_preset: CLOUDINARY.upload_preset
                }
              })
              .success(function (data) {
                vm.avatar_path = data.url;
                localStorageService.set('avatar', vm.avatar_path);
              })
              .error(function (data, status) {
                $log.debug(data);
                $log.debug(status);
                toastr.error("Sorry, we could not upload your profile photo.", "Error");
              })
              .finally(function(){ spinnerService.hide("avatarSpinner"); });
            }
          }
        },
        function () {
          //nothing to do here...
        });
    };
  }
})();
