(function () {
	'use strict';
	angular.module('public')
	.controller('SignUpController', SignUpController);

	SignUpController.$inject = ['UserInfoService', 'MenuService', 'ApiPath'];
	function SignUpController(UserInfoService, MenuService, ApiPath) {
		var ctrl = this;
		ctrl.validShortCode = false;
		ctrl.user = {};
		ctrl.user.saved = false;

		ctrl.setUserInfo = function() {
			ctrl.validateShortCode(ctrl.user.favoriteDish);
		};

		ctrl.validateShortCode = function(code) {
			MenuService.getMenuItem(code.trim()).then(
                function(response) {
                    ctrl.user.MenuItem = response.data;
                    UserInfoService.setUserInfo(ctrl.user);
                    ctrl.validShortCode = true;
                    ctrl.user.saved = true;
                },
                function(response) {
                    ctrl.validShortCode = false;
                    ctrl.user.saved = false;
                }
            );
		}
	}
})();