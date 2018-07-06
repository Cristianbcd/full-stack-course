(function () {
  'use strict';
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
  .directive('foundItems', FoundItemsDirective)
	.service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

  NarrowItDownController.$inject = ['MenuSearchService'];
  MenuSearchService.$inject = ['$http', 'ApiBasePath'];

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var list = this;
  }

  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (response) {
        var foundItems = response.data.menu_items.filter(item => item.description.toLowerCase().includes(searchTerm.toLowerCase()));
        return foundItems;
      });
    }
  }

  function NarrowItDownController(MenuSearchService) {
    var narrowItDownController = this;
    narrowItDownController.searchTerm = "";
    narrowItDownController.search = function () {
      narrowItDownController.found = [];
      if(narrowItDownController.searchTerm != "") {
        var promise = MenuSearchService.getMatchedMenuItems(narrowItDownController.searchTerm);
        promise.then(function (response) {
          narrowItDownController.found = response;
        }).catch(function (error) {
          console.log("Something went wrong.");
        });
      }
    }

    narrowItDownController.removeItem = function (index) {
      this.found.splice(index, 1);
    }
  }
})();
