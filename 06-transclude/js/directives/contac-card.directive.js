function contacCard() {
  return {
    transclude: true,
    template: `
      <div>
        <h1>Contact</h1>
        <div ng-transclude></div>
      </div>
    `
  };
}

angular
  .module('app')
  .directive('contacCard', contacCard)