(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['promise'];
  function ItemsController(promise) {
    var itemDetail = this;
    itemDetail.items = promise.data;
    console.log(itemDetail.items);
  }
})();
