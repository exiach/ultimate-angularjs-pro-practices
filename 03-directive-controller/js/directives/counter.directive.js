function counter() {
  return {
    template: `
      <div>
        <h3>Counter {{counter.count}}</h3>
        <a href="" ng-click="counter.increment()">increment</a>
        -
        <a href="" ng-click="counter.decrement()">decrement</a>
      </div>
    `,
    controller: 'CounterController as counter'
  };
}

angular
  .module('app')
  .directive('counter', counter);