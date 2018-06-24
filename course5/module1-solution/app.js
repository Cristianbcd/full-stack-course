(function () {
	'use strict';
	angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
	
	LunchCheckController.$inject = ['$scope', '$filter'];

	function LunchCheckController($scope, $filter){

		$scope.listOfFood = "";

		$scope.checkIfTooMuch = function () {

			var arrayListOfFood = $scope.listOfFood.split(',');
			console.log(arrayListOfFood.length);
			console.log(arrayListOfFood.length);
			if(arrayListOfFood.length == 1 && arrayListOfFood[0] != ""){
				if(arrayListOfFood.length <= 3){
					$scope.message = "Enjoy!";
				} else {
					$scope.message = "Too much!";
				}
			} else {
				$scope.message = "Please enter data first";
			}
		}
	}
})();