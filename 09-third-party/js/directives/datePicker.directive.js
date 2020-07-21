function datePicker($timeout, PikadayService) {
  return {
    scope: {
      date: '='
    },
    template: `
      <div>
        Isolate Date {{ date | date: 'MMM d, yyyy' }}
        <input type="text">
      </div>
    `,
    link: function ($scope, $element, $attribute) {
      var input = $element[0].querySelector('input');
      var picker = PikadayService({
        field: input,
        onSelect: function (date) {
          $timeout(function () {
            $scope.date = date;
            // $scope.$apply();
          });
        }
      });
      picker.setDate($scope.date);
    }
  }
}

angular
  .module('app')
  .directive('datePicker', datePicker);