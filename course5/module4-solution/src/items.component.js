(function () {
  'use strict';
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'html',
    bindings : {
      items: '<'
    }
  });
})();
