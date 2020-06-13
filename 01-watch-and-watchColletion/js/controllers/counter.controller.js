function CounterController($scope) {
  this.count = 0;
  this.increment = function () {
    this.count++;
  }
  this.decrement = function () {
    this.count--;
  }

  $scope.$watch(angular.bind(this, function () {
    return this.count;
  }), function(newValue, oldValue) {
    console.log(newValue, oldValue);
  });
}

angular
  .module('app')
  .controller('CounterController', CounterController);