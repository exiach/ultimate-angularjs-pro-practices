function counter() {
  return {
    template: `
      <a>increment</a>
      -
      <a>decrement</a>
    `,
    link: function(scope, element, attr) {

    }
  };
}

angular
  .module('app')
  .directive('counter', counter);