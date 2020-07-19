function uploadFile() {
  return {
    scope: {},
    template: `
      <div>
        <div class="upload-content">
          <button ng-click="upload.uploadFile()">Upload</button>
        </div>
        <ul>
          <li ng-repeat="file in upload.files">
            {{ file.name }}
          </li>
        </ul>
      </div>
    `,
    controller: function () {
      var ctrl = this;
      this.files = [];
      ctrl.uploadFile = function () {
        if (!ctrl.files.length) {
          return;
        }
        console.log(ctrl.files);
      };
      ctrl.registerFile = function (files) {
        Array.prototype.push.apply(ctrl.files, files);
      }
    },
    controllerAs: 'upload',
    link: function ($scope, $element, $attr, $ctrl) {
      var upload = $element[0].querySelector('.upload-content');

      function onDrop(e) {
        if (e.dataTransfer && e.dataTransfer.files) {
          $ctrl.registerFile(e.dataTransfer.files);
          $scope.$apply();
        }
      }

      function preventDefault(e) {
        e.preventDefault();
      }
      upload.addEventListener('drop', onDrop, false);
      upload.addEventListener('dragenter', preventDefault, false);
      upload.addEventListener('dragleve', preventDefault, false);
      upload.addEventListener('dragover', preventDefault, false);
      upload.addEventListener('drop', preventDefault, false);
    }
  };
}

angular
  .module('app')
  .directive('uploadFile', uploadFile);
