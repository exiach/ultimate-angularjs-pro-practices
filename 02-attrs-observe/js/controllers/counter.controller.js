function CounterController() {
  this.count = 0;
  this.nameFood = 'Blue food';

  this.updateNameFood = function () {
    this.nameFood = 'red food';
  }

  this.increment = function () {
    this.count++;
  }

  this. decrement = function () {
    this.count--;
  }
}

angular
  .module('app')
  .controller('CounterController', CounterController);