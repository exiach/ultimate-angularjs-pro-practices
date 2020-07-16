function tab() {
  return {
    scope: {},
    transclude: true,
    template: `
      <div ng-if="tab.selected" ng-transclude>

      </div>
    `,
    require: '^tabs',
    link: function ($scope, $element, $attribute, $crtl) {
      $scope.tab = {
        selected: false,
        label: $attribute.label
      }
      $crtl.addTab($scope.tab);
    }
  }
}

angular
  .module('app')
  .directive('tab', tab);
