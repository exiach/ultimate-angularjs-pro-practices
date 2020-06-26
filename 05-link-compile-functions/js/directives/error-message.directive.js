function errorMessage() {
  return {
    restrict: 'A',
    link: function($scope, $element, $attribute) {
      $element.addClass('error');
      $element.addClass('error--' + $attribute.type);
      console.log('wow');
    }
  }
}

angular
  .module('app')
  .directive('errorMessage', errorMessage);