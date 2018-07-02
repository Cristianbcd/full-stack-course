(function () {
	'use strict';
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

	function ShoppingListCheckOffService() {
		var service = this;

		var toBuyListItems = [
			{ name: "Cookies", quantity: 10},
			{ name: "Chocolates", quantity: 5},
			{ name: "Candies", quantity: 2},
			{ name: "Cakes", quantity: 3},
			{ name: "Ice cream", quantity: 7},
			{ name: "Chips", quantity: 8},];

		var boughtItems = [];

		service.getToBuyListItems = function () {
			return toBuyListItems
		}

		service.getBoughtItems = function () {
			return boughtItems
		}

		service.boughtItem = function (index) {
			boughtItems.push(toBuyListItems[index]);
			toBuyListItems.splice(index, 1);
		}
	}

	function ToBuyController(ShoppingListCheckOffService) {
		var toBuyList = this;
		toBuyList.items = ShoppingListCheckOffService.getToBuyListItems();

		toBuyList.removeItem = function (index) {
			ShoppingListCheckOffService.boughtItem(index);
		}

}

	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var alreadyBoughtList = this;
		alreadyBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

})();
