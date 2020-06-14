function CounterController($scope) {
  this.count = 0;
  this.listCount = []
  this.increment = function () {
    this.count++;
    this.listCount.unshift({id: this.count});
  }
  this.decrement = function () {
    this.count--;
    this.listCount.unshift({id: this.count});
  }

  $scope.$watch(angular.bind(this, function () {
    return this.count;
  }), function(newValue, oldValue) {
     if (newValue !== oldValue)
      console.log(newValue, oldValue);
  });

  $scope.$watchCollection(angular.bind(this, function () {
    return this.listCount;
  }), function(newValue, oldValue) {
    if (newValue !== oldValue)
      console.log(newValue, oldValue);
  });
}

angular
  .module('app')
  .controller('CounterController', CounterController);