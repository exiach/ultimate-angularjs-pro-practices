function counter() {
  return {
    scope: {},
    bindToController: {
      count: '=',
    },
    template: `
      <h3>Counter: {{ counter.count }}</h3>
      <a href="" ng-click="counter.increment()">increment</a>
      -
      <a href="" ng-click="counter.decrement()">decrement</a>
    `,
    controller: 'CounterController as counter'
  };
}

angular
  .module('app')
  .directive('counter', counter);
