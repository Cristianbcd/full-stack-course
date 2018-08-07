(function() {
    'use strict';

    angular.module('public')
    .controller('InfoController', InfoController);

    InfoController.$inject = ['UserInfoService'];
    function InfoController(UserInfoService) {
        var ctrl = this;
        ctrl.userInfo = UserInfoService.getUserInfo();
        console.log('instantiated InfoController:', ctrl.userInfo);

    }
})();