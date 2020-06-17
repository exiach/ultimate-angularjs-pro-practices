function MainController() {
  this.firts = 3;
  this.second = 19;
  this.third = 1;
}

angular
  .module('app')
  .controller('MainController', MainController);
