function counter() {
  return {
    template: `
      <div class="counter">
        <h3>Counter: {{counter.count}}</h3>
        <div>
          <a href="" ng-click="counter.increment()">increment</a>
          -
          <a href="" ng-click="counter.decrement()">decrement</a>
          </br>
          <a href="" ng-click="counter.updateNameFood()">Update Name</a>
        </div>
      </div>
    `,
    link: function(scope, element, attr) {
      attr.$observe('name', function (value) {
        if (value === 'Blue food') {
          attr.$updateClass('blue-food', 'red-food');
        }
        if (value === 'red food') {
          attr.$updateClass('red-food','blue-food');
        }
      });
    }
  };
}

angular
  .module('app')
  .directive('counter', counter);