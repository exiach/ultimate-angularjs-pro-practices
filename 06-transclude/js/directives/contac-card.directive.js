function contacCard() {
  return {
    transclude: {
      name: 'h1',
      desc: '?p'
    },
    template: `
      <div>
        <span ng-transclude="name">Contact</span>
        <div ng-transclude="desc">No description</div>
      </div>
    `
  };
}

angular
  .module('app')
  .directive('contacCard', contacCard)