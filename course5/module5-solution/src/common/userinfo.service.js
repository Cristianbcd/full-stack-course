(function () {
    "use strict";

    angular.module('common')
    .service('UserInfoService', UserInfoService);

    function UserInfoService() {
        var service = this;
        service.userInfo = {};

        service.setUserInfo = function(userInfo) {
            service.userInfo = userInfo;
            console.log('UserInfo:', service.userInfo);
        };

        service.getUserInfo = function () {
            return service.userInfo;
        };
    }
})();
