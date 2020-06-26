function errorMessage() {
  return {
    restrict: 'A',
    // link: function($scope, $element, $attribute) {
    //   $element.addClass('error');
    //   $element.addClass('error--' + $attribute.type);
    //   console.log('wow');
    // }
    compile: function($element, $attribute) {
      $element.addClass('error');
      console.log('start')
      // return {
      //   pre: function($scope, $element, $attribute) {
      //     // Acces the elment to child elements  that are NOT linked
      //   },
      //   post: function($scope, $element, $attribute) {
      //     // access the elment to child elements  that are linked
      //     $element.addClass('error--' + $attribute.type);
      //     console.log('end');
      //   }
      // }
      return function ($scope, $element, $attribute) {
        $element.addClass('error--' + $attribute.type);
        console.log('end');
      }
    }
  }
}

angular
  .module('app')
  .directive('errorMessage', errorMessage);