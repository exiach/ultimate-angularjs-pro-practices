function ErrorMessage() {
  this.messages = [
    {
      message: 'Error ocurred',
      type: 'error'
    },
    {
      message: 'warning is appear',
      type: 'warning'
    },
    {
      message: 'Invalida text',
      type: 'invalid'
    }
  ];
}

angular
  .module('app')
  .controller('ErrorMessage', ErrorMessage);
