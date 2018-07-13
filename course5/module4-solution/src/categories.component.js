(function () {
  'use strict';
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'html',
    bindings : {
      items: '<'
    }
  });
})();
