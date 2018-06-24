(function () {
	'use strict';
	angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
	
	LunchCheckController.$inject = ['$scope', '$filter'];

	function LunchCheckController($scope, $filter){

		$scope.listOfFood = "";

		$scope.checkIfTooMuch = function () {

			var arrayListOfFood = $scope.listOfFood.split(',');
			if(arrayListOfFood.length == 1 && arrayListOfFood[0] == ""){
				$scope.message = "Please enter data first";
			} else {
				if(arrayListOfFood.length <= 3){
					$scope.message = "Enjoy!";
				} else {
					$scope.message = "Too much!";
				}
			}
		}
	}
})();