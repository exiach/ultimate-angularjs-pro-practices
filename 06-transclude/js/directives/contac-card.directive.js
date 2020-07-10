function contacCard() {
  return {
    transclude: true,
    template: `
      <div>
        <span>Contact</span>
        <div></div>
      </div>
    `,
    link: function ($scope, $element, $attribute, $ctrl, $transclude) {
      var div = $element.find('div');
      var span = $element.find('span');
      var cloned = $transclude(function (element) {
        element[1].textContent = element[1].textContent.toUpperCase();
      });
      console.log(cloned);
      span.append(cloned[1]);
      div.append(cloned[3]);
      
    }
  };
}

angular
  .module('app')
  .directive('contacCard', contacCard)