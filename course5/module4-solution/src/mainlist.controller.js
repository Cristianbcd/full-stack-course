(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MainListController', MainListController);

  MainListController.$inject = ['promise'];
  function MainListController(promise) {
    var mainList = this;
    mainList.items = promise.data
  }
})();
